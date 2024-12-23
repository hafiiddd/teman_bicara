import { RouterProvider } from 'react-router-dom';
import { UserProvider } from './context/globalUserContext.jsx';
import { router } from '../src/routing/router.jsx';
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
// import {HomePage} from './index.jsx';

function App() {
  return (
    <div>
      <UserProvider>
        <RouterProvider router={router} />
      </UserProvider>
    </div>
  )
}

export default App;
