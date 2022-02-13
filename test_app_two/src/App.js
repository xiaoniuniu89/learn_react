import './App.css';
import Eventlist from './componants/Eventlist';
import {useState, useEffect} from 'react'


function App() {

    const [Button, setButton] = useState(true)
    const [productState, setProductState] = useState([])

    useEffect(() => {
      console.log("clicked")
    }, [Button])

    useEffect(() => {
      fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(json=> {
          const productArray = json.map((product) => {
            return product

          })
          setProductState(productArray)
        })
    }, [])

    const handleButton = () => {
      setButton(!Button)
    }


  return (
    <Eventlist Button={Button} products={productState} handleButton={handleButton}/>
  )
}

export default App;
