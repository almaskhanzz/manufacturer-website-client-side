import React from 'react';
const UserRow = ({ user, index, refetch }) => {
    const { _id, email, role } = user;
    const makeAdmin = () => {
        fetch(`https://mysterious-woodland-46458.herokuapp.com/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    alert(`Sorry! You cant make an Admin`);
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    alert(`Successfully made an Admin`);
                }
            })
    }

    return (
        <tr>
            <th>{index + 1}</th>
            <th>{_id}</th>
            <td>{email}</td>
            <td>{role !== 'admin' && <button onClick={makeAdmin} className="btn btn-xs">Make Admin</button>}</td>
        </tr>
    );
};

export default UserRow;