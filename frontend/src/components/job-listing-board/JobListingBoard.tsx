import 'bootstrap/dist/css/bootstrap.min.css';
import { FormEvent, useState } from 'react';
import JobTable from '../job-table/JobTable';


type JobProps = {
    companyName: String,
    title: String,
    description: String,
    address: String,
    date: String,
    status: String
}

type BoardProps = {
  jobs: JobProps[];
}

const JobListingBoard = ({ jobs }: BoardProps) => {
  
  const companyNames: String[] = jobs.map((company) => company.companyName);

  const uniqueCompanyNames = Array.from(new Set(companyNames));

  const tables = uniqueCompanyNames.map((companyName) => {
    const filteredJobs = jobs.filter((job) => job.companyName === companyName);
    return <JobTable companyName={companyName} jobs={filteredJobs} />;
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
