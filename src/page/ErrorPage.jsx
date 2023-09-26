import MainFooter from "../components/FooterComponents/MainFooter";
import MainNavigation from "../components/NavBarComponents/MainNavigation";

const ErrorPage = () => {
  return (
    <>
      <MainNavigation />
      <div className="font-body text-center h-72 flex gap-4 flex-col justify-center items-center">
        <h1 className="text-black text-4xl font-bold">Not found!!!</h1>
        <p className="text-lg font-medium">Could not find resource or page.</p>
      </div>
      <MainFooter />
    </>
  );
};
export default ErrorPage;
