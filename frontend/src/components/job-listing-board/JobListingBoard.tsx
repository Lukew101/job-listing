import 'bootstrap/dist/css/bootstrap.min.css';
import { FormEvent, useState } from 'react';
import JobTable from '../job-table/JobTable';


type JobProps = {
    id: string,
    companyName: string,
    title: string,
    description: string,
    address: string,
    date: string,
    status: string
}

type BoardProps = {
  jobs: JobProps[];
  deleteJob: (id: string) => void;
  updateJob: (job: JobProps) => void;
}

const JobListingBoard = ({ jobs, deleteJob, updateJob }: BoardProps) => {
  
  const companyNames: string[] = jobs.map((company) => company.companyName);

  const uniqueCompanyNames = Array.from(new Set(companyNames));

  const tables = uniqueCompanyNames.map((companyName) => {
    const filteredJobs = jobs.filter((job) => job.companyName === companyName);
    return <JobTable companyName={companyName} jobs={filteredJobs} deleteJob={deleteJob} updateJob={updateJob} />;
  });

  return (
    <section className='gallery'>
      <h2>Jobs</h2>
      <div className='gallery__filter'>

      </div>
      {tables}
    </section>
  )
}

export default JobListingBoard;
