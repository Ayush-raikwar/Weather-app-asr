import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { routeTexts } from "./constants/routeTexts";
import { WeatherView } from "./pages/weather-view/WeatherView";

function App() {



  return (
    <Routes>
      <Route
        path={routeTexts.HOME} element={<Home />}
      />
      <Route
        path={routeTexts.WEATHER_VIEW} element={<WeatherView />}
      />
    </Routes>
  );
}

export default App;
