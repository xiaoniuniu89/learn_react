import './App.css';
import ButtonCount from './componants/ButtonCount';
function App() {

 
  


  return (
    <div className="App">
      <ButtonCount incrimentBy={5} />
      <ButtonCount incrimentBy={23} />
      <ButtonCount incrimentBy={1} />
      <ButtonCount incrimentBy={9} />
      <ButtonCount incrimentBy={500} />

    </div>
  );
}

export default App;
