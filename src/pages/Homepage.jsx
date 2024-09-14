import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Head from "../elements/Head";

const Homepage = () => {
  return (
    <>
      <Head>Staycation Travel</Head>
      <div>
        <Navbar />
        <Hero />
      </div>
    </>
  );
};

export default Homepage;
