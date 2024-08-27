import Courses from "./components/Courses";
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
    </div>
  );
};

export default App;
