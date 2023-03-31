const AddComments = () => {
  return (
    <div>
      <p className="text-xl">Add Comment</p>
      <div class="flex flex-col">
        <textarea class="border border-gray-400 rounded-lg p-2"></textarea>
        <button class="bg-blue-500 text-white font-bold py-2 px-2 rounded-lg mt-2 ">
          Post Review
        </button>
      </div>
    </div>
  );
};

export default AddComments;
