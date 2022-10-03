Feature: Check request to Articles links on Blog page
   Background: 
     Given Visit Telnyx main page and click the cookies if it present

   Scenario: Go to blog page and check request to Articles links.
     When I click on the the Blog link in the footer and check that the page is opened
     Then check request links on Blog page