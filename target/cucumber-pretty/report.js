$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/Feature/abc.feature");
formatter.feature({
  "name": "Automation Testing Scripts",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Verify Add New Region",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@scenario_one"
    }
  ]
});
formatter.step({
  "name": "Admin is on Regions Page in Real Estate",
  "keyword": "Given "
});
formatter.step({
  "name": "Admin enters Name \"\u003cName\u003e\",Slug \"\u003cSlug\u003e\" and Description \"\u003cDesc\u003e\" and selects parent region",
  "keyword": "When "
});
formatter.step({
  "name": "clicks on add new Region button",
  "keyword": "And "
});
formatter.step({
  "name": "Admin enters Name \"\u003cName\u003e\" in search region text in displayed result in Region page",
  "keyword": "And "
});
formatter.step({
  "name": "clicks on search button on displayed result in Region page.",
  "keyword": "And "
});
formatter.step({
  "name": "Admin will see the new added region name\"\u003cName\u003e\" in displayed result in Region page.",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Name",
        "Slug",
        "Desc"
      ]
    },
    {
      "cells": [
        "Codingface@1234",
        "Test1",
        "This is Test1"
      ]
    },
    {
      "cells": [
        "Mumbai",
        "Mumbai",
        "This is Created Region"
      ]
    }
  ]
});
formatter.background({
  "name": "Verify login functionality",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Admin is on the login page of Real Estate",
  "keyword": "Given "
});
formatter.match({
  "location": "Signupdefination.admin_is_on_the_login_page_of_Real_Estate()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin enters Username and Password",
  "keyword": "When "
});
formatter.match({
  "location": "Signupdefination.admin_enters_Username_and_Password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on login button",
  "keyword": "And "
});
formatter.match({
  "location": "Signupdefination.click_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin is on Dashboard page",
  "keyword": "Given "
});
formatter.match({
  "location": "Signupdefination.admin_is_on_Dashboard_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin clicks on properties",
  "keyword": "When "
});
formatter.match({
  "location": "Signupdefination.admin_clicks_on_properties()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin will navigate to Region page in Real Estate",
  "keyword": "Then "
});
formatter.match({
  "location": "Signupdefination.admin_will_navigate_to_Region_page_in_Real_Estate()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify Add New Region",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@scenario_one"
    }
  ]
});
formatter.step({
  "name": "Admin is on Regions Page in Real Estate",
  "keyword": "Given "
});
formatter.match({
  "location": "Signupdefination.admin_is_on_Regions_Page_in_Real_Estate()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin enters Name \"Codingface@1234\",Slug \"Test1\" and Description \"This is Test1\" and selects parent region",
  "keyword": "When "
});
formatter.match({
  "location": "Signupdefination.admin_enters_Name_Slug_and_Description_and_selects_parent_region(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on add new Region button",
  "keyword": "And "
});
formatter.match({
  "location": "Signupdefination.clicks_on_add_new_Region_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin enters Name \"Codingface@1234\" in search region text in displayed result in Region page",
  "keyword": "And "
});
formatter.match({
  "location": "Signupdefination.admin_enters_Name_in_search_region_text_in_displayed_result_in_Region_page(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on search button on displayed result in Region page.",
  "keyword": "And "
});
formatter.match({
  "location": "Signupdefination.clicks_on_search_button_on_displayed_result_in_Region_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin will see the new added region name\"Codingface@1234\" in displayed result in Region page.",
  "keyword": "Then "
});
formatter.match({
  "location": "Signupdefination.admin_will_see_the_new_added_region_name_in_displayed_result_in_Region_page(String)"
});
formatter.result({
  "error_message": "junit.framework.AssertionFailedError\r\n\tat junit.framework.Assert.fail(Assert.java:55)\r\n\tat junit.framework.Assert.fail(Assert.java:64)\r\n\tat StepDefination.Signupdefination.admin_will_see_the_new_added_region_name_in_displayed_result_in_Region_page(Signupdefination.java:193)\r\n\tat ✽.Admin will see the new added region name\"Codingface@1234\" in displayed result in Region page.(file:src/test/java/Feature/abc.feature:18)\r\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Verify login functionality",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Admin is on the login page of Real Estate",
  "keyword": "Given "
});
formatter.match({
  "location": "Signupdefination.admin_is_on_the_login_page_of_Real_Estate()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin enters Username and Password",
  "keyword": "When "
});
formatter.match({
  "location": "Signupdefination.admin_enters_Username_and_Password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on login button",
  "keyword": "And "
});
formatter.match({
  "location": "Signupdefination.click_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin is on Dashboard page",
  "keyword": "Given "
});
formatter.match({
  "location": "Signupdefination.admin_is_on_Dashboard_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin clicks on properties",
  "keyword": "When "
});
formatter.match({
  "location": "Signupdefination.admin_clicks_on_properties()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin will navigate to Region page in Real Estate",
  "keyword": "Then "
});
formatter.match({
  "location": "Signupdefination.admin_will_navigate_to_Region_page_in_Real_Estate()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify Add New Region",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@scenario_one"
    }
  ]
});
formatter.step({
  "name": "Admin is on Regions Page in Real Estate",
  "keyword": "Given "
});
formatter.match({
  "location": "Signupdefination.admin_is_on_Regions_Page_in_Real_Estate()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin enters Name \"Mumbai\",Slug \"Mumbai\" and Description \"This is Created Region\" and selects parent region",
  "keyword": "When "
});
formatter.match({
  "location": "Signupdefination.admin_enters_Name_Slug_and_Description_and_selects_parent_region(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on add new Region button",
  "keyword": "And "
});
formatter.match({
  "location": "Signupdefination.clicks_on_add_new_Region_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin enters Name \"Mumbai\" in search region text in displayed result in Region page",
  "keyword": "And "
});
formatter.match({
  "location": "Signupdefination.admin_enters_Name_in_search_region_text_in_displayed_result_in_Region_page(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on search button on displayed result in Region page.",
  "keyword": "And "
});
formatter.match({
  "location": "Signupdefination.clicks_on_search_button_on_displayed_result_in_Region_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin will see the new added region name\"Mumbai\" in displayed result in Region page.",
  "keyword": "Then "
});
formatter.match({
  "location": "Signupdefination.admin_will_see_the_new_added_region_name_in_displayed_result_in_Region_page(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});