'use client';

import { useEffect, useState, useContext } from 'react';
import Cookies from 'js-cookie';
import { MdOutlineFeedback } from 'react-icons/md';
import { IoAddCircleOutline } from 'react-icons/io5';
import { CiSearch } from 'react-icons/ci';
import { SlCalender } from 'react-icons/sl';
import { TbSettingsAutomation } from 'react-icons/tb';
import { CiFilter } from 'react-icons/ci';
import { CiShare2 } from 'react-icons/ci';
import { Model } from './Model';
import TodoBoard from './TodoBoard';

import { appUrl } from './dummyData';
import { AppContext } from '../context/ApplicationContext';
//import { todos } from './dummyData';

const ThreeBoxesFunction = () => {
  const introductionImage =
    'https://img.freepik.com/free-vector/startup-partners-shaking-hands_74855-7874.jpg?t=st=1722366912~exp=1722370512~hmac=b31a9477fc32183b89827bf9e33674ec6a6e0f7ace85783c226d50ad399cf30d&w=740';

  const shareImage =
    'https://img.freepik.com/free-vector/users-following-unfollowing-vector_53876-62336.jpg?t=st=1722368138~exp=1722371738~hmac=bc8444c6eb4ca8295ccbc8ded9ab71175e295f42cebd32ef2c30f368557d4f34&w=740';

  const accessImage =
    'https://img.freepik.com/free-vector/online-concept-illustration_114360-1094.jpg?t=st=1722368403~exp=1722372003~hmac=d29e8a1f83c33a57722dc91d7338c1c8d41eae1905a22ba7bbd647fab6ae35dc&w=740';

  return (
    <div className="three-boxes-holder flex flex-row justify-around items-center w-full bg-slate-100 my-5 p-3">
      <div className="flex flex-row justify-between items-center rounded-md shadow-md p-2 w-80 h-28 bg-white">
        <img
          src={introductionImage}
          alt="introImage"
          className="w-16 h-16 rounded-md mr-2"
        />
        <div className="p-1">
          <h4 className="text-gray-500 font-bold text-sm">Introduction</h4>
          <p className="text-gray-400 text-xs break-words font-semibold">
            some randowm adasd asd; ksd apishdbhcoahndhaosncdpawc
            udpiubaspduciawds
          </p>
        </div>
      </div>
      <div className="flex flex-row justify-between items-center shadow-md rounded-md  p-2 w-80 h-28 bg-white">
        <img
          src={shareImage}
          alt="ShareImage"
          className="w-16 h-16 rounded-md mr-2"
        />
        <div className="p-1">
          <h4 className="text-gray-500 font-bold text-sm">
            Share Notes Instantly
          </h4>
          <p className="text-gray-400 text-xs break-words font-semibold">
            some randowm adasd asd; ksd apishdbhcoahndhaosncdpawc
            udpiubaspduciawds
          </p>
        </div>
      </div>
      <div className="flex flex-row justify-between items-center shadow-md rounded-md p-2 w-80 h-28 bg-white">
        <img
          src={accessImage}
          alt="accessImage"
          className="w-16 h-16 rounded-md mr-2"
        />
        <div className="p-1">
          <h4 className="text-gray-500 font-bold text-sm">Access Anywhere</h4>
          <p className="text-gray-400 text-xs break-words font-semibold">
            some randowm adasd asd; ksd apishdbhcoahndhaosncdpawc
            udpiubaspduciawds
          </p>
        </div>
      </div>
    </div>
  );
};

const Filters = () => {
  return (
    <div className="all-filter w-full p-2 mt-2 mb-2 flex flex-row justify-between items-center bg-slate-100">
      <div className="flex flex-row justify-between items-center w-48 h-22  ">
        <input
          type="search"
          placeholder="Search"
          className="border-none rounded-md outline-none"
        />
        <i>
          <CiSearch />
        </i>
      </div>
      <div className="flex flex-row justify-evenly items-center">
        <span className="flex flex-row justify-between items-center mr-2 ml-2">
          <p className="text-xs text-gray-500 mr-1">calender</p>
          <i className="font-bold text-gray-500">
            <SlCalender />
          </i>
        </span>
        <span className="flex flex-row justify-between items-center mr-2 ml-2">
          <p className="text-xs text-gray-500 mr-1">Automation</p>
          <i className="font-bold text-gray-500">
            <TbSettingsAutomation />
          </i>
        </span>
        <span className="flex flex-row justify-between items-center mr-2 ml-2">
          <p className="text-xs text-gray-500 mr-1">filter</p>
          <i className="font-bold text-gray-500">
            <CiFilter />
          </i>
        </span>
        <span className="flex flex-row justify-between items-center mr-2 ml-2">
          <p className="text-xs text-gray-500 mr-1">Share</p>
          <i className="font-bold text-gray-500">
            <CiShare2 />
          </i>
        </span>
        <button
          type="button"
          className="flex flex-row justify-between items-center bg-blue-600 rounded text-white text-xs transition hover:text-black hover:bg-white p-2 h-9 w-full"
        >
          Create a new task
          <i className="text-xl w-5 h-5 m-1">
            <IoAddCircleOutline className="text-white transition hover:text-black" />
          </i>
        </button>
      </div>
    </div>
  );
};

export const RightSide = () => {
  const token = Cookies.get('token');
  const { todos, setTodos } = useContext(AppContext);
  const dynamic = 'teja';

  const [modelCalledFrom, setModelCalledFrom] = useState('');

  const getAllTodoData = async () => {
    try {
      const res = await fetch(`${appUrl}/task`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });

      if (res.ok) {
        const data = await res.json();
        if (data.mesg) {
          return;
        }
        console.log(`todos data from server format ${data}`);
        setTodos(data);
      } else {
        console.log('Error fetching data:', res.statusText);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    console.log(token);
    getAllTodoData();
  }, []);

  return (
    <div className="p-3  w-full">
      <div className="flex flex-row justify-between items-center">
        <h1 className="text-4xl font-semibold">
          Good Morning {`${dynamic} !`}
        </h1>

        <div className="flex flex-row justify-start items-center ml-auto">
          <p>Help and Feedback</p>
          <i className=" text-xl w-5 h-5 m-1 text-gray-700">
            <MdOutlineFeedback />
          </i>
        </div>
      </div>
      <ThreeBoxesFunction />
      <Model value={modelCalledFrom} />
      <Filters />
      <TodoBoard todos={todos} />
    </div>
  );
};
