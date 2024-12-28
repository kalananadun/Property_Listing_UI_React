import './Filter.scss';
const Filter = () => {
  return (
    <div className="filter">
      <h1>Search result for <strong>London</strong></h1>
      <div className="top">
      <div className="item">
          <label htmlFor="city">Location</label>
          <input type="text" id='city' name='city' placeholder='City Location' />
        </div>
      </div>
      <div className="bottom">
      <div className="item">
          <label htmlFor="type">Type</label>
          <select name="type" id="type" >
            <option value="-1">select</option>
            <option value="buy">Buy</option>
            <option value="rent">Rent</option>
          </select>
        </div>
        <div className="item">
          <label htmlFor="property">Property</label>
          <select name="property" id="property">
            <option value="-1">Select Property</option>
            <option value="Apartment">Apartment</option>
            <option value="House">House</option>
            <option value="Condo">Condo</option>
          </select>
        </div>
        <div className="item">
          <label htmlFor="minprice">Min price</label>
          <input type="number" id='minprice' name='minprice' placeholder='Minimum price' />
        </div>
        <div className="item">
          <label htmlFor="maxprice">Location</label>
          <input type="number" id='maxprice' name='maxprice' placeholder='Maximum Price' />
        </div>
        <button>
          <img src="/search.png" />
        </button>
      </div>
    </div>
  )
}

export default Filter