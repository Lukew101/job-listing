import 'bootstrap/dist/css/bootstrap.min.css';
import { FormEvent, useState } from 'react';

type JobProps = {
    companyName: String,
    title: String,
    description: String,
    address: String,
    date: String,
    status: String
  }

  interface addNewJobForm {
    addNewJob: (job: JobProps) => void;
  }

const AddNewJob = ({ addNewJob }: addNewJobForm) => {

    const [formVisibility, setFormVisibility] = useState(false);

    const postJob = async (requestBody: JobProps) => {
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
    }

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const companyNameInput = (event.target as HTMLFormElement).elements.namedItem("companyName") as HTMLInputElement;
        const titleInput = (event.target as HTMLFormElement).elements.namedItem("title") as HTMLInputElement;
        const descriptionInput = (event.target as HTMLFormElement).elements.namedItem("description") as HTMLInputElement;
        const addressInput = (event.target as HTMLFormElement).elements.namedItem("address") as HTMLInputElement;
        const dateInput = (event.target as HTMLFormElement).elements.namedItem("date") as HTMLInputElement;
        const statusInput = (event.target as HTMLFormElement).elements.namedItem("status") as HTMLInputElement;

        const newJob : JobProps = {
            companyName: companyNameInput.value,
            title: titleInput.value,
            description: descriptionInput.value,
            address: addressInput.value,
            date: dateInput.value,
            status: statusInput.value
        }

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
    }

  return (
    <section className='addJob-section'>
        <div className='jobsInfo-container'>
            <img></img>
            <p>Hi there, you have 5 active jobs and 10 jobs to be started</p>
            <p>You have completed 15 jobs</p>
        </div>
        <button onClick={handleAddJobButtonClick} className='add-job-button'>Add job to list</button>
        {formVisibility && (
            <form id='addJobForm' onSubmit={handleSubmit}>
                <label htmlFor='companyName'>Company name</label>
                <input type='text' name='companyName' className='form__input-name'></input>
                <label htmlFor='title'>Job title</label>
                <input type='text' name='title'></input>
                <label htmlFor='description'>Description</label>
                <input type='text' name='description'></input>
                <label htmlFor='address'>Address</label>
                <input type='text' name='address'></input>
                <label htmlFor='date'>Date</label>
                <input type='date' name='date'></input>
                <label htmlFor='status'>Status</label>
                <select name='status' defaultValue="">
                    <option value="notStarted">Not started</option>
                    <option value="inProgress">In progress</option>
                    <option value="completed">Completed</option>
                </select>
                <button type='submit' className='form__button-addJob'>Add job</button>
            </form>
        )}
        
    
    </section>
  )
}

export default AddNewJob