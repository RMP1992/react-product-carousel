import './App.css';
import {data} from'./data/data';
import Carousel from './Components/Carousel'
function App() {
  return (
    <div className="App">
      {/* {data.map(item =>(
        
        item.carouselData.map(car => (
        <p>{car.name}</p>
        ))
      ))} */}
      <Carousel/>
    </div>
  );
}

export default App;
