import logo from './logo.svg';
import './App.css';
import Display from './components/Display';
import Form from './components/Form';
import CreateJob from './components/CreateJob';
import UserForm from './components/CreateJob';
import Header from './components/Header';
import React, {useState} from 'react';

    





function App() {
  const [update, setupdate] = useState(0);
  function updatePage() {
    setupdate(update + 1);
}
  return (
    <div className="App">
      <Header/>
      {/* <Display/> */}
      <CreateJob updatePage = {updatePage}/>

    </div>
  );
}

export default App;
