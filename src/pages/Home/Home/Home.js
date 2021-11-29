import React from "react";
import Navigation from "../../shared/Navigation/Navigation";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Mailer from "../Mailer/Mailer";
import Projects from "../Projects/Projects";

const Home = () => {
  return (
    <div>
      <Navigation></Navigation>
      <Banner></Banner>
      <About></About>
      <Projects></Projects>
      <Mailer></Mailer>
    </div>
  );
};

export default Home;
