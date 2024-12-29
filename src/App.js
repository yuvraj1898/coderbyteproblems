import logo from './logo.svg';
import './App.css';
import { useNavigate } from 'react-router-dom';
import ThemeContextProvider from './Context/ThemeContextProvider';

function App() {
  const navigate =useNavigate();
  const components=['ButtonToggle','Counterincrement','ColorDropDown','LiveParagraph','WeatherDashboard','TaskDashboard','Todo','ShipSchedule'];
  return (
    <>
    <ThemeContextProvider>
    <div style={{
      height:'100vh',
      display:'flex',
      flexDirection:'column',
      justifyContent:'center',
      alignItems:'center',
      gap:'20px'
    }}>
     {components.map((item,index)=>(
      <button  onClick={()=>navigate(`/${item}`)} >
        Go to {item}
      </button>
     ))}
    </div>
    </ThemeContextProvider>
  </>
  );
}

export default App;
