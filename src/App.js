import React, {useState} from "react";
import BusinessList from "./components/BusinessList/BusinessList";
import SearchBar from "./components/SearchBar/SearchBar";
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import BusinessDetails from "./components/BusinessDetails/BusinessDetails";


function App() {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [results, setResults] = useState([]);

  const handleSubmit = e => {
      e.preventDefault();
      fetch(
          `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${search}&location=${location}&sort_by=best_match&locale=tr_TR`,
          {
            headers: {
              Authorization: `Bearer NGmCbEa0-k94vR4niJeuZCyT6i7-C3bEatbQG627nJXKhnMqn2PNvQb-fqmcWX54oS3vh9L-MR3-uR3gAz9xrj-HP3lGPXBce7BpjbQxGY72HKLE8zBUwr0KzaWjYXYx`,
            },
          }
        ).then((response) => {
          return response.json();
        }).then(response => {
            setResults(response.businesses);
        })
      console.log("submit");
  }
  console.log(search,location);
  console.log(results);

  return (
    <Router>

      <div className="App">
        <Routes>
          <Route path="/" element={
            <div>
            <div className="back">
              <SearchBar 
              handleSubmit={handleSubmit} 
              search={search}
              setSearch={setSearch}
              location={location}
              setLocation={setLocation}
              />
            </div>
              <BusinessList 
              results={results} 
              
              />
            </div>
          }>

          </Route>
        
        <Route path="details/:id" element={<BusinessDetails /> }/>
        </Routes>
      </div>

    </Router>
  );
}

export default App;
