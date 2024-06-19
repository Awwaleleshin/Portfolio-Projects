import { Route, 
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import JobPage from './pages/JobPage';
import NotFoundPage from './pages/NotFoundPage';
import JoPage, { jobLoader } from './pages/JoPage';
import AddJob from './pages/AddJob';

const App = () =>{
  const addJob = async (newJob) => {
    const res = await fetch('/api/jobs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newJob)
    })
    return
  }

const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path='/'element={<MainLayout />}>
    <Route index element={<HomePage />} />
    <Route path='jobs' element={<JobPage />} />
    <Route path='add-job' element={<AddJob addJobSubmit={addJob}/>} />
    <Route path='add-job' element={<AddJob addJobSubmit={addJob}/>} />
    <Route path='jobs/:id' element={<JoPage />} loader={jobLoader}/>
    <Route path='*' element={<NotFoundPage />} />
  </Route>
  )
);
  return <RouterProvider router={router} />
};
export default App;