// dependencies
import { Container, Nav, Navbar, Button, Image } from "react-bootstrap";
import { NavLink, useHistory } from "react-router-dom";
import useAuth from '../../hooks/useAuth'
import './Header.css';
import logo from '../../images/logo.png';

function Header({isAdmin, setIsAdmin}) {
  // style for active nav item
  const activeStyle = {
    fontWeight: 'bold',
    color: '#FD696B'
  };

  // normal style for nav item
  const normalStyle = {
    textDecoration: 'none',
    color: '#3F120F',
    marginLeft: '20px'
  };

  // user information
  const {user, logOut} = useAuth()
  const history = useHistory();

  const adminLogout = () => {
    fetch(`https://watch-hunter.herokuapp.com/admin`, {method: 'PUT'})
                .then(res => res.json())
                .then(data => setIsAdmin(data.isLoggedIn))
    history.push('/adminlogin')
  }

  // user name and avatar section
  const userSection = <div className="d-flex align-items-center ms-3">
                        <Image src={user.photoURL} height="30" width="30" className="rounded-circle" />
                        <h6 className="ms-2">{user.displayName}</h6>
                      </div>

  // admin name and avatar section
  const adminSection = <div className="d-flex align-items-center ms-3">
                        <Image src='https://help.classter.com/wp-content/uploads/2020/02/admin-icon.png' height="30" width="30" className="rounded-circle" />
                        <h6 className="ms-2">Admin</h6>
                      </div>

  // my orders button
  const myOrdersButton = <NavLink to="/dashboard" style={normalStyle} activeStyle={activeStyle}>Dashboard</NavLink>
  // admin dashboard
  const adminDashboard = <NavLink to="/admindashboard" style={normalStyle} activeStyle={activeStyle}>Dashboard</NavLink>

  // login and register button
  const loginAndRegister = <>
                            <NavLink to="/login" style={normalStyle}><Button className="login-btn">Login / Register</Button></NavLink>
                            <NavLink to="/adminlogin" style={normalStyle}><Button className="admin-btn">Admin Login</Button></NavLink>
                          </>

  // logout button
  const logoutBtn = <Button variant='danger' className="login-btn ms-3" onClick={logOut}>Logout</Button>

  const adminLogoutBtn = <Button variant='danger' className="login-btn ms-3" onClick={adminLogout}>Logout</Button>

    return (
        <header>
          <Navbar expand="lg" className="bg-white shadow">
            <Container>
              <Navbar.Brand>
                <img
                  src={logo}
                  width="100px"
                  className="d-inline-block align-top"
                  alt="Digital Hub Logo"
                />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mx-auto align-items-center">
                  <NavLink exact to="/" style={normalStyle} activeStyle={activeStyle}>Home</NavLink>
                  <NavLink to="/products" style={normalStyle} activeStyle={activeStyle}>Watches</NavLink>
                  {user.displayName && myOrdersButton}
                  {isAdmin && adminDashboard}
                </Nav>
                {isAdmin ? (
                  <div className="d-flex justify-content-center">
                    {isAdmin ? adminLogoutBtn : loginAndRegister}
                    {isAdmin ? adminSection : ''}
                </div>
                ):(<div className="d-flex justify-content-center">
                    {user.displayName ? logoutBtn : loginAndRegister}
                    {user.displayName ? userSection : ''}
                </div>)}
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </header>
    )
}

export default Header;