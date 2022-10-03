Feature: Registration with valid data
   Background: 
     Given I am on the Telnyx home page and click the cookies if it present

   Scenario: Check login possibility through Login button in header by fill fields with valid data.
     When I click on the the Login button in the header
     Then Check that the Login page is opened
     Then I fill all fields with valid data and click login
     And Check that I am in my Account
     Then Check that I can Logout
    
    