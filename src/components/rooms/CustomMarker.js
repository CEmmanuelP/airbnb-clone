import { ReactComponent as House } from "../../assets/ic-big-house.svg";

const CustomMarker = () => {
  return (
    <>
      <div className="rounded-full">
        <House className="p-3 text-white rounded-full bg-primary" />
      </div>
    </>
  );
};

export default CustomMarker;
