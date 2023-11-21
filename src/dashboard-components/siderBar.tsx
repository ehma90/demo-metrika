import { FC, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import clsx from "clsx";
import { LuLayoutGrid, LuUsers } from "react-icons/lu";
import { TbClipboardText } from "react-icons/tb";
import { HiArrowTrendingUp } from "react-icons/hi2";
import { IoWalletOutline } from "react-icons/io5";
import { FiLogOut, FiSettings } from "react-icons/fi";
import { CiCalendarDate } from "react-icons/ci";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi2";
import { BsCalendar2Week } from "react-icons/bs";
import { BsQuestionCircle } from "react-icons/bs";
import Link from "next/link";
import { MdClose } from "react-icons/md";

type Props = {
  open: boolean;
  toggle: () => void;
};

const menuLinks = [
  {
    href: "#",
    label: "Community",
    icon: <LuUsers size={24} />,
  },
  {
    href: "#",
    label: "Report",
    icon: <TbClipboardText size={24} />,
  },
  {
    href: "#",
    label: "Benefits",
    icon: <HiArrowTrendingUp size={24} />,
  },

  {
    href: "#ions",
    label: "Transactions",
    icon: <IoWalletOutline size={24} />,
  },
  {
    href: "#",
    label: "Meetings",
    icon: <BsCalendar2Week size={24} />,
  },
];

const Sidebar: FC<Props> = ({ open, toggle }) => {
  // mobile version
  const MobileSidbar = () => {
    return (
      <div className="md:hidden block p-4">
        <nav className="flex shrink-0 h-full flex-1 flex-col gap-4">
          <Link
            href="/"
            className="p-2 bg-justiceBlue-200 rounded-lg flex justify-center font-bold"
          >
            Logo
          </Link>

          <Link
            href="/dashboard"
            className=" shadow-md shadow-justiceBlue-400 rounded-xl bg-justiceBlue-600 hover:text-white hover:bg-justiceBlue-800 py-4 px-5 text-white flex justify-center"
          >
            <LuLayoutGrid size={24} />
          </Link>

          <ul role="list" className="flex flex-col flex-1 h-full">
            {menuLinks.map(({ href, label, icon }, index) => (
              <li
                key={index}
                className="hover:bg-justiceBlue-100  p-1 rounded-xl"
              >
                <Link
                  href={href}
                  className="group flex items-center justify-center gap-3 rounded-md px-2 py-4 text-sm font-medium leading-6 hover:text-black"
                >
                  {icon}
                </Link>
              </li>
            ))}
          </ul>
          <div>
            <Link
              href="#"
              className="group flex items-center justify-center gap-3 rounded-md px-2 py-4 text-sm font-medium leading-6 hover:text-black"
            >
              <HiOutlineQuestionMarkCircle size={24} color="#707070" />
            </Link>
            <Link
              href="#"
              className="group flex items-center justify-center gap-3 rounded-md px-2 py-4 text-sm font-medium leading-6 hover:text-black"
            >
              <FiSettings size={24} color="#707070" />
            </Link>
            <div className=" cursor-pointer px-2 py-4 flex items-center justify-center gap-2 text-sm font-red-hat font-bold">
              <FiLogOut size={24} color="#707070" />
            </div>
          </div>
        </nav>
      </div>
    );
  };
  const renderSidebar = (hidden: boolean) => {
    return (
      <div
        className={clsx(
          "lg:fixed lg:inset-y-0 lg:z-10 lg:flex w-full h-full lg:w-72 lg:flex-col border-r bg-white",

          {
            hidden: hidden,
          }
        )}
      >
        <div className="hidden md:flex grow flex-col gap-y-5 overflow-y-auto h-full px-6 pb-4 mt-6">
          <nav className="flex shrink-0 h-full flex-1 flex-col gap-4">
            <Link href="/" className="">
              Logo
            </Link>

            <Link
              href="/dashboard"
              style={{ boxShadow: "0px 10px 30px 0px rgba(152, 27, 27, 0.20)" }}
              className="rounded-xl hover:text-white hover:bg-red-800 py-4 px-5 text-white bg-red-700 flex items-center justify-between"
            >
              <p>Overview</p>
              <LuLayoutGrid size={24} />
            </Link>

            <ul role="list" className="flex flex-col flex-1 h-full">
              {menuLinks.map(({ href, label, icon }, index) => (
                <li key={index} className="hover:bg-red-200  p-1 rounded-xl hover:text-black text-gray-600">
                  <Link
                    href={href}
                    className="group flex items-center gap-3 rounded-md px-2 py-4 text-sm font-medium leading-6 "
                  >
                    {icon}
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-2">
              <Link
                href="#"
                className="group flex items-center gap-3 rounded-xl px-2 py-4 text-sm font-medium leading-6 hover:text-blue-500 hover:outline hover:outline-1"
              >
                <BsQuestionCircle size={24} />
                <p>Help Center</p>
              </Link>
              <Link
                href="#"
                className="hover:text-blue-500 flex items-center gap-3 rounded-xl px-2 py-4 text-sm font-medium leading-6 hover:outline hover:outline-1"
              >
                <FiSettings size={24} />

                <p>Settings</p>
              </Link>
              <div className=" cursor-pointer px-2 py-4 flex items-center gap-3 text-sm font-medium hover:outline hover:outline-1 rounded-xl">
                <FiLogOut size={24} />
                Logout
              </div>
            </div>
          </nav>
        </div>
        <MobileSidbar />
      </div>
    );
  };
  return (
    <>
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-50 lg:hidden" onClose={toggle}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-900/80" />
          </Transition.Child>

          <div className="fixed inset-0 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative mr-16 flex w-full max-w-[100px] flex-1">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute left-full top-0 flex w-8 justify-center pt-5">
                    <button
                      type="button"
                      className="-m-2.5 p-2.5"
                      onClick={toggle}
                    >
                      <span className="sr-only">Close sidebar</span>
                      <MdClose
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </Transition.Child>
                {renderSidebar(false)}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
      {renderSidebar(true)}
    </>
  );
};

export default Sidebar;
