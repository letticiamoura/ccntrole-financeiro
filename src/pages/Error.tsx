import Layout from "../components/Layout";

import error from "../assets/error.gif";
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <Layout>
      <div className="flex flex-col items-center px-5 space-y-5">
        <img
          src={error}
          alt="Gif de Error"
          className="w-full max-w-sm sm:max-w-md md:w-[30vw]"
        />
        <Link
          to="/"
          className="bg-indigo-950 w-full max-w-xs sm:max-w-sm lg:max-w-md p-3 md:p-2 rounded-md text-center text-white text-xl sm:text-2xl hover:bg-indigo-800"
        >
          Voltar ao início
        </Link>
      </div>
    </Layout>
  );
}
