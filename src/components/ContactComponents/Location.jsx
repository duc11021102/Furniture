import Address from "./Address";
import Phone from "./Phone";
import WorkingTime from "./Working";
const Location = () => {
  return (
    <div className="flex flex-col gap-10 mt-10">
      <Address />
      <Phone />
      <WorkingTime />
    </div>
  );
};
export default Location;
