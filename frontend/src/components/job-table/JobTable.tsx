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
  return (
    <div>
      <h3>{companyName}</h3>
      {jobs.map((job, index) => (
        <div key={index}>
          <p>{job.title}</p>
          <p>{job.description}</p>
        </div>
      ))}
    </div>
  )
}

export default JobTable;
