import { 
  Routes, 
  Route 
} from 'react-router-dom';

import Home from './pages/Home';
import Classify from './pages/Classify';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/klasifikasikan" element={<Classify />} />
    </Routes>
  );
}

export default App;
