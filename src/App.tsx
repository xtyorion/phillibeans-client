import { Routes, Route, Link } from "react-router-dom";
import Login from './login/Login';
import Home from './home/Home';
import Dashboard from './dashboard/Dashboard';
import { FC } from "react";
import { Navigate } from "react-router-dom";
import authSlice from './store/slices/auth.slice';
import { useAppDispatch } from "./hooks/redux-hooks";
import Profile from "./profile/Profile";
import { logoutAuth } from "./store/actions/auth.actions";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Logged>
            <Home />
          </Logged>
        }
      />
      <Route
        path="/login"
        element={
          <Logged>
            <Login />
          </Logged>
        }
      />
      <Route
        path="/signup"
        element={
          <Logged>
            <Login />
          </Logged>
        }
      />
      <Route
        path="/dashboard"
        element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        }
      />
      <Route
        path="/profile"
        element={
          <RequireAuth>
            <Profile />
          </RequireAuth>
        }
      />
      <Route path="/logout" element={<Logout />} />
    </Routes>
  );
}

const RequireAuth: FC<{ children: React.ReactElement }> = ({ children }) => {
  const userIsLogged = useLoginStatus(); // Your hook to get login status
  if (!userIsLogged) {
    return <Navigate to="/login"/>
  }
  return children;
};

const Logged: FC<{ children: React.ReactElement }> = ({ children }) => {
  const userIsLogged = useLoginStatus(); // Your hook to get login status
  if (userIsLogged) {
    return <Navigate to="/dashboard" />;
  }
  return children;
};

function useLoginStatus() {
  const dispatch=useAppDispatch();
  const auth = JSON.parse(localStorage.getItem("auth") || '{}');

  if(auth.user){
    dispatch(authSlice.actions.setState(JSON.parse(auth.user))) 
    return true;
  }
  return false;
}

const Logout = () => {
  const dispatch = useAppDispatch();
  localStorage.removeItem("auth")
  dispatch(logoutAuth())
  return <Navigate to="/" />;
};
export default App


