import axios from 'axios';
import { useEffect, useState, useContext } from 'react';
import { AuthContext } from '@/contexts/AuthContext';
import { useRouter } from 'next/router';

const Signup = ({ handelAuthPage }) => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [userNameError, setUserNameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const router = useRouter();
  const { setUser, setIsLoggedIn } = useContext(AuthContext);

  const handelUsername = (event) => {
    setUserNameError(false);
    setUserName(event.target.value);
  };

  const handelPassword = (event) => {
    setPasswordError(false);
    setPassword(event.target.value);
  };

  const handelLogin = () => {
    setIsLoggedIn(true);
    setUser(userName);
    router.push('/');
  };

  const handelLoginError = (error) => {
    alert('username exists');
    alert(error);
  };

  const handelSubmit = (event) => {
    event.preventDefault();
    let hasErrors = false;
    if (userName.trim() === '') {
      setUserNameError(true);
      setPasswordError(true);
      hasErrors = true;
    } else {
      setUserNameError(false);
    }
    if (password.trim() === '') {
      setPasswordError(true);
      hasErrors = true;
    } else if (password.trim().length < 8) {
      setPasswordError(true);
      alert('Password must be at least 8 characters long');
      hasErrors = true;
    } else {
      setPasswordError(false);
    }
    if (!hasErrors) {
      // console.log(`http://localhost:${process.env.PORT}/auth`);
      // console.log(`http://localhost:3001/auth`);
      axios
        .post(`http://localhost:3001/auth`, {
          userName: userName,
          password: password,
        })
        .then((response) => handelLogin())
        .catch((error) => handelLoginError(error));
    }
  };

  return (
    <div className="flex items-center justify-center mt-40">
      <div className="bg-gray-200 w-1/2 p-4 flex flex-col items-center">
        <h1 className="text-3xl mb-8 cursor-pointer">
          <span onClick={handelAuthPage}>Signup</span>
          <span className="text-sm block text-sky-400">click to login</span>
        </h1>
        <form className="flex flex-col items-center" onSubmit={handelSubmit}>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            {userNameError && (
              <p className="text-red-400 font-bold">enter Username</p>
            )}
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              value={userName}
              placeholder="Username"
              onChange={handelUsername}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            {passwordError && (
              <p className="text-red-400 font-bold">enter Password</p>
            )}
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              value={password}
              placeholder="Password"
              onChange={handelPassword}
            />
          </div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            signup
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
