import { useState } from "react"
import Job from "../job/Job"

type JobProps = {
    companyName: String,
    title: String,
    description: String,
    address: String,
    date: String,
    status: String
}

type TableProps = {
  companyName: String,
  jobs: JobProps[]
}

const JobTable = ({ companyName, jobs }: TableProps) => {
    const [jobList, setJobList] = useState(jobs);

    const editJob = () => {

    }

    const deleteJob = () => {

    }
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
            <Job key={index} job={job} editJob={editJob} deleteJob={deleteJob} />
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default JobTable;
