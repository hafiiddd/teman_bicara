import { RouterProvider } from 'react-router-dom';
import { router } from '../src/routing/router.jsx';
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
// import {HomePage} from './index.jsx';

function App() {
  return (
    <div>
      <RouterProvider router={router} />
      {/* <HomePage/> */}
    </div>
  )
}

export default App;
