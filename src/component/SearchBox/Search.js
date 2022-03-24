import React from 'react';
import './Search.css'

const Search = () => {
    return (
        <div className='search-conteiner'>
            <div>
                <input type="text" Id='inputFild' />
                <button className='search-box'>Search</button>
            </div>
        </div>
    );
};

export default Search;