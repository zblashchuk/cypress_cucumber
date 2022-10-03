Feature: Go to blog page and check the result of filter By Content
   Background: 
     Given Visit Telnyx home page and click the cookies if it present

   Scenario: Check the result of filter By Content on Blog page.
     When I click on the the Blog link in the footer
     Then Check that the Blog page is opened
     Then Choose in Filter By Content - ProductsFeature and check it focus
     Then Check that result of filter is correct
     