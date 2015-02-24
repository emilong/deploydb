$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("api/artifact/creating.feature");
formatter.feature({
  "line": 1,
  "name": "Artifact CREATE APIs",
  "description": "\nAs a RESTful client or user\nI should be able to create new artifacts in the system",
  "id": "artifact-create-apis",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4721696984,
  "status": "passed"
});
formatter.before({
  "duration": 12618495,
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
  "duration": 986169341,
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
  "duration": 7997993,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:77"
});
formatter.result({
  "duration": 143597328,
  "status": "passed"
});
formatter.after({
  "duration": 108517443,
  "status": "passed"
});
formatter.after({
  "duration": 1148281,
  "status": "passed"
});
formatter.before({
  "duration": 1110964914,
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
  "duration": 176823894,
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
  "duration": 183125,
  "status": "passed"
});
formatter.after({
  "duration": 125317637,
  "status": "passed"
});
formatter.before({
  "duration": 644811134,
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
  "duration": 58800011,
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
  "duration": 135888,
  "status": "passed"
});
formatter.after({
  "duration": 92580133,
  "status": "passed"
});
formatter.before({
  "duration": 673704310,
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
  "duration": 69678780,
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
  "duration": 132730,
  "status": "passed"
});
formatter.after({
  "duration": 87322918,
  "status": "passed"
});
formatter.before({
  "duration": 691534081,
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
  "duration": 86343551,
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
  "duration": 200252,
  "status": "passed"
});
formatter.after({
  "duration": 43025763,
  "status": "passed"
});
formatter.before({
  "duration": 449003708,
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
  "duration": 61744,
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
  "duration": 2447590,
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
  "duration": 79383201,
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
  "duration": 158221,
  "status": "passed"
});
formatter.after({
  "duration": 64031572,
  "status": "passed"
});
formatter.before({
  "duration": 585755070,
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
  "duration": 34003,
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
  "duration": 997601,
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
  "duration": 108768714,
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
  "duration": 231625,
  "status": "passed"
});
formatter.after({
  "duration": 80501854,
  "status": "passed"
});
formatter.before({
  "duration": 568238141,
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
  "duration": 33750,
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
  "duration": 417733,
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
  "duration": 44762062,
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
  "duration": 171023,
  "status": "passed"
});
formatter.after({
  "duration": 67934837,
  "status": "passed"
});
formatter.before({
  "duration": 503956073,
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
  "duration": 59571,
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
  "duration": 1011880,
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
  "duration": 87196410,
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
  "duration": 175048,
  "status": "passed"
});
formatter.after({
  "duration": 69044115,
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
  "duration": 1019725701,
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
  "duration": 61715437,
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
  "duration": 28294661,
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
  "duration": 178369,
  "status": "passed"
});
formatter.after({
  "duration": 49548442,
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
  "duration": 550929366,
  "status": "passed"
});
formatter.before({
  "duration": 92634,
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
  "duration": 5929430,
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
  "duration": 131127476,
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
  "duration": 197869,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:77"
});
formatter.result({
  "duration": 1958074,
  "status": "passed"
});
formatter.after({
  "duration": 79607660,
  "status": "passed"
});
formatter.after({
  "duration": 52223,
  "status": "passed"
});
formatter.before({
  "duration": 1317894866,
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
  "duration": 6107123,
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
  "duration": 77867850,
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
  "duration": 180730,
  "status": "passed"
});
formatter.after({
  "duration": 71248301,
  "status": "passed"
});
formatter.before({
  "duration": 713029516,
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
  "duration": 58986716,
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
  "duration": 166672,
  "status": "passed"
});
formatter.after({
  "duration": 41536111,
  "status": "passed"
});
formatter.before({
  "duration": 529269275,
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
  "duration": 63865731,
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
  "duration": 145107,
  "status": "passed"
});
formatter.after({
  "duration": 92909875,
  "status": "passed"
});
formatter.before({
  "duration": 657883576,
  "status": "passed"
});
formatter.before({
  "duration": 68447,
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
  "duration": 4088034,
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
  "duration": 103034724,
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
  "duration": 175098,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:77"
});
formatter.result({
  "duration": 8440335,
  "status": "passed"
});
formatter.after({
  "duration": 100670672,
  "status": "passed"
});
formatter.after({
  "duration": 32540,
  "status": "passed"
});
formatter.before({
  "duration": 1047815843,
  "status": "passed"
});
formatter.before({
  "duration": 74484,
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
  "duration": 8734695,
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
  "duration": 91692291,
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
  "duration": 729208,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:77"
});
formatter.result({
  "duration": 8197848,
  "status": "passed"
});
formatter.after({
  "duration": 91467380,
  "status": "passed"
});
formatter.after({
  "duration": 35751,
  "status": "passed"
});
formatter.before({
  "duration": 599848414,
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
  "duration": 43658909,
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
  "duration": 265879,
  "status": "passed"
});
formatter.after({
  "duration": 70044302,
  "status": "passed"
});
formatter.before({
  "duration": 431489890,
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
  "duration": 63843544,
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
  "duration": 159864,
  "status": "passed"
});
formatter.after({
  "duration": 75482371,
  "status": "passed"
});
formatter.before({
  "duration": 514434737,
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
  "duration": 26577545,
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
  "duration": 146150,
  "status": "passed"
});
formatter.after({
  "duration": 48155310,
  "status": "passed"
});
formatter.before({
  "duration": 543009480,
  "status": "passed"
});
formatter.before({
  "duration": 75162,
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
  "duration": 14951143,
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
  "duration": 31795881,
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
  "duration": 147427,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:77"
});
formatter.result({
  "duration": 1494422,
  "status": "passed"
});
formatter.after({
  "duration": 105550571,
  "status": "passed"
});
formatter.after({
  "duration": 28952,
  "status": "passed"
});
formatter.before({
  "duration": 449837223,
  "status": "passed"
});
formatter.before({
  "duration": 71090,
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
  "duration": 5477074,
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
  "duration": 48252060,
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
  "duration": 148942,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:77"
});
formatter.result({
  "duration": 1471692,
  "status": "passed"
});
formatter.after({
  "duration": 72044816,
  "status": "passed"
});
formatter.after({
  "duration": 29156,
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
  "duration": 643599721,
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
  "duration": 6109272,
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
  "duration": 36139707,
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
  "duration": 201626,
  "status": "passed"
});
formatter.after({
  "duration": 35287883,
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
  "duration": 418215608,
  "status": "passed"
});
formatter.before({
  "duration": 71427,
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
  "duration": 3988550,
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
  "duration": 25327140,
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
  "duration": 147891,
  "status": "passed"
});
formatter.after({
  "duration": 28691608,
  "status": "passed"
});
formatter.after({
  "duration": 31833,
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
  "duration": 371918279,
  "status": "passed"
});
formatter.before({
  "duration": 69073,
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
  "duration": 5598979,
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
  "duration": 37536794,
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
  "duration": 165400,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:77"
});
formatter.result({
  "duration": 1234830,
  "status": "passed"
});
formatter.after({
  "duration": 13656319,
  "status": "passed"
});
formatter.after({
  "duration": 29334,
  "status": "passed"
});
formatter.before({
  "duration": 455930136,
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
  "duration": 53901369,
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
  "duration": 154366,
  "status": "passed"
});
formatter.after({
  "duration": 29168845,
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
  "duration": 603834622,
  "status": "passed"
});
formatter.before({
  "duration": 78543,
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
  "duration": 54740574,
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
  "duration": 172691,
  "status": "passed"
});
formatter.after({
  "duration": 32384011,
  "status": "passed"
});
formatter.after({
  "duration": 29483,
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
formatter.uri("api/health.feature");
formatter.feature({
  "line": 1,
  "name": "The health endpoint",
  "description": "\nAs a DeployDB administrator\nI should be able to view the health of the application",
  "id": "the-health-endpoint",
  "keyword": "Feature"
});
formatter.before({
  "duration": 437264959,
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
  "duration": 111682144,
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
  "duration": 224226,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:77"
});
formatter.result({
  "duration": 1329994,
  "status": "passed"
});
formatter.after({
  "duration": 96493504,
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
  "duration": 522292846,
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
  "duration": 63869353,
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
  "duration": 60676877,
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
  "duration": 190738,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:77"
});
formatter.result({
  "duration": 1341832,
  "status": "passed"
});
formatter.after({
  "duration": 117821803,
  "status": "passed"
});
formatter.before({
  "duration": 474587727,
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
  "duration": 6221900,
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
  "duration": 39238788,
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
  "duration": 186496,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:77"
});
formatter.result({
  "duration": 1336248,
  "status": "passed"
});
formatter.after({
  "duration": 84980733,
  "status": "passed"
});
formatter.before({
  "duration": 557106936,
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
  "duration": 50077805,
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
  "duration": 192892,
  "status": "passed"
});
formatter.after({
  "duration": 55100457,
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
  "duration": 488659408,
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
  "name": "there are services",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I GET \"/api/services\"",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "the response should be 200",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "the body should be JSON:",
  "keyword": "And ",
  "doc_string": {
    "content_type": "",
    "line": 13,
    "value": "  [{\n    \"ident\" : \"alas\",\n    \"description\" : \"Auditlog as a Service\",\n    \"artifacts\" : [\n        \"com.github.lookout:alas\",\n        \"com.github.lookout.puppet:puppet-alas\",\n        \"com.github.lookout:puppet-mysql\"\n    ],\n    \"pipelines\" : [\n        \"detoprod\"\n    ],\n    \"promotions\" : [\n        \"status-check\",\n        \"jenkins-smoke\"\n    ]\n  },\n  {\n    \"ident\" : \"faas\",\n    \"description\" : \"Fun as a Service\",\n    \"artifacts\" : [\n        \"com.github.lookout:foas\",\n        \"com.github.lookout.puppet:puppet-foas\",\n        \"com.github.lookout:puppet-mysql\"\n    ],\n    \"pipelines\" : [\n        \"detoprod\"\n    ],\n    \"promotions\" : [\n        \"status-check\",\n        \"jenkins-smoke\"\n    ]\n  }]"
  }
});
formatter.match({
  "location": "ServiceSteps.groovy:11"
});
formatter.result({
  "duration": 25983257,
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
  "duration": 174882487,
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
  "duration": 136073,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:77"
});
formatter.result({
  "duration": 1450093,
  "status": "passed"
});
formatter.after({
  "duration": 81542819,
  "status": "passed"
});
formatter.before({
  "duration": 350830579,
  "status": "passed"
});
formatter.scenario({
  "line": 48,
  "name": "Fetching an service by name that exists",
  "description": "",
  "id": "service-read-apis;fetching-an-service-by-name-that-exists",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 50,
  "name": "there is an service",
  "keyword": "Given "
});
formatter.step({
  "line": 51,
  "name": "I GET \"/api/services/faas\"",
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
    "value": "  {\n    \"ident\" : \"faas\",\n    \"description\" : \"Fun as a Service\",\n    \"artifacts\" : [\n        \"com.github.lookout:foas\",\n        \"com.github.lookout.puppet:puppet-foas\",\n        \"com.github.lookout:puppet-mysql\"\n    ],\n    \"pipelines\" : [\n        \"detoprod\"\n    ],\n    \"promotions\" : [\n        \"status-check\",\n        \"jenkins-smoke\"\n    ]\n  }"
  }
});
formatter.match({
  "location": "ServiceSteps.groovy:6"
});
formatter.result({
  "duration": 1183881,
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
  "duration": 35963200,
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
  "duration": 144998,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:77"
});
formatter.result({
  "duration": 1320035,
  "status": "passed"
});
formatter.after({
  "duration": 89688237,
  "status": "passed"
});
formatter.before({
  "duration": 440867822,
  "status": "passed"
});
formatter.scenario({
  "line": 73,
  "name": "Fetching an service by name that doesn\u0027t exist",
  "description": "",
  "id": "service-read-apis;fetching-an-service-by-name-that-doesn\u0027t-exist",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 75,
  "name": "I GET \"/api/services/faas\"",
  "keyword": "When "
});
formatter.step({
  "line": 76,
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
  "duration": 41760565,
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
  "duration": 154400,
  "status": "passed"
});
formatter.after({
  "duration": 94529133,
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