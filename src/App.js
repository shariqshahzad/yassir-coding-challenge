import "./App.css";
import ReservationManagement from "./pages/ReservationManagement";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { useEffect} from 'react';

function App() {
  useEffect(()=>{
    console.log('app rerender')
  },[])
  return <ReservationManagement />;
}

export default App;
