import React from "react";

const Header = ({searchItem, setSearchItem}) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg ">
        <div className="container d-flex justify-content-between align-items-center">
          <a className="navbar-brand fw-semibold fs-1" href="#" style={{fontFamily: '"Lavishly Yours", "cursive"', color: 'red'}}>
            meetup
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search by titles or tags"
                aria-label="Search"
                value={searchItem}
                onChange={(e)=> setSearchItem(e.target.value)}
              />
            </form>
        </div>
      </nav>
    </>
  );
};

export default Header;
