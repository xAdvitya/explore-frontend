

const Navigation = () => {
  return (
    <div className="flex items-center flex-row flex-wrap justify-between bg-orange-500 w-screen h-22">
      <div className="flex items-center">
        <img src="/explore.png" className="w-16 h-16 mr-2" />
      </div>

      <div className="flex items-center">
        <span className="text-4xl">Explore</span>
      </div>

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
