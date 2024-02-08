import React, {useState} from 'react';
import searchIcon from '../../img/common/search.svg'
const Search = () => {

    const [srchVal,setSrchVal]=useState('');

    return (
        <div className="nav__actions-search">
            <input
                type="text"
                value={srchVal}
                onChange={(e) => setSrchVal(e.target.value)}
            />
            <button className="nav__actions-search-button">
                <img src={searchIcon} alt="search"/>
            </button>
        </div>
    );
};

export default Search;