import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from './components/Home';
import MealDetails from './components/MealDetails';

const router = createBrowserRouter([
  {
    path: '/details',
    element: <MealDetails />
  },
  {
    path: '/',
    element: <Home />
  }
]);

function App() {

  return (

    <>
      <RouterProvider router={router} />
    </>
    
  );
}

export default App;
