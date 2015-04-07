$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("api/artifact/creating.feature");
formatter.feature({
  "id": "artifact-create-apis",
  "description": "\nAs a RESTful client or user\nI should be able to create new artifacts in the system",
  "name": "Artifact CREATE APIs",
  "keyword": "Feature",
  "line": 1
});
formatter.before({
  "duration": 4274248000,
  "status": "passed"
});
formatter.before({
  "duration": 6896000,
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
  "duration": 102942000,
  "status": "passed"
});
formatter.match({
  "location": "EnvironmentSteps.groovy:16"
});
formatter.result({
  "duration": 4031000,
  "status": "passed"
});
formatter.match({
  "location": "PipelineSteps.groovy:17"
});
formatter.result({
  "duration": 4248000,
  "status": "passed"
});
formatter.match({
  "location": "ServiceSteps.groovy:16"
});
formatter.result({
  "duration": 2555000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/api/artifacts",
      "offset": 11
    }
  ],
  "location": "HttpSteps.groovy:25"
});
formatter.result({
  "duration": 805505000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "201",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:74"
});
formatter.result({
  "duration": 7141000,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:83"
});
formatter.result({
  "duration": 74589000,
  "status": "passed"
});
formatter.after({
  "duration": 53542000,
  "status": "passed"
});
formatter.after({
  "duration": 702000,
  "status": "passed"
});
formatter.before({
  "duration": 1330955000,
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
  "location": "HttpSteps.groovy:25"
});
formatter.result({
  "duration": 56322000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "422",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:74"
});
formatter.result({
  "duration": 278000,
  "status": "passed"
});
formatter.after({
  "duration": 31578000,
  "status": "passed"
});
formatter.before({
  "duration": 866687000,
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
  "location": "HttpSteps.groovy:25"
});
formatter.result({
  "duration": 44212000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "422",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:74"
});
formatter.result({
  "duration": 122000,
  "status": "passed"
});
formatter.after({
  "duration": 16948000,
  "status": "passed"
});
formatter.before({
  "duration": 829560000,
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
  "location": "HttpSteps.groovy:25"
});
formatter.result({
  "duration": 36913000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "422",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:74"
});
formatter.result({
  "duration": 108000,
  "status": "passed"
});
formatter.after({
  "duration": 14939000,
  "status": "passed"
});
formatter.before({
  "duration": 911696000,
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
  "location": "HttpSteps.groovy:25"
});
formatter.result({
  "duration": 37210000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "422",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:74"
});
formatter.result({
  "duration": 128000,
  "status": "passed"
});
formatter.after({
  "duration": 16836000,
  "status": "passed"
});
formatter.before({
  "duration": 850240000,
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
  "duration": 49000,
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
  "duration": 1683000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/api/artifacts",
      "offset": 11
    }
  ],
  "location": "HttpSteps.groovy:53"
});
formatter.result({
  "duration": 27682000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "422",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:74"
});
formatter.result({
  "duration": 109000,
  "status": "passed"
});
formatter.after({
  "duration": 11017000,
  "status": "passed"
});
formatter.before({
  "duration": 759010000,
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
  "duration": 28000,
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
  "duration": 614000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/api/artifacts",
      "offset": 11
    }
  ],
  "location": "HttpSteps.groovy:53"
});
formatter.result({
  "duration": 24471000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "422",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:74"
});
formatter.result({
  "duration": 106000,
  "status": "passed"
});
formatter.after({
  "duration": 9916000,
  "status": "passed"
});
formatter.before({
  "duration": 764839000,
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
  "duration": 555000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/api/artifacts",
      "offset": 11
    }
  ],
  "location": "HttpSteps.groovy:53"
});
formatter.result({
  "duration": 24320000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "422",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:74"
});
formatter.result({
  "duration": 105000,
  "status": "passed"
});
formatter.after({
  "duration": 11457000,
  "status": "passed"
});
formatter.before({
  "duration": 704481000,
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
  "duration": 40000,
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
  "duration": 537000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/api/artifacts",
      "offset": 11
    }
  ],
  "location": "HttpSteps.groovy:53"
});
formatter.result({
  "duration": 21110000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "422",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:74"
});
formatter.result({
  "duration": 107000,
  "status": "passed"
});
formatter.after({
  "duration": 12090000,
  "status": "passed"
});
formatter.before({
  "duration": 692298000,
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
  "duration": 236000,
  "status": "passed"
});
formatter.match({
  "location": "PipelineSteps.groovy:17"
});
formatter.result({
  "duration": 184000,
  "status": "passed"
});
formatter.match({
  "location": "ServiceSteps.groovy:16"
});
formatter.result({
  "duration": 157000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/api/artifacts",
      "offset": 11
    }
  ],
  "location": "HttpSteps.groovy:25"
});
formatter.result({
  "duration": 33567000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "404",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:74"
});
formatter.result({
  "duration": 108000,
  "status": "passed"
});
formatter.after({
  "duration": 11139000,
  "status": "passed"
});
formatter.before({
  "duration": 737036000,
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
  "duration": 969000,
  "status": "passed"
});
formatter.match({
  "location": "PipelineSteps.groovy:17"
});
formatter.result({
  "duration": 250000,
  "status": "passed"
});
formatter.match({
  "location": "ServiceSteps.groovy:16"
});
formatter.result({
  "duration": 210000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/api/artifacts",
      "offset": 11
    }
  ],
  "location": "HttpSteps.groovy:25"
});
formatter.result({
  "duration": 26137000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "404",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:74"
});
formatter.result({
  "duration": 101000,
  "status": "passed"
});
formatter.after({
  "duration": 9548000,
  "status": "passed"
});
formatter.before({
  "duration": 697269000,
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
  "duration": 307000,
  "status": "passed"
});
formatter.match({
  "location": "EnvironmentSteps.groovy:16"
});
formatter.result({
  "duration": 246000,
  "status": "passed"
});
formatter.match({
  "location": "ServiceSteps.groovy:16"
});
formatter.result({
  "duration": 187000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/api/artifacts",
      "offset": 11
    }
  ],
  "location": "HttpSteps.groovy:25"
});
formatter.result({
  "duration": 28731000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "404",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:74"
});
formatter.result({
  "duration": 114000,
  "status": "passed"
});
formatter.after({
  "duration": 9576000,
  "status": "passed"
});
formatter.before({
  "duration": 702661000,
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
  "duration": 220000,
  "status": "passed"
});
formatter.match({
  "location": "EnvironmentSteps.groovy:16"
});
formatter.result({
  "duration": 165000,
  "status": "passed"
});
formatter.match({
  "location": "PipelineSteps.groovy:17"
});
formatter.result({
  "duration": 187000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/api/artifacts",
      "offset": 11
    }
  ],
  "location": "HttpSteps.groovy:25"
});
formatter.result({
  "duration": 28144000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "404",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:74"
});
formatter.result({
  "duration": 199000,
  "status": "passed"
});
formatter.after({
  "duration": 10000000,
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
  "duration": 676414000,
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
  "duration": 4803000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/api/artifacts/1",
      "offset": 10
    }
  ],
  "location": "HttpSteps.groovy:21"
});
formatter.result({
  "duration": 20760000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "405",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:74"
});
formatter.result({
  "duration": 150000,
  "status": "passed"
});
formatter.after({
  "duration": 9347000,
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
  "duration": 695456000,
  "status": "passed"
});
formatter.before({
  "duration": 71000,
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
  "duration": 3525000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/api/artifacts/1",
      "offset": 7
    }
  ],
  "location": "HttpSteps.groovy:17"
});
formatter.result({
  "duration": 45350000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:74"
});
formatter.result({
  "duration": 157000,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:83"
});
formatter.result({
  "duration": 4607000,
  "status": "failed",
  "error_message": "Assertion failed: \n\nassert bodyNode \u003d\u003d expectedNode\n       |        |  |\n       |        |  {\"id\":1,\"group\":\"com.example.cucumber\",\"name\":\"cucumber-artifact\",\"version\":\"1.0.1\",\"sourceUrl\":\"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.1/cucumber-artifact-1.0.1.jar\",\"createdAt\":\"2015-04-07T22:19:10.380Z\"}\n       |        false\n       {\"id\":1,\"createdAt\":\"2015-04-07T22:19:10.000Z\",\"group\":\"com.example.cucumber\",\"name\":\"cucumber-artifact\",\"version\":\"1.0.1\",\"sourceUrl\":\"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.1/cucumber-artifact-1.0.1.jar\"}\n\n\tat HttpSteps$_run_closure12.doCall(HttpSteps.groovy:110)\n\tat ✽.And the body should be JSON:(api/artifact/reading.feature:13)\n"
});
formatter.after({
  "duration": 11657000,
  "status": "passed"
});
formatter.after({
  "duration": 28000,
  "status": "passed"
});
formatter.before({
  "duration": 738259000,
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
  "duration": 3532000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/api/artifacts/1",
      "offset": 7
    }
  ],
  "location": "HttpSteps.groovy:61"
});
formatter.result({
  "duration": 34010000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "406",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:74"
});
formatter.result({
  "duration": 415000,
  "status": "passed"
});
formatter.after({
  "duration": 12480000,
  "status": "passed"
});
formatter.before({
  "duration": 779216000,
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
  "location": "HttpSteps.groovy:17"
});
formatter.result({
  "duration": 30105000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "404",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:74"
});
formatter.result({
  "duration": 237000,
  "status": "passed"
});
formatter.after({
  "duration": 13448000,
  "status": "passed"
});
formatter.before({
  "duration": 733356000,
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
  "location": "HttpSteps.groovy:17"
});
formatter.result({
  "duration": 32441000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:74"
});
formatter.result({
  "duration": 163000,
  "status": "passed"
});
formatter.after({
  "duration": 12195000,
  "status": "passed"
});
formatter.before({
  "duration": 789455000,
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
  "duration": 4465000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/api/artifacts/by-module/com.example.cucumber:cucumber-artifact",
      "offset": 7
    }
  ],
  "location": "HttpSteps.groovy:17"
});
formatter.result({
  "duration": 65674000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:74"
});
formatter.result({
  "duration": 104000,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:83"
});
formatter.result({
  "duration": 6306000,
  "status": "failed",
  "error_message": "Assertion failed: \n\nassert bodyNode \u003d\u003d expectedNode\n       |        |  |\n       |        |  [{\"id\":1,\"createdAt\":\"2015-04-07T22:19:13.638Z\",\"group\":\"com.example.cucumber\",\"name\":\"cucumber-artifact\",\"version\":\"1.0.1\",\"sourceUrl\":\"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.1/cucumber-artifact-1.0.1.jar\"}]\n       |        false\n       [{\"id\":1,\"createdAt\":\"2015-04-07T22:19:14.000Z\",\"group\":\"com.example.cucumber\",\"name\":\"cucumber-artifact\",\"version\":\"1.0.1\",\"sourceUrl\":\"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.1/cucumber-artifact-1.0.1.jar\"}]\n\n\tat HttpSteps$_run_closure12.doCall(HttpSteps.groovy:110)\n\tat ✽.And the body should be JSON:(api/artifact/reading.feature:69)\n"
});
formatter.after({
  "duration": 13762000,
  "status": "passed"
});
formatter.after({
  "duration": 20000,
  "status": "passed"
});
formatter.before({
  "duration": 826559000,
  "status": "passed"
});
formatter.before({
  "duration": 66000,
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
    "value": "  [{\n    \"id\" : 1,\n    \"createdAt\" : \"{{created_timestamp}}\",\n    \"group\" : \"com.example.cucumber\",\n    \"name\" : \"cucumber-artifact\",\n    \"version\" : \"1.0.1\",\n    \"sourceUrl\" : \"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.1/cucumber-artifact-1.0.1.jar\"\n  },\n  {\n    \"id\" : 2,\n    \"createdAt\" : \"{{created_timestamp}}\",\n    \"group\" : \"com.example.cucumber\",\n    \"name\" : \"cucumber-artifact\",\n    \"version\" : \"1.0.2\",\n    \"sourceUrl\" : \"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.2/cucumber-artifact-1.0.2.jar\"\n  }]",
    "line": 88,
    "content_type": ""
  }
});
formatter.match({
  "location": "ArtifactSteps.groovy:13"
});
formatter.result({
  "duration": 8235000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/api/artifacts/by-module/com.example.cucumber:cucumber-artifact?pageNumber\u003d0\u0026perPageSize\u003d5",
      "offset": 7
    }
  ],
  "location": "HttpSteps.groovy:17"
});
formatter.result({
  "duration": 43236000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:74"
});
formatter.result({
  "duration": 145000,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:83"
});
formatter.result({
  "duration": 11184000,
  "status": "failed",
  "error_message": "Assertion failed: \n\nassert bodyNode \u003d\u003d expectedNode\n       |        |  |\n       |        |  [{\"id\":1,\"createdAt\":\"2015-04-07T22:19:14.559Z\",\"group\":\"com.example.cucumber\",\"name\":\"cucumber-artifact\",\"version\":\"1.0.1\",\"sourceUrl\":\"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.1/cucumber-artifact-1.0.1.jar\"},{\"id\":2,\"createdAt\":\"2015-04-07T22:19:14.559Z\",\"group\":\"com.example.cucumber\",\"name\":\"cucumber-artifact\",\"version\":\"1.0.2\",\"sourceUrl\":\"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.2/cucumber-artifact-1.0.2.jar\"}]\n       |        false\n       [{\"id\":1,\"createdAt\":\"2015-04-07T22:19:15.000Z\",\"group\":\"com.example.cucumber\",\"name\":\"cucumber-artifact\",\"version\":\"1.0.1\",\"sourceUrl\":\"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.1/cucumber-artifact-1.0.1.jar\"},{\"id\":2,\"createdAt\":\"2015-04-07T22:19:15.000Z\",\"group\":\"com.example.cucumber\",\"name\":\"cucumber-artifact\",\"version\":\"1.0.2\",\"sourceUrl\":\"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.2/cucumber-artifact-1.0.2.jar\"}]\n\n\tat HttpSteps$_run_closure12.doCall(HttpSteps.groovy:110)\n\tat ✽.And the body should be JSON:(api/artifact/reading.feature:87)\n"
});
formatter.after({
  "duration": 12230000,
  "status": "passed"
});
formatter.after({
  "duration": 54000,
  "status": "passed"
});
formatter.before({
  "duration": 874446000,
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
  "location": "HttpSteps.groovy:17"
});
formatter.result({
  "duration": 28167000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "404",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:74"
});
formatter.result({
  "duration": 110000,
  "status": "passed"
});
formatter.after({
  "duration": 62044000,
  "status": "passed"
});
formatter.before({
  "duration": 797665000,
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
  "location": "HttpSteps.groovy:17"
});
formatter.result({
  "duration": 27058000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "404",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:74"
});
formatter.result({
  "duration": 150000,
  "status": "passed"
});
formatter.after({
  "duration": 9657000,
  "status": "passed"
});
formatter.before({
  "duration": 829253000,
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
  "location": "HttpSteps.groovy:17"
});
formatter.result({
  "duration": 29286000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:74"
});
formatter.result({
  "duration": 150000,
  "status": "passed"
});
formatter.after({
  "duration": 12882000,
  "status": "passed"
});
formatter.before({
  "duration": 796047000,
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
  "duration": 9828000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/api/artifacts/by-module/com.example.cucumber:cucumber-artifact?pageNumber\u003d0\u0026perPageSize\u003d0",
      "offset": 7
    }
  ],
  "location": "HttpSteps.groovy:17"
});
formatter.result({
  "duration": 22576000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:74"
});
formatter.result({
  "duration": 93000,
  "status": "passed"
});
formatter.after({
  "duration": 10379000,
  "status": "passed"
});
formatter.before({
  "duration": 803254000,
  "status": "passed"
});
formatter.before({
  "duration": 69000,
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
  "duration": 5651000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/api/artifacts/by-module/com.example.cucumber:cucumber-artifact/latest",
      "offset": 7
    }
  ],
  "location": "HttpSteps.groovy:17"
});
formatter.result({
  "duration": 28735000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:74"
});
formatter.result({
  "duration": 143000,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:83"
});
formatter.result({
  "duration": 1800000,
  "status": "failed",
  "error_message": "Assertion failed: \n\nassert bodyNode \u003d\u003d expectedNode\n       |        |  |\n       |        |  {\"id\":1,\"createdAt\":\"2015-04-07T22:19:18.964Z\",\"group\":\"com.example.cucumber\",\"name\":\"cucumber-artifact\",\"version\":\"1.0.1\",\"sourceUrl\":\"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.1/cucumber-artifact-1.0.1.jar\"}\n       |        false\n       {\"id\":1,\"createdAt\":\"2015-04-07T22:19:19.000Z\",\"group\":\"com.example.cucumber\",\"name\":\"cucumber-artifact\",\"version\":\"1.0.1\",\"sourceUrl\":\"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.1/cucumber-artifact-1.0.1.jar\"}\n\n\tat HttpSteps$_run_closure12.doCall(HttpSteps.groovy:110)\n\tat ✽.And the body should be JSON:(api/artifact/reading.feature:138)\n"
});
formatter.after({
  "duration": 11073000,
  "status": "passed"
});
formatter.after({
  "duration": 24000,
  "status": "passed"
});
formatter.before({
  "duration": 805410000,
  "status": "passed"
});
formatter.before({
  "duration": 65000,
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
  "duration": 6795000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/api/artifacts/by-module/com.example.cucumber:cucumber-artifact/latest",
      "offset": 7
    }
  ],
  "location": "HttpSteps.groovy:17"
});
formatter.result({
  "duration": 24398000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:74"
});
formatter.result({
  "duration": 125000,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:83"
});
formatter.result({
  "duration": 1725000,
  "status": "failed",
  "error_message": "Assertion failed: \n\nassert bodyNode \u003d\u003d expectedNode\n       |        |  |\n       |        |  {\"id\":2,\"createdAt\":\"2015-04-07T22:19:19.822Z\",\"group\":\"com.example.cucumber\",\"name\":\"cucumber-artifact\",\"version\":\"1.0.2\",\"sourceUrl\":\"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.2/cucumber-artifact-1.0.2.jar\"}\n       |        false\n       {\"id\":2,\"createdAt\":\"2015-04-07T22:19:20.000Z\",\"group\":\"com.example.cucumber\",\"name\":\"cucumber-artifact\",\"version\":\"1.0.2\",\"sourceUrl\":\"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.2/cucumber-artifact-1.0.2.jar\"}\n\n\tat HttpSteps$_run_closure12.doCall(HttpSteps.groovy:110)\n\tat ✽.And the body should be JSON:(api/artifact/reading.feature:156)\n"
});
formatter.after({
  "duration": 10986000,
  "status": "passed"
});
formatter.after({
  "duration": 37000,
  "status": "passed"
});
formatter.before({
  "duration": 816832000,
  "status": "passed"
});
formatter.before({
  "duration": 76000,
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
  "duration": 9737000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/api/artifacts?query\u003d1.0.1",
      "offset": 7
    }
  ],
  "location": "HttpSteps.groovy:17"
});
formatter.result({
  "duration": 37729000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:74"
});
formatter.result({
  "duration": 143000,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:83"
});
formatter.result({
  "duration": 1567000,
  "status": "failed",
  "error_message": "Assertion failed: \n\nassert bodyNode \u003d\u003d expectedNode\n       |        |  |\n       |        |  [{\"id\":1,\"createdAt\":\"2015-04-07T22:19:20.687Z\",\"group\":\"com.example.cucumber\",\"name\":\"cucumber-artifact\",\"version\":\"1.0.1\",\"sourceUrl\":\"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.1/cucumber-artifact-1.0.1.jar\"}]\n       |        false\n       [{\"id\":1,\"createdAt\":\"2015-04-07T22:19:21.000Z\",\"group\":\"com.example.cucumber\",\"name\":\"cucumber-artifact\",\"version\":\"1.0.1\",\"sourceUrl\":\"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.1/cucumber-artifact-1.0.1.jar\"}]\n\n\tat HttpSteps$_run_closure12.doCall(HttpSteps.groovy:110)\n\tat ✽.And the body should be JSON:(api/artifact/reading.feature:174)\n"
});
formatter.after({
  "duration": 10015000,
  "status": "passed"
});
formatter.after({
  "duration": 25000,
  "status": "passed"
});
formatter.before({
  "duration": 856852000,
  "status": "passed"
});
formatter.before({
  "duration": 95000,
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
    "value": " [{\n    \"id\" : 1,\n    \"createdAt\" : \"{{created_timestamp}}\",\n    \"group\" : \"com.example.cucumber\",\n    \"name\" : \"cucumber-artifact\",\n    \"version\" : \"1.0.1\",\n    \"sourceUrl\" : \"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.1/cucumber-artifact-1.0.1.jar\"\n  },\n  {\n    \"id\" : 2,\n    \"createdAt\" : \"{{created_timestamp}}\",\n    \"group\" : \"com.example.cucumber\",\n    \"name\" : \"cucumber-artifact\",\n    \"version\" : \"1.0.2\",\n    \"sourceUrl\" : \"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.2/cucumber-artifact-1.0.2.jar\"\n  }]",
    "line": 193,
    "content_type": ""
  }
});
formatter.match({
  "location": "ArtifactSteps.groovy:13"
});
formatter.result({
  "duration": 6390000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/api/artifacts?query\u003d1.0",
      "offset": 7
    }
  ],
  "location": "HttpSteps.groovy:17"
});
formatter.result({
  "duration": 30072000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:74"
});
formatter.result({
  "duration": 154000,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:83"
});
formatter.result({
  "duration": 1995000,
  "status": "failed",
  "error_message": "Assertion failed: \n\nassert bodyNode \u003d\u003d expectedNode\n       |        |  |\n       |        |  [{\"id\":1,\"createdAt\":\"2015-04-07T22:19:21.608Z\",\"group\":\"com.example.cucumber\",\"name\":\"cucumber-artifact\",\"version\":\"1.0.1\",\"sourceUrl\":\"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.1/cucumber-artifact-1.0.1.jar\"},{\"id\":2,\"createdAt\":\"2015-04-07T22:19:21.608Z\",\"group\":\"com.example.cucumber\",\"name\":\"cucumber-artifact\",\"version\":\"1.0.2\",\"sourceUrl\":\"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.2/cucumber-artifact-1.0.2.jar\"}]\n       |        false\n       [{\"id\":1,\"createdAt\":\"2015-04-07T22:19:22.000Z\",\"group\":\"com.example.cucumber\",\"name\":\"cucumber-artifact\",\"version\":\"1.0.1\",\"sourceUrl\":\"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.1/cucumber-artifact-1.0.1.jar\"},{\"id\":2,\"createdAt\":\"2015-04-07T22:19:22.000Z\",\"group\":\"com.example.cucumber\",\"name\":\"cucumber-artifact\",\"version\":\"1.0.2\",\"sourceUrl\":\"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.2/cucumber-artifact-1.0.2.jar\"}]\n\n\tat HttpSteps$_run_closure12.doCall(HttpSteps.groovy:110)\n\tat ✽.And the body should be JSON:(api/artifact/reading.feature:192)\n"
});
formatter.after({
  "duration": 10228000,
  "status": "passed"
});
formatter.after({
  "duration": 26000,
  "status": "passed"
});
formatter.before({
  "duration": 829682000,
  "status": "passed"
});
formatter.before({
  "duration": 58000,
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
    "value": " [{\n    \"id\" : 1,\n    \"createdAt\" : \"{{created_timestamp}}\",\n    \"group\" : \"com.example.cucumber\",\n    \"name\" : \"cucumber-artifact\",\n    \"version\" : \"1.0.1\",\n    \"sourceUrl\" : \"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.1/cucumber-artifact-1.0.1.jar\"\n  },\n  {\n    \"id\" : 2,\n    \"createdAt\" : \"{{created_timestamp}}\",\n    \"group\" : \"com.example.cucumber\",\n    \"name\" : \"cucumber-artifact\",\n    \"version\" : \"1.0.2\",\n    \"sourceUrl\" : \"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.2/cucumber-artifact-1.0.2.jar\"\n  }]",
    "line": 219,
    "content_type": ""
  }
});
formatter.match({
  "location": "ArtifactSteps.groovy:13"
});
formatter.result({
  "duration": 6521000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/api/artifacts?query\u003dcucumber-artifact",
      "offset": 7
    }
  ],
  "location": "HttpSteps.groovy:17"
});
formatter.result({
  "duration": 29669000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:74"
});
formatter.result({
  "duration": 115000,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:83"
});
formatter.result({
  "duration": 1747000,
  "status": "failed",
  "error_message": "Assertion failed: \n\nassert bodyNode \u003d\u003d expectedNode\n       |        |  |\n       |        |  [{\"id\":1,\"createdAt\":\"2015-04-07T22:19:22.492Z\",\"group\":\"com.example.cucumber\",\"name\":\"cucumber-artifact\",\"version\":\"1.0.1\",\"sourceUrl\":\"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.1/cucumber-artifact-1.0.1.jar\"},{\"id\":2,\"createdAt\":\"2015-04-07T22:19:22.492Z\",\"group\":\"com.example.cucumber\",\"name\":\"cucumber-artifact\",\"version\":\"1.0.2\",\"sourceUrl\":\"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.2/cucumber-artifact-1.0.2.jar\"}]\n       |        false\n       [{\"id\":1,\"createdAt\":\"2015-04-07T22:19:22.000Z\",\"group\":\"com.example.cucumber\",\"name\":\"cucumber-artifact\",\"version\":\"1.0.1\",\"sourceUrl\":\"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.1/cucumber-artifact-1.0.1.jar\"},{\"id\":2,\"createdAt\":\"2015-04-07T22:19:22.000Z\",\"group\":\"com.example.cucumber\",\"name\":\"cucumber-artifact\",\"version\":\"1.0.2\",\"sourceUrl\":\"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.2/cucumber-artifact-1.0.2.jar\"}]\n\n\tat HttpSteps$_run_closure12.doCall(HttpSteps.groovy:110)\n\tat ✽.And the body should be JSON:(api/artifact/reading.feature:218)\n"
});
formatter.after({
  "duration": 10775000,
  "status": "passed"
});
formatter.after({
  "duration": 26000,
  "status": "passed"
});
formatter.before({
  "duration": 767049000,
  "status": "passed"
});
formatter.before({
  "duration": 69000,
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
    "value": " [{\n    \"id\" : 1,\n    \"createdAt\" : \"{{created_timestamp}}\",\n    \"group\" : \"com.example.cucumber\",\n    \"name\" : \"cucumber-artifact\",\n    \"version\" : \"1.0.1\",\n    \"sourceUrl\" : \"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.1/cucumber-artifact-1.0.1.jar\"\n  },\n  {\n    \"id\" : 2,\n    \"createdAt\" : \"{{created_timestamp}}\",\n    \"group\" : \"com.example.cucumber\",\n    \"name\" : \"cucumber-artifact\",\n    \"version\" : \"1.0.2\",\n    \"sourceUrl\" : \"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.2/cucumber-artifact-1.0.2.jar\"\n  }]",
    "line": 246,
    "content_type": ""
  }
});
formatter.match({
  "location": "ArtifactSteps.groovy:13"
});
formatter.result({
  "duration": 8512000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/api/artifacts?query\u003dcucumber",
      "offset": 7
    }
  ],
  "location": "HttpSteps.groovy:17"
});
formatter.result({
  "duration": 32917000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:74"
});
formatter.result({
  "duration": 139000,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:83"
});
formatter.result({
  "duration": 2233000,
  "status": "failed",
  "error_message": "Assertion failed: \n\nassert bodyNode \u003d\u003d expectedNode\n       |        |  |\n       |        |  [{\"id\":1,\"createdAt\":\"2015-04-07T22:19:23.312Z\",\"group\":\"com.example.cucumber\",\"name\":\"cucumber-artifact\",\"version\":\"1.0.1\",\"sourceUrl\":\"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.1/cucumber-artifact-1.0.1.jar\"},{\"id\":2,\"createdAt\":\"2015-04-07T22:19:23.312Z\",\"group\":\"com.example.cucumber\",\"name\":\"cucumber-artifact\",\"version\":\"1.0.2\",\"sourceUrl\":\"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.2/cucumber-artifact-1.0.2.jar\"}]\n       |        false\n       [{\"id\":1,\"createdAt\":\"2015-04-07T22:19:23.000Z\",\"group\":\"com.example.cucumber\",\"name\":\"cucumber-artifact\",\"version\":\"1.0.1\",\"sourceUrl\":\"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.1/cucumber-artifact-1.0.1.jar\"},{\"id\":2,\"createdAt\":\"2015-04-07T22:19:23.000Z\",\"group\":\"com.example.cucumber\",\"name\":\"cucumber-artifact\",\"version\":\"1.0.2\",\"sourceUrl\":\"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.2/cucumber-artifact-1.0.2.jar\"}]\n\n\tat HttpSteps$_run_closure12.doCall(HttpSteps.groovy:110)\n\tat ✽.And the body should be JSON:(api/artifact/reading.feature:245)\n"
});
formatter.after({
  "duration": 25199000,
  "status": "passed"
});
formatter.after({
  "duration": 31000,
  "status": "passed"
});
formatter.before({
  "duration": 713025000,
  "status": "passed"
});
formatter.before({
  "duration": 73000,
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
    "value": " [{\n    \"id\" : 1,\n    \"createdAt\" : \"{{created_timestamp}}\",\n    \"group\" : \"com.example.cucumber\",\n    \"name\" : \"cucumber-artifact\",\n    \"version\" : \"1.0.1\",\n    \"sourceUrl\" : \"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.1/cucumber-artifact-1.0.1.jar\"\n  },\n  {\n    \"id\" : 2,\n    \"createdAt\" : \"{{created_timestamp}}\",\n    \"group\" : \"com.example.cucumber\",\n    \"name\" : \"cucumber-artifact\",\n    \"version\" : \"1.0.2\",\n    \"sourceUrl\" : \"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.2/cucumber-artifact-1.0.2.jar\"\n  }]",
    "line": 273,
    "content_type": ""
  }
});
formatter.match({
  "location": "ArtifactSteps.groovy:13"
});
formatter.result({
  "duration": 4925000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/api/artifacts?query\u003dcom.example.cucumber",
      "offset": 7
    }
  ],
  "location": "HttpSteps.groovy:17"
});
formatter.result({
  "duration": 23166000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:74"
});
formatter.result({
  "duration": 101000,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:83"
});
formatter.result({
  "duration": 1663000,
  "status": "failed",
  "error_message": "Assertion failed: \n\nassert bodyNode \u003d\u003d expectedNode\n       |        |  |\n       |        |  [{\"id\":1,\"createdAt\":\"2015-04-07T22:19:24.099Z\",\"group\":\"com.example.cucumber\",\"name\":\"cucumber-artifact\",\"version\":\"1.0.1\",\"sourceUrl\":\"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.1/cucumber-artifact-1.0.1.jar\"},{\"id\":2,\"createdAt\":\"2015-04-07T22:19:24.099Z\",\"group\":\"com.example.cucumber\",\"name\":\"cucumber-artifact\",\"version\":\"1.0.2\",\"sourceUrl\":\"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.2/cucumber-artifact-1.0.2.jar\"}]\n       |        false\n       [{\"id\":1,\"createdAt\":\"2015-04-07T22:19:24.000Z\",\"group\":\"com.example.cucumber\",\"name\":\"cucumber-artifact\",\"version\":\"1.0.1\",\"sourceUrl\":\"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.1/cucumber-artifact-1.0.1.jar\"},{\"id\":2,\"createdAt\":\"2015-04-07T22:19:24.000Z\",\"group\":\"com.example.cucumber\",\"name\":\"cucumber-artifact\",\"version\":\"1.0.2\",\"sourceUrl\":\"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.2/cucumber-artifact-1.0.2.jar\"}]\n\n\tat HttpSteps$_run_closure12.doCall(HttpSteps.groovy:110)\n\tat ✽.And the body should be JSON:(api/artifact/reading.feature:272)\n"
});
formatter.after({
  "duration": 7542000,
  "status": "passed"
});
formatter.after({
  "duration": 19000,
  "status": "passed"
});
formatter.before({
  "duration": 676032000,
  "status": "passed"
});
formatter.before({
  "duration": 74000,
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
    "value": " [{\n    \"id\" : 1,\n    \"createdAt\" : \"{{created_timestamp}}\",\n    \"group\" : \"com.example.cucumber\",\n    \"name\" : \"cucumber-artifact\",\n    \"version\" : \"1.0.1\",\n    \"sourceUrl\" : \"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.1/cucumber-artifact-1.0.1.jar\"\n  },\n  {\n    \"id\" : 2,\n    \"createdAt\" : \"{{created_timestamp}}\",\n    \"group\" : \"com.example.cucumber\",\n    \"name\" : \"cucumber-artifact\",\n    \"version\" : \"1.0.2\",\n    \"sourceUrl\" : \"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.2/cucumber-artifact-1.0.2.jar\"\n  }]",
    "line": 300,
    "content_type": ""
  }
});
formatter.match({
  "location": "ArtifactSteps.groovy:13"
});
formatter.result({
  "duration": 4784000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/api/artifacts?query\u003dexample",
      "offset": 7
    }
  ],
  "location": "HttpSteps.groovy:17"
});
formatter.result({
  "duration": 22197000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:74"
});
formatter.result({
  "duration": 114000,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:83"
});
formatter.result({
  "duration": 1409000,
  "status": "failed",
  "error_message": "Assertion failed: \n\nassert bodyNode \u003d\u003d expectedNode\n       |        |  |\n       |        |  [{\"id\":1,\"createdAt\":\"2015-04-07T22:19:24.816Z\",\"group\":\"com.example.cucumber\",\"name\":\"cucumber-artifact\",\"version\":\"1.0.1\",\"sourceUrl\":\"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.1/cucumber-artifact-1.0.1.jar\"},{\"id\":2,\"createdAt\":\"2015-04-07T22:19:24.816Z\",\"group\":\"com.example.cucumber\",\"name\":\"cucumber-artifact\",\"version\":\"1.0.2\",\"sourceUrl\":\"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.2/cucumber-artifact-1.0.2.jar\"}]\n       |        false\n       [{\"id\":1,\"createdAt\":\"2015-04-07T22:19:25.000Z\",\"group\":\"com.example.cucumber\",\"name\":\"cucumber-artifact\",\"version\":\"1.0.1\",\"sourceUrl\":\"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.1/cucumber-artifact-1.0.1.jar\"},{\"id\":2,\"createdAt\":\"2015-04-07T22:19:25.000Z\",\"group\":\"com.example.cucumber\",\"name\":\"cucumber-artifact\",\"version\":\"1.0.2\",\"sourceUrl\":\"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.2/cucumber-artifact-1.0.2.jar\"}]\n\n\tat HttpSteps$_run_closure12.doCall(HttpSteps.groovy:110)\n\tat ✽.And the body should be JSON:(api/artifact/reading.feature:299)\n"
});
formatter.after({
  "duration": 7484000,
  "status": "passed"
});
formatter.after({
  "duration": 16000,
  "status": "passed"
});
formatter.before({
  "duration": 644004000,
  "status": "passed"
});
formatter.before({
  "duration": 83000,
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
    "value": " [{\n    \"id\" : 1,\n    \"createdAt\" : \"{{created_timestamp}}\",\n    \"group\" : \"com.example.cucumber\",\n    \"name\" : \"cucumber-artifact\",\n    \"version\" : \"1.0.1\",\n    \"sourceUrl\" : \"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.1/cucumber-artifact-1.0.1.jar\"\n  },\n  {\n    \"id\" : 2,\n    \"createdAt\" : \"{{created_timestamp}}\",\n    \"group\" : \"com.example.cucumber\",\n    \"name\" : \"cucumber-artifact\",\n    \"version\" : \"1.0.2\",\n    \"sourceUrl\" : \"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.2/cucumber-artifact-1.0.2.jar\"\n  }]",
    "line": 326,
    "content_type": ""
  }
});
formatter.match({
  "location": "ArtifactSteps.groovy:13"
});
formatter.result({
  "duration": 4723000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/api/artifacts?query\u003d1.0\u0026pageNumber\u003d0\u0026perPageSize\u003d3",
      "offset": 7
    }
  ],
  "location": "HttpSteps.groovy:17"
});
formatter.result({
  "duration": 22350000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:74"
});
formatter.result({
  "duration": 109000,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:83"
});
formatter.result({
  "duration": 1416000,
  "status": "failed",
  "error_message": "Assertion failed: \n\nassert bodyNode \u003d\u003d expectedNode\n       |        |  |\n       |        |  [{\"id\":1,\"createdAt\":\"2015-04-07T22:19:25.500Z\",\"group\":\"com.example.cucumber\",\"name\":\"cucumber-artifact\",\"version\":\"1.0.1\",\"sourceUrl\":\"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.1/cucumber-artifact-1.0.1.jar\"},{\"id\":2,\"createdAt\":\"2015-04-07T22:19:25.500Z\",\"group\":\"com.example.cucumber\",\"name\":\"cucumber-artifact\",\"version\":\"1.0.2\",\"sourceUrl\":\"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.2/cucumber-artifact-1.0.2.jar\"}]\n       |        false\n       [{\"id\":1,\"createdAt\":\"2015-04-07T22:19:26.000Z\",\"group\":\"com.example.cucumber\",\"name\":\"cucumber-artifact\",\"version\":\"1.0.1\",\"sourceUrl\":\"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.1/cucumber-artifact-1.0.1.jar\"},{\"id\":2,\"createdAt\":\"2015-04-07T22:19:26.000Z\",\"group\":\"com.example.cucumber\",\"name\":\"cucumber-artifact\",\"version\":\"1.0.2\",\"sourceUrl\":\"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.2/cucumber-artifact-1.0.2.jar\"}]\n\n\tat HttpSteps$_run_closure12.doCall(HttpSteps.groovy:110)\n\tat ✽.And the body should be JSON:(api/artifact/reading.feature:325)\n"
});
formatter.after({
  "duration": 8292000,
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
  "duration": 672455000,
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
  "duration": 3618000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/api/artifacts/1",
      "offset": 9
    }
  ],
  "location": "HttpSteps.groovy:49"
});
formatter.result({
  "duration": 16696000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "405",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:74"
});
formatter.result({
  "duration": 112000,
  "status": "passed"
});
formatter.after({
  "duration": 11001000,
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
  "duration": 686073000,
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
  "name": "Models configuration directory path is \"./example/modelConfig\"",
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
      "val": "./example/modelConfig",
      "offset": 40
    }
  ],
  "location": "HttpSteps.groovy:113"
});
formatter.result({
  "duration": 1373000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/tasks/configReload",
      "offset": 11
    }
  ],
  "location": "HttpSteps.groovy:57"
});
formatter.result({
  "duration": 96628000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:74"
});
formatter.result({
  "duration": 100000,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:78"
});
formatter.result({
  "duration": 877000,
  "status": "passed"
});
formatter.after({
  "duration": 9364000,
  "status": "passed"
});
formatter.before({
  "duration": 622539000,
  "status": "passed"
});
formatter.scenario({
  "id": "deploydb-config-apis;if-deployments-are-in-progress,-then-attempt-to-reload-config-should-succeed.",
  "description": "        A deployment is considered as in progress (aka NOT verified), if the status\n        does not have value of SUCCESS or FAILED",
  "name": "If deployments are in progress, then attempt to reload config should succeed.",
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
  "name": "Models configuration directory path is \"./example/modelConfig\"",
  "keyword": "And ",
  "line": 23
});
formatter.step({
  "name": "I POST to \"/tasks/configReload\" from the admin app",
  "keyword": "When ",
  "line": 24
});
formatter.step({
  "name": "the response should be 200",
  "keyword": "Then ",
  "line": 25
});
formatter.step({
  "name": "the response body should be:",
  "keyword": "And ",
  "line": 26,
  "doc_string": {
    "value": "Done!",
    "line": 27,
    "content_type": ""
  }
});
formatter.match({
  "location": "DeploymentSteps.groovy:14"
});
formatter.result({
  "duration": 8421000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "./example/modelConfig",
      "offset": 40
    }
  ],
  "location": "HttpSteps.groovy:113"
});
formatter.result({
  "duration": 147000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/tasks/configReload",
      "offset": 11
    }
  ],
  "location": "HttpSteps.groovy:57"
});
formatter.result({
  "duration": 39104000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:74"
});
formatter.result({
  "duration": 105000,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:78"
});
formatter.result({
  "duration": 403000,
  "status": "passed"
});
formatter.after({
  "duration": 8044000,
  "status": "passed"
});
formatter.before({
  "duration": 632346000,
  "status": "passed"
});
formatter.before({
  "duration": 70000,
  "status": "passed"
});
formatter.scenario({
  "id": "deploydb-config-apis;after-config-reload,-transitions-of-in-progress-deployments-should-use-old-config.",
  "tags": [
    {
      "name": "@freezetime",
      "line": 32
    }
  ],
  "description": "        If a deployment is in CREATED state and configuration is reloaded, then\n        a deployment update of STARTED state should invoke set of global webhook\n        and environment webhook, as specified by the older config",
  "name": "After config reload, transitions of in-progress deployments should use old config.",
  "keyword": "Scenario",
  "line": 33,
  "type": "scenario"
});
formatter.step({
  "name": "a deployment webhook \"started\" configuration:",
  "keyword": "Given ",
  "line": 37,
  "doc_string": {
    "value": "  deployment:\n    started:\n       - http://localhost:10000/job/old-notify-deployment-started/build",
    "line": 38,
    "content_type": ""
  }
});
formatter.step({
  "name": "an deployment environment webhook \"started\" configuration named \"pre-prod\":",
  "keyword": "And ",
  "line": 43,
  "doc_string": {
    "value": "description: \"DeployDB Primary Integration\"\nwebhook:\n  deployment:\n    started:\n      - http://localhost:10000/job/another-old-notify-deployment-started/build",
    "line": 44,
    "content_type": ""
  }
});
formatter.step({
  "name": "there is a deployment in \"CREATED\" state",
  "keyword": "And ",
  "line": 51
});
formatter.step({
  "name": "Models configuration is reloaded from directory path \"./example/modelConfig\"",
  "keyword": "And ",
  "line": 52
});
formatter.step({
  "name": "I PATCH \"/api/deployments/1\" with:",
  "keyword": "When ",
  "line": 53,
  "doc_string": {
    "value": "  {\n    \"status\" : \"STARTED\"\n  }",
    "line": 54,
    "content_type": ""
  }
});
formatter.step({
  "name": "the webhook 1 should be invoked with the JSON:",
  "keyword": "Then ",
  "line": 59,
  "doc_string": {
    "value": "  {\n    \"id\" : 1,\n    \"artifact\" : {\n      \"id\" : 1,\n      \"group\" : \"com.example.cucumber\",\n      \"name\" : \"cucumber-artifact\",\n      \"version\" : \"1.0.1\",\n      \"sourceUrl\" : \"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.1/cucumber-artifact-1.0.1.jar\",\n      \"createdAt\" : \"{{created_timestamp}}\"\n    },\n    \"status\" : \"STARTED\",\n    \"service\" : \"faas\",\n    \"environment\" : \"pre-prod\",\n    \"createdAt\" : \"{{created_timestamp}}\"\n  }",
    "line": 60,
    "content_type": ""
  }
});
formatter.step({
  "name": "the webhook 2 should be invoked with the JSON:",
  "keyword": "And ",
  "line": 77,
  "doc_string": {
    "value": "  {\n    \"id\" : 1,\n    \"artifact\" : {\n      \"id\" : 1,\n      \"group\" : \"com.example.cucumber\",\n      \"name\" : \"cucumber-artifact\",\n      \"version\" : \"1.0.1\",\n      \"sourceUrl\" : \"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.1/cucumber-artifact-1.0.1.jar\",\n      \"createdAt\" : \"{{created_timestamp}}\"\n    },\n    \"status\" : \"STARTED\",\n    \"service\" : \"faas\",\n    \"environment\" : \"pre-prod\",\n    \"createdAt\" : \"{{created_timestamp}}\"\n  }",
    "line": 78,
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
  "location": "WebhookSteps.groovy:19"
});
formatter.result({
  "duration": 24257000,
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
  "location": "WebhookSteps.groovy:60"
});
formatter.result({
  "duration": 11761000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CREATED",
      "offset": 26
    }
  ],
  "location": "DeploymentSteps.groovy:111"
});
formatter.result({
  "duration": 7711000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "./example/modelConfig",
      "offset": 54
    }
  ],
  "location": "HttpSteps.groovy:117"
});
formatter.result({
  "duration": 25360000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/api/deployments/1",
      "offset": 9
    }
  ],
  "location": "HttpSteps.groovy:49"
});
formatter.result({
  "duration": 62289000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 12
    }
  ],
  "location": "WebhookSteps.groovy:139"
});
formatter.result({
  "duration": 1009402000,
  "status": "failed",
  "error_message": "Assertion failed: \n\nassert expectedNode \u003d\u003d requestNode\n       |            |  |\n       |            |  {\"id\":1,\"artifact\":{\"id\":1,\"createdAt\":\"2015-04-07T22:19:28.000Z\",\"group\":\"com.example.cucumber\",\"name\":\"cucumber-artifact\",\"version\":\"1.0.1\",\"sourceUrl\":\"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.1/cucumber-artifact-1.0.1.jar\"},\"service\":\"faas\",\"environment\":\"pre-prod\",\"createdAt\":\"2015-04-07T22:19:28.000Z\",\"status\":\"STARTED\"}\n       |            false\n       {\"id\":1,\"artifact\":{\"id\":1,\"group\":\"com.example.cucumber\",\"name\":\"cucumber-artifact\",\"version\":\"1.0.1\",\"sourceUrl\":\"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.1/cucumber-artifact-1.0.1.jar\",\"createdAt\":\"2015-04-07T22:19:28.395Z\"},\"status\":\"STARTED\",\"service\":\"faas\",\"environment\":\"pre-prod\",\"createdAt\":\"2015-04-07T22:19:28.395Z\"}\n\n\tat WebhookSteps$_run_closure5$_closure15.doCall(WebhookSteps.groovy:154)\n\tat ✽.Then the webhook 1 should be invoked with the JSON:(api/config.feature:59)\n"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 12
    }
  ],
  "location": "WebhookSteps.groovy:139"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 11055000,
  "status": "passed"
});
formatter.after({
  "duration": 24000,
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
  "duration": 631770000,
  "status": "passed"
});
formatter.before({
  "duration": 62000,
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
  "duration": 7262000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/api/deployments",
      "offset": 7
    }
  ],
  "location": "HttpSteps.groovy:17"
});
formatter.result({
  "duration": 31316000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:74"
});
formatter.result({
  "duration": 112000,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:83"
});
formatter.result({
  "duration": 1484000,
  "status": "failed",
  "error_message": "Assertion failed: \n\nassert bodyNode \u003d\u003d expectedNode\n       |        |  |\n       |        |  [{\"id\":1,\"artifact\":{\"id\":1,\"group\":\"com.example.cucumber\",\"name\":\"cucumber-artifact\",\"version\":\"1.0.1\",\"sourceUrl\":\"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.1/cucumber-artifact-1.0.1.jar\",\"createdAt\":\"2015-04-07T22:19:30.187Z\"},\"environment\":\"pre-prod\",\"service\":\"faas\",\"status\":\"STARTED\",\"promotions\":[{\"id\":1,\"promotion\":\"jenkins-smoke\",\"status\":\"STARTED\",\"infoUrl\":null,\"createdAt\":\"2015-04-07T22:19:30.187Z\"}],\"createdAt\":\"2015-04-07T22:19:30.187Z\"}]\n       |        false\n       [{\"id\":1,\"createdAt\":\"2015-04-07T22:19:30.000Z\",\"artifact\":{\"id\":1,\"createdAt\":\"2015-04-07T22:19:30.000Z\",\"group\":\"com.example.cucumber\",\"name\":\"cucumber-artifact\",\"version\":\"1.0.1\",\"sourceUrl\":\"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.1/cucumber-artifact-1.0.1.jar\"},\"status\":\"STARTED\",\"environment\":\"pre-prod\",\"service\":\"faas\",\"promotions\":[{\"id\":1,\"createdAt\":\"2015-04-07T22:19:30.000Z\",\"status\":\"STARTED\",\"infoUrl\":null,\"promotion\":\"jenkins-smoke\"}]}]\n\n\tat HttpSteps$_run_closure12.doCall(HttpSteps.groovy:110)\n\tat ✽.And the body should be JSON:(api/deployment/reading.feature:13)\n"
});
formatter.after({
  "duration": 8759000,
  "status": "passed"
});
formatter.after({
  "duration": 21000,
  "status": "passed"
});
formatter.before({
  "duration": 624168000,
  "status": "passed"
});
formatter.before({
  "duration": 651000,
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
  "duration": 14146000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/api/deployments/1",
      "offset": 7
    }
  ],
  "location": "HttpSteps.groovy:17"
});
formatter.result({
  "duration": 27753000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:74"
});
formatter.result({
  "duration": 108000,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:83"
});
formatter.result({
  "duration": 2091000,
  "status": "failed",
  "error_message": "Assertion failed: \n\nassert bodyNode \u003d\u003d expectedNode\n       |        |  |\n       |        |  {\"id\":1,\"artifact\":{\"id\":1,\"group\":\"com.example.cucumber\",\"name\":\"cucumber-artifact\",\"version\":\"1.0.1\",\"sourceUrl\":\"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.1/cucumber-artifact-1.0.1.jar\",\"createdAt\":\"2015-04-07T22:19:30.863Z\"},\"environment\":\"pre-prod\",\"service\":\"faas\",\"status\":\"STARTED\",\"promotions\":[{\"id\":1,\"promotion\":\"jenkins-smoke\",\"status\":\"STARTED\",\"infoUrl\":null,\"createdAt\":\"2015-04-07T22:19:30.863Z\"}],\"createdAt\":\"2015-04-07T22:19:30.863Z\"}\n       |        false\n       {\"id\":1,\"createdAt\":\"2015-04-07T22:19:31.000Z\",\"artifact\":{\"id\":1,\"createdAt\":\"2015-04-07T22:19:31.000Z\",\"group\":\"com.example.cucumber\",\"name\":\"cucumber-artifact\",\"version\":\"1.0.1\",\"sourceUrl\":\"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.1/cucumber-artifact-1.0.1.jar\"},\"status\":\"STARTED\",\"environment\":\"pre-prod\",\"service\":\"faas\",\"promotions\":[{\"id\":1,\"createdAt\":\"2015-04-07T22:19:31.000Z\",\"status\":\"STARTED\",\"infoUrl\":null,\"promotion\":\"jenkins-smoke\"}]}\n\n\tat HttpSteps$_run_closure12.doCall(HttpSteps.groovy:110)\n\tat ✽.And the body should be JSON:(api/deployment/reading.feature:46)\n"
});
formatter.after({
  "duration": 9253000,
  "status": "passed"
});
formatter.after({
  "duration": 381000,
  "status": "passed"
});
formatter.before({
  "duration": 640968000,
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
  "location": "HttpSteps.groovy:17"
});
formatter.result({
  "duration": 16052000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "404",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:74"
});
formatter.result({
  "duration": 98000,
  "status": "passed"
});
formatter.after({
  "duration": 9122000,
  "status": "passed"
});
formatter.before({
  "duration": 630413000,
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
  "location": "HttpSteps.groovy:17"
});
formatter.result({
  "duration": 15634000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:74"
});
formatter.result({
  "duration": 130000,
  "status": "passed"
});
formatter.after({
  "duration": 7981000,
  "status": "passed"
});
formatter.before({
  "duration": 641325000,
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
  "duration": 8801000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/api/deployments/1",
      "offset": 7
    }
  ],
  "location": "HttpSteps.groovy:61"
});
formatter.result({
  "duration": 14350000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "406",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:74"
});
formatter.result({
  "duration": 102000,
  "status": "passed"
});
formatter.after({
  "duration": 7728000,
  "status": "passed"
});
formatter.before({
  "duration": 614512000,
  "status": "passed"
});
formatter.before({
  "duration": 120000,
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
  "location": "DeploymentSteps.groovy:47"
});
formatter.result({
  "duration": 11798000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/api/deployments?pageNumber\u003d0\u0026perPageSize\u003d5",
      "offset": 7
    }
  ],
  "location": "HttpSteps.groovy:17"
});
formatter.result({
  "duration": 23571000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:74"
});
formatter.result({
  "duration": 113000,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:83"
});
formatter.result({
  "duration": 2597000,
  "status": "failed",
  "error_message": "Assertion failed: \n\nassert bodyNode \u003d\u003d expectedNode\n       |        |  |\n       |        |  [{\"id\":1,\"artifact\":{\"id\":1,\"group\":\"com.example.cucumber\",\"name\":\"cucumber-artifact\",\"version\":\"1.0.1\",\"sourceUrl\":\"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.1/cucumber-artifact-1.0.1.jar\",\"createdAt\":\"2015-04-07T22:19:33.536Z\"},\"environment\":\"pre-prod\",\"service\":\"faas\",\"status\":\"STARTED\",\"promotions\":[{\"id\":1,\"promotion\":\"jenkins-smoke\",\"status\":\"STARTED\",\"infoUrl\":null,\"createdAt\":\"2015-04-07T22:19:33.536Z\"}],\"createdAt\":\"2015-04-07T22:19:33.536Z\"},{\"id\":2,\"artifact\":{\"id\":2,\"group\":\"com.example.cucumber\",\"name\":\"cucumber-artifact\",\"version\":\"1.0.2\",\"sourceUrl\":\"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.2/cucumber-artifact-1.0.2.jar\",\"createdAt\":\"2015-04-07T22:19:33.536Z\"},\"environment\":\"pre-prod\",\"service\":\"faas\",\"status\":\"STARTED\",\"promotions\":[{\"id\":2,\"promotion\":\"status-check\",\"status\":\"STARTED\",\"infoUrl\":\"http://local.lookout.com/jenkins/job-id/2/results\",\"createdAt\":\"2015-04-07T22:19:33.536Z\"}],\"createdAt\":\"2015-04-07T22:19:33.536Z\"}]\n       |        false\n       [{\"id\":1,\"createdAt\":\"2015-04-07T22:19:34.000Z\",\"artifact\":{\"id\":1,\"createdAt\":\"2015-04-07T22:19:34.000Z\",\"group\":\"com.example.cucumber\",\"name\":\"cucumber-artifact\",\"version\":\"1.0.1\",\"sourceUrl\":\"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.1/cucumber-artifact-1.0.1.jar\"},\"status\":\"STARTED\",\"environment\":\"pre-prod\",\"service\":\"faas\",\"promotions\":[{\"id\":1,\"createdAt\":\"2015-04-07T22:19:34.000Z\",\"status\":\"STARTED\",\"infoUrl\":null,\"promotion\":\"jenkins-smoke\"}]},{\"id\":2,\"createdAt\":\"2015-04-07T22:19:34.000Z\",\"artifact\":{\"id\":2,\"createdAt\":\"2015-04-07T22:19:34.000Z\",\"group\":\"com.example.cucumber\",\"name\":\"cucumber-artifact\",\"version\":\"1.0.2\",\"sourceUrl\":\"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.2/cucumber-artifact-1.0.2.jar\"},\"status\":\"STARTED\",\"environment\":\"pre-prod\",\"service\":\"faas\",\"promotions\":[{\"id\":2,\"createdAt\":\"2015-04-07T22:19:34.000Z\",\"status\":\"STARTED\",\"infoUrl\":\"http://local.lookout.com/jenkins/job-id/2/results\",\"promotion\":\"status-check\"}]}]\n\n\tat HttpSteps$_run_closure12.doCall(HttpSteps.groovy:110)\n\tat ✽.And the body should be JSON:(api/deployment/reading.feature:120)\n"
});
formatter.after({
  "duration": 7489000,
  "status": "passed"
});
formatter.after({
  "duration": 32000,
  "status": "passed"
});
formatter.before({
  "duration": 600037000,
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
  "location": "HttpSteps.groovy:17"
});
formatter.result({
  "duration": 25528000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "404",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:74"
});
formatter.result({
  "duration": 211000,
  "status": "passed"
});
formatter.after({
  "duration": 8044000,
  "status": "passed"
});
formatter.before({
  "duration": 592546000,
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
  "location": "HttpSteps.groovy:17"
});
formatter.result({
  "duration": 18636000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:74"
});
formatter.result({
  "duration": 101000,
  "status": "passed"
});
formatter.after({
  "duration": 9006000,
  "status": "passed"
});
formatter.before({
  "duration": 658629000,
  "status": "passed"
});
formatter.before({
  "duration": 49000,
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
  "duration": 7543000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/api/deployments/latest",
      "offset": 7
    }
  ],
  "location": "HttpSteps.groovy:17"
});
formatter.result({
  "duration": 23995000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:74"
});
formatter.result({
  "duration": 113000,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:83"
});
formatter.result({
  "duration": 1572000,
  "status": "failed",
  "error_message": "Assertion failed: \n\nassert bodyNode \u003d\u003d expectedNode\n       |        |  |\n       |        |  {\"id\":1,\"artifact\":{\"id\":1,\"group\":\"com.example.cucumber\",\"name\":\"cucumber-artifact\",\"version\":\"1.0.1\",\"sourceUrl\":\"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.1/cucumber-artifact-1.0.1.jar\",\"createdAt\":\"2015-04-07T22:19:35.569Z\"},\"environment\":\"pre-prod\",\"service\":\"faas\",\"status\":\"STARTED\",\"promotions\":[{\"id\":1,\"promotion\":\"jenkins-smoke\",\"status\":\"STARTED\",\"infoUrl\":null,\"createdAt\":\"2015-04-07T22:19:35.569Z\"}],\"createdAt\":\"2015-04-07T22:19:35.569Z\"}\n       |        false\n       {\"id\":1,\"createdAt\":\"2015-04-07T22:19:36.000Z\",\"artifact\":{\"id\":1,\"createdAt\":\"2015-04-07T22:19:36.000Z\",\"group\":\"com.example.cucumber\",\"name\":\"cucumber-artifact\",\"version\":\"1.0.1\",\"sourceUrl\":\"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.1/cucumber-artifact-1.0.1.jar\"},\"status\":\"STARTED\",\"environment\":\"pre-prod\",\"service\":\"faas\",\"promotions\":[{\"id\":1,\"createdAt\":\"2015-04-07T22:19:36.000Z\",\"status\":\"STARTED\",\"infoUrl\":null,\"promotion\":\"jenkins-smoke\"}]}\n\n\tat HttpSteps$_run_closure12.doCall(HttpSteps.groovy:110)\n\tat ✽.And the body should be JSON:(api/deployment/reading.feature:189)\n"
});
formatter.after({
  "duration": 9574000,
  "status": "passed"
});
formatter.after({
  "duration": 17000,
  "status": "passed"
});
formatter.before({
  "duration": 639494000,
  "status": "passed"
});
formatter.before({
  "duration": 58000,
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
  "location": "DeploymentSteps.groovy:47"
});
formatter.result({
  "duration": 12617000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/api/deployments/latest",
      "offset": 7
    }
  ],
  "location": "HttpSteps.groovy:17"
});
formatter.result({
  "duration": 22916000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:74"
});
formatter.result({
  "duration": 194000,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:83"
});
formatter.result({
  "duration": 2599000,
  "status": "failed",
  "error_message": "Assertion failed: \n\nassert bodyNode \u003d\u003d expectedNode\n       |        |  |\n       |        |  {\"id\":2,\"artifact\":{\"id\":2,\"group\":\"com.example.cucumber\",\"name\":\"cucumber-artifact\",\"version\":\"1.0.2\",\"sourceUrl\":\"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.2/cucumber-artifact-1.0.2.jar\",\"createdAt\":\"2015-04-07T22:19:36.254Z\"},\"environment\":\"pre-prod\",\"service\":\"faas\",\"status\":\"STARTED\",\"promotions\":[{\"id\":2,\"promotion\":\"status-check\",\"status\":\"STARTED\",\"infoUrl\":\"http://local.lookout.com/jenkins/job-id/2/results\",\"createdAt\":\"2015-04-07T22:19:36.254Z\"}],\"createdAt\":\"2015-04-07T22:19:36.254Z\"}\n       |        false\n       {\"id\":2,\"createdAt\":\"2015-04-07T22:19:36.000Z\",\"artifact\":{\"id\":2,\"createdAt\":\"2015-04-07T22:19:36.000Z\",\"group\":\"com.example.cucumber\",\"name\":\"cucumber-artifact\",\"version\":\"1.0.2\",\"sourceUrl\":\"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.2/cucumber-artifact-1.0.2.jar\"},\"status\":\"STARTED\",\"environment\":\"pre-prod\",\"service\":\"faas\",\"promotions\":[{\"id\":2,\"createdAt\":\"2015-04-07T22:19:36.000Z\",\"status\":\"STARTED\",\"infoUrl\":\"http://local.lookout.com/jenkins/job-id/2/results\",\"promotion\":\"status-check\"}]}\n\n\tat HttpSteps$_run_closure12.doCall(HttpSteps.groovy:110)\n\tat ✽.And the body should be JSON:(api/deployment/reading.feature:221)\n"
});
formatter.after({
  "duration": 7930000,
  "status": "passed"
});
formatter.after({
  "duration": 15000,
  "status": "passed"
});
formatter.before({
  "duration": 690735000,
  "status": "passed"
});
formatter.before({
  "duration": 59000,
  "status": "passed"
});
formatter.scenario({
  "id": "deployment-read-apis;fetching-deployment-based-on-artifact-id",
  "tags": [
    {
      "name": "@freezetime",
      "line": 247
    }
  ],
  "description": "",
  "name": "Fetching deployment based on artifact id",
  "keyword": "Scenario",
  "line": 248,
  "type": "scenario"
});
formatter.step({
  "name": "there are deployments for artifacts",
  "keyword": "Given ",
  "line": 250
});
formatter.step({
  "name": "I GET \"/api/deployments/by-artifact/2\"",
  "keyword": "When ",
  "line": 251
});
formatter.step({
  "name": "the response should be 200",
  "keyword": "Then ",
  "line": 252
});
formatter.step({
  "name": "the body should be JSON:",
  "keyword": "And ",
  "line": 253,
  "doc_string": {
    "value": "[{\n  \"id\" : 5,\n  \"artifact\" : {\n    \"id\" : 2,\n    \"group\" : \"com.example.cucumber\",\n    \"name\" : \"cucumber-artifact\",\n    \"version\" : \"1.0.2\",\n    \"sourceUrl\" : \"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.2/cucumber-artifact-1.0.2.jar\",\n    \"createdAt\" : \"{{created_timestamp}}\"\n  },\n  \"environment\" : \"dev-integ\",\n  \"service\" : \"faas\",\n  \"promotions\":[],\n  \"status\" : \"STARTED\",\n  \"createdAt\" : \"{{created_timestamp}}\"\n},\n{\n  \"id\" : 6,\n  \"artifact\" : {\n    \"id\" : 2,\n    \"group\" : \"com.example.cucumber\",\n    \"name\" : \"cucumber-artifact\",\n    \"version\" : \"1.0.2\",\n    \"sourceUrl\" : \"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.2/cucumber-artifact-1.0.2.jar\",\n    \"createdAt\" : \"{{created_timestamp}}\"\n  },\n  \"environment\" : \"integ\",\n  \"service\" : \"faas\",\n  \"promotions\":[],\n  \"status\" : \"STARTED\",\n  \"createdAt\" : \"{{created_timestamp}}\"\n},\n{\n  \"id\" : 7,\n  \"artifact\" : {\n    \"id\" : 2,\n    \"group\" : \"com.example.cucumber\",\n    \"name\" : \"cucumber-artifact\",\n    \"version\" : \"1.0.2\",\n    \"sourceUrl\" : \"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.2/cucumber-artifact-1.0.2.jar\",\n    \"createdAt\" : \"{{created_timestamp}}\"\n  },\n  \"environment\" : \"pre-prod\",\n  \"service\" : \"faas\",\n  \"promotions\":[],\n  \"status\" : \"STARTED\",\n  \"createdAt\" : \"{{created_timestamp}}\"\n},\n{\n  \"id\" : 8,\n  \"artifact\" : {\n    \"id\" : 2,\n    \"group\" : \"com.example.cucumber\",\n    \"name\" : \"cucumber-artifact\",\n    \"version\" : \"1.0.2\",\n    \"sourceUrl\" : \"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.2/cucumber-artifact-1.0.2.jar\",\n    \"createdAt\" : \"{{created_timestamp}}\"\n  },\n  \"environment\" : \"prod\",\n  \"service\" : \"faas\",\n  \"promotions\":[],\n  \"status\" : \"STARTED\",\n  \"createdAt\" : \"{{created_timestamp}}\"\n}]",
    "line": 254,
    "content_type": ""
  }
});
formatter.match({
  "location": "DeploymentSteps.groovy:83"
});
formatter.result({
  "duration": 24751000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/api/deployments/by-artifact/2",
      "offset": 7
    }
  ],
  "location": "HttpSteps.groovy:17"
});
formatter.result({
  "duration": 28279000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:74"
});
formatter.result({
  "duration": 126000,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:83"
});
formatter.result({
  "duration": 2446000,
  "status": "failed",
  "error_message": "Assertion failed: \n\nassert bodyNode \u003d\u003d expectedNode\n       |        |  |\n       |        |  [{\"id\":5,\"artifact\":{\"id\":2,\"group\":\"com.example.cucumber\",\"name\":\"cucumber-artifact\",\"version\":\"1.0.2\",\"sourceUrl\":\"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.2/cucumber-artifact-1.0.2.jar\",\"createdAt\":\"2015-04-07T22:19:36.995Z\"},\"environment\":\"dev-integ\",\"service\":\"faas\",\"promotions\":[],\"status\":\"STARTED\",\"createdAt\":\"2015-04-07T22:19:36.995Z\"},{\"id\":6,\"artifact\":{\"id\":2,\"group\":\"com.example.cucumber\",\"name\":\"cucumber-artifact\",\"version\":\"1.0.2\",\"sourceUrl\":\"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.2/cucumber-artifact-1.0.2.jar\",\"createdAt\":\"2015-04-07T22:19:36.995Z\"},\"environment\":\"integ\",\"service\":\"faas\",\"promotions\":[],\"status\":\"STARTED\",\"createdAt\":\"2015-04-07T22:19:36.995Z\"},{\"id\":7,\"artifact\":{\"id\":2,\"group\":\"com.example.cucumber\",\"name\":\"cucumber-artifact\",\"version\":\"1.0.2\",\"sourceUrl\":\"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.2/cucumber-artifact-1.0.2.jar\",\"createdAt\":\"2015-04-07T22:19:36.995Z\"},\"environment\":\"pre-prod\",\"service\":\"faas\",\"promotions\":[],\"status\":\"STARTED\",\"createdAt\":\"2015-04-07T22:19:36.995Z\"},{\"id\":8,\"artifact\":{\"id\":2,\"group\":\"com.example.cucumber\",\"name\":\"cucumber-artifact\",\"version\":\"1.0.2\",\"sourceUrl\":\"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.2/cucumber-artifact-1.0.2.jar\",\"createdAt\":\"2015-04-07T22:19:36.995Z\"},\"environment\":\"prod\",\"service\":\"faas\",\"promotions\":[],\"status\":\"STARTED\",\"createdAt\":\"2015-04-07T22:19:36.995Z\"}]\n       |        false\n       [{\"id\":5,\"createdAt\":\"2015-04-07T22:19:37.000Z\",\"artifact\":{\"id\":2,\"createdAt\":\"2015-04-07T22:19:37.000Z\",\"group\":\"com.example.cucumber\",\"name\":\"cucumber-artifact\",\"version\":\"1.0.2\",\"sourceUrl\":\"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.2/cucumber-artifact-1.0.2.jar\"},\"status\":\"STARTED\",\"environment\":\"dev-integ\",\"service\":\"faas\",\"promotions\":[]},{\"id\":6,\"createdAt\":\"2015-04-07T22:19:37.000Z\",\"artifact\":{\"id\":2,\"createdAt\":\"2015-04-07T22:19:37.000Z\",\"group\":\"com.example.cucumber\",\"name\":\"cucumber-artifact\",\"version\":\"1.0.2\",\"sourceUrl\":\"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.2/cucumber-artifact-1.0.2.jar\"},\"status\":\"STARTED\",\"environment\":\"integ\",\"service\":\"faas\",\"promotions\":[]},{\"id\":7,\"createdAt\":\"2015-04-07T22:19:37.000Z\",\"artifact\":{\"id\":2,\"createdAt\":\"2015-04-07T22:19:37.000Z\",\"group\":\"com.example.cucumber\",\"name\":\"cucumber-artifact\",\"version\":\"1.0.2\",\"sourceUrl\":\"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.2/cucumber-artifact-1.0.2.jar\"},\"status\":\"STARTED\",\"environment\":\"pre-prod\",\"service\":\"faas\",\"promotions\":[]},{\"id\":8,\"createdAt\":\"2015-04-07T22:19:37.000Z\",\"artifact\":{\"id\":2,\"createdAt\":\"2015-04-07T22:19:37.000Z\",\"group\":\"com.example.cucumber\",\"name\":\"cucumber-artifact\",\"version\":\"1.0.2\",\"sourceUrl\":\"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.2/cucumber-artifact-1.0.2.jar\"},\"status\":\"STARTED\",\"environment\":\"prod\",\"service\":\"faas\",\"promotions\":[]}]\n\n\tat HttpSteps$_run_closure12.doCall(HttpSteps.groovy:110)\n\tat ✽.And the body should be JSON:(api/deployment/reading.feature:253)\n"
});
formatter.after({
  "duration": 11864000,
  "status": "passed"
});
formatter.after({
  "duration": 15000,
  "status": "passed"
});
formatter.before({
  "duration": 639537000,
  "status": "passed"
});
formatter.scenario({
  "id": "deployment-read-apis;fetching-deployment-by-artifact-id-that-doesn\u0027t-exist",
  "description": "",
  "name": "Fetching deployment by artifact id that doesn\u0027t exist",
  "keyword": "Scenario",
  "line": 322,
  "type": "scenario"
});
formatter.step({
  "name": "I GET \"/api/deployments/by-artifact/1\"",
  "keyword": "When ",
  "line": 324
});
formatter.step({
  "name": "the response should be 404",
  "keyword": "Then ",
  "line": 325
});
formatter.match({
  "arguments": [
    {
      "val": "/api/deployments/by-artifact/1",
      "offset": 7
    }
  ],
  "location": "HttpSteps.groovy:17"
});
formatter.result({
  "duration": 17632000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "404",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:74"
});
formatter.result({
  "duration": 104000,
  "status": "passed"
});
formatter.after({
  "duration": 6863000,
  "status": "passed"
});
formatter.before({
  "duration": 615174000,
  "status": "passed"
});
formatter.scenario({
  "id": "deployment-read-apis;fetching-an-deployment-by-pagenumber\u003d0-and-perpagesize\u003d0-returns-0-deployments",
  "tags": [
    {
      "name": "@error",
      "line": 328
    }
  ],
  "description": "",
  "name": "Fetching an deployment by pageNumber\u003d0 and perPageSize\u003d0 returns 0 deployments",
  "keyword": "Scenario",
  "line": 329,
  "type": "scenario"
});
formatter.step({
  "name": "there are deployments",
  "keyword": "Given ",
  "line": 331
});
formatter.step({
  "name": "I GET \"/api/deployments?pageNumber\u003d0\u0026perPageSize\u003d0\"",
  "keyword": "When ",
  "line": 332
});
formatter.step({
  "name": "the response should be 400",
  "keyword": "Then ",
  "line": 333
});
formatter.match({
  "location": "DeploymentSteps.groovy:47"
});
formatter.result({
  "duration": 10992000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/api/deployments?pageNumber\u003d0\u0026perPageSize\u003d0",
      "offset": 7
    }
  ],
  "location": "HttpSteps.groovy:17"
});
formatter.result({
  "duration": 17707000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:74"
});
formatter.result({
  "duration": 206000,
  "status": "passed"
});
formatter.after({
  "duration": 7344000,
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
  "duration": 634655000,
  "status": "passed"
});
formatter.before({
  "duration": 44000,
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
  "duration": 6915000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/api/deployments/1",
      "offset": 9
    }
  ],
  "location": "HttpSteps.groovy:49"
});
formatter.result({
  "duration": 24264000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:74"
});
formatter.result({
  "duration": 100000,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:83"
});
formatter.result({
  "duration": 1347000,
  "status": "failed",
  "error_message": "Assertion failed: \n\nassert bodyNode \u003d\u003d expectedNode\n       |        |  |\n       |        |  {\"id\":1,\"artifact\":{\"id\":1,\"group\":\"com.example.cucumber\",\"name\":\"cucumber-artifact\",\"version\":\"1.0.1\",\"sourceUrl\":\"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.1/cucumber-artifact-1.0.1.jar\",\"createdAt\":\"2015-04-07T22:19:39.022Z\"},\"environment\":\"pre-prod\",\"service\":\"faas\",\"status\":\"COMPLETED\",\"promotions\":[{\"id\":1,\"promotion\":\"jenkins-smoke\",\"status\":\"STARTED\",\"infoUrl\":null,\"createdAt\":\"2015-04-07T22:19:39.022Z\"}],\"createdAt\":\"2015-04-07T22:19:39.022Z\"}\n       |        false\n       {\"id\":1,\"createdAt\":\"2015-04-07T22:19:39.000Z\",\"artifact\":{\"id\":1,\"createdAt\":\"2015-04-07T22:19:39.000Z\",\"group\":\"com.example.cucumber\",\"name\":\"cucumber-artifact\",\"version\":\"1.0.1\",\"sourceUrl\":\"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.1/cucumber-artifact-1.0.1.jar\"},\"status\":\"COMPLETED\",\"environment\":\"pre-prod\",\"service\":\"faas\",\"promotions\":[{\"id\":1,\"createdAt\":\"2015-04-07T22:19:39.000Z\",\"status\":\"STARTED\",\"infoUrl\":null,\"promotion\":\"jenkins-smoke\"}]}\n\n\tat HttpSteps$_run_closure12.doCall(HttpSteps.groovy:110)\n\tat ✽.And the body should be JSON:(api/deployment/updating.feature:18)\n"
});
formatter.after({
  "duration": 9167000,
  "status": "passed"
});
formatter.after({
  "duration": 15000,
  "status": "passed"
});
formatter.before({
  "duration": 615219000,
  "status": "passed"
});
formatter.before({
  "duration": 59000,
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
  "duration": 7451000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/api/deployments/1",
      "offset": 9
    }
  ],
  "location": "HttpSteps.groovy:49"
});
formatter.result({
  "duration": 31889000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:74"
});
formatter.result({
  "duration": 106000,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:83"
});
formatter.result({
  "duration": 1256000,
  "status": "failed",
  "error_message": "Assertion failed: \n\nassert bodyNode \u003d\u003d expectedNode\n       |        |  |\n       |        |  {\"id\":1,\"artifact\":{\"id\":1,\"group\":\"com.example.cucumber\",\"name\":\"cucumber-artifact\",\"version\":\"1.0.1\",\"sourceUrl\":\"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.1/cucumber-artifact-1.0.1.jar\",\"createdAt\":\"2015-04-07T22:19:39.683Z\"},\"environment\":\"pre-prod\",\"service\":\"faas\",\"status\":\"FAILED\",\"promotions\":[{\"id\":1,\"promotion\":\"jenkins-smoke\",\"status\":\"STARTED\",\"infoUrl\":null,\"createdAt\":\"2015-04-07T22:19:39.683Z\"}],\"createdAt\":\"2015-04-07T22:19:39.683Z\"}\n       |        false\n       {\"id\":1,\"createdAt\":\"2015-04-07T22:19:40.000Z\",\"artifact\":{\"id\":1,\"createdAt\":\"2015-04-07T22:19:40.000Z\",\"group\":\"com.example.cucumber\",\"name\":\"cucumber-artifact\",\"version\":\"1.0.1\",\"sourceUrl\":\"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.1/cucumber-artifact-1.0.1.jar\"},\"status\":\"FAILED\",\"environment\":\"pre-prod\",\"service\":\"faas\",\"promotions\":[{\"id\":1,\"createdAt\":\"2015-04-07T22:19:40.000Z\",\"status\":\"STARTED\",\"infoUrl\":null,\"promotion\":\"jenkins-smoke\"}]}\n\n\tat HttpSteps$_run_closure12.doCall(HttpSteps.groovy:110)\n\tat ✽.And the body should be JSON:(api/deployment/updating.feature:56)\n"
});
formatter.after({
  "duration": 689189000,
  "status": "passed"
});
formatter.after({
  "duration": 17000,
  "status": "passed"
});
formatter.before({
  "duration": 592203000,
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
  "duration": 7657000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/api/deployments/1",
      "offset": 9
    }
  ],
  "location": "HttpSteps.groovy:49"
});
formatter.result({
  "duration": 19606000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "406",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:74"
});
formatter.result({
  "duration": 101000,
  "status": "passed"
});
formatter.after({
  "duration": 8498000,
  "status": "passed"
});
formatter.before({
  "duration": 633038000,
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
  "duration": 7935000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/api/deployments/1",
      "offset": 9
    }
  ],
  "location": "HttpSteps.groovy:49"
});
formatter.result({
  "duration": 17055000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:74"
});
formatter.result({
  "duration": 316000,
  "status": "passed"
});
formatter.after({
  "duration": 7784000,
  "status": "passed"
});
formatter.before({
  "duration": 620444000,
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
  "location": "HttpSteps.groovy:49"
});
formatter.result({
  "duration": 16031000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "404",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:74"
});
formatter.result({
  "duration": 105000,
  "status": "passed"
});
formatter.after({
  "duration": 7342000,
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
  "duration": 609672000,
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
    "value": "description: \"DeployDB Primary Integration\"\nwebhook:\n  deployment:\n    created:\n      - http://jenkins.example.com/job/integ-deploy-created/build\n    completed:\n      - http://jenkins.example.com/job/integ-deploy-completed/build",
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
    "value": "  [{\n    \"ident\" : \"integ\",\n    \"description\" : \"DeployDB Primary Integration\",\n    \"webhook\" : {\n      \"deployment\" : {\n          \"started\" : null,\n          \"created\" : [\"http://jenkins.example.com/job/integ-deploy-created/build\"],\n          \"completed\" : [\"http://jenkins.example.com/job/integ-deploy-completed/build\"],\n          \"verified\" : null\n      },\n      \"promotion\" : null\n    }\n  }]",
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
  "duration": 7238000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/api/environments",
      "offset": 7
    }
  ],
  "location": "HttpSteps.groovy:17"
});
formatter.result({
  "duration": 15769000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:74"
});
formatter.result({
  "duration": 85000,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:83"
});
formatter.result({
  "duration": 742000,
  "status": "passed"
});
formatter.after({
  "duration": 7521000,
  "status": "passed"
});
formatter.before({
  "duration": 596297000,
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
    "value": "description: \"DeployDB Primary Integration\"\nwebhook:\n  deployment:\n    created:\n      - http://jenkins.example.com/job/integ-deploy-created/build\n    completed:\n      - http://jenkins.example.com/job/integ-deploy-completed/build",
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
    "value": "  {\n    \"ident\" : \"integ\",\n    \"description\" : \"DeployDB Primary Integration\",\n    \"webhook\" : {\n      \"deployment\" : {\n          \"started\" : null,\n          \"created\" : [\"http://jenkins.example.com/job/integ-deploy-created/build\"],\n          \"completed\" : [\"http://jenkins.example.com/job/integ-deploy-completed/build\"],\n          \"verified\" : null\n      },\n      \"promotion\" : null\n    }\n  }",
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
  "duration": 6321000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/api/environments/integ",
      "offset": 7
    }
  ],
  "location": "HttpSteps.groovy:17"
});
formatter.result({
  "duration": 14492000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:74"
});
formatter.result({
  "duration": 88000,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:83"
});
formatter.result({
  "duration": 910000,
  "status": "passed"
});
formatter.after({
  "duration": 7138000,
  "status": "passed"
});
formatter.before({
  "duration": 622660000,
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
  "location": "HttpSteps.groovy:17"
});
formatter.result({
  "duration": 13165000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "404",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:74"
});
formatter.result({
  "duration": 99000,
  "status": "passed"
});
formatter.after({
  "duration": 5849000,
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
  "duration": 581880000,
  "status": "passed"
});
formatter.before({
  "duration": 41000,
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
    "value": "{\n  \"id\" : 1,\n  \"createdAt\" : \"{{created_timestamp}}\",\n  \"artifact\" : {\n      \"id\" : 1,\n      \"group\" : \"com.example.cucumber\",\n      \"name\" : \"cucumber-artifact\",\n      \"version\" : \"1.0.1\",\n      \"sourceUrl\" : \"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.1/cucumber-artifact-1.0.1.jar\",\n      \"createdAt\" : \"{{created_timestamp}}\"\n    },\n  \"deployments\":[{\n    \"id\" : 1,\n    \"artifact\" : {\n      \"id\" : 1,\n      \"group\" : \"com.example.cucumber\",\n      \"name\" : \"cucumber-artifact\",\n      \"version\" : \"1.0.1\",\n      \"sourceUrl\" : \"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.1/cucumber-artifact-1.0.1.jar\",\n      \"createdAt\" : \"{{created_timestamp}}\"\n    },\n    \"environment\" : \"pre-production\",\n    \"service\" : \"faas\",\n    \"promotions\":[],\n    \"status\" : \"STARTED\",\n    \"createdAt\" : \"{{created_timestamp}}\"\n  },\n  {\n    \"id\" : 2,\n    \"artifact\" : {\n      \"id\" : 1,\n      \"group\" : \"com.example.cucumber\",\n      \"name\" : \"cucumber-artifact\",\n      \"version\" : \"1.0.1\",\n      \"sourceUrl\" : \"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.1/cucumber-artifact-1.0.1.jar\",\n      \"createdAt\" : \"{{created_timestamp}}\"\n    },\n    \"environment\" : \"production\",\n    \"service\" : \"faas\",\n    \"promotions\":[],\n    \"status\" : \"STARTED\",\n    \"createdAt\" : \"{{created_timestamp}}\"\n  }],\n  \"service\":\"faas\"\n}",
    "line": 14,
    "content_type": ""
  }
});
formatter.match({
  "location": "FlowSteps.groovy:13"
});
formatter.result({
  "duration": 9349000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/api/flows/1",
      "offset": 7
    }
  ],
  "location": "HttpSteps.groovy:17"
});
formatter.result({
  "duration": 23600000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:74"
});
formatter.result({
  "duration": 236000,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:83"
});
formatter.result({
  "duration": 1958000,
  "status": "failed",
  "error_message": "Assertion failed: \n\nassert bodyNode \u003d\u003d expectedNode\n       |        |  |\n       |        |  {\"id\":1,\"createdAt\":\"2015-04-07T22:19:44.860Z\",\"artifact\":{\"id\":1,\"group\":\"com.example.cucumber\",\"name\":\"cucumber-artifact\",\"version\":\"1.0.1\",\"sourceUrl\":\"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.1/cucumber-artifact-1.0.1.jar\",\"createdAt\":\"2015-04-07T22:19:44.860Z\"},\"deployments\":[{\"id\":1,\"artifact\":{\"id\":1,\"group\":\"com.example.cucumber\",\"name\":\"cucumber-artifact\",\"version\":\"1.0.1\",\"sourceUrl\":\"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.1/cucumber-artifact-1.0.1.jar\",\"createdAt\":\"2015-04-07T22:19:44.860Z\"},\"environment\":\"pre-production\",\"service\":\"faas\",\"promotions\":[],\"status\":\"STARTED\",\"createdAt\":\"2015-04-07T22:19:44.860Z\"},{\"id\":2,\"artifact\":{\"id\":1,\"group\":\"com.example.cucumber\",\"name\":\"cucumber-artifact\",\"version\":\"1.0.1\",\"sourceUrl\":\"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.1/cucumber-artifact-1.0.1.jar\",\"createdAt\":\"2015-04-07T22:19:44.860Z\"},\"environment\":\"production\",\"service\":\"faas\",\"promotions\":[],\"status\":\"STARTED\",\"createdAt\":\"2015-04-07T22:19:44.860Z\"}],\"service\":\"faas\"}\n       |        false\n       {\"id\":1,\"createdAt\":\"2015-04-07T22:19:45.000Z\",\"artifact\":{\"id\":1,\"createdAt\":\"2015-04-07T22:19:45.000Z\",\"group\":\"com.example.cucumber\",\"name\":\"cucumber-artifact\",\"version\":\"1.0.1\",\"sourceUrl\":\"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.1/cucumber-artifact-1.0.1.jar\"},\"deployments\":[{\"id\":1,\"createdAt\":\"2015-04-07T22:19:45.000Z\",\"artifact\":{\"id\":1,\"createdAt\":\"2015-04-07T22:19:45.000Z\",\"group\":\"com.example.cucumber\",\"name\":\"cucumber-artifact\",\"version\":\"1.0.1\",\"sourceUrl\":\"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.1/cucumber-artifact-1.0.1.jar\"},\"status\":\"STARTED\",\"environment\":\"pre-production\",\"service\":\"faas\",\"promotions\":[]},{\"id\":2,\"createdAt\":\"2015-04-07T22:19:45.000Z\",\"artifact\":{\"id\":1,\"createdAt\":\"2015-04-07T22:19:45.000Z\",\"group\":\"com.example.cucumber\",\"name\":\"cucumber-artifact\",\"version\":\"1.0.1\",\"sourceUrl\":\"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.1/cucumber-artifact-1.0.1.jar\"},\"status\":\"STARTED\",\"environment\":\"production\",\"service\":\"faas\",\"promotions\":[]}],\"service\":\"faas\"}\n\n\tat HttpSteps$_run_closure12.doCall(HttpSteps.groovy:110)\n\tat ✽.And the body should be JSON:(api/flow/reading.feature:13)\n"
});
formatter.after({
  "duration": 9846000,
  "status": "passed"
});
formatter.after({
  "duration": 15000,
  "status": "passed"
});
formatter.before({
  "duration": 639363000,
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
  "location": "HttpSteps.groovy:17"
});
formatter.result({
  "duration": 16205000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "404",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:74"
});
formatter.result({
  "duration": 108000,
  "status": "passed"
});
formatter.after({
  "duration": 6784000,
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
  "duration": 610425000,
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
  "location": "HttpSteps.groovy:13"
});
formatter.result({
  "duration": 42898000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:74"
});
formatter.result({
  "duration": 94000,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:83"
});
formatter.result({
  "duration": 706000,
  "status": "passed"
});
formatter.after({
  "duration": 6925000,
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
  "duration": 702124000,
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
  "duration": 10222000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/api/pipelines",
      "offset": 7
    }
  ],
  "location": "HttpSteps.groovy:17"
});
formatter.result({
  "duration": 15690000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:74"
});
formatter.result({
  "duration": 108000,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:83"
});
formatter.result({
  "duration": 934000,
  "status": "passed"
});
formatter.after({
  "duration": 7925000,
  "status": "passed"
});
formatter.before({
  "duration": 644602000,
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
  "duration": 11698000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/api/pipelines/devtoprod",
      "offset": 7
    }
  ],
  "location": "HttpSteps.groovy:17"
});
formatter.result({
  "duration": 13271000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:74"
});
formatter.result({
  "duration": 87000,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:83"
});
formatter.result({
  "duration": 759000,
  "status": "passed"
});
formatter.after({
  "duration": 6058000,
  "status": "passed"
});
formatter.before({
  "duration": 610052000,
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
  "location": "HttpSteps.groovy:17"
});
formatter.result({
  "duration": 13648000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "404",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:74"
});
formatter.result({
  "duration": 95000,
  "status": "passed"
});
formatter.after({
  "duration": 7190000,
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
  "duration": 677046000,
  "status": "passed"
});
formatter.before({
  "duration": 54000,
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
  "duration": 7771000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/api/deployments/1/promotions",
      "offset": 11
    }
  ],
  "location": "HttpSteps.groovy:25"
});
formatter.result({
  "duration": 37791000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "201",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:74"
});
formatter.result({
  "duration": 87000,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:83"
});
formatter.result({
  "duration": 1044000,
  "status": "failed",
  "error_message": "Assertion failed: \n\nassert bodyNode \u003d\u003d expectedNode\n       |        |  |\n       |        |  {\"id\":1,\"promotion\":\"jenkins-smoke\",\"status\":\"SUCCESS\",\"infoUrl\":\"http://local.lookout.com/jenkins/job-id/2/results\",\"createdAt\":\"2015-04-07T22:19:48.966Z\"}\n       |        false\n       {\"id\":1,\"createdAt\":\"2015-04-07T22:19:49.000Z\",\"status\":\"SUCCESS\",\"infoUrl\":\"http://local.lookout.com/jenkins/job-id/2/results\",\"promotion\":\"jenkins-smoke\"}\n\n\tat HttpSteps$_run_closure12.doCall(HttpSteps.groovy:110)\n\tat ✽.And the body should be JSON:(api/promotion/creating.feature:20)\n"
});
formatter.after({
  "duration": 9808000,
  "status": "passed"
});
formatter.after({
  "duration": 18000,
  "status": "passed"
});
formatter.before({
  "duration": 640058000,
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
  "duration": 7679000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/api/deployments/1/promotions",
      "offset": 11
    }
  ],
  "location": "HttpSteps.groovy:25"
});
formatter.result({
  "duration": 24842000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "406",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:74"
});
formatter.result({
  "duration": 99000,
  "status": "passed"
});
formatter.after({
  "duration": 7436000,
  "status": "passed"
});
formatter.before({
  "duration": 623002000,
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
  "location": "HttpSteps.groovy:25"
});
formatter.result({
  "duration": 15308000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "404",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:74"
});
formatter.result({
  "duration": 115000,
  "status": "passed"
});
formatter.after({
  "duration": 6751000,
  "status": "passed"
});
formatter.before({
  "duration": 576217000,
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
  "location": "HttpSteps.groovy:25"
});
formatter.result({
  "duration": 16983000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "404",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:74"
});
formatter.result({
  "duration": 107000,
  "status": "passed"
});
formatter.after({
  "duration": 6632000,
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
  "duration": 612460000,
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
  "duration": 5260000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/api/promotions",
      "offset": 7
    }
  ],
  "location": "HttpSteps.groovy:17"
});
formatter.result({
  "duration": 14803000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:74"
});
formatter.result({
  "duration": 88000,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:83"
});
formatter.result({
  "duration": 659000,
  "status": "passed"
});
formatter.after({
  "duration": 6846000,
  "status": "passed"
});
formatter.before({
  "duration": 645815000,
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
  "duration": 65598000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/api/promotions/basic",
      "offset": 7
    }
  ],
  "location": "HttpSteps.groovy:17"
});
formatter.result({
  "duration": 15379000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:74"
});
formatter.result({
  "duration": 97000,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:83"
});
formatter.result({
  "duration": 927000,
  "status": "passed"
});
formatter.after({
  "duration": 7876000,
  "status": "passed"
});
formatter.before({
  "duration": 615369000,
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
  "location": "HttpSteps.groovy:17"
});
formatter.result({
  "duration": 12761000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "404",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:74"
});
formatter.result({
  "duration": 98000,
  "status": "passed"
});
formatter.after({
  "duration": 6982000,
  "status": "passed"
});
formatter.before({
  "duration": 580318000,
  "status": "passed"
});
formatter.before({
  "duration": 58000,
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
  "duration": 8077000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/api/deployments/1/promotions/1",
      "offset": 7
    }
  ],
  "location": "HttpSteps.groovy:17"
});
formatter.result({
  "duration": 20570000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:74"
});
formatter.result({
  "duration": 93000,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:83"
});
formatter.result({
  "duration": 1008000,
  "status": "failed",
  "error_message": "Assertion failed: \n\nassert bodyNode \u003d\u003d expectedNode\n       |        |  |\n       |        |  {\"id\":1,\"promotion\":\"jenkins-smoke\",\"status\":\"STARTED\",\"infoUrl\":null,\"createdAt\":\"2015-04-07T22:19:53.557Z\"}\n       |        false\n       {\"id\":1,\"createdAt\":\"2015-04-07T22:19:54.000Z\",\"status\":\"STARTED\",\"infoUrl\":null,\"promotion\":\"jenkins-smoke\"}\n\n\tat HttpSteps$_run_closure12.doCall(HttpSteps.groovy:110)\n\tat ✽.And the body should be JSON:(api/promotion/reading.feature:57)\n"
});
formatter.after({
  "duration": 9275000,
  "status": "passed"
});
formatter.after({
  "duration": 28000,
  "status": "passed"
});
formatter.before({
  "duration": 688675000,
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
  "location": "HttpSteps.groovy:17"
});
formatter.result({
  "duration": 14593000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "404",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:74"
});
formatter.result({
  "duration": 97000,
  "status": "passed"
});
formatter.after({
  "duration": 7522000,
  "status": "passed"
});
formatter.before({
  "duration": 718977000,
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
  "duration": 8335000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/api/deployments/1/promotions/5",
      "offset": 7
    }
  ],
  "location": "HttpSteps.groovy:17"
});
formatter.result({
  "duration": 21160000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "404",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:74"
});
formatter.result({
  "duration": 111000,
  "status": "passed"
});
formatter.after({
  "duration": 8553000,
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
  "duration": 676479000,
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
  "duration": 12106000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/api/services",
      "offset": 7
    }
  ],
  "location": "HttpSteps.groovy:17"
});
formatter.result({
  "duration": 14734000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:74"
});
formatter.result({
  "duration": 140000,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:83"
});
formatter.result({
  "duration": 2042000,
  "status": "passed"
});
formatter.after({
  "duration": 8154000,
  "status": "passed"
});
formatter.before({
  "duration": 675468000,
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
  "duration": 5873000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/api/services/faas",
      "offset": 7
    }
  ],
  "location": "HttpSteps.groovy:17"
});
formatter.result({
  "duration": 14280000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:74"
});
formatter.result({
  "duration": 81000,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:83"
});
formatter.result({
  "duration": 757000,
  "status": "passed"
});
formatter.after({
  "duration": 9097000,
  "status": "passed"
});
formatter.before({
  "duration": 640263000,
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
  "location": "HttpSteps.groovy:17"
});
formatter.result({
  "duration": 13138000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "404",
      "offset": 23
    }
  ],
  "location": "HttpSteps.groovy:74"
});
formatter.result({
  "duration": 91000,
  "status": "passed"
});
formatter.after({
  "duration": 6761000,
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
  "duration": 600504000,
  "status": "passed"
});
formatter.before({
  "duration": 43000,
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
  "location": "WebhookSteps.groovy:19"
});
formatter.result({
  "duration": 12351000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "STARTED",
      "offset": 26
    }
  ],
  "location": "DeploymentSteps.groovy:111"
});
formatter.result({
  "duration": 5126000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/api/deployments/1",
      "offset": 9
    }
  ],
  "location": "HttpSteps.groovy:49"
});
formatter.result({
  "duration": 25611000,
  "status": "passed"
});
formatter.match({
  "location": "WebhookSteps.groovy:120"
});
formatter.result({
  "duration": 1005012000,
  "status": "failed",
  "error_message": "Assertion failed: \n\nassert expectedNode \u003d\u003d requestNode\n       |            |  |\n       |            |  {\"id\":1,\"artifact\":{\"id\":1,\"createdAt\":\"2015-04-07T22:19:58.000Z\",\"group\":\"com.example.cucumber\",\"name\":\"cucumber-artifact\",\"version\":\"1.0.1\",\"sourceUrl\":\"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.1/cucumber-artifact-1.0.1.jar\"},\"service\":\"faas\",\"environment\":\"pre-prod\",\"createdAt\":\"2015-04-07T22:19:58.000Z\",\"status\":\"COMPLETED\"}\n       |            false\n       {\"id\":1,\"artifact\":{\"id\":1,\"group\":\"com.example.cucumber\",\"name\":\"cucumber-artifact\",\"version\":\"1.0.1\",\"sourceUrl\":\"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.1/cucumber-artifact-1.0.1.jar\",\"createdAt\":\"2015-04-07T22:19:57.760Z\"},\"status\":\"COMPLETED\",\"service\":\"faas\",\"environment\":\"pre-prod\",\"createdAt\":\"2015-04-07T22:19:57.760Z\"}\n\n\tat WebhookSteps$_run_closure4$_closure14.doCall(WebhookSteps.groovy:135)\n\tat ✽.Then the webhook should be invoked with the JSON:(api/webhook/deploymentCompleted.feature:18)\n"
});
formatter.after({
  "duration": 9308000,
  "status": "passed"
});
formatter.after({
  "duration": 17000,
  "status": "passed"
});
formatter.before({
  "duration": 655579000,
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
    "value": "description: \"DeployDB Primary Integration\"\nwebhook:\n  deployment:\n    completed:\n      - http://localhost:10000/job/notify-deployment-started/build",
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
  "location": "WebhookSteps.groovy:60"
});
formatter.result({
  "duration": 8213000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "STARTED",
      "offset": 26
    }
  ],
  "location": "DeploymentSteps.groovy:111"
});
formatter.result({
  "duration": 5734000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/api/deployments/1",
      "offset": 9
    }
  ],
  "location": "HttpSteps.groovy:49"
});
formatter.result({
  "duration": 25507000,
  "status": "passed"
});
formatter.match({
  "location": "WebhookSteps.groovy:120"
});
formatter.result({
  "duration": 1006108000,
  "status": "failed",
  "error_message": "Assertion failed: \n\nassert expectedNode \u003d\u003d requestNode\n       |            |  |\n       |            |  {\"id\":1,\"artifact\":{\"id\":1,\"createdAt\":\"2015-04-07T22:19:59.000Z\",\"group\":\"com.example.cucumber\",\"name\":\"cucumber-artifact\",\"version\":\"1.0.1\",\"sourceUrl\":\"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.1/cucumber-artifact-1.0.1.jar\"},\"service\":\"faas\",\"environment\":\"pre-prod\",\"createdAt\":\"2015-04-07T22:19:59.000Z\",\"status\":\"COMPLETED\"}\n       |            false\n       {\"id\":1,\"artifact\":{\"id\":1,\"group\":\"com.example.cucumber\",\"name\":\"cucumber-artifact\",\"version\":\"1.0.1\",\"sourceUrl\":\"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.1/cucumber-artifact-1.0.1.jar\",\"createdAt\":\"2015-04-07T22:19:59.476Z\"},\"status\":\"COMPLETED\",\"service\":\"faas\",\"environment\":\"pre-prod\",\"createdAt\":\"2015-04-07T22:19:59.476Z\"}\n\n\tat WebhookSteps$_run_closure4$_closure14.doCall(WebhookSteps.groovy:135)\n\tat ✽.Then the webhook should be invoked with the JSON:(api/webhook/deploymentCompleted.feature:55)\n"
});
formatter.match({
  "location": "WebhookSteps.groovy:158"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 9412000,
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
  "duration": 577383000,
  "status": "passed"
});
formatter.before({
  "duration": 46000,
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
  "location": "WebhookSteps.groovy:19"
});
formatter.result({
  "duration": 13403000,
  "status": "passed"
});
formatter.match({
  "location": "PromotionSteps.groovy:24"
});
formatter.result({
  "duration": 495000,
  "status": "passed"
});
formatter.match({
  "location": "EnvironmentSteps.groovy:16"
});
formatter.result({
  "duration": 142000,
  "status": "passed"
});
formatter.match({
  "location": "PipelineSteps.groovy:17"
});
formatter.result({
  "duration": 152000,
  "status": "passed"
});
formatter.match({
  "location": "ServiceSteps.groovy:16"
});
formatter.result({
  "duration": 142000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/api/artifacts",
      "offset": 11
    }
  ],
  "location": "WebhookSteps.groovy:109"
});
formatter.result({
  "duration": 28589000,
  "status": "passed"
});
formatter.match({
  "location": "WebhookSteps.groovy:120"
});
formatter.result({
  "duration": 1004107000,
  "status": "passed"
});
formatter.match({
  "location": "WebhookSteps.groovy:158"
});
formatter.result({
  "duration": 5716000,
  "status": "passed"
});
formatter.after({
  "duration": 9198000,
  "status": "passed"
});
formatter.after({
  "duration": 18000,
  "status": "passed"
});
formatter.before({
  "duration": 614422000,
  "status": "passed"
});
formatter.before({
  "duration": 46000,
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
    "value": "description: \"DeployDB Primary Integration\"\nwebhook:\n  deployment:\n    created:\n      - http://localhost:10000/job/notify-deployment-started/build",
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
  "location": "WebhookSteps.groovy:60"
});
formatter.result({
  "duration": 7898000,
  "status": "passed"
});
formatter.match({
  "location": "PromotionSteps.groovy:24"
});
formatter.result({
  "duration": 209000,
  "status": "passed"
});
formatter.match({
  "location": "PipelineSteps.groovy:17"
});
formatter.result({
  "duration": 154000,
  "status": "passed"
});
formatter.match({
  "location": "ServiceSteps.groovy:16"
});
formatter.result({
  "duration": 133000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/api/artifacts",
      "offset": 11
    }
  ],
  "location": "WebhookSteps.groovy:109"
});
formatter.result({
  "duration": 30168000,
  "status": "passed"
});
formatter.match({
  "location": "WebhookSteps.groovy:120"
});
formatter.result({
  "duration": 1004558000,
  "status": "passed"
});
formatter.after({
  "duration": 8983000,
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
  "duration": 594488000,
  "status": "passed"
});
formatter.before({
  "duration": 45000,
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
  "location": "WebhookSteps.groovy:19"
});
formatter.result({
  "duration": 11585000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CREATED",
      "offset": 26
    }
  ],
  "location": "DeploymentSteps.groovy:111"
});
formatter.result({
  "duration": 5497000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/api/deployments/1",
      "offset": 9
    }
  ],
  "location": "HttpSteps.groovy:49"
});
formatter.result({
  "duration": 28662000,
  "status": "passed"
});
formatter.match({
  "location": "WebhookSteps.groovy:120"
});
formatter.result({
  "duration": 1006748000,
  "status": "failed",
  "error_message": "Assertion failed: \n\nassert expectedNode \u003d\u003d requestNode\n       |            |  |\n       |            |  {\"id\":1,\"artifact\":{\"id\":1,\"createdAt\":\"2015-04-07T22:20:04.000Z\",\"group\":\"com.example.cucumber\",\"name\":\"cucumber-artifact\",\"version\":\"1.0.1\",\"sourceUrl\":\"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.1/cucumber-artifact-1.0.1.jar\"},\"service\":\"faas\",\"environment\":\"pre-prod\",\"createdAt\":\"2015-04-07T22:20:04.000Z\",\"status\":\"STARTED\"}\n       |            false\n       {\"id\":1,\"artifact\":{\"id\":1,\"group\":\"com.example.cucumber\",\"name\":\"cucumber-artifact\",\"version\":\"1.0.1\",\"sourceUrl\":\"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.1/cucumber-artifact-1.0.1.jar\",\"createdAt\":\"2015-04-07T22:20:04.445Z\"},\"status\":\"STARTED\",\"service\":\"faas\",\"environment\":\"pre-prod\",\"createdAt\":\"2015-04-07T22:20:04.445Z\"}\n\n\tat WebhookSteps$_run_closure4$_closure14.doCall(WebhookSteps.groovy:135)\n\tat ✽.Then the webhook should be invoked with the JSON:(api/webhook/deploymentStarted.feature:18)\n"
});
formatter.match({
  "location": "WebhookSteps.groovy:158"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 9547000,
  "status": "passed"
});
formatter.after({
  "duration": 18000,
  "status": "passed"
});
formatter.before({
  "duration": 560227000,
  "status": "passed"
});
formatter.before({
  "duration": 54000,
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
    "value": "description: \"DeployDB Primary Integration\"\nwebhook:\n  deployment:\n    started:\n      - http://localhost:10000/job/notify-deployment-started/build",
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
  "location": "WebhookSteps.groovy:60"
});
formatter.result({
  "duration": 7889000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CREATED",
      "offset": 26
    }
  ],
  "location": "DeploymentSteps.groovy:111"
});
formatter.result({
  "duration": 5979000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/api/deployments/1",
      "offset": 9
    }
  ],
  "location": "HttpSteps.groovy:49"
});
formatter.result({
  "duration": 27976000,
  "status": "passed"
});
formatter.match({
  "location": "WebhookSteps.groovy:120"
});
formatter.result({
  "duration": 1005222000,
  "status": "failed",
  "error_message": "Assertion failed: \n\nassert expectedNode \u003d\u003d requestNode\n       |            |  |\n       |            |  {\"id\":1,\"artifact\":{\"id\":1,\"createdAt\":\"2015-04-07T22:20:06.000Z\",\"group\":\"com.example.cucumber\",\"name\":\"cucumber-artifact\",\"version\":\"1.0.1\",\"sourceUrl\":\"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.1/cucumber-artifact-1.0.1.jar\"},\"service\":\"faas\",\"environment\":\"pre-prod\",\"createdAt\":\"2015-04-07T22:20:06.000Z\",\"status\":\"STARTED\"}\n       |            false\n       {\"id\":1,\"artifact\":{\"id\":1,\"group\":\"com.example.cucumber\",\"name\":\"cucumber-artifact\",\"version\":\"1.0.1\",\"sourceUrl\":\"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.1/cucumber-artifact-1.0.1.jar\",\"createdAt\":\"2015-04-07T22:20:06.071Z\"},\"status\":\"STARTED\",\"service\":\"faas\",\"environment\":\"pre-prod\",\"createdAt\":\"2015-04-07T22:20:06.071Z\"}\n\n\tat WebhookSteps$_run_closure4$_closure14.doCall(WebhookSteps.groovy:135)\n\tat ✽.Then the webhook should be invoked with the JSON:(api/webhook/deploymentStarted.feature:57)\n"
});
formatter.after({
  "duration": 6771000,
  "status": "passed"
});
formatter.after({
  "duration": 14000,
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
  "duration": 578056000,
  "status": "passed"
});
formatter.before({
  "duration": 68000,
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
  "location": "WebhookSteps.groovy:19"
});
formatter.result({
  "duration": 11080000,
  "status": "passed"
});
formatter.match({
  "location": "PromotionSteps.groovy:24"
});
formatter.result({
  "duration": 276000,
  "status": "passed"
});
formatter.match({
  "location": "EnvironmentSteps.groovy:16"
});
formatter.result({
  "duration": 463000,
  "status": "passed"
});
formatter.match({
  "location": "PipelineSteps.groovy:17"
});
formatter.result({
  "duration": 211000,
  "status": "passed"
});
formatter.match({
  "location": "ServiceSteps.groovy:16"
});
formatter.result({
  "duration": 138000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/api/artifacts",
      "offset": 11
    }
  ],
  "location": "WebhookSteps.groovy:109"
});
formatter.result({
  "duration": 26943000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 12
    }
  ],
  "location": "WebhookSteps.groovy:139"
});
formatter.result({
  "duration": 1005859000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 12
    }
  ],
  "location": "WebhookSteps.groovy:139"
});
formatter.result({
  "duration": 1001436000,
  "status": "passed"
});
formatter.after({
  "duration": 9939000,
  "status": "passed"
});
formatter.after({
  "duration": 23000,
  "status": "passed"
});
formatter.before({
  "duration": 597260000,
  "status": "passed"
});
formatter.before({
  "duration": 58000,
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
    "value": "description: \"DeployDB Primary Integration\"\nwebhook:\n  deployment:\n    created:\n      - http://localhost:10000/job/notify-deployment-created/build\n      - http://localhost:10000/job/another-notify-deployment-created/build",
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
  "location": "WebhookSteps.groovy:60"
});
formatter.result({
  "duration": 8819000,
  "status": "passed"
});
formatter.match({
  "location": "PromotionSteps.groovy:24"
});
formatter.result({
  "duration": 362000,
  "status": "passed"
});
formatter.match({
  "location": "PipelineSteps.groovy:17"
});
formatter.result({
  "duration": 419000,
  "status": "passed"
});
formatter.match({
  "location": "ServiceSteps.groovy:16"
});
formatter.result({
  "duration": 150000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/api/artifacts",
      "offset": 11
    }
  ],
  "location": "WebhookSteps.groovy:109"
});
formatter.result({
  "duration": 30709000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 12
    }
  ],
  "location": "WebhookSteps.groovy:139"
});
formatter.result({
  "duration": 1001287000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 12
    }
  ],
  "location": "WebhookSteps.groovy:139"
});
formatter.result({
  "duration": 1005846000,
  "status": "passed"
});
formatter.after({
  "duration": 10122000,
  "status": "passed"
});
formatter.after({
  "duration": 20000,
  "status": "passed"
});
formatter.before({
  "duration": 645563000,
  "status": "passed"
});
formatter.before({
  "duration": 43000,
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
    "value": "description: \"DeployDB Primary Integration\"\nwebhook:\n  deployment:\n    created:\n      - http://localhost:10000/job/another-notify-deployment-created/build",
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
  "location": "WebhookSteps.groovy:19"
});
formatter.result({
  "duration": 10466000,
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
  "location": "WebhookSteps.groovy:60"
});
formatter.result({
  "duration": 5860000,
  "status": "passed"
});
formatter.match({
  "location": "PromotionSteps.groovy:24"
});
formatter.result({
  "duration": 219000,
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
  "duration": 121000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/api/artifacts",
      "offset": 11
    }
  ],
  "location": "WebhookSteps.groovy:109"
});
formatter.result({
  "duration": 29888000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 12
    }
  ],
  "location": "WebhookSteps.groovy:139"
});
formatter.result({
  "duration": 1002306000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 12
    }
  ],
  "location": "WebhookSteps.groovy:139"
});
formatter.result({
  "duration": 1006361000,
  "status": "passed"
});
formatter.after({
  "duration": 9623000,
  "status": "passed"
});
formatter.after({
  "duration": 17000,
  "status": "passed"
});
formatter.before({
  "duration": 632597000,
  "status": "passed"
});
formatter.before({
  "duration": 65000,
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
    "value": "description: \"DeployDB Primary Integration\"\nwebhook:\n  promotion:\n    completed:\n      - http://localhost:10000/job/another-notify-promotion-completed/build",
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
  "location": "WebhookSteps.groovy:19"
});
formatter.result({
  "duration": 10612000,
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
  "location": "WebhookSteps.groovy:60"
});
formatter.result({
  "duration": 6558000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "COMPLETED",
      "offset": 26
    }
  ],
  "location": "DeploymentSteps.groovy:111"
});
formatter.result({
  "duration": 5306000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/api/deployments/1/promotions",
      "offset": 11
    }
  ],
  "location": "HttpSteps.groovy:25"
});
formatter.result({
  "duration": 26633000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 12
    }
  ],
  "location": "WebhookSteps.groovy:139"
});
formatter.result({
  "duration": 1005204000,
  "status": "failed",
  "error_message": "Assertion failed: \n\nassert expectedNode \u003d\u003d requestNode\n       |            |  |\n       |            |  {\"id\":1,\"artifact\":{\"id\":1,\"createdAt\":\"2015-04-07T22:20:16.000Z\",\"group\":\"com.example.cucumber\",\"name\":\"cucumber-artifact\",\"version\":\"1.0.1\",\"sourceUrl\":\"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.1/cucumber-artifact-1.0.1.jar\"},\"service\":\"faas\",\"environment\":\"pre-prod\",\"createdAt\":\"2015-04-07T22:20:16.000Z\",\"status\":\"VERIFIED\",\"promotionResult\":{\"id\":1,\"createdAt\":\"2015-04-07T22:20:16.000Z\",\"status\":\"SUCCESS\",\"infoUrl\":\"http://local.lookout.com/jenkins/job-id/2/results\",\"promotion\":\"jenkins-smoke\"}}\n       |            false\n       {\"id\":1,\"artifact\":{\"id\":1,\"group\":\"com.example.cucumber\",\"name\":\"cucumber-artifact\",\"version\":\"1.0.1\",\"sourceUrl\":\"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.1/cucumber-artifact-1.0.1.jar\",\"createdAt\":\"2015-04-07T22:20:15.777Z\"},\"status\":\"VERIFIED\",\"service\":\"faas\",\"environment\":\"pre-prod\",\"createdAt\":\"2015-04-07T22:20:15.777Z\",\"promotionResult\":{\"id\":1,\"createdAt\":\"2015-04-07T22:20:15.777Z\",\"promotion\":\"jenkins-smoke\",\"infoUrl\":\"http://local.lookout.com/jenkins/job-id/2/results\",\"status\":\"SUCCESS\"}}\n\n\tat WebhookSteps$_run_closure5$_closure15.doCall(WebhookSteps.groovy:154)\n\tat ✽.Then the webhook 1 should be invoked with the JSON:(api/webhook/multipleWebhooks.feature:190)\n"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 12
    }
  ],
  "location": "WebhookSteps.groovy:139"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 9798000,
  "status": "passed"
});
formatter.after({
  "duration": 17000,
  "status": "passed"
});
formatter.before({
  "duration": 605847000,
  "status": "passed"
});
formatter.before({
  "duration": 51000,
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
    "value": "description: \"DeployDB Primary Integration\"\nwebhook:\n  deployment:\n    completed:\n      - http://localhost:10000/job/notify-deployment-completed/build",
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
  "location": "WebhookSteps.groovy:19"
});
formatter.result({
  "duration": 11802000,
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
  "location": "WebhookSteps.groovy:60"
});
formatter.result({
  "duration": 10661000,
  "status": "passed"
});
formatter.match({
  "location": "PromotionSteps.groovy:24"
});
formatter.result({
  "duration": 584000,
  "status": "passed"
});
formatter.match({
  "location": "PipelineSteps.groovy:17"
});
formatter.result({
  "duration": 171000,
  "status": "passed"
});
formatter.match({
  "location": "ServiceSteps.groovy:16"
});
formatter.result({
  "duration": 146000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/api/artifacts",
      "offset": 11
    }
  ],
  "location": "WebhookSteps.groovy:109"
});
formatter.result({
  "duration": 25313000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 12
    }
  ],
  "location": "WebhookSteps.groovy:139"
});
formatter.result({
  "duration": 1002968000,
  "status": "passed"
});
formatter.after({
  "duration": 7763000,
  "status": "passed"
});
formatter.after({
  "duration": 15000,
  "status": "passed"
});
formatter.before({
  "duration": 567979000,
  "status": "passed"
});
formatter.before({
  "duration": 43000,
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
    "value": "description: \"DeployDB Primary Integration\"\nwebhook:\n  deployment:\n    created:\n      - http://localhost:10000/notify-deployment-created/build\n      - http://localhost:10000/another-notify-deployment-created/build\n    completed:\n      - http://localhost:10000/job/notify-deployment-completed/build",
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
  "location": "WebhookSteps.groovy:19"
});
formatter.result({
  "duration": 11014000,
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
  "location": "WebhookSteps.groovy:60"
});
formatter.result({
  "duration": 6513000,
  "status": "passed"
});
formatter.match({
  "location": "PromotionSteps.groovy:24"
});
formatter.result({
  "duration": 190000,
  "status": "passed"
});
formatter.match({
  "location": "PipelineSteps.groovy:17"
});
formatter.result({
  "duration": 141000,
  "status": "passed"
});
formatter.match({
  "location": "ServiceSteps.groovy:16"
});
formatter.result({
  "duration": 121000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/api/artifacts",
      "offset": 11
    }
  ],
  "location": "WebhookSteps.groovy:109"
});
formatter.result({
  "duration": 26859000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 12
    }
  ],
  "location": "WebhookSteps.groovy:139"
});
formatter.result({
  "duration": 1002797000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 12
    }
  ],
  "location": "WebhookSteps.groovy:139"
});
formatter.result({
  "duration": 1005767000,
  "status": "passed"
});
formatter.after({
  "duration": 7714000,
  "status": "passed"
});
formatter.after({
  "duration": 15000,
  "status": "passed"
});
formatter.before({
  "duration": 602442000,
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
    "value": "description: \"DeployDB Primary Integration\"\nwebhook:\n  deployment:\n    created:\n      - http://localhost:10000/notify-deployment-created/build\n    completed:\n      - http://localhost:10000/job/notify-deployment-completed/build",
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
  "location": "WebhookSteps.groovy:19"
});
formatter.result({
  "duration": 10672000,
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
  "location": "WebhookSteps.groovy:60"
});
formatter.result({
  "duration": 6199000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CREATED",
      "offset": 26
    }
  ],
  "location": "DeploymentSteps.groovy:111"
});
formatter.result({
  "duration": 5685000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/api/deployments/1",
      "offset": 9
    }
  ],
  "location": "HttpSteps.groovy:49"
});
formatter.result({
  "duration": 24183000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 12
    }
  ],
  "location": "WebhookSteps.groovy:139"
});
formatter.result({
  "duration": 1002833000,
  "status": "failed",
  "error_message": "Assertion failed: \n\nassert expectedNode \u003d\u003d requestNode\n       |            |  |\n       |            |  {\"id\":1,\"artifact\":{\"id\":1,\"createdAt\":\"2015-04-07T22:20:22.000Z\",\"group\":\"com.example.cucumber\",\"name\":\"cucumber-artifact\",\"version\":\"1.0.1\",\"sourceUrl\":\"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.1/cucumber-artifact-1.0.1.jar\"},\"service\":\"faas\",\"environment\":\"pre-prod\",\"createdAt\":\"2015-04-07T22:20:22.000Z\",\"status\":\"STARTED\"}\n       |            false\n       {\"id\":1,\"artifact\":{\"id\":1,\"group\":\"com.example.cucumber\",\"name\":\"cucumber-artifact\",\"version\":\"1.0.1\",\"sourceUrl\":\"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.1/cucumber-artifact-1.0.1.jar\",\"createdAt\":\"2015-04-07T22:20:21.754Z\"},\"status\":\"STARTED\",\"service\":\"faas\",\"environment\":\"pre-prod\",\"createdAt\":\"2015-04-07T22:20:21.754Z\"}\n\n\tat WebhookSteps$_run_closure5$_closure15.doCall(WebhookSteps.groovy:154)\n\tat ✽.Then the webhook 1 should be invoked with the JSON:(api/webhook/multipleWebhooks.feature:379)\n"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 12
    }
  ],
  "location": "WebhookSteps.groovy:139"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 7246000,
  "status": "passed"
});
formatter.after({
  "duration": 16000,
  "status": "passed"
});
formatter.before({
  "duration": 581247000,
  "status": "passed"
});
formatter.before({
  "duration": 55000,
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
  "location": "WebhookSteps.groovy:19"
});
formatter.result({
  "duration": 15745000,
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
  "location": "WebhookSteps.groovy:60"
});
formatter.result({
  "duration": 7296000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "COMPLETED",
      "offset": 26
    }
  ],
  "location": "DeploymentSteps.groovy:111"
});
formatter.result({
  "duration": 6495000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/api/deployments/1/promotions",
      "offset": 11
    }
  ],
  "location": "HttpSteps.groovy:25"
});
formatter.result({
  "duration": 32159000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 12
    }
  ],
  "location": "WebhookSteps.groovy:139"
});
formatter.result({
  "duration": 1006641000,
  "status": "failed",
  "error_message": "Assertion failed: \n\nassert expectedNode \u003d\u003d requestNode\n       |            |  |\n       |            |  {\"id\":1,\"artifact\":{\"id\":1,\"createdAt\":\"2015-04-07T22:20:23.000Z\",\"group\":\"com.example.cucumber\",\"name\":\"cucumber-artifact\",\"version\":\"1.0.1\",\"sourceUrl\":\"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.1/cucumber-artifact-1.0.1.jar\"},\"service\":\"faas\",\"environment\":\"pre-prod\",\"createdAt\":\"2015-04-07T22:20:23.000Z\",\"status\":\"VERIFIED\",\"promotionResult\":{\"id\":1,\"createdAt\":\"2015-04-07T22:20:23.000Z\",\"status\":\"SUCCESS\",\"infoUrl\":\"http://local.lookout.com/jenkins/job-id/2/results\",\"promotion\":\"jenkins-smoke\"}}\n       |            false\n       {\"id\":1,\"artifact\":{\"id\":1,\"group\":\"com.example.cucumber\",\"name\":\"cucumber-artifact\",\"version\":\"1.0.1\",\"sourceUrl\":\"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.1/cucumber-artifact-1.0.1.jar\",\"createdAt\":\"2015-04-07T22:20:23.396Z\"},\"status\":\"VERIFIED\",\"service\":\"faas\",\"environment\":\"pre-prod\",\"createdAt\":\"2015-04-07T22:20:23.396Z\",\"promotionResult\":{\"id\":1,\"createdAt\":\"2015-04-07T22:20:23.396Z\",\"promotion\":\"jenkins-smoke\",\"infoUrl\":\"http://local.lookout.com/jenkins/job-id/2/results\",\"status\":\"SUCCESS\"}}\n\n\tat WebhookSteps$_run_closure5$_closure15.doCall(WebhookSteps.groovy:154)\n\tat ✽.Then the webhook 1 should be invoked with the JSON:(api/webhook/multipleWebhooks.feature:438)\n"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 12
    }
  ],
  "location": "WebhookSteps.groovy:139"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 9632000,
  "status": "passed"
});
formatter.after({
  "duration": 16000,
  "status": "passed"
});
formatter.before({
  "duration": 605537000,
  "status": "passed"
});
formatter.before({
  "duration": 68000,
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
    "value": "description: \"DeployDB Primary Integration\"\nwebhook:\n  promotion:\n    completed:\n      - http://localhost:10000/job/notify-promotion-completed/build\n      - http://localhost:10000/job/another-notify-promotion-completed/build\n",
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
  "location": "WebhookSteps.groovy:19"
});
formatter.result({
  "duration": 12286000,
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
  "location": "WebhookSteps.groovy:60"
});
formatter.result({
  "duration": 7395000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "COMPLETED",
      "offset": 26
    }
  ],
  "location": "DeploymentSteps.groovy:111"
});
formatter.result({
  "duration": 5142000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/api/deployments/1/promotions",
      "offset": 11
    }
  ],
  "location": "HttpSteps.groovy:25"
});
formatter.result({
  "duration": 30437000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 12
    }
  ],
  "location": "WebhookSteps.groovy:139"
});
formatter.result({
  "duration": 1003306000,
  "status": "failed",
  "error_message": "Assertion failed: \n\nassert expectedNode \u003d\u003d requestNode\n       |            |  |\n       |            |  {\"id\":1,\"artifact\":{\"id\":1,\"createdAt\":\"2015-04-07T22:20:25.000Z\",\"group\":\"com.example.cucumber\",\"name\":\"cucumber-artifact\",\"version\":\"1.0.1\",\"sourceUrl\":\"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.1/cucumber-artifact-1.0.1.jar\"},\"service\":\"faas\",\"environment\":\"pre-prod\",\"createdAt\":\"2015-04-07T22:20:25.000Z\",\"status\":\"VERIFIED\",\"promotionResult\":{\"id\":1,\"createdAt\":\"2015-04-07T22:20:25.000Z\",\"status\":\"SUCCESS\",\"infoUrl\":\"http://local.lookout.com/jenkins/job-id/2/results\",\"promotion\":\"jenkins-smoke\"}}\n       |            false\n       {\"id\":1,\"artifact\":{\"id\":1,\"group\":\"com.example.cucumber\",\"name\":\"cucumber-artifact\",\"version\":\"1.0.1\",\"sourceUrl\":\"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.1/cucumber-artifact-1.0.1.jar\",\"createdAt\":\"2015-04-07T22:20:25.085Z\"},\"status\":\"VERIFIED\",\"service\":\"faas\",\"environment\":\"pre-prod\",\"createdAt\":\"2015-04-07T22:20:25.085Z\",\"promotionResult\":{\"id\":1,\"createdAt\":\"2015-04-07T22:20:25.085Z\",\"promotion\":\"jenkins-smoke\",\"infoUrl\":\"http://local.lookout.com/jenkins/job-id/2/results\",\"status\":\"SUCCESS\"}}\n\n\tat WebhookSteps$_run_closure5$_closure15.doCall(WebhookSteps.groovy:154)\n\tat ✽.Then the webhook 1 should be invoked with the JSON:(api/webhook/multipleWebhooks.feature:518)\n"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 12
    }
  ],
  "location": "WebhookSteps.groovy:139"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 9527000,
  "status": "passed"
});
formatter.after({
  "duration": 18000,
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
  "duration": 590321000,
  "status": "passed"
});
formatter.before({
  "duration": 49000,
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
  "location": "WebhookSteps.groovy:19"
});
formatter.result({
  "duration": 13174000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "COMPLETED",
      "offset": 26
    }
  ],
  "location": "DeploymentSteps.groovy:111"
});
formatter.result({
  "duration": 6543000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/api/deployments/1/promotions",
      "offset": 11
    }
  ],
  "location": "HttpSteps.groovy:25"
});
formatter.result({
  "duration": 25497000,
  "status": "passed"
});
formatter.match({
  "location": "WebhookSteps.groovy:120"
});
formatter.result({
  "duration": 1001991000,
  "status": "failed",
  "error_message": "Assertion failed: \n\nassert expectedNode \u003d\u003d requestNode\n       |            |  |\n       |            |  {\"id\":1,\"artifact\":{\"id\":1,\"createdAt\":\"2015-04-07T22:20:27.000Z\",\"group\":\"com.example.cucumber\",\"name\":\"cucumber-artifact\",\"version\":\"1.0.1\",\"sourceUrl\":\"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.1/cucumber-artifact-1.0.1.jar\"},\"service\":\"faas\",\"environment\":\"pre-prod\",\"createdAt\":\"2015-04-07T22:20:27.000Z\",\"status\":\"VERIFIED\",\"promotionResult\":{\"id\":1,\"createdAt\":\"2015-04-07T22:20:27.000Z\",\"status\":\"FAILED\",\"infoUrl\":\"http://local.lookout.com/jenkins/job-id/2/results\",\"promotion\":\"jenkins-smoke\"}}\n       |            false\n       {\"id\":1,\"artifact\":{\"id\":1,\"group\":\"com.example.cucumber\",\"name\":\"cucumber-artifact\",\"version\":\"1.0.1\",\"sourceUrl\":\"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.1/cucumber-artifact-1.0.1.jar\",\"createdAt\":\"2015-04-07T22:20:26.750Z\"},\"status\":\"VERIFIED\",\"service\":\"faas\",\"environment\":\"pre-prod\",\"createdAt\":\"2015-04-07T22:20:26.750Z\",\"promotionResult\":{\"id\":1,\"createdAt\":\"2015-04-07T22:20:26.750Z\",\"promotion\":\"jenkins-smoke\",\"infoUrl\":\"http://local.lookout.com/jenkins/job-id/2/results\",\"status\":\"FAILED\"}}\n\n\tat WebhookSteps$_run_closure4$_closure14.doCall(WebhookSteps.groovy:135)\n\tat ✽.Then the webhook should be invoked with the JSON:(api/webhook/promotionCompletedFail.feature:20)\n"
});
formatter.match({
  "location": "WebhookSteps.groovy:158"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 9382000,
  "status": "passed"
});
formatter.after({
  "duration": 21000,
  "status": "passed"
});
formatter.before({
  "duration": 570753000,
  "status": "passed"
});
formatter.before({
  "duration": 55000,
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
    "value": "description: \"DeployDB Primary Integration\"\nwebhook:\n  promotion:\n    completed:\n      - http://localhost:10000/job/notify-promotion-completed/build",
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
  "location": "WebhookSteps.groovy:60"
});
formatter.result({
  "duration": 7946000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "COMPLETED",
      "offset": 26
    }
  ],
  "location": "DeploymentSteps.groovy:111"
});
formatter.result({
  "duration": 6301000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/api/deployments/1/promotions",
      "offset": 11
    }
  ],
  "location": "HttpSteps.groovy:25"
});
formatter.result({
  "duration": 30736000,
  "status": "passed"
});
formatter.match({
  "location": "WebhookSteps.groovy:120"
});
formatter.result({
  "duration": 1001895000,
  "status": "failed",
  "error_message": "Assertion failed: \n\nassert expectedNode \u003d\u003d requestNode\n       |            |  |\n       |            |  {\"id\":1,\"artifact\":{\"id\":1,\"createdAt\":\"2015-04-07T22:20:28.000Z\",\"group\":\"com.example.cucumber\",\"name\":\"cucumber-artifact\",\"version\":\"1.0.1\",\"sourceUrl\":\"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.1/cucumber-artifact-1.0.1.jar\"},\"service\":\"faas\",\"environment\":\"pre-prod\",\"createdAt\":\"2015-04-07T22:20:28.000Z\",\"status\":\"VERIFIED\",\"promotionResult\":{\"id\":1,\"createdAt\":\"2015-04-07T22:20:28.000Z\",\"status\":\"FAILED\",\"infoUrl\":\"http://local.lookout.com/jenkins/job-id/2/results\",\"promotion\":\"jenkins-smoke\"}}\n       |            false\n       {\"id\":1,\"artifact\":{\"id\":1,\"group\":\"com.example.cucumber\",\"name\":\"cucumber-artifact\",\"version\":\"1.0.1\",\"sourceUrl\":\"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.1/cucumber-artifact-1.0.1.jar\",\"createdAt\":\"2015-04-07T22:20:28.381Z\"},\"status\":\"VERIFIED\",\"service\":\"faas\",\"environment\":\"pre-prod\",\"createdAt\":\"2015-04-07T22:20:28.381Z\",\"promotionResult\":{\"id\":1,\"createdAt\":\"2015-04-07T22:20:28.381Z\",\"promotion\":\"jenkins-smoke\",\"infoUrl\":\"http://local.lookout.com/jenkins/job-id/2/results\",\"status\":\"FAILED\"}}\n\n\tat WebhookSteps$_run_closure4$_closure14.doCall(WebhookSteps.groovy:135)\n\tat ✽.Then the webhook should be invoked with the JSON:(api/webhook/promotionCompletedFail.feature:69)\n"
});
formatter.after({
  "duration": 9710000,
  "status": "passed"
});
formatter.after({
  "duration": 14000,
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
  "duration": 600246000,
  "status": "passed"
});
formatter.before({
  "duration": 50000,
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
  "location": "WebhookSteps.groovy:19"
});
formatter.result({
  "duration": 13261000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "COMPLETED",
      "offset": 26
    }
  ],
  "location": "DeploymentSteps.groovy:111"
});
formatter.result({
  "duration": 5580000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/api/deployments/1/promotions",
      "offset": 11
    }
  ],
  "location": "HttpSteps.groovy:25"
});
formatter.result({
  "duration": 94090000,
  "status": "passed"
});
formatter.match({
  "location": "WebhookSteps.groovy:120"
});
formatter.result({
  "duration": 1001718000,
  "status": "failed",
  "error_message": "Assertion failed: \n\nassert expectedNode \u003d\u003d requestNode\n       |            |  |\n       |            |  {\"id\":1,\"artifact\":{\"id\":1,\"createdAt\":\"2015-04-07T22:20:30.000Z\",\"group\":\"com.example.cucumber\",\"name\":\"cucumber-artifact\",\"version\":\"1.0.1\",\"sourceUrl\":\"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.1/cucumber-artifact-1.0.1.jar\"},\"service\":\"faas\",\"environment\":\"pre-prod\",\"createdAt\":\"2015-04-07T22:20:30.000Z\",\"status\":\"VERIFIED\",\"promotionResult\":{\"id\":1,\"createdAt\":\"2015-04-07T22:20:30.000Z\",\"status\":\"SUCCESS\",\"infoUrl\":\"http://local.lookout.com/jenkins/job-id/2/results\",\"promotion\":\"jenkins-smoke\"}}\n       |            false\n       {\"id\":1,\"artifact\":{\"id\":1,\"group\":\"com.example.cucumber\",\"name\":\"cucumber-artifact\",\"version\":\"1.0.1\",\"sourceUrl\":\"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.1/cucumber-artifact-1.0.1.jar\",\"createdAt\":\"2015-04-07T22:20:30.043Z\"},\"status\":\"VERIFIED\",\"service\":\"faas\",\"environment\":\"pre-prod\",\"createdAt\":\"2015-04-07T22:20:30.043Z\",\"promotionResult\":{\"id\":1,\"createdAt\":\"2015-04-07T22:20:30.043Z\",\"promotion\":\"jenkins-smoke\",\"infoUrl\":\"http://local.lookout.com/jenkins/job-id/2/results\",\"status\":\"SUCCESS\"}}\n\n\tat WebhookSteps$_run_closure4$_closure14.doCall(WebhookSteps.groovy:135)\n\tat ✽.Then the webhook should be invoked with the JSON:(api/webhook/promotionCompletedSuccess.feature:20)\n"
});
formatter.match({
  "location": "WebhookSteps.groovy:158"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 7551000,
  "status": "passed"
});
formatter.after({
  "duration": 14000,
  "status": "passed"
});
formatter.before({
  "duration": 603443000,
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
    "value": "description: \"DeployDB Primary Integration\"\nwebhook:\n  promotion:\n    completed:\n      - http://localhost:10000/job/notify-promotion-completed/build",
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
  "location": "WebhookSteps.groovy:60"
});
formatter.result({
  "duration": 9578000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "COMPLETED",
      "offset": 26
    }
  ],
  "location": "DeploymentSteps.groovy:111"
});
formatter.result({
  "duration": 5535000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/api/deployments/1/promotions",
      "offset": 11
    }
  ],
  "location": "HttpSteps.groovy:25"
});
formatter.result({
  "duration": 31074000,
  "status": "passed"
});
formatter.match({
  "location": "WebhookSteps.groovy:120"
});
formatter.result({
  "duration": 1001238000,
  "status": "failed",
  "error_message": "Assertion failed: \n\nassert expectedNode \u003d\u003d requestNode\n       |            |  |\n       |            |  {\"id\":1,\"artifact\":{\"id\":1,\"createdAt\":\"2015-04-07T22:20:32.000Z\",\"group\":\"com.example.cucumber\",\"name\":\"cucumber-artifact\",\"version\":\"1.0.1\",\"sourceUrl\":\"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.1/cucumber-artifact-1.0.1.jar\"},\"service\":\"faas\",\"environment\":\"pre-prod\",\"createdAt\":\"2015-04-07T22:20:32.000Z\",\"status\":\"VERIFIED\",\"promotionResult\":{\"id\":1,\"createdAt\":\"2015-04-07T22:20:32.000Z\",\"status\":\"SUCCESS\",\"infoUrl\":\"http://local.lookout.com/jenkins/job-id/2/results\",\"promotion\":\"jenkins-smoke\"}}\n       |            false\n       {\"id\":1,\"artifact\":{\"id\":1,\"group\":\"com.example.cucumber\",\"name\":\"cucumber-artifact\",\"version\":\"1.0.1\",\"sourceUrl\":\"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.1/cucumber-artifact-1.0.1.jar\",\"createdAt\":\"2015-04-07T22:20:31.773Z\"},\"status\":\"VERIFIED\",\"service\":\"faas\",\"environment\":\"pre-prod\",\"createdAt\":\"2015-04-07T22:20:31.773Z\",\"promotionResult\":{\"id\":1,\"createdAt\":\"2015-04-07T22:20:31.773Z\",\"promotion\":\"jenkins-smoke\",\"infoUrl\":\"http://local.lookout.com/jenkins/job-id/2/results\",\"status\":\"SUCCESS\"}}\n\n\tat WebhookSteps$_run_closure4$_closure14.doCall(WebhookSteps.groovy:135)\n\tat ✽.Then the webhook should be invoked with the JSON:(api/webhook/promotionCompletedSuccess.feature:69)\n"
});
formatter.after({
  "duration": 8286000,
  "status": "passed"
});
formatter.after({
  "duration": 13000,
  "status": "passed"
});
});