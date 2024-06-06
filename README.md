Prerequisites
  Make sure you have the following installed on your machine:
    •	Node.js
    •	npm (Node Package Manager)

Cloning the Repository: First, clone the repository to your local machine:
  git clone https://github.com/Paragkoche/Group-16-it.git
  cd Group-16-IT
  
Backend (Express)
  1.	Open terminal navigate to the backend directory:
    cd backend
  2.	Install the dependencies:
    npm install
  3.	Start the backend server:
    npm run dev
  The backend server should now be running on http://localhost:8080.

Frontend (Next.js)
  1.	Open a new terminal window and navigate to the frontend directory:
    cd frontend
  2.	Install the dependencies:
    npm install
  3.	Create a .env file in the frontend directory and add the necessary environment variables. For example: 
    NEXT_PUBLIC_API_BASE_URL=http://localhost:8080
  4.	Start the frontend server:
    npm run dev
  The frontend server should now be running on http://localhost:3000.
