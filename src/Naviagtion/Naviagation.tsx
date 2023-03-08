
import { Route, Routes, redirect } from 'react-router-dom'
import Others from '../Screens/Home/Home'
import MenuCard from '../Components/MenuCard/MenuCard'
import Cart from '../Screens/Account/Cart/Cart'
import Account from '../Screens/Account/Account'

const Navigation = () => {

    return (
        <Routes>
            <Route path="menu" element={<MenuCard />} />
            <Route path="cart" element={<Cart />} />
            <Route path="account" element={<Account />} />
            <Route path="/" element={<Others />} />
        </Routes>
    )
}
export default Navigation