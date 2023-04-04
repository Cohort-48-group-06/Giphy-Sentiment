import './App.css';
import Header from './components/Header.js';
import DisplayOptions from './components/DisplayOptions.js';
import Form from './components/Form.js';
import Timeline from './components/Timeline.js';
import Footer from './components/Footer.js';
import ErrorPage from './components/ErrorPage.js';
import { Link, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes >
        <Route path ='/' element ={<Form />} />
        <Route path='/timeline' element={<Timeline />} />

        <Route path='*' element={<ErrorPage />} />
      </Routes >
      < Footer />
    </div>
  );
}

export default App;
