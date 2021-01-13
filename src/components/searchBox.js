import React from 'react'

const SearchBox = ({ placeholder, handleChange }) => {
    return (
        <div class="card-body" id="input-filter-body">
            <div class="container">
                <input type="search" class="form-control rounded"
                    placeholder={placeholder}
                    onChange={handleChange}
                />
            </div>
        </div>
    )
}

export default SearchBox