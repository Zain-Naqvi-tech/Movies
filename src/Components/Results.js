
// Import the React library to use JSX and React features
import React from 'react'

// Import the Result component, which will be used to display each individual movie result
import Result from './Result';

// Define the Results functional component, which receives a 'results' prop (an array of movie objects)
function Results({ results, openPopup }) {
    // The component returns a section element containing a list of Result components
    return (
        <section className="results"> {/* Container for all movie results */}
            {/* Iterate over the results array and render a Result component for each movie */}
            {results.map(result => (
                // Pass a unique key (imdbID) and the result object as props to each Result
                <Result key={result.imdbID} result={result} openPopup={openPopup}/>
            ))}
        </section>
    )
};

// Export the Results component as the default export of this file
export default Results