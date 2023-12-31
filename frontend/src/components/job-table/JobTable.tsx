import "bootstrap/dist/css/bootstrap.min.css";
import Job from "../job/Job";
import "./job-table.css";

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
    console.log(updatedJob);
    updateJob(updatedJob);
  };

  return (
    <div className="job-table__container">
      <h3>{companyName}</h3>
      <div className="table-responsive">
        <table className="table table-light">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Description</th>
              <th scope="col">Address</th>
              <th scope="col">Date</th>
              <th scope="col">Status</th>
              <th scope="col">Edit/Delete</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job) => (
              <Job
                key={job.id}
                job={job}
                deleteJob={() => handleDeletePerson(job.id)}
                updateJob={handleUpdateJob}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default JobTable;
