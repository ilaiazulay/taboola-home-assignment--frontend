# **Frontend (React) README:**

This is the frontend for the Full Stack application built using React.

## Prerequisites
- **Node.js** (version 12 or higher) must be installed on your system.
- **npm** (Node Package Manager) comes bundled with Node.js and should also be installed.

## Installation Steps:

1. **Clone or Download the Project**:
   - Clone the repository using Git or download the project zip file and extract it.

2. **Navigate to the Frontend Directory**:
   - Open your terminal and navigate to the `frontend` folder where `package.json` is located:
   
     ```bash
     cd frontend-folder  # Replace with the actual frontend folder name
     ```

3. **Install Dependencies**:
   - Install the required dependencies using `npm`:

     ```bash
     npm install
     ```

4. **Run the React Application**:
   - Start the React development server:

     ```bash
     npm start
     ```

   - The frontend should now be running on `http://localhost:3000`.

## Notes:

- Ensure that the backend server (Flask) is also running to fetch data from the API endpoints.
- If you encounter errors, make sure all required dependencies are installed and check for any issues in your `package.json`.

---

## Available Scripts:

In the project directory, you can run:

### `npm start`
Runs the app in development mode. Open `http://localhost:3000` to view it in the browser.

### `npm run build`
Builds the app for production to the `build` folder. It bundles the React app in production mode and optimizes the build for best performance.
