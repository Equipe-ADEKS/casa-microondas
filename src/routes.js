import { BrowserRouter, Route, Routes, Navigate, Link } from 'react-router-dom'

import Home from "./pages/home.jsx"
import Localization from "./pages/localization.jsx"
import Informations from './pages/informations.jsx'
import Contact from './pages/contact.jsx'
import Account_Login from './pages/account_login.jsx'
import LoggedInUser from './pages/loggedin_user.jsx'
import Shop from './pages/shop.jsx'
import Error from './pages/error.jsx'


const MyRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route Component = { Home } path="/" exact />
                <Route Component = { Localization } path="/localization" />
                <Route Component = { Informations } path="/informations" />
                <Route Component = { Contact } path="/contacts" />
                <Route Component = { Account_Login } path="/account_login" />
                <Route Component = { LoggedInUser } path="/loggedin_account" />
                <Route Component = { Shop } path="/shop" />
                <Route Component = { Error } path="*" />
            </Routes>
        </BrowserRouter>
    )
}

export default MyRoutes