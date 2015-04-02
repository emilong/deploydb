$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("api/artifact/creating.feature");
formatter.feature({
  "id": "artifact-create-apis",
  "description": "\nAs a RESTful client or user\nI should be able to create new artifacts in the system",
  "name": "Artifact CREATE APIs",
  "keyword": "Feature",
  "line": 1
});
formatter.before({
  "duration": 4218683000,
  "status": "passed"
});
formatter.before({
  "duration": 3366000,
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
  "name": "promotions are configured",
  "keyword": "Given ",
  "line": 12
});
formatter.step({
  "name": "an environment is configured",
  "keyword": "And ",
  "line": 13
});
formatter.step({
  "name": "a pipeline is configured",
  "keyword": "And ",
  "line": 14
});
formatter.step({
  "name": "a service is configured",
  "keyword": "And ",
  "line": 15
});
formatter.step({
  "name": "I POST to \"/api/artifacts\" with:",
  "keyword": "When ",
  "line": 16,
  "doc_string": {
    "value": "  {\n    \"group\" : \"com.example.cucumber\",\n    \"name\" : \"cukes\",\n    \"version\" : \"1.2.345\",\n    \"sourceUrl\" : \"http://example.com/cucumber.jar\"\n  }",
    "line": 17,
    "content_type": ""
  }
});
formatter.step({
  "name": "the response should be 201",
  "keyword": "Then ",
  "line": 25
});
formatter.step({
  "name": "the body should be JSON:",
  "keyword": "And ",
  "line": 26,
  "doc_string": {
    "value": "  {\n    \"id\" : 1,\n    \"group\" : \"com.example.cucumber\",\n    \"name\" : \"cukes\",\n    \"version\" : \"1.2.345\",\n    \"sourceUrl\" : \"http://example.com/cucumber.jar\",\n    \"createdAt\" : \"{{created_timestamp}}\"\n  }",
    "line": 27,
    "content_type": ""
  }
});
formatter.match({
  "location": "PromotionSteps.groovy:24"
});
formatter.result({
  "duration": 87716000,
  "status": "passed"
});
formatter.match({
  "location": "EnvironmentSteps.groovy:16"
});
formatter.result({
  "duration": 3804000,
  "status": "passed"
});
formatter.match({
  "location": "PipelineSteps.groovy:17"
});
formatter.result({
  "duration": 3623000,
  "status": "passed"
});
formatter.match({
  "location": "ServiceSteps.groovy:16"
});
formatter.result({
  "duration": 2318000,
  "status": "passed"
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
  "duration": 695174000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "201",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:73"
});
formatter.result({
  "duration": 5035000,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:82"
});
formatter.result({
  "duration": 71103000,
  "status": "passed"
});
formatter.after({
  "duration": 37264000,
  "status": "passed"
});
formatter.after({
  "duration": 674000,
  "status": "passed"
});
formatter.before({
  "duration": 843062000,
  "status": "passed"
});
formatter.scenario({
  "id": "artifact-create-apis;the-request-should-fail-when-creating-an-artifact-without-a-group-name",
  "tags": [
    {
      "name": "@error",
      "line": 39
    }
  ],
  "description": "",
  "name": "The request should fail when creating an Artifact without a group name",
  "keyword": "Scenario",
  "line": 40,
  "type": "scenario"
});
formatter.step({
  "name": "I POST to \"/api/artifacts\" with:",
  "keyword": "When ",
  "line": 42,
  "doc_string": {
    "value": "  {\n    \"name\" : \"cukes\",\n    \"version\" : \"1.2.345\",\n    \"sourceUrl\" : \"http://example.com/cucumber.jar\"\n  }",
    "line": 43,
    "content_type": ""
  }
});
formatter.step({
  "name": "the response should be 422",
  "keyword": "Then ",
  "line": 50
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
  "duration": 76939000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "422",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:73"
});
formatter.result({
  "duration": 116000,
  "status": "passed"
});
formatter.after({
  "duration": 18803000,
  "status": "passed"
});
formatter.before({
  "duration": 768925000,
  "status": "passed"
});
formatter.scenario({
  "id": "artifact-create-apis;the-request-should-fail-when-creating-an-artifact-without-a-name",
  "tags": [
    {
      "name": "@error",
      "line": 53
    }
  ],
  "description": "",
  "name": "The request should fail when creating an Artifact without a name",
  "keyword": "Scenario",
  "line": 54,
  "type": "scenario"
});
formatter.step({
  "name": "I POST to \"/api/artifacts\" with:",
  "keyword": "When ",
  "line": 56,
  "doc_string": {
    "value": "  {\n    \"group\" : \"com.example.cucumber\",\n    \"version\" : \"1.2.345\",\n    \"sourceUrl\" : \"http://example.com/cucumber.jar\"\n  }",
    "line": 57,
    "content_type": ""
  }
});
formatter.step({
  "name": "the response should be 422",
  "keyword": "Then ",
  "line": 64
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
  "duration": 61004000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "422",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:73"
});
formatter.result({
  "duration": 140000,
  "status": "passed"
});
formatter.after({
  "duration": 25251000,
  "status": "passed"
});
formatter.before({
  "duration": 740560000,
  "status": "passed"
});
formatter.scenario({
  "id": "artifact-create-apis;the-request-should-fail-when-creating-an-artifact-without-a-version",
  "tags": [
    {
      "name": "@error",
      "line": 67
    }
  ],
  "description": "",
  "name": "The request should fail when creating an Artifact without a version",
  "keyword": "Scenario",
  "line": 68,
  "type": "scenario"
});
formatter.step({
  "name": "I POST to \"/api/artifacts\" with:",
  "keyword": "When ",
  "line": 70,
  "doc_string": {
    "value": "  {\n    \"group\" : \"com.example.cucumber\",\n    \"name\" : \"cukes\",\n    \"sourceUrl\" : \"http://example.com/cucumber.jar\"\n  }",
    "line": 71,
    "content_type": ""
  }
});
formatter.step({
  "name": "the response should be 422",
  "keyword": "Then ",
  "line": 78
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
  "duration": 45839000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "422",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:73"
});
formatter.result({
  "duration": 118000,
  "status": "passed"
});
formatter.after({
  "duration": 17474000,
  "status": "passed"
});
formatter.before({
  "duration": 544329000,
  "status": "passed"
});
formatter.scenario({
  "id": "artifact-create-apis;the-request-should-fail-when-creating-an-artifact-without-a-sourceurl",
  "tags": [
    {
      "name": "@error",
      "line": 81
    }
  ],
  "description": "",
  "name": "The request should fail when creating an Artifact without a sourceUrl",
  "keyword": "Scenario",
  "line": 82,
  "type": "scenario"
});
formatter.step({
  "name": "I POST to \"/api/artifacts\" with:",
  "keyword": "When ",
  "line": 84,
  "doc_string": {
    "value": "  {\n    \"group\" : \"com.example.cucumber\",\n    \"name\" : \"cukes\",\n    \"version\" : \"1.2.345\"\n  }",
    "line": 85,
    "content_type": ""
  }
});
formatter.step({
  "name": "the response should be 422",
  "keyword": "Then ",
  "line": 92
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
  "duration": 38131000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "422",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:73"
});
formatter.result({
  "duration": 106000,
  "status": "passed"
});
formatter.after({
  "duration": 20478000,
  "status": "passed"
});
formatter.before({
  "duration": 496326000,
  "status": "passed"
});
formatter.scenario({
  "id": "artifact-create-apis;creating-an-artifact-with-too-large-of-a-group-name",
  "tags": [
    {
      "name": "@error",
      "line": 95
    }
  ],
  "description": "",
  "name": "Creating an artifact with too large of a group name",
  "keyword": "Scenario",
  "line": 96,
  "type": "scenario"
});
formatter.step({
  "name": "I have an artifact request",
  "keyword": "Given ",
  "line": 98
});
formatter.step({
  "name": "the group is over 8192 characters",
  "keyword": "And ",
  "line": 99
});
formatter.step({
  "name": "I POST to \"/api/artifacts\"",
  "keyword": "When ",
  "line": 100
});
formatter.step({
  "name": "the response should be 422",
  "keyword": "Then ",
  "line": 101
});
formatter.match({
  "location": "ArtifactSteps.groovy:23"
});
formatter.result({
  "duration": 39000,
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
  "duration": 1752000,
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
  "duration": 30528000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "422",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:73"
});
formatter.result({
  "duration": 133000,
  "status": "passed"
});
formatter.after({
  "duration": 15751000,
  "status": "passed"
});
formatter.before({
  "duration": 445447000,
  "status": "passed"
});
formatter.scenario({
  "id": "artifact-create-apis;creating-an-artifact-with-too-large-of-a-name",
  "tags": [
    {
      "name": "@error",
      "line": 104
    }
  ],
  "description": "",
  "name": "Creating an artifact with too large of a name",
  "keyword": "Scenario",
  "line": 105,
  "type": "scenario"
});
formatter.step({
  "name": "I have an artifact request",
  "keyword": "Given ",
  "line": 107
});
formatter.step({
  "name": "the name is over 8192 characters",
  "keyword": "And ",
  "line": 108
});
formatter.step({
  "name": "I POST to \"/api/artifacts\"",
  "keyword": "When ",
  "line": 109
});
formatter.step({
  "name": "the response should be 422",
  "keyword": "Then ",
  "line": 110
});
formatter.match({
  "location": "ArtifactSteps.groovy:23"
});
formatter.result({
  "duration": 20000,
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
  "duration": 615000,
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
  "duration": 20697000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "422",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:73"
});
formatter.result({
  "duration": 95000,
  "status": "passed"
});
formatter.after({
  "duration": 10355000,
  "status": "passed"
});
formatter.before({
  "duration": 379534000,
  "status": "passed"
});
formatter.scenario({
  "id": "artifact-create-apis;creating-an-artifact-with-too-large-of-a-version",
  "tags": [
    {
      "name": "@error",
      "line": 113
    }
  ],
  "description": "",
  "name": "Creating an artifact with too large of a version",
  "keyword": "Scenario",
  "line": 114,
  "type": "scenario"
});
formatter.step({
  "name": "I have an artifact request",
  "keyword": "Given ",
  "line": 116
});
formatter.step({
  "name": "the version is over 255 characters",
  "keyword": "And ",
  "line": 117
});
formatter.step({
  "name": "I POST to \"/api/artifacts\"",
  "keyword": "When ",
  "line": 118
});
formatter.step({
  "name": "the response should be 422",
  "keyword": "Then ",
  "line": 119
});
formatter.match({
  "location": "ArtifactSteps.groovy:23"
});
formatter.result({
  "duration": 31000,
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
  "duration": 392000,
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
  "duration": 22531000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "422",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:73"
});
formatter.result({
  "duration": 91000,
  "status": "passed"
});
formatter.after({
  "duration": 10206000,
  "status": "passed"
});
formatter.before({
  "duration": 367093000,
  "status": "passed"
});
formatter.scenario({
  "id": "artifact-create-apis;creating-an-artifact-with-too-large-of-a-sourceurl",
  "tags": [
    {
      "name": "@error",
      "line": 122
    }
  ],
  "description": "",
  "name": "Creating an artifact with too large of a sourceUrl",
  "keyword": "Scenario",
  "line": 123,
  "type": "scenario"
});
formatter.step({
  "name": "I have an artifact request",
  "keyword": "Given ",
  "line": 125
});
formatter.step({
  "name": "the sourceUrl is over 8192 characters",
  "keyword": "And ",
  "line": 126
});
formatter.step({
  "name": "I POST to \"/api/artifacts\"",
  "keyword": "When ",
  "line": 127
});
formatter.step({
  "name": "the response should be 422",
  "keyword": "Then ",
  "line": 128
});
formatter.match({
  "location": "ArtifactSteps.groovy:23"
});
formatter.result({
  "duration": 28000,
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
  "duration": 401000,
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
  "duration": 22611000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "422",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:73"
});
formatter.result({
  "duration": 98000,
  "status": "passed"
});
formatter.after({
  "duration": 10275000,
  "status": "passed"
});
formatter.before({
  "duration": 363425000,
  "status": "passed"
});
formatter.scenario({
  "id": "artifact-create-apis;creating-a-new-artifact-with-missing-promotion-fails",
  "tags": [
    {
      "name": "@error",
      "line": 131
    }
  ],
  "description": "",
  "name": "Creating a new artifact with missing promotion fails",
  "keyword": "Scenario",
  "line": 132,
  "type": "scenario"
});
formatter.step({
  "name": "an environment is configured",
  "keyword": "Given ",
  "line": 134
});
formatter.step({
  "name": "a pipeline is configured",
  "keyword": "And ",
  "line": 135
});
formatter.step({
  "name": "a service is configured",
  "keyword": "And ",
  "line": 136
});
formatter.step({
  "name": "I POST to \"/api/artifacts\" with:",
  "keyword": "When ",
  "line": 137,
  "doc_string": {
    "value": "  {\n    \"group\" : \"com.example.cucumber\",\n    \"name\" : \"cukes\",\n    \"version\" : \"1.2.345\",\n    \"sourceUrl\" : \"http://example.com/cucumber.jar\"\n  }",
    "line": 138,
    "content_type": ""
  }
});
formatter.step({
  "name": "the response should be 404",
  "keyword": "Then ",
  "line": 146
});
formatter.match({
  "location": "EnvironmentSteps.groovy:16"
});
formatter.result({
  "duration": 305000,
  "status": "passed"
});
formatter.match({
  "location": "PipelineSteps.groovy:17"
});
formatter.result({
  "duration": 205000,
  "status": "passed"
});
formatter.match({
  "location": "ServiceSteps.groovy:16"
});
formatter.result({
  "duration": 179000,
  "status": "passed"
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
  "duration": 37549000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "404",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:73"
});
formatter.result({
  "duration": 126000,
  "status": "passed"
});
formatter.after({
  "duration": 11389000,
  "status": "passed"
});
formatter.before({
  "duration": 341517000,
  "status": "passed"
});
formatter.scenario({
  "id": "artifact-create-apis;creating-a-new-artifact-with-missing-environment-fails",
  "tags": [
    {
      "name": "@error",
      "line": 149
    }
  ],
  "description": "",
  "name": "Creating a new artifact with missing environment fails",
  "keyword": "Scenario",
  "line": 150,
  "type": "scenario"
});
formatter.step({
  "name": "a promotion is configured",
  "keyword": "Given ",
  "line": 152
});
formatter.step({
  "name": "a pipeline is configured",
  "keyword": "And ",
  "line": 153
});
formatter.step({
  "name": "a service is configured",
  "keyword": "And ",
  "line": 154
});
formatter.step({
  "name": "I POST to \"/api/artifacts\" with:",
  "keyword": "When ",
  "line": 155,
  "doc_string": {
    "value": "  {\n    \"group\" : \"com.example.cucumber\",\n    \"name\" : \"cukes\",\n    \"version\" : \"1.2.345\",\n    \"sourceUrl\" : \"http://example.com/cucumber.jar\"\n  }",
    "line": 156,
    "content_type": ""
  }
});
formatter.step({
  "name": "the response should be 404",
  "keyword": "Then ",
  "line": 164
});
formatter.match({
  "location": "PromotionSteps.groovy:17"
});
formatter.result({
  "duration": 925000,
  "status": "passed"
});
formatter.match({
  "location": "PipelineSteps.groovy:17"
});
formatter.result({
  "duration": 178000,
  "status": "passed"
});
formatter.match({
  "location": "ServiceSteps.groovy:16"
});
formatter.result({
  "duration": 175000,
  "status": "passed"
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
  "duration": 25441000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "404",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:73"
});
formatter.result({
  "duration": 100000,
  "status": "passed"
});
formatter.after({
  "duration": 9341000,
  "status": "passed"
});
formatter.before({
  "duration": 321652000,
  "status": "passed"
});
formatter.scenario({
  "id": "artifact-create-apis;creating-a-new-artifact-with-missing-pipeline-fails",
  "tags": [
    {
      "name": "@error",
      "line": 167
    }
  ],
  "description": "",
  "name": "Creating a new artifact with missing pipeline fails",
  "keyword": "Scenario",
  "line": 168,
  "type": "scenario"
});
formatter.step({
  "name": "a promotion is configured",
  "keyword": "Given ",
  "line": 170
});
formatter.step({
  "name": "an environment is configured",
  "keyword": "And ",
  "line": 171
});
formatter.step({
  "name": "a service is configured",
  "keyword": "And ",
  "line": 172
});
formatter.step({
  "name": "I POST to \"/api/artifacts\" with:",
  "keyword": "When ",
  "line": 173,
  "doc_string": {
    "value": "  {\n    \"group\" : \"com.example.cucumber\",\n    \"name\" : \"cukes\",\n    \"version\" : \"1.2.345\",\n    \"sourceUrl\" : \"http://example.com/cucumber.jar\"\n  }",
    "line": 174,
    "content_type": ""
  }
});
formatter.step({
  "name": "the response should be 404",
  "keyword": "Then ",
  "line": 182
});
formatter.match({
  "location": "PromotionSteps.groovy:17"
});
formatter.result({
  "duration": 208000,
  "status": "passed"
});
formatter.match({
  "location": "EnvironmentSteps.groovy:16"
});
formatter.result({
  "duration": 153000,
  "status": "passed"
});
formatter.match({
  "location": "ServiceSteps.groovy:16"
});
formatter.result({
  "duration": 153000,
  "status": "passed"
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
  "duration": 23944000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "404",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:73"
});
formatter.result({
  "duration": 118000,
  "status": "passed"
});
formatter.after({
  "duration": 9801000,
  "status": "passed"
});
formatter.before({
  "duration": 320690000,
  "status": "passed"
});
formatter.scenario({
  "id": "artifact-create-apis;creating-a-new-artifact-with-missing-service-fails",
  "tags": [
    {
      "name": "@error",
      "line": 185
    }
  ],
  "description": "",
  "name": "Creating a new artifact with missing service fails",
  "keyword": "Scenario",
  "line": 186,
  "type": "scenario"
});
formatter.step({
  "name": "a promotion is configured",
  "keyword": "Given ",
  "line": 189
});
formatter.step({
  "name": "an environment is configured",
  "keyword": "And ",
  "line": 190
});
formatter.step({
  "name": "a pipeline is configured",
  "keyword": "And ",
  "line": 191
});
formatter.step({
  "name": "I POST to \"/api/artifacts\" with:",
  "keyword": "When ",
  "line": 192,
  "doc_string": {
    "value": "  {\n    \"group\" : \"com.example.cucumber\",\n    \"name\" : \"cukes\",\n    \"version\" : \"1.2.345\",\n    \"sourceUrl\" : \"http://example.com/cucumber.jar\"\n  }",
    "line": 193,
    "content_type": ""
  }
});
formatter.step({
  "name": "the response should be 404",
  "keyword": "Then ",
  "line": 201
});
formatter.match({
  "location": "PromotionSteps.groovy:17"
});
formatter.result({
  "duration": 213000,
  "status": "passed"
});
formatter.match({
  "location": "EnvironmentSteps.groovy:16"
});
formatter.result({
  "duration": 152000,
  "status": "passed"
});
formatter.match({
  "location": "PipelineSteps.groovy:17"
});
formatter.result({
  "duration": 183000,
  "status": "passed"
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
  "duration": 24322000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "404",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:73"
});
formatter.result({
  "duration": 102000,
  "status": "passed"
});
formatter.after({
  "duration": 10157000,
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
  "duration": 317057000,
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
  "duration": 31164000,
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
  "duration": 22051000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "405",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:73"
});
formatter.result({
  "duration": 98000,
  "status": "passed"
});
formatter.after({
  "duration": 10586000,
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
  "duration": 347077000,
  "status": "passed"
});
formatter.before({
  "duration": 79000,
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
  "duration": 3142000,
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
  "duration": 37733000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:73"
});
formatter.result({
  "duration": 114000,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:82"
});
formatter.result({
  "duration": 1117000,
  "status": "passed"
});
formatter.after({
  "duration": 11135000,
  "status": "passed"
});
formatter.after({
  "duration": 32000,
  "status": "passed"
});
formatter.before({
  "duration": 372844000,
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
  "duration": 2864000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/api/artifacts/1",
      "offset": 7
    }
  ],
  "location": "HttpSteps.groovy:60"
});
formatter.result({
  "duration": 31646000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "406",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:73"
});
formatter.result({
  "duration": 434000,
  "status": "passed"
});
formatter.after({
  "duration": 10323000,
  "status": "passed"
});
formatter.before({
  "duration": 316974000,
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
  "duration": 17759000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "404",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:73"
});
formatter.result({
  "duration": 170000,
  "status": "passed"
});
formatter.after({
  "duration": 10439000,
  "status": "passed"
});
formatter.before({
  "duration": 326345000,
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
  "duration": 20582000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:73"
});
formatter.result({
  "duration": 108000,
  "status": "passed"
});
formatter.after({
  "duration": 9526000,
  "status": "passed"
});
formatter.before({
  "duration": 325643000,
  "status": "passed"
});
formatter.before({
  "duration": 66000,
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
  "duration": 2681000,
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
  "duration": 45690000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:73"
});
formatter.result({
  "duration": 103000,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:82"
});
formatter.result({
  "duration": 3308000,
  "status": "passed"
});
formatter.after({
  "duration": 10079000,
  "status": "passed"
});
formatter.after({
  "duration": 18000,
  "status": "passed"
});
formatter.before({
  "duration": 324482000,
  "status": "passed"
});
formatter.before({
  "duration": 54000,
  "status": "passed"
});
formatter.scenario({
  "id": "artifact-read-apis;fetching-an-artifact-by-the-(group,-name)-tuple,-pagenumber-and-perpagesize",
  "tags": [
    {
      "name": "@freezetime",
      "line": 81
    }
  ],
  "description": "",
  "name": "Fetching an artifact by the (group, name) tuple, pageNumber and perPageSize",
  "keyword": "Scenario",
  "line": 82,
  "type": "scenario"
});
formatter.step({
  "name": "there are artifacts",
  "keyword": "Given ",
  "line": 84
});
formatter.step({
  "name": "I GET \"/api/artifacts/by-module/com.example.cucumber:cucumber-artifact?pageNumber\u003d0\u0026perPageSize\u003d5\"",
  "keyword": "When ",
  "line": 85
});
formatter.step({
  "name": "the response should be 200",
  "keyword": "Then ",
  "line": 86
});
formatter.step({
  "name": "the body should be JSON:",
  "keyword": "And ",
  "line": 87,
  "doc_string": {
    "value": "  [{\n    \"id\" : 2,\n    \"createdAt\" : \"{{created_timestamp}}\",\n    \"group\" : \"com.example.cucumber\",\n    \"name\" : \"cucumber-artifact\",\n    \"version\" : \"1.0.2\",\n    \"sourceUrl\" : \"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.2/cucumber-artifact-1.0.2.jar\"\n  },\n  {\n    \"id\" : 1,\n    \"createdAt\" : \"{{created_timestamp}}\",\n    \"group\" : \"com.example.cucumber\",\n    \"name\" : \"cucumber-artifact\",\n    \"version\" : \"1.0.1\",\n    \"sourceUrl\" : \"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.1/cucumber-artifact-1.0.1.jar\"\n  }]",
    "line": 88,
    "content_type": ""
  }
});
formatter.match({
  "location": "ArtifactSteps.groovy:13"
});
formatter.result({
  "duration": 4658000,
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
  "duration": 24962000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:73"
});
formatter.result({
  "duration": 102000,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:82"
});
formatter.result({
  "duration": 1195000,
  "status": "passed"
});
formatter.after({
  "duration": 10662000,
  "status": "passed"
});
formatter.after({
  "duration": 24000,
  "status": "passed"
});
formatter.before({
  "duration": 345814000,
  "status": "passed"
});
formatter.scenario({
  "id": "artifact-read-apis;fetching-an-artifact-by-the-(group,-name)-tuple-that-doesn\u0027t-exist",
  "tags": [
    {
      "name": "@error",
      "line": 106
    }
  ],
  "description": "",
  "name": "Fetching an artifact by the (group, name) tuple that doesn\u0027t exist",
  "keyword": "Scenario",
  "line": 107,
  "type": "scenario"
});
formatter.step({
  "name": "I GET \"/api/artifacts/by-module/com.example.cucumber:cucumber-artifact\"",
  "keyword": "When ",
  "line": 109
});
formatter.step({
  "name": "the response should be 404",
  "keyword": "Then ",
  "line": 110
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
  "duration": 21235000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "404",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:73"
});
formatter.result({
  "duration": 98000,
  "status": "passed"
});
formatter.after({
  "duration": 10661000,
  "status": "passed"
});
formatter.before({
  "duration": 297704000,
  "status": "passed"
});
formatter.scenario({
  "id": "artifact-read-apis;fetching-an-artifact-by-the-(group,-name)-tuple-with-invalid-page-number",
  "tags": [
    {
      "name": "@error",
      "line": 112
    }
  ],
  "description": "",
  "name": "Fetching an artifact by the (group, name) tuple with invalid page number",
  "keyword": "Scenario",
  "line": 113,
  "type": "scenario"
});
formatter.step({
  "name": "I GET \"/api/artifacts/by-module/com.example.cucumber:cucumber-artifact?pageNumber\u003d1\u0026perPageSize\u003d5\"",
  "keyword": "When ",
  "line": 115
});
formatter.step({
  "name": "the response should be 404",
  "keyword": "Then ",
  "line": 116
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
  "duration": 18946000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "404",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:73"
});
formatter.result({
  "duration": 97000,
  "status": "passed"
});
formatter.after({
  "duration": 8505000,
  "status": "passed"
});
formatter.before({
  "duration": 305126000,
  "status": "passed"
});
formatter.scenario({
  "id": "artifact-read-apis;fetching-an-artifact-by-the-(group,-name)-tuple-with-invalid-data-type-for-pagesize",
  "tags": [
    {
      "name": "@error",
      "line": 118
    }
  ],
  "description": "",
  "name": "Fetching an artifact by the (group, name) tuple with invalid data type for pageSize",
  "keyword": "Scenario",
  "line": 119,
  "type": "scenario"
});
formatter.step({
  "name": "I GET \"/api/artifacts/by-module/com.example.cucumber:cucumber-artifact?pageNumber\u003d-1\u0026perPageSize\u003d0xdeadbeef\"",
  "keyword": "When ",
  "line": 121
});
formatter.step({
  "name": "the response should be 400",
  "keyword": "Then ",
  "line": 122
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
  "duration": 18387000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:73"
});
formatter.result({
  "duration": 100000,
  "status": "passed"
});
formatter.after({
  "duration": 9456000,
  "status": "passed"
});
formatter.before({
  "duration": 315127000,
  "status": "passed"
});
formatter.scenario({
  "id": "artifact-read-apis;fetching-an-artifact-by-the-(group,-name)-tuple,-pagenumber\u003d0-and-perpagesize\u003d0",
  "tags": [
    {
      "name": "@error",
      "line": 124
    }
  ],
  "description": "",
  "name": "Fetching an artifact by the (group, name) tuple, pageNumber\u003d0 and perPageSize\u003d0",
  "keyword": "Scenario",
  "line": 125,
  "type": "scenario"
});
formatter.step({
  "name": "there are artifacts",
  "keyword": "Given ",
  "line": 127
});
formatter.step({
  "name": "I GET \"/api/artifacts/by-module/com.example.cucumber:cucumber-artifact?pageNumber\u003d0\u0026perPageSize\u003d0\"",
  "keyword": "When ",
  "line": 128
});
formatter.step({
  "name": "the response should be 400",
  "keyword": "Then ",
  "line": 129
});
formatter.match({
  "location": "ArtifactSteps.groovy:13"
});
formatter.result({
  "duration": 3613000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/api/artifacts/by-module/com.example.cucumber:cucumber-artifact?pageNumber\u003d0\u0026perPageSize\u003d0",
      "offset": 7
    }
  ],
  "location": "HttpSteps.groovy:16"
});
formatter.result({
  "duration": 19413000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:73"
});
formatter.result({
  "duration": 101000,
  "status": "passed"
});
formatter.after({
  "duration": 8921000,
  "status": "passed"
});
formatter.before({
  "duration": 319206000,
  "status": "passed"
});
formatter.before({
  "duration": 54000,
  "status": "passed"
});
formatter.scenario({
  "id": "artifact-read-apis;fetching-the-latest-artifact-by-the-(group,-name)-tuple",
  "tags": [
    {
      "name": "@freezetime",
      "line": 132
    }
  ],
  "description": "",
  "name": "Fetching the latest artifact by the (group, name) tuple",
  "keyword": "Scenario",
  "line": 133,
  "type": "scenario"
});
formatter.step({
  "name": "there is an artifact",
  "keyword": "Given ",
  "line": 135
});
formatter.step({
  "name": "I GET \"/api/artifacts/by-module/com.example.cucumber:cucumber-artifact/latest\"",
  "keyword": "When ",
  "line": 136
});
formatter.step({
  "name": "the response should be 200",
  "keyword": "Then ",
  "line": 137
});
formatter.step({
  "name": "the body should be JSON:",
  "keyword": "And ",
  "line": 138,
  "doc_string": {
    "value": " {\n    \"id\" : 1,\n    \"createdAt\" : \"{{created_timestamp}}\",\n    \"group\" : \"com.example.cucumber\",\n    \"name\" : \"cucumber-artifact\",\n    \"version\" : \"1.0.1\",\n    \"sourceUrl\" : \"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.1/cucumber-artifact-1.0.1.jar\"\n  } ",
    "line": 139,
    "content_type": ""
  }
});
formatter.match({
  "location": "ArtifactSteps.groovy:6"
});
formatter.result({
  "duration": 2709000,
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
  "duration": 21033000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:73"
});
formatter.result({
  "duration": 99000,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:82"
});
formatter.result({
  "duration": 1195000,
  "status": "passed"
});
formatter.after({
  "duration": 10868000,
  "status": "passed"
});
formatter.after({
  "duration": 20000,
  "status": "passed"
});
formatter.before({
  "duration": 394885000,
  "status": "passed"
});
formatter.before({
  "duration": 119000,
  "status": "passed"
});
formatter.scenario({
  "id": "artifact-read-apis;fetching-the-latest-artifact-by-the-(group,-name)-tuple-when-multiple-artifacts-are-present",
  "tags": [
    {
      "name": "@freezetime",
      "line": 150
    }
  ],
  "description": "",
  "name": "Fetching the latest artifact by the (group, name) tuple when multiple artifacts are present",
  "keyword": "Scenario",
  "line": 151,
  "type": "scenario"
});
formatter.step({
  "name": "there are artifacts",
  "keyword": "Given ",
  "line": 153
});
formatter.step({
  "name": "I GET \"/api/artifacts/by-module/com.example.cucumber:cucumber-artifact/latest\"",
  "keyword": "When ",
  "line": 154
});
formatter.step({
  "name": "the response should be 200",
  "keyword": "Then ",
  "line": 155
});
formatter.step({
  "name": "the body should be JSON:",
  "keyword": "And ",
  "line": 156,
  "doc_string": {
    "value": " {\n    \"id\" : 2,\n    \"createdAt\" : \"{{created_timestamp}}\",\n    \"group\" : \"com.example.cucumber\",\n    \"name\" : \"cucumber-artifact\",\n    \"version\" : \"1.0.2\",\n    \"sourceUrl\" : \"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.2/cucumber-artifact-1.0.2.jar\"\n  }",
    "line": 157,
    "content_type": ""
  }
});
formatter.match({
  "location": "ArtifactSteps.groovy:13"
});
formatter.result({
  "duration": 4128000,
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
  "duration": 20457000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:73"
});
formatter.result({
  "duration": 120000,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:82"
});
formatter.result({
  "duration": 1064000,
  "status": "passed"
});
formatter.after({
  "duration": 8894000,
  "status": "passed"
});
formatter.after({
  "duration": 23000,
  "status": "passed"
});
formatter.before({
  "duration": 349686000,
  "status": "passed"
});
formatter.before({
  "duration": 50000,
  "status": "passed"
});
formatter.scenario({
  "id": "artifact-read-apis;fetching-an-artifact-by-version-query",
  "tags": [
    {
      "name": "@query",
      "line": 168
    },
    {
      "name": "@freezetime",
      "line": 168
    }
  ],
  "description": "",
  "name": "Fetching an artifact by version query",
  "keyword": "Scenario",
  "line": 169,
  "type": "scenario"
});
formatter.step({
  "name": "there are artifacts",
  "keyword": "Given ",
  "line": 171
});
formatter.step({
  "name": "I GET \"/api/artifacts?query\u003d1.0.1\"",
  "keyword": "When ",
  "line": 172
});
formatter.step({
  "name": "the response should be 200",
  "keyword": "Then ",
  "line": 173
});
formatter.step({
  "name": "the body should be JSON:",
  "keyword": "And ",
  "line": 174,
  "doc_string": {
    "value": " [{\n    \"id\" : 1,\n    \"createdAt\" : \"{{created_timestamp}}\",\n    \"group\" : \"com.example.cucumber\",\n    \"name\" : \"cucumber-artifact\",\n    \"version\" : \"1.0.1\",\n    \"sourceUrl\" : \"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.1/cucumber-artifact-1.0.1.jar\"\n  }]",
    "line": 175,
    "content_type": ""
  }
});
formatter.match({
  "location": "ArtifactSteps.groovy:13"
});
formatter.result({
  "duration": 4180000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/api/artifacts?query\u003d1.0.1",
      "offset": 7
    }
  ],
  "location": "HttpSteps.groovy:16"
});
formatter.result({
  "duration": 23954000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:73"
});
formatter.result({
  "duration": 95000,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:82"
});
formatter.result({
  "duration": 795000,
  "status": "passed"
});
formatter.after({
  "duration": 7786000,
  "status": "passed"
});
formatter.after({
  "duration": 17000,
  "status": "passed"
});
formatter.before({
  "duration": 285623000,
  "status": "passed"
});
formatter.before({
  "duration": 85000,
  "status": "passed"
});
formatter.scenario({
  "id": "artifact-read-apis;fetching-an-artifact-by-partial-version-query",
  "tags": [
    {
      "name": "@query",
      "line": 186
    },
    {
      "name": "@freezetime",
      "line": 186
    }
  ],
  "description": "",
  "name": "Fetching an artifact by partial version query",
  "keyword": "Scenario",
  "line": 187,
  "type": "scenario"
});
formatter.step({
  "name": "there are artifacts",
  "keyword": "Given ",
  "line": 189
});
formatter.step({
  "name": "I GET \"/api/artifacts?query\u003d1.0\"",
  "keyword": "When ",
  "line": 190
});
formatter.step({
  "name": "the response should be 200",
  "keyword": "Then ",
  "line": 191
});
formatter.step({
  "name": "the body should be JSON:",
  "keyword": "And ",
  "line": 192,
  "doc_string": {
    "value": " [{\n    \"id\" : 2,\n    \"createdAt\" : \"{{created_timestamp}}\",\n    \"group\" : \"com.example.cucumber\",\n    \"name\" : \"cucumber-artifact\",\n    \"version\" : \"1.0.2\",\n    \"sourceUrl\" : \"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.2/cucumber-artifact-1.0.2.jar\"\n  },\n  {\n    \"id\" : 1,\n    \"createdAt\" : \"{{created_timestamp}}\",\n    \"group\" : \"com.example.cucumber\",\n    \"name\" : \"cucumber-artifact\",\n    \"version\" : \"1.0.1\",\n    \"sourceUrl\" : \"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.1/cucumber-artifact-1.0.1.jar\"\n  }]",
    "line": 193,
    "content_type": ""
  }
});
formatter.match({
  "location": "ArtifactSteps.groovy:13"
});
formatter.result({
  "duration": 3721000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/api/artifacts?query\u003d1.0",
      "offset": 7
    }
  ],
  "location": "HttpSteps.groovy:16"
});
formatter.result({
  "duration": 17978000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:73"
});
formatter.result({
  "duration": 99000,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:82"
});
formatter.result({
  "duration": 1006000,
  "status": "passed"
});
formatter.after({
  "duration": 8638000,
  "status": "passed"
});
formatter.after({
  "duration": 29000,
  "status": "passed"
});
formatter.before({
  "duration": 285349000,
  "status": "passed"
});
formatter.before({
  "duration": 73000,
  "status": "passed"
});
formatter.scenario({
  "id": "artifact-read-apis;fetching-an-artifact-by-name-query",
  "tags": [
    {
      "name": "@query",
      "line": 212
    },
    {
      "name": "@freezetime",
      "line": 212
    }
  ],
  "description": "",
  "name": "Fetching an artifact by name query",
  "keyword": "Scenario",
  "line": 213,
  "type": "scenario"
});
formatter.step({
  "name": "there are artifacts",
  "keyword": "Given ",
  "line": 215
});
formatter.step({
  "name": "I GET \"/api/artifacts?query\u003dcucumber-artifact\"",
  "keyword": "When ",
  "line": 216
});
formatter.step({
  "name": "the response should be 200",
  "keyword": "Then ",
  "line": 217
});
formatter.step({
  "name": "the body should be JSON:",
  "keyword": "And ",
  "line": 218,
  "doc_string": {
    "value": " [{\n    \"id\" : 2,\n    \"createdAt\" : \"{{created_timestamp}}\",\n    \"group\" : \"com.example.cucumber\",\n    \"name\" : \"cucumber-artifact\",\n    \"version\" : \"1.0.2\",\n    \"sourceUrl\" : \"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.2/cucumber-artifact-1.0.2.jar\"\n  },\n  {\n    \"id\" : 1,\n    \"createdAt\" : \"{{created_timestamp}}\",\n    \"group\" : \"com.example.cucumber\",\n    \"name\" : \"cucumber-artifact\",\n    \"version\" : \"1.0.1\",\n    \"sourceUrl\" : \"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.1/cucumber-artifact-1.0.1.jar\"\n  }]",
    "line": 219,
    "content_type": ""
  }
});
formatter.match({
  "location": "ArtifactSteps.groovy:13"
});
formatter.result({
  "duration": 3941000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/api/artifacts?query\u003dcucumber-artifact",
      "offset": 7
    }
  ],
  "location": "HttpSteps.groovy:16"
});
formatter.result({
  "duration": 21472000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:73"
});
formatter.result({
  "duration": 99000,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:82"
});
formatter.result({
  "duration": 1042000,
  "status": "passed"
});
formatter.after({
  "duration": 7803000,
  "status": "passed"
});
formatter.after({
  "duration": 18000,
  "status": "passed"
});
formatter.before({
  "duration": 287106000,
  "status": "passed"
});
formatter.before({
  "duration": 75000,
  "status": "passed"
});
formatter.scenario({
  "id": "artifact-read-apis;fetching-an-artifact-by-partial-name-query",
  "tags": [
    {
      "name": "@query",
      "line": 239
    },
    {
      "name": "@freezetime",
      "line": 239
    }
  ],
  "description": "",
  "name": "Fetching an artifact by partial name query",
  "keyword": "Scenario",
  "line": 240,
  "type": "scenario"
});
formatter.step({
  "name": "there are artifacts",
  "keyword": "Given ",
  "line": 242
});
formatter.step({
  "name": "I GET \"/api/artifacts?query\u003dcucumber\"",
  "keyword": "When ",
  "line": 243
});
formatter.step({
  "name": "the response should be 200",
  "keyword": "Then ",
  "line": 244
});
formatter.step({
  "name": "the body should be JSON:",
  "keyword": "And ",
  "line": 245,
  "doc_string": {
    "value": " [{\n    \"id\" : 2,\n    \"createdAt\" : \"{{created_timestamp}}\",\n    \"group\" : \"com.example.cucumber\",\n    \"name\" : \"cucumber-artifact\",\n    \"version\" : \"1.0.2\",\n    \"sourceUrl\" : \"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.2/cucumber-artifact-1.0.2.jar\"\n  },\n  {\n    \"id\" : 1,\n    \"createdAt\" : \"{{created_timestamp}}\",\n    \"group\" : \"com.example.cucumber\",\n    \"name\" : \"cucumber-artifact\",\n    \"version\" : \"1.0.1\",\n    \"sourceUrl\" : \"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.1/cucumber-artifact-1.0.1.jar\"\n  }]",
    "line": 246,
    "content_type": ""
  }
});
formatter.match({
  "location": "ArtifactSteps.groovy:13"
});
formatter.result({
  "duration": 3639000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/api/artifacts?query\u003dcucumber",
      "offset": 7
    }
  ],
  "location": "HttpSteps.groovy:16"
});
formatter.result({
  "duration": 18142000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:73"
});
formatter.result({
  "duration": 102000,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:82"
});
formatter.result({
  "duration": 1212000,
  "status": "passed"
});
formatter.after({
  "duration": 8308000,
  "status": "passed"
});
formatter.after({
  "duration": 22000,
  "status": "passed"
});
formatter.before({
  "duration": 288242000,
  "status": "passed"
});
formatter.before({
  "duration": 74000,
  "status": "passed"
});
formatter.scenario({
  "id": "artifact-read-apis;fetching-an-artifact-by-group-query",
  "tags": [
    {
      "name": "@query",
      "line": 266
    },
    {
      "name": "@freezetime",
      "line": 266
    }
  ],
  "description": "",
  "name": "Fetching an artifact by group query",
  "keyword": "Scenario",
  "line": 267,
  "type": "scenario"
});
formatter.step({
  "name": "there are artifacts",
  "keyword": "Given ",
  "line": 269
});
formatter.step({
  "name": "I GET \"/api/artifacts?query\u003dcom.example.cucumber\"",
  "keyword": "When ",
  "line": 270
});
formatter.step({
  "name": "the response should be 200",
  "keyword": "Then ",
  "line": 271
});
formatter.step({
  "name": "the body should be JSON:",
  "keyword": "And ",
  "line": 272,
  "doc_string": {
    "value": " [{\n    \"id\" : 2,\n    \"createdAt\" : \"{{created_timestamp}}\",\n    \"group\" : \"com.example.cucumber\",\n    \"name\" : \"cucumber-artifact\",\n    \"version\" : \"1.0.2\",\n    \"sourceUrl\" : \"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.2/cucumber-artifact-1.0.2.jar\"\n  },\n  {\n    \"id\" : 1,\n    \"createdAt\" : \"{{created_timestamp}}\",\n    \"group\" : \"com.example.cucumber\",\n    \"name\" : \"cucumber-artifact\",\n    \"version\" : \"1.0.1\",\n    \"sourceUrl\" : \"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.1/cucumber-artifact-1.0.1.jar\"\n  }]",
    "line": 273,
    "content_type": ""
  }
});
formatter.match({
  "location": "ArtifactSteps.groovy:13"
});
formatter.result({
  "duration": 4033000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/api/artifacts?query\u003dcom.example.cucumber",
      "offset": 7
    }
  ],
  "location": "HttpSteps.groovy:16"
});
formatter.result({
  "duration": 24099000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:73"
});
formatter.result({
  "duration": 110000,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:82"
});
formatter.result({
  "duration": 1211000,
  "status": "passed"
});
formatter.after({
  "duration": 7317000,
  "status": "passed"
});
formatter.after({
  "duration": 18000,
  "status": "passed"
});
formatter.before({
  "duration": 300948000,
  "status": "passed"
});
formatter.before({
  "duration": 90000,
  "status": "passed"
});
formatter.scenario({
  "id": "artifact-read-apis;fetching-an-artifact-by-partial-group-query",
  "tags": [
    {
      "name": "@query",
      "line": 293
    },
    {
      "name": "@freezetime",
      "line": 293
    }
  ],
  "description": "",
  "name": "Fetching an artifact by partial group query",
  "keyword": "Scenario",
  "line": 294,
  "type": "scenario"
});
formatter.step({
  "name": "there are artifacts",
  "keyword": "Given ",
  "line": 296
});
formatter.step({
  "name": "I GET \"/api/artifacts?query\u003dexample\"",
  "keyword": "When ",
  "line": 297
});
formatter.step({
  "name": "the response should be 200",
  "keyword": "Then ",
  "line": 298
});
formatter.step({
  "name": "the body should be JSON:",
  "keyword": "And ",
  "line": 299,
  "doc_string": {
    "value": " [{\n    \"id\" : 2,\n    \"createdAt\" : \"{{created_timestamp}}\",\n    \"group\" : \"com.example.cucumber\",\n    \"name\" : \"cucumber-artifact\",\n    \"version\" : \"1.0.2\",\n    \"sourceUrl\" : \"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.2/cucumber-artifact-1.0.2.jar\"\n  },\n  {\n    \"id\" : 1,\n    \"createdAt\" : \"{{created_timestamp}}\",\n    \"group\" : \"com.example.cucumber\",\n    \"name\" : \"cucumber-artifact\",\n    \"version\" : \"1.0.1\",\n    \"sourceUrl\" : \"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.1/cucumber-artifact-1.0.1.jar\"\n  }]",
    "line": 300,
    "content_type": ""
  }
});
formatter.match({
  "location": "ArtifactSteps.groovy:13"
});
formatter.result({
  "duration": 3409000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/api/artifacts?query\u003dexample",
      "offset": 7
    }
  ],
  "location": "HttpSteps.groovy:16"
});
formatter.result({
  "duration": 19122000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:73"
});
formatter.result({
  "duration": 101000,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:82"
});
formatter.result({
  "duration": 955000,
  "status": "passed"
});
formatter.after({
  "duration": 7340000,
  "status": "passed"
});
formatter.after({
  "duration": 17000,
  "status": "passed"
});
formatter.before({
  "duration": 333291000,
  "status": "passed"
});
formatter.before({
  "duration": 65000,
  "status": "passed"
});
formatter.scenario({
  "id": "artifact-read-apis;fetching-an-artifact-by-version-query-and-pagination-parameters",
  "tags": [
    {
      "name": "@query",
      "line": 319
    },
    {
      "name": "@freezetime",
      "line": 319
    }
  ],
  "description": "",
  "name": "Fetching an artifact by version query and pagination parameters",
  "keyword": "Scenario",
  "line": 320,
  "type": "scenario"
});
formatter.step({
  "name": "there are artifacts",
  "keyword": "Given ",
  "line": 322
});
formatter.step({
  "name": "I GET \"/api/artifacts?query\u003d1.0\u0026pageNumber\u003d0\u0026perPageSize\u003d3\"",
  "keyword": "When ",
  "line": 323
});
formatter.step({
  "name": "the response should be 200",
  "keyword": "Then ",
  "line": 324
});
formatter.step({
  "name": "the body should be JSON:",
  "keyword": "And ",
  "line": 325,
  "doc_string": {
    "value": " [{\n    \"id\" : 2,\n    \"createdAt\" : \"{{created_timestamp}}\",\n    \"group\" : \"com.example.cucumber\",\n    \"name\" : \"cucumber-artifact\",\n    \"version\" : \"1.0.2\",\n    \"sourceUrl\" : \"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.2/cucumber-artifact-1.0.2.jar\"\n  },\n  {\n    \"id\" : 1,\n    \"createdAt\" : \"{{created_timestamp}}\",\n    \"group\" : \"com.example.cucumber\",\n    \"name\" : \"cucumber-artifact\",\n    \"version\" : \"1.0.1\",\n    \"sourceUrl\" : \"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.1/cucumber-artifact-1.0.1.jar\"\n  }]",
    "line": 326,
    "content_type": ""
  }
});
formatter.match({
  "location": "ArtifactSteps.groovy:13"
});
formatter.result({
  "duration": 4705000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/api/artifacts?query\u003d1.0\u0026pageNumber\u003d0\u0026perPageSize\u003d3",
      "offset": 7
    }
  ],
  "location": "HttpSteps.groovy:16"
});
formatter.result({
  "duration": 21326000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:73"
});
formatter.result({
  "duration": 99000,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:82"
});
formatter.result({
  "duration": 963000,
  "status": "passed"
});
formatter.after({
  "duration": 7824000,
  "status": "passed"
});
formatter.after({
  "duration": 17000,
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
  "duration": 318821000,
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
  "duration": 3363000,
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
  "duration": 13587000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "405",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:73"
});
formatter.result({
  "duration": 97000,
  "status": "passed"
});
formatter.after({
  "duration": 7737000,
  "status": "passed"
});
formatter.uri("api/config.feature");
formatter.feature({
  "id": "deploydb-config-apis",
  "description": "\nAs a DeployDB administrator\nI should be able to update DeployDB configuration",
  "name": "DeployDB config APIs",
  "keyword": "Feature",
  "line": 1
});
formatter.before({
  "duration": 281394000,
  "status": "passed"
});
formatter.scenario({
  "id": "deploydb-config-apis;when-the-system-is-idle,-reloading-the-shall-succeed",
  "description": "",
  "name": "When the system is idle, reloading the shall succeed",
  "keyword": "Scenario",
  "line": 7,
  "type": "scenario"
});
formatter.step({
  "name": "DeployDb configuration directory path is \"./config\"",
  "keyword": "Given ",
  "line": 9
});
formatter.step({
  "name": "I POST to \"/tasks/configReload\" from the admin app",
  "keyword": "When ",
  "line": 10
});
formatter.step({
  "name": "the response should be 200",
  "keyword": "Then ",
  "line": 11
});
formatter.step({
  "name": "the response body should be:",
  "keyword": "And ",
  "line": 12,
  "doc_string": {
    "value": "Done!",
    "line": 13,
    "content_type": ""
  }
});
formatter.match({
  "arguments": [
    {
      "val": "./config",
      "offset": 42
    }
  ],
  "location": "HttpSteps.groovy:96"
});
formatter.result({
  "duration": 947000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/tasks/configReload",
      "offset": 11
    }
  ],
  "location": "HttpSteps.groovy:56"
});
formatter.result({
  "duration": 80371000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:73"
});
formatter.result({
  "duration": 119000,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:77"
});
formatter.result({
  "duration": 1500000,
  "status": "passed"
});
formatter.after({
  "duration": 7536000,
  "status": "passed"
});
formatter.before({
  "duration": 277967000,
  "status": "passed"
});
formatter.scenario({
  "id": "deploydb-config-apis;if-deployments-are-not-verified-i.e.-are-in-progress,-then-attempt-to-reload",
  "description": "        config should fail. A deployment is considered as in progress, if the status\n        is NOT SUCCESS or FAILED",
  "name": "If deployments are NOT verified i.e. are in progress, then attempt to reload",
  "keyword": "Scenario",
  "line": 18,
  "type": "scenario"
});
formatter.step({
  "name": "there is a deployment",
  "keyword": "Given ",
  "line": 22
});
formatter.step({
  "name": "I POST to \"/tasks/configReload\" from the admin app",
  "keyword": "When ",
  "line": 23
});
formatter.step({
  "name": "the response should be 200",
  "keyword": "Then ",
  "line": 24
});
formatter.step({
  "name": "the response body should be:",
  "keyword": "And ",
  "line": 25,
  "doc_string": {
    "value": "Failed: Configuration reload is not allowed while deployments are in progress",
    "line": 26,
    "content_type": ""
  }
});
formatter.match({
  "location": "DeploymentSteps.groovy:14"
});
formatter.result({
  "duration": 5563000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/tasks/configReload",
      "offset": 11
    }
  ],
  "location": "HttpSteps.groovy:56"
});
formatter.result({
  "duration": 15008000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:73"
});
formatter.result({
  "duration": 98000,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:77"
});
formatter.result({
  "duration": 358000,
  "status": "passed"
});
formatter.after({
  "duration": 8480000,
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
  "duration": 268774000,
  "status": "passed"
});
formatter.before({
  "duration": 75000,
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
  "location": "DeploymentSteps.groovy:14"
});
formatter.result({
  "duration": 4710000,
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
  "duration": 29324000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:73"
});
formatter.result({
  "duration": 86000,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:82"
});
formatter.result({
  "duration": 1279000,
  "status": "passed"
});
formatter.after({
  "duration": 7458000,
  "status": "passed"
});
formatter.after({
  "duration": 22000,
  "status": "passed"
});
formatter.before({
  "duration": 295473000,
  "status": "passed"
});
formatter.before({
  "duration": 62000,
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
  "location": "DeploymentSteps.groovy:14"
});
formatter.result({
  "duration": 4170000,
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
  "duration": 20658000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:73"
});
formatter.result({
  "duration": 97000,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:82"
});
formatter.result({
  "duration": 1144000,
  "status": "passed"
});
formatter.after({
  "duration": 7936000,
  "status": "passed"
});
formatter.after({
  "duration": 18000,
  "status": "passed"
});
formatter.before({
  "duration": 277282000,
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
  "duration": 16059000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "404",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:73"
});
formatter.result({
  "duration": 129000,
  "status": "passed"
});
formatter.after({
  "duration": 6658000,
  "status": "passed"
});
formatter.before({
  "duration": 277617000,
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
  "duration": 16593000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:73"
});
formatter.result({
  "duration": 89000,
  "status": "passed"
});
formatter.after({
  "duration": 8347000,
  "status": "passed"
});
formatter.before({
  "duration": 326478000,
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
  "location": "DeploymentSteps.groovy:14"
});
formatter.result({
  "duration": 3974000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/api/deployments/1",
      "offset": 7
    }
  ],
  "location": "HttpSteps.groovy:60"
});
formatter.result({
  "duration": 12835000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "406",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:73"
});
formatter.result({
  "duration": 117000,
  "status": "passed"
});
formatter.after({
  "duration": 7725000,
  "status": "passed"
});
formatter.before({
  "duration": 253036000,
  "status": "passed"
});
formatter.before({
  "duration": 422000,
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
  "location": "DeploymentSteps.groovy:50"
});
formatter.result({
  "duration": 6271000,
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
  "duration": 22295000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:73"
});
formatter.result({
  "duration": 190000,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:82"
});
formatter.result({
  "duration": 2387000,
  "status": "passed"
});
formatter.after({
  "duration": 6827000,
  "status": "passed"
});
formatter.after({
  "duration": 183000,
  "status": "passed"
});
formatter.before({
  "duration": 259133000,
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
  "duration": 15231000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "404",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:73"
});
formatter.result({
  "duration": 94000,
  "status": "passed"
});
formatter.after({
  "duration": 7414000,
  "status": "passed"
});
formatter.before({
  "duration": 257810000,
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
  "duration": 14364000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:73"
});
formatter.result({
  "duration": 92000,
  "status": "passed"
});
formatter.after({
  "duration": 7223000,
  "status": "passed"
});
formatter.before({
  "duration": 248708000,
  "status": "passed"
});
formatter.before({
  "duration": 77000,
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
  "location": "DeploymentSteps.groovy:14"
});
formatter.result({
  "duration": 3869000,
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
  "duration": 23070000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:73"
});
formatter.result({
  "duration": 103000,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:82"
});
formatter.result({
  "duration": 1137000,
  "status": "passed"
});
formatter.after({
  "duration": 7526000,
  "status": "passed"
});
formatter.after({
  "duration": 31000,
  "status": "passed"
});
formatter.before({
  "duration": 256684000,
  "status": "passed"
});
formatter.before({
  "duration": 68000,
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
  "location": "DeploymentSteps.groovy:50"
});
formatter.result({
  "duration": 7515000,
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
  "duration": 24662000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:73"
});
formatter.result({
  "duration": 98000,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:82"
});
formatter.result({
  "duration": 1111000,
  "status": "passed"
});
formatter.after({
  "duration": 7349000,
  "status": "passed"
});
formatter.after({
  "duration": 15000,
  "status": "passed"
});
formatter.before({
  "duration": 251796000,
  "status": "passed"
});
formatter.scenario({
  "id": "deployment-read-apis;fetching-an-deployment-by-pagenumber\u003d0-and-perpagesize\u003d0-returns-0-deployments",
  "tags": [
    {
      "name": "@error",
      "line": 247
    }
  ],
  "description": "",
  "name": "Fetching an deployment by pageNumber\u003d0 and perPageSize\u003d0 returns 0 deployments",
  "keyword": "Scenario",
  "line": 248,
  "type": "scenario"
});
formatter.step({
  "name": "there are deployments",
  "keyword": "Given ",
  "line": 250
});
formatter.step({
  "name": "I GET \"/api/deployments?pageNumber\u003d0\u0026perPageSize\u003d0\"",
  "keyword": "When ",
  "line": 251
});
formatter.step({
  "name": "the response should be 400",
  "keyword": "Then ",
  "line": 252
});
formatter.match({
  "location": "DeploymentSteps.groovy:50"
});
formatter.result({
  "duration": 5907000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/api/deployments?pageNumber\u003d0\u0026perPageSize\u003d0",
      "offset": 7
    }
  ],
  "location": "HttpSteps.groovy:16"
});
formatter.result({
  "duration": 15501000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:73"
});
formatter.result({
  "duration": 103000,
  "status": "passed"
});
formatter.after({
  "duration": 7585000,
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
  "duration": 259296000,
  "status": "passed"
});
formatter.before({
  "duration": 67000,
  "status": "passed"
});
formatter.scenario({
  "id": "deployment-update-apis;updating-a-deployment-with-a-status-completed",
  "tags": [
    {
      "name": "@freezetime",
      "line": 7
    }
  ],
  "description": "",
  "name": "Updating a deployment with a status COMPLETED",
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
  "name": "I PATCH \"/api/deployments/1\" with:",
  "keyword": "When ",
  "line": 11,
  "doc_string": {
    "value": "  {\n    \"status\" : \"COMPLETED\"\n  }",
    "line": 12,
    "content_type": ""
  }
});
formatter.step({
  "name": "the response should be 200",
  "keyword": "Then ",
  "line": 17
});
formatter.step({
  "name": "the body should be JSON:",
  "keyword": "And ",
  "line": 18,
  "doc_string": {
    "value": "  {\n    \"id\" : 1,\n    \"artifact\" : {\n      \"id\" : 1,\n      \"group\" : \"com.example.cucumber\",\n      \"name\" : \"cucumber-artifact\",\n      \"version\" : \"1.0.1\",\n      \"sourceUrl\" : \"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.1/cucumber-artifact-1.0.1.jar\",\n      \"createdAt\" : \"{{created_timestamp}}\"\n    },\n    \"environment\" : \"pre-prod\",\n    \"service\" : \"faas\",\n    \"status\" : \"COMPLETED\",\n    \"promotions\" : [{\n      \"id\" : 1,\n      \"promotion\" : \"jenkins-smoke\",\n      \"status\" : \"STARTED\",\n      \"infoUrl\" : null,\n      \"createdAt\" : \"{{created_timestamp}}\"\n     }],\n    \"createdAt\" : \"{{created_timestamp}}\"\n  }",
    "line": 19,
    "content_type": ""
  }
});
formatter.match({
  "location": "DeploymentSteps.groovy:14"
});
formatter.result({
  "duration": 3836000,
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
  "duration": 32618000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:73"
});
formatter.result({
  "duration": 199000,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:82"
});
formatter.result({
  "duration": 1192000,
  "status": "passed"
});
formatter.after({
  "duration": 44332000,
  "status": "passed"
});
formatter.after({
  "duration": 17000,
  "status": "passed"
});
formatter.before({
  "duration": 248653000,
  "status": "passed"
});
formatter.before({
  "duration": 43000,
  "status": "passed"
});
formatter.scenario({
  "id": "deployment-update-apis;updating-a-deployment-with-a-status-failed",
  "tags": [
    {
      "name": "@freezetime",
      "line": 45
    }
  ],
  "description": "",
  "name": "Updating a deployment with a status FAILED",
  "keyword": "Scenario",
  "line": 46,
  "type": "scenario"
});
formatter.step({
  "name": "there is a deployment",
  "keyword": "Given ",
  "line": 48
});
formatter.step({
  "name": "I PATCH \"/api/deployments/1\" with:",
  "keyword": "When ",
  "line": 49,
  "doc_string": {
    "value": "  {\n    \"status\" : \"FAILED\"\n  }",
    "line": 50,
    "content_type": ""
  }
});
formatter.step({
  "name": "the response should be 200",
  "keyword": "Then ",
  "line": 55
});
formatter.step({
  "name": "the body should be JSON:",
  "keyword": "And ",
  "line": 56,
  "doc_string": {
    "value": "  {\n    \"id\" : 1,\n    \"artifact\" : {\n      \"id\" : 1,\n      \"group\" : \"com.example.cucumber\",\n      \"name\" : \"cucumber-artifact\",\n      \"version\" : \"1.0.1\",\n      \"sourceUrl\" : \"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.1/cucumber-artifact-1.0.1.jar\",\n      \"createdAt\" : \"{{created_timestamp}}\"\n    },\n    \"environment\" : \"pre-prod\",\n    \"service\" : \"faas\",\n    \"status\" : \"FAILED\",\n    \"promotions\" : [{\n      \"id\" : 1,\n      \"promotion\" : \"jenkins-smoke\",\n      \"status\" : \"STARTED\",\n      \"infoUrl\" : null,\n      \"createdAt\" : \"{{created_timestamp}}\"\n     }],\n    \"createdAt\" : \"{{created_timestamp}}\"\n  }",
    "line": 57,
    "content_type": ""
  }
});
formatter.match({
  "location": "DeploymentSteps.groovy:14"
});
formatter.result({
  "duration": 3813000,
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
  "duration": 23075000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:73"
});
formatter.result({
  "duration": 90000,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:82"
});
formatter.result({
  "duration": 897000,
  "status": "passed"
});
formatter.after({
  "duration": 7450000,
  "status": "passed"
});
formatter.after({
  "duration": 18000,
  "status": "passed"
});
formatter.before({
  "duration": 236157000,
  "status": "passed"
});
formatter.scenario({
  "id": "deployment-update-apis;updating-a-deployment-with-invalid-status-transition",
  "description": "",
  "name": "Updating a deployment with invalid status transition",
  "keyword": "Scenario",
  "line": 83,
  "type": "scenario"
});
formatter.step({
  "name": "there is a deployment",
  "keyword": "Given ",
  "line": 85
});
formatter.step({
  "name": "I PATCH \"/api/deployments/1\" with:",
  "keyword": "When ",
  "line": 86,
  "doc_string": {
    "value": "  {\n    \"status\" : \"NOT_STARTED\"\n  }",
    "line": 87,
    "content_type": ""
  }
});
formatter.step({
  "name": "the response should be 406",
  "keyword": "Then ",
  "line": 92
});
formatter.match({
  "location": "DeploymentSteps.groovy:14"
});
formatter.result({
  "duration": 3943000,
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
  "duration": 17053000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "406",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:73"
});
formatter.result({
  "duration": 104000,
  "status": "passed"
});
formatter.after({
  "duration": 7318000,
  "status": "passed"
});
formatter.before({
  "duration": 237916000,
  "status": "passed"
});
formatter.scenario({
  "id": "deployment-update-apis;updating-a-deployment-with-an-malformed-status",
  "tags": [
    {
      "name": "@error",
      "line": 95
    }
  ],
  "description": "",
  "name": "Updating a deployment with an malformed status",
  "keyword": "Scenario",
  "line": 96,
  "type": "scenario"
});
formatter.step({
  "name": "there is a deployment",
  "keyword": "Given ",
  "line": 98
});
formatter.step({
  "name": "I PATCH \"/api/deployments/1\" with:",
  "keyword": "When ",
  "line": 99,
  "doc_string": {
    "value": "  {\n    \"status\" : \"INVALID\"\n  }",
    "line": 100,
    "content_type": ""
  }
});
formatter.step({
  "name": "the response should be 400",
  "keyword": "Then ",
  "line": 105
});
formatter.match({
  "location": "DeploymentSteps.groovy:14"
});
formatter.result({
  "duration": 6896000,
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
  "duration": 15871000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:73"
});
formatter.result({
  "duration": 100000,
  "status": "passed"
});
formatter.after({
  "duration": 8596000,
  "status": "passed"
});
formatter.before({
  "duration": 243188000,
  "status": "passed"
});
formatter.scenario({
  "id": "deployment-update-apis;updating-a-deployment-that-doesn\u0027t-exist",
  "tags": [
    {
      "name": "@error",
      "line": 108
    }
  ],
  "description": "",
  "name": "Updating a deployment that doesn\u0027t exist",
  "keyword": "Scenario",
  "line": 109,
  "type": "scenario"
});
formatter.step({
  "name": "I PATCH \"/api/deployments/1\" with:",
  "keyword": "When ",
  "line": 111,
  "doc_string": {
    "value": "  {\n    \"status\" : \"FAILED\"\n  }",
    "line": 112,
    "content_type": ""
  }
});
formatter.step({
  "name": "the response should be 404",
  "keyword": "Then ",
  "line": 117
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
  "duration": 14838000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "404",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:73"
});
formatter.result({
  "duration": 100000,
  "status": "passed"
});
formatter.after({
  "duration": 7276000,
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
  "duration": 232364000,
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
  "duration": 10229000,
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
  "duration": 14737000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:73"
});
formatter.result({
  "duration": 86000,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:82"
});
formatter.result({
  "duration": 869000,
  "status": "passed"
});
formatter.after({
  "duration": 7341000,
  "status": "passed"
});
formatter.before({
  "duration": 242652000,
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
  "duration": 5518000,
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
  "duration": 14831000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:73"
});
formatter.result({
  "duration": 109000,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:82"
});
formatter.result({
  "duration": 908000,
  "status": "passed"
});
formatter.after({
  "duration": 7407000,
  "status": "passed"
});
formatter.before({
  "duration": 235645000,
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
  "duration": 13459000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "404",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:73"
});
formatter.result({
  "duration": 96000,
  "status": "passed"
});
formatter.after({
  "duration": 6404000,
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
  "duration": 250378000,
  "status": "passed"
});
formatter.before({
  "duration": 70000,
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
  "duration": 7114000,
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
  "duration": 19627000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:73"
});
formatter.result({
  "duration": 99000,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:82"
});
formatter.result({
  "duration": 1442000,
  "status": "passed"
});
formatter.after({
  "duration": 6283000,
  "status": "passed"
});
formatter.after({
  "duration": 16000,
  "status": "passed"
});
formatter.before({
  "duration": 239724000,
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
  "duration": 15845000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "404",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:73"
});
formatter.result({
  "duration": 132000,
  "status": "passed"
});
formatter.after({
  "duration": 9259000,
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
  "duration": 262443000,
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
  "duration": 35410000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:73"
});
formatter.result({
  "duration": 104000,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:82"
});
formatter.result({
  "duration": 767000,
  "status": "passed"
});
formatter.after({
  "duration": 7633000,
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
  "duration": 235682000,
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
  "duration": 7000000,
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
  "duration": 16310000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:73"
});
formatter.result({
  "duration": 90000,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:82"
});
formatter.result({
  "duration": 745000,
  "status": "passed"
});
formatter.after({
  "duration": 6457000,
  "status": "passed"
});
formatter.before({
  "duration": 238789000,
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
  "duration": 4473000,
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
  "duration": 14799000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:73"
});
formatter.result({
  "duration": 111000,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:82"
});
formatter.result({
  "duration": 935000,
  "status": "passed"
});
formatter.after({
  "duration": 6789000,
  "status": "passed"
});
formatter.before({
  "duration": 233268000,
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
  "duration": 17093000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "404",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:73"
});
formatter.result({
  "duration": 113000,
  "status": "passed"
});
formatter.after({
  "duration": 7256000,
  "status": "passed"
});
formatter.uri("api/promotion/creating.feature");
formatter.feature({
  "id": "promotion-result-apis",
  "description": "\nAs a RESTful client or user\nI should be able to add Promotion result for a Deployment in the system",
  "name": "Promotion Result APIs",
  "keyword": "Feature",
  "line": 1
});
formatter.before({
  "duration": 246248000,
  "status": "passed"
});
formatter.before({
  "duration": 72000,
  "status": "passed"
});
formatter.scenario({
  "id": "promotion-result-apis;adding-a-result-for-a-promotion-associated-with-a-deployment",
  "tags": [
    {
      "name": "@freezetime",
      "line": 7
    }
  ],
  "description": "",
  "name": "Adding a result for a Promotion associated with a Deployment",
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
  "name": "I POST to \"/api/deployments/1/promotions\" with:",
  "keyword": "When ",
  "line": 11,
  "doc_string": {
    "value": "  {\n    \"name\"  : \"jenkins-smoke\",\n    \"status\" : \"SUCCESS\",\n    \"infoUrl\" : \"http://local.lookout.com/jenkins/job-id/2/results\"\n  }",
    "line": 12,
    "content_type": ""
  }
});
formatter.step({
  "name": "the response should be 201",
  "keyword": "Then ",
  "line": 19
});
formatter.step({
  "name": "the body should be JSON:",
  "keyword": "And ",
  "line": 20,
  "doc_string": {
    "value": "  {\n    \"id\" : 1,\n    \"promotion\" : \"jenkins-smoke\",\n    \"status\" : \"SUCCESS\",\n    \"infoUrl\" : \"http://local.lookout.com/jenkins/job-id/2/results\",\n    \"createdAt\" : \"{{created_timestamp}}\"\n  }",
    "line": 21,
    "content_type": ""
  }
});
formatter.match({
  "location": "DeploymentSteps.groovy:14"
});
formatter.result({
  "duration": 3595000,
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
  "duration": 30704000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "201",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:73"
});
formatter.result({
  "duration": 92000,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:82"
});
formatter.result({
  "duration": 731000,
  "status": "passed"
});
formatter.after({
  "duration": 7415000,
  "status": "passed"
});
formatter.after({
  "duration": 15000,
  "status": "passed"
});
formatter.before({
  "duration": 245868000,
  "status": "passed"
});
formatter.scenario({
  "id": "promotion-result-apis;adding-a-result-with-invalid-status-for-a-promotion-associated-with-a-deployment",
  "description": "",
  "name": "Adding a result with invalid status for a Promotion associated with a Deployment",
  "keyword": "Scenario",
  "line": 32,
  "type": "scenario"
});
formatter.step({
  "name": "there is a deployment",
  "keyword": "Given ",
  "line": 34
});
formatter.step({
  "name": "I POST to \"/api/deployments/1/promotions\" with:",
  "keyword": "When ",
  "line": 35,
  "doc_string": {
    "value": "  {\n    \"name\"  : \"jenkins-smoke\",\n    \"status\" : \"CREATED\",\n    \"infoUrl\" : \"http://local.lookout.com/jenkins/job-id/2/results\"\n  }",
    "line": 36,
    "content_type": ""
  }
});
formatter.step({
  "name": "the response should be 406",
  "keyword": "Then ",
  "line": 43
});
formatter.match({
  "location": "DeploymentSteps.groovy:14"
});
formatter.result({
  "duration": 4201000,
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
  "duration": 19263000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "406",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:73"
});
formatter.result({
  "duration": 90000,
  "status": "passed"
});
formatter.after({
  "duration": 6944000,
  "status": "passed"
});
formatter.before({
  "duration": 243624000,
  "status": "passed"
});
formatter.scenario({
  "id": "promotion-result-apis;adding-promotion-result-for-a-deployment-that-doesn\u0027t-exist",
  "description": "",
  "name": "Adding Promotion result for a Deployment that doesn\u0027t exist",
  "keyword": "Scenario",
  "line": 46,
  "type": "scenario"
});
formatter.step({
  "name": "I POST to \"/api/deployments/1/promotions\" with:",
  "keyword": "When ",
  "line": 48,
  "doc_string": {
    "value": "  {\n    \"name\"  : \"jenkins-smoke\",\n    \"status\" : \"SUCCESS\",\n    \"infoUrl\" : \"http://local.lookout.com/jenkins/job-id/2/results\"\n  }",
    "line": 49,
    "content_type": ""
  }
});
formatter.step({
  "name": "the response should be 404",
  "keyword": "Then ",
  "line": 56
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
  "duration": 15726000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "404",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:73"
});
formatter.result({
  "duration": 93000,
  "status": "passed"
});
formatter.after({
  "duration": 7781000,
  "status": "passed"
});
formatter.before({
  "duration": 238759000,
  "status": "passed"
});
formatter.scenario({
  "id": "promotion-result-apis;adding-a-result-for-a-promotion-which-is-not-associated-with-the-deployment",
  "tags": [
    {
      "name": "@error",
      "line": 59
    }
  ],
  "description": "",
  "name": "Adding a result for a Promotion which is not associated with the Deployment",
  "keyword": "Scenario",
  "line": 60,
  "type": "scenario"
});
formatter.step({
  "name": "I POST to \"/api/deployments/1/promotions\" with:",
  "keyword": "When ",
  "line": 62,
  "doc_string": {
    "value": "  {\n    \"name\"  : \"test-smoke\",\n    \"status\" : \"FAILED\",\n    \"infoUrl\" : \"http://local.lookout.com/jenkins/job-id/2/results\"\n  }",
    "line": 63,
    "content_type": ""
  }
});
formatter.step({
  "name": "the response should be 404",
  "keyword": "Then ",
  "line": 70
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
  "duration": 14312000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "404",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:73"
});
formatter.result({
  "duration": 81000,
  "status": "passed"
});
formatter.after({
  "duration": 6271000,
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
  "duration": 234125000,
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
  "duration": 4214000,
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
  "duration": 12926000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:73"
});
formatter.result({
  "duration": 82000,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:82"
});
formatter.result({
  "duration": 628000,
  "status": "passed"
});
formatter.after({
  "duration": 7276000,
  "status": "passed"
});
formatter.before({
  "duration": 266389000,
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
  "duration": 3703000,
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
  "duration": 13987000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:73"
});
formatter.result({
  "duration": 81000,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:82"
});
formatter.result({
  "duration": 683000,
  "status": "passed"
});
formatter.after({
  "duration": 8117000,
  "status": "passed"
});
formatter.before({
  "duration": 233088000,
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
  "duration": 12923000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "404",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:73"
});
formatter.result({
  "duration": 100000,
  "status": "passed"
});
formatter.after({
  "duration": 6635000,
  "status": "passed"
});
formatter.before({
  "duration": 225190000,
  "status": "passed"
});
formatter.before({
  "duration": 56000,
  "status": "passed"
});
formatter.scenario({
  "id": "promotion-read-apis;fetching-a-result-for-a-promotion-associated-with-a-deployment",
  "tags": [
    {
      "name": "@freezetime",
      "line": 51
    }
  ],
  "description": "",
  "name": "Fetching a result for a Promotion associated with a Deployment",
  "keyword": "Scenario",
  "line": 52,
  "type": "scenario"
});
formatter.step({
  "name": "there is a deployment",
  "keyword": "Given ",
  "line": 54
});
formatter.step({
  "name": "I GET \"/api/deployments/1/promotions/1\"",
  "keyword": "When ",
  "line": 55
});
formatter.step({
  "name": "the response should be 200",
  "keyword": "Then ",
  "line": 56
});
formatter.step({
  "name": "the body should be JSON:",
  "keyword": "And ",
  "line": 57,
  "doc_string": {
    "value": "  {\n    \"id\" : 1,\n    \"promotion\" : \"jenkins-smoke\",\n    \"status\" : \"STARTED\",\n    \"infoUrl\" : null,\n    \"createdAt\" : \"{{created_timestamp}}\"\n  }",
    "line": 58,
    "content_type": ""
  }
});
formatter.match({
  "location": "DeploymentSteps.groovy:14"
});
formatter.result({
  "duration": 4195000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/api/deployments/1/promotions/1",
      "offset": 7
    }
  ],
  "location": "HttpSteps.groovy:16"
});
formatter.result({
  "duration": 17631000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:73"
});
formatter.result({
  "duration": 83000,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:82"
});
formatter.result({
  "duration": 913000,
  "status": "passed"
});
formatter.after({
  "duration": 6548000,
  "status": "passed"
});
formatter.after({
  "duration": 14000,
  "status": "passed"
});
formatter.before({
  "duration": 238350000,
  "status": "passed"
});
formatter.scenario({
  "id": "promotion-read-apis;fetching-promotion-result-for-a-deployment-that-doesn\u0027t-exist",
  "description": "",
  "name": "Fetching Promotion result for a Deployment that doesn\u0027t exist",
  "keyword": "Scenario",
  "line": 69,
  "type": "scenario"
});
formatter.step({
  "name": "I GET \"/api/deployments/1/promotions/1\"",
  "keyword": "When ",
  "line": 71
});
formatter.step({
  "name": "the response should be 404",
  "keyword": "Then ",
  "line": 72
});
formatter.match({
  "arguments": [
    {
      "val": "/api/deployments/1/promotions/1",
      "offset": 7
    }
  ],
  "location": "HttpSteps.groovy:16"
});
formatter.result({
  "duration": 13334000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "404",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:73"
});
formatter.result({
  "duration": 114000,
  "status": "passed"
});
formatter.after({
  "duration": 6467000,
  "status": "passed"
});
formatter.before({
  "duration": 229101000,
  "status": "passed"
});
formatter.scenario({
  "id": "promotion-read-apis;fetching-a-result-for-a-promotion-which-is-not-associated-with-the-deployment",
  "tags": [
    {
      "name": "@error",
      "line": 75
    }
  ],
  "description": "",
  "name": "Fetching a result for a Promotion which is not associated with the Deployment",
  "keyword": "Scenario",
  "line": 76,
  "type": "scenario"
});
formatter.step({
  "name": "there is a deployment",
  "keyword": "Given ",
  "line": 78
});
formatter.step({
  "name": "I GET \"/api/deployments/1/promotions/5\"",
  "keyword": "When ",
  "line": 79
});
formatter.step({
  "name": "the response should be 404",
  "keyword": "Then ",
  "line": 80
});
formatter.match({
  "location": "DeploymentSteps.groovy:14"
});
formatter.result({
  "duration": 3782000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/api/deployments/1/promotions/5",
      "offset": 7
    }
  ],
  "location": "HttpSteps.groovy:16"
});
formatter.result({
  "duration": 15606000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "404",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:73"
});
formatter.result({
  "duration": 85000,
  "status": "passed"
});
formatter.after({
  "duration": 6433000,
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
  "duration": 223011000,
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
  "duration": 6695000,
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
  "duration": 13393000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:73"
});
formatter.result({
  "duration": 80000,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:82"
});
formatter.result({
  "duration": 805000,
  "status": "passed"
});
formatter.after({
  "duration": 7775000,
  "status": "passed"
});
formatter.before({
  "duration": 230355000,
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
  "duration": 5272000,
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
  "duration": 13241000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:73"
});
formatter.result({
  "duration": 85000,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:82"
});
formatter.result({
  "duration": 710000,
  "status": "passed"
});
formatter.after({
  "duration": 6511000,
  "status": "passed"
});
formatter.before({
  "duration": 227409000,
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
  "duration": 12092000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "404",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:73"
});
formatter.result({
  "duration": 80000,
  "status": "passed"
});
formatter.after({
  "duration": 6470000,
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
formatter.before({
  "duration": 271893000,
  "status": "passed"
});
formatter.before({
  "duration": 44000,
  "status": "passed"
});
formatter.scenario({
  "id": "webhook-invocation--when-deployment-is-completed;webhooks-should-be-invoked-when-deployment-is-completed",
  "tags": [
    {
      "name": "@freezetime",
      "line": 3
    },
    {
      "name": "@webhook",
      "line": 3
    }
  ],
  "description": "",
  "name": "Webhooks should be invoked when deployment is completed",
  "keyword": "Scenario",
  "line": 4,
  "type": "scenario"
});
formatter.step({
  "name": "a deployment webhook \"completed\" configuration:",
  "keyword": "Given ",
  "line": 5,
  "doc_string": {
    "value": "  deployment:\n    completed:\n      - http://localhost:10000/job/notify-deployment-started/build",
    "line": 6,
    "content_type": ""
  }
});
formatter.step({
  "name": "there is a deployment in \"STARTED\" state",
  "keyword": "And ",
  "line": 11
});
formatter.step({
  "name": "I PATCH \"/api/deployments/1\" with:",
  "keyword": "When ",
  "line": 12,
  "doc_string": {
    "value": "  {\n    \"status\" : \"COMPLETED\"\n  }",
    "line": 13,
    "content_type": ""
  }
});
formatter.step({
  "name": "the webhook should be invoked with the JSON:",
  "keyword": "Then ",
  "line": 18,
  "doc_string": {
    "value": "  {\n    \"id\" : 1,\n    \"artifact\" : {\n      \"id\" : 1,\n      \"group\" : \"com.example.cucumber\",\n      \"name\" : \"cucumber-artifact\",\n      \"version\" : \"1.0.1\",\n      \"sourceUrl\" : \"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.1/cucumber-artifact-1.0.1.jar\",\n      \"createdAt\" : \"{{created_timestamp}}\"\n    },\n    \"status\" : \"COMPLETED\",\n    \"service\" : \"faas\",\n    \"environment\" : \"pre-prod\",\n    \"createdAt\" : \"{{created_timestamp}}\"\n  }",
    "line": 19,
    "content_type": ""
  }
});
formatter.match({
  "arguments": [
    {
      "val": "deployment",
      "offset": 2
    },
    {
      "val": "completed",
      "offset": 22
    }
  ],
  "location": "WebhookSteps.groovy:24"
});
formatter.result({
  "duration": 14607000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "STARTED",
      "offset": 26
    }
  ],
  "location": "WebhookSteps.groovy:138"
});
formatter.result({
  "duration": 6106000,
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
  "duration": 29359000,
  "status": "passed"
});
formatter.match({
  "location": "WebhookSteps.groovy:96"
});
formatter.result({
  "duration": 1004430000,
  "status": "passed"
});
formatter.after({
  "duration": 9230000,
  "status": "passed"
});
formatter.after({
  "duration": 18000,
  "status": "passed"
});
formatter.before({
  "duration": 263381000,
  "status": "passed"
});
formatter.before({
  "duration": 45000,
  "status": "passed"
});
formatter.scenario({
  "id": "webhook-invocation--when-deployment-is-completed;environment-webhooks-should-be-invoked-when-artifacts-are-completed",
  "tags": [
    {
      "name": "@freezetime",
      "line": 38
    },
    {
      "name": "@webhook",
      "line": 38
    }
  ],
  "description": "",
  "name": "Environment webhooks should be invoked when artifacts are completed",
  "keyword": "Scenario",
  "line": 39,
  "type": "scenario"
});
formatter.step({
  "name": "an deployment environment webhook \"completed\" configuration named \"pre-prod\":",
  "keyword": "Given ",
  "line": 40,
  "doc_string": {
    "value": "description: \"DeployDB Primary Integration\"\nwebhooks:\n  deployment:\n    completed:\n      - http://localhost:10000/job/notify-deployment-started/build",
    "line": 41,
    "content_type": ""
  }
});
formatter.step({
  "name": "there is a deployment in \"STARTED\" state",
  "keyword": "And ",
  "line": 48
});
formatter.step({
  "name": "I PATCH \"/api/deployments/1\" with:",
  "keyword": "When ",
  "line": 49,
  "doc_string": {
    "value": "  {\n    \"status\" : \"COMPLETED\"\n  }",
    "line": 50,
    "content_type": ""
  }
});
formatter.step({
  "name": "the webhook should be invoked with the JSON:",
  "keyword": "Then ",
  "line": 55,
  "doc_string": {
    "value": "  {\n    \"id\" : 1,\n    \"artifact\" : {\n      \"id\" : 1,\n      \"group\" : \"com.example.cucumber\",\n      \"name\" : \"cucumber-artifact\",\n      \"version\" : \"1.0.1\",\n      \"sourceUrl\" : \"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.1/cucumber-artifact-1.0.1.jar\",\n      \"createdAt\" : \"{{created_timestamp}}\"\n    },\n    \"status\" : \"COMPLETED\",\n    \"service\" : \"faas\",\n    \"environment\" : \"pre-prod\",\n    \"createdAt\" : \"{{created_timestamp}}\"\n  }",
    "line": 56,
    "content_type": ""
  }
});
formatter.step({
  "name": "the webhook should have the headers:",
  "keyword": "And ",
  "line": 73,
  "rows": [
    {
      "cells": [
        "Header Name",
        "Value"
      ],
      "line": 74
    },
    {
      "cells": [
        "Content-Type",
        "application/vnd.deploydb.deploymentcompleted.v1+json"
      ],
      "line": 75
    }
  ]
});
formatter.match({
  "arguments": [
    {
      "val": "deployment",
      "offset": 3
    },
    {
      "val": "completed",
      "offset": 35
    },
    {
      "val": "pre-prod",
      "offset": 67
    }
  ],
  "location": "WebhookSteps.groovy:52"
});
formatter.result({
  "duration": 6412000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "STARTED",
      "offset": 26
    }
  ],
  "location": "WebhookSteps.groovy:138"
});
formatter.result({
  "duration": 3343000,
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
  "duration": 28915000,
  "status": "passed"
});
formatter.match({
  "location": "WebhookSteps.groovy:96"
});
formatter.result({
  "duration": 1001253000,
  "status": "passed"
});
formatter.match({
  "location": "WebhookSteps.groovy:175"
});
formatter.result({
  "duration": 4915000,
  "status": "passed"
});
formatter.after({
  "duration": 8743000,
  "status": "passed"
});
formatter.after({
  "duration": 17000,
  "status": "passed"
});
formatter.uri("api/webhook/deploymentCreated.feature");
formatter.feature({
  "id": "webhook-invocation--when-deployment-is-created",
  "description": "",
  "name": "Webhook invocation  when deployment is created",
  "keyword": "Feature",
  "line": 1
});
formatter.before({
  "duration": 262580000,
  "status": "passed"
});
formatter.before({
  "duration": 55000,
  "status": "passed"
});
formatter.scenario({
  "id": "webhook-invocation--when-deployment-is-created;webhooks-should-be-invoked-when-artifacts-are-created",
  "tags": [
    {
      "name": "@freezetime",
      "line": 3
    },
    {
      "name": "@webhook",
      "line": 3
    }
  ],
  "description": "",
  "name": "Webhooks should be invoked when artifacts are created",
  "keyword": "Scenario",
  "line": 4,
  "type": "scenario"
});
formatter.step({
  "name": "a deployment webhook \"created\" configuration:",
  "keyword": "Given ",
  "line": 5,
  "doc_string": {
    "value": "  deployment:\n    created:\n       - http://localhost:10000/job/notify-deployment-started/build",
    "line": 6,
    "content_type": ""
  }
});
formatter.step({
  "name": "promotions are configured",
  "keyword": "And ",
  "line": 11
});
formatter.step({
  "name": "an environment is configured",
  "keyword": "And ",
  "line": 12
});
formatter.step({
  "name": "a pipeline is configured",
  "keyword": "And ",
  "line": 13
});
formatter.step({
  "name": "a service is configured",
  "keyword": "And ",
  "line": 14
});
formatter.step({
  "name": "I POST to \"/api/artifacts\" with an artifact",
  "keyword": "When ",
  "line": 15
});
formatter.step({
  "name": "the webhook should be invoked with the JSON:",
  "keyword": "Then ",
  "line": 16,
  "doc_string": {
    "value": "  {\n    \"id\" : 1,\n    \"artifact\" : {\n      \"id\" : 1,\n      \"group\" : \"com.example.cucumber\",\n      \"name\" : \"cukes\",\n      \"version\" : \"1.0.1\",\n      \"sourceUrl\" : \"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.1/cucumber-artifact-1.0.1.jar\",\n      \"createdAt\" : \"{{created_timestamp}}\"\n    },\n    \"status\" : \"CREATED\",\n    \"service\" : \"faas\",\n    \"environment\" : \"integ\",\n    \"createdAt\" : \"{{created_timestamp}}\"\n  }",
    "line": 17,
    "content_type": ""
  }
});
formatter.step({
  "name": "the webhook should have the headers:",
  "keyword": "And ",
  "line": 34,
  "rows": [
    {
      "cells": [
        "Header Name",
        "Value"
      ],
      "line": 35
    },
    {
      "cells": [
        "Content-Type",
        "application/vnd.deploydb.deploymentcreated.v1+json"
      ],
      "line": 36
    }
  ]
});
formatter.match({
  "arguments": [
    {
      "val": "deployment",
      "offset": 2
    },
    {
      "val": "created",
      "offset": 22
    }
  ],
  "location": "WebhookSteps.groovy:24"
});
formatter.result({
  "duration": 10987000,
  "status": "passed"
});
formatter.match({
  "location": "PromotionSteps.groovy:24"
});
formatter.result({
  "duration": 224000,
  "status": "passed"
});
formatter.match({
  "location": "EnvironmentSteps.groovy:16"
});
formatter.result({
  "duration": 131000,
  "status": "passed"
});
formatter.match({
  "location": "PipelineSteps.groovy:17"
});
formatter.result({
  "duration": 160000,
  "status": "passed"
});
formatter.match({
  "location": "ServiceSteps.groovy:16"
});
formatter.result({
  "duration": 143000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/api/artifacts",
      "offset": 11
    }
  ],
  "location": "WebhookSteps.groovy:85"
});
formatter.result({
  "duration": 23489000,
  "status": "passed"
});
formatter.match({
  "location": "WebhookSteps.groovy:96"
});
formatter.result({
  "duration": 1001978000,
  "status": "passed"
});
formatter.match({
  "location": "WebhookSteps.groovy:175"
});
formatter.result({
  "duration": 257000,
  "status": "passed"
});
formatter.after({
  "duration": 9077000,
  "status": "passed"
});
formatter.after({
  "duration": 20000,
  "status": "passed"
});
formatter.before({
  "duration": 273880000,
  "status": "passed"
});
formatter.before({
  "duration": 54000,
  "status": "passed"
});
formatter.scenario({
  "id": "webhook-invocation--when-deployment-is-created;environment-webhooks-should-be-invoked-when-artifacts-are-created",
  "tags": [
    {
      "name": "@freezetime",
      "line": 39
    },
    {
      "name": "@webhook",
      "line": 39
    }
  ],
  "description": "",
  "name": "Environment webhooks should be invoked when artifacts are created",
  "keyword": "Scenario",
  "line": 40,
  "type": "scenario"
});
formatter.step({
  "name": "an deployment environment webhook \"created\" configuration named \"integ\":",
  "keyword": "Given ",
  "line": 41,
  "doc_string": {
    "value": "description: \"DeployDB Primary Integration\"\nwebhooks:\n  deployment:\n    created:\n      - http://localhost:10000/job/notify-deployment-started/build",
    "line": 42,
    "content_type": ""
  }
});
formatter.step({
  "name": "promotions are configured",
  "keyword": "And ",
  "line": 49
});
formatter.step({
  "name": "a pipeline is configured",
  "keyword": "And ",
  "line": 50
});
formatter.step({
  "name": "a service is configured",
  "keyword": "And ",
  "line": 51
});
formatter.step({
  "name": "I POST to \"/api/artifacts\" with an artifact",
  "keyword": "When ",
  "line": 52
});
formatter.step({
  "name": "the webhook should be invoked with the JSON:",
  "keyword": "Then ",
  "line": 53,
  "doc_string": {
    "value": "  {\n    \"id\" : 1,\n    \"artifact\" : {\n      \"id\" : 1,\n      \"group\" : \"com.example.cucumber\",\n      \"name\" : \"cukes\",\n      \"version\" : \"1.0.1\",\n      \"sourceUrl\" : \"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.1/cucumber-artifact-1.0.1.jar\",\n      \"createdAt\" : \"{{created_timestamp}}\"\n    },\n    \"status\" : \"CREATED\",\n    \"service\" : \"faas\",\n    \"environment\" : \"integ\",\n    \"createdAt\" : \"{{created_timestamp}}\"\n  }",
    "line": 54,
    "content_type": ""
  }
});
formatter.match({
  "arguments": [
    {
      "val": "deployment",
      "offset": 3
    },
    {
      "val": "created",
      "offset": 35
    },
    {
      "val": "integ",
      "offset": 65
    }
  ],
  "location": "WebhookSteps.groovy:52"
});
formatter.result({
  "duration": 4904000,
  "status": "passed"
});
formatter.match({
  "location": "PromotionSteps.groovy:24"
});
formatter.result({
  "duration": 169000,
  "status": "passed"
});
formatter.match({
  "location": "PipelineSteps.groovy:17"
});
formatter.result({
  "duration": 186000,
  "status": "passed"
});
formatter.match({
  "location": "ServiceSteps.groovy:16"
});
formatter.result({
  "duration": 307000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/api/artifacts",
      "offset": 11
    }
  ],
  "location": "WebhookSteps.groovy:85"
});
formatter.result({
  "duration": 30611000,
  "status": "passed"
});
formatter.match({
  "location": "WebhookSteps.groovy:96"
});
formatter.result({
  "duration": 1006360000,
  "status": "passed"
});
formatter.after({
  "duration": 8795000,
  "status": "passed"
});
formatter.after({
  "duration": 17000,
  "status": "passed"
});
formatter.uri("api/webhook/deploymentStarted.feature");
formatter.feature({
  "id": "webhook-invocation--when-deployment-is-started",
  "description": "",
  "name": "Webhook invocation  when deployment is started",
  "keyword": "Feature",
  "line": 1
});
formatter.before({
  "duration": 271893000,
  "status": "passed"
});
formatter.before({
  "duration": 51000,
  "status": "passed"
});
formatter.scenario({
  "id": "webhook-invocation--when-deployment-is-started;webhooks-should-be-invoked-when-deployment-is-started",
  "tags": [
    {
      "name": "@freezetime",
      "line": 3
    },
    {
      "name": "@webhook",
      "line": 3
    }
  ],
  "description": "",
  "name": "Webhooks should be invoked when deployment is started",
  "keyword": "Scenario",
  "line": 4,
  "type": "scenario"
});
formatter.step({
  "name": "a deployment webhook \"started\" configuration:",
  "keyword": "Given ",
  "line": 5,
  "doc_string": {
    "value": "  deployment:\n    started:\n      - http://localhost:10000/job/notify-deployment-started/build",
    "line": 6,
    "content_type": ""
  }
});
formatter.step({
  "name": "there is a deployment in \"CREATED\" state",
  "keyword": "And ",
  "line": 11
});
formatter.step({
  "name": "I PATCH \"/api/deployments/1\" with:",
  "keyword": "When ",
  "line": 12,
  "doc_string": {
    "value": "  {\n    \"status\" : \"STARTED\"\n  }",
    "line": 13,
    "content_type": ""
  }
});
formatter.step({
  "name": "the webhook should be invoked with the JSON:",
  "keyword": "Then ",
  "line": 18,
  "doc_string": {
    "value": "  {\n    \"id\" : 1,\n    \"artifact\" : {\n      \"id\" : 1,\n      \"group\" : \"com.example.cucumber\",\n      \"name\" : \"cucumber-artifact\",\n      \"version\" : \"1.0.1\",\n      \"sourceUrl\" : \"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.1/cucumber-artifact-1.0.1.jar\",\n      \"createdAt\" : \"{{created_timestamp}}\"\n    },\n    \"status\" : \"STARTED\",\n    \"service\" : \"faas\",\n    \"environment\" : \"pre-prod\",\n    \"createdAt\" : \"{{created_timestamp}}\"\n  }",
    "line": 19,
    "content_type": ""
  }
});
formatter.step({
  "name": "the webhook should have the headers:",
  "keyword": "And ",
  "line": 36,
  "rows": [
    {
      "cells": [
        "Header Name",
        "Value"
      ],
      "line": 37
    },
    {
      "cells": [
        "Content-Type",
        "application/vnd.deploydb.deploymentstarted.v1+json"
      ],
      "line": 38
    }
  ]
});
formatter.match({
  "arguments": [
    {
      "val": "deployment",
      "offset": 2
    },
    {
      "val": "started",
      "offset": 22
    }
  ],
  "location": "WebhookSteps.groovy:24"
});
formatter.result({
  "duration": 10847000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CREATED",
      "offset": 26
    }
  ],
  "location": "WebhookSteps.groovy:138"
});
formatter.result({
  "duration": 3832000,
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
  "duration": 21712000,
  "status": "passed"
});
formatter.match({
  "location": "WebhookSteps.groovy:96"
});
formatter.result({
  "duration": 1001697000,
  "status": "passed"
});
formatter.match({
  "location": "WebhookSteps.groovy:175"
});
formatter.result({
  "duration": 197000,
  "status": "passed"
});
formatter.after({
  "duration": 9120000,
  "status": "passed"
});
formatter.after({
  "duration": 19000,
  "status": "passed"
});
formatter.before({
  "duration": 224544000,
  "status": "passed"
});
formatter.before({
  "duration": 47000,
  "status": "passed"
});
formatter.scenario({
  "id": "webhook-invocation--when-deployment-is-started;environment-webhooks-should-be-invoked-when-artifacts-are-started",
  "tags": [
    {
      "name": "@freezetime",
      "line": 40
    },
    {
      "name": "@webhook",
      "line": 40
    }
  ],
  "description": "",
  "name": "Environment webhooks should be invoked when artifacts are started",
  "keyword": "Scenario",
  "line": 41,
  "type": "scenario"
});
formatter.step({
  "name": "an deployment environment webhook \"started\" configuration named \"pre-prod\":",
  "keyword": "Given ",
  "line": 42,
  "doc_string": {
    "value": "description: \"DeployDB Primary Integration\"\nwebhooks:\n  deployment:\n    started:\n      - http://localhost:10000/job/notify-deployment-started/build",
    "line": 43,
    "content_type": ""
  }
});
formatter.step({
  "name": "there is a deployment in \"CREATED\" state",
  "keyword": "And ",
  "line": 50
});
formatter.step({
  "name": "I PATCH \"/api/deployments/1\" with:",
  "keyword": "When ",
  "line": 51,
  "doc_string": {
    "value": "  {\n    \"status\" : \"STARTED\"\n  }",
    "line": 52,
    "content_type": ""
  }
});
formatter.step({
  "name": "the webhook should be invoked with the JSON:",
  "keyword": "Then ",
  "line": 57,
  "doc_string": {
    "value": "  {\n    \"id\" : 1,\n    \"artifact\" : {\n      \"id\" : 1,\n      \"group\" : \"com.example.cucumber\",\n      \"name\" : \"cucumber-artifact\",\n      \"version\" : \"1.0.1\",\n      \"sourceUrl\" : \"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.1/cucumber-artifact-1.0.1.jar\",\n      \"createdAt\" : \"{{created_timestamp}}\"\n    },\n    \"status\" : \"STARTED\",\n    \"service\" : \"faas\",\n    \"environment\" : \"pre-prod\",\n    \"createdAt\" : \"{{created_timestamp}}\"\n  }",
    "line": 58,
    "content_type": ""
  }
});
formatter.match({
  "arguments": [
    {
      "val": "deployment",
      "offset": 3
    },
    {
      "val": "started",
      "offset": 35
    },
    {
      "val": "pre-prod",
      "offset": 65
    }
  ],
  "location": "WebhookSteps.groovy:52"
});
formatter.result({
  "duration": 5822000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CREATED",
      "offset": 26
    }
  ],
  "location": "WebhookSteps.groovy:138"
});
formatter.result({
  "duration": 3494000,
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
  "duration": 21523000,
  "status": "passed"
});
formatter.match({
  "location": "WebhookSteps.groovy:96"
});
formatter.result({
  "duration": 1003323000,
  "status": "passed"
});
formatter.after({
  "duration": 9311000,
  "status": "passed"
});
formatter.after({
  "duration": 17000,
  "status": "passed"
});
formatter.uri("api/webhook/multipleWebhooks.feature");
formatter.feature({
  "id": "webhook-invocation--when-deployment-is-created-with-multiple-webhooks",
  "description": "",
  "name": "Webhook invocation  when deployment is created with multiple webhooks",
  "keyword": "Feature",
  "line": 1
});
formatter.before({
  "duration": 228196000,
  "status": "passed"
});
formatter.before({
  "duration": 52000,
  "status": "passed"
});
formatter.scenario({
  "id": "webhook-invocation--when-deployment-is-created-with-multiple-webhooks;multiple-webhooks-should-be-invoked-when-artifacts-are-created",
  "tags": [
    {
      "name": "@freezetime",
      "line": 3
    },
    {
      "name": "@webhook",
      "line": 3
    }
  ],
  "description": "",
  "name": "Multiple Webhooks should be invoked when artifacts are created",
  "keyword": "Scenario",
  "line": 4,
  "type": "scenario"
});
formatter.step({
  "name": "a deployment webhook \"created\" configuration:",
  "keyword": "Given ",
  "line": 5,
  "doc_string": {
    "value": "  deployment:\n    created:\n       - http://localhost:10000/job/notify-deployment-created/build\n       - http://localhost:10000/job/another-notify-deployment-created/build",
    "line": 6,
    "content_type": ""
  }
});
formatter.step({
  "name": "promotions are configured",
  "keyword": "And ",
  "line": 12
});
formatter.step({
  "name": "an environment is configured",
  "keyword": "And ",
  "line": 13
});
formatter.step({
  "name": "a pipeline is configured",
  "keyword": "And ",
  "line": 14
});
formatter.step({
  "name": "a service is configured",
  "keyword": "And ",
  "line": 15
});
formatter.step({
  "name": "I POST to \"/api/artifacts\" with an artifact",
  "keyword": "When ",
  "line": 16
});
formatter.step({
  "name": "the webhook 1 should be invoked with the JSON:",
  "keyword": "Then ",
  "line": 17,
  "doc_string": {
    "value": "  {\n    \"id\" : 1,\n    \"artifact\" : {\n      \"id\" : 1,\n      \"group\" : \"com.example.cucumber\",\n      \"name\" : \"cukes\",\n      \"version\" : \"1.0.1\",\n      \"sourceUrl\" : \"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.1/cucumber-artifact-1.0.1.jar\",\n      \"createdAt\" : \"{{created_timestamp}}\"\n    },\n    \"status\" : \"CREATED\",\n    \"service\" : \"faas\",\n    \"environment\" : \"integ\",\n    \"createdAt\" : \"{{created_timestamp}}\"\n  }",
    "line": 18,
    "content_type": ""
  }
});
formatter.step({
  "name": "the webhook 2 should be invoked with the JSON:",
  "keyword": "And ",
  "line": 35,
  "doc_string": {
    "value": "  {\n    \"id\" : 1,\n    \"artifact\" : {\n      \"id\" : 1,\n      \"group\" : \"com.example.cucumber\",\n      \"name\" : \"cukes\",\n      \"version\" : \"1.0.1\",\n      \"sourceUrl\" : \"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.1/cucumber-artifact-1.0.1.jar\",\n      \"createdAt\" : \"{{created_timestamp}}\"\n    },\n    \"status\" : \"CREATED\",\n    \"service\" : \"faas\",\n    \"environment\" : \"integ\",\n    \"createdAt\" : \"{{created_timestamp}}\"\n  }",
    "line": 36,
    "content_type": ""
  }
});
formatter.match({
  "arguments": [
    {
      "val": "deployment",
      "offset": 2
    },
    {
      "val": "created",
      "offset": 22
    }
  ],
  "location": "WebhookSteps.groovy:24"
});
formatter.result({
  "duration": 9308000,
  "status": "passed"
});
formatter.match({
  "location": "PromotionSteps.groovy:24"
});
formatter.result({
  "duration": 210000,
  "status": "passed"
});
formatter.match({
  "location": "EnvironmentSteps.groovy:16"
});
formatter.result({
  "duration": 123000,
  "status": "passed"
});
formatter.match({
  "location": "PipelineSteps.groovy:17"
});
formatter.result({
  "duration": 138000,
  "status": "passed"
});
formatter.match({
  "location": "ServiceSteps.groovy:16"
});
formatter.result({
  "duration": 118000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/api/artifacts",
      "offset": 11
    }
  ],
  "location": "WebhookSteps.groovy:85"
});
formatter.result({
  "duration": 24697000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 12
    }
  ],
  "location": "WebhookSteps.groovy:115"
});
formatter.result({
  "duration": 1007700000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 12
    }
  ],
  "location": "WebhookSteps.groovy:115"
});
formatter.result({
  "duration": 1005935000,
  "status": "passed"
});
formatter.after({
  "duration": 9047000,
  "status": "passed"
});
formatter.after({
  "duration": 17000,
  "status": "passed"
});
formatter.before({
  "duration": 216101000,
  "status": "passed"
});
formatter.before({
  "duration": 43000,
  "status": "passed"
});
formatter.scenario({
  "id": "webhook-invocation--when-deployment-is-created-with-multiple-webhooks;multiple-environment-webhooks-should-be-invoked-when-artifacts-are-created",
  "tags": [
    {
      "name": "@freezetime",
      "line": 54
    },
    {
      "name": "@webhook",
      "line": 54
    }
  ],
  "description": "",
  "name": "Multiple environment webhooks should be invoked when artifacts are created",
  "keyword": "Scenario",
  "line": 55,
  "type": "scenario"
});
formatter.step({
  "name": "an deployment environment webhook \"created\" configuration named \"integ\":",
  "keyword": "Given ",
  "line": 56,
  "doc_string": {
    "value": "description: \"DeployDB Primary Integration\"\nwebhooks:\n  deployment:\n    created:\n      - http://localhost:10000/job/notify-deployment-created/build\n      - http://localhost:10000/job/another-notify-deployment-created/build",
    "line": 57,
    "content_type": ""
  }
});
formatter.step({
  "name": "promotions are configured",
  "keyword": "And ",
  "line": 65
});
formatter.step({
  "name": "a pipeline is configured",
  "keyword": "And ",
  "line": 66
});
formatter.step({
  "name": "a service is configured",
  "keyword": "And ",
  "line": 67
});
formatter.step({
  "name": "I POST to \"/api/artifacts\" with an artifact",
  "keyword": "When ",
  "line": 68
});
formatter.step({
  "name": "the webhook 1 should be invoked with the JSON:",
  "keyword": "Then ",
  "line": 69,
  "doc_string": {
    "value": "  {\n    \"id\" : 1,\n    \"artifact\" : {\n      \"id\" : 1,\n      \"group\" : \"com.example.cucumber\",\n      \"name\" : \"cukes\",\n      \"version\" : \"1.0.1\",\n      \"sourceUrl\" : \"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.1/cucumber-artifact-1.0.1.jar\",\n      \"createdAt\" : \"{{created_timestamp}}\"\n    },\n    \"status\" : \"CREATED\",\n    \"service\" : \"faas\",\n    \"environment\" : \"integ\",\n    \"createdAt\" : \"{{created_timestamp}}\"\n  }",
    "line": 70,
    "content_type": ""
  }
});
formatter.step({
  "name": "the webhook 2 should be invoked with the JSON:",
  "keyword": "And ",
  "line": 87,
  "doc_string": {
    "value": "  {\n    \"id\" : 1,\n    \"artifact\" : {\n      \"id\" : 1,\n      \"group\" : \"com.example.cucumber\",\n      \"name\" : \"cukes\",\n      \"version\" : \"1.0.1\",\n      \"sourceUrl\" : \"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.1/cucumber-artifact-1.0.1.jar\",\n      \"createdAt\" : \"{{created_timestamp}}\"\n    },\n    \"status\" : \"CREATED\",\n    \"service\" : \"faas\",\n    \"environment\" : \"integ\",\n    \"createdAt\" : \"{{created_timestamp}}\"\n  }",
    "line": 88,
    "content_type": ""
  }
});
formatter.match({
  "arguments": [
    {
      "val": "deployment",
      "offset": 3
    },
    {
      "val": "created",
      "offset": 35
    },
    {
      "val": "integ",
      "offset": 65
    }
  ],
  "location": "WebhookSteps.groovy:52"
});
formatter.result({
  "duration": 6008000,
  "status": "passed"
});
formatter.match({
  "location": "PromotionSteps.groovy:24"
});
formatter.result({
  "duration": 176000,
  "status": "passed"
});
formatter.match({
  "location": "PipelineSteps.groovy:17"
});
formatter.result({
  "duration": 147000,
  "status": "passed"
});
formatter.match({
  "location": "ServiceSteps.groovy:16"
});
formatter.result({
  "duration": 123000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/api/artifacts",
      "offset": 11
    }
  ],
  "location": "WebhookSteps.groovy:85"
});
formatter.result({
  "duration": 24440000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 12
    }
  ],
  "location": "WebhookSteps.groovy:115"
});
formatter.result({
  "duration": 1001257000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 12
    }
  ],
  "location": "WebhookSteps.groovy:115"
});
formatter.result({
  "duration": 1006556000,
  "status": "passed"
});
formatter.after({
  "duration": 9309000,
  "status": "passed"
});
formatter.after({
  "duration": 19000,
  "status": "passed"
});
formatter.before({
  "duration": 273274000,
  "status": "passed"
});
formatter.before({
  "duration": 49000,
  "status": "passed"
});
formatter.scenario({
  "id": "webhook-invocation--when-deployment-is-created-with-multiple-webhooks;global-webhook-and-environment-webhook-should-be-invoked-when-artifacts-are-created",
  "tags": [
    {
      "name": "@freezetime",
      "line": 107
    },
    {
      "name": "@webhook",
      "line": 107
    }
  ],
  "description": "",
  "name": "Global webhook and environment webhook should be invoked when artifacts are created",
  "keyword": "Scenario",
  "line": 108,
  "type": "scenario"
});
formatter.step({
  "name": "a deployment webhook \"created\" configuration:",
  "keyword": "Given ",
  "line": 109,
  "doc_string": {
    "value": "  deployment:\n    created:\n       - http://localhost:10000/job/notify-deployment-created/build",
    "line": 110,
    "content_type": ""
  }
});
formatter.step({
  "name": "an deployment environment webhook \"created\" configuration named \"integ\":",
  "keyword": "And ",
  "line": 115,
  "doc_string": {
    "value": "description: \"DeployDB Primary Integration\"\nwebhooks:\n  deployment:\n    created:\n      - http://localhost:10000/job/another-notify-deployment-created/build",
    "line": 116,
    "content_type": ""
  }
});
formatter.step({
  "name": "promotions are configured",
  "keyword": "And ",
  "line": 123
});
formatter.step({
  "name": "a pipeline is configured",
  "keyword": "And ",
  "line": 124
});
formatter.step({
  "name": "a service is configured",
  "keyword": "And ",
  "line": 125
});
formatter.step({
  "name": "I POST to \"/api/artifacts\" with an artifact",
  "keyword": "When ",
  "line": 126
});
formatter.step({
  "name": "the webhook 1 should be invoked with the JSON:",
  "keyword": "Then ",
  "line": 127,
  "doc_string": {
    "value": "  {\n    \"id\" : 1,\n    \"artifact\" : {\n      \"id\" : 1,\n      \"group\" : \"com.example.cucumber\",\n      \"name\" : \"cukes\",\n      \"version\" : \"1.0.1\",\n      \"sourceUrl\" : \"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.1/cucumber-artifact-1.0.1.jar\",\n      \"createdAt\" : \"{{created_timestamp}}\"\n    },\n    \"status\" : \"CREATED\",\n    \"service\" : \"faas\",\n    \"environment\" : \"integ\",\n    \"createdAt\" : \"{{created_timestamp}}\"\n  }",
    "line": 128,
    "content_type": ""
  }
});
formatter.step({
  "name": "the webhook 2 should be invoked with the JSON:",
  "keyword": "And ",
  "line": 145,
  "doc_string": {
    "value": "  {\n    \"id\" : 1,\n    \"artifact\" : {\n      \"id\" : 1,\n      \"group\" : \"com.example.cucumber\",\n      \"name\" : \"cukes\",\n      \"version\" : \"1.0.1\",\n      \"sourceUrl\" : \"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.1/cucumber-artifact-1.0.1.jar\",\n      \"createdAt\" : \"{{created_timestamp}}\"\n    },\n    \"status\" : \"CREATED\",\n    \"service\" : \"faas\",\n    \"environment\" : \"integ\",\n    \"createdAt\" : \"{{created_timestamp}}\"\n  }",
    "line": 146,
    "content_type": ""
  }
});
formatter.match({
  "arguments": [
    {
      "val": "deployment",
      "offset": 2
    },
    {
      "val": "created",
      "offset": 22
    }
  ],
  "location": "WebhookSteps.groovy:24"
});
formatter.result({
  "duration": 7901000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "deployment",
      "offset": 3
    },
    {
      "val": "created",
      "offset": 35
    },
    {
      "val": "integ",
      "offset": 65
    }
  ],
  "location": "WebhookSteps.groovy:52"
});
formatter.result({
  "duration": 4008000,
  "status": "passed"
});
formatter.match({
  "location": "PromotionSteps.groovy:24"
});
formatter.result({
  "duration": 164000,
  "status": "passed"
});
formatter.match({
  "location": "PipelineSteps.groovy:17"
});
formatter.result({
  "duration": 138000,
  "status": "passed"
});
formatter.match({
  "location": "ServiceSteps.groovy:16"
});
formatter.result({
  "duration": 117000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/api/artifacts",
      "offset": 11
    }
  ],
  "location": "WebhookSteps.groovy:85"
});
formatter.result({
  "duration": 25158000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 12
    }
  ],
  "location": "WebhookSteps.groovy:115"
});
formatter.result({
  "duration": 1004156000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 12
    }
  ],
  "location": "WebhookSteps.groovy:115"
});
formatter.result({
  "duration": 1006010000,
  "status": "passed"
});
formatter.after({
  "duration": 8965000,
  "status": "passed"
});
formatter.after({
  "duration": 17000,
  "status": "passed"
});
formatter.before({
  "duration": 217471000,
  "status": "passed"
});
formatter.before({
  "duration": 43000,
  "status": "passed"
});
formatter.scenario({
  "id": "webhook-invocation--when-deployment-is-created-with-multiple-webhooks;both-global-and-environment-webhooks-should-be-invoked-when-promotion-is-completed-with-success",
  "tags": [
    {
      "name": "@freezetime",
      "line": 165
    },
    {
      "name": "@webhook",
      "line": 165
    }
  ],
  "description": "",
  "name": "Both global and environment webhooks should be invoked when promotion is completed with success",
  "keyword": "Scenario",
  "line": 166,
  "type": "scenario"
});
formatter.step({
  "name": "a promotion webhook \"completed\" configuration:",
  "keyword": "Given ",
  "line": 167,
  "doc_string": {
    "value": "  promotion:\n    completed:\n      - http://localhost:10000/job/notify-promotion-completed/build",
    "line": 168,
    "content_type": ""
  }
});
formatter.step({
  "name": "an promotion environment webhook \"completed\" configuration named \"pre-prod\":",
  "keyword": "And ",
  "line": 173,
  "doc_string": {
    "value": "description: \"DeployDB Primary Integration\"\nwebhooks:\n  promotion:\n    completed:\n      - http://localhost:10000/job/another-notify-promotion-completed/build",
    "line": 174,
    "content_type": ""
  }
});
formatter.step({
  "name": "there is a deployment in \"COMPLETED\" state",
  "keyword": "And ",
  "line": 181
});
formatter.step({
  "name": "I POST to \"/api/deployments/1/promotions\" with:",
  "keyword": "When ",
  "line": 182,
  "doc_string": {
    "value": "  {\n    \"name\"  : \"jenkins-smoke\",\n    \"status\" : \"SUCCESS\",\n    \"infoUrl\" : \"http://local.lookout.com/jenkins/job-id/2/results\"\n  }",
    "line": 183,
    "content_type": ""
  }
});
formatter.step({
  "name": "the webhook 1 should be invoked with the JSON:",
  "keyword": "Then ",
  "line": 190,
  "doc_string": {
    "value": "  {\n    \"id\" : 1,\n    \"artifact\" : {\n      \"id\" : 1,\n      \"group\" : \"com.example.cucumber\",\n      \"name\" : \"cucumber-artifact\",\n      \"version\" : \"1.0.1\",\n      \"sourceUrl\" : \"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.1/cucumber-artifact-1.0.1.jar\",\n      \"createdAt\" : \"{{created_timestamp}}\"\n    },\n    \"status\" : \"VERIFIED\",\n    \"service\" : \"faas\",\n    \"environment\" : \"pre-prod\",\n    \"createdAt\" : \"{{created_timestamp}}\",\n    \"promotionResult\":{\n      \"id\" : 1,\n      \"createdAt\" : \"{{created_timestamp}}\",\n      \"promotion\": \"jenkins-smoke\",\n      \"infoUrl\" : \"http://local.lookout.com/jenkins/job-id/2/results\",\n      \"status\" : \"SUCCESS\"\n    }\n  }",
    "line": 191,
    "content_type": ""
  }
});
formatter.step({
  "name": "the webhook 2 should be invoked with the JSON:",
  "keyword": "And ",
  "line": 215,
  "doc_string": {
    "value": "  {\n    \"id\" : 1,\n    \"artifact\" : {\n      \"id\" : 1,\n      \"group\" : \"com.example.cucumber\",\n      \"name\" : \"cucumber-artifact\",\n      \"version\" : \"1.0.1\",\n      \"sourceUrl\" : \"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.1/cucumber-artifact-1.0.1.jar\",\n      \"createdAt\" : \"{{created_timestamp}}\"\n    },\n    \"status\" : \"VERIFIED\",\n    \"service\" : \"faas\",\n    \"environment\" : \"pre-prod\",\n    \"createdAt\" : \"{{created_timestamp}}\",\n    \"promotionResult\":{\n      \"id\" : 1,\n      \"createdAt\" : \"{{created_timestamp}}\",\n      \"promotion\": \"jenkins-smoke\",\n      \"infoUrl\" : \"http://local.lookout.com/jenkins/job-id/2/results\",\n      \"status\" : \"SUCCESS\"\n    }\n  }",
    "line": 216,
    "content_type": ""
  }
});
formatter.match({
  "arguments": [
    {
      "val": "promotion",
      "offset": 2
    },
    {
      "val": "completed",
      "offset": 21
    }
  ],
  "location": "WebhookSteps.groovy:24"
});
formatter.result({
  "duration": 7627000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "promotion",
      "offset": 3
    },
    {
      "val": "completed",
      "offset": 34
    },
    {
      "val": "pre-prod",
      "offset": 66
    }
  ],
  "location": "WebhookSteps.groovy:52"
});
formatter.result({
  "duration": 4957000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "COMPLETED",
      "offset": 26
    }
  ],
  "location": "WebhookSteps.groovy:138"
});
formatter.result({
  "duration": 3335000,
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
  "duration": 22016000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 12
    }
  ],
  "location": "WebhookSteps.groovy:115"
});
formatter.result({
  "duration": 1005247000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 12
    }
  ],
  "location": "WebhookSteps.groovy:115"
});
formatter.result({
  "duration": 1006044000,
  "status": "passed"
});
formatter.after({
  "duration": 7249000,
  "status": "passed"
});
formatter.after({
  "duration": 18000,
  "status": "passed"
});
formatter.before({
  "duration": 211475000,
  "status": "passed"
});
formatter.before({
  "duration": 50000,
  "status": "passed"
});
formatter.scenario({
  "id": "webhook-invocation--when-deployment-is-created-with-multiple-webhooks;only-global-webhook-should-be-invoked-when-environment-webhooks-doesn\u0027t-contain-deployment-created-event",
  "tags": [
    {
      "name": "@freezetime",
      "line": 241
    },
    {
      "name": "@webhook",
      "line": 241
    }
  ],
  "description": "",
  "name": "Only Global webhook should be invoked when environment webhooks doesn\u0027t contain deployment created event",
  "keyword": "Scenario",
  "line": 242,
  "type": "scenario"
});
formatter.step({
  "name": "a deployment webhook \"created\" configuration:",
  "keyword": "Given ",
  "line": 243,
  "doc_string": {
    "value": "  deployment:\n    created:\n      - http://localhost:10000/notify-deployment-created/build\n    started:\n      - http://localhost:10000/job/notify-deployment-started/build",
    "line": 244,
    "content_type": ""
  }
});
formatter.step({
  "name": "an deployment environment webhook \"created\" configuration named \"integ\":",
  "keyword": "And ",
  "line": 251,
  "doc_string": {
    "value": "description: \"DeployDB Primary Integration\"\nwebhooks:\n  deployment:\n    completed:\n      - http://localhost:10000/job/notify-deployment-completed/build",
    "line": 252,
    "content_type": ""
  }
});
formatter.step({
  "name": "promotions are configured",
  "keyword": "And ",
  "line": 259
});
formatter.step({
  "name": "a pipeline is configured",
  "keyword": "And ",
  "line": 260
});
formatter.step({
  "name": "a service is configured",
  "keyword": "And ",
  "line": 261
});
formatter.step({
  "name": "I POST to \"/api/artifacts\" with an artifact",
  "keyword": "When ",
  "line": 262
});
formatter.step({
  "name": "the webhook 1 should be invoked with the JSON:",
  "keyword": "Then ",
  "line": 263,
  "doc_string": {
    "value": "  {\n    \"id\" : 1,\n    \"artifact\" : {\n      \"id\" : 1,\n      \"group\" : \"com.example.cucumber\",\n      \"name\" : \"cukes\",\n      \"version\" : \"1.0.1\",\n      \"sourceUrl\" : \"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.1/cucumber-artifact-1.0.1.jar\",\n      \"createdAt\" : \"{{created_timestamp}}\"\n    },\n    \"status\" : \"CREATED\",\n    \"service\" : \"faas\",\n    \"environment\" : \"integ\",\n    \"createdAt\" : \"{{created_timestamp}}\"\n  }",
    "line": 264,
    "content_type": ""
  }
});
formatter.match({
  "arguments": [
    {
      "val": "deployment",
      "offset": 2
    },
    {
      "val": "created",
      "offset": 22
    }
  ],
  "location": "WebhookSteps.groovy:24"
});
formatter.result({
  "duration": 8366000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "deployment",
      "offset": 3
    },
    {
      "val": "created",
      "offset": 35
    },
    {
      "val": "integ",
      "offset": 65
    }
  ],
  "location": "WebhookSteps.groovy:52"
});
formatter.result({
  "duration": 7854000,
  "status": "passed"
});
formatter.match({
  "location": "PromotionSteps.groovy:24"
});
formatter.result({
  "duration": 416000,
  "status": "passed"
});
formatter.match({
  "location": "PipelineSteps.groovy:17"
});
formatter.result({
  "duration": 151000,
  "status": "passed"
});
formatter.match({
  "location": "ServiceSteps.groovy:16"
});
formatter.result({
  "duration": 127000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/api/artifacts",
      "offset": 11
    }
  ],
  "location": "WebhookSteps.groovy:85"
});
formatter.result({
  "duration": 24733000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 12
    }
  ],
  "location": "WebhookSteps.groovy:115"
});
formatter.result({
  "duration": 1005738000,
  "status": "passed"
});
formatter.after({
  "duration": 9995000,
  "status": "passed"
});
formatter.after({
  "duration": 17000,
  "status": "passed"
});
formatter.before({
  "duration": 222359000,
  "status": "passed"
});
formatter.before({
  "duration": 44000,
  "status": "passed"
});
formatter.scenario({
  "id": "webhook-invocation--when-deployment-is-created-with-multiple-webhooks;only-environment-webhooks-should-be-invoked-when-global-webhooks-doesn\u0027t-contain-deployment-created-event",
  "tags": [
    {
      "name": "@freezetime",
      "line": 282
    },
    {
      "name": "@webhook",
      "line": 282
    }
  ],
  "description": "",
  "name": "Only environment webhooks should be invoked when global webhooks doesn\u0027t contain deployment created event",
  "keyword": "Scenario",
  "line": 283,
  "type": "scenario"
});
formatter.step({
  "name": "a deployment webhook \"created\" configuration:",
  "keyword": "Given ",
  "line": 284,
  "doc_string": {
    "value": "  deployment:\n    started:\n      - http://localhost:10000/job/notify-deployment-started/build\n    completed:\n      - http://localhost:10000/job/notify-deployment-completed/build",
    "line": 285,
    "content_type": ""
  }
});
formatter.step({
  "name": "an deployment environment webhook \"created\" configuration named \"integ\":",
  "keyword": "And ",
  "line": 292,
  "doc_string": {
    "value": "description: \"DeployDB Primary Integration\"\nwebhooks:\n  deployment:\n    created:\n      - http://localhost:10000/notify-deployment-created/build\n      - http://localhost:10000/another-notify-deployment-created/build\n    completed:\n      - http://localhost:10000/job/notify-deployment-completed/build",
    "line": 293,
    "content_type": ""
  }
});
formatter.step({
  "name": "promotions are configured",
  "keyword": "And ",
  "line": 303
});
formatter.step({
  "name": "a pipeline is configured",
  "keyword": "And ",
  "line": 304
});
formatter.step({
  "name": "a service is configured",
  "keyword": "And ",
  "line": 305
});
formatter.step({
  "name": "I POST to \"/api/artifacts\" with an artifact",
  "keyword": "When ",
  "line": 306
});
formatter.step({
  "name": "the webhook 1 should be invoked with the JSON:",
  "keyword": "Then ",
  "line": 307,
  "doc_string": {
    "value": "  {\n    \"id\" : 1,\n    \"artifact\" : {\n      \"id\" : 1,\n      \"group\" : \"com.example.cucumber\",\n      \"name\" : \"cukes\",\n      \"version\" : \"1.0.1\",\n      \"sourceUrl\" : \"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.1/cucumber-artifact-1.0.1.jar\",\n      \"createdAt\" : \"{{created_timestamp}}\"\n    },\n    \"status\" : \"CREATED\",\n    \"service\" : \"faas\",\n    \"environment\" : \"integ\",\n    \"createdAt\" : \"{{created_timestamp}}\"\n  }",
    "line": 308,
    "content_type": ""
  }
});
formatter.step({
  "name": "the webhook 2 should be invoked with the JSON:",
  "keyword": "And ",
  "line": 325,
  "doc_string": {
    "value": "  {\n    \"id\" : 1,\n    \"artifact\" : {\n      \"id\" : 1,\n      \"group\" : \"com.example.cucumber\",\n      \"name\" : \"cukes\",\n      \"version\" : \"1.0.1\",\n      \"sourceUrl\" : \"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.1/cucumber-artifact-1.0.1.jar\",\n      \"createdAt\" : \"{{created_timestamp}}\"\n    },\n    \"status\" : \"CREATED\",\n    \"service\" : \"faas\",\n    \"environment\" : \"integ\",\n    \"createdAt\" : \"{{created_timestamp}}\"\n  }",
    "line": 326,
    "content_type": ""
  }
});
formatter.match({
  "arguments": [
    {
      "val": "deployment",
      "offset": 2
    },
    {
      "val": "created",
      "offset": 22
    }
  ],
  "location": "WebhookSteps.groovy:24"
});
formatter.result({
  "duration": 8290000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "deployment",
      "offset": 3
    },
    {
      "val": "created",
      "offset": 35
    },
    {
      "val": "integ",
      "offset": 65
    }
  ],
  "location": "WebhookSteps.groovy:52"
});
formatter.result({
  "duration": 5310000,
  "status": "passed"
});
formatter.match({
  "location": "PromotionSteps.groovy:24"
});
formatter.result({
  "duration": 179000,
  "status": "passed"
});
formatter.match({
  "location": "PipelineSteps.groovy:17"
});
formatter.result({
  "duration": 144000,
  "status": "passed"
});
formatter.match({
  "location": "ServiceSteps.groovy:16"
});
formatter.result({
  "duration": 119000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/api/artifacts",
      "offset": 11
    }
  ],
  "location": "WebhookSteps.groovy:85"
});
formatter.result({
  "duration": 23928000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 12
    }
  ],
  "location": "WebhookSteps.groovy:115"
});
formatter.result({
  "duration": 1006516000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 12
    }
  ],
  "location": "WebhookSteps.groovy:115"
});
formatter.result({
  "duration": 1004271000,
  "status": "passed"
});
formatter.after({
  "duration": 8748000,
  "status": "passed"
});
formatter.after({
  "duration": 18000,
  "status": "passed"
});
formatter.before({
  "duration": 229294000,
  "status": "passed"
});
formatter.before({
  "duration": 51000,
  "status": "passed"
});
formatter.scenario({
  "id": "webhook-invocation--when-deployment-is-created-with-multiple-webhooks;only-global-webhooks-should-be-invoked-when-environment-webhooks-doesn\u0027t-contain-deployment-started-event",
  "tags": [
    {
      "name": "@freezetime",
      "line": 345
    },
    {
      "name": "@webhook",
      "line": 345
    }
  ],
  "description": "",
  "name": "Only global webhooks should be invoked when environment webhooks doesn\u0027t contain deployment started event",
  "keyword": "Scenario",
  "line": 346,
  "type": "scenario"
});
formatter.step({
  "name": "a deployment webhook \"started\" configuration:",
  "keyword": "Given ",
  "line": 347,
  "doc_string": {
    "value": "  deployment:\n    created:\n      - http://localhost:10000/job/notify-deployment-created/build\n    started:\n      - http://localhost:10000/job/notify-deployment-started/build\n      - http://localhost:10000/job/another-notify-deployment-started/build\n    completed:\n      - http://localhost:10000/job/notify-deployment-completed/build\n      - http://localhost:10000/job/another-notify-deployment-completed/build\n  promotion:\n    completed:\n      - http://localhost:10000/job/notify-completed-completed/build",
    "line": 348,
    "content_type": ""
  }
});
formatter.step({
  "name": "an deployment environment webhook \"started\" configuration named \"pre-prod\":",
  "keyword": "And ",
  "line": 362,
  "doc_string": {
    "value": "description: \"DeployDB Primary Integration\"\nwebhooks:\n  deployment:\n    created:\n      - http://localhost:10000/notify-deployment-created/build\n    completed:\n      - http://localhost:10000/job/notify-deployment-completed/build",
    "line": 363,
    "content_type": ""
  }
});
formatter.step({
  "name": "there is a deployment in \"CREATED\" state",
  "keyword": "And ",
  "line": 372
});
formatter.step({
  "name": "I PATCH \"/api/deployments/1\" with:",
  "keyword": "When ",
  "line": 373,
  "doc_string": {
    "value": "  {\n    \"status\" : \"STARTED\"\n  }",
    "line": 374,
    "content_type": ""
  }
});
formatter.step({
  "name": "the webhook 1 should be invoked with the JSON:",
  "keyword": "Then ",
  "line": 379,
  "doc_string": {
    "value": "  {\n    \"id\" : 1,\n    \"artifact\" : {\n      \"id\" : 1,\n      \"group\" : \"com.example.cucumber\",\n      \"name\" : \"cucumber-artifact\",\n      \"version\" : \"1.0.1\",\n      \"sourceUrl\" : \"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.1/cucumber-artifact-1.0.1.jar\",\n      \"createdAt\" : \"{{created_timestamp}}\"\n    },\n    \"status\" : \"STARTED\",\n    \"service\" : \"faas\",\n    \"environment\" : \"pre-prod\",\n    \"createdAt\" : \"{{created_timestamp}}\"\n  }",
    "line": 380,
    "content_type": ""
  }
});
formatter.step({
  "name": "the webhook 2 should be invoked with the JSON:",
  "keyword": "And ",
  "line": 397,
  "doc_string": {
    "value": "  {\n    \"id\" : 1,\n    \"artifact\" : {\n      \"id\" : 1,\n      \"group\" : \"com.example.cucumber\",\n      \"name\" : \"cucumber-artifact\",\n      \"version\" : \"1.0.1\",\n      \"sourceUrl\" : \"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.1/cucumber-artifact-1.0.1.jar\",\n      \"createdAt\" : \"{{created_timestamp}}\"\n    },\n    \"status\" : \"STARTED\",\n    \"service\" : \"faas\",\n    \"environment\" : \"pre-prod\",\n    \"createdAt\" : \"{{created_timestamp}}\"\n  }",
    "line": 398,
    "content_type": ""
  }
});
formatter.match({
  "arguments": [
    {
      "val": "deployment",
      "offset": 2
    },
    {
      "val": "started",
      "offset": 22
    }
  ],
  "location": "WebhookSteps.groovy:24"
});
formatter.result({
  "duration": 9055000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "deployment",
      "offset": 3
    },
    {
      "val": "started",
      "offset": 35
    },
    {
      "val": "pre-prod",
      "offset": 65
    }
  ],
  "location": "WebhookSteps.groovy:52"
});
formatter.result({
  "duration": 4192000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CREATED",
      "offset": 26
    }
  ],
  "location": "WebhookSteps.groovy:138"
});
formatter.result({
  "duration": 3028000,
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
  "duration": 21921000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 12
    }
  ],
  "location": "WebhookSteps.groovy:115"
});
formatter.result({
  "duration": 1002717000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 12
    }
  ],
  "location": "WebhookSteps.groovy:115"
});
formatter.result({
  "duration": 1004270000,
  "status": "passed"
});
formatter.after({
  "duration": 8817000,
  "status": "passed"
});
formatter.after({
  "duration": 18000,
  "status": "passed"
});
formatter.before({
  "duration": 212262000,
  "status": "passed"
});
formatter.before({
  "duration": 44000,
  "status": "passed"
});
formatter.scenario({
  "id": "webhook-invocation--when-deployment-is-created-with-multiple-webhooks;global-webhooks-should-be-invoked-when-environment-webhook-doesn\u0027t-contain-promotion-event-for-promotion-success",
  "tags": [
    {
      "name": "@freezetime",
      "line": 416
    },
    {
      "name": "@webhook",
      "line": 416
    }
  ],
  "description": "",
  "name": "Global webhooks should be invoked when environment webhook doesn\u0027t contain promotion event for promotion success",
  "keyword": "Scenario",
  "line": 417,
  "type": "scenario"
});
formatter.step({
  "name": "a promotion webhook \"completed\" configuration:",
  "keyword": "Given ",
  "line": 418,
  "doc_string": {
    "value": "  promotion:\n    completed:\n      - http://localhost:10000/job/notify-promotion-completed/build\n      - http://localhost:10000/job/another-notify-promotion-completed/build",
    "line": 419,
    "content_type": ""
  }
});
formatter.step({
  "name": "an promotion environment webhook \"completed\" configuration named \"pre-prod\":",
  "keyword": "And ",
  "line": 425,
  "doc_string": {
    "value": "description: \"DeployDB Primary Integration\"",
    "line": 426,
    "content_type": ""
  }
});
formatter.step({
  "name": "there is a deployment in \"COMPLETED\" state",
  "keyword": "And ",
  "line": 429
});
formatter.step({
  "name": "I POST to \"/api/deployments/1/promotions\" with:",
  "keyword": "When ",
  "line": 430,
  "doc_string": {
    "value": "  {\n    \"name\"  : \"jenkins-smoke\",\n    \"status\" : \"SUCCESS\",\n    \"infoUrl\" : \"http://local.lookout.com/jenkins/job-id/2/results\"\n  }",
    "line": 431,
    "content_type": ""
  }
});
formatter.step({
  "name": "the webhook 1 should be invoked with the JSON:",
  "keyword": "Then ",
  "line": 438,
  "doc_string": {
    "value": "  {\n    \"id\" : 1,\n    \"artifact\" : {\n      \"id\" : 1,\n      \"group\" : \"com.example.cucumber\",\n      \"name\" : \"cucumber-artifact\",\n      \"version\" : \"1.0.1\",\n      \"sourceUrl\" : \"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.1/cucumber-artifact-1.0.1.jar\",\n      \"createdAt\" : \"{{created_timestamp}}\"\n    },\n    \"status\" : \"VERIFIED\",\n    \"service\" : \"faas\",\n    \"environment\" : \"pre-prod\",\n    \"createdAt\" : \"{{created_timestamp}}\",\n    \"promotionResult\":{\n      \"id\" : 1,\n      \"createdAt\" : \"{{created_timestamp}}\",\n      \"promotion\": \"jenkins-smoke\",\n      \"infoUrl\" : \"http://local.lookout.com/jenkins/job-id/2/results\",\n      \"status\" : \"SUCCESS\"\n    }\n  }",
    "line": 439,
    "content_type": ""
  }
});
formatter.step({
  "name": "the webhook 2 should be invoked with the JSON:",
  "keyword": "And ",
  "line": 463,
  "doc_string": {
    "value": "  {\n    \"id\" : 1,\n    \"artifact\" : {\n      \"id\" : 1,\n      \"group\" : \"com.example.cucumber\",\n      \"name\" : \"cucumber-artifact\",\n      \"version\" : \"1.0.1\",\n      \"sourceUrl\" : \"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.1/cucumber-artifact-1.0.1.jar\",\n      \"createdAt\" : \"{{created_timestamp}}\"\n    },\n    \"status\" : \"VERIFIED\",\n    \"service\" : \"faas\",\n    \"environment\" : \"pre-prod\",\n    \"createdAt\" : \"{{created_timestamp}}\",\n    \"promotionResult\":{\n      \"id\" : 1,\n      \"createdAt\" : \"{{created_timestamp}}\",\n      \"promotion\": \"jenkins-smoke\",\n      \"infoUrl\" : \"http://local.lookout.com/jenkins/job-id/2/results\",\n      \"status\" : \"SUCCESS\"\n    }\n  }",
    "line": 464,
    "content_type": ""
  }
});
formatter.match({
  "arguments": [
    {
      "val": "promotion",
      "offset": 2
    },
    {
      "val": "completed",
      "offset": 21
    }
  ],
  "location": "WebhookSteps.groovy:24"
});
formatter.result({
  "duration": 8151000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "promotion",
      "offset": 3
    },
    {
      "val": "completed",
      "offset": 34
    },
    {
      "val": "pre-prod",
      "offset": 66
    }
  ],
  "location": "WebhookSteps.groovy:52"
});
formatter.result({
  "duration": 3947000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "COMPLETED",
      "offset": 26
    }
  ],
  "location": "WebhookSteps.groovy:138"
});
formatter.result({
  "duration": 2977000,
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
  "duration": 21687000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 12
    }
  ],
  "location": "WebhookSteps.groovy:115"
});
formatter.result({
  "duration": 1006615000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 12
    }
  ],
  "location": "WebhookSteps.groovy:115"
});
formatter.result({
  "duration": 1002782000,
  "status": "passed"
});
formatter.after({
  "duration": 8401000,
  "status": "passed"
});
formatter.after({
  "duration": 17000,
  "status": "passed"
});
formatter.before({
  "duration": 215295000,
  "status": "passed"
});
formatter.before({
  "duration": 45000,
  "status": "passed"
});
formatter.scenario({
  "id": "webhook-invocation--when-deployment-is-created-with-multiple-webhooks;environment-webhooks-should-be-invoked-when-global-webhook-doesn\u0027t-contain-promotion-event-for-promotion-success",
  "tags": [
    {
      "name": "@freezetime",
      "line": 490
    },
    {
      "name": "@webhook",
      "line": 490
    }
  ],
  "description": "",
  "name": "Environment webhooks should be invoked when global webhook doesn\u0027t contain promotion event for promotion success",
  "keyword": "Scenario",
  "line": 491,
  "type": "scenario"
});
formatter.step({
  "name": "a promotion webhook \"completed\" configuration:",
  "keyword": "Given ",
  "line": 492,
  "doc_string": {
    "value": "  deployment:\n    completed:\n      - http://localhost:10000/job/notify-deployment-completed/build\n      - http://localhost:10000/job/another-notify-deployment-completed/build",
    "line": 493,
    "content_type": ""
  }
});
formatter.step({
  "name": "an promotion environment webhook \"completed\" configuration named \"pre-prod\":",
  "keyword": "And ",
  "line": 499,
  "doc_string": {
    "value": "description: \"DeployDB Primary Integration\"\nwebhooks:\n  promotion:\n    completed:\n      - http://localhost:10000/job/notify-promotion-completed/build\n      - http://localhost:10000/job/another-notify-promotion-completed/build\n",
    "line": 500,
    "content_type": ""
  }
});
formatter.step({
  "name": "there is a deployment in \"COMPLETED\" state",
  "keyword": "And ",
  "line": 509
});
formatter.step({
  "name": "I POST to \"/api/deployments/1/promotions\" with:",
  "keyword": "When ",
  "line": 510,
  "doc_string": {
    "value": "  {\n    \"name\"  : \"jenkins-smoke\",\n    \"status\" : \"SUCCESS\",\n    \"infoUrl\" : \"http://local.lookout.com/jenkins/job-id/2/results\"\n  }",
    "line": 511,
    "content_type": ""
  }
});
formatter.step({
  "name": "the webhook 1 should be invoked with the JSON:",
  "keyword": "Then ",
  "line": 518,
  "doc_string": {
    "value": "  {\n    \"id\" : 1,\n    \"artifact\" : {\n      \"id\" : 1,\n      \"group\" : \"com.example.cucumber\",\n      \"name\" : \"cucumber-artifact\",\n      \"version\" : \"1.0.1\",\n      \"sourceUrl\" : \"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.1/cucumber-artifact-1.0.1.jar\",\n      \"createdAt\" : \"{{created_timestamp}}\"\n    },\n    \"status\" : \"VERIFIED\",\n    \"service\" : \"faas\",\n    \"environment\" : \"pre-prod\",\n    \"createdAt\" : \"{{created_timestamp}}\",\n    \"promotionResult\":{\n      \"id\" : 1,\n      \"createdAt\" : \"{{created_timestamp}}\",\n      \"promotion\": \"jenkins-smoke\",\n      \"infoUrl\" : \"http://local.lookout.com/jenkins/job-id/2/results\",\n      \"status\" : \"SUCCESS\"\n    }\n  }",
    "line": 519,
    "content_type": ""
  }
});
formatter.step({
  "name": "the webhook 2 should be invoked with the JSON:",
  "keyword": "And ",
  "line": 543,
  "doc_string": {
    "value": "  {\n    \"id\" : 1,\n    \"artifact\" : {\n      \"id\" : 1,\n      \"group\" : \"com.example.cucumber\",\n      \"name\" : \"cucumber-artifact\",\n      \"version\" : \"1.0.1\",\n      \"sourceUrl\" : \"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.1/cucumber-artifact-1.0.1.jar\",\n      \"createdAt\" : \"{{created_timestamp}}\"\n    },\n    \"status\" : \"VERIFIED\",\n    \"service\" : \"faas\",\n    \"environment\" : \"pre-prod\",\n    \"createdAt\" : \"{{created_timestamp}}\",\n    \"promotionResult\":{\n      \"id\" : 1,\n      \"createdAt\" : \"{{created_timestamp}}\",\n      \"promotion\": \"jenkins-smoke\",\n      \"infoUrl\" : \"http://local.lookout.com/jenkins/job-id/2/results\",\n      \"status\" : \"SUCCESS\"\n    }\n  }",
    "line": 544,
    "content_type": ""
  }
});
formatter.match({
  "arguments": [
    {
      "val": "promotion",
      "offset": 2
    },
    {
      "val": "completed",
      "offset": 21
    }
  ],
  "location": "WebhookSteps.groovy:24"
});
formatter.result({
  "duration": 8187000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "promotion",
      "offset": 3
    },
    {
      "val": "completed",
      "offset": 34
    },
    {
      "val": "pre-prod",
      "offset": 66
    }
  ],
  "location": "WebhookSteps.groovy:52"
});
formatter.result({
  "duration": 4529000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "COMPLETED",
      "offset": 26
    }
  ],
  "location": "WebhookSteps.groovy:138"
});
formatter.result({
  "duration": 3162000,
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
  "duration": 23021000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 12
    }
  ],
  "location": "WebhookSteps.groovy:115"
});
formatter.result({
  "duration": 1004903000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 12
    }
  ],
  "location": "WebhookSteps.groovy:115"
});
formatter.result({
  "duration": 1001574000,
  "status": "passed"
});
formatter.after({
  "duration": 9394000,
  "status": "passed"
});
formatter.after({
  "duration": 16000,
  "status": "passed"
});
formatter.uri("api/webhook/promotionCompletedFail.feature");
formatter.feature({
  "id": "webhook-invocation-when-promotion-is-completed-with-failed-state",
  "description": "",
  "name": "Webhook invocation when promotion is completed with failed state",
  "keyword": "Feature",
  "line": 1
});
formatter.before({
  "duration": 222806000,
  "status": "passed"
});
formatter.before({
  "duration": 44000,
  "status": "passed"
});
formatter.scenario({
  "id": "webhook-invocation-when-promotion-is-completed-with-failed-state;webhooks-should-be-invoked-when-promotion-is-completed-in-failed-state",
  "tags": [
    {
      "name": "@freezetime",
      "line": 3
    },
    {
      "name": "@webhook",
      "line": 3
    }
  ],
  "description": "",
  "name": "Webhooks should be invoked when promotion is completed in failed state",
  "keyword": "Scenario",
  "line": 4,
  "type": "scenario"
});
formatter.step({
  "name": "a promotion webhook \"completed\" configuration:",
  "keyword": "Given ",
  "line": 5,
  "doc_string": {
    "value": "  promotion:\n    completed:\n      - http://localhost:10000/job/notify-promotion-completed/build",
    "line": 6,
    "content_type": ""
  }
});
formatter.step({
  "name": "there is a deployment in \"COMPLETED\" state",
  "keyword": "And ",
  "line": 11
});
formatter.step({
  "name": "I POST to \"/api/deployments/1/promotions\" with:",
  "keyword": "When ",
  "line": 12,
  "doc_string": {
    "value": "  {\n    \"name\"  : \"jenkins-smoke\",\n    \"status\" : \"FAILED\",\n    \"infoUrl\" : \"http://local.lookout.com/jenkins/job-id/2/results\"\n  }",
    "line": 13,
    "content_type": ""
  }
});
formatter.step({
  "name": "the webhook should be invoked with the JSON:",
  "keyword": "Then ",
  "line": 20,
  "doc_string": {
    "value": "  {\n    \"id\" : 1,\n    \"artifact\" : {\n      \"id\" : 1,\n      \"group\" : \"com.example.cucumber\",\n      \"name\" : \"cucumber-artifact\",\n      \"version\" : \"1.0.1\",\n      \"sourceUrl\" : \"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.1/cucumber-artifact-1.0.1.jar\",\n      \"createdAt\" : \"{{created_timestamp}}\"\n    },\n    \"status\" : \"VERIFIED\",\n    \"service\" : \"faas\",\n    \"environment\" : \"pre-prod\",\n    \"createdAt\" : \"{{created_timestamp}}\",\n    \"promotionResult\":{\n      \"id\" : 1,\n      \"createdAt\" : \"{{created_timestamp}}\",\n      \"promotion\": \"jenkins-smoke\",\n      \"infoUrl\" : \"http://local.lookout.com/jenkins/job-id/2/results\",\n      \"status\" : \"FAILED\"\n    }\n  }",
    "line": 21,
    "content_type": ""
  }
});
formatter.step({
  "name": "the webhook should have the headers:",
  "keyword": "And ",
  "line": 45,
  "rows": [
    {
      "cells": [
        "Header Name",
        "Value"
      ],
      "line": 46
    },
    {
      "cells": [
        "Content-Type",
        "application/vnd.deploydb.promotioncompleted.v1+json"
      ],
      "line": 47
    }
  ]
});
formatter.match({
  "arguments": [
    {
      "val": "promotion",
      "offset": 2
    },
    {
      "val": "completed",
      "offset": 21
    }
  ],
  "location": "WebhookSteps.groovy:24"
});
formatter.result({
  "duration": 8725000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "COMPLETED",
      "offset": 26
    }
  ],
  "location": "WebhookSteps.groovy:138"
});
formatter.result({
  "duration": 3791000,
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
  "duration": 22321000,
  "status": "passed"
});
formatter.match({
  "location": "WebhookSteps.groovy:96"
});
formatter.result({
  "duration": 1004517000,
  "status": "passed"
});
formatter.match({
  "location": "WebhookSteps.groovy:175"
});
formatter.result({
  "duration": 209000,
  "status": "passed"
});
formatter.after({
  "duration": 9518000,
  "status": "passed"
});
formatter.after({
  "duration": 18000,
  "status": "passed"
});
formatter.before({
  "duration": 262660000,
  "status": "passed"
});
formatter.before({
  "duration": 47000,
  "status": "passed"
});
formatter.scenario({
  "id": "webhook-invocation-when-promotion-is-completed-with-failed-state;environment-webhooks-should-be-invoked-when-promotions-are-completed-in-failed-state",
  "tags": [
    {
      "name": "@freezetime",
      "line": 50
    },
    {
      "name": "@webhook",
      "line": 50
    }
  ],
  "description": "",
  "name": "Environment webhooks should be invoked when promotions are completed in failed state",
  "keyword": "Scenario",
  "line": 51,
  "type": "scenario"
});
formatter.step({
  "name": "an promotion environment webhook \"completed\" configuration named \"pre-prod\":",
  "keyword": "Given ",
  "line": 52,
  "doc_string": {
    "value": "description: \"DeployDB Primary Integration\"\nwebhooks:\n  promotion:\n    completed:\n      - http://localhost:10000/job/notify-promotion-completed/build",
    "line": 53,
    "content_type": ""
  }
});
formatter.step({
  "name": "there is a deployment in \"COMPLETED\" state",
  "keyword": "And ",
  "line": 60
});
formatter.step({
  "name": "I POST to \"/api/deployments/1/promotions\" with:",
  "keyword": "When ",
  "line": 61,
  "doc_string": {
    "value": "  {\n    \"name\"  : \"jenkins-smoke\",\n    \"status\" : \"FAILED\",\n    \"infoUrl\" : \"http://local.lookout.com/jenkins/job-id/2/results\"\n  }",
    "line": 62,
    "content_type": ""
  }
});
formatter.step({
  "name": "the webhook should be invoked with the JSON:",
  "keyword": "Then ",
  "line": 69,
  "doc_string": {
    "value": "  {\n    \"id\" : 1,\n    \"artifact\" : {\n      \"id\" : 1,\n      \"group\" : \"com.example.cucumber\",\n      \"name\" : \"cucumber-artifact\",\n      \"version\" : \"1.0.1\",\n      \"sourceUrl\" : \"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.1/cucumber-artifact-1.0.1.jar\",\n      \"createdAt\" : \"{{created_timestamp}}\"\n    },\n    \"status\" : \"VERIFIED\",\n    \"service\" : \"faas\",\n    \"environment\" : \"pre-prod\",\n    \"createdAt\" : \"{{created_timestamp}}\",\n    \"promotionResult\":{\n      \"id\" : 1,\n      \"createdAt\" : \"{{created_timestamp}}\",\n      \"promotion\": \"jenkins-smoke\",\n      \"infoUrl\" : \"http://local.lookout.com/jenkins/job-id/2/results\",\n      \"status\" : \"FAILED\"\n    }\n  }",
    "line": 70,
    "content_type": ""
  }
});
formatter.match({
  "arguments": [
    {
      "val": "promotion",
      "offset": 3
    },
    {
      "val": "completed",
      "offset": 34
    },
    {
      "val": "pre-prod",
      "offset": 66
    }
  ],
  "location": "WebhookSteps.groovy:52"
});
formatter.result({
  "duration": 5954000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "COMPLETED",
      "offset": 26
    }
  ],
  "location": "WebhookSteps.groovy:138"
});
formatter.result({
  "duration": 3322000,
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
  "duration": 21898000,
  "status": "passed"
});
formatter.match({
  "location": "WebhookSteps.groovy:96"
});
formatter.result({
  "duration": 1003444000,
  "status": "passed"
});
formatter.after({
  "duration": 9943000,
  "status": "passed"
});
formatter.after({
  "duration": 18000,
  "status": "passed"
});
formatter.uri("api/webhook/promotionCompletedSuccess.feature");
formatter.feature({
  "id": "webhook-invocation-when-promotion-is-completed-with-success-state",
  "description": "",
  "name": "Webhook invocation when promotion is completed with success state",
  "keyword": "Feature",
  "line": 1
});
formatter.before({
  "duration": 224882000,
  "status": "passed"
});
formatter.before({
  "duration": 73000,
  "status": "passed"
});
formatter.scenario({
  "id": "webhook-invocation-when-promotion-is-completed-with-success-state;webhooks-should-be-invoked-when-promotion-is-completed-in-success-state",
  "tags": [
    {
      "name": "@freezetime",
      "line": 3
    },
    {
      "name": "@webhook",
      "line": 3
    }
  ],
  "description": "",
  "name": "Webhooks should be invoked when promotion is completed in success state",
  "keyword": "Scenario",
  "line": 4,
  "type": "scenario"
});
formatter.step({
  "name": "a promotion webhook \"completed\" configuration:",
  "keyword": "Given ",
  "line": 5,
  "doc_string": {
    "value": "  promotion:\n    completed:\n      - http://localhost:10000/job/notify-promotion-completed/build",
    "line": 6,
    "content_type": ""
  }
});
formatter.step({
  "name": "there is a deployment in \"COMPLETED\" state",
  "keyword": "And ",
  "line": 11
});
formatter.step({
  "name": "I POST to \"/api/deployments/1/promotions\" with:",
  "keyword": "When ",
  "line": 12,
  "doc_string": {
    "value": "  {\n    \"name\"  : \"jenkins-smoke\",\n    \"status\" : \"SUCCESS\",\n    \"infoUrl\" : \"http://local.lookout.com/jenkins/job-id/2/results\"\n  }",
    "line": 13,
    "content_type": ""
  }
});
formatter.step({
  "name": "the webhook should be invoked with the JSON:",
  "keyword": "Then ",
  "line": 20,
  "doc_string": {
    "value": "  {\n    \"id\" : 1,\n    \"artifact\" : {\n      \"id\" : 1,\n      \"group\" : \"com.example.cucumber\",\n      \"name\" : \"cucumber-artifact\",\n      \"version\" : \"1.0.1\",\n      \"sourceUrl\" : \"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.1/cucumber-artifact-1.0.1.jar\",\n      \"createdAt\" : \"{{created_timestamp}}\"\n    },\n    \"status\" : \"VERIFIED\",\n    \"service\" : \"faas\",\n    \"environment\" : \"pre-prod\",\n    \"createdAt\" : \"{{created_timestamp}}\",\n    \"promotionResult\":{\n      \"id\" : 1,\n      \"createdAt\" : \"{{created_timestamp}}\",\n      \"promotion\": \"jenkins-smoke\",\n      \"infoUrl\" : \"http://local.lookout.com/jenkins/job-id/2/results\",\n      \"status\" : \"SUCCESS\"\n    }\n  }",
    "line": 21,
    "content_type": ""
  }
});
formatter.step({
  "name": "the webhook should have the headers:",
  "keyword": "And ",
  "line": 45,
  "rows": [
    {
      "cells": [
        "Header Name",
        "Value"
      ],
      "line": 46
    },
    {
      "cells": [
        "Content-Type",
        "application/vnd.deploydb.promotioncompleted.v1+json"
      ],
      "line": 47
    }
  ]
});
formatter.match({
  "arguments": [
    {
      "val": "promotion",
      "offset": 2
    },
    {
      "val": "completed",
      "offset": 21
    }
  ],
  "location": "WebhookSteps.groovy:24"
});
formatter.result({
  "duration": 8624000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "COMPLETED",
      "offset": 26
    }
  ],
  "location": "WebhookSteps.groovy:138"
});
formatter.result({
  "duration": 3471000,
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
  "duration": 23314000,
  "status": "passed"
});
formatter.match({
  "location": "WebhookSteps.groovy:96"
});
formatter.result({
  "duration": 1005951000,
  "status": "passed"
});
formatter.match({
  "location": "WebhookSteps.groovy:175"
});
formatter.result({
  "duration": 193000,
  "status": "passed"
});
formatter.after({
  "duration": 9379000,
  "status": "passed"
});
formatter.after({
  "duration": 18000,
  "status": "passed"
});
formatter.before({
  "duration": 215549000,
  "status": "passed"
});
formatter.before({
  "duration": 56000,
  "status": "passed"
});
formatter.scenario({
  "id": "webhook-invocation-when-promotion-is-completed-with-success-state;environment-webhooks-should-be-invoked-when-promotions-are-completed-in-success-state",
  "tags": [
    {
      "name": "@freezetime",
      "line": 50
    },
    {
      "name": "@webhook",
      "line": 50
    }
  ],
  "description": "",
  "name": "Environment webhooks should be invoked when promotions are completed in success state",
  "keyword": "Scenario",
  "line": 51,
  "type": "scenario"
});
formatter.step({
  "name": "an promotion environment webhook \"completed\" configuration named \"pre-prod\":",
  "keyword": "Given ",
  "line": 52,
  "doc_string": {
    "value": "description: \"DeployDB Primary Integration\"\nwebhooks:\n  promotion:\n    completed:\n      - http://localhost:10000/job/notify-promotion-completed/build",
    "line": 53,
    "content_type": ""
  }
});
formatter.step({
  "name": "there is a deployment in \"COMPLETED\" state",
  "keyword": "And ",
  "line": 60
});
formatter.step({
  "name": "I POST to \"/api/deployments/1/promotions\" with:",
  "keyword": "When ",
  "line": 61,
  "doc_string": {
    "value": "  {\n    \"name\"  : \"jenkins-smoke\",\n    \"status\" : \"SUCCESS\",\n    \"infoUrl\" : \"http://local.lookout.com/jenkins/job-id/2/results\"\n  }",
    "line": 62,
    "content_type": ""
  }
});
formatter.step({
  "name": "the webhook should be invoked with the JSON:",
  "keyword": "Then ",
  "line": 69,
  "doc_string": {
    "value": "  {\n    \"id\" : 1,\n    \"artifact\" : {\n      \"id\" : 1,\n      \"group\" : \"com.example.cucumber\",\n      \"name\" : \"cucumber-artifact\",\n      \"version\" : \"1.0.1\",\n      \"sourceUrl\" : \"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.1/cucumber-artifact-1.0.1.jar\",\n      \"createdAt\" : \"{{created_timestamp}}\"\n    },\n    \"status\" : \"VERIFIED\",\n    \"service\" : \"faas\",\n    \"environment\" : \"pre-prod\",\n    \"createdAt\" : \"{{created_timestamp}}\",\n    \"promotionResult\":{\n      \"id\" : 1,\n      \"createdAt\" : \"{{created_timestamp}}\",\n      \"promotion\": \"jenkins-smoke\",\n      \"infoUrl\" : \"http://local.lookout.com/jenkins/job-id/2/results\",\n      \"status\" : \"SUCCESS\"\n    }\n  }",
    "line": 70,
    "content_type": ""
  }
});
formatter.match({
  "arguments": [
    {
      "val": "promotion",
      "offset": 3
    },
    {
      "val": "completed",
      "offset": 34
    },
    {
      "val": "pre-prod",
      "offset": 66
    }
  ],
  "location": "WebhookSteps.groovy:52"
});
formatter.result({
  "duration": 6046000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "COMPLETED",
      "offset": 26
    }
  ],
  "location": "WebhookSteps.groovy:138"
});
formatter.result({
  "duration": 3442000,
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
  "duration": 19652000,
  "status": "passed"
});
formatter.match({
  "location": "WebhookSteps.groovy:96"
});
formatter.result({
  "duration": 1001876000,
  "status": "passed"
});
formatter.after({
  "duration": 9834000,
  "status": "passed"
});
formatter.after({
  "duration": 16000,
  "status": "passed"
});
});