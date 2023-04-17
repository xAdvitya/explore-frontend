import { Inter } from 'next/font/google';
import { useEffect, useState } from 'react';
import rawAxios from 'axios';
import Navigation from '@/components/Navigation';
import SpotsCard from '@/components/SpotsCard';

export default function Home() {
  const [user, setUser] = useState();
  const [spots, setSpots] = useState();
  const [selectedOption, setSelectedOption] = useState('all');

  useEffect(() => {
    async function getSpots() {
      const url = `http://localhost:8080/spots/category/${selectedOption}`;
      const data = await rawAxios.get(url);
      setSpots(data.data);
      console.log(data.data);
    }
    getSpots();
  }, [selectedOption]);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    // setSelectedOption(event.target.value);
  };
  return (
    <div className="bg-purple-300 min-h-screen min-w-screen">
      <Navigation
        selectedOption={selectedOption}
        handleOptionChange={handleOptionChange}
      />
      <div className="flex flex-col justify-center items-center">
        {spots && <SpotsCard spots={spots} />}
      </div>
    </div>
  );
}
