
// Import the React library to use JSX and React features
import React from 'react';

// Define the Result functional component, which receives a 'result' prop (a movie object)
function Result({ result, openPopup }) {
    // The component returns a div containing the movie poster and title
    return (
        <div className="result" onClick={() => openPopup(result.imdbID)}> {/* Container for a single movie result */}
            {/* Display the movie poster image using the Poster property from the result object */}
            <img src={result.Poster} />
            {/* Display the movie title using the Title property from the result object */}
            <h3>{result.Title}</h3>
        </div>
    )
}

export default Result; // Export the Result component as the default export of this file
