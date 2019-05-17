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
  "duration": 8259617500,
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
