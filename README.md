# Job Listing Application
This is a dynamic full-stack application where a user can create a job/project that they may need to do for a specific client/company.
# Getting Started / Installation
Follow these steps to get the application up and running in your local environment:
1. Clone the repo
```bash git clone https://github.com/Lukew101/job-listing```

| Steps                            | Front-end                 | Back-end                  |
| ---------------------------------| ------------------------- | ------------------------- |
| 2. Navigate into repo            | `cd frontend`             | `cd server`               |
| 3. Install Dependencies          | `npm install`             | `mvn install`             |
| 4. Run the project               | `npm run dev`             | `mvn start`               |

## Usage
To use the job listing application, follow these steps:
1) Add a Job
Click on the "Add job to list" button to create a new job.
Fill out all the required fields, such as job title, company name, description, etc.
If the company does not exist, a new company will be created and associated with the job.
2) Manage Jobs
The created job will be displayed in the appropriate table, categorized by the company.
Edit a job: Click on the "Edit" button in the job entry and update the necessary details.
Delete a job: Click on the "Delete" button in the job entry to remove it from the list.
3) Filter Companies
To filter the displayed companies, type the name of the company in the search field.
The application will dynamically update the list of companies based on the entered search term.
