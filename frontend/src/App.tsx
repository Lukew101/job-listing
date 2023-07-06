import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import AddNewJob from './components/add-job/AddNewJob';
import { useEffect, useState } from 'react';
import JobListingBoard from './components/job-listing-board/JobListingBoard';

type JobProps = {
  companyName: String,
  title: String,
  description: String,
  address: String,
  date: String,
  status: String
}

function App() {

  const [jobs, setJobs] = useState<JobProps[]>([]);

  useEffect(() => {
    fetchJobs();
  },[])

  const fetchJobs = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/jobs");
      if (!response.ok) {
        throw new Error("Failed to fetch Salt people");
      }
      const data = await response.json();
      setJobs(data);
      console.log(data);  
    } catch (error) {
      console.error(error);
    }
  };

  const addNewJob = (job: JobProps) => {
    setJobs((prevJobs) => [...prevJobs, job]);
  }
  

  return (
    <main>
      <h1>The Project Manager</h1>
      <AddNewJob addNewJob={addNewJob}/>
      <JobListingBoard jobs={jobs} />
    </main>
  )
}

export default App
