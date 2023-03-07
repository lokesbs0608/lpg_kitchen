
import { Route, Routes, redirect } from 'react-router-dom'
import Others from '../Screens/Home/Home'
import MenuCard from '../Components/MenuCard/MenuCard'

const Navigation = () => {

    return (
        <Routes>
            <Route path="menu" element={<MenuCard />} />
            <Route path="/" element={<Others />} />
        </Routes>
    )
}
export default Navigation