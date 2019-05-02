Feature: Facebook login

  Scenario: Test login with valid credentials
    Given I am on Facebook login page
    When I entered valid username and a valid password
    And I clicked on the login button
    Then I should be successfully logged into Facebook
