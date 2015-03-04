$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("api/artifact/creating.feature");
formatter.feature({
  "id": "artifact-create-apis",
  "description": "\nAs a RESTful client or user\nI should be able to create new artifacts in the system",
  "name": "Artifact CREATE APIs",
  "keyword": "Feature",
  "line": 1
});
formatter.before({
  "duration": 4123201000,
  "status": "passed"
});
formatter.before({
  "duration": 3500000,
  "status": "passed"
});
formatter.scenario({
  "id": "artifact-create-apis;creating-a-new-artifact",
  "tags": [
    {
      "name": "@freezetime",
      "line": 7
    }
  ],
  "description": "\nThe creation of an artifact requires group, name, version and sourceUrl.",
  "name": "Creating a new artifact",
  "keyword": "Scenario",
  "line": 8,
  "type": "scenario"
});
formatter.step({
  "name": "I POST to \"/api/artifacts\" with:",
  "keyword": "When ",
  "line": 12,
  "doc_string": {
    "value": "  {\n    \"group\" : \"com.example.cucumber\",\n    \"name\" : \"cukes\",\n    \"version\" : \"1.2.345\",\n    \"sourceUrl\" : \"http://example.com/cucumber.jar\"\n  }",
    "line": 13,
    "content_type": ""
  }
});
formatter.step({
  "name": "the response should be 201",
  "keyword": "Then ",
  "line": 21
});
formatter.step({
  "name": "the body should be JSON:",
  "keyword": "And ",
  "line": 22,
  "doc_string": {
    "value": "  {\n    \"id\" : 1,\n    \"group\" : \"com.example.cucumber\",\n    \"name\" : \"cukes\",\n    \"version\" : \"1.2.345\",\n    \"sourceUrl\" : \"http://example.com/cucumber.jar\",\n    \"createdAt\" : \"{{created_timestamp}}\"\n  }",
    "line": 23,
    "content_type": ""
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
  "duration": 672850000,
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
  "duration": 4177000,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:77"
});
formatter.result({
  "duration": 49947000,
  "status": "passed"
});
formatter.after({
  "duration": 36897000,
  "status": "passed"
});
formatter.after({
  "duration": 521000,
  "status": "passed"
});
formatter.before({
  "duration": 636532000,
  "status": "passed"
});
formatter.scenario({
  "id": "artifact-create-apis;the-request-should-fail-when-creating-an-artifact-without-a-group-name",
  "tags": [
    {
      "name": "@error",
      "line": 34
    }
  ],
  "description": "",
  "name": "The request should fail when creating an Artifact without a group name",
  "keyword": "Scenario",
  "line": 35,
  "type": "scenario"
});
formatter.step({
  "name": "I POST to \"/api/artifacts\" with:",
  "keyword": "When ",
  "line": 37,
  "doc_string": {
    "value": "  {\n    \"name\" : \"cukes\",\n    \"version\" : \"1.2.345\",\n    \"sourceUrl\" : \"http://example.com/cucumber.jar\"\n  }",
    "line": 38,
    "content_type": ""
  }
});
formatter.step({
  "name": "the response should be 422",
  "keyword": "Then ",
  "line": 45
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
  "duration": 70094000,
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
  "duration": 131000,
  "status": "passed"
});
formatter.after({
  "duration": 57566000,
  "status": "passed"
});
formatter.before({
  "duration": 568966000,
  "status": "passed"
});
formatter.scenario({
  "id": "artifact-create-apis;the-request-should-fail-when-creating-an-artifact-without-a-name",
  "tags": [
    {
      "name": "@error",
      "line": 47
    }
  ],
  "description": "",
  "name": "The request should fail when creating an Artifact without a name",
  "keyword": "Scenario",
  "line": 48,
  "type": "scenario"
});
formatter.step({
  "name": "I POST to \"/api/artifacts\" with:",
  "keyword": "When ",
  "line": 50,
  "doc_string": {
    "value": "  {\n    \"group\" : \"com.example.cucumber\",\n    \"version\" : \"1.2.345\",\n    \"sourceUrl\" : \"http://example.com/cucumber.jar\"\n  }",
    "line": 51,
    "content_type": ""
  }
});
formatter.step({
  "name": "the response should be 422",
  "keyword": "Then ",
  "line": 58
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
  "duration": 38340000,
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
  "duration": 110000,
  "status": "passed"
});
formatter.after({
  "duration": 16549000,
  "status": "passed"
});
formatter.before({
  "duration": 457027000,
  "status": "passed"
});
formatter.scenario({
  "id": "artifact-create-apis;the-request-should-fail-when-creating-an-artifact-without-a-version",
  "tags": [
    {
      "name": "@error",
      "line": 60
    }
  ],
  "description": "",
  "name": "The request should fail when creating an Artifact without a version",
  "keyword": "Scenario",
  "line": 61,
  "type": "scenario"
});
formatter.step({
  "name": "I POST to \"/api/artifacts\" with:",
  "keyword": "When ",
  "line": 63,
  "doc_string": {
    "value": "  {\n    \"group\" : \"com.example.cucumber\",\n    \"name\" : \"cukes\",\n    \"sourceUrl\" : \"http://example.com/cucumber.jar\"\n  }",
    "line": 64,
    "content_type": ""
  }
});
formatter.step({
  "name": "the response should be 422",
  "keyword": "Then ",
  "line": 71
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
  "duration": 36681000,
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
  "duration": 99000,
  "status": "passed"
});
formatter.after({
  "duration": 21595000,
  "status": "passed"
});
formatter.before({
  "duration": 435781000,
  "status": "passed"
});
formatter.scenario({
  "id": "artifact-create-apis;the-request-should-fail-when-creating-an-artifact-without-a-sourceurl",
  "tags": [
    {
      "name": "@error",
      "line": 73
    }
  ],
  "description": "",
  "name": "The request should fail when creating an Artifact without a sourceUrl",
  "keyword": "Scenario",
  "line": 74,
  "type": "scenario"
});
formatter.step({
  "name": "I POST to \"/api/artifacts\" with:",
  "keyword": "When ",
  "line": 76,
  "doc_string": {
    "value": "  {\n    \"group\" : \"com.example.cucumber\",\n    \"name\" : \"cukes\",\n    \"version\" : \"1.2.345\"\n  }",
    "line": 77,
    "content_type": ""
  }
});
formatter.step({
  "name": "the response should be 422",
  "keyword": "Then ",
  "line": 84
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
  "duration": 34992000,
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
  "duration": 117000,
  "status": "passed"
});
formatter.after({
  "duration": 14256000,
  "status": "passed"
});
formatter.before({
  "duration": 377305000,
  "status": "passed"
});
formatter.scenario({
  "id": "artifact-create-apis;creating-an-artifact-with-too-large-of-a-group-name",
  "tags": [
    {
      "name": "@error",
      "line": 86
    }
  ],
  "description": "",
  "name": "Creating an artifact with too large of a group name",
  "keyword": "Scenario",
  "line": 87,
  "type": "scenario"
});
formatter.step({
  "name": "I have an artifact request",
  "keyword": "Given ",
  "line": 89
});
formatter.step({
  "name": "the group is over 8192 characters",
  "keyword": "And ",
  "line": 90
});
formatter.step({
  "name": "I POST to \"/api/artifacts\"",
  "keyword": "When ",
  "line": 91
});
formatter.step({
  "name": "the response should be 422",
  "keyword": "Then ",
  "line": 92
});
formatter.match({
  "location": "ArtifactSteps.groovy:23"
});
formatter.result({
  "duration": 129000,
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
  "duration": 1691000,
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
  "duration": 40802000,
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
  "duration": 142000,
  "status": "passed"
});
formatter.after({
  "duration": 12773000,
  "status": "passed"
});
formatter.before({
  "duration": 399213000,
  "status": "passed"
});
formatter.scenario({
  "id": "artifact-create-apis;creating-an-artifact-with-too-large-of-a-name",
  "tags": [
    {
      "name": "@error",
      "line": 94
    }
  ],
  "description": "",
  "name": "Creating an artifact with too large of a name",
  "keyword": "Scenario",
  "line": 95,
  "type": "scenario"
});
formatter.step({
  "name": "I have an artifact request",
  "keyword": "Given ",
  "line": 97
});
formatter.step({
  "name": "the name is over 8192 characters",
  "keyword": "And ",
  "line": 98
});
formatter.step({
  "name": "I POST to \"/api/artifacts\"",
  "keyword": "When ",
  "line": 99
});
formatter.step({
  "name": "the response should be 422",
  "keyword": "Then ",
  "line": 100
});
formatter.match({
  "location": "ArtifactSteps.groovy:23"
});
formatter.result({
  "duration": 22000,
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
  "duration": 684000,
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
  "duration": 34133000,
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
  "duration": 107000,
  "status": "passed"
});
formatter.after({
  "duration": 12395000,
  "status": "passed"
});
formatter.before({
  "duration": 433879000,
  "status": "passed"
});
formatter.scenario({
  "id": "artifact-create-apis;creating-an-artifact-with-too-large-of-a-version",
  "tags": [
    {
      "name": "@error",
      "line": 102
    }
  ],
  "description": "",
  "name": "Creating an artifact with too large of a version",
  "keyword": "Scenario",
  "line": 103,
  "type": "scenario"
});
formatter.step({
  "name": "I have an artifact request",
  "keyword": "Given ",
  "line": 105
});
formatter.step({
  "name": "the version is over 255 characters",
  "keyword": "And ",
  "line": 106
});
formatter.step({
  "name": "I POST to \"/api/artifacts\"",
  "keyword": "When ",
  "line": 107
});
formatter.step({
  "name": "the response should be 422",
  "keyword": "Then ",
  "line": 108
});
formatter.match({
  "location": "ArtifactSteps.groovy:23"
});
formatter.result({
  "duration": 26000,
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
  "duration": 336000,
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
  "duration": 30213000,
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
  "duration": 94000,
  "status": "passed"
});
formatter.after({
  "duration": 10974000,
  "status": "passed"
});
formatter.before({
  "duration": 348502000,
  "status": "passed"
});
formatter.scenario({
  "id": "artifact-create-apis;creating-an-artifact-with-too-large-of-a-sourceurl",
  "tags": [
    {
      "name": "@error",
      "line": 110
    }
  ],
  "description": "",
  "name": "Creating an artifact with too large of a sourceUrl",
  "keyword": "Scenario",
  "line": 111,
  "type": "scenario"
});
formatter.step({
  "name": "I have an artifact request",
  "keyword": "Given ",
  "line": 113
});
formatter.step({
  "name": "the sourceUrl is over 8192 characters",
  "keyword": "And ",
  "line": 114
});
formatter.step({
  "name": "I POST to \"/api/artifacts\"",
  "keyword": "When ",
  "line": 115
});
formatter.step({
  "name": "the response should be 422",
  "keyword": "Then ",
  "line": 116
});
formatter.match({
  "location": "ArtifactSteps.groovy:23"
});
formatter.result({
  "duration": 27000,
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
  "duration": 426000,
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
  "duration": 31012000,
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
  "duration": 100000,
  "status": "passed"
});
formatter.after({
  "duration": 11143000,
  "status": "passed"
});
formatter.uri("api/artifact/deleting.feature");
formatter.feature({
  "id": "artifact-delete-apis",
  "description": "\nAs a RESTful client or user\nI should be *not* be able to delete artifacts",
  "name": "Artifact DELETE APIs",
  "keyword": "Feature",
  "line": 1
});
formatter.before({
  "duration": 322734000,
  "status": "passed"
});
formatter.scenario({
  "id": "artifact-delete-apis;attempting-to-delete-an-artifact",
  "description": "\nOnce artifacts are in DeployDB they\u0027re there forever. FOREVER.",
  "name": "Attempting to delete an artifact",
  "keyword": "Scenario",
  "line": 7,
  "type": "scenario"
});
formatter.step({
  "name": "there is an artifact",
  "keyword": "Given ",
  "line": 11
});
formatter.step({
  "name": "I DELETE \"/api/artifacts/1\"",
  "keyword": "When ",
  "line": 12
});
formatter.step({
  "name": "the response should be 405",
  "keyword": "Then ",
  "line": 13
});
formatter.match({
  "location": "ArtifactSteps.groovy:6"
});
formatter.result({
  "duration": 30272000,
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
  "duration": 20430000,
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
  "duration": 113000,
  "status": "passed"
});
formatter.after({
  "duration": 11402000,
  "status": "passed"
});
formatter.uri("api/artifact/reading.feature");
formatter.feature({
  "id": "artifact-read-apis",
  "description": "\nAs a RESTful client or user\nI should be able to read information about artifacts",
  "name": "Artifact READ APIs",
  "keyword": "Feature",
  "line": 1
});
formatter.before({
  "duration": 301673000,
  "status": "passed"
});
formatter.before({
  "duration": 84000,
  "status": "passed"
});
formatter.scenario({
  "id": "artifact-read-apis;fetching-an-artifact-by-id-that-exists",
  "tags": [
    {
      "name": "@freezetime",
      "line": 7
    }
  ],
  "description": "",
  "name": "Fetching an artifact by ID that exists",
  "keyword": "Scenario",
  "line": 8,
  "type": "scenario"
});
formatter.step({
  "name": "there is an artifact",
  "keyword": "Given ",
  "line": 10
});
formatter.step({
  "name": "I GET \"/api/artifacts/1\"",
  "keyword": "When ",
  "line": 11
});
formatter.step({
  "name": "the response should be 200",
  "keyword": "Then ",
  "line": 12
});
formatter.step({
  "name": "the body should be JSON:",
  "keyword": "And ",
  "line": 13,
  "doc_string": {
    "value": "  {\n    \"id\" : 1,\n    \"group\" : \"com.example.cucumber\",\n    \"name\" : \"cucumber-artifact\",\n    \"version\" : \"1.0.1\",\n    \"sourceUrl\" : \"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.1/cucumber-artifact-1.0.1.jar\",\n    \"createdAt\" : \"{{created_timestamp}}\"\n  }",
    "line": 14,
    "content_type": ""
  }
});
formatter.match({
  "location": "ArtifactSteps.groovy:6"
});
formatter.result({
  "duration": 3567000,
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
  "duration": 39755000,
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
  "duration": 114000,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:77"
});
formatter.result({
  "duration": 1140000,
  "status": "passed"
});
formatter.after({
  "duration": 11928000,
  "status": "passed"
});
formatter.after({
  "duration": 127000,
  "status": "passed"
});
formatter.before({
  "duration": 305099000,
  "status": "passed"
});
formatter.scenario({
  "id": "artifact-read-apis;fetching-an-artifact-with-an-invalid-content-type",
  "tags": [
    {
      "name": "@error",
      "line": 38
    }
  ],
  "description": "\nIt is encouraged to specify the version of the API you would like to\nreceive inside of a Accept header. If this header is not specified than the\nclient is expected to receive the v1 version of the JSON API",
  "name": "Fetching an artifact with an invalid content type",
  "keyword": "Scenario",
  "line": 39,
  "type": "scenario"
});
formatter.step({
  "name": "there is an artifact",
  "keyword": "Given ",
  "line": 45
});
formatter.step({
  "name": "I GET \"/api/artifacts/1\" with custom headers:",
  "keyword": "When ",
  "line": 46,
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
  ]
});
formatter.step({
  "name": "the response should be 406",
  "keyword": "Then ",
  "line": 49
});
formatter.match({
  "location": "ArtifactSteps.groovy:6"
});
formatter.result({
  "duration": 3038000,
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
  "duration": 31918000,
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
  "duration": 109000,
  "status": "passed"
});
formatter.after({
  "duration": 10259000,
  "status": "passed"
});
formatter.before({
  "duration": 291712000,
  "status": "passed"
});
formatter.scenario({
  "id": "artifact-read-apis;fetching-an-artifact-by-id-that-doesn\u0027t-exist",
  "description": "",
  "name": "Fetching an artifact by ID that doesn\u0027t exist",
  "keyword": "Scenario",
  "line": 51,
  "type": "scenario"
});
formatter.step({
  "name": "I GET \"/api/artifacts/1\"",
  "keyword": "When ",
  "line": 53
});
formatter.step({
  "name": "the response should be 404",
  "keyword": "Then ",
  "line": 54
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
  "duration": 26093000,
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
  "duration": 126000,
  "status": "passed"
});
formatter.after({
  "duration": 58499000,
  "status": "passed"
});
formatter.before({
  "duration": 268195000,
  "status": "passed"
});
formatter.scenario({
  "id": "artifact-read-apis;fetching-an-artifact-by-a-non-numeric-id",
  "tags": [
    {
      "name": "@error",
      "line": 56
    }
  ],
  "description": "",
  "name": "Fetching an artifact by a non-numeric ID",
  "keyword": "Scenario",
  "line": 57,
  "type": "scenario"
});
formatter.step({
  "name": "I GET \"/api/artifacts/0xdeadbeef\"",
  "keyword": "When ",
  "line": 59
});
formatter.step({
  "name": "the response should be 400",
  "keyword": "Then ",
  "line": 60
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
  "duration": 22541000,
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
  "duration": 122000,
  "status": "passed"
});
formatter.after({
  "duration": 10442000,
  "status": "passed"
});
formatter.before({
  "duration": 274424000,
  "status": "passed"
});
formatter.before({
  "duration": 86000,
  "status": "passed"
});
formatter.scenario({
  "id": "artifact-read-apis;fetching-an-artifact-by-the-(group,-name)-tuple",
  "tags": [
    {
      "name": "@freezetime",
      "line": 63
    }
  ],
  "description": "",
  "name": "Fetching an artifact by the (group, name) tuple",
  "keyword": "Scenario",
  "line": 64,
  "type": "scenario"
});
formatter.step({
  "name": "there is an artifact",
  "keyword": "Given ",
  "line": 66
});
formatter.step({
  "name": "I GET \"/api/artifacts/by-module/com.example.cucumber:cucumber-artifact\"",
  "keyword": "When ",
  "line": 67
});
formatter.step({
  "name": "the response should be 200",
  "keyword": "Then ",
  "line": 68
});
formatter.step({
  "name": "the body should be JSON:",
  "keyword": "And ",
  "line": 69,
  "doc_string": {
    "value": "  [{\n    \"id\" : 1,\n    \"createdAt\" : \"{{created_timestamp}}\",\n    \"group\" : \"com.example.cucumber\",\n    \"name\" : \"cucumber-artifact\",\n    \"version\" : \"1.0.1\",\n    \"sourceUrl\" : \"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.1/cucumber-artifact-1.0.1.jar\"\n  }]",
    "line": 70,
    "content_type": ""
  }
});
formatter.match({
  "location": "ArtifactSteps.groovy:6"
});
formatter.result({
  "duration": 3729000,
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
  "duration": 50161000,
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
  "duration": 103000,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:77"
});
formatter.result({
  "duration": 3284000,
  "status": "passed"
});
formatter.after({
  "duration": 11224000,
  "status": "passed"
});
formatter.after({
  "duration": 20000,
  "status": "passed"
});
formatter.before({
  "duration": 285572000,
  "status": "passed"
});
formatter.before({
  "duration": 99000,
  "status": "passed"
});
formatter.scenario({
  "id": "artifact-read-apis;fetching-an-artifact-by-the-(group,-name)-tuple,-pagenumber-and-perpagesize",
  "tags": [
    {
      "name": "@freezetime",
      "line": 80
    }
  ],
  "description": "",
  "name": "Fetching an artifact by the (group, name) tuple, pageNumber and perPageSize",
  "keyword": "Scenario",
  "line": 81,
  "type": "scenario"
});
formatter.step({
  "name": "there are artifacts",
  "keyword": "Given ",
  "line": 83
});
formatter.step({
  "name": "I GET \"/api/artifacts/by-module/com.example.cucumber:cucumber-artifact?pageNumber\u003d0\u0026perPageSize\u003d5\"",
  "keyword": "When ",
  "line": 84
});
formatter.step({
  "name": "the response should be 200",
  "keyword": "Then ",
  "line": 85
});
formatter.step({
  "name": "the body should be JSON:",
  "keyword": "And ",
  "line": 86,
  "doc_string": {
    "value": "  [{\n    \"id\" : 2,\n    \"createdAt\" : \"{{created_timestamp}}\",\n    \"group\" : \"com.example.cucumber\",\n    \"name\" : \"cucumber-artifact\",\n    \"version\" : \"1.0.2\",\n    \"sourceUrl\" : \"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.2/cucumber-artifact-1.0.2.jar\"\n  },\n  {\n    \"id\" : 1,\n    \"createdAt\" : \"{{created_timestamp}}\",\n    \"group\" : \"com.example.cucumber\",\n    \"name\" : \"cucumber-artifact\",\n    \"version\" : \"1.0.1\",\n    \"sourceUrl\" : \"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.1/cucumber-artifact-1.0.1.jar\"\n  }]",
    "line": 87,
    "content_type": ""
  }
});
formatter.match({
  "location": "ArtifactSteps.groovy:13"
});
formatter.result({
  "duration": 4470000,
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
  "duration": 25921000,
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
  "duration": 430000,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:77"
});
formatter.result({
  "duration": 1073000,
  "status": "passed"
});
formatter.after({
  "duration": 11572000,
  "status": "passed"
});
formatter.after({
  "duration": 20000,
  "status": "passed"
});
formatter.before({
  "duration": 290294000,
  "status": "passed"
});
formatter.scenario({
  "id": "artifact-read-apis;fetching-an-artifact-by-the-(group,-name)-tuple-that-doesn\u0027t-exist",
  "tags": [
    {
      "name": "@error",
      "line": 105
    }
  ],
  "description": "",
  "name": "Fetching an artifact by the (group, name) tuple that doesn\u0027t exist",
  "keyword": "Scenario",
  "line": 106,
  "type": "scenario"
});
formatter.step({
  "name": "I GET \"/api/artifacts/by-module/com.example.cucumber:cucumber-artifact\"",
  "keyword": "When ",
  "line": 108
});
formatter.step({
  "name": "the response should be 404",
  "keyword": "Then ",
  "line": 109
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
  "duration": 19985000,
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
  "duration": 192000,
  "status": "passed"
});
formatter.after({
  "duration": 10032000,
  "status": "passed"
});
formatter.before({
  "duration": 281749000,
  "status": "passed"
});
formatter.scenario({
  "id": "artifact-read-apis;fetching-an-artifact-by-the-(group,-name)-tuple-with-invalid-page-number",
  "tags": [
    {
      "name": "@error",
      "line": 111
    }
  ],
  "description": "",
  "name": "Fetching an artifact by the (group, name) tuple with invalid page number",
  "keyword": "Scenario",
  "line": 112,
  "type": "scenario"
});
formatter.step({
  "name": "I GET \"/api/artifacts/by-module/com.example.cucumber:cucumber-artifact?pageNumber\u003d1\u0026perPageSize\u003d5\"",
  "keyword": "When ",
  "line": 114
});
formatter.step({
  "name": "the response should be 404",
  "keyword": "Then ",
  "line": 115
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
  "duration": 20692000,
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
  "duration": 122000,
  "status": "passed"
});
formatter.after({
  "duration": 10662000,
  "status": "passed"
});
formatter.before({
  "duration": 317305000,
  "status": "passed"
});
formatter.scenario({
  "id": "artifact-read-apis;fetching-an-artifact-by-the-(group,-name)-tuple-with-invalid-data-type-for-pagesize",
  "tags": [
    {
      "name": "@error",
      "line": 117
    }
  ],
  "description": "",
  "name": "Fetching an artifact by the (group, name) tuple with invalid data type for pageSize",
  "keyword": "Scenario",
  "line": 118,
  "type": "scenario"
});
formatter.step({
  "name": "I GET \"/api/artifacts/by-module/com.example.cucumber:cucumber-artifact?pageNumber\u003d-1\u0026perPageSize\u003d0xdeadbeef\"",
  "keyword": "When ",
  "line": 120
});
formatter.step({
  "name": "the response should be 400",
  "keyword": "Then ",
  "line": 121
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
  "duration": 20354000,
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
  "duration": 102000,
  "status": "passed"
});
formatter.after({
  "duration": 10784000,
  "status": "passed"
});
formatter.before({
  "duration": 331862000,
  "status": "passed"
});
formatter.before({
  "duration": 66000,
  "status": "passed"
});
formatter.scenario({
  "id": "artifact-read-apis;fetching-the-latest-artifact-by-the-(group,-name)-tuple",
  "tags": [
    {
      "name": "@freezetime",
      "line": 123
    }
  ],
  "description": "",
  "name": "Fetching the latest artifact by the (group, name) tuple",
  "keyword": "Scenario",
  "line": 124,
  "type": "scenario"
});
formatter.step({
  "name": "there is an artifact",
  "keyword": "Given ",
  "line": 126
});
formatter.step({
  "name": "I GET \"/api/artifacts/by-module/com.example.cucumber:cucumber-artifact/latest\"",
  "keyword": "When ",
  "line": 127
});
formatter.step({
  "name": "the response should be 200",
  "keyword": "Then ",
  "line": 128
});
formatter.step({
  "name": "the body should be JSON:",
  "keyword": "And ",
  "line": 129,
  "doc_string": {
    "value": " {\n    \"id\" : 1,\n    \"createdAt\" : \"{{created_timestamp}}\",\n    \"group\" : \"com.example.cucumber\",\n    \"name\" : \"cucumber-artifact\",\n    \"version\" : \"1.0.1\",\n    \"sourceUrl\" : \"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.1/cucumber-artifact-1.0.1.jar\"\n  } ",
    "line": 130,
    "content_type": ""
  }
});
formatter.match({
  "location": "ArtifactSteps.groovy:6"
});
formatter.result({
  "duration": 3867000,
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
  "duration": 25672000,
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
  "duration": 98000,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:77"
});
formatter.result({
  "duration": 947000,
  "status": "passed"
});
formatter.after({
  "duration": 12475000,
  "status": "passed"
});
formatter.after({
  "duration": 22000,
  "status": "passed"
});
formatter.before({
  "duration": 317455000,
  "status": "passed"
});
formatter.before({
  "duration": 66000,
  "status": "passed"
});
formatter.scenario({
  "id": "artifact-read-apis;fetching-the-latest-artifact-by-the-(group,-name)-tuple-when-multiple-artifacts-are-present",
  "tags": [
    {
      "name": "@freezetime",
      "line": 141
    }
  ],
  "description": "",
  "name": "Fetching the latest artifact by the (group, name) tuple when multiple artifacts are present",
  "keyword": "Scenario",
  "line": 142,
  "type": "scenario"
});
formatter.step({
  "name": "there are artifacts",
  "keyword": "Given ",
  "line": 144
});
formatter.step({
  "name": "I GET \"/api/artifacts/by-module/com.example.cucumber:cucumber-artifact/latest\"",
  "keyword": "When ",
  "line": 145
});
formatter.step({
  "name": "the response should be 200",
  "keyword": "Then ",
  "line": 146
});
formatter.step({
  "name": "the body should be JSON:",
  "keyword": "And ",
  "line": 147,
  "doc_string": {
    "value": " {\n    \"id\" : 2,\n    \"createdAt\" : \"{{created_timestamp}}\",\n    \"group\" : \"com.example.cucumber\",\n    \"name\" : \"cucumber-artifact\",\n    \"version\" : \"1.0.2\",\n    \"sourceUrl\" : \"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.2/cucumber-artifact-1.0.2.jar\"\n  }",
    "line": 148,
    "content_type": ""
  }
});
formatter.match({
  "location": "ArtifactSteps.groovy:13"
});
formatter.result({
  "duration": 4260000,
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
  "duration": 19926000,
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
  "duration": 114000,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:77"
});
formatter.result({
  "duration": 1002000,
  "status": "passed"
});
formatter.after({
  "duration": 10073000,
  "status": "passed"
});
formatter.after({
  "duration": 22000,
  "status": "passed"
});
formatter.uri("api/artifact/updating.feature");
formatter.feature({
  "id": "artifact-update-apis",
  "description": "\nAs a RESTful client or user\nI should be *not* be able to update artifacts",
  "name": "Artifact UPDATE APIs",
  "keyword": "Feature",
  "line": 1
});
formatter.before({
  "duration": 272327000,
  "status": "passed"
});
formatter.scenario({
  "id": "artifact-update-apis;attempting-to-update-an-artifact",
  "description": "\nArtifacts must be considered immutable to ensure consistency of data from\nDeployDB. We can\u0027t different binaries with the same version, that\u0027s silly.",
  "name": "Attempting to update an artifact",
  "keyword": "Scenario",
  "line": 7,
  "type": "scenario"
});
formatter.step({
  "name": "there is an artifact",
  "keyword": "Given ",
  "line": 12
});
formatter.step({
  "name": "I PATCH \"/api/artifacts/1\" with:",
  "keyword": "When ",
  "line": 13,
  "doc_string": {
    "value": "  {\n    \"version\" : \"9.0.0.0\"\n  }",
    "line": 14,
    "content_type": ""
  }
});
formatter.step({
  "name": "the response should be 405",
  "keyword": "Then ",
  "line": 19
});
formatter.match({
  "location": "ArtifactSteps.groovy:6"
});
formatter.result({
  "duration": 3239000,
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
  "duration": 18271000,
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
  "duration": 130000,
  "status": "passed"
});
formatter.after({
  "duration": 9381000,
  "status": "passed"
});
formatter.uri("api/deployment/reading.feature");
formatter.feature({
  "id": "deployment-read-apis",
  "description": "\nAs a RESTful client or user\nI should be able to read information about deployments",
  "name": "Deployment READ APIs",
  "keyword": "Feature",
  "line": 1
});
formatter.before({
  "duration": 270592000,
  "status": "passed"
});
formatter.before({
  "duration": 68000,
  "status": "passed"
});
formatter.scenario({
  "id": "deployment-read-apis;fetching-all-deployments",
  "tags": [
    {
      "name": "@freezetime",
      "line": 7
    }
  ],
  "description": "",
  "name": "Fetching all deployments",
  "keyword": "Scenario",
  "line": 8,
  "type": "scenario"
});
formatter.step({
  "name": "there is a deployment",
  "keyword": "Given ",
  "line": 10
});
formatter.step({
  "name": "I GET \"/api/deployments\"",
  "keyword": "When ",
  "line": 11
});
formatter.step({
  "name": "the response should be 200",
  "keyword": "Then ",
  "line": 12
});
formatter.step({
  "name": "the body should be JSON:",
  "keyword": "And ",
  "line": 13,
  "doc_string": {
    "value": "  [{\n    \"id\" : 1,\n    \"artifact\" : {\n      \"id\" : 1,\n      \"group\" : \"com.example.cucumber\",\n      \"name\" : \"cucumber-artifact\",\n      \"version\" : \"1.0.1\",\n      \"sourceUrl\" : \"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.1/cucumber-artifact-1.0.1.jar\",\n      \"createdAt\" : \"{{created_timestamp}}\"\n    },\n    \"environment\" : \"pre-prod\",\n    \"service\" : \"faas\",\n    \"status\" : \"STARTED\",\n    \"promotions\" : [{\n      \"id\" : 1,\n      \"promotion\" : \"jenkins-smoke\",\n      \"status\" : \"STARTED\",\n      \"infoUrl\" : null,\n      \"createdAt\" : \"{{created_timestamp}}\"\n     }],\n    \"createdAt\" : \"{{created_timestamp}}\"\n  }]",
    "line": 14,
    "content_type": ""
  }
});
formatter.match({
  "location": "DeploymentSteps.groovy:12"
});
formatter.result({
  "duration": 12421000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/api/deployments",
      "offset": 7
    }
  ],
  "location": "HttpSteps.groovy:16"
});
formatter.result({
  "duration": 33519000,
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
  "duration": 120000,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:77"
});
formatter.result({
  "duration": 1398000,
  "status": "passed"
});
formatter.after({
  "duration": 9184000,
  "status": "passed"
});
formatter.after({
  "duration": 18000,
  "status": "passed"
});
formatter.before({
  "duration": 262097000,
  "status": "passed"
});
formatter.before({
  "duration": 64000,
  "status": "passed"
});
formatter.scenario({
  "id": "deployment-read-apis;fetching-a-deployment-by-id",
  "tags": [
    {
      "name": "@freezetime",
      "line": 40
    }
  ],
  "description": "",
  "name": "Fetching a deployment by ID",
  "keyword": "Scenario",
  "line": 41,
  "type": "scenario"
});
formatter.step({
  "name": "there is a deployment",
  "keyword": "Given ",
  "line": 43
});
formatter.step({
  "name": "I GET \"/api/deployments/1\"",
  "keyword": "When ",
  "line": 44
});
formatter.step({
  "name": "the response should be 200",
  "keyword": "Then ",
  "line": 45
});
formatter.step({
  "name": "the body should be JSON:",
  "keyword": "And ",
  "line": 46,
  "doc_string": {
    "value": "  {\n    \"id\" : 1,\n    \"artifact\" : {\n      \"id\" : 1,\n      \"group\" : \"com.example.cucumber\",\n      \"name\" : \"cucumber-artifact\",\n      \"version\" : \"1.0.1\",\n      \"sourceUrl\" : \"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.1/cucumber-artifact-1.0.1.jar\",\n      \"createdAt\" : \"{{created_timestamp}}\"\n    },\n    \"environment\" : \"pre-prod\",\n    \"service\" : \"faas\",\n    \"status\" : \"STARTED\",\n    \"promotions\" : [{\n      \"id\" : 1,\n      \"promotion\" : \"jenkins-smoke\",\n      \"status\" : \"STARTED\",\n      \"infoUrl\" : null,\n      \"createdAt\" : \"{{created_timestamp}}\"\n     }],\n    \"createdAt\" : \"{{created_timestamp}}\"\n  }",
    "line": 47,
    "content_type": ""
  }
});
formatter.match({
  "location": "DeploymentSteps.groovy:12"
});
formatter.result({
  "duration": 4776000,
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
  "duration": 22470000,
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
  "duration": 103000,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:77"
});
formatter.result({
  "duration": 1060000,
  "status": "passed"
});
formatter.after({
  "duration": 9476000,
  "status": "passed"
});
formatter.after({
  "duration": 23000,
  "status": "passed"
});
formatter.before({
  "duration": 258651000,
  "status": "passed"
});
formatter.scenario({
  "id": "deployment-read-apis;fetching-a-deployment-by-id-that-doesn\u0027t-exist",
  "description": "",
  "name": "Fetching a deployment by ID that doesn\u0027t exist",
  "keyword": "Scenario",
  "line": 73,
  "type": "scenario"
});
formatter.step({
  "name": "I GET \"/api/deployments/1\"",
  "keyword": "When ",
  "line": 75
});
formatter.step({
  "name": "the response should be 404",
  "keyword": "Then ",
  "line": 76
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
  "duration": 17661000,
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
  "duration": 111000,
  "status": "passed"
});
formatter.after({
  "duration": 9903000,
  "status": "passed"
});
formatter.before({
  "duration": 263023000,
  "status": "passed"
});
formatter.scenario({
  "id": "deployment-read-apis;fetching-an-deployment-by-a-non-numeric-id",
  "tags": [
    {
      "name": "@error",
      "line": 79
    }
  ],
  "description": "",
  "name": "Fetching an deployment by a non-numeric ID",
  "keyword": "Scenario",
  "line": 80,
  "type": "scenario"
});
formatter.step({
  "name": "I GET \"/api/deployments/0xdeadbeef\"",
  "keyword": "When ",
  "line": 82
});
formatter.step({
  "name": "the response should be 400",
  "keyword": "Then ",
  "line": 83
});
formatter.match({
  "arguments": [
    {
      "val": "/api/deployments/0xdeadbeef",
      "offset": 7
    }
  ],
  "location": "HttpSteps.groovy:16"
});
formatter.result({
  "duration": 17228000,
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
  "duration": 104000,
  "status": "passed"
});
formatter.after({
  "duration": 8907000,
  "status": "passed"
});
formatter.before({
  "duration": 288010000,
  "status": "passed"
});
formatter.scenario({
  "id": "deployment-read-apis;fetching-an-deployment-with-an-invalid-content-type",
  "tags": [
    {
      "name": "@error",
      "line": 100
    }
  ],
  "description": "\nIt is encouraged to specify the version of the API you would like to\nreceive inside of a Accept header. If this header is not specified than the\nclient is expected to receive the v1 version of the JSON API",
  "name": "Fetching an deployment with an invalid content type",
  "keyword": "Scenario",
  "line": 101,
  "type": "scenario"
});
formatter.step({
  "name": "there is a deployment",
  "keyword": "Given ",
  "line": 107
});
formatter.step({
  "name": "I GET \"/api/deployments/1\" with custom headers:",
  "keyword": "When ",
  "line": 108,
  "rows": [
    {
      "cells": [
        "Header Name",
        "Value"
      ],
      "line": 109
    },
    {
      "cells": [
        "Accept",
        "application/xml"
      ],
      "line": 110
    }
  ]
});
formatter.step({
  "name": "the response should be 406",
  "keyword": "Then ",
  "line": 111
});
formatter.match({
  "location": "DeploymentSteps.groovy:12"
});
formatter.result({
  "duration": 4663000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/api/deployments/1",
      "offset": 7
    }
  ],
  "location": "HttpSteps.groovy:56"
});
formatter.result({
  "duration": 15001000,
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
  "duration": 126000,
  "status": "passed"
});
formatter.after({
  "duration": 9328000,
  "status": "passed"
});
formatter.before({
  "duration": 248256000,
  "status": "passed"
});
formatter.before({
  "duration": 64000,
  "status": "passed"
});
formatter.scenario({
  "id": "deployment-read-apis;fetching-an-deployment-by-the-pagenumber-and-perpagesize",
  "tags": [
    {
      "name": "@freezetime",
      "line": 114
    }
  ],
  "description": "",
  "name": "Fetching an deployment by the pageNumber and perPageSize",
  "keyword": "Scenario",
  "line": 115,
  "type": "scenario"
});
formatter.step({
  "name": "there are deployments",
  "keyword": "Given ",
  "line": 117
});
formatter.step({
  "name": "I GET \"/api/deployments?pageNumber\u003d0\u0026perPageSize\u003d5\"",
  "keyword": "When ",
  "line": 118
});
formatter.step({
  "name": "the response should be 200",
  "keyword": "Then ",
  "line": 119
});
formatter.step({
  "name": "the body should be JSON:",
  "keyword": "And ",
  "line": 120,
  "doc_string": {
    "value": "   [{\n    \"id\" : 1,\n    \"artifact\" : {\n      \"id\" : 1,\n      \"group\" : \"com.example.cucumber\",\n      \"name\" : \"cucumber-artifact\",\n      \"version\" : \"1.0.1\",\n      \"sourceUrl\" : \"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.1/cucumber-artifact-1.0.1.jar\",\n      \"createdAt\" : \"{{created_timestamp}}\"\n    },\n    \"environment\" : \"pre-prod\",\n    \"service\" : \"faas\",\n    \"status\" : \"STARTED\",\n    \"promotions\" : [{\n      \"id\" : 1,\n      \"promotion\" : \"jenkins-smoke\",\n      \"status\" : \"STARTED\",\n      \"infoUrl\" : null,\n      \"createdAt\" : \"{{created_timestamp}}\"\n    }],\n    \"createdAt\" : \"{{created_timestamp}}\"\n  },\n  {\n    \"id\" : 2,\n    \"artifact\" : {\n      \"id\" : 2,\n      \"group\" : \"com.example.cucumber\",\n      \"name\" : \"cucumber-artifact\",\n      \"version\" : \"1.0.2\",\n      \"sourceUrl\" : \"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.2/cucumber-artifact-1.0.2.jar\",\n      \"createdAt\" : \"{{created_timestamp}}\"\n    },\n    \"environment\" : \"pre-prod\",\n    \"service\" : \"faas\",\n    \"status\" : \"STARTED\",\n    \"promotions\" : [{\n      \"id\" : 2,\n      \"promotion\" : \"status-check\",\n      \"status\" : \"STARTED\",\n      \"infoUrl\" : \"http://local.lookout.com/jenkins/job-id/2/results\",\n      \"createdAt\" : \"{{created_timestamp}}\"\n    }],\n    \"createdAt\" : \"{{created_timestamp}}\"\n  }]",
    "line": 121,
    "content_type": ""
  }
});
formatter.match({
  "location": "DeploymentSteps.groovy:44"
});
formatter.result({
  "duration": 6975000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/api/deployments?pageNumber\u003d0\u0026perPageSize\u003d5",
      "offset": 7
    }
  ],
  "location": "HttpSteps.groovy:16"
});
formatter.result({
  "duration": 22126000,
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
  "duration": 96000,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:77"
});
formatter.result({
  "duration": 1697000,
  "status": "passed"
});
formatter.after({
  "duration": 8551000,
  "status": "passed"
});
formatter.after({
  "duration": 25000,
  "status": "passed"
});
formatter.before({
  "duration": 250705000,
  "status": "passed"
});
formatter.scenario({
  "id": "deployment-read-apis;fetching-an-deployment-with-invalid-page-number",
  "tags": [
    {
      "name": "@error",
      "line": 169
    }
  ],
  "description": "",
  "name": "Fetching an deployment with invalid page number",
  "keyword": "Scenario",
  "line": 170,
  "type": "scenario"
});
formatter.step({
  "name": "I GET \"/api/deployments?pageNumber\u003d1\u0026perPageSize\u003d5\"",
  "keyword": "When ",
  "line": 172
});
formatter.step({
  "name": "the response should be 404",
  "keyword": "Then ",
  "line": 173
});
formatter.match({
  "arguments": [
    {
      "val": "/api/deployments?pageNumber\u003d1\u0026perPageSize\u003d5",
      "offset": 7
    }
  ],
  "location": "HttpSteps.groovy:16"
});
formatter.result({
  "duration": 17719000,
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
  "duration": 107000,
  "status": "passed"
});
formatter.after({
  "duration": 8967000,
  "status": "passed"
});
formatter.before({
  "duration": 237878000,
  "status": "passed"
});
formatter.scenario({
  "id": "deployment-read-apis;fetching-an-deployment-with-invalid-data-type-for-pagesize",
  "tags": [
    {
      "name": "@error",
      "line": 176
    }
  ],
  "description": "",
  "name": "Fetching an deployment with invalid data type for pageSize",
  "keyword": "Scenario",
  "line": 177,
  "type": "scenario"
});
formatter.step({
  "name": "I GET \"/api/deployments?pageNumber\u003d-1\u0026perPageSize\u003d0xdeadbeef\"",
  "keyword": "When ",
  "line": 179
});
formatter.step({
  "name": "the response should be 400",
  "keyword": "Then ",
  "line": 180
});
formatter.match({
  "arguments": [
    {
      "val": "/api/deployments?pageNumber\u003d-1\u0026perPageSize\u003d0xdeadbeef",
      "offset": 7
    }
  ],
  "location": "HttpSteps.groovy:16"
});
formatter.result({
  "duration": 16408000,
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
  "duration": 111000,
  "status": "passed"
});
formatter.after({
  "duration": 8599000,
  "status": "passed"
});
formatter.before({
  "duration": 246124000,
  "status": "passed"
});
formatter.before({
  "duration": 70000,
  "status": "passed"
});
formatter.scenario({
  "id": "deployment-read-apis;fetching-the-latest-deployment",
  "tags": [
    {
      "name": "@freezetime",
      "line": 183
    }
  ],
  "description": "",
  "name": "Fetching the latest deployment",
  "keyword": "Scenario",
  "line": 184,
  "type": "scenario"
});
formatter.step({
  "name": "there is a deployment",
  "keyword": "Given ",
  "line": 186
});
formatter.step({
  "name": "I GET \"/api/deployments/latest\"",
  "keyword": "When ",
  "line": 187
});
formatter.step({
  "name": "the response should be 200",
  "keyword": "Then ",
  "line": 188
});
formatter.step({
  "name": "the body should be JSON:",
  "keyword": "And ",
  "line": 189,
  "doc_string": {
    "value": "  {\n    \"id\" : 1,\n    \"artifact\" : {\n      \"id\" : 1,\n      \"group\" : \"com.example.cucumber\",\n      \"name\" : \"cucumber-artifact\",\n      \"version\" : \"1.0.1\",\n      \"sourceUrl\" : \"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.1/cucumber-artifact-1.0.1.jar\",\n      \"createdAt\" : \"{{created_timestamp}}\"\n    },\n    \"environment\" : \"pre-prod\",\n    \"service\" : \"faas\",\n    \"status\" : \"STARTED\",\n    \"promotions\" : [{\n      \"id\" : 1,\n      \"promotion\" : \"jenkins-smoke\",\n      \"status\" : \"STARTED\",\n      \"infoUrl\" : null,\n      \"createdAt\" : \"{{created_timestamp}}\"\n    }],\n    \"createdAt\" : \"{{created_timestamp}}\"\n  }",
    "line": 190,
    "content_type": ""
  }
});
formatter.match({
  "location": "DeploymentSteps.groovy:12"
});
formatter.result({
  "duration": 4582000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/api/deployments/latest",
      "offset": 7
    }
  ],
  "location": "HttpSteps.groovy:16"
});
formatter.result({
  "duration": 22999000,
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
  "duration": 109000,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:77"
});
formatter.result({
  "duration": 1109000,
  "status": "passed"
});
formatter.after({
  "duration": 8366000,
  "status": "passed"
});
formatter.after({
  "duration": 21000,
  "status": "passed"
});
formatter.before({
  "duration": 255819000,
  "status": "passed"
});
formatter.before({
  "duration": 70000,
  "status": "passed"
});
formatter.scenario({
  "id": "deployment-read-apis;fetching-the-latest-deployment-when-multiple-deployments-are-present",
  "tags": [
    {
      "name": "@freezetime",
      "line": 215
    }
  ],
  "description": "",
  "name": "Fetching the latest deployment when multiple deployments are present",
  "keyword": "Scenario",
  "line": 216,
  "type": "scenario"
});
formatter.step({
  "name": "there are deployments",
  "keyword": "Given ",
  "line": 218
});
formatter.step({
  "name": "I GET \"/api/deployments/latest\"",
  "keyword": "When ",
  "line": 219
});
formatter.step({
  "name": "the response should be 200",
  "keyword": "Then ",
  "line": 220
});
formatter.step({
  "name": "the body should be JSON:",
  "keyword": "And ",
  "line": 221,
  "doc_string": {
    "value": "  {\n    \"id\" : 2,\n    \"artifact\" : {\n      \"id\" : 2,\n      \"group\" : \"com.example.cucumber\",\n      \"name\" : \"cucumber-artifact\",\n      \"version\" : \"1.0.2\",\n      \"sourceUrl\" : \"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.2/cucumber-artifact-1.0.2.jar\",\n      \"createdAt\" : \"{{created_timestamp}}\"\n    },\n    \"environment\" : \"pre-prod\",\n    \"service\" : \"faas\",\n    \"status\" : \"STARTED\",\n    \"promotions\" : [{\n      \"id\" : 2,\n      \"promotion\" : \"status-check\",\n      \"status\" : \"STARTED\",\n      \"infoUrl\" : \"http://local.lookout.com/jenkins/job-id/2/results\",\n      \"createdAt\" : \"{{created_timestamp}}\"\n    }],\n    \"createdAt\" : \"{{created_timestamp}}\"\n  }",
    "line": 222,
    "content_type": ""
  }
});
formatter.match({
  "location": "DeploymentSteps.groovy:44"
});
formatter.result({
  "duration": 7702000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/api/deployments/latest",
      "offset": 7
    }
  ],
  "location": "HttpSteps.groovy:16"
});
formatter.result({
  "duration": 24159000,
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
  "duration": 102000,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:77"
});
formatter.result({
  "duration": 1094000,
  "status": "passed"
});
formatter.after({
  "duration": 9411000,
  "status": "passed"
});
formatter.after({
  "duration": 22000,
  "status": "passed"
});
formatter.uri("api/deployment/updating.feature");
formatter.feature({
  "id": "deployment-update-apis",
  "description": "\nAs a RESTful client or user\nI should be able to update existing deployments in the system",
  "name": "Deployment UPDATE APIs",
  "keyword": "Feature",
  "line": 1
});
formatter.before({
  "duration": 277811000,
  "status": "passed"
});
formatter.scenario({
  "id": "deployment-update-apis;updating-a-deployment-with-a-status-started",
  "description": "",
  "name": "Updating a deployment with a status STARTED",
  "keyword": "Scenario",
  "line": 7,
  "type": "scenario"
});
formatter.step({
  "name": "there is a deployment",
  "keyword": "Given ",
  "line": 9
});
formatter.step({
  "name": "I PATCH \"/api/deployments/1\" with:",
  "keyword": "When ",
  "line": 10,
  "doc_string": {
    "value": "  {\n    \"status\" : \"COMPLETED\"\n  }",
    "line": 11,
    "content_type": ""
  }
});
formatter.step({
  "name": "the response should be 204",
  "keyword": "Then ",
  "line": 16
});
formatter.match({
  "location": "DeploymentSteps.groovy:12"
});
formatter.result({
  "duration": 4721000,
  "status": "passed"
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
  "duration": 28231000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "204",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:69"
});
formatter.result({
  "duration": 102000,
  "status": "passed"
});
formatter.after({
  "duration": 9075000,
  "status": "passed"
});
formatter.before({
  "duration": 290439000,
  "status": "passed"
});
formatter.scenario({
  "id": "deployment-update-apis;updating-a-deployment-with-a-status-completed",
  "description": "",
  "name": "Updating a deployment with a status COMPLETED",
  "keyword": "Scenario",
  "line": 19,
  "type": "scenario"
});
formatter.step({
  "name": "there is a deployment",
  "keyword": "Given ",
  "line": 21
});
formatter.step({
  "name": "I PATCH \"/api/deployments/1\" with:",
  "keyword": "When ",
  "line": 22,
  "doc_string": {
    "value": "  {\n    \"status\" : \"FAILED\"\n  }",
    "line": 23,
    "content_type": ""
  }
});
formatter.step({
  "name": "the response should be 204",
  "keyword": "Then ",
  "line": 28
});
formatter.match({
  "location": "DeploymentSteps.groovy:12"
});
formatter.result({
  "duration": 4502000,
  "status": "passed"
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
  "duration": 16690000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "204",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:69"
});
formatter.result({
  "duration": 106000,
  "status": "passed"
});
formatter.after({
  "duration": 8457000,
  "status": "passed"
});
formatter.before({
  "duration": 238271000,
  "status": "passed"
});
formatter.scenario({
  "id": "deployment-update-apis;updating-a-deployment-with-invalid-status-transition",
  "description": "",
  "name": "Updating a deployment with invalid status transition",
  "keyword": "Scenario",
  "line": 31,
  "type": "scenario"
});
formatter.step({
  "name": "there is a deployment",
  "keyword": "Given ",
  "line": 33
});
formatter.step({
  "name": "I PATCH \"/api/deployments/1\" with:",
  "keyword": "When ",
  "line": 34,
  "doc_string": {
    "value": "  {\n    \"status\" : \"NOT_STARTED\"\n  }",
    "line": 35,
    "content_type": ""
  }
});
formatter.step({
  "name": "the response should be 406",
  "keyword": "Then ",
  "line": 40
});
formatter.match({
  "location": "DeploymentSteps.groovy:12"
});
formatter.result({
  "duration": 4045000,
  "status": "passed"
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
  "duration": 18118000,
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
  "duration": 110000,
  "status": "passed"
});
formatter.after({
  "duration": 8694000,
  "status": "passed"
});
formatter.before({
  "duration": 258956000,
  "status": "passed"
});
formatter.scenario({
  "id": "deployment-update-apis;updating-a-deployment-with-an-malformed-status",
  "tags": [
    {
      "name": "@error",
      "line": 43
    }
  ],
  "description": "",
  "name": "Updating a deployment with an malformed status",
  "keyword": "Scenario",
  "line": 44,
  "type": "scenario"
});
formatter.step({
  "name": "there is a deployment",
  "keyword": "Given ",
  "line": 46
});
formatter.step({
  "name": "I PATCH \"/api/deployments/1\" with:",
  "keyword": "When ",
  "line": 47,
  "doc_string": {
    "value": "  {\n    \"status\" : \"INVALID\"\n  }",
    "line": 48,
    "content_type": ""
  }
});
formatter.step({
  "name": "the response should be 400",
  "keyword": "Then ",
  "line": 53
});
formatter.match({
  "location": "DeploymentSteps.groovy:12"
});
formatter.result({
  "duration": 4126000,
  "status": "passed"
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
  "duration": 20140000,
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
  "duration": 95000,
  "status": "passed"
});
formatter.after({
  "duration": 8167000,
  "status": "passed"
});
formatter.before({
  "duration": 233923000,
  "status": "passed"
});
formatter.scenario({
  "id": "deployment-update-apis;updating-a-deployment-that-doesn\u0027t-exist",
  "tags": [
    {
      "name": "@error",
      "line": 56
    }
  ],
  "description": "",
  "name": "Updating a deployment that doesn\u0027t exist",
  "keyword": "Scenario",
  "line": 57,
  "type": "scenario"
});
formatter.step({
  "name": "I PATCH \"/api/deployments/1\" with:",
  "keyword": "When ",
  "line": 59,
  "doc_string": {
    "value": "  {\n    \"status\" : \"FAILED\"\n  }",
    "line": 60,
    "content_type": ""
  }
});
formatter.step({
  "name": "the response should be 404",
  "keyword": "Then ",
  "line": 65
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
  "duration": 17331000,
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
  "duration": 113000,
  "status": "passed"
});
formatter.after({
  "duration": 8543000,
  "status": "passed"
});
formatter.uri("api/environment/reading.feature");
formatter.feature({
  "id": "environment-read-apis",
  "description": "\nAs a RESTful client or user\nI should be able to read information about environments",
  "name": "Environment READ APIs",
  "keyword": "Feature",
  "line": 1
});
formatter.before({
  "duration": 229135000,
  "status": "passed"
});
formatter.scenario({
  "id": "environment-read-apis;fetching-all-environments",
  "description": "",
  "name": "Fetching all environments",
  "keyword": "Scenario",
  "line": 7,
  "type": "scenario"
});
formatter.step({
  "name": "an environment configuration named \"integ\":",
  "keyword": "Given ",
  "line": 9,
  "doc_string": {
    "value": "description: \"DeployDB Primary Integration\"\nwebhooks:\n  deployment:\n    created:\n      - http://jenkins.example.com/job/integ-deploy-created/build\n    completed:\n      - http://jenkins.example.com/job/integ-deploy-completed/build",
    "line": 10,
    "content_type": ""
  }
});
formatter.step({
  "name": "I GET \"/api/environments\"",
  "keyword": "When ",
  "line": 19
});
formatter.step({
  "name": "the response should be 200",
  "keyword": "Then ",
  "line": 20
});
formatter.step({
  "name": "the body should be JSON:",
  "keyword": "And ",
  "line": 21,
  "doc_string": {
    "value": "  [{\n    \"ident\" : \"integ\",\n    \"description\" : \"DeployDB Primary Integration\",\n    \"webhooks\" : {\n      \"deployment\" : {\n          \"started\" : null,\n          \"created\" : [\"http://jenkins.example.com/job/integ-deploy-created/build\"],\n          \"completed\" : [\"http://jenkins.example.com/job/integ-deploy-completed/build\"],\n          \"verified\" : null\n      },\n      \"promotion\" : null\n    }\n  }]",
    "line": 22,
    "content_type": ""
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
  "duration": 21468000,
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
  "duration": 23276000,
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
  "duration": 109000,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:77"
});
formatter.result({
  "duration": 923000,
  "status": "passed"
});
formatter.after({
  "duration": 7887000,
  "status": "passed"
});
formatter.before({
  "duration": 228754000,
  "status": "passed"
});
formatter.scenario({
  "id": "environment-read-apis;fetching-an-environment-by-name-that-exists",
  "description": "",
  "name": "Fetching an environment by name that exists",
  "keyword": "Scenario",
  "line": 39,
  "type": "scenario"
});
formatter.step({
  "name": "an environment configuration named \"integ\":",
  "keyword": "Given ",
  "line": 41,
  "doc_string": {
    "value": "description: \"DeployDB Primary Integration\"\nwebhooks:\n  deployment:\n    created:\n      - http://jenkins.example.com/job/integ-deploy-created/build\n    completed:\n      - http://jenkins.example.com/job/integ-deploy-completed/build",
    "line": 42,
    "content_type": ""
  }
});
formatter.step({
  "name": "I GET \"/api/environments/integ\"",
  "keyword": "When ",
  "line": 51
});
formatter.step({
  "name": "the response should be 200",
  "keyword": "Then ",
  "line": 52
});
formatter.step({
  "name": "the body should be JSON:",
  "keyword": "And ",
  "line": 53,
  "doc_string": {
    "value": "  {\n    \"ident\" : \"integ\",\n    \"description\" : \"DeployDB Primary Integration\",\n    \"webhooks\" : {\n      \"deployment\" : {\n          \"started\" : null,\n          \"created\" : [\"http://jenkins.example.com/job/integ-deploy-created/build\"],\n          \"completed\" : [\"http://jenkins.example.com/job/integ-deploy-completed/build\"],\n          \"verified\" : null\n      },\n      \"promotion\" : null\n    }\n  }",
    "line": 54,
    "content_type": ""
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
  "duration": 4804000,
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
  "duration": 18741000,
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
  "duration": 99000,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:77"
});
formatter.result({
  "duration": 848000,
  "status": "passed"
});
formatter.after({
  "duration": 8536000,
  "status": "passed"
});
formatter.before({
  "duration": 228172000,
  "status": "passed"
});
formatter.scenario({
  "id": "environment-read-apis;fetching-an-environment-by-name-that-doesn\u0027t-exist",
  "description": "",
  "name": "Fetching an environment by name that doesn\u0027t exist",
  "keyword": "Scenario",
  "line": 71,
  "type": "scenario"
});
formatter.step({
  "name": "I GET \"/api/environments/faas\"",
  "keyword": "When ",
  "line": 73
});
formatter.step({
  "name": "the response should be 404",
  "keyword": "Then ",
  "line": 74
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
  "duration": 14959000,
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
  "duration": 104000,
  "status": "passed"
});
formatter.after({
  "duration": 9108000,
  "status": "passed"
});
formatter.uri("api/flow/reading.feature");
formatter.feature({
  "id": "flow-read-apis",
  "description": "\nAs a RESTful client or user\nI should be able to read information about flows",
  "name": "Flow READ APIs",
  "keyword": "Feature",
  "line": 1
});
formatter.before({
  "duration": 241240000,
  "status": "passed"
});
formatter.before({
  "duration": 72000,
  "status": "passed"
});
formatter.scenario({
  "id": "flow-read-apis;fetching-a-flow-by-id",
  "tags": [
    {
      "name": "@freezetime",
      "line": 7
    }
  ],
  "description": "",
  "name": "Fetching a Flow by ID",
  "keyword": "Scenario",
  "line": 8,
  "type": "scenario"
});
formatter.step({
  "name": "there is a flow",
  "keyword": "Given ",
  "line": 10
});
formatter.step({
  "name": "I GET \"/api/flows/1\"",
  "keyword": "When ",
  "line": 11
});
formatter.step({
  "name": "the response should be 200",
  "keyword": "Then ",
  "line": 12
});
formatter.step({
  "name": "the body should be JSON:",
  "keyword": "And ",
  "line": 13,
  "doc_string": {
    "value": "{\n  \"id\" : 1,\n  \"createdAt\" : \"{{created_timestamp}}\",\n  \"artifact\" : {\n      \"id\" : 1,\n      \"group\" : \"com.example.cucumber\",\n      \"name\" : \"cucumber-artifact\",\n      \"version\" : \"1.0.1\",\n      \"sourceUrl\" : \"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.1/cucumber-artifact-1.0.1.jar\",\n      \"createdAt\" : \"{{created_timestamp}}\"\n    },\n  \"deployments\":[{\n    \"id\" : 1,\n    \"artifact\" : {\n      \"id\" : 1,\n      \"group\" : \"com.example.cucumber\",\n      \"name\" : \"cucumber-artifact\",\n      \"version\" : \"1.0.1\",\n      \"sourceUrl\" : \"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.1/cucumber-artifact-1.0.1.jar\",\n      \"createdAt\" : \"{{created_timestamp}}\"\n    },\n    \"environment\" : \"pre-production\",\n    \"service\" : \"bluffdale\",\n    \"promotions\":[],\n    \"status\" : \"STARTED\",\n    \"createdAt\" : \"{{created_timestamp}}\"\n  },\n  {\n    \"id\" : 2,\n    \"artifact\" : {\n      \"id\" : 1,\n      \"group\" : \"com.example.cucumber\",\n      \"name\" : \"cucumber-artifact\",\n      \"version\" : \"1.0.1\",\n      \"sourceUrl\" : \"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.1/cucumber-artifact-1.0.1.jar\",\n      \"createdAt\" : \"{{created_timestamp}}\"\n    },\n    \"environment\" : \"production\",\n    \"service\" : \"bluffdale\",\n    \"promotions\":[],\n    \"status\" : \"STARTED\",\n    \"createdAt\" : \"{{created_timestamp}}\"\n  }],\n  \"service\":\"bluffdale\"\n}",
    "line": 14,
    "content_type": ""
  }
});
formatter.match({
  "location": "FlowSteps.groovy:13"
});
formatter.result({
  "duration": 7409000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/api/flows/1",
      "offset": 7
    }
  ],
  "location": "HttpSteps.groovy:16"
});
formatter.result({
  "duration": 21332000,
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
  "duration": 136000,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:77"
});
formatter.result({
  "duration": 1652000,
  "status": "passed"
});
formatter.after({
  "duration": 8144000,
  "status": "passed"
});
formatter.after({
  "duration": 18000,
  "status": "passed"
});
formatter.before({
  "duration": 244758000,
  "status": "passed"
});
formatter.scenario({
  "id": "flow-read-apis;fetching-a-flow-by-id-that-doesn\u0027t-exist",
  "description": "",
  "name": "Fetching a Flow by ID that doesn\u0027t exist",
  "keyword": "Scenario",
  "line": 62,
  "type": "scenario"
});
formatter.step({
  "name": "I GET \"/api/flows/1\"",
  "keyword": "When ",
  "line": 64
});
formatter.step({
  "name": "the response should be 404",
  "keyword": "Then ",
  "line": 65
});
formatter.match({
  "arguments": [
    {
      "val": "/api/flows/1",
      "offset": 7
    }
  ],
  "location": "HttpSteps.groovy:16"
});
formatter.result({
  "duration": 17390000,
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
  "duration": 100000,
  "status": "passed"
});
formatter.after({
  "duration": 9153000,
  "status": "passed"
});
formatter.uri("api/health.feature");
formatter.feature({
  "id": "the-health-endpoint",
  "description": "\nAs a DeployDB administrator\nI should be able to view the health of the application",
  "name": "The health endpoint",
  "keyword": "Feature",
  "line": 1
});
formatter.before({
  "duration": 236030000,
  "status": "passed"
});
formatter.scenario({
  "id": "the-health-endpoint;fetching-health-under-normal-circumstances",
  "description": "\nAssuming the application is up and running properly, the built-in\nhealthcheck endpoint should return information about all the configured\nhealthchecks currently running inside of DeployDB",
  "name": "Fetching health under normal circumstances",
  "keyword": "Scenario",
  "line": 6,
  "type": "scenario"
});
formatter.step({
  "name": "I GET \"/healthcheck\" from the admin app",
  "keyword": "When ",
  "line": 12
});
formatter.step({
  "name": "the response should be 200",
  "keyword": "Then ",
  "line": 13
});
formatter.step({
  "name": "the body should be JSON:",
  "keyword": "And ",
  "line": 14,
  "doc_string": {
    "value": "{\n  \"deadlocks\" : {\n    \"healthy\" : true\n  },\n  \"sanity\" : {\n    \"healthy\" : true\n  },\n  \"hibernate\" : {\n    \"healthy\" : true\n  },\n  \"webhook\" : {\n    \"healthy\" : true\n  }\n}",
    "line": 15,
    "content_type": ""
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
  "duration": 34745000,
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
  "duration": 99000,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:77"
});
formatter.result({
  "duration": 799000,
  "status": "passed"
});
formatter.after({
  "duration": 8062000,
  "status": "passed"
});
formatter.uri("api/pipeline/reading.feature");
formatter.feature({
  "id": "pipeline-read-apis",
  "description": "As a RESTful client or user\nI should be able to read information about pipelines",
  "name": "Pipeline READ APIs",
  "keyword": "Feature",
  "line": 1
});
formatter.before({
  "duration": 218281000,
  "status": "passed"
});
formatter.scenario({
  "id": "pipeline-read-apis;fetching-all-pipelines",
  "description": "",
  "name": "Fetching all pipelines",
  "keyword": "Scenario",
  "line": 6,
  "type": "scenario"
});
formatter.step({
  "name": "a pipeline configuration named \"devtoprod\":",
  "keyword": "Given ",
  "line": 8,
  "doc_string": {
    "value": "description: \"Development to production pipeline\"\nenvironments:\n     dev-alpha:\n     dev-beta:\n     integ:\n     preprod:\n       promotions:\n          - prod-preflight\n          - manual\n     prod:",
    "line": 9,
    "content_type": ""
  }
});
formatter.step({
  "name": "I GET \"/api/pipelines\"",
  "keyword": "When ",
  "line": 21
});
formatter.step({
  "name": "the response should be 200",
  "keyword": "Then ",
  "line": 22
});
formatter.step({
  "name": "the body should be JSON:",
  "keyword": "And ",
  "line": 23,
  "doc_string": {
    "value": "  [{\n      \"ident\" : \"devtoprod\",\n      \"description\": \"Development to production pipeline\",\n      \"environments\": {\n        \"dev-alpha\": {\n          \"promotions\": []\n        },\n        \"dev-beta\": {\n          \"promotions\": []\n        },\n        \"integ\": {\n          \"promotions\": []\n        },\n        \"preprod\": {\n          \"promotions\": [\n            \"prod-preflight\",\n            \"manual\"\n          ]\n        },\n        \"prod\": {\n          \"promotions\": []\n        }\n      }\n  }]",
    "line": 24,
    "content_type": ""
  }
});
formatter.match({
  "arguments": [
    {
      "val": "devtoprod",
      "offset": 32
    }
  ],
  "location": "PipelineSteps.groovy:7"
});
formatter.result({
  "duration": 11166000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/api/pipelines",
      "offset": 7
    }
  ],
  "location": "HttpSteps.groovy:16"
});
formatter.result({
  "duration": 16604000,
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
  "duration": 121000,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:77"
});
formatter.result({
  "duration": 2017000,
  "status": "passed"
});
formatter.after({
  "duration": 8604000,
  "status": "passed"
});
formatter.before({
  "duration": 222834000,
  "status": "passed"
});
formatter.scenario({
  "id": "pipeline-read-apis;fetching-an-pipeline-by-name-that-exists",
  "description": "",
  "name": "Fetching an pipeline by name that exists",
  "keyword": "Scenario",
  "line": 52,
  "type": "scenario"
});
formatter.step({
  "name": "a pipeline configuration named \"devtoprod\":",
  "keyword": "Given ",
  "line": 54,
  "doc_string": {
    "value": "description: \"Development to production pipeline\"\nenvironments:\n  dev-alpha:\n  dev-beta:\n  integ:\n  pre-prod:\n    promotions:\n      - prod-preflight\n      - manual\n  prod:",
    "line": 55,
    "content_type": ""
  }
});
formatter.step({
  "name": "I GET \"/api/pipelines/devtoprod\"",
  "keyword": "When ",
  "line": 67
});
formatter.step({
  "name": "the response should be 200",
  "keyword": "Then ",
  "line": 68
});
formatter.step({
  "name": "the body should be JSON:",
  "keyword": "And ",
  "line": 69,
  "doc_string": {
    "value": "{\n  \"ident\" : \"devtoprod\",\n  \"description\": \"Development to production pipeline\",\n  \"environments\": {\n    \"dev-alpha\": {\n      \"promotions\": []\n    },\n    \"dev-beta\": {\n      \"promotions\": []\n    },\n    \"integ\": {\n      \"promotions\": []\n    },\n    \"pre-prod\": {\n      \"promotions\": [\n        \"prod-preflight\",\n        \"manual\"\n      ]\n    },\n    \"prod\": {\n      \"promotions\": []\n    }\n  }\n}",
    "line": 70,
    "content_type": ""
  }
});
formatter.match({
  "arguments": [
    {
      "val": "devtoprod",
      "offset": 32
    }
  ],
  "location": "PipelineSteps.groovy:7"
});
formatter.result({
  "duration": 6069000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/api/pipelines/devtoprod",
      "offset": 7
    }
  ],
  "location": "HttpSteps.groovy:16"
});
formatter.result({
  "duration": 20467000,
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
  "duration": 146000,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:77"
});
formatter.result({
  "duration": 1024000,
  "status": "passed"
});
formatter.after({
  "duration": 8440000,
  "status": "passed"
});
formatter.before({
  "duration": 231729000,
  "status": "passed"
});
formatter.scenario({
  "id": "pipeline-read-apis;fetching-an-pipeline-by-name-that-doesn\u0027t-exist",
  "description": "",
  "name": "Fetching an pipeline by name that doesn\u0027t exist",
  "keyword": "Scenario",
  "line": 98,
  "type": "scenario"
});
formatter.step({
  "name": "I GET \"/api/pipelines/fass\"",
  "keyword": "When ",
  "line": 100
});
formatter.step({
  "name": "the response should be 404",
  "keyword": "Then ",
  "line": 101
});
formatter.match({
  "arguments": [
    {
      "val": "/api/pipelines/fass",
      "offset": 7
    }
  ],
  "location": "HttpSteps.groovy:16"
});
formatter.result({
  "duration": 14145000,
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
  "duration": 95000,
  "status": "passed"
});
formatter.after({
  "duration": 7823000,
  "status": "passed"
});
formatter.uri("api/promotion/reading.feature");
formatter.feature({
  "id": "promotion-read-apis",
  "description": "\nAs a RESTful client or user\nI should be able to read information about promotions",
  "name": "Promotion READ APIs",
  "keyword": "Feature",
  "line": 1
});
formatter.before({
  "duration": 229645000,
  "status": "passed"
});
formatter.scenario({
  "id": "promotion-read-apis;fetching-all-promotions",
  "description": "",
  "name": "Fetching all promotions",
  "keyword": "Scenario",
  "line": 7,
  "type": "scenario"
});
formatter.step({
  "name": "a promotion configuration name \"basic\":",
  "keyword": "Given ",
  "line": 9,
  "doc_string": {
    "value": "type:  BasicPromotion\ndescription: \"Smoke test the Fun as a Service service\"",
    "line": 10,
    "content_type": ""
  }
});
formatter.step({
  "name": "I GET \"/api/promotions\"",
  "keyword": "When ",
  "line": 14
});
formatter.step({
  "name": "the response should be 200",
  "keyword": "Then ",
  "line": 15
});
formatter.step({
  "name": "the body should be JSON:",
  "keyword": "And ",
  "line": 16,
  "doc_string": {
    "value": "  [{\n    \"ident\" : \"basic\",\n    \"type\" : \"BasicPromotion\",\n    \"description\" : \"Smoke test the Fun as a Service service\"\n  }]",
    "line": 17,
    "content_type": ""
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
  "duration": 7533000,
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
  "duration": 17892000,
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
  "duration": 102000,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:77"
});
formatter.result({
  "duration": 792000,
  "status": "passed"
});
formatter.after({
  "duration": 8520000,
  "status": "passed"
});
formatter.before({
  "duration": 213555000,
  "status": "passed"
});
formatter.scenario({
  "id": "promotion-read-apis;fetching-an-promotion-by-name-that-exists",
  "description": "",
  "name": "Fetching an promotion by name that exists",
  "keyword": "Scenario",
  "line": 26,
  "type": "scenario"
});
formatter.step({
  "name": "a promotion configuration name \"basic\":",
  "keyword": "Given ",
  "line": 28,
  "doc_string": {
    "value": "type:  BasicPromotion\ndescription: \"Smoke test the Fun as a Service service\"",
    "line": 29,
    "content_type": ""
  }
});
formatter.step({
  "name": "I GET \"/api/promotions/basic\"",
  "keyword": "When ",
  "line": 33
});
formatter.step({
  "name": "the response should be 200",
  "keyword": "Then ",
  "line": 34
});
formatter.step({
  "name": "the body should be JSON:",
  "keyword": "And ",
  "line": 35,
  "doc_string": {
    "value": "  {\n    \"ident\" : \"basic\",\n    \"type\" : \"BasicPromotion\",\n    \"description\" : \"Smoke test the Fun as a Service service\"\n  }",
    "line": 36,
    "content_type": ""
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
  "duration": 4171000,
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
  "duration": 14607000,
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
  "duration": 106000,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:77"
});
formatter.result({
  "duration": 774000,
  "status": "passed"
});
formatter.after({
  "duration": 8872000,
  "status": "passed"
});
formatter.before({
  "duration": 220935000,
  "status": "passed"
});
formatter.scenario({
  "id": "promotion-read-apis;fetching-an-promotion-by-name-that-doesn\u0027t-exist",
  "description": "",
  "name": "Fetching an promotion by name that doesn\u0027t exist",
  "keyword": "Scenario",
  "line": 45,
  "type": "scenario"
});
formatter.step({
  "name": "I GET \"/api/promotions/faas\"",
  "keyword": "When ",
  "line": 47
});
formatter.step({
  "name": "the response should be 404",
  "keyword": "Then ",
  "line": 48
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
  "duration": 13437000,
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
  "duration": 94000,
  "status": "passed"
});
formatter.after({
  "duration": 8553000,
  "status": "passed"
});
formatter.uri("api/promotionResult/updating.feature");
formatter.feature({
  "id": "promotion-result-apis",
  "description": "\nAs a RESTful client or user\nI should be able to add Promotion result for a Deployment in the system",
  "name": "Promotion Result APIs",
  "keyword": "Feature",
  "line": 1
});
formatter.before({
  "duration": 217408000,
  "status": "passed"
});
formatter.scenario({
  "id": "promotion-result-apis;adding-a-result-for-a-promotion-associated-with-a-deployment",
  "description": "",
  "name": "Adding a result for a Promotion associated with a Deployment",
  "keyword": "Scenario",
  "line": 7,
  "type": "scenario"
});
formatter.step({
  "name": "there is a deployment",
  "keyword": "Given ",
  "line": 9
});
formatter.step({
  "name": "I POST to \"/api/deployments/1/promotions\" with:",
  "keyword": "When ",
  "line": 10,
  "doc_string": {
    "value": "  {\n    \"name\"  : \"jenkins-smoke\",\n    \"status\" : \"SUCCESS\",\n    \"infoUrl\" : \"http://local.lookout.com/jenkins/job-id/2/results\"\n  }",
    "line": 11,
    "content_type": ""
  }
});
formatter.step({
  "name": "the response should be 204",
  "keyword": "Then ",
  "line": 18
});
formatter.match({
  "location": "DeploymentSteps.groovy:12"
});
formatter.result({
  "duration": 3459000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/api/deployments/1/promotions",
      "offset": 11
    }
  ],
  "location": "HttpSteps.groovy:24"
});
formatter.result({
  "duration": 27354000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "204",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:69"
});
formatter.result({
  "duration": 97000,
  "status": "passed"
});
formatter.after({
  "duration": 8311000,
  "status": "passed"
});
formatter.before({
  "duration": 241853000,
  "status": "passed"
});
formatter.scenario({
  "id": "promotion-result-apis;adding-a-result-with-invalid-status-for-a-promotion-associated-with-a-deployment",
  "description": "",
  "name": "Adding a result with invalid status for a Promotion associated with a Deployment",
  "keyword": "Scenario",
  "line": 21,
  "type": "scenario"
});
formatter.step({
  "name": "there is a deployment",
  "keyword": "Given ",
  "line": 23
});
formatter.step({
  "name": "I POST to \"/api/deployments/1/promotions\" with:",
  "keyword": "When ",
  "line": 24,
  "doc_string": {
    "value": "  {\n    \"name\"  : \"jenkins-smoke\",\n    \"status\" : \"IN_PROGRESS\",\n    \"infoUrl\" : \"http://local.lookout.com/jenkins/job-id/2/results\"\n  }",
    "line": 25,
    "content_type": ""
  }
});
formatter.step({
  "name": "the response should be 406",
  "keyword": "Then ",
  "line": 32
});
formatter.match({
  "location": "DeploymentSteps.groovy:12"
});
formatter.result({
  "duration": 3659000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/api/deployments/1/promotions",
      "offset": 11
    }
  ],
  "location": "HttpSteps.groovy:24"
});
formatter.result({
  "duration": 17938000,
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
  "duration": 91000,
  "status": "passed"
});
formatter.after({
  "duration": 7305000,
  "status": "passed"
});
formatter.before({
  "duration": 220561000,
  "status": "passed"
});
formatter.scenario({
  "id": "promotion-result-apis;adding-promotion-result-for-a-deployment-that-doesn\u0027t-exist",
  "description": "",
  "name": "Adding Promotion result for a Deployment that doesn\u0027t exist",
  "keyword": "Scenario",
  "line": 35,
  "type": "scenario"
});
formatter.step({
  "name": "I POST to \"/api/deployments/1/promotions\" with:",
  "keyword": "When ",
  "line": 37,
  "doc_string": {
    "value": "  {\n    \"name\"  : \"jenkins-smoke\",\n    \"status\" : \"SUCCESS\",\n    \"infoUrl\" : \"http://local.lookout.com/jenkins/job-id/2/results\"\n  }",
    "line": 38,
    "content_type": ""
  }
});
formatter.step({
  "name": "the response should be 404",
  "keyword": "Then ",
  "line": 45
});
formatter.match({
  "arguments": [
    {
      "val": "/api/deployments/1/promotions",
      "offset": 11
    }
  ],
  "location": "HttpSteps.groovy:24"
});
formatter.result({
  "duration": 15473000,
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
  "duration": 89000,
  "status": "passed"
});
formatter.after({
  "duration": 7614000,
  "status": "passed"
});
formatter.before({
  "duration": 232359000,
  "status": "passed"
});
formatter.scenario({
  "id": "promotion-result-apis;adding-a-result-for-a-promotion-which-is-not-associated-with-the-deployment",
  "tags": [
    {
      "name": "@error",
      "line": 48
    }
  ],
  "description": "",
  "name": "Adding a result for a Promotion which is not associated with the Deployment",
  "keyword": "Scenario",
  "line": 49,
  "type": "scenario"
});
formatter.step({
  "name": "I POST to \"/api/deployments/1/promotions\" with:",
  "keyword": "When ",
  "line": 51,
  "doc_string": {
    "value": "  {\n    \"name\"  : \"test-smoke\",\n    \"status\" : \"FAILED\",\n    \"infoUrl\" : \"http://local.lookout.com/jenkins/job-id/2/results\"\n  }",
    "line": 52,
    "content_type": ""
  }
});
formatter.step({
  "name": "the response should be 404",
  "keyword": "Then ",
  "line": 59
});
formatter.match({
  "arguments": [
    {
      "val": "/api/deployments/1/promotions",
      "offset": 11
    }
  ],
  "location": "HttpSteps.groovy:24"
});
formatter.result({
  "duration": 17360000,
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
  "duration": 88000,
  "status": "passed"
});
formatter.after({
  "duration": 7584000,
  "status": "passed"
});
formatter.uri("api/service/reading.feature");
formatter.feature({
  "id": "service-read-apis",
  "description": "\nAs a RESTful client or user\nI should be able to read information about services",
  "name": "Service READ APIs",
  "keyword": "Feature",
  "line": 1
});
formatter.before({
  "duration": 253232000,
  "status": "passed"
});
formatter.scenario({
  "id": "service-read-apis;fetching-all-services",
  "description": "",
  "name": "Fetching all services",
  "keyword": "Scenario",
  "line": 7,
  "type": "scenario"
});
formatter.step({
  "name": "a service configuration named \"faas\":",
  "keyword": "Given ",
  "line": 9,
  "doc_string": {
    "value": "description: \"Fun as a Service\"\nartifacts:\n  - com.github.lookout:foas\n  - com.github.lookout.puppet:puppet-foas\n  - com.github.lookout:puppet-mysql\npipelines:\n  - devtoprod\npromotions:\n  - status-check\n  - jenkins-smoke",
    "line": 10,
    "content_type": ""
  }
});
formatter.step({
  "name": "I GET \"/api/services\"",
  "keyword": "When ",
  "line": 22
});
formatter.step({
  "name": "the response should be 200",
  "keyword": "Then ",
  "line": 23
});
formatter.step({
  "name": "the body should be JSON:",
  "keyword": "And ",
  "line": 24,
  "doc_string": {
    "value": "  [{\n    \"ident\" : \"faas\",\n    \"description\" : \"Fun as a Service\",\n    \"artifacts\" : [\n        \"com.github.lookout:foas\",\n        \"com.github.lookout.puppet:puppet-foas\",\n        \"com.github.lookout:puppet-mysql\"\n    ],\n    \"pipelines\" : [\n        \"devtoprod\"\n    ],\n    \"promotions\" : [\n        \"status-check\",\n        \"jenkins-smoke\"\n    ],\n    \"failure_strategy\" : \"Stop\"\n  }]",
    "line": 25,
    "content_type": ""
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
  "duration": 9173000,
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
  "duration": 18391000,
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
  "duration": 116000,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:77"
});
formatter.result({
  "duration": 844000,
  "status": "passed"
});
formatter.after({
  "duration": 7852000,
  "status": "passed"
});
formatter.before({
  "duration": 225699000,
  "status": "passed"
});
formatter.scenario({
  "id": "service-read-apis;fetching-an-service-by-name-that-exists",
  "description": "",
  "name": "Fetching an service by name that exists",
  "keyword": "Scenario",
  "line": 45,
  "type": "scenario"
});
formatter.step({
  "name": "a service configuration named \"faas\":",
  "keyword": "Given ",
  "line": 47,
  "doc_string": {
    "value": "description: \"Fun as a Service\"\nartifacts:\n  - com.github.lookout:foas\n  - com.github.lookout.puppet:puppet-foas\n  - com.github.lookout:puppet-mysql\npipelines:\n  - devtoprod\npromotions:\n  - status-check\n  - jenkins-smoke",
    "line": 48,
    "content_type": ""
  }
});
formatter.step({
  "name": "I GET \"/api/services/faas\"",
  "keyword": "When ",
  "line": 60
});
formatter.step({
  "name": "the response should be 200",
  "keyword": "Then ",
  "line": 61
});
formatter.step({
  "name": "the body should be JSON:",
  "keyword": "And ",
  "line": 62,
  "doc_string": {
    "value": "  {\n    \"ident\" : \"faas\",\n    \"description\" : \"Fun as a Service\",\n    \"artifacts\" : [\n        \"com.github.lookout:foas\",\n        \"com.github.lookout.puppet:puppet-foas\",\n        \"com.github.lookout:puppet-mysql\"\n    ],\n    \"pipelines\" : [\n        \"devtoprod\"\n    ],\n    \"promotions\" : [\n        \"status-check\",\n        \"jenkins-smoke\"\n    ],\n    \"failure_strategy\" : \"Stop\"\n  }",
    "line": 63,
    "content_type": ""
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
  "duration": 4301000,
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
  "duration": 16718000,
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
  "duration": 112000,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:77"
});
formatter.result({
  "duration": 883000,
  "status": "passed"
});
formatter.after({
  "duration": 7648000,
  "status": "passed"
});
formatter.before({
  "duration": 214502000,
  "status": "passed"
});
formatter.scenario({
  "id": "service-read-apis;fetching-an-service-by-name-that-doesn\u0027t-exist",
  "description": "",
  "name": "Fetching an service by name that doesn\u0027t exist",
  "keyword": "Scenario",
  "line": 84,
  "type": "scenario"
});
formatter.step({
  "name": "I GET \"/api/services/faas\"",
  "keyword": "When ",
  "line": 86
});
formatter.step({
  "name": "the response should be 404",
  "keyword": "Then ",
  "line": 87
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
  "duration": 13123000,
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
  "duration": 106000,
  "status": "passed"
});
formatter.after({
  "duration": 7189000,
  "status": "passed"
});
formatter.uri("api/webhook/deploymentCompleted.feature");
formatter.feature({
  "id": "webhook-invocation--when-deployment-is-completed",
  "description": "",
  "name": "Webhook invocation  when deployment is completed",
  "keyword": "Feature",
  "line": 1
});
formatter.uri("api/webhook/deploymentCreated.feature");
formatter.feature({
  "id": "webhook-invocation--when-deployment-is-created",
  "description": "",
  "name": "Webhook invocation  when deployment is created",
  "keyword": "Feature",
  "line": 1
});
formatter.uri("api/webhook/deploymentStarted.feature");
formatter.feature({
  "id": "webhook-invocation--when-deployment-is-started",
  "description": "",
  "name": "Webhook invocation  when deployment is started",
  "keyword": "Feature",
  "line": 1
});
formatter.uri("api/webhook/promotionCompletedFail.feature");
formatter.feature({
  "id": "webhook-invocation-when-promotion-is-completed",
  "description": "",
  "name": "Webhook invocation when promotion is completed",
  "keyword": "Feature",
  "line": 1
});
formatter.uri("api/webhook/promotionCompletedSuccess.feature");
formatter.feature({
  "id": "webhook-invocation-when-promotion-is-completed",
  "description": "",
  "name": "Webhook invocation when promotion is completed",
  "keyword": "Feature",
  "line": 1
});
});