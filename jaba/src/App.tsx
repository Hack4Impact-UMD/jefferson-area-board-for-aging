import ExamplePage from "./pages/ExamplePage/ExamplePage";
import ResourcePage from "./pages/ResourcePage/ResourcePage";
import DisplayUsersPage from "./pages/DisplayUsersPage/DisplayUsersPage";
import AdminPage from "./pages/SettingsPage/AdminPage";
import UserPage from "./pages/SettingsPage/UserPage";

import LoginPage from "./pages/LoginPage/LoginPage";
import { useAuth, UserProvider } from "./UserContext/UserContext";

const ProtectedRoutes: React.FC = () => {
  const { isUserLoggedIn } = useAuth();
  return isUserLoggedIn ? <ExamplePage /> : <LoginPage />;
};

const App: React.FC = () => {
  return (
    <>
      <AdminPage />
      <UserPage />
      {/* <UserProvider>
      <ProtectedRoutes />
    </UserProvider>


    <ResourcePage/> */}
    </>
  );
};

export default App;
