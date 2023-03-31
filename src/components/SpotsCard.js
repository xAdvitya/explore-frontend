import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import styles from './Card.module.css';
import Link from 'next/link';

const SpotsCard = ({ spots }) => {
  return (
    <div>
      <ul className="mx-14 grid grid-cols-3 gap-8">
        {spots.map((spot) => (
          <li
            className={`mx-5 my-3 rounded-md overflow-hidden bg-[#faf0e6] ${styles.card} hover:drop-shadow-2xl`}
            key={spot.id}
          >
            <Link href={`/spot/${spot.id}`}>
              <img
                src={spot.image}
                className="max-w-full max-h-full rounded-tl-lg overflow-hidden object-cover"
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
                Advitya is a young man who has a deep passion for technology and
                loves to explore new things. He is an avid learner and is always
                eager to acquire new skills and knowledge. With his natural
                curiosity and dedication, he is determined to achieve his goals
                and succeed in his endeavors.
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SpotsCard;
