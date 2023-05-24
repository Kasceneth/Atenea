
import { Auten, Landing} from './componentss/auten';
import { Home } from './componentss/Home';
import { Routes, Route, BrowserRouter} from 'react-router-dom';
import { useState } from 'react';
import ProtectedRoute from './componentss/ProtectedRoute';

function App() {

  const [ing, setIng] = useState(false);

  function handleChangeIng(x){
    setIng(x);
    console.log(ing);

    return
  }



  return (

    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Auten changeIng={handleChangeIng}/>}/>
      <Route path="/home" element={<ProtectedRoute ing={ing}><Home/></ProtectedRoute>}/>
      <Route path="/landing" element={<Landing/>}/>
       
    </Routes>
    </BrowserRouter>
  

    
   
  );
}

export default App;
