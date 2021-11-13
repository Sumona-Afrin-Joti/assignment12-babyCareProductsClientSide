import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './Components/Context/AuthProvider';
import Home from './Components/HomePage/Home/Home';
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';
import Dashboard from './Components/InsideDashBoard/Dashboard/Dashboard';
import ExploreProducts from './Components/ExploreProducts/ExploreProducts';
import PurchasePage from './Components/PurchasePage/PurchasePage';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import NotFound from '../src/Components/NotFound/NotFound'


function App() {
  return (
    <div >
      <AuthProvider>
        <BrowserRouter>

          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>

            <Route path="/home">
              <Home></Home>
            </Route>

            <Route path="/signUp">
              <SignUp></SignUp>
            </Route>

            <Route path="/login">
              <Login></Login>
            </Route>

            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>

            <Route path="/exploreProducts">
              <ExploreProducts></ExploreProducts>
            </Route>

            <Route path="/purchase/:id">
              <PurchasePage></PurchasePage>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>

        </BrowserRouter>

      </AuthProvider>

    </div>
  );
}

export default App;
