import { Routes, Route, Link } from "react-router-dom";
import Login from './login/Login';
import Home from './home/Home';
import Dashboard from './dashboard/Dashboard';
import { FC } from "react";
import { Navigate } from "react-router-dom";
import authSlice from './store/slices/auth.slice';
import { useAppDispatch } from "./hooks/redux-hooks";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Login />} />
      <Route path="/dashboard" 
        element={
        <RequireAuth>
          <Dashboard />
        </RequireAuth>
      } />
    </Routes>
  )
}
const RequireAuth: FC<{ children: React.ReactElement }> = ({ children }) => {
  const userIsLogged = useLoginStatus(); // Your hook to get login status
  if (!userIsLogged) {
    return <Navigate to="/login"/>
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
export default App


