//import Register from './components/register';
import Register1 from './components/Register1';
import './App.css';

function App() {
  return (
   <div style={{padding:70}}>
    <h3 className='heading'>Register/signup</h3>
    
    <Register1 email={""} password={""} phonenumber={""}/>
   </div>
  );
}

export default App;
