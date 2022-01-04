import React from 'react'


function SearchBar(props) {

    return (
        <div className="search-bar">
            <form className="search-bar--one" onSubmit={props.handleSubmit}>
                <input
                    className="search-bar--i"
                    placeholder="Ne Arıyorsunuz?"
                    required
                    value={props.search}
                    onChange={(e) => props.setSearch(e.target.value)}/>
                <input
                    className="search-bar--w"
                    placeholder="Nerede?"
                    required
                    value={props.location}
                    onChange={(e) => props.setLocation(e.target.value)} />

                <button className="search-bar--button" type="submit">Ara</button>
            </form>
        </div>
    )
}

export default SearchBar
