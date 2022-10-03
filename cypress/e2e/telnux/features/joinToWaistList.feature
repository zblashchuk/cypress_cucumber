Feature: Join the waitlist
   Background: 
     Given click the cookies if it present on Waist List page

   Scenario: Join the waitlist and check it.
     When I fill all require fields and click Apply Now
     Then I should be on storage-waitlist page
     