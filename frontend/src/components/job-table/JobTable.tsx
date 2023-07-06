import { useState } from "react";
import Job from "../job/Job";

type JobProps = {
  id: string;
  companyName: string;
  title: string;
  description: string;
  address: string;
  date: string;
  status: string;
};

type TableProps = {
  companyName: string;
  jobs: JobProps[];
  deleteJob: (id: string) => void;
  updateJob: (job: JobProps) => void;
};

const JobTable = ({ companyName, jobs, deleteJob, updateJob }: TableProps) => {

  const handleDeletePerson = (id: string) => {
    deleteJob(id);
  };

  const handleUpdateJob = (updatedJob: JobProps) => {
    updateJob(updatedJob);
  };

  return (
    <div>
      <h3>{companyName}</h3>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Address</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {jobs.map((job, index) => (
            <Job
              key={index}
              job={job}
              deleteJob={() => handleDeletePerson(job.id)}
              updateJob={() => handleUpdateJob(job)}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default JobTable;
