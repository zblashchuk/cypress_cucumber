Feature: Check First name require field in form for downlowd eBook 
   Background: 
     Given Go to Telnyx home page, click the cookies

   Scenario: Check require fields in form for downlowd eBook .
     When Click on the the Blog link in the footer and checked that the page is opened
     Then I click on get the book
     Then I fill  required fields without First name and click Send my content
     Then I expect to see message about requre field First name