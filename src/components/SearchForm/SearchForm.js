import { useEffect, useState } from 'react';

const SearchForm = ({ setParams, initialQuery }) => {
    const [query, setQuery] = useState(initialQuery || '');

    const handlerChange = evt => {
        setQuery(evt.target.value.trim().toLowerCase());
    };

    const handlerSubmit = evt => {
        evt.preventDefault();

        setParams(query);
    };

    useEffect(() => {
        setQuery(initialQuery || '')
    }, [initialQuery]);

    return (
        <form onSubmit={handlerSubmit}>
            <input type="text" name="search" value={query} onChange={handlerChange} />
            <button type="submit">Search</button>
        </form>
    );
};

export default SearchForm;
