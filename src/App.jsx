import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ProjectList from "./components/ProjectList";
import SkillList from "./components/SkillList";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <SkillList />
      <About />
      <ProjectList />
    </>
  );
};
export default App;
