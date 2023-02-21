import logo from './logo.svg';
import './App.css';
import UserAvatorContainer from './components/UserAvatorContainer';
import data from './data.json';
import StatusContainer from './components/StatusContainer';
import { useState } from 'react';

function App() {
  const [status,setStatus] = useState([]);
  return (
    <div className="App">
      <UserAvatorContainer users={[...data,...data]} setStatus={setStatus}/>
      <StatusContainer status={status} />
    </div>
  );
}

export default App;
