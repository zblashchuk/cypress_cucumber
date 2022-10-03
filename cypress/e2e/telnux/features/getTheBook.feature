Feature: Check possibility to ask downlowd eBook from blog page
   Background: 
     Given click the cookies if it present on Telnyx home page 

   Scenario: Go to the form for downlowd eBook from blog page.
     When I click on the the Blog link in the footer and checked that the page is opened
     Then I should be redirected to page for eBook Download by click on get the book
     Then I fill all required fields and click Send my content
     And I expect to see message that book was send