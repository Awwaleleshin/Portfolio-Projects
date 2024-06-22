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
import EditJobPage from './pages/EditJobPage';

const App = () =>{
  // Add new job
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

  // Delete Job
  const deleteJob = async(id) => {
      const res = await fetch(`/api/jobs/${id}`, {
        method: 'DELETE',
      });
      return
  }

  // Update Job
  const updateJob = async (job) =>{
    const res = await fetch(`/api/jobs/${job.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(job)
    })
    return
  }

const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path='/'element={<MainLayout />}>
    <Route index element={<HomePage />} />
    <Route path='jobs' element={<JobPage />} />
    <Route 
      path='add-job' 
      element={<AddJob addJobSubmit={addJob}/>} 
    />
    <Route 
      path='edit-job/:id' 
      element={<EditJobPage updateJobSubmit={updateJob}/>} 
      loader={jobLoader}/>
    <Route 
      path='jobs/:id' 
      element={<JoPage deleteJob={ deleteJob } />} 
      loader={jobLoader}/>
    <Route path='*' element={<NotFoundPage />} />
  </Route>
  )
);
  return <RouterProvider router={router} />
};
export default App;