import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import './job.css';

type JobProps = {
  id: string;
  companyName: string;
  title: string;
  description: string;
  address: string;
  date: string;
  status: string;
};

type JobProp = {
  job: JobProps;
  deleteJob: (id: string) => void;
  updateJob: (updatedJob: JobProps) => void;
};

const Job = ({ job, deleteJob, updateJob }: JobProp) => {
  const [editMode, setEditMode] = useState(false);
  const [editedJob, setEditedJob] = useState<JobProps>(job);

  useEffect(() => {
    setEditedJob(job);
  }, [job]);

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleSave = () => {
    console.log("Save clicked:", editedJob); // Logging the edited job data
    updateJob(editedJob);
    setEditMode(false);
  };

  const handleCancel = () => {
    setEditMode(false);
    setEditedJob(job);
  };

  const handleDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    deleteJob(job.id);
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

  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
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
          editedJob.title
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
          editedJob.description
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
          editedJob.address
        )}
      </td>
      <td>{editedJob.date}</td>
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
          editedJob.status
        )}
      </td>
      <td className="edit-delete__button">
        {editMode ? (
          <>
            <button onClick={handleSave} className="save-button btn btn-success">Save</button>
            <button onClick={handleCancel} className="cancel-button btn btn-secondary">Cancel</button>
          </>
        ) : (
          <>
            <button onClick={handleEdit} className="btn btn-primary">Edit</button>
            <button onClick={handleDelete} className="btn btn-danger">Delete</button>
          </>
        )}
      </td>
    </tr>
  );
};

export default Job;
