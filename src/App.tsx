import "./App.css";
import { useEffect, useState } from "react";

import Loader from "./components/Loader/Loader";
import Cursor from "./components/Cursor/Cursor";
import CursorGlow from "./components/CursorGlow/CursorGlow";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Technologies from "./components/Technologies/Technologies";
import Projects from "./components/Projects/Projects";
import Learning from "./components/Learning/Learning";
import Experience from "./components/Experience/Experience";
import Contact from "./components/Contact/Contact";
import BackToTop from "./components/BackToTop/BackToTop";
import Footer from "./components/Footer/Footer";
import ScrollProgress from "./components/ScrollProgress/ScrollProgress";



function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      {/* <Cursor />
*/}      <ScrollProgress />
      {/*   <CursorGlow/> */}
      <Navbar />

      <Hero />
      <About />
      <Skills />
      <Technologies />
      <Projects />
      <Learning />
      <Experience />
      <Contact />
      <BackToTop />
      <Footer />

     
    </>
  );
}

export default App;
