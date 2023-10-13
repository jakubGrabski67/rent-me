import { Routes, Route, Navigate } from 'react-router-dom'

//import Homepage from '../components/HomepagePages/Homepage/Homepage'
import Shop from '../components/HomepagePages/Shop'
import Cart from '../components/HomepagePages/Cart'
import CarDetails from '../components/HomepagePages/CarDetails'
import Checkout from '../components/HomepagePages/Checkout'
import Login from '../components/HomepagePages/Login'
import Register from '../components/HomepagePages/Register'

import DashboardHomepage from '../components/Dashboard/DashboardPages/DashboardHomepage'
import DashboardRenting from '../components/Dashboard/DashboardPages/DashboardRenting'
import DashboardSettings from '../components/Dashboard/DashboardPages/DashboardSettings'
import DashboardSellCar from '../components/Dashboard/DashboardPages/DashboardSellCar'
import DashboardFlota from '../components/Dashboard/DashboardPages/DashboardFlota'
import DashboardCustomers from '../components/Dashboard/DashboardPages/DashboardCustomers'
import DashboardReservations from '../components/Dashboard/DashboardPages/DashboardReservations'
import DashboardDocumentation from '../components/Dashboard/DashboardPages/DashboardDocumentation'
import DashboardAddCar from '../components/Dashboard/DashboardPages/DashboardAddCar'
//import NewCarForm from '../features/Cars/NewCarForm'

const Routers = () => {
  return ( 
    <Routes>

      {/*nie korzystam z tego??? */}
      <Route path="/" element={<Navigate to='homepage'/>}/>
      
      <Route path='homepage/shop' element={<Shop/>}/>
      <Route path='homepage/shop/:id' element={<CarDetails/>}/>
      <Route path='homepage/cart' element={<Cart/>}/>
      {/*<Route path='dashboard' element={<DashboardHomepage/>}/>*/}
      <Route path='homepage/checkout' element={<Checkout/>}/>
      <Route path='homepage/login' element={<Login/>}/>
      <Route path='homepage/register' element={<Register/>}/>
      
      <Route path='/dashboard/panel' element={<DashboardHomepage/>}/> {/*zrobic link do /dashboard  w homepage*/}
      
      <Route path="/dashboard/renting" element={<DashboardRenting />} />
      {/* <Route path="/dashboard/renting/new" element={<NewCarForm />} />  */}
      <Route path="/dashboard/sell-car" element={<DashboardSellCar />} />
      <Route path="/dashboard/settings" element={<DashboardSettings />} />
      {/* <Route path="/dashboard/flota" element={<DashboardFlota />} /> */}
      <Route path="/dashboard/customers" element={<DashboardCustomers />} />
      <Route path="/dashboard/reservations" element={<DashboardReservations />} />
      <Route path="/dashboard/documentation" element={<DashboardDocumentation />} />
    </Routes> 
  )
};

export default Routers

