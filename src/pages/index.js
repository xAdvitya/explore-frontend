import { Inter } from 'next/font/google';
import { useEffect, useState } from 'react';
import rawAxios from 'axios';
import Navigation from '@/components/Navigation';
import SpotsCard from '@/components/SpotsCard';

export default function Home() {
  const [user, setUser] = useState();
  const [spots, setSpots] = useState();
  const url = 'http://localhost:8080/spots';

  useEffect(() => {
    async function getSpots() {
      const data = await rawAxios.get(url);
      setSpots(data.data);
      console.log(data.data);
    }
    getSpots();
  }, []);
  return (
    <div className='bg-purple-300'>
      <Navigation />
      <div className="flex flex-col justify-center items-center">{spots && <SpotsCard spots={spots} />}</div>
    </div>
  );
}
