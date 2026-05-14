import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import Activities
import FinalMco from "./mco/FinalMco";
import Activity1 from "./Activities/Activity1/Activity1";
import Activity2 from "./Activities/Activity2/Activity2";
import Activity3 from "./Activities/Activity3/Activity3";
import Activity4 from "./Activities/Activity4/Activity4";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FinalMco />} />
        <Route path="/activity1" element={<Activity1 />} />
        <Route path="/activity2" element={<Activity2 />} />
        <Route path="/activity3" element={<Activity3 />} />
        <Route path="/activity4" element={<Activity4 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
