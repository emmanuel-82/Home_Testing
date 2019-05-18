Feature: Logging in and out of ToolsQA website

  Scenario: Logging in with Valid credentials
    Given I launch a browser and navigate to "Demoqa website"
    When I clicked on "My Account"
    When I enter valid username and a valid password
    When I click on the login button
    Then I should be successfully logged in




