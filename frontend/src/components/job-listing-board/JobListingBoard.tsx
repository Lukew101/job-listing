import 'bootstrap/dist/css/bootstrap.min.css';
import { FormEvent, useState } from 'react';
import JobTable from '../job-table/JobTable';

type JobProps = {
  id: string;
  companyName: string;
  title: string;
  description: string;
  address: string;
  date: string;
  status: string;
};

type BoardProps = {
  jobs: JobProps[];
  deleteJob: (id: string) => void;
  updateJob: (job: JobProps) => void;
};

const JobListingBoard = ({ jobs, deleteJob, updateJob }: BoardProps) => {
  const [searchText, setSearchText] = useState('');

  const filteredJobs = jobs.filter((job) =>
    job.companyName.toLowerCase().startsWith(searchText.toLowerCase())
  );

  const companyNames: string[] = filteredJobs.map((job) => job.companyName);

  const uniqueCompanyNames = Array.from(new Set(companyNames));

  const tables = uniqueCompanyNames.map((companyName) => {
    const filteredTableJobs = filteredJobs.filter(
      (job) => job.companyName === companyName
    );
    return (
      <JobTable
        key={companyName}
        companyName={companyName}
        jobs={filteredTableJobs}
        deleteJob={deleteJob}
        updateJob={updateJob}
      />
    );
  });

  const handleSearchChange = (event: FormEvent<HTMLInputElement>) => {
    setSearchText(event.currentTarget.value);
  };

  return (
    <section className="gallery">
      <h2>Jobs</h2>
      <div className="gallery__filter">
        <input
          type="text"
          placeholder="Search by company name"
          value={searchText}
          onChange={handleSearchChange}
        />
      </div>
      {tables}
    </section>
  );
};

export default JobListingBoard;
