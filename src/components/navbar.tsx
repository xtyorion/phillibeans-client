import { Link } from "react-router-dom";
import ThemeChanger from "./DarkSwitch";
import { useLocation } from 'react-router-dom'
import logo from "../assets/logo.png"

export default function Navbar() {
  const location = useLocation();

  const logoException = () => {
    if(location.pathname == "/")
      return false;

    return true;
  }

  const isLog = () => {
    if(location.pathname == "/login" || location.pathname == "/signup")
      return false;

    return true;
  }

  return (
    <div className="w-full">
      <nav className="container relative flex flex-wrap items-center justify-between p-8 mx-auto lg:justify-between xl:px-0">
       {/* menu  */}
        <div className="hidden text-center lg:flex lg:items-center">
          {/* <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
            {navigation.map((menu, index) => (
              <li className="mr-3 nav__item" key={index}>
                <Link to="/" className="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800">
                  
                    {menu}
                </Link>
              </li>
            ))}
          </ul> */}
          { logoException() && 
          <Link to="/" >
              <img src={logo} width="300" height="400"/>
          </Link>
          
          }
        </div>

        <div className="hidden mr-3 space-x-4 lg:flex nav__item">
          {isLog() && 
            <Link to="/login" className="px-6 py-2 text-light-headline bg-dark-headline dark:text-dark-headline dark:bg-light-headline rounded-md md:ml-5">
              Sign in
            </Link>
          }
          <ThemeChanger />
        </div>
      </nav>
    </div>
  );
}
