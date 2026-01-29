import Heading from "./Components/Heading/Heading";
import Footer from "./Components/Footer/Footer";
import ToDo from "./Components/ToDo/ToDo";

export function App() {
  return (
    <div className="container">
      <Heading title="Daily Todo's" />
      <ToDo />
      <Footer company="Coders Lab" />
    </div>
  );
}
