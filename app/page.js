
import Color from "./components/Color";
import Footer from "./components/Footer";
import Landing from "./components/Landing";
import Offer from "./components/Offer";
import Products from "./components/Products";
import Review from "./components/Review";
// import Navbar from "./components/NavBar";

export default function Home() {
  return (
    <main className="bg-[#ffffff] ">
      {/* <Navbar /> */}
      <Landing />
      <Offer />
      <Products />
      <Color  className="mt-5 "/>
      <Review className="mb-5 "/>
      <Footer />
    </main>
  );
}
