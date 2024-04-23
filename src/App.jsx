import Navbar from "./Navbar";
import Hero from "./Hero";
import Tabs from "./Tabs";
import Box from "./Box";
import FAQ from "./FAQ";
import Newsletter from "./Newsletter";
import Footer from "./Footer";

function App() {
  return (
    <div className=" overflow-x-hidden">
      <Navbar />
      <Hero />
      <Tabs />
      <Box />
      <FAQ />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
