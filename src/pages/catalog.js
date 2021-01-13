import React, { useState } from "react"
import Caps from '../components/caps';
import SearchBox from '../components/searchBox';

const Catalog = ({ caps }) => {
  const [searchField, setSearchField] = useState([])
  const filteredCaps = caps.filter(cap => ((cap.name.toLowerCase().includes(searchField) ||
    cap.description.toLowerCase().includes(searchField))))
  return (
    <div>
      <div>
        <SearchBox placeholder="Enter key words here..." handleChange={(e) => setSearchField(e.target.value.toLowerCase())} />
      </div>
      <div class="container">
        <div class="text-center">
          <Caps caps={filteredCaps.sort(({ id: previousID }, { id: currentID }) => previousID - currentID)} />
        </div>
      </div>
    </div>

  )
}

export default Catalog