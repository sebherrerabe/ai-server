import { Routes ,Route  , BrowserRouter as Router  ,Link} from "react-router-dom";
import Layout from "./Layout/Layout";
import Login from "./pages/Login";


const AppRoutes = () => {
  return (
    <Router>
        <nav>
          <ul>
            <li> 
              <Link to="/">Home </Link>
            </li>
            <li> 
              <Link to="/login">Login </Link>
            </li>
            <li> 
              <Link to="/dashboard">Dashboard </Link>
            </li>
          </ul>
        </nav>
    <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
    </Router>
  );
}

export default AppRoutes;
