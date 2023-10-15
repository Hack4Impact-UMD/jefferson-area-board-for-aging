import ExamplePage from "./pages/ExamplePage/ExamplePage";
import LoginPage from "./pages/LoginPage";
import { useAuth, UserProvider } from './UserContext';


const ProtectedRoutes: React.FC = () => {
  const { isUserLoggedIn } = useAuth();
  return isUserLoggedIn ? <ExamplePage/> : <LoginPage/>;
}

const App: React.FC = () => {
  return (
    <UserProvider>
      <ProtectedRoutes />
    </UserProvider>
  );
}

export default App;
