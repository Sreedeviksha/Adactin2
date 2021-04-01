$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/com/adactin/feature/Adactin.feature");
formatter.feature({
  "line": 1,
  "name": "Booking functionality in the adactin application",
  "description": "",
  "id": "booking-functionality-in-the-adactin-application",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Verify the user is able to login the application",
  "description": "",
  "id": "booking-functionality-in-the-adactin-application;verify-the-user-is-able-to-login-the-application",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User launches the application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User enters the valid \"\u003cusername\u003e\" in the username field",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enters the valid \"\u003cpassword\u003e\" in the password field",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User clicks on the login button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User verifies whether the Homepage navigates to the Search Hotel Page",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "booking-functionality-in-the-adactin-application;verify-the-user-is-able-to-login-the-application;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 12,
      "id": "booking-functionality-in-the-adactin-application;verify-the-user-is-able-to-login-the-application;;1"
    },
    {
      "cells": [
        "AAA",
        "111"
      ],
      "line": 13,
      "id": "booking-functionality-in-the-adactin-application;verify-the-user-is-able-to-login-the-application;;2"
    },
    {
      "cells": [
        "BBB",
        "222"
      ],
      "line": 14,
      "id": "booking-functionality-in-the-adactin-application;verify-the-user-is-able-to-login-the-application;;3"
    },
    {
      "cells": [
        "SreeDeviRaman",
        "Sree@123"
      ],
      "line": 15,
      "id": "booking-functionality-in-the-adactin-application;verify-the-user-is-able-to-login-the-application;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 13,
  "name": "Verify the user is able to login the application",
  "description": "",
  "id": "booking-functionality-in-the-adactin-application;verify-the-user-is-able-to-login-the-application;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User launches the application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User enters the valid \"AAA\" in the username field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enters the valid \"111\" in the password field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User clicks on the login button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User verifies whether the Homepage navigates to the Search Hotel Page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_launches_the_application()"
});
formatter.result({
  "duration": 3210758300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "AAA",
      "offset": 23
    }
  ],
  "location": "StepDefinition.user_enters_the_valid_in_the_username_field(String)"
});
formatter.result({
  "duration": 138302900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "111",
      "offset": 23
    }
  ],
  "location": "StepDefinition.user_enters_the_valid_in_the_password_field(String)"
});
formatter.result({
  "duration": 97320900,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_clicks_on_the_login_button()"
});
formatter.result({
  "duration": 734233000,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_verifies_whether_the_Homepage_navigates_to_the_Search_Hotel_Page()"
});
formatter.result({
  "duration": 1414500,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[A]\u003e but was:\u003c[a]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat com.adactin.stepdefinition.StepDefinition.user_verifies_whether_the_Homepage_navigates_to_the_Search_Hotel_Page(StepDefinition.java:47)\r\n\tat ✽.Then User verifies whether the Homepage navigates to the Search Hotel Page(src/test/java/com/adactin/feature/Adactin.feature:9)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 14,
  "name": "Verify the user is able to login the application",
  "description": "",
  "id": "booking-functionality-in-the-adactin-application;verify-the-user-is-able-to-login-the-application;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User launches the application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User enters the valid \"BBB\" in the username field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enters the valid \"222\" in the password field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User clicks on the login button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User verifies whether the Homepage navigates to the Search Hotel Page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_launches_the_application()"
});
formatter.result({
  "duration": 519381900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BBB",
      "offset": 23
    }
  ],
  "location": "StepDefinition.user_enters_the_valid_in_the_username_field(String)"
});
formatter.result({
  "duration": 83600600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "222",
      "offset": 23
    }
  ],
  "location": "StepDefinition.user_enters_the_valid_in_the_password_field(String)"
});
formatter.result({
  "duration": 73820900,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_clicks_on_the_login_button()"
});
formatter.result({
  "duration": 384313600,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_verifies_whether_the_Homepage_navigates_to_the_Search_Hotel_Page()"
});
formatter.result({
  "duration": 193100,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[A]\u003e but was:\u003c[a]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat com.adactin.stepdefinition.StepDefinition.user_verifies_whether_the_Homepage_navigates_to_the_Search_Hotel_Page(StepDefinition.java:47)\r\n\tat ✽.Then User verifies whether the Homepage navigates to the Search Hotel Page(src/test/java/com/adactin/feature/Adactin.feature:9)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 15,
  "name": "Verify the user is able to login the application",
  "description": "",
  "id": "booking-functionality-in-the-adactin-application;verify-the-user-is-able-to-login-the-application;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User launches the application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User enters the valid \"SreeDeviRaman\" in the username field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enters the valid \"Sree@123\" in the password field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User clicks on the login button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User verifies whether the Homepage navigates to the Search Hotel Page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_launches_the_application()"
});
formatter.result({
  "duration": 340085600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SreeDeviRaman",
      "offset": 23
    }
  ],
  "location": "StepDefinition.user_enters_the_valid_in_the_username_field(String)"
});
formatter.result({
  "duration": 82915600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sree@123",
      "offset": 23
    }
  ],
  "location": "StepDefinition.user_enters_the_valid_in_the_password_field(String)"
});
formatter.result({
  "duration": 81368700,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_clicks_on_the_login_button()"
});
formatter.result({
  "duration": 1233477200,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_verifies_whether_the_Homepage_navigates_to_the_Search_Hotel_Page()"
});
formatter.result({
  "duration": 209500,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[A]\u003e but was:\u003c[a]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat com.adactin.stepdefinition.StepDefinition.user_verifies_whether_the_Homepage_navigates_to_the_Search_Hotel_Page(StepDefinition.java:47)\r\n\tat ✽.Then User verifies whether the Homepage navigates to the Search Hotel Page(src/test/java/com/adactin/feature/Adactin.feature:9)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 17,
  "name": "Verify user is in SearchHotel page",
  "description": "",
  "id": "booking-functionality-in-the-adactin-application;verify-user-is-in-searchhotel-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 18,
  "name": "User selects the location in the Select location field",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "User selects the Hotel in Select Hotel field",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User selects the room type in Select Room type field",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User selects the number of rooms",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "User selects the check in date",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "User selects the check out date",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "User selects the adults per Room",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "User selects the children per Room",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "User clicks on search button to search for the details",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "User verify the Search Hotel Page navigates to Select hotel page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_selects_the_location_in_the_Select_location_field()"
});
formatter.result({
  "duration": 96821100,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_selects_the_Hotel_in_Select_Hotel_field()"
});
formatter.result({
  "duration": 92750700,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_selects_the_room_type_in_Select_Room_type_field()"
});
formatter.result({
  "duration": 80349100,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_selects_the_number_of_rooms()"
});
formatter.result({
  "duration": 60354900,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_selects_the_check_in_date()"
});
formatter.result({
  "duration": 100776300,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_selects_the_check_out_date()"
});
formatter.result({
  "duration": 91521800,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_selects_the_adults_per_Room()"
});
formatter.result({
  "duration": 78907000,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_selects_the_children_per_Room()"
});
formatter.result({
  "duration": 86296100,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_clicks_on_search_button_to_search_for_the_details()"
});
formatter.result({
  "duration": 692758600,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_verify_the_Search_Hotel_Page_navigates_to_Select_hotel_page()"
});
formatter.result({
  "duration": 19800,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "Verify user is in Select Hotel page",
  "description": "",
  "id": "booking-functionality-in-the-adactin-application;verify-user-is-in-select-hotel-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 30,
  "name": "User clicks on the selected radion button",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "User clicks on the continue button",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "User verify the Select Hotel page navigates to Book a Hotel page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_clicks_on_the_selected_radion_button()"
});
formatter.result({
  "duration": 92119500,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_clicks_on_the_continue_button()"
});
formatter.result({
  "duration": 77685000,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_verify_the_Select_Hotel_page_navigates_to_Book_a_Hotel_page()"
});
formatter.result({
  "duration": 25900,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "Verify user is in Book a Hotel page",
  "description": "",
  "id": "booking-functionality-in-the-adactin-application;verify-user-is-in-book-a-hotel-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 35,
  "name": "User enters the  first name in FirstName field",
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "User enters the  last name in LastName field",
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "User enters the  billing Address in Billing Address field",
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "User enters the  Credit Card Number in Credit Card Number field",
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "User enters the  credit card type in Credit Card Type field",
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "User enters expiry month in Expiry Month field",
  "keyword": "When "
});
formatter.step({
  "line": 41,
  "name": "User enters expiry year in Expiry Year field",
  "keyword": "When "
});
formatter.step({
  "line": 42,
  "name": "User enters the cvv number in CVV field",
  "keyword": "When "
});
formatter.step({
  "line": 43,
  "name": "User clicks on the BookNow Button",
  "keyword": "When "
});
formatter.step({
  "line": 44,
  "name": "User verify the Book a Hotel navigates to Booking Confirmation page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_enters_the_first_name_in_FirstName_field()"
});
formatter.result({
  "duration": 15278815300,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_enters_the_last_name_in_LastName_field()"
});
formatter.result({
  "duration": 81167900,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_enters_the_billing_Address_in_Billing_Address_field()"
});
formatter.result({
  "duration": 90340500,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_enters_the_Credit_Card_Number_in_Credit_Card_Number_field()"
});
formatter.result({
  "duration": 87400500,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_enters_the_credit_card_type_in_Credit_Card_Type_field()"
});
formatter.result({
  "duration": 81949000,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_enters_expiry_month_in_Expiry_Month_field()"
});
formatter.result({
  "duration": 88636900,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_enters_expiry_year_in_Expiry_Year_field()"
});
formatter.result({
  "duration": 93234500,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_enters_the_cvv_number_in_CVV_field()"
});
formatter.result({
  "duration": 126992900,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_clicks_on_the_BookNow_Button()"
});
formatter.result({
  "duration": 69156000,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_verify_the_Book_a_Hotel_navigates_to_Booking_Confirmation_page()"
});
formatter.result({
  "duration": 12100,
  "status": "passed"
});
formatter.scenario({
  "line": 46,
  "name": "Verify user is in Booking ConfirmationPage",
  "description": "",
  "id": "booking-functionality-in-the-adactin-application;verify-user-is-in-booking-confirmationpage",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 47,
  "name": "user clicks on book itinerary button",
  "keyword": "When "
});
formatter.step({
  "line": 48,
  "name": "User clicks on log out button to exit the page",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "User verify Book Itinerary page navigates to successfully logged out page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_clicks_on_book_itinerary_button()"
});
formatter.result({
  "duration": 1396300200,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_clicks_on_log_out_button_to_exit_the_page()"
});
formatter.result({
  "duration": 501675900,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_verify_Book_Itinerary_page_navigates_to_successfully_logged_out_page()"
});
formatter.result({
  "duration": 15100,
  "status": "passed"
});
});