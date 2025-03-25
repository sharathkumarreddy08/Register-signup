import Register from './components/register';
import './App.css';

function App() {
  return (
   <div style={{padding:70}}>
    <h3 className='heading'>Register/signup</h3>
    <Register email={"sharath@123"} password={"13"} />
   </div>
  );
}

export default App;
