import { Route, 
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import JobPage from './pages/JobPage';
import NotFoundPage from './pages/NotFoundPage';
import JoPage from './pages/JoPage';

const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path='/'element={<MainLayout />}>
    <Route index element={<HomePage />} />
    <Route path='jobs' element={<JobPage />} />
    <Route path='jobs/:id' element={<JoPage />} />
    <Route path='*' element={<NotFoundPage />} />
  </Route>
  )
);

const App = () =>{
  return <RouterProvider router={router} />
};
export default App;