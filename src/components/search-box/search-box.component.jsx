import React from "react";

import './search-box.styles.css'

const SearchBox = ({placeholder, handleChange}) => {

    return(
        <div className="input-icon-wrap">
            <span className="input-icon">
                <span className="fa fa-search"></span>
            </span>
            <input
                type="search"
                name="searchField"
                placeholder={placeholder}
                onChange={handleChange}
            />
        </div>
    )
}

export default SearchBox;