import './App.css';
import Title from './componants/Title'
import EventList from './componants/EventList'
import Modal from './componants/Modal'
import React, {useState} from 'react'
import NewEventForm from './componants/NewEventForm';

function App() {

  const [showEvents, setShowEvents] = useState(true)
  const [showModal, setShowModal] = useState(false)
  const [events, setEvents] = useState([])

 const addEvent = (event) => {
   setEvents((prevEvents) => {
    return [...prevEvents, event]
   })
   setShowModal(false)
 }

  const handleClick = (id) => {
    setEvents((prevState) => {
      return prevState.filter((event) => {
        return id !== event.id
      })
    })
  }

  const subtitle = " All the latest events in Yoshiland"

  

  console.log(showModal)

  return (
    <div className="App">
      <Title title="Mario Kingdom" subtitle={subtitle} />

      {showEvents && (
        <div>
          <button onClick={() => setShowEvents(false)}>Hide Events</button>
        </div>
      )}
      {!showEvents && (
        <div>
          <button onClick={() => setShowEvents(true)}>Show Events</button>
        </div>
      )}
      {showEvents && <EventList handleClick={handleClick} events={events} />}
    <br />  

    {!showModal && 
    <div>
      <button onClick={() => setShowModal(true)}>Add New Event</button>
    </div>}

    {showModal && <Modal >
      <NewEventForm addEvent={addEvent} />
    </Modal>}

    </div>
  );
}

export default App;
