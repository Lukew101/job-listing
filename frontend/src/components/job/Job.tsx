import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

type JobProps = {
  job: {
    companyName: String;
    title: String;
    description: String;
    address: String;
    date: String;
    status: String;
  };
  deleteJob: () => void;
};

const Job = ({ job, deleteJob }: JobProps) => {
    const [displayButtons, setDisplayButtons] = useState(false);
  const handleEdit = (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
    //   editJob();
  }

  const handleDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    deleteJob();
  };

  const handleDisplayDelete = () => {
    setDisplayButtons(!displayButtons);
  };

  return (
    <tr onClick={handleDisplayDelete}>
      <td>{job.title}</td>
      <td>{job.description}</td>
      <td>{job.date}</td>
      <td>{job.status}</td>
      <td>
        {displayButtons && (
            <div>
                <button onClick={handleDelete}>Delete</button>
                <button onClick={handleEdit}>Edit</button>
            </div> 
        )}
      </td>
    </tr>
  );
};

export default Job;
