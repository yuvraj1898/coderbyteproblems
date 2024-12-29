import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Counterincrement from './Solutions/Counterincrement';
import ButtonToggle from './Solutions/ButtonToggle';
import ColorDropDown from './Solutions/ColorDropDown';
import LiveParagraph from './Solutions/LiveParagraph';
import ThemeContextProvider from './Context/ThemeContextProvider';
import WeatherDashboard from './Solutions/WeatherDashboard';
import Header from './Components/Header';
import TaskDashboard from './Components/TaskDashboard';
import Todo from './Solutions/Todo';
import ShipSchedule from './Solutions/ShipSchedule';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <ThemeContextProvider>
    <Router>
      <Header/>
    <Routes>
    <Route path='/' element={<App/>}/>
    <Route path='/Counterincrement' element={<Counterincrement/>}/>
    <Route path='/ButtonToggle' element={<ButtonToggle/>}/>
    <Route path='/ColorDropDown' element={<ColorDropDown/>}/>
    <Route path='/LiveParagraph' element={<LiveParagraph/>}/>
    <Route path='/WeatherDashboard' element={<WeatherDashboard/>}/>
    <Route path='/TaskDashboard' element={<TaskDashboard/>}/>
    <Route path='/Todo' element={<Todo/>}/>
    <Route path='/ShipSchedule' element={<ShipSchedule/>}/>
    </Routes>
    </Router>
    </ThemeContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
