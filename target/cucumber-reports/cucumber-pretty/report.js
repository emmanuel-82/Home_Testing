$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("vLogin.feature");
formatter.feature({
  "line": 1,
  "name": "Logging into very account with valid and invalid credentials",
  "description": "",
  "id": "logging-into-very-account-with-valid-and-invalid-credentials",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Login with valid and invalid credential",
  "description": "",
  "id": "logging-into-very-account-with-valid-and-invalid-credentials;login-with-valid-and-invalid-credential",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "I am on very login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I enter username as \"\u003cUsername\u003e\" and enter password as \"\u003cPassword\u003e\" on the login page",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I enter postcode as \"\u003cPostCode\u003e\" and I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I should see a message \"\u003cMessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "logging-into-very-account-with-valid-and-invalid-credentials;login-with-valid-and-invalid-credential;",
  "rows": [
    {
      "cells": [
        "Username",
        "Password",
        "PostCode",
        "Message"
      ],
      "line": 11,
      "id": "logging-into-very-account-with-valid-and-invalid-credentials;login-with-valid-and-invalid-credential;;1"
    },
    {
      "cells": [
        "slidefix@gmail.com",
        "valid password",
        "SE1 6SL",
        "successfully logged into very account"
      ],
      "line": 12,
      "id": "logging-into-very-account-with-valid-and-invalid-credentials;login-with-valid-and-invalid-credential;;2"
    },
    {
      "cells": [
        "slidefix@gmail.com",
        "invalid password",
        "SE1 6SL",
        "Login not successful"
      ],
      "line": 13,
      "id": "logging-into-very-account-with-valid-and-invalid-credentials;login-with-valid-and-invalid-credential;;3"
    },
    {
      "cells": [
        "invalid username",
        "valid password",
        "SE1 6SL",
        "enter a valid email address or account number"
      ],
      "line": 14,
      "id": "logging-into-very-account-with-valid-and-invalid-credentials;login-with-valid-and-invalid-credential;;4"
    },
    {
      "cells": [
        "field empty",
        "valid password",
        "SE1 6SL",
        "Your username or account number is required"
      ],
      "line": 15,
      "id": "logging-into-very-account-with-valid-and-invalid-credentials;login-with-valid-and-invalid-credential;;5"
    },
    {
      "cells": [
        "slidefix@gmail.com",
        "field empty",
        "SE1 6SL",
        "Your password is required."
      ],
      "line": 16,
      "id": "logging-into-very-account-with-valid-and-invalid-credentials;login-with-valid-and-invalid-credential;;6"
    },
    {
      "cells": [
        "field empty",
        "field empty",
        "SE1 6SL",
        "Username and Password are required"
      ],
      "line": 17,
      "id": "logging-into-very-account-with-valid-and-invalid-credentials;login-with-valid-and-invalid-credential;;7"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 3,
  "name": "Very account login",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 12,
  "name": "Login with valid and invalid credential",
  "description": "",
  "id": "logging-into-very-account-with-valid-and-invalid-credentials;login-with-valid-and-invalid-credential;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "I am on very login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I enter username as \"slidefix@gmail.com\" and enter password as \"valid password\" on the login page",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I enter postcode as \"SE1 6SL\" and I click on login button",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I should see a message \"successfully logged into very account\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "VLogin.i_am_on_very_login_page()"
});
formatter.result({
  "duration": 19759026300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "slidefix@gmail.com",
      "offset": 21
    },
    {
      "val": "valid password",
      "offset": 64
    }
  ],
  "location": "VLogin.i_enter_username_as_and_enter_password_as_on_the_login_page(String,String)"
});
formatter.result({
  "duration": 901016700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SE1 6SL",
      "offset": 21
    }
  ],
  "location": "VLogin.i_enter_postcode_as_and_I_click_on_login_button(String)"
});
formatter.result({
  "duration": 240705000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "successfully logged into very account",
      "offset": 24
    }
  ],
  "location": "VLogin.i_should_see_a_message(String)"
});
formatter.result({
  "duration": 2931410000,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "Very account login",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 13,
  "name": "Login with valid and invalid credential",
  "description": "",
  "id": "logging-into-very-account-with-valid-and-invalid-credentials;login-with-valid-and-invalid-credential;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "I am on very login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I enter username as \"slidefix@gmail.com\" and enter password as \"invalid password\" on the login page",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I enter postcode as \"SE1 6SL\" and I click on login button",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I should see a message \"Login not successful\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "VLogin.i_am_on_very_login_page()"
});
formatter.result({
  "duration": 22012861900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "slidefix@gmail.com",
      "offset": 21
    },
    {
      "val": "invalid password",
      "offset": 64
    }
  ],
  "location": "VLogin.i_enter_username_as_and_enter_password_as_on_the_login_page(String,String)"
});
formatter.result({
  "duration": 1057968900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SE1 6SL",
      "offset": 21
    }
  ],
  "location": "VLogin.i_enter_postcode_as_and_I_click_on_login_button(String)"
});
formatter.result({
  "duration": 371117100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login not successful",
      "offset": 24
    }
  ],
  "location": "VLogin.i_should_see_a_message(String)"
});
formatter.result({
  "duration": 1676886800,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "Very account login",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 14,
  "name": "Login with valid and invalid credential",
  "description": "",
  "id": "logging-into-very-account-with-valid-and-invalid-credentials;login-with-valid-and-invalid-credential;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "I am on very login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I enter username as \"invalid username\" and enter password as \"valid password\" on the login page",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I enter postcode as \"SE1 6SL\" and I click on login button",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I should see a message \"enter a valid email address or account number\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "VLogin.i_am_on_very_login_page()"
});
formatter.result({
  "duration": 23090783800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "invalid username",
      "offset": 21
    },
    {
      "val": "valid password",
      "offset": 62
    }
  ],
  "location": "VLogin.i_enter_username_as_and_enter_password_as_on_the_login_page(String,String)"
});
formatter.result({
  "duration": 970733000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SE1 6SL",
      "offset": 21
    }
  ],
  "location": "VLogin.i_enter_postcode_as_and_I_click_on_login_button(String)"
});
formatter.result({
  "duration": 319756700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "enter a valid email address or account number",
      "offset": 24
    }
  ],
  "location": "VLogin.i_should_see_a_message(String)"
});
formatter.result({
  "duration": 1585238100,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "Very account login",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 15,
  "name": "Login with valid and invalid credential",
  "description": "",
  "id": "logging-into-very-account-with-valid-and-invalid-credentials;login-with-valid-and-invalid-credential;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "I am on very login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I enter username as \"field empty\" and enter password as \"valid password\" on the login page",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I enter postcode as \"SE1 6SL\" and I click on login button",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I should see a message \"Your username or account number is required\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "VLogin.i_am_on_very_login_page()"
});
formatter.result({
  "duration": 13462259000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "field empty",
      "offset": 21
    },
    {
      "val": "valid password",
      "offset": 57
    }
  ],
  "location": "VLogin.i_enter_username_as_and_enter_password_as_on_the_login_page(String,String)"
});
formatter.result({
  "duration": 815956100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SE1 6SL",
      "offset": 21
    }
  ],
  "location": "VLogin.i_enter_postcode_as_and_I_click_on_login_button(String)"
});
formatter.result({
  "duration": 259486600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Your username or account number is required",
      "offset": 24
    }
  ],
  "location": "VLogin.i_should_see_a_message(String)"
});
formatter.result({
  "duration": 1365005400,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "Very account login",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 16,
  "name": "Login with valid and invalid credential",
  "description": "",
  "id": "logging-into-very-account-with-valid-and-invalid-credentials;login-with-valid-and-invalid-credential;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "I am on very login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I enter username as \"slidefix@gmail.com\" and enter password as \"field empty\" on the login page",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I enter postcode as \"SE1 6SL\" and I click on login button",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I should see a message \"Your password is required.\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "VLogin.i_am_on_very_login_page()"
});
formatter.result({
  "duration": 16626536800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "slidefix@gmail.com",
      "offset": 21
    },
    {
      "val": "field empty",
      "offset": 64
    }
  ],
  "location": "VLogin.i_enter_username_as_and_enter_password_as_on_the_login_page(String,String)"
});
formatter.result({
  "duration": 1131772500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SE1 6SL",
      "offset": 21
    }
  ],
  "location": "VLogin.i_enter_postcode_as_and_I_click_on_login_button(String)"
});
formatter.result({
  "duration": 341171200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Your password is required.",
      "offset": 24
    }
  ],
  "location": "VLogin.i_should_see_a_message(String)"
});
formatter.result({
  "duration": 1684792000,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "Very account login",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 17,
  "name": "Login with valid and invalid credential",
  "description": "",
  "id": "logging-into-very-account-with-valid-and-invalid-credentials;login-with-valid-and-invalid-credential;;7",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "I am on very login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I enter username as \"field empty\" and enter password as \"field empty\" on the login page",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I enter postcode as \"SE1 6SL\" and I click on login button",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I should see a message \"Username and Password are required\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "VLogin.i_am_on_very_login_page()"
});
formatter.result({
  "duration": 13858609000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "field empty",
      "offset": 21
    },
    {
      "val": "field empty",
      "offset": 57
    }
  ],
  "location": "VLogin.i_enter_username_as_and_enter_password_as_on_the_login_page(String,String)"
});
formatter.result({
  "duration": 853724300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SE1 6SL",
      "offset": 21
    }
  ],
  "location": "VLogin.i_enter_postcode_as_and_I_click_on_login_button(String)"
});
formatter.result({
  "duration": 343400600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Username and Password are required",
      "offset": 24
    }
  ],
  "location": "VLogin.i_should_see_a_message(String)"
});
formatter.result({
  "duration": 1663855700,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "Very account login",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 19,
  "name": "Reset password",
  "description": "",
  "id": "logging-into-very-account-with-valid-and-invalid-credentials;reset-password",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 20,
  "name": "I am on the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "I clicked on forgotten your password link",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "I entered valid data",
  "rows": [
    {
      "cells": [
        "Field",
        "Values"
      ],
      "line": 23
    },
    {
      "cells": [
        "Email",
        "Emmakick"
      ],
      "line": 24
    },
    {
      "cells": [
        "Postcode",
        "SE2 3LY"
      ],
      "line": 25
    },
    {
      "cells": [
        "Birthday",
        "07-06-1978"
      ],
      "line": 26
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I click on Continue Button",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I should successfully reset my password",
  "keyword": "Then "
});
formatter.match({
  "location": "vReset.i_am_on_the_login_page()"
});
formatter.result({
  "duration": 16798858100,
  "status": "passed"
});
formatter.match({
  "location": "vReset.i_clicked_on_forgotten_your_password_link()"
});
formatter.result({
  "duration": 6748403700,
  "status": "passed"
});
formatter.match({
  "location": "vReset.i_entered_valid_data(DataTable)"
});
formatter.result({
  "duration": 8184903000,
  "status": "passed"
});
formatter.match({
  "location": "vReset.i_click_on_Continue_Button()"
});
formatter.result({
  "duration": 69400,
  "status": "passed"
});
formatter.match({
  "location": "vReset.i_should_successfully_reset_my_password()"
});
formatter.result({
  "duration": 1512954900,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 30,
  "name": "Reset password second example",
  "description": "",
  "id": "logging-into-very-account-with-valid-and-invalid-credentials;reset-password-second-example",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 31,
  "name": "I am on very login and I click on the forgotten your password link",
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "I enter email as \"\u003cEmail\u003e\" and postcode as \"\u003cPostcode\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "I enter day as \"\u003cDay\u003e\" and month as \"\u003cMonth\u003e\" and year as \"\u003cYear\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "I clicked on Continue Button",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I should see \"We have sent a password reset link to your email\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 36,
  "name": "",
  "description": "",
  "id": "logging-into-very-account-with-valid-and-invalid-credentials;reset-password-second-example;",
  "rows": [
    {
      "cells": [
        "Email",
        "Postcode",
        "Day",
        "Month",
        "Year"
      ],
      "line": 37,
      "id": "logging-into-very-account-with-valid-and-invalid-credentials;reset-password-second-example;;1"
    },
    {
      "cells": [
        "Example@gmail.com",
        "SE1 6SL",
        "01",
        "January",
        "1988"
      ],
      "line": 38,
      "id": "logging-into-very-account-with-valid-and-invalid-credentials;reset-password-second-example;;2"
    },
    {
      "cells": [
        "Example1@gmail.com",
        "SE1 6SL",
        "21",
        "September",
        "1998"
      ],
      "line": 39,
      "id": "logging-into-very-account-with-valid-and-invalid-credentials;reset-password-second-example;;3"
    },
    {
      "cells": [
        "Example2@gmail.com",
        "SE1 6SL",
        "11",
        "June",
        "1975"
      ],
      "line": 40,
      "id": "logging-into-very-account-with-valid-and-invalid-credentials;reset-password-second-example;;4"
    },
    {
      "cells": [
        "Example3@gmail.com",
        "SE1 6SL",
        "10",
        "October",
        "1977"
      ],
      "line": 41,
      "id": "logging-into-very-account-with-valid-and-invalid-credentials;reset-password-second-example;;5"
    },
    {
      "cells": [
        "Example4@gmail.com",
        "SE1 6SL",
        "09",
        "January",
        "1976"
      ],
      "line": 42,
      "id": "logging-into-very-account-with-valid-and-invalid-credentials;reset-password-second-example;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 3,
  "name": "Very account login",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 38,
  "name": "Reset password second example",
  "description": "",
  "id": "logging-into-very-account-with-valid-and-invalid-credentials;reset-password-second-example;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 31,
  "name": "I am on very login and I click on the forgotten your password link",
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "I enter email as \"Example@gmail.com\" and postcode as \"SE1 6SL\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "I enter day as \"01\" and month as \"January\" and year as \"1988\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "I clicked on Continue Button",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I should see \"We have sent a password reset link to your email\"",
  "keyword": "Then "
});
formatter.match({
  "location": "vReset2.i_am_on_very_login_and_I_click_on_the_forgotten_your_password_link()"
});
formatter.result({
  "duration": 23076496400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Example@gmail.com",
      "offset": 18
    },
    {
      "val": "SE1 6SL",
      "offset": 54
    }
  ],
  "location": "vReset2.i_enter_email_as_and_postcode_as(String,String)"
});
formatter.result({
  "duration": 1093757200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "01",
      "offset": 16
    },
    {
      "val": "January",
      "offset": 34
    },
    {
      "val": "1988",
      "offset": 56
    }
  ],
  "location": "vReset2.i_enter_day_as_and_month_as_and_year_as(String,String,String)"
});
formatter.result({
  "duration": 598940700,
  "status": "passed"
});
formatter.match({
  "location": "vReset2.i_clicked_on_Continue_Button()"
});
formatter.result({
  "duration": 61900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "We have sent a password reset link to your email",
      "offset": 14
    }
  ],
  "location": "vReset2.i_should_see(String)"
});
formatter.result({
  "duration": 1516591500,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "Very account login",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 39,
  "name": "Reset password second example",
  "description": "",
  "id": "logging-into-very-account-with-valid-and-invalid-credentials;reset-password-second-example;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 31,
  "name": "I am on very login and I click on the forgotten your password link",
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "I enter email as \"Example1@gmail.com\" and postcode as \"SE1 6SL\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "I enter day as \"21\" and month as \"September\" and year as \"1998\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "I clicked on Continue Button",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I should see \"We have sent a password reset link to your email\"",
  "keyword": "Then "
});
formatter.match({
  "location": "vReset2.i_am_on_very_login_and_I_click_on_the_forgotten_your_password_link()"
});
formatter.result({
  "duration": 25068409800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Example1@gmail.com",
      "offset": 18
    },
    {
      "val": "SE1 6SL",
      "offset": 55
    }
  ],
  "location": "vReset2.i_enter_email_as_and_postcode_as(String,String)"
});
formatter.result({
  "duration": 1209670800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "21",
      "offset": 16
    },
    {
      "val": "September",
      "offset": 34
    },
    {
      "val": "1998",
      "offset": 58
    }
  ],
  "location": "vReset2.i_enter_day_as_and_month_as_and_year_as(String,String,String)"
});
formatter.result({
  "duration": 627316700,
  "status": "passed"
});
formatter.match({
  "location": "vReset2.i_clicked_on_Continue_Button()"
});
formatter.result({
  "duration": 28000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "We have sent a password reset link to your email",
      "offset": 14
    }
  ],
  "location": "vReset2.i_should_see(String)"
});
formatter.result({
  "duration": 1582996100,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "Very account login",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 40,
  "name": "Reset password second example",
  "description": "",
  "id": "logging-into-very-account-with-valid-and-invalid-credentials;reset-password-second-example;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 31,
  "name": "I am on very login and I click on the forgotten your password link",
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "I enter email as \"Example2@gmail.com\" and postcode as \"SE1 6SL\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "I enter day as \"11\" and month as \"June\" and year as \"1975\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "I clicked on Continue Button",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I should see \"We have sent a password reset link to your email\"",
  "keyword": "Then "
});
formatter.match({
  "location": "vReset2.i_am_on_very_login_and_I_click_on_the_forgotten_your_password_link()"
});
formatter.result({
  "duration": 23196338700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Example2@gmail.com",
      "offset": 18
    },
    {
      "val": "SE1 6SL",
      "offset": 55
    }
  ],
  "location": "vReset2.i_enter_email_as_and_postcode_as(String,String)"
});
formatter.result({
  "duration": 1166133800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "11",
      "offset": 16
    },
    {
      "val": "June",
      "offset": 34
    },
    {
      "val": "1975",
      "offset": 53
    }
  ],
  "location": "vReset2.i_enter_day_as_and_month_as_and_year_as(String,String,String)"
});
formatter.result({
  "duration": 988609100,
  "status": "passed"
});
formatter.match({
  "location": "vReset2.i_clicked_on_Continue_Button()"
});
formatter.result({
  "duration": 39000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "We have sent a password reset link to your email",
      "offset": 14
    }
  ],
  "location": "vReset2.i_should_see(String)"
});
formatter.result({
  "duration": 1435593200,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "Very account login",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 41,
  "name": "Reset password second example",
  "description": "",
  "id": "logging-into-very-account-with-valid-and-invalid-credentials;reset-password-second-example;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 31,
  "name": "I am on very login and I click on the forgotten your password link",
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "I enter email as \"Example3@gmail.com\" and postcode as \"SE1 6SL\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "I enter day as \"10\" and month as \"October\" and year as \"1977\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "I clicked on Continue Button",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I should see \"We have sent a password reset link to your email\"",
  "keyword": "Then "
});
formatter.match({
  "location": "vReset2.i_am_on_very_login_and_I_click_on_the_forgotten_your_password_link()"
});
formatter.result({
  "duration": 23464968600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Example3@gmail.com",
      "offset": 18
    },
    {
      "val": "SE1 6SL",
      "offset": 55
    }
  ],
  "location": "vReset2.i_enter_email_as_and_postcode_as(String,String)"
});
formatter.result({
  "duration": 923062300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 16
    },
    {
      "val": "October",
      "offset": 34
    },
    {
      "val": "1977",
      "offset": 56
    }
  ],
  "location": "vReset2.i_enter_day_as_and_month_as_and_year_as(String,String,String)"
});
formatter.result({
  "duration": 688464700,
  "status": "passed"
});
formatter.match({
  "location": "vReset2.i_clicked_on_Continue_Button()"
});
formatter.result({
  "duration": 32700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "We have sent a password reset link to your email",
      "offset": 14
    }
  ],
  "location": "vReset2.i_should_see(String)"
});
formatter.result({
  "duration": 1558069700,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "Very account login",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 42,
  "name": "Reset password second example",
  "description": "",
  "id": "logging-into-very-account-with-valid-and-invalid-credentials;reset-password-second-example;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 31,
  "name": "I am on very login and I click on the forgotten your password link",
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "I enter email as \"Example4@gmail.com\" and postcode as \"SE1 6SL\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "I enter day as \"09\" and month as \"January\" and year as \"1976\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "I clicked on Continue Button",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I should see \"We have sent a password reset link to your email\"",
  "keyword": "Then "
});
formatter.match({
  "location": "vReset2.i_am_on_very_login_and_I_click_on_the_forgotten_your_password_link()"
});
formatter.result({
  "duration": 22694968300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Example4@gmail.com",
      "offset": 18
    },
    {
      "val": "SE1 6SL",
      "offset": 55
    }
  ],
  "location": "vReset2.i_enter_email_as_and_postcode_as(String,String)"
});
formatter.result({
  "duration": 1034764700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "09",
      "offset": 16
    },
    {
      "val": "January",
      "offset": 34
    },
    {
      "val": "1976",
      "offset": 56
    }
  ],
  "location": "vReset2.i_enter_day_as_and_month_as_and_year_as(String,String,String)"
});
formatter.result({
  "duration": 881395100,
  "status": "passed"
});
formatter.match({
  "location": "vReset2.i_clicked_on_Continue_Button()"
});
formatter.result({
  "duration": 35300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "We have sent a password reset link to your email",
      "offset": 14
    }
  ],
  "location": "vReset2.i_should_see(String)"
});
formatter.result({
  "duration": 1355888500,
  "status": "passed"
});
});