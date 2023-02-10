import PropTypes from 'prop-types';
import { useState } from "react";


export const SearchMovies = ({ onSubmit }) => {
    const [query, setQuery] = useState([]);
    

    const handleChange = (e) => {
        setQuery(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        onSubmit(query)
}
    
    return <div>
        <form onSubmit={handleSubmit}>
            <input type="text" value={query} onChange={handleChange} autoComplete='off' placeholder="Please enter your query..." autoFocus/>
            <button type="submit">Search</button>
    </form></div>    
}

SearchMovies.propTypes = {
    onSubmit: PropTypes.func.isRequired
}