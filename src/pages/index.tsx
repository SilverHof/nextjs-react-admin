import Image from "next/image";
import { Inter } from "next/font/google";
import dynamic from "next/dynamic";
import { NextPage } from "next";

const inter = Inter({ subsets: ["latin"] });

const App = dynamic(() => import("../pages/admin/App"), { ssr: false });

const Home: NextPage = () => {
   return <App />;
};

export default Home;
