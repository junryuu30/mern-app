import React, { useEffect } from "react";
import checkbox from '../assets/checkbox.png'
import ceklis from '../assets/ceklis.png'
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate()

  const logoutHandler = () => {
		localStorage.removeItem('token');
		// setIsLogin(false);
    nav
	};


  return (
    <div className="flex h-[100vh]">
      <div className=" w-1/5 flex bg-slate-300">
        <div className="mx-10 mt-20">
          <h3 className="my-3 text-3xl font-semibold">All Task</h3>
          <h3 className="my-3 text-2xl font-normal">Favourites</h3>
          <h3 className="my-3 text-2xl font-normal">Groceries</h3>
          <h3 className="my-3 text-2xl font-normal">Work</h3>
          <h3 className="my-3 text-2xl font-light text-slate-400 cursor-pointer">
            + New Category
          </h3>
        </div>
      </div>

      <div className=" w-4/5">
        <div className="m-16 my-10">
          <h2 className="mb-5 text-5xl font-bold">All Task</h2>
          <div className="">
            <input
              className="appearance-none border rounded-md w-1/2 py-4 px-3 text-black bg-slate-300 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Add a new task"
            />
          </div>
        </div>
        <div className="mx-16 my-4">
          <div className="flex">
            <div className="flex items-center h-5">
              <input
                id="helper-checkbox"
                aria-describedby="helper-checkbox-text"
                type="checkbox"
                value=""
                className="w-10 h-10 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
            </div>
            <div className="ml-2 text-sm">
              <label
                for="helper-checkbox"
                className="font-medium text-3xl text-gray-900 dark:text-gray-300"
              >
               Buy Bananas for the pancakes
              </label>
            </div>
            <div>
               <button className="px-10 py-2 bg-red-300 ml-7 rounded-full">Work</button>
            </div>
          </div>

          <div className="flex">
               <div>
                    <img src={checkbox} className="cursor-pointer"/>
                    {/* <img src={ceklis} className="cursor-pointer absolute top-60"/> */}

               </div>
               <div>
                    <h3 className="my-3 text-2xl ml-4 font-normal">Work</h3>
               </div>
               <div>
                    <button className="px-10 py-2 bg-slate-500 ml-7 rounded-full">Work</button>
            </div>
          </div>
        </div>
      </div>
      <div className= "w-1/5 flex justify-center">
        <div className="pt-10">
          <h2>Haii: .....</h2>
          <button className="bg-purple-400 py-2 px-5 mt-5 rounded-md"
          onClick={() => {
            logoutHandler();
            navigate('/');
          }}
          >Logout</button>
        </div>
      </div>

    </div>
  );
}

export default Home;
