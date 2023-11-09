const MainFooter = () => {
  return (
    <footer className="px-8 md:px-8 lg:px-20 py-5 font-body border-t-2">
      <div className="flex flex-col gap-10  md:flex-row md:justify-between border-b-2 pb-10">
        <div className="flex flex-col gap-2 md:gap-10 md:max-w-xs">
          <h1 className="font-bold text-xl">Funiro.</h1>
          <p className="text-base font-medium text-gray-500">
            400 University Drive Suite 200 Coral Gables,FL 33134 USA
          </p>
        </div>

        <div className="flex flex-col gap-2 md:gap-10 max-w-xs">
          <h1 className="font-medium text-gray-500">Links</h1>
          <p className="text-base font-bold ">Home</p>
          <p className="text-base font-bold ">Shop</p>
          <p className="text-base font-bold ">About</p>
          <p className="text-base font-bold ">Contact</p>
        </div>

        <div className="flex flex-col gap-2 md:gap-10 max-w-xs">
          <h1 className="font-medium text-gray-500">Help</h1>
          <p className="text-base font-bold ">Payment Options</p>
          <p className="text-base font-bold ">Returns</p>
          <p className="text-base font-bold ">Privacy Policies</p>
        </div>
        <div className="flex flex-col gap-2 md:gap-9 max-w-xs">
          <h1 className="font-medium text-gray-500">Newsletter</h1>
          <p className="text-base font-bold border-b-2 border-black">
            SUBCRIBE
          </p>
        </div>
        <div className="flex flex-col gap-10"></div>
      </div>
      <p className="mt-8 font-medium">2023 furino. All rights reverved</p>
    </footer>
  );
};
export default MainFooter;
