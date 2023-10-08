import InputComponents from "./InputComponents";
import AreaComponents from "./AreaComponents";
import ButtonSubmit from "./ButtonSubmit";
const Information = () => {
  return (
    <div className="flex flex-col gap-4">
      <InputComponents title="Your name" placeholder="Abc" />
      <InputComponents title="Email address" placeholder="Abc@gmail.com" />
      <InputComponents title="Subject" placeholder="This is an optional" />
      <AreaComponents title="Message" placeholder="Hi! i’d like to ask about" />
      <ButtonSubmit />
    </div>
  );
};
export default Information;
