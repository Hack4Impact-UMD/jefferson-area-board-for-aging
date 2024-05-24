import { ThemeProvider } from "@mui/material";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { AuthProvider } from "./auth/AuthProvider";
import RequireAdminAuth from "./auth/RequireAdminAuth/RequireAdminAuth";
import RequireUserAuth from "./auth/RequireUserAuth/RequireUserAuth";
import { theme } from "./muiTheme";
import CreateResource from "./pages/CreateResource/CreateResource";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import LoginPage from "./pages/LoginPage/LoginPage";
import SettingsPage from "./pages/SettingsPage/SettingsPage";
import UserDashboardPage from "./pages/UserDashboardPage/UserDashboardPage";
import UsersPage from "./pages/UsersPage/UsersPage";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/forgotpassword",
    element: <ForgotPassword />,
  },
  {
    path: "/create",
    element: (
      <RequireUserAuth>
        <CreateResource />
      </RequireUserAuth>
    ),
  },
  {
    path: "/",
    element: (
      <RequireUserAuth>
        <UserDashboardPage />
      </RequireUserAuth>
    ),
  },
  {
    path: "/users",
    element: (
      <RequireAdminAuth>
        <UsersPage />
      </RequireAdminAuth>
    ),
  },
  {
    path: "/settings",
    element: (
      <RequireUserAuth>
        <SettingsPage />
      </RequireUserAuth>
    ),
  },
]);

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
