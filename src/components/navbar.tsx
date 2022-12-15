import { Link } from "react-router-dom";
import ThemeChanger from "./DarkSwitch";
import { useLocation } from 'react-router-dom'
import logo from "../assets/logo.png"
import { useAppSelector } from "../hooks/redux-hooks";
import UserProfileDropdown from "./userProfileDropdown" 
import { useEffect } from "react";

export default function Navbar() {
  const location = useLocation();
  const currentAuth=useAppSelector(state=>state.auth);

  const logoException = () => {
    if(location.pathname == "/")
      return false;

    return true;
  }

  const isLog = () => {
    if(location.pathname == "/")
      return true;

    return false;
  }

  const isUserLogged = () => {

    if(currentAuth && currentAuth.Id != "")
      return true;
    
    return false;
  }
  useEffect(() => {
    isUserLogged();
  }, [currentAuth]);
  return (
    <div className="w-full">
      <nav className="container relative flex flex-wrap items-center justify-between mx-auto lg:justify-between xl:px-0">
        {/* menu  */}
        <div className="hidden text-center lg:flex lg:items-center">
         
          {logoException() && (
            <Link to="/">
              <img src={logo} width="300" height="400" />
            </Link>
          )}
        </div>

        <div className="hidden mr-3 space-x-4 lg:flex nav__item">
          {isLog() && (
            <Link
              to="/login"
              className="px-6 py-2  bg-primary text-dark-headline rounded-md md:ml-5"
            >
              Sign in
            </Link>
          )}
          {isUserLogged() && <UserProfileDropdown name={currentAuth.Name} imageUrl={currentAuth.ImageURL} id={currentAuth.Id}/>}
          <ThemeChanger />
        </div>
      </nav>
    </div>
  );
}
