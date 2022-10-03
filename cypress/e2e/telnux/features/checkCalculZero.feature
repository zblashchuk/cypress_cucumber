Feature: Check calculator work
   Background: 
     Given Visit calculator page and click the cookies if it presents

   Scenario: Go to calculator page and check it will be 0 when all positions 0.
     Then choose Voice Api and click continue 
     Then set values to 0 and click continue
    Then set all values to 0 and check that sum is 0$