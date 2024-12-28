import './ListPage.scss';
import Filter from '../../components/Filter/Filter.jsx';
import { listData } from '../../Data/data.js';
import Card from '../../components/Card/Card.jsx';
import Map from '../../components/Map/Map.jsx';

const ListPage = () => {
  let data = listData;

  return (
    <div className="listpage">
      <div className="listcontainer">
        <div className="wrapper">
          <Filter />
          {
            data.map((item) => (
              <Card key={item.id} item={item} /> // Pass item as a prop if needed
            ))
          }
        </div>
      </div>
      <div className="mapcontainer">
      <Map items={data}/>
      </div>
    </div>
  );
}

export default ListPage;
