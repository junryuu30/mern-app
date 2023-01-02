import React from "react";
import Home from "../assets/Home.svg";
import hello from "../assets/hello.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast";

function Register() {
  const navigate = useNavigate()

  const register = async (e) => {
    e.preventDefault();
    const user = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
    };
    try {
      // await axios.post('http://localhost:5000/api/auth/register', user);
      await axios.post('/api/auth/register', user);
      toast.success('Registered successfully');
      navigate("/")
    } catch (err) {
      console.log(err);
      toast.error('Something went wrong');
    }
  };

  return (
    <div className="flex">
      <div className="w-4/6 h-screen flex">
        <div className="my-20 mx-32">
          <div>
            <h2 className="font-todo font-bold text-8xl">TO DO</h2>
            <h2 className="font-todo font-bold text-8xl">LIST</h2>
          </div>
          <div className="my-10 w-2/3">
            <img
              src={Home}
              alt="heroImg"
              className="hero-img rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
      <div className=" w-2/6 h-screen flex justify-center items-center">
        <div className="">
          <div className="px-10 mx-3">
            <div className="inline-flex">
              <h3 className="text-xl mb-3 mr-3">Welcome to To Do List</h3>
              <img src={hello} alt="hello" className="w-6 h-6" />
            </div>

            <p className="text-sm">
              Please sign-in to your account, and start manage further
            </p>
          </div>
          <div className="">
            <form className="px-10 m-3" onSubmit={register}>
              <h2 className="my-2 text-3xl">Sign Up</h2>
              <label
                class="block text-gray-700 text-sm font-bold mb-2 mt-2"
                for="name"
              >
                Name
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="Name"
                name="name"
              />
              <label
                className="block text-gray-700 text-sm font-bold mb-2 mt-2"
                for="PhoneNumber"
              >
                Phone Number
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="PhoneNumber"
                type="number"
                placeholder="+62"
              />
              <label
                className="block text-gray-700 text-sm font-bold mb-2 mt-2"
                for="email"
              >
                Email
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="text"
                placeholder="example@email.com"
                name="email"
              />
              <label
                className="block text-gray-700 text-sm font-bold mb-2 mt-2"
                for="username"
              >
                Username
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Username"
              />
              <label
                className="block text-gray-700 text-sm font-bold mb-2 mt-2 "
                for="password"
              >
                Password
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-2 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="****"
                email="password"
              />
              <button className="w-full my-4 bg-blue-500 py-2 rounded-lg text-white" type="submit">
                Sign Up
              </button>
              <p className="text-center">
                Already have an account?
                <Link to="/">
                  <span className="text-blue-600 cursor-pointer ml-2">
                    Login
                  </span>
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
