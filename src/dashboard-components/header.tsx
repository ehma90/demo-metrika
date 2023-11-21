import Image from "next/image";
import React, { FC } from "react";
import { IoIosNotificationsOutline } from "react-icons/io";
import { RiMenuFill } from "react-icons/ri";


type DashboardHeaderProps = {
  toggle: () => void;
};

const DashboardHeader: FC<DashboardHeaderProps> = ({ toggle }) => {
  return (
    <div className="sticky top-0 z-10 flex h-[70px] shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 w-full">
      <div className="flex flex-1 items-center justify-between md:justify-start gap-x-4 self-stretch lg:gap-x-6">
        <button
          type="button"
          className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
          onClick={toggle}
        >
          <span className="sr-only">Open sidebar</span>
          <RiMenuFill className="h-6 w-6" aria-hidden="true" />
        </button>
        <div className="flex justify-between w-full">
          <div></div>
          <div className="flex items-center justify-end gap-4">
            <div className="p-2 border-2 border-gray-200 border-justiceBlue-50 rounded-full cursor-pointer">
              <IoIosNotificationsOutline size={24} className=" text-gray-400" />
            </div>
            <div>
              <Image
                src="/images/user-profile.png"
                width={40}
                height={40}
                alt="user"
                className=" rounded-full"
              />
            </div>
            <p className="hidden md:block font-medium">Emmanuel</p>
          </div>
        </div>
        <div className="flex items-center gap-x-4 lg:gap-x-6"></div>
      </div>
    </div>
  );
};

export default DashboardHeader;
