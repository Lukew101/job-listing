import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import AddNewJob from './components/add-job/AddNewJob';
import { useEffect, useState } from 'react';
import JobListingBoard from './components/job-listing-board/JobListingBoard';

type JobProps = {
  id: string,
  companyName: string,
  title: string,
  description: string,
  address: string,
  date: string,
  status: string
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

  const deleteJobFetch = async (jobId: String) => {
    try {
      const response = await fetch(`http://localhost:8080/api/jobs/${jobId}`, {
        method: "DELETE",
      })
      if (!response.ok) {
        throw new Error("Failed to delete developer");
      }
      setJobs((jobs) => jobs.filter((job) => job.id !== jobId));
    } catch (error) {
      console.error(error);
    }
  }

  const updateJob = async (updatedJob: JobProps) => {
    try {
      const response = await fetch(`http://localhost:8080/api/jobs/${updatedJob.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedJob),
      });
      if (!response.ok) {
        throw new Error("Failed to update job");
      }
      setJobs((jobs) =>
        jobs.map((job) =>
          job.id === updatedJob.id ? { ...job, ...updatedJob } : job
        )
      );
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main>
      <h1>The Project Manager</h1>
      <AddNewJob addNewJob={fetchJobs}/>
      <JobListingBoard jobs={jobs} deleteJob={deleteJobFetch} updateJob={updateJob} />
    </main>
  )
}

export default App
