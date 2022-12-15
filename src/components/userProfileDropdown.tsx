import { useState } from "react";
import { Disclosure, Transition } from "@headlessui/react";
import { FaPhotoVideo } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function UserProfileDropdown(props: {name: string, imageUrl: string, id: string}) {
  const [active, setActive] = useState(false);

  const setImage = () => {
    if (props.imageUrl == "")
     return "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png";
    
    return props.imageUrl
  }

  return (
    <div className="relative">
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button
              className="z-40 flex mx-auto items-center space-x-16 transition 
            duration-300 bg-light-background border-2 border-primary 
            rounded-full shadow-lg right-5 bottom-5 w-auto h-10 px-2
            focus:outline-none hover:bg-primary focus:bg-primary ease"
            >
              <span className="mr-8">{props.name}</span>
              <Transition
                show={!open}
                enter="transition duration-200 transform ease"
                enterFrom="opacity-0 -rotate-45 scale-75"
                leave="transition duration-100 transform ease"
                leaveTo="opacity-0 -rotate-45"
                className="absolute w-8 h-8 text-white right-1"
              >
                <img
                  src={setImage()}
                  className="rounded-full w-8 h-8"
                  alt={props.name}
                  placeholder="blur"
                />
              </Transition>

              <Transition
                show={open}
                enter="transition duration-200 transform ease"
                enterFrom="opacity-0 rotate-45 scale-75"
                leave="transition duration-100 transform ease"
                leaveTo="opacity-0 rotate-45"
                className="absolute w-6 h-6 text-white right-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>{" "}
              </Transition>
            </Disclosure.Button>
            <Transition
              className="absolute right-0 w-full mt-2 origin-top-right rounded-md border-2 border-dark-background shadow-lg md:w-32"
              enter="transition duration-200 transform ease"
              enterFrom="opacity-0 translate-y-5"
              leave="transition duration-200 transform ease"
              leaveTo="opacity-0 translate-y-5"
            >
              <Disclosure.Panel className="">
                <div className="py-2 bg-light-background rounded-md  shadow dark-mode:bg-gray-800">
                  <Link
                    className="block py-2 mt-2 text-sm font-semibold rounded-lg dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                    to="/profile"
                  >
                    Edit Profile
                  </Link>
                  <Link
                    className="block py-2 mt-2 text-sm font-semibold rounded-lg dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                    to="/logout"
                  >
                    Logout
                  </Link>
                  {/* <a
                    className="block py-2 mt-2 text-sm font-semibold rounded-lg dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                    href="/profile"
                  >
                    Edit Profile
                  </a>
                  <a
                    className="block py-2 mt-2 text-sm font-semibold rounded-lg dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                    href="#"
                  >
                    Logout
                  </a> */}
                </div>
              </Disclosure.Panel>
            </Transition>
          </>
        )}
      </Disclosure>
    </div>
  );
}
