
import './App.css';
import { useEffect, useState } from 'react';



function App() {

  const [data, setData] = useState([])


  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos?_limit=10')
      .then((respones) => respones.json())
      .then((photos) => setData(photos))
  }, [data])





  return (
    <div className="App">
      <div className="container">
        {data.map(photo => (
          <div className="card" id={photo.id} key={photo.id} >
            <h2 className='title' >{photo.title}</h2>
            <img className='img' src={photo.url} alt=""></img>
          </div>

        ))}
      </div>

    </div>
  );
}

export default App;
