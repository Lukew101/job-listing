import "bootstrap/dist/css/bootstrap.min.css";
import { FormEvent, useState } from "react";
import "./add-new-job.css";

type JobAddProps = {
  companyName: string;
  title: string;
  description: string;
  address: string;
  date: string;
  status: string;
};

interface addNewJobForm {
  addNewJob: (job: JobAddProps) => void;
}

const AddNewJob = ({ addNewJob }: addNewJobForm) => {
  const [formVisibility, setFormVisibility] = useState(false);

  const postJob = async (requestBody: JobAddProps) => {
    const response = await fetch("http://localhost:8080/api/jobs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    });
    if (!response.ok) {
      throw new Error("Failed to add job");
    }
  };

  const handleAddJobButtonClick = () => {
    setFormVisibility(!formVisibility);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const companyNameInput = (
      event.target as HTMLFormElement
    ).elements.namedItem("companyName") as HTMLInputElement;
    const titleInput = (event.target as HTMLFormElement).elements.namedItem(
      "title"
    ) as HTMLInputElement;
    const descriptionInput = (
      event.target as HTMLFormElement
    ).elements.namedItem("description") as HTMLInputElement;
    const addressInput = (event.target as HTMLFormElement).elements.namedItem(
      "address"
    ) as HTMLInputElement;
    const dateInput = (event.target as HTMLFormElement).elements.namedItem(
      "date"
    ) as HTMLInputElement;
    const statusInput = (event.target as HTMLFormElement).elements.namedItem(
      "status"
    ) as HTMLInputElement;

    const newJob: JobAddProps = {
      companyName: companyNameInput.value,
      title: titleInput.value,
      description: descriptionInput.value,
      address: addressInput.value,
      date: dateInput.value,
      status: statusInput.value,
    };

    try {
      await postJob(newJob);
      companyNameInput.value = "";
      titleInput.value = "";
      descriptionInput.value = "";
      addressInput.value = "";
      addNewJob(newJob);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="addJob-section">
      <div className="jobsInfo-container"></div>
      <button
        onClick={handleAddJobButtonClick}
        className="add-job-button btn btn-secondary"
      >
        Add job to list
      </button>
      {formVisibility && (
        <form id="addJobForm" onSubmit={handleSubmit}>
          <div className="mb-3 row">
            <label htmlFor="companyName" className="col-sm-2 col-form-label">
              Company name
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                name="companyName"
                className="form-control"
                id="companyName"
              />
            </div>
          </div>
          <div className="mb-3 row">
            <label htmlFor="title" className="col-sm-2 col-form-label">
              Job title
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                name="title"
                className="form-control"
                id="title"
              />
            </div>
          </div>
          <div className="mb-3 row">
            <label htmlFor="description" className="col-sm-2 col-form-label">
              Description
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                name="description"
                className="form-control"
                id="description"
              />
            </div>
          </div>
          <div className="mb-3 row">
            <label htmlFor="address" className="col-sm-2 col-form-label">
              Address
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                name="address"
                className="form-control"
                id="address"
              />
            </div>
          </div>
          <div className="mb-3 row">
            <label htmlFor="date" className="col-sm-2 col-form-label">
              Date
            </label>
            <div className="col-sm-10">
              <input
                type="date"
                name="date"
                className="form-control"
                id="date"
              />
            </div>
          </div>
          <div className="mb-3 row">
            <label htmlFor="status" className="col-sm-2 col-form-label">
              Status
            </label>
            <div className="col-sm-10">
              <select
                name="status"
                className="form-select"
                defaultValue=""
                id="status"
              >
                <option value="not started">Not started</option>
                <option value="in progress">In progress</option>
                <option value="completed">Completed</option>
              </select>
            </div>
          </div>
          <div className="mb-3 row">
            <div className="col-sm-10 offset-sm-2">
              <button
                type="submit"
                className="form__button-addJob btn btn-primary"
              >
                Add job
              </button>
            </div>
          </div>
        </form>
      )}
    </section>
  );
};

export default AddNewJob;
