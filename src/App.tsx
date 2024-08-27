import Career from "./components/Career";
import Courses from "./components/Courses";
import Events from "./components/Events";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Partners from "./components/Partners";

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Courses />
      <Partners />
      <Events />
      <Career />
      <Footer />
    </div>
  );
};

export default App;
