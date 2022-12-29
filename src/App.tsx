import "./App.css";
import Layout from "./component/Layout/Layout";
import Countries from "./component/Countries/Countries";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CountryDetails from "./component/CountryDetails/CountryDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="list" element={<Countries />} />
          <Route path="list/:countryName" element={<CountryDetails/>} /> 
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
