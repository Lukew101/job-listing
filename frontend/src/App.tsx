import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AddNewJob from "./components/add-job/AddNewJob";
import { useEffect, useState } from "react";
import JobListingBoard from "./components/job-listing-board/JobListingBoard";

type JobProps = {
  id: string;
  companyName: string;
  title: string;
  description: string;
  address: string;
  date: string;
  status: string;
};

function App() {
  const [jobs, setJobs] = useState<JobProps[]>([]);

  useEffect(() => {
    fetchJobs();
  }, []);

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
      });
      if (!response.ok) {
        throw new Error("Failed to delete developer");
      }
      setJobs((jobs) => jobs.filter((job) => job.id !== jobId));
    } catch (error) {
      console.error(error);
    }
  };

  const updateJobFetch = async (updatedJob: JobProps) => {
    try {
      const response = await fetch(
        `http://localhost:8080/api/jobs/${updatedJob.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedJob),
        }
      );
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

  const countJobsByStatus = () => {
    const statusCounts: { [key: string]: number } = {
      completed: 0,
      "not started": 0,
      "in progress": 0,
    };

    jobs.forEach((job) => {
      statusCounts[job.status]++;
    });

    return statusCounts;
  };

  const jobStatusCounts = countJobsByStatus();

  return (
    <main>
      <div className="top-section">
        <h1>The Project Manager</h1>
        <div className="top-txt-img">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYLTi9395RI1LBKVdns7oVr3SAjAvg7txoIg&usqp=CAU"
            alt="smiley face with thumb up"
            className="top-txt-img__image"
          />
          <p>
            Hi there, you have{" "}
            <span className="bold-number">
              {jobStatusCounts["in progress"]}
            </span>{" "}
            active {jobStatusCounts["in progress"] === 1 ? "job" : "jobs"} and{" "}
            <span className="bold-number">
              {jobStatusCounts["not started"]}
            </span>{" "}
            {jobStatusCounts["not started"] === 1 ? "job" : "jobs"} to be
            started. You have completed{" "}
            <span className="bold-number">{jobStatusCounts["completed"]}</span>{" "}
            {jobStatusCounts["completed"] === 1 ? "job" : "jobs"}.{" "}
          </p>
        </div>
      </div>
      <AddNewJob addNewJob={fetchJobs} />
      <JobListingBoard
        jobs={jobs}
        deleteJob={deleteJobFetch}
        updateJob={updateJobFetch}
      />
    </main>
  );
}

export default App;
