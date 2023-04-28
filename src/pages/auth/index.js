import Navigation from '@/components/Navigation';
import { useEffect, useState, useContext } from 'react';
import Signin from './components/Signin';
import Signup from './components/Signup';

const AuthPage = () => {
  const [signup, setSignup] = useState(false);

  const handelAuthPage = () => {
    setSignup(!signup);
  };
  return (
    <>
      <Navigation />
      {!signup && <Signin handelAuthPage={handelAuthPage} />}
      {signup && <Signup handelAuthPage={handelAuthPage} />}
    </>
  );
};

export default AuthPage;
