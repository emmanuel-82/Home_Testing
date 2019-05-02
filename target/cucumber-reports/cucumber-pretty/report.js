$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "Facebook login",
  "description": "",
  "id": "facebook-login",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Test login with valid credentials",
  "description": "",
  "id": "facebook-login;test-login-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I am on Facebook login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I entered valid username and a valid password",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I clicked on the login button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I should be successfully logged into Facebook",
  "keyword": "Then "
});
formatter.match({
  "location": "login.i_am_on_Facebook_login_page()"
});
formatter.result({
  "duration": 16204814129,
  "status": "passed"
});
formatter.match({
  "location": "login.i_entered_valid_username_and_a_valid_password()"
});
formatter.result({
  "duration": 765152067,
  "status": "passed"
});
formatter.match({
  "location": "login.i_clicked_on_the_login_button()"
});
formatter.result({
  "duration": 5118487076,
  "status": "passed"
});
formatter.match({
  "location": "login.i_should_be_successfully_logged_into_Facebook()"
});
formatter.result({
  "duration": 49244,
  "status": "passed"
});
});