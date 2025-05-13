import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function RootPage() {
  return (
    <>
    <Navbar lang="en-US"/>
        <Home/>
    <Footer/>
    </>
  );
}
