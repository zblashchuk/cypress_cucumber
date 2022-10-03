Feature: Go to signUp page and check link Terms and Conditions
   Background: 
     Given Go to signUp page and click the cookies if it present

   Scenario: Go to signUp page and check link Terns and Conditions.
     When I click on SignUp link in the header
     Then I click on the Term Condition link
     Then I check that the page is opened
    
     