import { RouterProvider } from 'react-router-dom';
import { router } from '../src/routing/router.jsx';
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App;
