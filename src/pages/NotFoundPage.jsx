import { Image } from "@nextui-org/react";
import Footer from "../components/Footer";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen gap-6 p-4 bg-slate-200">
      <h1 className="sm:text-3xl text-2xl text-red-600 font-semibold sm:pt-6">
        ERROR : 404
        <br />
        Sorry, page not found
      </h1>
      <Image src="src/assets/404.svg" className="max-w-xs" alt="404" />
      <Footer />
    </div>
  );
};

export default NotFoundPage;
