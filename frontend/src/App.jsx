import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout'; // Assuming Layout includes navbar, etc.

// Import pages
import MyEvents from './pages/events/MyEvents'
import ViewEvents from './pages/view/ViewEvents';
import History from './pages/history/History';
import CreateEvent from './pages/events/CreateEvent';
import MyEventInfo from './pages/events/MyEventInfo';
// import Notification from './pages/notification/Notification';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<MyEvents />} /> {/* Default route, can change as needed */}
        <Route path='/my-events' element={<MyEvents />} />
        <Route path='/create-event' element={<CreateEvent />} />
        <Route path="/my-event-info/:id" element={<MyEventInfo />} />
        <Route path='/view-events' element={<ViewEvents />} />
        <Route path='/history' element={<History />} />
        {/* <Route path='/notifications' element={<Notification />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
