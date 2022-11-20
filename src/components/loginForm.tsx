import Container from "./container";
import { Link, useLocation } from "react-router-dom";
import {useState, useEffect} from 'react';
import { useAppDispatch,useAppSelector } from "../hooks/redux-hooks";
import {loginAuth} from '../store/actions/auth.actions';
import { useStore } from 'react-redux';
import { useNavigate  } from "react-router-dom";

export default function LoginForm () {
  const navigate = useNavigate();
  const dispatch=useAppDispatch();
  const location = useLocation();
  const [auth, setAuth]=useState({Email: "vincent@gmail.com", Password: "vincent"});
  const currentAuth=useAppSelector(state=>state.auth);
  const [form, setForm] = useState({
    title: "",
    nextHeader: "", 
    nextBtn:"",
    nextLink: ""
  });
  const store = useStore()

  const routerChanged = (path: string) => {
    switch(path){
      case '/login': 
        setForm({
          title: "Sign in", 
          nextHeader: "Don't have an account?", 
          nextBtn:"Sign up here",
          nextLink: "/signup"
        }); break;
      case '/signup': 
        setForm({
          title: "Sign up",
          nextHeader: "You have an account?",
          nextBtn:"Login here",
          nextLink: "/login"
          });break;
    }
  }

  const clickLogin=()=>{
    dispatch(loginAuth(auth))
    
  }
  const checkAuth=():boolean=>{
    if(currentAuth.Id === ""){
        return false
    }
    return true
  }

  useEffect(()=>{
    routerChanged(location.pathname);
  },[location.pathname])

  useEffect(()=>{
    
    if(checkAuth())
    {
      navigate("/dashboard");
    }
  },[currentAuth])

  return (
    <>
      <Container className="flex flex-wrap justify-center">
        <div
          className="
            flex flex-col justify-center
            border-2
            dark:bg-light-background
            border-dark-background
            dark:border-light-background
            shadow-lg
            px-4
            sm:px-10
            md:px-10
            lg:px-20
            py-8
            rounded-sm
            w-50
            max-w-md
          "
        >
          <div className="font-medium self-center text-xl sm:text-3xl text-dark-headline">
            {form.title}
          </div>

          <div className="mt-10">
            <form action="#">
              { form.title ==="Sign up" &&
               <div className="flex flex-col mb-5">
                <label
                  htmlFor="email"
                  className="mb-1 text-xs tracking-wide text-gray-600"
                  >Name:</label
                >
                <div className="relative">
                  <div
                    className="
                      inline-flex
                      items-center
                      justify-center
                      absolute
                      left-0
                      top-0
                      h-full
                      w-10
                      text-gray-400
                    "
                  >
                    <i className="fas fa-user text-blue-500"></i>
                  </div>

                  <input
                    id="email"
                    type="email"
                    name="email"
                    className="
                      text-sm
                      placeholder-gray-500
                      pl-10
                      pr-4
                      rounded-md
                      border border-dark-background
                      w-full
                      py-2
                      focus:outline-none focus:border-blue-400
                      bg-light-background
                    "
                    placeholder="Enter your name"
                  />
                </div>
              </div> }
              <div className="flex flex-col mb-5">
                <label
                  htmlFor="email"
                  className="mb-1 text-xs tracking-wide text-dark-headline"
                  >E-Mail Address:</label
                >
                <div className="relative">
                  <div
                    className="
                      inline-flex
                      items-center
                      justify-center
                      absolute
                      left-0
                      top-0
                      h-full
                      w-10
                      text-gray-400
                    "
                  >
                    <i className="fas fa-at text-blue-500"></i>
                  </div>

                  <input
                    id="email"
                    type="email"
                    name="email"
                    className="
                      text-sm
                      placeholder-gray-500
                      pl-10
                      pr-4
                      rounded-md
                      border border-dark-background
                      w-full
                      py-2
                      focus:outline-none focus:border-blue-400
                      bg-light-background
                    "
                    placeholder="Enter your email"
                  />
                </div>
              </div>
              <div className="flex flex-col mb-6">
                <label
                  htmlFor="password"
                  className="mb-1 text-xs sm:text-sm tracking-wide text-dark-headline"
                  >Password:</label
                >
                <div className="relative">
                  <div
                    className="
                      inline-flex
                      items-center
                      justify-center
                      absolute
                      left-0
                      top-0
                      h-full
                      w-10
                      text-gray-400
                    "
                  >
                    <span>
                      <i className="fas fa-lock text-blue-500"></i>
                    </span>
                  </div>

                  <input
                    id="password"
                    type="password"
                    name="password"
                    className="
                      text-sm
                      placeholder-gray-500
                      pl-10
                      pr-4
                      rounded-md
                      border border-dark-background
                      w-full
                      py-2
                      focus:outline-none focus:border-blue-400
                      bg-light-background
                    "
                    placeholder="Enter your password"
                  />
                </div>
              </div>

              <div className="flex w-full">
                <button
                  type="submit"
                  className="
                    flex
                    mt-2
                    items-center
                    justify-center
                    focus:outline-none
                    text-white text-sm
                    sm:text-base
                    bg-blue-500
                    hover:bg-blue-600
                    rounded-2xl
                    py-2
                    w-full
                    transition
                    duration-150
                    ease-in
                  "
                  onClick={clickLogin}
                >
                  <span className="mr-2 uppercase text-dark-headline">{form.title}</span>
                  <span>
                    <svg
                      className="h-6 w-6 text-primary"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </span>
                </button>
              </div>
            </form>
          </div>
          <div className="flex justify-center items-center mt-6">
            <span className="ml-2">{form.nextHeader}
            <Link
              to={form.nextLink}
              className="text-md ml-2 text-primary font-semibold"
              >{form.nextBtn}
              </Link>
            </span>
          </div>
        </div>
      </Container>
     
    </>
  )
}