import './App.css';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'

import Layout from './Layout';
import FlexPage from './FlexPage';
import FlexPage2 from './FlexPage2';

function App() {
  return (
    <>
    <BrowserRouter>
      <Layout>
        <nav className="nav-parent-container">
          <Link className="nav-item" to="flex">Flex</Link>          
          <Link className="nav-item" to="flex2">Flex 2</Link>                    
        </nav>

      <Routes>
        <Route>
          <Route path="/" element={<FlexPage2 />}></Route>
          <Route path="flex" element={<FlexPage />}></Route>                  
          <Route path="flex2" element={<FlexPage2 />}></Route>                            
        </Route>
      </Routes>
      </Layout>    

    </BrowserRouter>
    </>
  );
}

export default App;
