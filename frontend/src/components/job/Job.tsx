import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

type JobProps = {
  companyName: string;
  title: string;
  description: string;
  address: string;
  date: string;
  status: string;
};

type JobProp = {
  job: JobProps;
  deleteJob: () => void;
  updateJob: (updatedJob: JobProps) => void;
};

const Job = ({ job, deleteJob, updateJob }: JobProp) => {
  const [editMode, setEditMode] = useState(false);
  const [editedJob, setEditedJob] = useState<JobProps>(job);

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleSave = () => {
    updateJob(editedJob);
    setEditMode(false);
  };

  const handleCancel = () => {
    setEditMode(false);
    setEditedJob(job);
  };

  const handleDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    deleteJob();
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setEditedJob((prevJob) => ({
      ...prevJob,
      [name]: value,
    }));
  };

  const handleStatusChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const { value } = e.target;
    setEditedJob((prevJob) => ({
      ...prevJob,
      status: value,
    }));
  };

  return (
    <tr>
      <td>
        {editMode ? (
          <input
            type="text"
            name="title"
            value={editedJob.title}
            onChange={handleInputChange}
          />
        ) : (
          job.title
        )}
      </td>
      <td>
        {editMode ? (
          <textarea
            name="description"
            value={editedJob.description}
            onChange={handleInputChange}
          ></textarea>
        ) : (
          job.description
        )}
      </td>
      <td>
        {editMode ? (
          <input
            type="text"
            name="address"
            value={editedJob.address}
            onChange={handleInputChange}
          />
        ) : (
          job.address
        )}
      </td>
      <td>{job.date}</td>
      <td>
        {editMode ? (
          <select
            name="status"
            value={editedJob.status}
            onChange={handleStatusChange}
          >
            <option value="not started">Not started</option>
            <option value="in progress">In progress</option>
            <option value="completed">Completed</option>
          </select>
        ) : (
          job.status
        )}
      </td>
      <td>
        {editMode ? (
          <>
            <button onClick={handleSave}>Save</button>
            <button onClick={handleCancel}>Cancel</button>
          </>
        ) : (
          <>
            <button onClick={handleDelete}>Delete</button>
            <button onClick={handleEdit}>Edit</button>
          </>
        )}
      </td>
    </tr>
  );
};

export default Job;
