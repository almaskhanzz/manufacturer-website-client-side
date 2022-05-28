import React from 'react';

const UserRow = ({ user, index }) => {
    const { _id, email } = user;
    return (
        <tr>
            <th>{index + 1}</th>
            <th>{_id}</th>
            <td>{email}</td>
            <td><button className="btn btn-xs">Remove User</button></td>
        </tr>
    );
};

export default UserRow;