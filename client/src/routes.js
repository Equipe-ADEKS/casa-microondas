import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from "./pages/home.jsx"
import Localization from "./pages/localization.jsx"
import Informations from './pages/informations.jsx'
import Contact from './pages/contact.jsx'
import Account_Login from './pages/account_login.jsx'
import Shop from './pages/shop.jsx'
import Admin_logged from './pages/admin.jsx'
import AdminService from './components/AdminService.jsx'
import Admin_Brand from './components/admin_brand.jsx'
import BrandPost from './components/AdminBranchPost.jsx'
import BrandUpdate from './components/AdminBranchUpdate.jsx'
import Admin_Order from './components/admin_orders.jsx'
import Admin_Tproduct from './components/admin_Tproduct.jsx'
import TProductPost from './components/AdminTProductPost.jsx'
import TProductUpdate from './components/AdminTProductUpdate.jsx'
import Admin_Contact from './components/admin_contact.jsx'
import ServicoUpdate from './components/admin_service_update.jsx'
import Admin_Service_Post from './components/admin_service_post.jsx'

import Error from './pages/error.jsx'


const Private = ({ Item }) => {
    const signed = false;

    return signed > 0 ? <Item /> : <Account_Login />
}


const MyRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route Component = { Home } path="/" exact />
                <Route Component = { Localization } path="/localization" />
                <Route Component = { Informations } path="/informations" />
                <Route Component = { Contact } path="/contacts" />
                <Route Component = { Account_Login } path="/account_login" />
                <Route Component = { Shop } path="/shop" />
                <Route Component = { Admin_logged } path="/admin/*">
                    <Route Component= { Admin_Brand } path="brand" />
                    <Route Component= { BrandPost } path="brandpost"/>
                    <Route Component= { BrandUpdate } path="brandupdate"/>
                    <Route Component= { AdminService } path="service"/>
                    <Route Component= { Admin_Service_Post } path="servicepost"/>
                    <Route Component= { ServicoUpdate } path="servicoupdate"/>
                    <Route Component= { Admin_Contact } path="contact" />
                    <Route Component= { Admin_Order } path="order" />
                    <Route Component= { Admin_Tproduct } path="tproduct" />
                    <Route Component= { TProductPost } path="tproductpost" />
                    <Route Component= { TProductUpdate } path="tproductupdate" />
                    <Route Component={ AdminService } path="*" />
                </Route>
                <Route Component = { Error } path="*" />
            </Routes>
        </BrowserRouter>
    )
}

export default MyRoutes