$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("api/artifact/creating.feature");
formatter.feature({
  "line": 1,
  "name": "Artifact CREATE APIs",
  "description": "\nAs a RESTful client or user\nI should be able to create new artifacts in the system",
  "id": "artifact-create-apis",
  "keyword": "Feature"
});
formatter.before({
  "duration": 5006860366,
  "status": "passed"
});
formatter.before({
  "duration": 5286318,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "Creating a new artifact",
  "description": "\nThe creation of an artifact requires group, name, version and sourceUrl.",
  "id": "artifact-create-apis;creating-a-new-artifact",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 7,
      "name": "@freezetime"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I POST to \"/api/artifacts\" with:",
  "keyword": "When ",
  "doc_string": {
    "content_type": "",
    "line": 13,
    "value": "  {\n    \"group\" : \"com.example.cucumber\",\n    \"name\" : \"cukes\",\n    \"version\" : \"1.2.345\",\n    \"sourceUrl\" : \"http://example.com/cucumber.jar\"\n  }"
  }
});
formatter.step({
  "line": 21,
  "name": "the response should be 201",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "the body should be JSON:",
  "keyword": "And ",
  "doc_string": {
    "content_type": "",
    "line": 23,
    "value": "  {\n    \"id\" : 1,\n    \"group\" : \"com.example.cucumber\",\n    \"name\" : \"cukes\",\n    \"version\" : \"1.2.345\",\n    \"sourceUrl\" : \"http://example.com/cucumber.jar\",\n    \"createdAt\" : \"{{created_timestamp}}\"\n  }"
  }
});
formatter.match({
  "arguments": [
    {
      "val": "/api/artifacts",
      "offset": 11
    }
  ],
  "location": "HttpSteps.groovy:24"
});
formatter.result({
  "duration": 1041993247,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "201",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:69"
});
formatter.result({
  "duration": 7674043,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:77"
});
formatter.result({
  "duration": 93402304,
  "status": "passed"
});
formatter.after({
  "duration": 105308194,
  "status": "passed"
});
formatter.after({
  "duration": 679007,
  "status": "passed"
});
formatter.before({
  "duration": 990614730,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "The request should fail when creating an Artifact without a group name",
  "description": "",
  "id": "artifact-create-apis;the-request-should-fail-when-creating-an-artifact-without-a-group-name",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 34,
      "name": "@error"
    }
  ]
});
formatter.step({
  "line": 37,
  "name": "I POST to \"/api/artifacts\" with:",
  "keyword": "When ",
  "doc_string": {
    "content_type": "",
    "line": 38,
    "value": "  {\n    \"name\" : \"cukes\",\n    \"version\" : \"1.2.345\",\n    \"sourceUrl\" : \"http://example.com/cucumber.jar\"\n  }"
  }
});
formatter.step({
  "line": 45,
  "name": "the response should be 422",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "/api/artifacts",
      "offset": 11
    }
  ],
  "location": "HttpSteps.groovy:24"
});
formatter.result({
  "duration": 151267136,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "422",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:69"
});
formatter.result({
  "duration": 176598,
  "status": "passed"
});
formatter.after({
  "duration": 58729392,
  "status": "passed"
});
formatter.before({
  "duration": 668353031,
  "status": "passed"
});
formatter.scenario({
  "line": 48,
  "name": "The request should fail when creating an Artifact without a name",
  "description": "",
  "id": "artifact-create-apis;the-request-should-fail-when-creating-an-artifact-without-a-name",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 47,
      "name": "@error"
    }
  ]
});
formatter.step({
  "line": 50,
  "name": "I POST to \"/api/artifacts\" with:",
  "keyword": "When ",
  "doc_string": {
    "content_type": "",
    "line": 51,
    "value": "  {\n    \"group\" : \"com.example.cucumber\",\n    \"version\" : \"1.2.345\",\n    \"sourceUrl\" : \"http://example.com/cucumber.jar\"\n  }"
  }
});
formatter.step({
  "line": 58,
  "name": "the response should be 422",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "/api/artifacts",
      "offset": 11
    }
  ],
  "location": "HttpSteps.groovy:24"
});
formatter.result({
  "duration": 66577327,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "422",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:69"
});
formatter.result({
  "duration": 198059,
  "status": "passed"
});
formatter.after({
  "duration": 68762675,
  "status": "passed"
});
formatter.before({
  "duration": 498173014,
  "status": "passed"
});
formatter.scenario({
  "line": 61,
  "name": "The request should fail when creating an Artifact without a version",
  "description": "",
  "id": "artifact-create-apis;the-request-should-fail-when-creating-an-artifact-without-a-version",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 60,
      "name": "@error"
    }
  ]
});
formatter.step({
  "line": 63,
  "name": "I POST to \"/api/artifacts\" with:",
  "keyword": "When ",
  "doc_string": {
    "content_type": "",
    "line": 64,
    "value": "  {\n    \"group\" : \"com.example.cucumber\",\n    \"name\" : \"cukes\",\n    \"sourceUrl\" : \"http://example.com/cucumber.jar\"\n  }"
  }
});
formatter.step({
  "line": 71,
  "name": "the response should be 422",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "/api/artifacts",
      "offset": 11
    }
  ],
  "location": "HttpSteps.groovy:24"
});
formatter.result({
  "duration": 107677913,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "422",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:69"
});
formatter.result({
  "duration": 173846,
  "status": "passed"
});
formatter.after({
  "duration": 151833294,
  "status": "passed"
});
formatter.before({
  "duration": 498456199,
  "status": "passed"
});
formatter.scenario({
  "line": 74,
  "name": "The request should fail when creating an Artifact without a sourceUrl",
  "description": "",
  "id": "artifact-create-apis;the-request-should-fail-when-creating-an-artifact-without-a-sourceurl",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 73,
      "name": "@error"
    }
  ]
});
formatter.step({
  "line": 76,
  "name": "I POST to \"/api/artifacts\" with:",
  "keyword": "When ",
  "doc_string": {
    "content_type": "",
    "line": 77,
    "value": "  {\n    \"group\" : \"com.example.cucumber\",\n    \"name\" : \"cukes\",\n    \"version\" : \"1.2.345\"\n  }"
  }
});
formatter.step({
  "line": 84,
  "name": "the response should be 422",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "/api/artifacts",
      "offset": 11
    }
  ],
  "location": "HttpSteps.groovy:24"
});
formatter.result({
  "duration": 101583093,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "422",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:69"
});
formatter.result({
  "duration": 181502,
  "status": "passed"
});
formatter.after({
  "duration": 27531916,
  "status": "passed"
});
formatter.before({
  "duration": 583891129,
  "status": "passed"
});
formatter.scenario({
  "line": 87,
  "name": "Creating an artifact with too large of a group name",
  "description": "",
  "id": "artifact-create-apis;creating-an-artifact-with-too-large-of-a-group-name",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 86,
      "name": "@error"
    }
  ]
});
formatter.step({
  "line": 89,
  "name": "I have an artifact request",
  "keyword": "Given "
});
formatter.step({
  "line": 90,
  "name": "the group is over 8192 characters",
  "keyword": "And "
});
formatter.step({
  "line": 91,
  "name": "I POST to \"/api/artifacts\"",
  "keyword": "When "
});
formatter.step({
  "line": 92,
  "name": "the response should be 422",
  "keyword": "Then "
});
formatter.match({
  "location": "ArtifactSteps.groovy:23"
});
formatter.result({
  "duration": 55913,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "group",
      "offset": 4
    },
    {
      "val": "8192",
      "offset": 18
    }
  ],
  "location": "ArtifactSteps.groovy:26"
});
formatter.result({
  "duration": 8637673,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/api/artifacts",
      "offset": 11
    }
  ],
  "location": "HttpSteps.groovy:52"
});
formatter.result({
  "duration": 102319127,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "422",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:69"
});
formatter.result({
  "duration": 152772,
  "status": "passed"
});
formatter.after({
  "duration": 78653150,
  "status": "passed"
});
formatter.before({
  "duration": 653882940,
  "status": "passed"
});
formatter.scenario({
  "line": 95,
  "name": "Creating an artifact with too large of a name",
  "description": "",
  "id": "artifact-create-apis;creating-an-artifact-with-too-large-of-a-name",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 94,
      "name": "@error"
    }
  ]
});
formatter.step({
  "line": 97,
  "name": "I have an artifact request",
  "keyword": "Given "
});
formatter.step({
  "line": 98,
  "name": "the name is over 8192 characters",
  "keyword": "And "
});
formatter.step({
  "line": 99,
  "name": "I POST to \"/api/artifacts\"",
  "keyword": "When "
});
formatter.step({
  "line": 100,
  "name": "the response should be 422",
  "keyword": "Then "
});
formatter.match({
  "location": "ArtifactSteps.groovy:23"
});
formatter.result({
  "duration": 35457,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "name",
      "offset": 4
    },
    {
      "val": "8192",
      "offset": 17
    }
  ],
  "location": "ArtifactSteps.groovy:26"
});
formatter.result({
  "duration": 857351,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/api/artifacts",
      "offset": 11
    }
  ],
  "location": "HttpSteps.groovy:52"
});
formatter.result({
  "duration": 40389325,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "422",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:69"
});
formatter.result({
  "duration": 183067,
  "status": "passed"
});
formatter.after({
  "duration": 65321777,
  "status": "passed"
});
formatter.before({
  "duration": 567235920,
  "status": "passed"
});
formatter.scenario({
  "line": 103,
  "name": "Creating an artifact with too large of a version",
  "description": "",
  "id": "artifact-create-apis;creating-an-artifact-with-too-large-of-a-version",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 102,
      "name": "@error"
    }
  ]
});
formatter.step({
  "line": 105,
  "name": "I have an artifact request",
  "keyword": "Given "
});
formatter.step({
  "line": 106,
  "name": "the version is over 255 characters",
  "keyword": "And "
});
formatter.step({
  "line": 107,
  "name": "I POST to \"/api/artifacts\"",
  "keyword": "When "
});
formatter.step({
  "line": 108,
  "name": "the response should be 422",
  "keyword": "Then "
});
formatter.match({
  "location": "ArtifactSteps.groovy:23"
});
formatter.result({
  "duration": 33751,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "version",
      "offset": 4
    },
    {
      "val": "255",
      "offset": 20
    }
  ],
  "location": "ArtifactSteps.groovy:26"
});
formatter.result({
  "duration": 372377,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/api/artifacts",
      "offset": 11
    }
  ],
  "location": "HttpSteps.groovy:52"
});
formatter.result({
  "duration": 41415338,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "422",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:69"
});
formatter.result({
  "duration": 159444,
  "status": "passed"
});
formatter.after({
  "duration": 72796457,
  "status": "passed"
});
formatter.before({
  "duration": 860048982,
  "status": "passed"
});
formatter.scenario({
  "line": 111,
  "name": "Creating an artifact with too large of a sourceUrl",
  "description": "",
  "id": "artifact-create-apis;creating-an-artifact-with-too-large-of-a-sourceurl",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 110,
      "name": "@error"
    }
  ]
});
formatter.step({
  "line": 113,
  "name": "I have an artifact request",
  "keyword": "Given "
});
formatter.step({
  "line": 114,
  "name": "the sourceUrl is over 8192 characters",
  "keyword": "And "
});
formatter.step({
  "line": 115,
  "name": "I POST to \"/api/artifacts\"",
  "keyword": "When "
});
formatter.step({
  "line": 116,
  "name": "the response should be 422",
  "keyword": "Then "
});
formatter.match({
  "location": "ArtifactSteps.groovy:23"
});
formatter.result({
  "duration": 37613,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sourceUrl",
      "offset": 4
    },
    {
      "val": "8192",
      "offset": 22
    }
  ],
  "location": "ArtifactSteps.groovy:26"
});
formatter.result({
  "duration": 961486,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/api/artifacts",
      "offset": 11
    }
  ],
  "location": "HttpSteps.groovy:52"
});
formatter.result({
  "duration": 113986226,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "422",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:69"
});
formatter.result({
  "duration": 199525,
  "status": "passed"
});
formatter.after({
  "duration": 91395129,
  "status": "passed"
});
formatter.uri("api/artifact/deleting.feature");
formatter.feature({
  "line": 1,
  "name": "Artifact DELETE APIs",
  "description": "\nAs a RESTful client or user\nI should be *not* be able to delete artifacts",
  "id": "artifact-delete-apis",
  "keyword": "Feature"
});
formatter.before({
  "duration": 911625249,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "Attempting to delete an artifact",
  "description": "\nOnce artifacts are in DeployDB they\u0027re there forever. FOREVER.",
  "id": "artifact-delete-apis;attempting-to-delete-an-artifact",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "there is an artifact",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I DELETE \"/api/artifacts/1\"",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "the response should be 405",
  "keyword": "Then "
});
formatter.match({
  "location": "ArtifactSteps.groovy:6"
});
formatter.result({
  "duration": 123455643,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/api/artifacts/1",
      "offset": 10
    }
  ],
  "location": "HttpSteps.groovy:20"
});
formatter.result({
  "duration": 67137279,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "405",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:69"
});
formatter.result({
  "duration": 237342,
  "status": "passed"
});
formatter.after({
  "duration": 113197305,
  "status": "passed"
});
formatter.uri("api/artifact/reading.feature");
formatter.feature({
  "line": 1,
  "name": "Artifact READ APIs",
  "description": "\nAs a RESTful client or user\nI should be able to read information about artifacts",
  "id": "artifact-read-apis",
  "keyword": "Feature"
});
formatter.before({
  "duration": 1013153105,
  "status": "passed"
});
formatter.before({
  "duration": 87918,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "Fetching an artifact by ID that exists",
  "description": "",
  "id": "artifact-read-apis;fetching-an-artifact-by-id-that-exists",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 7,
      "name": "@freezetime"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "there is an artifact",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I GET \"/api/artifacts/1\"",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "the response should be 200",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "the body should be JSON:",
  "keyword": "And ",
  "doc_string": {
    "content_type": "",
    "line": 14,
    "value": "  {\n    \"id\" : 1,\n    \"group\" : \"com.example.cucumber\",\n    \"name\" : \"cucumber-artifact\",\n    \"version\" : \"1.0.1\",\n    \"sourceUrl\" : \"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.1/cucumber-artifact-1.0.1.jar\",\n    \"createdAt\" : \"{{created_timestamp}}\"\n  }"
  }
});
formatter.match({
  "location": "ArtifactSteps.groovy:6"
});
formatter.result({
  "duration": 3561106,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/api/artifacts/1",
      "offset": 7
    }
  ],
  "location": "HttpSteps.groovy:16"
});
formatter.result({
  "duration": 140547220,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:69"
});
formatter.result({
  "duration": 166185,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:77"
});
formatter.result({
  "duration": 23284182,
  "status": "passed"
});
formatter.after({
  "duration": 105585029,
  "status": "passed"
});
formatter.after({
  "duration": 49756,
  "status": "passed"
});
formatter.before({
  "duration": 458346121,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
  "name": "Fetching an artifact with an invalid content type",
  "description": "\nIt is encouraged to specify the version of the API you would like to\nreceive inside of a Accept header. If this header is not specified than the\nclient is expected to receive the v1 version of the JSON API",
  "id": "artifact-read-apis;fetching-an-artifact-with-an-invalid-content-type",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 38,
      "name": "@error"
    }
  ]
});
formatter.step({
  "line": 45,
  "name": "there is an artifact",
  "keyword": "Given "
});
formatter.step({
  "line": 46,
  "name": "I GET \"/api/artifacts/1\" with custom headers:",
  "rows": [
    {
      "cells": [
        "Header Name",
        "Value"
      ],
      "line": 47
    },
    {
      "cells": [
        "Accept",
        "application/xml"
      ],
      "line": 48
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 49,
  "name": "the response should be 406",
  "keyword": "Then "
});
formatter.match({
  "location": "ArtifactSteps.groovy:6"
});
formatter.result({
  "duration": 7478592,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/api/artifacts/1",
      "offset": 7
    }
  ],
  "location": "HttpSteps.groovy:56"
});
formatter.result({
  "duration": 91478062,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "406",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:69"
});
formatter.result({
  "duration": 145984,
  "status": "passed"
});
formatter.after({
  "duration": 54317233,
  "status": "passed"
});
formatter.before({
  "duration": 398777589,
  "status": "passed"
});
formatter.scenario({
  "line": 51,
  "name": "Fetching an artifact by ID that doesn\u0027t exist",
  "description": "",
  "id": "artifact-read-apis;fetching-an-artifact-by-id-that-doesn\u0027t-exist",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 53,
  "name": "I GET \"/api/artifacts/1\"",
  "keyword": "When "
});
formatter.step({
  "line": 54,
  "name": "the response should be 404",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "/api/artifacts/1",
      "offset": 7
    }
  ],
  "location": "HttpSteps.groovy:16"
});
formatter.result({
  "duration": 102650308,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "404",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:69"
});
formatter.result({
  "duration": 185472,
  "status": "passed"
});
formatter.after({
  "duration": 72321528,
  "status": "passed"
});
formatter.before({
  "duration": 514105135,
  "status": "passed"
});
formatter.scenario({
  "line": 57,
  "name": "Fetching an artifact by a non-numeric ID",
  "description": "",
  "id": "artifact-read-apis;fetching-an-artifact-by-a-non-numeric-id",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 56,
      "name": "@error"
    }
  ]
});
formatter.step({
  "line": 59,
  "name": "I GET \"/api/artifacts/0xdeadbeef\"",
  "keyword": "When "
});
formatter.step({
  "line": 60,
  "name": "the response should be 400",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "/api/artifacts/0xdeadbeef",
      "offset": 7
    }
  ],
  "location": "HttpSteps.groovy:16"
});
formatter.result({
  "duration": 57730587,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:69"
});
formatter.result({
  "duration": 154029,
  "status": "passed"
});
formatter.after({
  "duration": 61157736,
  "status": "passed"
});
formatter.before({
  "duration": 694131189,
  "status": "passed"
});
formatter.before({
  "duration": 65157,
  "status": "passed"
});
formatter.scenario({
  "line": 64,
  "name": "Fetching an artifact by the (group, name) tuple",
  "description": "",
  "id": "artifact-read-apis;fetching-an-artifact-by-the-(group,-name)-tuple",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 63,
      "name": "@freezetime"
    }
  ]
});
formatter.step({
  "line": 66,
  "name": "there is an artifact",
  "keyword": "Given "
});
formatter.step({
  "line": 67,
  "name": "I GET \"/api/artifacts/by-module/com.example.cucumber:cucumber-artifact\"",
  "keyword": "When "
});
formatter.step({
  "line": 68,
  "name": "the response should be 200",
  "keyword": "Then "
});
formatter.step({
  "line": 69,
  "name": "the body should be JSON:",
  "keyword": "And ",
  "doc_string": {
    "content_type": "",
    "line": 70,
    "value": "  [{\n    \"id\" : 1,\n    \"createdAt\" : \"{{created_timestamp}}\",\n    \"group\" : \"com.example.cucumber\",\n    \"name\" : \"cucumber-artifact\",\n    \"version\" : \"1.0.1\",\n    \"sourceUrl\" : \"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.1/cucumber-artifact-1.0.1.jar\"\n  }]"
  }
});
formatter.match({
  "location": "ArtifactSteps.groovy:6"
});
formatter.result({
  "duration": 4143656,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/api/artifacts/by-module/com.example.cucumber:cucumber-artifact",
      "offset": 7
    }
  ],
  "location": "HttpSteps.groovy:16"
});
formatter.result({
  "duration": 139790881,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:69"
});
formatter.result({
  "duration": 146343,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:77"
});
formatter.result({
  "duration": 9730013,
  "status": "passed"
});
formatter.after({
  "duration": 130252456,
  "status": "passed"
});
formatter.after({
  "duration": 34555,
  "status": "passed"
});
formatter.before({
  "duration": 1867703998,
  "status": "passed"
});
formatter.before({
  "duration": 82121,
  "status": "passed"
});
formatter.scenario({
  "line": 81,
  "name": "Fetching an artifact by the (group, name) tuple, pageNumber and perPageSize",
  "description": "",
  "id": "artifact-read-apis;fetching-an-artifact-by-the-(group,-name)-tuple,-pagenumber-and-perpagesize",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 80,
      "name": "@freezetime"
    }
  ]
});
formatter.step({
  "line": 83,
  "name": "there are artifacts",
  "keyword": "Given "
});
formatter.step({
  "line": 84,
  "name": "I GET \"/api/artifacts/by-module/com.example.cucumber:cucumber-artifact?pageNumber\u003d0\u0026perPageSize\u003d5\"",
  "keyword": "When "
});
formatter.step({
  "line": 85,
  "name": "the response should be 200",
  "keyword": "Then "
});
formatter.step({
  "line": 86,
  "name": "the body should be JSON:",
  "keyword": "And ",
  "doc_string": {
    "content_type": "",
    "line": 87,
    "value": "  [{\n    \"id\" : 2,\n    \"createdAt\" : \"{{created_timestamp}}\",\n    \"group\" : \"com.example.cucumber\",\n    \"name\" : \"cucumber-artifact\",\n    \"version\" : \"1.0.2\",\n    \"sourceUrl\" : \"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.2/cucumber-artifact-1.0.2.jar\"\n  },\n  {\n    \"id\" : 1,\n    \"createdAt\" : \"{{created_timestamp}}\",\n    \"group\" : \"com.example.cucumber\",\n    \"name\" : \"cucumber-artifact\",\n    \"version\" : \"1.0.1\",\n    \"sourceUrl\" : \"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.1/cucumber-artifact-1.0.1.jar\"\n  }]"
  }
});
formatter.match({
  "location": "ArtifactSteps.groovy:13"
});
formatter.result({
  "duration": 7168427,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/api/artifacts/by-module/com.example.cucumber:cucumber-artifact?pageNumber\u003d0\u0026perPageSize\u003d5",
      "offset": 7
    }
  ],
  "location": "HttpSteps.groovy:16"
});
formatter.result({
  "duration": 114083715,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:69"
});
formatter.result({
  "duration": 8155003,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:77"
});
formatter.result({
  "duration": 2036684,
  "status": "passed"
});
formatter.after({
  "duration": 48116383,
  "status": "passed"
});
formatter.after({
  "duration": 46945,
  "status": "passed"
});
formatter.before({
  "duration": 621639798,
  "status": "passed"
});
formatter.scenario({
  "line": 106,
  "name": "Fetching an artifact by the (group, name) tuple that doesn\u0027t exist",
  "description": "",
  "id": "artifact-read-apis;fetching-an-artifact-by-the-(group,-name)-tuple-that-doesn\u0027t-exist",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 105,
      "name": "@error"
    }
  ]
});
formatter.step({
  "line": 108,
  "name": "I GET \"/api/artifacts/by-module/com.example.cucumber:cucumber-artifact\"",
  "keyword": "When "
});
formatter.step({
  "line": 109,
  "name": "the response should be 404",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "/api/artifacts/by-module/com.example.cucumber:cucumber-artifact",
      "offset": 7
    }
  ],
  "location": "HttpSteps.groovy:16"
});
formatter.result({
  "duration": 99261190,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "404",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:69"
});
formatter.result({
  "duration": 256318,
  "status": "passed"
});
formatter.after({
  "duration": 62910372,
  "status": "passed"
});
formatter.before({
  "duration": 863820915,
  "status": "passed"
});
formatter.scenario({
  "line": 112,
  "name": "Fetching an artifact by the (group, name) tuple with invalid page number",
  "description": "",
  "id": "artifact-read-apis;fetching-an-artifact-by-the-(group,-name)-tuple-with-invalid-page-number",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 111,
      "name": "@error"
    }
  ]
});
formatter.step({
  "line": 114,
  "name": "I GET \"/api/artifacts/by-module/com.example.cucumber:cucumber-artifact?pageNumber\u003d1\u0026perPageSize\u003d5\"",
  "keyword": "When "
});
formatter.step({
  "line": 115,
  "name": "the response should be 404",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "/api/artifacts/by-module/com.example.cucumber:cucumber-artifact?pageNumber\u003d1\u0026perPageSize\u003d5",
      "offset": 7
    }
  ],
  "location": "HttpSteps.groovy:16"
});
formatter.result({
  "duration": 62655120,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "404",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:69"
});
formatter.result({
  "duration": 184004,
  "status": "passed"
});
formatter.after({
  "duration": 71827517,
  "status": "passed"
});
formatter.before({
  "duration": 594605839,
  "status": "passed"
});
formatter.scenario({
  "line": 118,
  "name": "Fetching an artifact by the (group, name) tuple with invalid data type for pageSize",
  "description": "",
  "id": "artifact-read-apis;fetching-an-artifact-by-the-(group,-name)-tuple-with-invalid-data-type-for-pagesize",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 117,
      "name": "@error"
    }
  ]
});
formatter.step({
  "line": 120,
  "name": "I GET \"/api/artifacts/by-module/com.example.cucumber:cucumber-artifact?pageNumber\u003d-1\u0026perPageSize\u003d0xdeadbeef\"",
  "keyword": "When "
});
formatter.step({
  "line": 121,
  "name": "the response should be 400",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "/api/artifacts/by-module/com.example.cucumber:cucumber-artifact?pageNumber\u003d-1\u0026perPageSize\u003d0xdeadbeef",
      "offset": 7
    }
  ],
  "location": "HttpSteps.groovy:16"
});
formatter.result({
  "duration": 68081891,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:69"
});
formatter.result({
  "duration": 155854,
  "status": "passed"
});
formatter.after({
  "duration": 55209119,
  "status": "passed"
});
formatter.before({
  "duration": 661267320,
  "status": "passed"
});
formatter.before({
  "duration": 71096,
  "status": "passed"
});
formatter.scenario({
  "line": 124,
  "name": "Fetching the latest artifact by the (group, name) tuple",
  "description": "",
  "id": "artifact-read-apis;fetching-the-latest-artifact-by-the-(group,-name)-tuple",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 123,
      "name": "@freezetime"
    }
  ]
});
formatter.step({
  "line": 126,
  "name": "there is an artifact",
  "keyword": "Given "
});
formatter.step({
  "line": 127,
  "name": "I GET \"/api/artifacts/by-module/com.example.cucumber:cucumber-artifact/latest\"",
  "keyword": "When "
});
formatter.step({
  "line": 128,
  "name": "the response should be 200",
  "keyword": "Then "
});
formatter.step({
  "line": 129,
  "name": "the body should be JSON:",
  "keyword": "And ",
  "doc_string": {
    "content_type": "",
    "line": 130,
    "value": " {\n    \"id\" : 1,\n    \"createdAt\" : \"{{created_timestamp}}\",\n    \"group\" : \"com.example.cucumber\",\n    \"name\" : \"cucumber-artifact\",\n    \"version\" : \"1.0.1\",\n    \"sourceUrl\" : \"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.1/cucumber-artifact-1.0.1.jar\"\n  } "
  }
});
formatter.match({
  "location": "ArtifactSteps.groovy:6"
});
formatter.result({
  "duration": 3538440,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/api/artifacts/by-module/com.example.cucumber:cucumber-artifact/latest",
      "offset": 7
    }
  ],
  "location": "HttpSteps.groovy:16"
});
formatter.result({
  "duration": 36458643,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:69"
});
formatter.result({
  "duration": 172846,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:77"
});
formatter.result({
  "duration": 1617646,
  "status": "passed"
});
formatter.after({
  "duration": 110679551,
  "status": "passed"
});
formatter.after({
  "duration": 33758,
  "status": "passed"
});
formatter.before({
  "duration": 521965726,
  "status": "passed"
});
formatter.before({
  "duration": 71285,
  "status": "passed"
});
formatter.scenario({
  "line": 142,
  "name": "Fetching the latest artifact by the (group, name) tuple when multiple artifacts are present",
  "description": "",
  "id": "artifact-read-apis;fetching-the-latest-artifact-by-the-(group,-name)-tuple-when-multiple-artifacts-are-present",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 141,
      "name": "@freezetime"
    }
  ]
});
formatter.step({
  "line": 144,
  "name": "there are artifacts",
  "keyword": "Given "
});
formatter.step({
  "line": 145,
  "name": "I GET \"/api/artifacts/by-module/com.example.cucumber:cucumber-artifact/latest\"",
  "keyword": "When "
});
formatter.step({
  "line": 146,
  "name": "the response should be 200",
  "keyword": "Then "
});
formatter.step({
  "line": 147,
  "name": "the body should be JSON:",
  "keyword": "And ",
  "doc_string": {
    "content_type": "",
    "line": 148,
    "value": " {\n    \"id\" : 2,\n    \"createdAt\" : \"{{created_timestamp}}\",\n    \"group\" : \"com.example.cucumber\",\n    \"name\" : \"cucumber-artifact\",\n    \"version\" : \"1.0.2\",\n    \"sourceUrl\" : \"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.2/cucumber-artifact-1.0.2.jar\"\n  }"
  }
});
formatter.match({
  "location": "ArtifactSteps.groovy:13"
});
formatter.result({
  "duration": 10611748,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/api/artifacts/by-module/com.example.cucumber:cucumber-artifact/latest",
      "offset": 7
    }
  ],
  "location": "HttpSteps.groovy:16"
});
formatter.result({
  "duration": 57314055,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:69"
});
formatter.result({
  "duration": 149183,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:77"
});
formatter.result({
  "duration": 1400227,
  "status": "passed"
});
formatter.after({
  "duration": 116567997,
  "status": "passed"
});
formatter.after({
  "duration": 31848,
  "status": "passed"
});
formatter.uri("api/artifact/updating.feature");
formatter.feature({
  "line": 1,
  "name": "Artifact UPDATE APIs",
  "description": "\nAs a RESTful client or user\nI should be *not* be able to update artifacts",
  "id": "artifact-update-apis",
  "keyword": "Feature"
});
formatter.before({
  "duration": 472400358,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "Attempting to update an artifact",
  "description": "\nArtifacts must be considered immutable to ensure consistency of data from\nDeployDB. We can\u0027t different binaries with the same version, that\u0027s silly.",
  "id": "artifact-update-apis;attempting-to-update-an-artifact",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 12,
  "name": "there is an artifact",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I PATCH \"/api/artifacts/1\" with:",
  "keyword": "When ",
  "doc_string": {
    "content_type": "",
    "line": 14,
    "value": "  {\n    \"version\" : \"9.0.0.0\"\n  }"
  }
});
formatter.step({
  "line": 19,
  "name": "the response should be 405",
  "keyword": "Then "
});
formatter.match({
  "location": "ArtifactSteps.groovy:6"
});
formatter.result({
  "duration": 5542445,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/api/artifacts/1",
      "offset": 9
    }
  ],
  "location": "HttpSteps.groovy:48"
});
formatter.result({
  "duration": 39699617,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "405",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:69"
});
formatter.result({
  "duration": 162970,
  "status": "passed"
});
formatter.after({
  "duration": 73823411,
  "status": "passed"
});
formatter.uri("api/deployment/creating.feature");
formatter.feature({
  "line": 1,
  "name": "Deployment CREATE APIs",
  "description": "",
  "id": "deployment-create-apis",
  "keyword": "Feature"
});
formatter.before({
  "duration": 477853399,
  "status": "passed"
});
formatter.before({
  "duration": 72606,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Creating a new deployment",
  "description": "\nCreating a deployment is done automatically at the beginning of a flow for\nan Artifact. There\u0027s no need for an API client to create a deployment on\ntheir own.",
  "id": "deployment-create-apis;creating-a-new-deployment",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@freezetime"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "there is an artifact",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I POST to \"/api/deployments\" with:",
  "keyword": "When ",
  "doc_string": {
    "content_type": "",
    "line": 13,
    "value": "  {\n    \"artifactId\" : 1,\n    \"environment\" : \"pre-production\"\n  }"
  }
});
formatter.step({
  "line": 19,
  "name": "the response should be 405",
  "keyword": "Then "
});
formatter.match({
  "location": "ArtifactSteps.groovy:6"
});
formatter.result({
  "duration": 7365896,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/api/deployments",
      "offset": 11
    }
  ],
  "location": "HttpSteps.groovy:24"
});
formatter.result({
  "duration": 58349871,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "405",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:69"
});
formatter.result({
  "duration": 165145,
  "status": "passed"
});
formatter.after({
  "duration": 65801448,
  "status": "passed"
});
formatter.after({
  "duration": 29413,
  "status": "passed"
});
formatter.uri("api/deployment/reading.feature");
formatter.feature({
  "line": 1,
  "name": "Deployment READ APIs",
  "description": "\nAs a RESTful client or user\nI should be able to read information about deployments",
  "id": "deployment-read-apis",
  "keyword": "Feature"
});
formatter.before({
  "duration": 647222333,
  "status": "passed"
});
formatter.before({
  "duration": 69464,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "Fetching a deployment by ID",
  "description": "",
  "id": "deployment-read-apis;fetching-a-deployment-by-id",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 7,
      "name": "@freezetime"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "there is a deployment",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I GET \"/api/deployments/1\"",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "the response should be 200",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "the body should be JSON:",
  "keyword": "And ",
  "doc_string": {
    "content_type": "",
    "line": 14,
    "value": "  {\n    \"id\" : 1,\n    \"artifact\" : {\n      \"id\" : 1,\n      \"group\" : \"com.example.cucumber\",\n      \"name\" : \"cucumber-artifact\",\n      \"version\" : \"1.0.1\",\n      \"sourceUrl\" : \"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.1/cucumber-artifact-1.0.1.jar\",\n      \"createdAt\" : \"{{created_timestamp}}\"\n    },\n    \"environment\" : \"pre-production\",\n    \"status\" : \"STARTED\",\n    \"createdAt\" : \"{{created_timestamp}}\"\n  }"
  }
});
formatter.match({
  "location": "DeploymentSteps.groovy:9"
});
formatter.result({
  "duration": 13723393,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/api/deployments/1",
      "offset": 7
    }
  ],
  "location": "HttpSteps.groovy:16"
});
formatter.result({
  "duration": 90238418,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:69"
});
formatter.result({
  "duration": 150465,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:77"
});
formatter.result({
  "duration": 1585894,
  "status": "passed"
});
formatter.after({
  "duration": 74338155,
  "status": "passed"
});
formatter.after({
  "duration": 30730,
  "status": "passed"
});
formatter.before({
  "duration": 374302503,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "Fetching a deployment by ID that doesn\u0027t exist",
  "description": "",
  "id": "deployment-read-apis;fetching-a-deployment-by-id-that-doesn\u0027t-exist",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 33,
  "name": "I GET \"/api/deployments/1\"",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "the response should be 404",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "/api/deployments/1",
      "offset": 7
    }
  ],
  "location": "HttpSteps.groovy:16"
});
formatter.result({
  "duration": 26159471,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "404",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:69"
});
formatter.result({
  "duration": 155077,
  "status": "passed"
});
formatter.after({
  "duration": 55554549,
  "status": "passed"
});
formatter.uri("api/deployment/updating.feature");
formatter.feature({
  "line": 1,
  "name": "Deployment UPDATE APIs",
  "description": "\nAs a RESTful client or user\nI should be able to update existing deployments in the system",
  "id": "deployment-update-apis",
  "keyword": "Feature"
});
formatter.before({
  "duration": 312624304,
  "status": "passed"
});
formatter.before({
  "duration": 66545,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "Updating a deployment that doesn\u0027t exist",
  "description": "",
  "id": "deployment-update-apis;updating-a-deployment-that-doesn\u0027t-exist",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 37,
      "name": "@freezetime"
    },
    {
      "line": 37,
      "name": "@error"
    }
  ]
});
formatter.step({
  "line": 40,
  "name": "I PATCH \"/api/deployments/1\" with:",
  "keyword": "When ",
  "doc_string": {
    "content_type": "",
    "line": 41,
    "value": "  {\n    \"status\" : \"FAILED\"\n  }"
  }
});
formatter.step({
  "line": 46,
  "name": "the response should be 404",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "/api/deployments/1",
      "offset": 9
    }
  ],
  "location": "HttpSteps.groovy:48"
});
formatter.result({
  "duration": 27636240,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "404",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:69"
});
formatter.result({
  "duration": 155087,
  "status": "passed"
});
formatter.after({
  "duration": 58722308,
  "status": "passed"
});
formatter.after({
  "duration": 28271,
  "status": "passed"
});
formatter.uri("api/environment/reading.feature");
formatter.feature({
  "line": 1,
  "name": "Environment READ APIs",
  "description": "\nAs a RESTful client or user\nI should be able to read information about environments",
  "id": "environment-read-apis",
  "keyword": "Feature"
});
formatter.before({
  "duration": 390369622,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "Fetching all environments",
  "description": "",
  "id": "environment-read-apis;fetching-all-environments",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 9,
  "name": "an environment configuration named \"integ\":",
  "keyword": "Given ",
  "doc_string": {
    "content_type": "",
    "line": 10,
    "value": "description: \"DeployDB Primary Integration\"\nwebhooks:\n  deployment:\n    created:\n      - http://jenkins.example.com/job/integ-deploy-created/build\n    completed:\n      - http://jenkins.example.com/job/integ-deploy-completed/build"
  }
});
formatter.step({
  "line": 19,
  "name": "I GET \"/api/environments\"",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "the response should be 200",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "the body should be JSON:",
  "keyword": "And ",
  "doc_string": {
    "content_type": "",
    "line": 22,
    "value": "  [{\n    \"ident\" : \"integ\",\n    \"description\" : \"DeployDB Primary Integration\",\n    \"webhooks\" : {\n      \"deployment\" : {\n          \"started\" : null,\n          \"created\" : [\"http://jenkins.example.com/job/integ-deploy-created/build\"],\n          \"completed\" : [\"http://jenkins.example.com/job/integ-deploy-completed/build\"],\n          \"verified\" : null\n      },\n      \"promotion\" : null\n    }\n  }]"
  }
});
formatter.match({
  "arguments": [
    {
      "val": "integ",
      "offset": 36
    }
  ],
  "location": "EnvironmentSteps.groovy:7"
});
formatter.result({
  "duration": 60757000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/api/environments",
      "offset": 7
    }
  ],
  "location": "HttpSteps.groovy:16"
});
formatter.result({
  "duration": 52379046,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:69"
});
formatter.result({
  "duration": 154677,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:77"
});
formatter.result({
  "duration": 1549709,
  "status": "passed"
});
formatter.after({
  "duration": 18549612,
  "status": "passed"
});
formatter.before({
  "duration": 349445068,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
  "name": "Fetching an environment by name that exists",
  "description": "",
  "id": "environment-read-apis;fetching-an-environment-by-name-that-exists",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 41,
  "name": "an environment configuration named \"integ\":",
  "keyword": "Given ",
  "doc_string": {
    "content_type": "",
    "line": 42,
    "value": "description: \"DeployDB Primary Integration\"\nwebhooks:\n  deployment:\n    created:\n      - http://jenkins.example.com/job/integ-deploy-created/build\n    completed:\n      - http://jenkins.example.com/job/integ-deploy-completed/build"
  }
});
formatter.step({
  "line": 51,
  "name": "I GET \"/api/environments/integ\"",
  "keyword": "When "
});
formatter.step({
  "line": 52,
  "name": "the response should be 200",
  "keyword": "Then "
});
formatter.step({
  "line": 53,
  "name": "the body should be JSON:",
  "keyword": "And ",
  "doc_string": {
    "content_type": "",
    "line": 54,
    "value": "  {\n    \"ident\" : \"integ\",\n    \"description\" : \"DeployDB Primary Integration\",\n    \"webhooks\" : {\n      \"deployment\" : {\n          \"started\" : null,\n          \"created\" : [\"http://jenkins.example.com/job/integ-deploy-created/build\"],\n          \"completed\" : [\"http://jenkins.example.com/job/integ-deploy-completed/build\"],\n          \"verified\" : null\n      },\n      \"promotion\" : null\n    }\n  }"
  }
});
formatter.match({
  "arguments": [
    {
      "val": "integ",
      "offset": 36
    }
  ],
  "location": "EnvironmentSteps.groovy:7"
});
formatter.result({
  "duration": 6456068,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/api/environments/integ",
      "offset": 7
    }
  ],
  "location": "HttpSteps.groovy:16"
});
formatter.result({
  "duration": 27027353,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:69"
});
formatter.result({
  "duration": 167677,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:77"
});
formatter.result({
  "duration": 1510885,
  "status": "passed"
});
formatter.after({
  "duration": 34647947,
  "status": "passed"
});
formatter.before({
  "duration": 523980415,
  "status": "passed"
});
formatter.scenario({
  "line": 71,
  "name": "Fetching an environment by name that doesn\u0027t exist",
  "description": "",
  "id": "environment-read-apis;fetching-an-environment-by-name-that-doesn\u0027t-exist",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 73,
  "name": "I GET \"/api/environments/faas\"",
  "keyword": "When "
});
formatter.step({
  "line": 74,
  "name": "the response should be 404",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "/api/environments/faas",
      "offset": 7
    }
  ],
  "location": "HttpSteps.groovy:16"
});
formatter.result({
  "duration": 143453247,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "404",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:69"
});
formatter.result({
  "duration": 129954,
  "status": "passed"
});
formatter.after({
  "duration": 72429487,
  "status": "passed"
});
formatter.uri("api/health.feature");
formatter.feature({
  "line": 1,
  "name": "The health endpoint",
  "description": "\nAs a DeployDB administrator\nI should be able to view the health of the application",
  "id": "the-health-endpoint",
  "keyword": "Feature"
});
formatter.before({
  "duration": 518992667,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "Fetching health under normal circumstances",
  "description": "\nAssuming the application is up and running properly, the built-in\nhealthcheck endpoint should return information about all the configured\nhealthchecks currently running inside of DeployDB",
  "id": "the-health-endpoint;fetching-health-under-normal-circumstances",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 12,
  "name": "I GET \"/healthcheck\" from the admin app",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "the response should be 200",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "the body should be JSON:",
  "keyword": "And ",
  "doc_string": {
    "content_type": "",
    "line": 15,
    "value": "{\n  \"deadlocks\" : {\n    \"healthy\" : true\n  },\n  \"sanity\" : {\n    \"healthy\" : true\n  },\n  \"hibernate\" : {\n    \"healthy\" : true\n  },\n  \"webhook\" : {\n    \"healthy\" : true\n  }\n}"
  }
});
formatter.match({
  "arguments": [
    {
      "val": "/healthcheck",
      "offset": 7
    }
  ],
  "location": "HttpSteps.groovy:12"
});
formatter.result({
  "duration": 87353357,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:69"
});
formatter.result({
  "duration": 168990,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:77"
});
formatter.result({
  "duration": 1186787,
  "status": "passed"
});
formatter.after({
  "duration": 37402571,
  "status": "passed"
});
formatter.uri("api/pipeline/reading.feature");
formatter.feature({
  "line": 1,
  "name": "Pipeline READ APIs",
  "description": "\nAs a RESTful client or user\nI should be able to read information about pipelines",
  "id": "pipeline-read-apis",
  "keyword": "Feature"
});
formatter.uri("api/promotion/reading.feature");
formatter.feature({
  "line": 1,
  "name": "Promotion READ APIs",
  "description": "\nAs a RESTful client or user\nI should be able to read information about promotions",
  "id": "promotion-read-apis",
  "keyword": "Feature"
});
formatter.before({
  "duration": 294121495,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "Fetching all promotions",
  "description": "",
  "id": "promotion-read-apis;fetching-all-promotions",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 9,
  "name": "a promotion configuration name \"basic\":",
  "keyword": "Given ",
  "doc_string": {
    "content_type": "",
    "line": 10,
    "value": "type:  BasicPromotion\ndescription: \"Smoke test the Fun as a Service service\""
  }
});
formatter.step({
  "line": 14,
  "name": "I GET \"/api/promotions\"",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "the response should be 200",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "the body should be JSON:",
  "keyword": "And ",
  "doc_string": {
    "content_type": "",
    "line": 17,
    "value": "  [{\n    \"ident\" : \"basic\",\n    \"type\" : \"BasicPromotion\",\n    \"description\" : \"Smoke test the Fun as a Service service\"\n  }]"
  }
});
formatter.match({
  "arguments": [
    {
      "val": "basic",
      "offset": 32
    }
  ],
  "location": "PromotionSteps.groovy:8"
});
formatter.result({
  "duration": 9841319,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/api/promotions",
      "offset": 7
    }
  ],
  "location": "HttpSteps.groovy:16"
});
formatter.result({
  "duration": 23352220,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:69"
});
formatter.result({
  "duration": 143544,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:77"
});
formatter.result({
  "duration": 1489843,
  "status": "passed"
});
formatter.after({
  "duration": 17228831,
  "status": "passed"
});
formatter.before({
  "duration": 302760935,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Fetching an promotion by name that exists",
  "description": "",
  "id": "promotion-read-apis;fetching-an-promotion-by-name-that-exists",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 28,
  "name": "a promotion configuration name \"basic\":",
  "keyword": "Given ",
  "doc_string": {
    "content_type": "",
    "line": 29,
    "value": "type:  BasicPromotion\ndescription: \"Smoke test the Fun as a Service service\""
  }
});
formatter.step({
  "line": 33,
  "name": "I GET \"/api/promotions/basic\"",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "the response should be 200",
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "the body should be JSON:",
  "keyword": "And ",
  "doc_string": {
    "content_type": "",
    "line": 36,
    "value": "  {\n    \"ident\" : \"basic\",\n    \"type\" : \"BasicPromotion\",\n    \"description\" : \"Smoke test the Fun as a Service service\"\n  }"
  }
});
formatter.match({
  "arguments": [
    {
      "val": "basic",
      "offset": 32
    }
  ],
  "location": "PromotionSteps.groovy:8"
});
formatter.result({
  "duration": 4420555,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/api/promotions/basic",
      "offset": 7
    }
  ],
  "location": "HttpSteps.groovy:16"
});
formatter.result({
  "duration": 51935598,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:69"
});
formatter.result({
  "duration": 135336,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:77"
});
formatter.result({
  "duration": 920586,
  "status": "passed"
});
formatter.after({
  "duration": 48629193,
  "status": "passed"
});
formatter.before({
  "duration": 415281774,
  "status": "passed"
});
formatter.scenario({
  "line": 45,
  "name": "Fetching an promotion by name that doesn\u0027t exist",
  "description": "",
  "id": "promotion-read-apis;fetching-an-promotion-by-name-that-doesn\u0027t-exist",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 47,
  "name": "I GET \"/api/promotions/faas\"",
  "keyword": "When "
});
formatter.step({
  "line": 48,
  "name": "the response should be 404",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "/api/promotions/faas",
      "offset": 7
    }
  ],
  "location": "HttpSteps.groovy:16"
});
formatter.result({
  "duration": 45149648,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "404",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:69"
});
formatter.result({
  "duration": 148883,
  "status": "passed"
});
formatter.after({
  "duration": 56558147,
  "status": "passed"
});
formatter.uri("api/service/reading.feature");
formatter.feature({
  "line": 1,
  "name": "Service READ APIs",
  "description": "\nAs a RESTful client or user\nI should be able to read information about services",
  "id": "service-read-apis",
  "keyword": "Feature"
});
formatter.before({
  "duration": 368304366,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "Fetching all services",
  "description": "",
  "id": "service-read-apis;fetching-all-services",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 9,
  "name": "a service configuration named \"faas\":",
  "keyword": "Given ",
  "doc_string": {
    "content_type": "",
    "line": 10,
    "value": "description: \"Fun as a Service\"\nartifacts:\n  - com.github.lookout:foas\n  - com.github.lookout.puppet:puppet-foas\n  - com.github.lookout:puppet-mysql\npipelines:\n  - devtoprod\npromotions:\n  - status-check\n  - jenkins-smoke"
  }
});
formatter.step({
  "line": 22,
  "name": "I GET \"/api/services\"",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "the response should be 200",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "the body should be JSON:",
  "keyword": "And ",
  "doc_string": {
    "content_type": "",
    "line": 25,
    "value": "  [{\n    \"ident\" : \"faas\",\n    \"description\" : \"Fun as a Service\",\n    \"artifacts\" : [\n        \"com.github.lookout:foas\",\n        \"com.github.lookout.puppet:puppet-foas\",\n        \"com.github.lookout:puppet-mysql\"\n    ],\n    \"pipelines\" : [\n        \"devtoprod\"\n    ],\n    \"promotions\" : [\n        \"status-check\",\n        \"jenkins-smoke\"\n    ],\n    \"failure_strategy\" : \"Stop\"\n  }]"
  }
});
formatter.match({
  "arguments": [
    {
      "val": "faas",
      "offset": 31
    }
  ],
  "location": "ServiceSteps.groovy:7"
});
formatter.result({
  "duration": 15864873,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/api/services",
      "offset": 7
    }
  ],
  "location": "HttpSteps.groovy:16"
});
formatter.result({
  "duration": 21266986,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:69"
});
formatter.result({
  "duration": 145123,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:77"
});
formatter.result({
  "duration": 1175711,
  "status": "passed"
});
formatter.after({
  "duration": 34817076,
  "status": "passed"
});
formatter.before({
  "duration": 531299249,
  "status": "passed"
});
formatter.scenario({
  "line": 45,
  "name": "Fetching an service by name that exists",
  "description": "",
  "id": "service-read-apis;fetching-an-service-by-name-that-exists",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 47,
  "name": "a service configuration named \"faas\":",
  "keyword": "Given ",
  "doc_string": {
    "content_type": "",
    "line": 48,
    "value": "description: \"Fun as a Service\"\nartifacts:\n  - com.github.lookout:foas\n  - com.github.lookout.puppet:puppet-foas\n  - com.github.lookout:puppet-mysql\npipelines:\n  - devtoprod\npromotions:\n  - status-check\n  - jenkins-smoke"
  }
});
formatter.step({
  "line": 60,
  "name": "I GET \"/api/services/faas\"",
  "keyword": "When "
});
formatter.step({
  "line": 61,
  "name": "the response should be 200",
  "keyword": "Then "
});
formatter.step({
  "line": 62,
  "name": "the body should be JSON:",
  "keyword": "And ",
  "doc_string": {
    "content_type": "",
    "line": 63,
    "value": "  {\n    \"ident\" : \"faas\",\n    \"description\" : \"Fun as a Service\",\n    \"artifacts\" : [\n        \"com.github.lookout:foas\",\n        \"com.github.lookout.puppet:puppet-foas\",\n        \"com.github.lookout:puppet-mysql\"\n    ],\n    \"pipelines\" : [\n        \"devtoprod\"\n    ],\n    \"promotions\" : [\n        \"status-check\",\n        \"jenkins-smoke\"\n    ],\n    \"failure_strategy\" : \"Stop\"\n  }"
  }
});
formatter.match({
  "arguments": [
    {
      "val": "faas",
      "offset": 31
    }
  ],
  "location": "ServiceSteps.groovy:7"
});
formatter.result({
  "duration": 5511989,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/api/services/faas",
      "offset": 7
    }
  ],
  "location": "HttpSteps.groovy:16"
});
formatter.result({
  "duration": 26708267,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:69"
});
formatter.result({
  "duration": 141949,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:77"
});
formatter.result({
  "duration": 1103427,
  "status": "passed"
});
formatter.after({
  "duration": 53048480,
  "status": "passed"
});
formatter.before({
  "duration": 368341584,
  "status": "passed"
});
formatter.scenario({
  "line": 84,
  "name": "Fetching an service by name that doesn\u0027t exist",
  "description": "",
  "id": "service-read-apis;fetching-an-service-by-name-that-doesn\u0027t-exist",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 86,
  "name": "I GET \"/api/services/faas\"",
  "keyword": "When "
});
formatter.step({
  "line": 87,
  "name": "the response should be 404",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "/api/services/faas",
      "offset": 7
    }
  ],
  "location": "HttpSteps.groovy:16"
});
formatter.result({
  "duration": 31669182,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "404",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:69"
});
formatter.result({
  "duration": 171552,
  "status": "passed"
});
formatter.after({
  "duration": 95577527,
  "status": "passed"
});
formatter.uri("api/webhook/deploymentCompleted.feature");
formatter.feature({
  "line": 1,
  "name": "Webhook invocation  when deployment is completed",
  "description": "",
  "id": "webhook-invocation--when-deployment-is-completed",
  "keyword": "Feature"
});
formatter.uri("api/webhook/deploymentCreated.feature");
formatter.feature({
  "line": 1,
  "name": "Webhook invocation  when deployment is created",
  "description": "",
  "id": "webhook-invocation--when-deployment-is-created",
  "keyword": "Feature"
});
formatter.uri("api/webhook/deploymentStarted.feature");
formatter.feature({
  "line": 1,
  "name": "Webhook invocation  when deployment is started",
  "description": "",
  "id": "webhook-invocation--when-deployment-is-started",
  "keyword": "Feature"
});
formatter.uri("api/webhook/promotionCompletedFail.feature");
formatter.feature({
  "line": 1,
  "name": "Webhook invocation when promotion is completed",
  "description": "",
  "id": "webhook-invocation-when-promotion-is-completed",
  "keyword": "Feature"
});
formatter.uri("api/webhook/promotionCompletedSuccess.feature");
formatter.feature({
  "line": 1,
  "name": "Webhook invocation when promotion is completed",
  "description": "",
  "id": "webhook-invocation-when-promotion-is-completed",
  "keyword": "Feature"
});
});