import {BrowserRouter, Routes, Route} from 'react-router-dom';

import UserView from './components/UserView';
import UserInfo from './components/UserInfo';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
              <Route path='/' element={<UserView/>}></Route>
              <Route path='/user/:id' element={<UserInfo/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
