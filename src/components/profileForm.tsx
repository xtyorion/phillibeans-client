import { useEffect, useState } from "react";
import { useAppSelector } from "../hooks/redux-hooks";
import { IAuth } from "../store/interfaces/auth.interface";

export default function ProfileForm() {
    const currentAuth = useAppSelector((state) => state.auth);
    const [user, setUser] = useState({
        Name: "",
        Email: "",
        ImageURL: ""
    });

    useEffect(()=>{
            setUser(currentAuth)
    },[]);

  return (
    <>
      <div className="mt-10 sm:mt-0">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 mt-32 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-dark-headline dark:text-light-headline">
                Personal Information
              </h3>
              <p className="mt-1 text-sm text-dark-headline dark:text-light-headline">
                Use a permanent address where you can receive mail.
              </p>
            </div>
          </div>
          <div className="mt-5 md:col-span-2 md:mt-0 ">
            <form action="#" method="POST">
              <div className="overflow-hidden shadow sm:rounded-md  border-2 border-dark-background dark:border-light-background">
                <div className="bg-white px-4 py-5 sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-dark-headline dark:text-light-headline"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={user.Name}
                        onChange={(e) =>
                          setUser({ ...user, Name: e.target.value })
                        }
                        id="name"
                        autoComplete="given-name"
                        className="mt-1 block w-full rounded-md border-dark-background border-2 py-2 px-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="email-address"
                        className="block text-sm font-medium text-dark-headline dark:text-light-headline"
                      >
                        Email address
                      </label>
                      <input
                        type="text"
                        name="email-address"
                        value={user.Email}
                        onChange={(e) =>
                          setUser({ ...user, Email: e.target.value })
                        }
                        id="email-address"
                        autoComplete="email"
                        className="mt-1 block w-full rounded-md border-dark-background border-2 py-2 px-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                    <div className="col-span-6">
                      <label
                        htmlFor="street-address"
                        className="block text-sm font-medium text-dark-headline dark:text-light-headline"
                      >
                        Image Url
                      </label>
                      <input
                        type="text"
                        name="street-address"
                        id="street-address"
                        value={user.ImageURL}
                        onChange={(e) =>
                          setUser({ ...user, ImageURL: e.target.value })
                        }
                        autoComplete="street-address"
                        className="mt-1 block w-full rounded-md border-dark-background border-2 py-2 px-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    {/* <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="country"
                        className="block text-sm font-medium text-dark-headline dark:text-light-headline"
                      >
                        Country
                      </label>
                      <select
                        id="country"
                        name="country"
                        autoComplete="country-name"
                        className="mt-1 block w-full rounded-md border border-dark-background border-2 py-2 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      >
                        <option>United States</option>
                        <option>Canada</option>
                        <option>Mexico</option>
                      </select>
                    </div>

                    <div className="col-span-6">
                      <label
                        htmlFor="street-address"
                        className="block text-sm font-medium text-dark-headline dark:text-light-headline"
                      >
                        Street address
                      </label>
                      <input
                        type="text"
                        name="street-address"
                        id="street-address"
                        autoComplete="street-address"
                        className="mt-1 block w-full rounded-md border-dark-background border-2 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                      <label
                        htmlFor="city"
                        className="block text-sm font-medium text-dark-headline dark:text-light-headline"
                      >
                        City
                      </label>
                      <input
                        type="text"
                        name="city"
                        id="city"
                        autoComplete="address-level2"
                        className="mt-1 block w-full rounded-md border-dark-background border-2 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label
                        htmlFor="region"
                        className="block text-sm font-medium text-dark-headline dark:text-light-headline"
                      >
                        State / Province
                      </label>
                      <input
                        type="text"
                        name="region"
                        id="region"
                        autoComplete="address-level1"
                        className="mt-1 block w-full rounded-md border-dark-background border-2 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label
                        htmlFor="postal-code"
                        className="block text-sm font-medium text-dark-headline dark:text-light-headline"
                      >
                        ZIP / Postal code
                      </label>
                      <input
                        type="text"
                        name="postal-code"
                        id="postal-code"
                        autoComplete="postal-code"
                        className="mt-1 block w-full rounded-md border-dark-background border-2 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div> */}
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-dark-headline dark:text-light-headline shadow-sm hover:bg-tertiary focus:outline-none focus:ring-2 focus:ring-bg-tertiary focus:ring-offset-2"
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
