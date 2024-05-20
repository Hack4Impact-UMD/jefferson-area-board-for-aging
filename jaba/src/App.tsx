import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import { Route, BrowserRouter, Routes, Navigate } from "react-router-dom";
import { AuthProvider } from "./auth/AuthProvider";
import RequireUserAuth from "./auth/RequireUserAuth/RequireUserAuth";
import LoginPage from "./pages/LoginPage/LoginPage";
import { createUser } from "./backend/AuthFunctions";
import UserDashboardPage from "./pages/UserDashboardPage/UserDashboardPage";
import SettingsPage from "./pages/SettingsPage/SettingsPage";
import RequireAdminAuth from "./auth/RequireAdminAuth/RequireAdminAuth";
import { ThemeProvider } from "@mui/material";
import UsersPage from "./pages/UsersPage/UsersPage";
import { theme } from "./muiTheme";
import CreateResource from "./pages/CreateResource/CreateResource";

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route
              path="/test"
              element={
                <button
                  onClick={() => {
                    createUser("sahil", "sgaba@terpmail.umd.edu", "admin");
                  }}
                ></button>
              }
            />
            <Route
              path="/"
              element={
                <RequireUserAuth>
                  <UserDashboardPage />
                </RequireUserAuth>
              }
            />
            <Route
              path="/users"
              element={
                <RequireAdminAuth>
                  <UsersPage />
                </RequireAdminAuth>
              }
            />
            <Route
              path="/settings"
              element={
                <RequireUserAuth>
                  <SettingsPage />
                </RequireUserAuth>
              }
            />
            <Route
              path="/create"
              element={
                <RequireUserAuth>
                  <CreateResource />
                </RequireUserAuth>
              }
            />
            <Route path="/forgotpassword" element={<ForgotPassword />} />

            {/*ADDDDDDDDDDDDDDDDDDD LATER*/}
            {/* <Route
            path="*"
            element={
              <RequireAuth>
                <NotFoundPage />
              </RequireAuth>
            }
          /> */}
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
