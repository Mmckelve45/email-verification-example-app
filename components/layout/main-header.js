import Link from "next/link";
import { useRouter } from "next/router";
import React, {
  useState,
  Fragment,
  useEffect,
} from "react";
import { useUser } from "@auth0/nextjs-auth0/client";
import LoadingIndicator from "../ui/loading-indicator";
import {
  Disclosure,
  Menu,
  Transition,
} from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

// Different Paths in the Header
const navigation = [
  { name: "Sharks", href: "/sharks", current: false },
  { name: "Seasons", href: "/seasons", current: false },
  { name: "Episodes", href: "/episodes", current: false },
  { name: "Pitches", href: "/pitches", current: false },
  { name: "Docs", href: "/docs", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function MainHeader(props) {
  const { user, isLoading } = useUser();
  const [isActive, setIsActive] = useState("");

  const router = useRouter();
  const currPath = router.asPath;

  useEffect(() => {
    if (currPath.includes("sharks")) {
      setIsActive("Sharks");
    } else if (currPath.includes("seasons")) {
      setIsActive("Seasons");
    } else if (currPath.includes("episodes")) {
      setIsActive("Episodes");
    } else if (currPath.includes("pitches")) {
      setIsActive("Pitches");
    } else if (currPath.includes("docs")) {
      setIsActive("Docs");
    } else {
      setIsActive("");
    }
  }, [router.pathname]);

  if (isLoading) {
    return (
      <div className="flex justify-center w-full">
        <LoadingIndicator />;
      </div>
    );
  }

  return (
    <Disclosure as="nav" className="bg-gray-800 pt-2">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">
                    Open main menu
                  </span>
                  {open ? (
                    <XMarkIcon
                      className="block h-6 w-6"
                      aria-hidden="true"
                    />
                  ) : (
                    <Bars3Icon
                      className="block h-6 w-6"
                      aria-hidden="true"
                    />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-between">
                <div className="flex flex-shrink-0 items-center">
                  <Link href={"/"}>
                    <img
                      className="h-14 sm:h-10 md:h-14"
                      src="https://sharktank-api.s3.amazonaws.com/stapi-logo.png"
                      alt="Shark Tank API Logo"
                    />
                  </Link>
                </div>
                <div className="hidden sm:ml-2 sm:block">
                  <div className="flex space-x-4 h-full items-center">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          isActive === item.name
                            ? "bg-gray-900 text-white "
                            : "text-gray-300 hover:bg-gray-700 hover:text-white font-serif",
                          "rounded-md px-3 py-2 text-sm font-medium"
                        )}
                        aria-current={
                          isActive === item.name
                            ? "page"
                            : undefined
                        }
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {!user && (
                  <a href="/api/auth/login">
                    <button
                      className="middle none center rounded-md text-black hover:bg-sharkTeal bg-sharkBlue py-3 px-6 font-serif text-xs font-bold uppercase shadow-md shadow-sharkBlue/20 transition-all hover:shadow-lg hover:shadow-sharkBlue/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none "
                      data-ripple-light="true"
                    >
                      Login
                    </button>
                  </a>
                )}
                {user && (
                  <Menu as="div" className="relative ml-3">
                    <div>
                      <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                        <span className="absolute -inset-1.5" />
                        <img
                          className="h-8 w-8 rounded-full"
                          src={
                            user.picture ||
                            "defaultUserImg.svg"
                          }
                          alt=""
                        />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              href="/api-keys"
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              API Keys
                            </Link>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="/api/auth/logout"
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              Sign out
                            </a>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                )}
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={
                    item.current ? "page" : undefined
                  }
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
