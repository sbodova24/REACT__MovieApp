import React from 'react'

export default function SearchBar() {
    return (
        <>
            <div>
                <form className="search-bar mx-auto d-flex align-items-center">
                    <input
                        className="form-control search-input"
                        type="text"
                        placeholder="Enter keywords"
                        aria-label="Search"
                    />
                    <button className="btn btn-orange search-btn" type="submit">
                        <i className="bi bi-search"></i>
                    </button>
                </form>
            </div>
        </>
    )
}
