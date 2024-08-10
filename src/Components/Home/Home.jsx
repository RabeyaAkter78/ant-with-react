import React from "react";
import Banner from "../Home/HomeContent/Banner/Banner";
import CardContent from "../../Components/Home/HomeContent/CardContent/CardContent";
import FormDemo from "./HomeContent/FormDemo/FormDemo";
function Home() {
  return (
    <div>
      <Banner></Banner>
      <CardContent></CardContent>
      <FormDemo></FormDemo>
    </div>
  );
}

export default Home;
