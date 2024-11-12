# Job Management Dashboard
A web-based Job Management Dashboard for an admin to manage job postings and candidate assessments. This application enables the admin to sign in, view job listings, candidate details, create assessments, and navigate between job-related functionalities.

# Features
Admin Authentication: A captcha-enabled sign-in for enhanced security.
Job Listings: Display, add, and remove job postings dynamically.
Candidate Management: View candidates by job and access candidate details.
Assessment Assignment: Assign assessments to candidates for evaluation.
Responsive and Modern UI: Easy-to-use interface styled with consistent and accessible design patterns.
Screenshots

# Admin Signin Page
![image](https://github.com/user-attachments/assets/91b93f14-52df-4af2-b468-8ffe6d8dce8d)



# Main dashboard for managing job listings.
![image](https://github.com/user-attachments/assets/04341898-5dd4-4c9c-aed5-eda581ac8186)


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

bash
Copy code
git clone https://github.com/yourusername/job-management-dashboard.git
cd job-management-dashboard
Install dependencies:

bash
Copy code
npm install
Run the app:

bash
Copy code
npm start
The application will be available at http://localhost:3000.

Project Structure
App.js: Contains the main app logic, including routes and authentication logic.
components/: Contains reusable components like Header, JobDetail, CandidateDetail.
pages/: Contains page components such as Home, Candidates, Assignment, CreateAssessment.
Available Scripts
npm start: Starts the app in development mode.
npm run build: Builds the app for production.
npm test: Launches the test runner.
Usage
Admin Sign-In: Enter email, password, and solve the CAPTCHA.
Job Dashboard: Add, edit, or remove jobs. Dynamically resizes sections as jobs are added or removed.
Candidate Management: View candidate lists for specific job postings and access their detailed information.
Assignment Creation: Assign assessments to candidates and monitor their progress.
Code Overview
Dynamic Styling
The components, particularly in App.js, utilize dynamic inline styling for flexibility and ease of maintenance. Key styles include:

Shadow Effect: Shadow is applied to the left and bottom edges for a clean, elevated look.
Responsive Layout: Flexbox used to maintain layout integrity across screen sizes.
Button Styles: Custom styling applied to Sign In and Refresh Captcha buttons for a polished UI.
Authentication Flow
The application features a basic CAPTCHA mechanism generated on the frontend to add an extra layer of security to the sign-in flow.

Future Improvements
Backend Integration: Connect to a real authentication system.
API Support: Add API endpoints for dynamic job and candidate data.
Enhanced Security: Implement robust authentication (e.g., OAuth).
License
This project is open-source and available under the MIT License.

