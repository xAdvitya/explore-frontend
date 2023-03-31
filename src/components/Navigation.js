import Link from 'next/link';

const Navigation = () => {
  return (
    <div className="flex items-center flex-row flex-wrap justify-between bg-[#3D0B37] w-screen h-22">
      <Link href="/">
        <div className="flex items-center">
          <img src="/explore.png" className="w-16 h-16 mr-2" />
        </div>
      </Link>

      <Link href="/">
        <div className="flex items-center">
          <span className="text-4xl text-white">Explore</span>
        </div>
      </Link>

      <div className="mr-2 dropdown">
        <img
          src="https://avatars.githubusercontent.com/u/54709416?v=4"
          className="w-14 h-14 border-2 border-white rounded-md"
        />
      </div>
    </div>
  );
};

export default Navigation;
