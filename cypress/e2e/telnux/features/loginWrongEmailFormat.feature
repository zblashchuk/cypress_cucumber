Feature: Error message while login with wrong email format
   Background: 
     Given I am on the Telnyx home page, accept the cookies

   Scenario: Check login possibility through Login button in header by fill fields with valid data.
     When I go to Login page by click on button in the header
     Then I am on Login page
     Then I fill login form field by wrong email format and valid password and click login
     Then Expect message about wrong email format