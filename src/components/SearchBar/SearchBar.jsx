import { useState } from 'react'
import './SearchBar.scss'
const SearchBar = () => {
  const [query,setQuery] = useState(
    {
      type:'',
      location:'',
      minPrice:0,
      maxPrice:0,
    }
  )
  const types=['buy','rent'];
  const switchType=(val)=>{
    setQuery((prev)=>({...prev,type:val}));
  };

  return (
    <div className="searchbar">
        <div className="type">
        {
          // Use parentheses for implicit return
          types.map((type) => (
            <button
              key={type} // Add a unique key for each button
              onClick={() => switchType(type)} // Call switchType on click
              className={query.type === type ? 'active' : ''}
              id={type}
            >
              {type}
            </button>
          ))
        }
        </div>
        <form action="" method="get">
            <input type="text" name='location' placeholder='City/Location'/>
            <input type="number" name="minPrice" id="" placeholder='Min Price'/>
            <input type="number" name="maxPrice" id="" placeholder='Max Price'/>
            <button>
                <img src="../../public/search.png" alt="" />
            </button>
        </form>
    </div>
  )
}

export default SearchBar
