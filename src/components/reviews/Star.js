import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

const Star = () => {
  const stars = Array(5).fill(0);
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState();

  const handleClick = (value) => {
    setCurrentValue(value);
  };

  const handelMouseHover = (value) => {
    setHoverValue(value);
  };

  const handelMouseLeave = () => {
    setHoverValue(undefined);
  };

  return (
    <div>

    </div>
  );
};

export default Star;
