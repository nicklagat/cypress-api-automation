# cypress-api-automation
Reqres Users Endpoint Test Suite
This repository contains a test suite for testing the users endpoint of the Reqres API using Cypress.

Overview
The test suite consists of two main test groups:

List all users
Create a user
List all users
This test group contains two test cases:

Get all users: Tests if the /api/users endpoint returns a 200 status code when fetching all users.
Get single user: Tests if the /api/users/:id endpoint returns a 200 status code when fetching a single user by ID.
Create a user
This test group contains one test case:

Create a new user: Tests if the /api/users endpoint successfully creates a new user with a given name and job when making a POST request with the appropriate access token.
Prerequisites
Node.js installed on your machine
Cypress installed in your project
Installation
Clone the repository:
bash
Copy code
git clone https://github.com/yourusername/reqres-users-endpoint-test-suite.git
Navigate to the project directory:
bash
Copy code
cd reqres-users-endpoint-test-suite
Install the project dependencies:
bash
Copy code
npm install
Running the Test Suite
To run the test suite, execute the following command in your terminal:

bash
Copy code
npx cypress run
This will run the tests in the Cypress Test Runner. If you prefer to use the Cypress GUI, you can use the following command instead:

bash
Copy code
npx cypress open
This will open the Cypress Test Runner, where you can select and run individual test files.




