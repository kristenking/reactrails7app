import React from 'react';


const Navbar = () => {
    const handleSearch = (event) => {
        event.preventDefault();
        const query = event.target.searchInput.value;
        console.log('Search:', query);
        // Implement your search logic here
      };
    
      return (
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container-fluid justify-content-end">
            <form className="d-flex" onSubmit={handleSearch}>
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                name="searchInput"
 
              />
              <button className="btn btn-outline-warning" type="submit">
                Search
              </button>
            </form>
          </div>
        </nav>
      );
}

export default Navbar