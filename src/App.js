import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './Pages/Blogs/Blogs';
import AddProduct from './Pages/Dashboard/AddProduct';
import AddReview from './Pages/Dashboard/AddReview';
import Dashboard from './Pages/Dashboard/Dashboard';
import ManageOrders from './Pages/Dashboard/ManageOrders';
import ManageProducts from './Pages/Dashboard/ManageProducts';
import MyOrders from './Pages/Dashboard/MyOrders';
import MyProfile from './Pages/Dashboard/MyProfile';
import Users from './Pages/Dashboard/Users';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import RequireAdmin from './Pages/Login/RequireAdmin';
import RequireAuth from './Pages/Login/RequireAuth';
import ResetPassword from './Pages/Login/ResetPassword';
import Signup from './Pages/Login/Signup';
import MyPortfolio from './Pages/MyPortfolio/MyPortfolio';
import Purchase from './Pages/Purchase/Purchase';
import Navbar from './Pages/Shared/Navbar';
import NotFound from './Pages/Shared/NotFound';

function App() {
  return (
    <div >
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/myPortfolio' element={<MyPortfolio />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/purchase/:purchaseId' element={
          <RequireAuth>
            <Purchase />
          </RequireAuth>
        } />
        <Route path="/dashboard" element={<RequireAuth><Dashboard /></RequireAuth>}>
          <Route index element={<MyOrders></MyOrders>}></Route>
          <Route path="addReview" element={<AddReview></AddReview>}></Route>
          <Route path="myProfile" element={<MyProfile></MyProfile>}></Route>
          <Route path="users" element={
            <RequireAdmin>
              <Users />
            </RequireAdmin>
          }>
          </Route>
          <Route path="mangeOrders" element={
            <RequireAdmin>
              <ManageOrders />
            </RequireAdmin>
          }>
          </Route>
          <Route path="addProducts" element={
            <RequireAdmin>
              <AddProduct />
            </RequireAdmin>
          }>
          </Route>
          <Route path="manageProducts" element={
            <RequireAdmin>
              <ManageProducts />
            </RequireAdmin>
          }>
          </Route>
        </Route>
        <Route path='/login' element={<Login />} />
        <Route path='/resetPassword' element={<ResetPassword />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='*' element={<NotFound />} />
      </Routes>

    </div>
  );
}

export default App;
