'use client';

import { useContext, useState } from 'react';
import { RxCross1 } from 'react-icons/rx';
import { CiMinimize1 } from 'react-icons/ci';
import { CiShare2 } from 'react-icons/ci';
import { MdFavoriteBorder } from 'react-icons/md';
import { GrStatusGood } from 'react-icons/gr';
import { FaPlus } from 'react-icons/fa6';
import { MdOutlinePriorityHigh } from 'react-icons/md';
import { SlCalender } from 'react-icons/sl';
import { TbPencilExclamation } from 'react-icons/tb';
import { appUrl } from './dummyData';
import Cookies from 'js-cookie';
import { AppContext } from '../context/ApplicationContext';

interface DropdownProps {
  value: string;
}

const Dropdown: React.FC<DropdownProps> = ({ value }) => {
  const [selectedOption, setSelectedOption] = useState(value);
  const [priority, setPriority] = useState('low');
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [inputText, setInputText] = useState('');
  const [title, setTitle] = useState('');

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const date = event.target.value;
    setSelectedDate(date);
    const formattedDate = new Date(date).toISOString().split('T')[0];
    console.log('Selected Date:', formattedDate);
  };

  const handlePostingData = async () => {
    if (title.length === 0 && selectedOption.length === 0) {
      console.log('title and status of the todo is needed');
      return;
    }
    const sendingObject = {
      title,
      description: inputText,
      status: selectedOption,
      priority,
      deadline: selectedDate,
    };

    const token = Cookies.get('token');
    try {
      const responce = await fetch(`${appUrl}/task`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(sendingObject),
      });

      if (responce.ok) {
        setTitle('');
        setInputText('');
        setPriority('low');
        setSelectedDate('');
        setSelectedOption('');
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <input
        className="text-gray-500 font-light m-2 text-4xl"
        placeholder="Title"
        onChange={(event) => setTitle(event.target.value)}
      />
      <div className="input-dropdown w-full p-2 h-26">
        <div className="flex flex-row justify-start items-center my-4">
          <div className="icon-lable w-20  flex flex-row justify-between items-center">
            <i className="text-gray-500 text-lg">
              <GrStatusGood />
            </i>
            <p>Status</p>
          </div>
          <select
            value={selectedOption}
            onChange={(event) => {
              setSelectedOption(event.target.value);
              console.log(selectedOption);
            }}
            className="ml-14 w-48 h-8 rounded-md border-none"
          >
            <option value="todo">To Do</option>
            <option value="inProgress">In Progress</option>
            <option value="underReview">Under Review</option>
            <option value="finished">Finished</option>
          </select>
        </div>
        <div className="flex flex-row justify-start items-center my-4">
          <div className="icon-lable w-20  flex flex-row justify-between items-center">
            <i className="text-gray-500 text-lg">
              <MdOutlinePriorityHigh />
            </i>
            <p>Priority</p>
          </div>
          <select
            value={priority}
            onChange={(event) => {
              setPriority(event.target.value);
              console.log(priority);
            }}
            className="ml-14 w-48 h-8 rounded-md border-none"
          >
            <option value="urgent">Urgent</option>
            <option value="medium">medium</option>
            <option value="low">low</option>
          </select>
        </div>
        <div className="flex flex-row justify-start items-center my-4">
          <div className="icon-lable w-20  flex flex-row justify-between items-center">
            <i className="text-gray-500 text-lg">
              <SlCalender />
            </i>
            <p className="ml-2">Calender</p>
          </div>
          <input
            type="date"
            value={selectedDate}
            onChange={handleDateChange}
            className=" rounded-md focus:outline-none focus:ring-2  focus:ring-blue-500 ml-14 w-48 h-8  border-none"
          />
        </div>
        <div className="flex flex-row justify-start items-center my-4">
          <div className="icon-lable w-20  flex flex-row justify-between items-center">
            <i className="text-gray-500 text-lg">
              <TbPencilExclamation />
            </i>
            <p className="ml-2">Description</p>
          </div>
          <textarea
            value={inputText}
            onChange={(event) => {
              setInputText(event.target.value);
              console.log(event.target.value);
            }}
            className="rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ml-14 w-56 h-24 border"
          />
        </div>
        <div className="icon-lable w-auto  flex flex-row justify-start items-center mt-2 mb-3">
          <i className="mr-3">
            <FaPlus />
          </i>
          <button onClick={handlePostingData}>Add custom Property</button>
        </div>
        <hr className="bg-black" />

        <p className="mt-4 md-4">
          {inputText.length !== 0
            ? 'Start Writing or drag your own files here'
            : inputText}
        </p>
      </div>
    </>
  );
};

export const Model = (props): any => {
  const { isVisible, setIsVisible } = useContext(AppContext);

  const handleModelClose = () => {
    setIsVisible(false);
  };

  return (
    <div
      className={`fixed inset-0 z-50 ${
        isVisible
          ? 'opacity-100 pointer-events-auto'
          : 'opacity-0 pointer-events-none'
      } transition-opacity duration-500 ease-in-out`}
    >
      <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>
      <div
        className={`fixed inset-0 z-50 flex justify-center items-center transform ${
          isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        } transition-transform transition-opacity duration-500 ease-in-out`}
      >
        <div className="modal w-5/12 h-full border-x p-2 bg-white rounded shadow-lg absolute right-0">
          <nav className="flex flex-row justify-between items-center">
            <div className="flex flex-row justify-start items-center">
              <button onClick={handleModelClose} type="button">
                <i className="mx-2">
                  <RxCross1 />
                </i>
              </button>

              <i className="mx-2">
                <CiMinimize1 />
              </i>
            </div>
            <div className="flex flex-row justify-between items-center w-auto h-10">
              <span className="flex flex-row justify-between items-center mr-1 bg-gray-200 p-2 rounded">
                share
                <i className="mx-2">
                  <CiShare2 />
                </i>
              </span>
              <span className="flex flex-row justify-between items-center ml-1 bg-gray-200 p-2 rounded">
                favorite
                <i className="mx-2">
                  <MdFavoriteBorder />
                </i>
              </span>
            </div>
          </nav>

          <Dropdown value={props ? props.value : ''} />
        </div>
      </div>
    </div>
  );
};
