import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

const Card = ({ spot }) => {
  return (
    <div>
      <ul >
        <li
          className={`mx-5 my-3 rounded-md overflow-hidden bg-[#faf0e6] hover:drop-shadow-2xl`}
          key={spot.id}
        >
          <img
            src={spot.image}
            className="rounded-tl-lg  object-cover max-w-screen max-h-fit"
          />
          <h3 className="mx-5 my-3 font-semibold mt-3 text-2xl capitalize">
            {spot.name}
          </h3>

          <div className="mx-5 my-3 flex items-start mt-2 gap-2">
            <FontAwesomeIcon
              icon={faLocationDot}
              style={{ fontSize: 20, color: 'grey' }}
            />
            <p className="lowercase">{spot.location}</p>
          </div>

          <p className="mx-5 my-3 font-normal text-gray-700 lowercase text-justify">
            {spot.description}
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Card;
