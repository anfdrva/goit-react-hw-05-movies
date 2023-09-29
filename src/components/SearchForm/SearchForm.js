import { useState } from 'react';


const SearchForm = ({ setParams }) => {
    const [query, setQuery] = useState('');

    const handlerChange = evt => {
        setQuery(evt.target.value.trim().toLowerCase());
    };

    const handlerSubmit = evt => {
        evt.preventDefault();

        setParams(query);
    };

    return (
        <form onSubmit={handlerSubmit}>
            <input type="text" name="search" onChange={handlerChange} />
            <button type="submit">Search</button>
        </form>
    )
};

export default SearchForm;