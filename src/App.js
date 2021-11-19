import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/Header/Header';
import AuthProvider from './contexts/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Footer from "./components/Footer/Footer";
import Home from './components/Home/Home';
import CreateProducts from "./components/Products/CreateProducts.js/CreateProducts";
import AllProducts from "./components/Products/AllProducts/AllProducts";
import Login from "./components/Login/Login";
import Checkout from "./components/Checkout/Checkout";
import Register from "./components/Register/Register";
import CompleteOrder from "./components/CompleteOrder/CompleteOrder";
import MyOrders from "./components/MyOrders/MyOrders";
import Dashboard from "./components/Dashboard/Dashboard";
import Pay from "./components/Pay/Pay";
import CreateReview from "./components/CreateReviews/CreateReviews";
import AdminLogin from "./components/AdminLogin/AdminLogin";
import AdminDashboard from "./components/AdminDashboard/AdminDasboard";
import ManageOrders from "./components/ManageOrders/ManageOrders";
import ManageProducts from "./components/ManageProducts/ManageProducts";
import MakeAdmin from "./components/MakeAdmin/MakeAdmin";

function App() {
  const [isAdmin, setIsAdmin] = useState(false);
  
  // check if user is admin
  useEffect(() => {
    fetch(`https://watch-hunter.herokuapp.com/admin`)
      .then(res => res.json())
      .then(data => setIsAdmin(data[0].isLoggedIn))
  } , [isAdmin])
  return (
    <div>
      <AuthProvider>
        <Router>
          <Header isAdmin={isAdmin} setIsAdmin={setIsAdmin} />
          <Switch>
            <Route exact path='/'><Home /></Route>
            <Route path='/createproducts'><CreateProducts /></Route>
            <Route path='/products'><AllProducts /></Route>
            <Route path='/login'><Login /></Route>
            <Route path='/register'><Register /></Route>
            <PrivateRoute path="/checkout/:checkoutId">
              <Checkout />
            </PrivateRoute>
            <PrivateRoute path="/complete">
              <CompleteOrder />
            </PrivateRoute>
            <PrivateRoute path="/myorders"><MyOrders /></PrivateRoute>
            <PrivateRoute path="/dashboard"><Dashboard /></PrivateRoute>
            <PrivateRoute path="/pay"><Pay /></PrivateRoute>
            <PrivateRoute path="/createreview"><CreateReview /></PrivateRoute>
            <Route path='/adminlogin'><AdminLogin isAdmin={isAdmin} setIsAdmin={setIsAdmin} /></Route>
            <Route path="/admindashboard"><AdminDashboard isAdmin={isAdmin} /></Route>
            <Route path="/manageorder"><ManageOrders /></Route>
            <Route path="/manageproducts"><ManageProducts /></Route>
            <Route path="/makeadmin"><MakeAdmin /></Route>
          </Switch>
          <Footer />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
