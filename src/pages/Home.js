import { Navbar } from "../components/styles/Navbar.styled";
import {
  RightSideBar,
  LeftSideBar,
}

export default function Home() {
  return (
    <div>
      <Navbar />
      <LeftSideBar />
      <RightSideBar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}