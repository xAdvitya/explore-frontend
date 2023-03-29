import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

const SpotsCard = ({ spots }) => {
  return (
    <div className="flex flex-row justify-center items-center">
      <ul className="grid grid-cols-3 gap-4 ">
        {spots.map((spot) => (
          <li
            className="mt-5 rounded-md overflow-hidden bg-gray-500 drop-shadow-xl"
            key={spot.id}
          >
            <img
              src={spot.image}
              className="max-w-full max-h-full rounded-tl-lg overflow-hidden object-cover"
            />
            <h3 className="ml-5 text-2xl">{spot.name}</h3>

            <div className="ml-5 flex items-start mt-2 gap-2">
              <FontAwesomeIcon
                icon={faLocationDot}
                style={{ fontSize: 20, color: 'grey' }}
              />
              <p>{spot.location}</p>
            </div>

            <p className="ml-5 font-normal text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SpotsCard;
