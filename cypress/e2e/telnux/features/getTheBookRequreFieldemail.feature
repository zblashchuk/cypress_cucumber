Feature: Check First name require field in form for downlowd eBook 
   Background: 
     Given Go to the page get the book

   Scenario: Check require fields in form for downlowd eBook .
     When I fill required fields without email and click Send my content
     Then I expect to see message about require field email