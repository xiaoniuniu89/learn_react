import './App.css';
import {useState, useEffect} from 'react'
import Weather from './componants/Weather';

function App() {

  const [data, setData] = useState({})
  const location = "Kildare"

  useEffect(() => {
    fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/2022-02-14/2022-02-14?unitGroup=metric&key=XUKSW5QJ3MV3B34PS6DP6K94F&contentType=json`, {
      "method": "GET",
      "headers": {
      }
      })
    .then(res=>res.json())
    .then(json=> {
      setData(json) })
    }, [])

  return (
    <Weather data={data} />
  );
}

export default App;
