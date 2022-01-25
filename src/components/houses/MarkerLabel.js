const MarkerLabel = ({ price }) => {
  return (
    <>
      <div className="relative flex items-center py-1 pl-2 pr-[4.5rem] text-sm font-semibold text-black bg-white border border-gray-200 border-solid justufy-center rounded-2xl hover:scale-110 hover:duration-200 hover:z-10">
        <div>₩{price}</div>
      </div>
    </>
  );
};

export default MarkerLabel;
