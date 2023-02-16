
import { Route, Routes, redirect } from 'react-router-dom'
import Home from '../Screens/Home/Home'

 const Navigation = () => {

    return (
        <Routes>
            <Route path="/" element={ <Home /> } />
        </Routes>
    )
}
export default Navigation