import React from "react";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import NavBar from "./components/Navbar";
import RecentPosts from "./components/RecentPosts/RecentPosts";
const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <RecentPosts />
      <Footer />
    </>
  );
};

export default App;
