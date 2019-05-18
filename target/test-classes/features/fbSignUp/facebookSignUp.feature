Feature: Facebook sign up

  Scenario: Creating an account On Facebook
    Given I launch browser and am on "Facebook create an account page"
    When I enter valid data on the page
    |Fields                   | Values                 |
    |First Name               | Tom                    |
    |Last Name                | Kenney                 |
    |Email Address            | Somebody@gmail.com     |
    |Re-enter Address         | Somebody@gmail.com     |
    |Password                 | Somebody2019           |
    |Birthday                 | 01-05-2019             |
    |Gender                   | Male                   |
    And I click on "Sign Up" Button
    Then the registration should be unseccessful


