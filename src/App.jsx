import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import CV from "./pages/cv";
import PersonalBestsPrivacyPolicy from "./pages/personalBestsPrivacyPolicy";
import SpeedometerPrivacyPolicy from "./pages/speedometerPrivacyPolicy";
import WeatherPrivacyPolicy from "./pages/weatherPrivacyPolicy";
import EmissionIqPrivacyPolicy from "./pages/emissionIqPrivacyPolicy";
import PortfolioPrivacyPolicy from "./pages/portfolioPrivacyPolicy";
import GradientShakerPrivacyPolicy from "./pages/gradientShakerPrivacyPolicy";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cv" element={<CV />} />
        <Route path="/personalBestsPrivacyPolicy" element={<PersonalBestsPrivacyPolicy />} />
        <Route path="/speedometerPrivacyPolicy" element={<SpeedometerPrivacyPolicy />} />
        <Route path="/weatherPrivacyPolicy" element={<WeatherPrivacyPolicy />} />
        <Route path="/emissionIqPrivacyPolicy" element={<EmissionIqPrivacyPolicy />} />
        <Route path="/portfolioPrivacyPolicy" element={<PortfolioPrivacyPolicy />} />
        <Route path="/gradientShakerPrivacyPolicy" element={<GradientShakerPrivacyPolicy />} />
      </Routes>
    </>
  );
}

export default App;
