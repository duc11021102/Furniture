import Information from "./Information";
import Location from "./Location";
const Contact = () => {
  return (
    <div className="grid grid-cols-1 gap-10 sm:grid-cols-2  px-8 lg:px-12 xl:px-20 2xl:px-28">
      <Location />
      <Information />
    </div>
  );
};
export default Contact;
