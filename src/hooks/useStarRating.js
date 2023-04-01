import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

const useStarRating = () => {
  const [currentValue, setCurrentValue] = useState(undefined);
  const [hoverValue, setHoverValue] = useState(undefined);

  const handleStarClick = (value) => {
    setCurrentValue(value);
    console.log("value");
    console.log(currentValue);
  };

  const handleStarHover = (value) => {
    setHoverValue(value);
  };

  const handleStarLeave = () => {
    setHoverValue(undefined);
  };

  return {
    currentValue,
    hoverValue,
    handleStarClick,
    handleStarHover,
    handleStarLeave,
  };
};

export default useStarRating;
