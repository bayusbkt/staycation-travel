import Hero from "../components/Hero";
import Highlight from "../components/Highlight";
import MostPicked from "../components/MostPicked";
import Navbar from "../components/Navbar";
import Head from "../elements/Head";

const Homepage = () => {
  return (
    <>
      <Head>Staycation Travel</Head>
      <div>
        <Navbar />
        <Hero />
        <MostPicked />
        <Highlight />
      </div>
    </>
  );
};

export default Homepage;
