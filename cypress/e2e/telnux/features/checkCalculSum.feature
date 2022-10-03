Feature: Check calculator work
   Background: 
     Given Visit calculator page Voice and click the cookies if it presents

   Scenario: Go to calculator page and check it sum value.
     Then choose Voice Api option then click continue
     Then set all values to 0 and click continue
    Then set value Make outbound to 0 and check that sum is 900$
    Then click + near Make outbound and check that sum is 2700$