// Test suite for Reqres users endpoint
describe("reqres users endpoint", () => {
  // Test group for listing users
  context("list all users", () => {
    // Test case for getting all users
    it("get all users", () => {
      // Make a GET request to the /api/users endpoint and check if the response status is 200
      cy.api("/api/users").its("status").should("eq", 200);
    });

    // Test case for getting a single user
    it("get single user", () => {
      // Make a GET request to the /api/users/2 endpoint and check if the response status is 200
      cy.api("/api/users/2").its("status").should("eq", 200);
    });
  });

  // Test group for creating a user
  context("create a user", () => {
    // Test case for creating a new user
    it("should create a new user", () => {
      // First, make a POST request to the /api/login endpoint to authenticate
      cy.api({
        method: "POST",
        url: "/api/login",
        body: {
          email: "eve.holt@reqres.in",
          password: "cityslicka",
        },
      }).then((response) => {
        // Get the access token from the response
        const accessToken = response.body.token;

        // Define the expected response object for the new user creation
        const expectedResponse = {
          name: "Nick",
          job: "Lead QA Engineer|Data Engineer",
        };

        // Make a POST request to the /api/users endpoint to create the new user
        cy.api({
          method: "POST",
          url: "/api/users",
          body: {
            name: "Nick",
            job: "Lead QA Engineer|Data Engineer",
          },
          headers: {
            authorization: `Bearer ${accessToken}`,
          },
        })
          .its("body")
          .should("have.keys", ["name", "job", "id", "createdAt"]);
        // Check if the response body has the expected keys (name, job, id, createdAt)
      });
    });
  });
});
