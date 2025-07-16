
// Import the React library to use JSX and React features
import React from 'react'

// Define the Search functional component, which receives two props:
// handleSearch: a function to handle input changes
// search: a function to handle key down events (like pressing Enter)
function Search({ handleSearch, search }) {
    // The component returns a section containing a search input box
    return (
        <section className="search"> {/* Container for the search input */}
            {/* Input box for typing the movie name. Calls handleSearch on change and search on key down */}
            <input
                type="text"
                placeholder="Search for a movie..."
                className="searchbox"
                onChange={handleSearch}
                onKeyDown={search}
            />
        </section>
    )
}

// Export the Search component as the default export of this file
export default Search