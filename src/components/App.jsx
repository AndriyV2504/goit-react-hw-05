import { Route, Routes } from "react-router-dom";
import Navigation from "./Navigation/Navigation";

const App = () => {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<h1>Home page</h1>} />
        <Route path="/movies" element={<h1>Movies</h1>} />
      </Routes>
    </div>
  );
};

export default App;
