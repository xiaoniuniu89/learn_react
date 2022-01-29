import './App.css';
import Title from './componants/Title'
import EventList from './componants/EventList'
import Modal from './componants/Modal'
import React, {useState} from 'react'

function App() {

  const [showEvents, setShowEvents] = useState(true)
  const [showModal, setShowModal] = useState(false)
  const [events, setEvents] = useState([
    {title: 'mario\'s birthday', id: 1},
    {title: 'CC\'s test', id: 2},
    {title: 'Isaacs\'s party', id: 3}
  ])

  console.log(showEvents)

  const handleClick = (id) => {
    setEvents((prevState) => {
      return prevState.filter((event) => {
        return id !== event.id
      })
    })
  }

  const subtitle = " All the latest events in Yoshiland"

  const handleClose = () => {
    setShowModal(false)
  }

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
      <button onClick={() => setShowModal(true)}>Show Modal</button>
    </div>}

    {showModal && <Modal handleClose={handleClose}>
      <h2>50% off Coupon Code!!</h2>
      <p>This HTML file is a template.
      If you open it directly in the browser, you will see an empty page.

      You can add webfonts, meta tags, or analytics to this file.
      The build step will place the bundled scripts into the tag.

      To begin the development, run `npm start` or `yarn start`.
      To create a production bundle, use `npm run build` or `yarn build`.</p>
    </Modal>}

    </div>
  );
}

export default App;
