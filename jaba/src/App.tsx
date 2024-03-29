
import AdminUsersPage from "./pages/AdminView/AdminPage";

import AdminSettingsPage from "./pages/SettingsPage/AdminSettingsPage";
import UserSettingsPage from "./pages/SettingsPage/UserSettingsPage";


import CreateUser from "./pages/CreateUserPage/CreateUser";
import RequestAccountPage from "./pages/RequestAccount/RequestAccountPage";

import ResourcePage from "./pages/ResourcePage/ResourcePage";
import DisplayUsersPage from "./pages/DisplayUsersPage/DisplayUsersPage";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import ResetPassword from "./pages/ResetPassword/ResetPassword";
import NavBar from "./components/NavBar/NavBar";
import LoginWelcomePage from "./pages/LoginWelcomePage/LoginWelcomePage";
import AdminLoginPage from "./pages/LoginPage/AdminLoginPage";
import UserLoginPage from "./pages/LoginPage/UserLoginPage";
import UserDashboardPage from "./pages/UserDashboardPage/UserDashboardPage";
import { useAuth, UserProvider } from './UserContext/UserContext';
import {createBrowserRouter,createRoutesFromElements, RouterProvider, Route} from 'react-router-dom';



const ProtectedRoutes: React.FC = () => {
  const { isUserLoggedIn } = useAuth();
  return isUserLoggedIn ? <AdminUsersPage/> : <LoginWelcomePage/>;
}

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {index: true, element: <LoginWelcomePage/>},
      {path: '/adminLogin', children:[
        {index: true, element:<AdminLoginPage/>},
        {path: "navBar", element: <UserDashboardPage/>},
      ]

      },
      {path: '/userLogin', element: <UserLoginPage/>},
      {path: '/forgotPassword', element: <ForgotPassword/>},
      {path: '/requestAccount', element: <RequestAccountPage/>}

    ]
  }
])
const App: React.FC = () => {
  return (
  <RouterProvider router = {router}/>
  );
};

export default App;