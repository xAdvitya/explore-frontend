import Navigation from '@/components/Navigation';
import axios from 'axios';
import { useEffect, useState, useContext } from 'react';
import { AuthContext } from '@/contexts/AuthContext';
import { useRouter } from 'next/router'

const AuthPage = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [userNameError, setUserNameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const router = useRouter()
  const { setIsLoggedIn } = useContext(AuthContext);

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
    router.push('/')
  };

  const handelLoginError = (error) => {
    alert("use correct username/password")
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
    } else if (password.trim().length < 3) {
      setPasswordError(true);
      alert('Password must be at least 3 characters long');
      hasErrors = true;
    } else {
      setPasswordError(false);
    }
    if (!hasErrors) {
      axios
        .post(`http://localhost:8080/auth/${userName}`, {
          password: password,
        })
        .then((response) => handelLogin())
        .catch((error) => console.log(error));
    }
  };

  return (
    <>
      <Navigation />
      <div className="flex items-center justify-center mt-40">
        <div className="bg-gray-200 w-1/2 p-4 flex flex-col items-center">
          <h1 className="text-3xl mb-4">Login</h1>
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
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AuthPage;
