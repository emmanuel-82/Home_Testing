Feature: Logging into very account with valid and invalid credentials

  Background:Very account login

  Scenario Outline:Login with valid and invalid credential
    Given I am on very login page
    When I enter username as "<Username>" and enter password as "<Password>" on the login page
    And I enter postcode as "<PostCode>" and I click on login button
    Then I should see a message "<Message>"
    Examples:
      |Username                            |Password            |PostCode |Message                                      |
      |slidefix@gmail.com                  |valid password      |SE1 6SL  |successfully logged into very account        |
      |slidefix@gmail.com                  |invalid password    |SE1 6SL  |Login not successful                         |
      |invalid username                    |valid password      |SE1 6SL  |enter a valid email address or account number|
      |field empty                         |valid password      |SE1 6SL  |Your username or account number is required  |
      |slidefix@gmail.com                  |field empty         |SE1 6SL  |Your password is required.                   |
      |field empty                         |field empty         |SE1 6SL  |Username and Password are required           |

     Scenario: Reset password
       Given I am on the login page
       When I clicked on forgotten your password link
       And I entered valid data
       |Field                    |Values                              |
       |Email                    |Emmakick                            |
       |Postcode                 |SE2 3LY                             |
       |Birthday                 |07-06-1978                          |
       And I click on Continue Button
       Then I should successfully reset my password

  Scenario Outline: Reset password second example
    Given I am on very login and I click on the forgotten your password link
    When I enter email as "<Email>" and postcode as "<Postcode>"
    When I enter day as "<Day>" and month as "<Month>" and year as "<Year>"
    And I clicked on Continue Button
    Then I should see "We have sent a password reset link to your email"
    Examples:
      |Email                     |Postcode     |Day  |Month      |Year |
      |Example@gmail.com         |SE1 6SL      |01   |January    |1988 |
      |Example1@gmail.com        |SE1 6SL      |21   |September  |1998 |
      |Example2@gmail.com        |SE1 6SL      |11   |June       |1975 |
      |Example3@gmail.com        |SE1 6SL      |10   |October    |1977 |
      |Example4@gmail.com        |SE1 6SL      |09   |January    |1976 |



