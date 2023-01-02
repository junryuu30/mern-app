import React, { useEffect } from "react";
import Home from "../assets/Home.svg";
import hello from "../assets/hello.png";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import axios from "axios";

function Login() {
  const navigate = useNavigate();

  const login = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    try {
      const response = await axios.post(
        "/api/auth/login",{
          email,
          password,
        },
        { withCredentials: true }
      );
      console.log(response);
      localStorage.setItem('token', response.data.token);
      navigate("/home");
    } catch (err) {
      console.log(err);
    }
  };

  // const [loginData, setLoginData] = useState({
  // 	email: '',
  // 	password: '',
  // });

  const loginHandler = async () => {
    try {
      const response = await API.post("/login", loginData);
      console.log(response);
      // setLoginResponse(response.data);
      // localStorage.setItem('token', response.data.data.token);

      // localStorage.setItem('role', response.data.data.role);
      // localStorage.setItem('id', response.data.data.id);
      // setIsLogin(true);
    } catch (error) {
      console.log(error);
      // setLoginMessage(error.response.data.message);
    }
  };

  return (
    <div className="lg:flex">
      <div className="w-4/5 h-screen flex">
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
      <div className=" w-2/5 h-[100vh] flex justify-center items-center">
        <div className="mx-auto">
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
            <form className="px-10 m-3" onSubmit={login}>
              <h2 className="my-5 text-3xl">Login</h2>
              <label
                class="block text-gray-700 text-sm font-bold mb-2 mt-4"
                for="username"
              >
                Username
              </label>
              <input
                class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Username"
                name="email"
              />
              <label
                class="block text-gray-700 text-sm font-bold mb-2 mt-4 "
                for="password"
              >
                Password
              </label>
              <input
                class="appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="****"
                name="password"
              />
              <button
                className="w-full my-4 bg-blue-500 py-2 rounded-lg text-white"
                type="submit"
              >
                Login
              </button>
              <p className="text-center">
                Don't have an account yet?
                <Link to="/register">
                  <span className="text-blue-600 cursor-pointer ml-2">
                    Sign Up
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

export default Login;
