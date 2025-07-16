
// Import React and useState hook for managing component state
import React, {  useState } from 'react';

// Import the Search component for the search input box
import Search from './Components/Search';

// Import the Results component to display the list of movies
import Results from './Components/Results';

// Import axios for making HTTP requests to the OMDB API
import axios from 'axios'

import Popup from './Components/Popup';


// DateTime component to show current date and time
import { useEffect } from 'react';
function DateTime() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000); // update every second
    return () => clearInterval(timer); // cleanup
  }, []);

  return (
    <div style={{ color: 'white', textAlign: 'left', fontWeight: 600, marginBottom: 10, }}>
      {currentTime.toLocaleString()}
    </div>
  );
}

// Define the main App functional component
function App() {
  // useState hook to manage the application's state
  const [state, setState] = useState({
    s: "", // Search input value
    results: [], // Array to store search results
    selected: {} // Object to store selected movie details (not used in this code)
  });

  // The base URL for the OMDB API 
  const apiURL = "https://www.omdbapi.com/?apikey=8fd52451";

  // Function to handle the search when the user presses Enter in the search box
  const search = (e) => {
    if (e.key === "Enter") {
      axios(apiURL + "&s=" + state.s).then(({ data }) => {
        let results = data.Search;
        setState(prevState => {
          return { ...prevState, results: results };
        });
      }).catch(err => {
        console.error("Error fetching data: ", err);
      });
    }
  }

  // Function to handle changes in the search input box
  const handleSearch = (e) => {
    let s = e.target.value
    setState(prevState => {
      return { ...prevState, s: s };
    });
  }

  const closePopup = () => {
    setState(prevState => {
      return { ...prevState, selected: {} };
    });
  }

  const openPopup = id => {
    axios(apiURL + "&i=" + id).then(({ data }) => {
      let result = data;
      setState(prevState => {
        return { ...prevState, selected: result };
      });
    }).catch(err => {
      console.error("Error fetching movie details: ", err);
    });
  }

  // Render the main application UI
  return (
    <div className="App"> {/* Main container for the app */}
      {/* Top orange bar */}
      <header className="App-header"> {/* Header section */}
        {/* Orange bar above the Movies text */}
        {/* DateTime component for current date and time */}
        <DateTime />
        <h1>Movies</h1> {/* App title */}
        {/* Render the Search component and pass the handlers as props */}
        <Search handleSearch={handleSearch} search={search} />
        {/* Render the Results component and pass the results array as a prop */}
        <Results results={state.results} openPopup={openPopup}/>
        {(typeof state.selected.Title != "undefined") ? <Popup selected={state.selected} closePopup={closePopup} /> : false}
        {/* Orange bar at the bottom of the header */}
      </header>
      {/* Bottom orange bar */}
    </div>
  );
}

export default App;
