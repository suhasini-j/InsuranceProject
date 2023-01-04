Feature: End to end Insurance validation


   Scenario: Insurance application
   Given I open Insurance Page
   When I apply car Insurance
   And Validate Quotation
   Then Complete the profile