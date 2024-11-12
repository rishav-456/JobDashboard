# Job Management Dashboard
A web-based Job Management Dashboard for an admin to manage job postings and candidate assessments. This application enables the admin to sign in, view job listings, candidate details, create assessments, and navigate between job-related functionalities.



## Features

1. **Add Job**:
   - Click on the "Add Job" button to create a new job listing.
   - Add detailed descriptions and requirements for the job.

2. **Invite Candidates**:
   - Under **Active Job Applications**, invite candidates to apply for open job positions.
   - Send customized invitations for each position to potential candidates.

3. **Manage Job Status**:
   - Update the status of a job application.
   - When a job is no longer active, it will move from the **Active Job Applications** section to the **Inactive Job Applications** section.

4. **Inactive Job Applications**:
   - In the **Inactive Job Applications** section, you can:
     - Invite additional candidates to apply for the job.
     - Begin creating assessment questions to evaluate candidates.

5. **Jobs Under Assessment**:
   - Once assessment questions are created for a job, it will move to the **Jobs Under Assessment** section.
   - Here, you can:
     - Add multiple answer choices for each assessment question.
     - Specify a single correct answer for each question, allowing for clear evaluation of candidate responses.

## Project Structure

The system consists of three primary sections to keep track of jobs through various stages of the hiring process:

- **Active Job Applications**: Jobs currently open for applications.
- **Inactive Job Applications**: Closed jobs that may still accept new candidates and for which assessment questions can be created.
- **Jobs Under Assessment**: Jobs with assessment questions assigned, ready for candidate evaluation.

## Usage

1. **Creating a Job**:
   - Navigate to the **Active Job Applications** section and click **Add Job**.
   - Fill in the job description and save the job.

2. **Inviting Candidates**:
   - Under the job listing, select **Invite Candidates** to send application invitations.

3. **Updating Job Status**:
   - When a job application phase ends, change its status to move it to **Inactive Job Applications**.

4. **Creating Assessment Questions**:
   - In **Inactive Job Applications**, select **Create Assessment Questions** to prepare for candidate evaluations.
   - Each question can have multiple answer options, but only one correct answer.

5. **Assessing Candidates**:
   - As jobs move to **Jobs Under Assessment**, candidates can begin the assessment process.


Screenshots

# Admin Signin Page
 You can use whatever e-mail you want (eg. XYZ@CYZ.com) , and use any password. You just need to enter the right captcha , then you can access the site.
![image](https://github.com/user-attachments/assets/91b93f14-52df-4af2-b468-8ffe6d8dce8d)

# Main dashboard for managing job listings.
![image](https://github.com/user-attachments/assets/04341898-5dd4-4c9c-aed5-eda581ac8186)

# Inactive job page
![image](https://github.com/user-attachments/assets/93058f97-ead8-4834-9e1c-196a8808e7ba)

# Adding questions for assessment.
![image](https://github.com/user-attachments/assets/b9e2f365-2a2e-427e-a8bb-32ee6ada28b4)





# Tech Stack
## Frontend: React, React Router
## Styling: CSS, Inline Styling
## Backend: Placeholder for authentication and job management
##API Integrations: Placeholder for future integration (if applicable)

# Getting Started
Prerequisites
Ensure you have Node.js installed. You can download it from nodejs.org.

Installation
Clone the repository:

```bash
# Clone the repository
git clone https://github.com/yourusername/job-management-dashboard.git

# Navigate to the project directory
cd job-management-dashboard

# Install dependencies
npm install

# Run the app
npm start

```
# Job Management Dashboard

## Available Scripts

- `npm start`: Starts the app in development mode.
- `npm run build`: Builds the app for production.
- `npm test`: Launches the test runner.



## Code Overview

### Dynamic Styling

The app components, especially in `App.js`, use dynamic inline styling for enhanced flexibility and maintainability. Key styles include:

- **Shadow Effect**: Applied to the left and bottom edges for a clean, elevated look.
- **Responsive Layout**: Flexbox is used to ensure layout consistency across different screen sizes.
- **Button Styles**: Custom styling for the Sign In and Refresh Captcha buttons for a polished UI.

### Authentication Flow

The application features a basic CAPTCHA mechanism generated on the frontend to add an extra layer of security to the sign-in process.

## Future Improvements

**Backend Integration**: Connect to a real authentication system.
**API Support**: Add API endpoints to handle dynamic job and candidate data.
**Enhanced Security**: Implement robust authentication (e.g., OAuth) for additional security.

## License

This project is open-source and available under the MIT License.

