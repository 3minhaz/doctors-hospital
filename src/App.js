
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Shared/Header/Header';
import Home from './pages/Home/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import AuthProvider from './pages/AuthProvider/AuthProvider';
import PrivateRoute from './pages/PrivateRoute/PrivateRoute';
import Services from './pages/Home/Services/Services';
import NotFound from './pages/NotFound/NotFound';
import Details from './pages/Details/Details';
import Footer from './Shared/Footer/Footer';
import Contact from './pages/Contact/Contact';
import PayBill from './pages/PayBill/PayBill';
import Doctors from './pages/Doctors/Doctors';


function App() {
  return (
    <div >
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/services">
              <Services></Services>
            </Route>
            <PrivateRoute path="/services/:id">
              {/* <Services></Services> */}
              <Details></Details>
            </PrivateRoute>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='/register'>
              <Register></Register>
            </Route>
            <PrivateRoute path="/appointment">
              <Doctors></Doctors>
            </PrivateRoute>
            <PrivateRoute path="/paybill">
              <PayBill></PayBill>
            </PrivateRoute>
            <Route path='/contact'>
              <Contact></Contact>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
