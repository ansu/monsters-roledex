import React from 'react';
import './search-field.styles.css'

const SearchField  = ({placeHolder, handleChange}) => {

    return(
        <div>
             <input className='search'
                type='search' 
                placeholder= {placeHolder}
                onChange={handleChange}
             />     
        </div>
    )
}


export default SearchField;