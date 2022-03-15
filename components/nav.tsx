import Link from "next/link";
import DarkMode from "./DarkMode";

function Nav() {
  return (
    <>
      <section className="w-full px-8 text-gray-700 bg-white dark:bg-[#23272a]">
        <div className="container flex flex-col flex-wrap items-center justify-between py-5 mx-auto md:flex-row max-w-7xl">
          <div className="relative flex flex-col md:flex-row">
            <Link href="/">
              <a className="flex items-center mb-5 font-medium dark:text-white text-gray-900 lg:w-auto lg:items-center lg:justify-center md:mb-0">
                <span className="mx-auto text-xl font-bold leading-none dark:text-white text-gray-900 select-none">
                  Team Evie
                </span>
              </a>
            </Link>
            <nav className="flex flex-wrap items-center mb-5 text-base md:mb-0 md:pl-8 md:ml-8 md:border-l md:border-gray-200">
              <Link href="/">
                <a
                  href="#_"
                  className="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900 dark:text-white dark:hover:text-gray-400"
                >
                  Home
                </a>
              </Link>
              <Link href="/projects">
                <a
                  href="#_"
                  className="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900 dark:text-white dark:hover:text-gray-400"
                >
                  Projects
                </a>
              </Link>
              {/* {<a
                href="#_"
                className="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900 dark:text-white dark:hover:text-gray-400"
              >
                Blog
              </a>
              <a
                href="#_"
                className="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900 dark:text-white dark:hover:text-gray-400"
              >
                Support
              </a>} */}
            </nav>
          </div>
          <div className="inline-flex items-center ml-5 space-x-6 lg:justify-end">
            <DarkMode />
            {/* {<a
        href="#"
        className="text-base font-medium leading-6 text-gray-600 whitespace-no-wrap transition duration-150 ease-in-out hover:text-gray-900 dark:text-white dark:hover:text-gray-400"
      >
        Sign in
      </a>
      <a
        href="#"
        className="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
      >
        Sign up
      </a>} */}
          </div>
        </div>
      </section>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#23272a"
          fillOpacity={1}
          d="M0,128L30,144C60,160,120,192,180,186.7C240,181,300,139,360,101.3C420,64,480,32,540,32C600,32,660,64,720,90.7C780,117,840,139,900,133.3C960,128,1020,96,1080,74.7C1140,53,1200,43,1260,42.7C1320,43,1380,53,1410,58.7L1440,64L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"
        />
      </svg>
    </>
  );
}

export default Nav;
