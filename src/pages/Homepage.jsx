import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Highlight from "../components/Highlight";
import MostPicked from "../components/MostPicked";
import Navbar from "../components/Navbar";
import Review from "../components/Review";
import Head from "../elements/Head";

const Homepage = () => {
  return (
    <>
      <Head>Staycation Travel</Head>
      <>
        <Navbar />
        <Hero />
        <MostPicked />
        <Highlight />
        <Review />
        <Footer />
      </>
    </>
  );
};

export default Homepage;
