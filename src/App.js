import './App.css';
import imgUrl from './img/experience-bg.png'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

function App() {
  const options = [
    '$500-$2000', '$2000-$5000', '$5000-$10000'
  ];
  const defaultOption = options[0];
  return (
    <div className="App">
      <div className = 'App-header'>

        <div style={{marginTop:50}}></div>

        <div style={{display:'flex', flexDirection: 'row', marginTop:0}} className='header'>
          
        <div style={{display:'flex', flexDirection: 'column'}}>
         <h5>Location</h5>
         <h3>New York, USA</h3>
         </div>
         <div style={{display:'flex', flexDirection: 'column'}}>
         {/* <Dropdown options={options} value={defaultOption} placeholder="Select an option" />; */}
         <h5>When</h5>
         <h3>New York, USA</h3>
         </div>

         <div style={{display:'flex', flexDirection: 'column', marginLeft:'20px', paddingBottom:'20px'}}>
         {/* <Dropdown options={options} value={defaultOption} placeholder="Select an option" />; */}
         <h5>Price</h5>
        <Dropdown options={options} value={defaultOption} placeholder="Select an option"  />
        </div>
        </div>
        
     
       <div style={{display:'flex', flexDirection:'row'}}>
      <div className='cards'>
      <div className='proj-img'>
      <img src={imgUrl} width='270px'  />
      </div>
      </div>

      <div className='cards'>
      <div className='proj-img'>
      <img src={imgUrl} width='270px'  />
      </div>
      </div>

      </div>
      </div>
      
    
    </div>
  );
}

export default App;
