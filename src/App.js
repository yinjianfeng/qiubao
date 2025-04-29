import { Route, Routes } from 'react-router-dom';
import './App.css';
import Index from './pages/Index';
import Layout from './layout';
import Program from './pages/Program';
import Speaker from './pages/Speaker';
import Registration from './pages/Registration';
import Information from './pages/Information';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Index />} />
        <Route path='/program' element={<Program />} />
        <Route path='/speaker' element={<Speaker />} />
        <Route path='/registration' element={<Registration />} />
        <Route path='/information' element={<Information />} />
      </Route>
    </Routes>
  );
}

export default App;
