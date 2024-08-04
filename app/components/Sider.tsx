'use client';
import { useContext } from 'react';
import { IoIosNotificationsOff } from 'react-icons/io';
import { CiBrightnessUp } from 'react-icons/ci';
import { MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md';
import { CiHome } from 'react-icons/ci';
import { LuClipboardSignature } from 'react-icons/lu';
import { PiMicrosoftTeamsLogoLight } from 'react-icons/pi';
import { CiSettings } from 'react-icons/ci';
import { IoAddCircleOutline } from 'react-icons/io5';
import { MdDownload } from 'react-icons/md';
import { TbReportAnalytics } from 'react-icons/tb';
import { AppContext } from '../context/ApplicationContext';

export const Sider = () => {
  const { isVisible, setIsVisible } = useContext(AppContext);
  const handleLogoutFunction = () => {
    //handle logout logic
  };

  const handleSiderOnClick = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="w-1/6 h-screen p-5 bg-white-500  mr-1 relative drop-shadow-xl border-slate-700  shadow-2xl">
      <div className="flex flex-row justify-start items-center">
        <img
          src=""
          alt="profile picture"
          className="rounded-full bg-black mr-1 w-9 h-9"
        />
        <p className="text-sm">some random</p>
      </div>

      <div className="flex flex-row justify-between items-center mt-2 mb-2">
        <div className="flex flex-row justify-evenly items-center w-1/3">
          <i className="text-xl w-5 h-5 m-1 text-gray-500">
            <IoIosNotificationsOff />
          </i>
          <i className=" text-xl w-5 h-5 m-1 text-gray-700">
            <CiBrightnessUp />
          </i>
          <i className=" text-xl w-5 h-5 m-1 text-gray-500">
            <MdOutlineKeyboardDoubleArrowRight />
          </i>
        </div>
        <button
          type="button"
          onClick={handleLogoutFunction}
          className=" bg-white hover:text-gray-500 hover:bg-gray w-1/3 h-7 rounded"
        >
          logout
        </button>
      </div>

      <div className="p-2">
        <a
          href="/"
          target="blank"
          className="flex flex-row justify-start items-center hover:border border-gray-700 rounded transition duration-300 mb-4"
        >
          <i className=" text-xl w-5 h-5 m-1 text-gray-700">
            <CiHome />
          </i>
          <h3 className="ml-3 text-gray-500">Home</h3>
        </a>
        <a
          href="/"
          target="blank"
          className="flex flex-row justify-start items-center hover:border border-gray-700 rounded transition duration-300 mb-4"
        >
          <i className=" text-xl w-5 h-5 m-1 text-gray-700">
            <LuClipboardSignature />
          </i>
          <h3 className="ml-3 text-gray-500">Boards</h3>
        </a>
        <a
          href="/"
          target="blank"
          className="flex flex-row justify-start items-center hover:border rounded  border-gray-700 transition duration-300 mb-4"
        >
          <i className=" text-xl w-5 h-5 m-1 text-gray-700">
            <PiMicrosoftTeamsLogoLight />
          </i>
          <h3 className="ml-3 text-gray-500">Teams</h3>
        </a>
        <a
          href="/"
          target="blank"
          className="flex flex-row justify-start items-center hover:border border-gray-700 rounded transition duration-300 mb-4"
        >
          <i className=" text-xl w-5 h-5 m-1 text-gray-700">
            <CiSettings />
          </i>
          <h3 className="ml-3 text-gray-500">Settings</h3>
        </a>
        <a
          href="/"
          target="blank"
          className="flex flex-row justify-start items-center hover:border rounded  border-gray-700 transition duration-300 mb-4"
        >
          <i className=" text-xl w-5 h-5 m-1 text-gray-700">
            <TbReportAnalytics />
          </i>
          <h3 className="ml-3 text-gray-500">Analytics</h3>
        </a>
      </div>

      <button
        type="button"
        className="flex flex-row justify-between items-center bg-blue-600 rounded text-white text-xs transition hover:text-black hover:bg-white p-2 h-9 w-full"
        onClick={handleSiderOnClick}
      >
        Create a new task
        <i className="text-xl w-5 h-5 m-1">
          <IoAddCircleOutline className="text-white transition hover:text-black" />
        </i>
      </button>

      <div className="flex flex-row justify-start items-center p-2 absolute bottom-0">
        <i className=" text-black transition  text-xl w-5 h-5 m-1 mr-2">
          <MdDownload />
        </i>
        <div className="ml-1">
          <h3 className="text-xs">Download the app</h3>
          <p className="text-xs">get the full expereince</p>
        </div>
      </div>
    </div>
  );
};
