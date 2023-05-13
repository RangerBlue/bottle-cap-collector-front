import React, { useState, useEffect } from "react"
import Caps from '../components/caps';
import SearchBox from '../components/searchBox';
const Catalog = () => {
  const [data, setData] = useState([]);
  const [pageNo, setPageNo] = useState(0);
  const [pageSize, setPageSize] = useState(24);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);

  
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await fetch(
        `https://130.162.231.246:8080/caps-page?pageNo=${pageNo}&pageSize=${pageSize}&searchText=${searchQuery}`
      );
      const json = await response.json();
      setData([...data, ...json]);
      setLoading(false);
    };

    fetchData();
  }, [pageNo, pageSize, searchQuery]);

  const handleSearch = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    setData([]);
    setPageNo(0);
  };

  const handleLoadMore = () => {
    setPageNo(pageNo + 1);
  };

  
    
  return (
    <div>
      <div>
        <SearchBox placeholder="Enter key words here..."  value={searchQuery} handleChange={handleSearch} />
      </div>
      <div class="container">
        <div class="text-center">
          <Caps caps={data.sort(({ id: previousID }, { id: currentID }) => previousID - currentID)} />
        </div>
      </div>
      <div class="load-more-button-container">
        {loading && <p>Loading...</p>}
        {!loading && (
          <button class="load-more-button" onClick={handleLoadMore}>Load more</button>
        )}
      </div>
     
    </div>

  )
}



export default Catalog