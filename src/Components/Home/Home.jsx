import Banner from "../Home/HomeContent/Banner/Banner";
import CardContent from "../../Components/Home/HomeContent/CardContent/CardContent";
import FormDemo from "./HomeContent/FormDemo/FormDemo";
import GridcardContent from "./HomeContent/GridcardContent/GridCardContent";
function Home() {
  return (
    <div>
      <Banner></Banner>
      <GridcardContent></GridcardContent>
      <CardContent></CardContent>
      <FormDemo></FormDemo>
    </div>
  );
}

export default Home;
