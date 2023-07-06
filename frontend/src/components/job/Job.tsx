import 'bootstrap/dist/css/bootstrap.min.css';

type JobProps = {
    job: {
        companyName: String,
        title: String,
        description: String,
        address: String,
        date: String,
        status: String
    }
    editJob: () => void;
    deleteJob: () => void;
}
  
const Job = ({ job, editJob, deleteJob }: JobProps) => {

    const handleEdit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        editJob();
    }

    const handleDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        deleteJob();
    }
  return (
    <tr>
      <td>{job.title}</td>
      <td>{job.description}</td>
      <td>{job.address}</td>
      <td>{job.date}</td>
      <td>{job.status}</td>
      <td>
        <button onClick={handleEdit}>Edit</button>
      </td>
      <td>
        <button onClick={handleDelete}>Delete</button>
      </td>
    </tr>
    

  )
}

export default Job