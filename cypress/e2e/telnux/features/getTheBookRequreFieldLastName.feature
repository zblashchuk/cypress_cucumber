Feature: Check First name require field in form for downlowd eBook 
   Background: 
     Given Go to page get the book

   Scenario: Check require fields in form for downlowd eBook .
     When I fill required fields without Last name and click Send my content
     Then I expect to see message about requre field Last name