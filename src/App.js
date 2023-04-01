import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Adminportal from './Components/Admin/Adminportal';
import Portal from './Components/Portal';
import About from './Pages/About/About';
import AdminBooking from './Pages/Admin/Booking/AdminBooking';
import AddRoom from './Pages/Admin/Rooms/AddRoom';
import AdminRoom from './Pages/Admin/Rooms/AdminRoom';
import Users from './Pages/Admin/Users/Users';
import Userview from './Pages/Admin/Users/Userview';
import History from './Pages/History/History';
import Login from './Pages/Login/Login';
import Payment from './Pages/Payment/Payment';
import Register from './Pages/Register/Register';
import Room from './Pages/Room/Room';
import User from './Pages/User/User';
import Views from './Pages/Views/Views';
import EditRoom from './Pages/Admin/Rooms/EditRoom';
import MoreDetails from './Pages/Admin/Booking/MoreDetails';


function App() {
  return (
    <BrowserRouter>
    <Routes>
    
      <Route path='/' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/home' element={<About/>}/>
      <Route path='/topbar' element={<Portal/>}>
        <Route path='room' element={<Room/>}></Route>
        <Route path='view/:id' element={<Views/>}></Route>
        <Route path='userprofile' element={<User/>}></Route>
        <Route path='payment/:id' element={<Payment/>}></Route>
        <Route path="history" element={<History/>}></Route>
        <Route path='moredetails/:id' element={<MoreDetails/>}></Route>
      </Route>
      <Route path='/admintop' element={<Adminportal/>}>
        <Route path='users' element={<Users/>}></Route>
        <Route path='adminuserview/:id' element={<Userview/>}></Route>
        <Route path='rooms' element={<AdminRoom/>}></Route>
        <Route path='view/:id' element={<Views/>}></Route>
        <Route path='addroom' element={<AddRoom/>}></Route>
        <Route path='bookings' element={<AdminBooking/>}></Route>
        <Route path='editroom/:id' element={<EditRoom/>}></Route>
        <Route path='moredetails/:id' element={<MoreDetails/>}></Route>
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
