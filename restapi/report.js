$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("api/artifact/creating.feature");
formatter.feature({
  "line": 1,
  "name": "Artifact CREATE APIs",
  "description": "\nAs a RESTful client or user\nI should be able to create new artifacts in the system",
  "id": "artifact-create-apis",
  "keyword": "Feature"
});
formatter.before({
  "duration": 5076284757,
  "status": "passed"
});
formatter.before({
  "duration": 4238386,
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
  "name": "promotions are configured",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "an environment is configured",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "a pipeline is configured",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "a service is configured",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I POST to \"/api/artifacts\" with:",
  "keyword": "When ",
  "doc_string": {
    "content_type": "",
    "line": 17,
    "value": "  {\n    \"group\" : \"com.example.cucumber\",\n    \"name\" : \"cukes\",\n    \"version\" : \"1.2.345\",\n    \"sourceUrl\" : \"http://example.com/cucumber.jar\"\n  }"
  }
});
formatter.step({
  "line": 25,
  "name": "the response should be 201",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "the body should be JSON:",
  "keyword": "And ",
  "doc_string": {
    "content_type": "",
    "line": 27,
    "value": "  {\n    \"id\" : 1,\n    \"group\" : \"com.example.cucumber\",\n    \"name\" : \"cukes\",\n    \"version\" : \"1.2.345\",\n    \"sourceUrl\" : \"http://example.com/cucumber.jar\",\n    \"createdAt\" : \"{{created_timestamp}}\"\n  }"
  }
});
formatter.match({
  "location": "PromotionSteps.groovy:24"
});
formatter.result({
  "duration": 114652321,
  "status": "passed"
});
formatter.match({
  "location": "EnvironmentSteps.groovy:16"
});
formatter.result({
  "duration": 8706605,
  "status": "passed"
});
formatter.match({
  "location": "PipelineSteps.groovy:17"
});
formatter.result({
  "duration": 8680881,
  "status": "passed"
});
formatter.match({
  "location": "ServiceSteps.groovy:16"
});
formatter.result({
  "duration": 5057038,
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
  "duration": 1003985467,
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
  "duration": 6479305,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:77"
});
formatter.result({
  "duration": 94804696,
  "status": "passed"
});
formatter.after({
  "duration": 92400573,
  "status": "passed"
});
formatter.after({
  "duration": 743626,
  "status": "passed"
});
formatter.before({
  "duration": 944985703,
  "status": "passed"
});
formatter.scenario({
  "line": 40,
  "name": "The request should fail when creating an Artifact without a group name",
  "description": "",
  "id": "artifact-create-apis;the-request-should-fail-when-creating-an-artifact-without-a-group-name",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 39,
      "name": "@error"
    }
  ]
});
formatter.step({
  "line": 42,
  "name": "I POST to \"/api/artifacts\" with:",
  "keyword": "When ",
  "doc_string": {
    "content_type": "",
    "line": 43,
    "value": "  {\n    \"name\" : \"cukes\",\n    \"version\" : \"1.2.345\",\n    \"sourceUrl\" : \"http://example.com/cucumber.jar\"\n  }"
  }
});
formatter.step({
  "line": 50,
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
  "duration": 78926813,
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
  "duration": 180619,
  "status": "passed"
});
formatter.after({
  "duration": 52151670,
  "status": "passed"
});
formatter.before({
  "duration": 825107987,
  "status": "passed"
});
formatter.scenario({
  "line": 54,
  "name": "The request should fail when creating an Artifact without a name",
  "description": "",
  "id": "artifact-create-apis;the-request-should-fail-when-creating-an-artifact-without-a-name",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 53,
      "name": "@error"
    }
  ]
});
formatter.step({
  "line": 56,
  "name": "I POST to \"/api/artifacts\" with:",
  "keyword": "When ",
  "doc_string": {
    "content_type": "",
    "line": 57,
    "value": "  {\n    \"group\" : \"com.example.cucumber\",\n    \"version\" : \"1.2.345\",\n    \"sourceUrl\" : \"http://example.com/cucumber.jar\"\n  }"
  }
});
formatter.step({
  "line": 64,
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
  "duration": 52305068,
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
  "duration": 142190,
  "status": "passed"
});
formatter.after({
  "duration": 44484382,
  "status": "passed"
});
formatter.before({
  "duration": 728336791,
  "status": "passed"
});
formatter.scenario({
  "line": 68,
  "name": "The request should fail when creating an Artifact without a version",
  "description": "",
  "id": "artifact-create-apis;the-request-should-fail-when-creating-an-artifact-without-a-version",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 67,
      "name": "@error"
    }
  ]
});
formatter.step({
  "line": 70,
  "name": "I POST to \"/api/artifacts\" with:",
  "keyword": "When ",
  "doc_string": {
    "content_type": "",
    "line": 71,
    "value": "  {\n    \"group\" : \"com.example.cucumber\",\n    \"name\" : \"cukes\",\n    \"sourceUrl\" : \"http://example.com/cucumber.jar\"\n  }"
  }
});
formatter.step({
  "line": 78,
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
  "duration": 53659625,
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
  "duration": 212054,
  "status": "passed"
});
formatter.after({
  "duration": 32030630,
  "status": "passed"
});
formatter.before({
  "duration": 648795626,
  "status": "passed"
});
formatter.scenario({
  "line": 82,
  "name": "The request should fail when creating an Artifact without a sourceUrl",
  "description": "",
  "id": "artifact-create-apis;the-request-should-fail-when-creating-an-artifact-without-a-sourceurl",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 81,
      "name": "@error"
    }
  ]
});
formatter.step({
  "line": 84,
  "name": "I POST to \"/api/artifacts\" with:",
  "keyword": "When ",
  "doc_string": {
    "content_type": "",
    "line": 85,
    "value": "  {\n    \"group\" : \"com.example.cucumber\",\n    \"name\" : \"cukes\",\n    \"version\" : \"1.2.345\"\n  }"
  }
});
formatter.step({
  "line": 92,
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
  "duration": 44529125,
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
  "duration": 149267,
  "status": "passed"
});
formatter.after({
  "duration": 60020459,
  "status": "passed"
});
formatter.before({
  "duration": 1222160884,
  "status": "passed"
});
formatter.scenario({
  "line": 96,
  "name": "Creating an artifact with too large of a group name",
  "description": "",
  "id": "artifact-create-apis;creating-an-artifact-with-too-large-of-a-group-name",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 95,
      "name": "@error"
    }
  ]
});
formatter.step({
  "line": 98,
  "name": "I have an artifact request",
  "keyword": "Given "
});
formatter.step({
  "line": 99,
  "name": "the group is over 8192 characters",
  "keyword": "And "
});
formatter.step({
  "line": 100,
  "name": "I POST to \"/api/artifacts\"",
  "keyword": "When "
});
formatter.step({
  "line": 101,
  "name": "the response should be 422",
  "keyword": "Then "
});
formatter.match({
  "location": "ArtifactSteps.groovy:23"
});
formatter.result({
  "duration": 52578,
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
  "duration": 2191637,
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
  "duration": 52291479,
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
  "duration": 200754,
  "status": "passed"
});
formatter.after({
  "duration": 37164823,
  "status": "passed"
});
formatter.before({
  "duration": 636109458,
  "status": "passed"
});
formatter.scenario({
  "line": 105,
  "name": "Creating an artifact with too large of a name",
  "description": "",
  "id": "artifact-create-apis;creating-an-artifact-with-too-large-of-a-name",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 104,
      "name": "@error"
    }
  ]
});
formatter.step({
  "line": 107,
  "name": "I have an artifact request",
  "keyword": "Given "
});
formatter.step({
  "line": 108,
  "name": "the name is over 8192 characters",
  "keyword": "And "
});
formatter.step({
  "line": 109,
  "name": "I POST to \"/api/artifacts\"",
  "keyword": "When "
});
formatter.step({
  "line": 110,
  "name": "the response should be 422",
  "keyword": "Then "
});
formatter.match({
  "location": "ArtifactSteps.groovy:23"
});
formatter.result({
  "duration": 36585,
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
  "duration": 838460,
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
  "duration": 36231316,
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
  "duration": 151382,
  "status": "passed"
});
formatter.after({
  "duration": 17960461,
  "status": "passed"
});
formatter.before({
  "duration": 654468054,
  "status": "passed"
});
formatter.scenario({
  "line": 114,
  "name": "Creating an artifact with too large of a version",
  "description": "",
  "id": "artifact-create-apis;creating-an-artifact-with-too-large-of-a-version",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 113,
      "name": "@error"
    }
  ]
});
formatter.step({
  "line": 116,
  "name": "I have an artifact request",
  "keyword": "Given "
});
formatter.step({
  "line": 117,
  "name": "the version is over 255 characters",
  "keyword": "And "
});
formatter.step({
  "line": 118,
  "name": "I POST to \"/api/artifacts\"",
  "keyword": "When "
});
formatter.step({
  "line": 119,
  "name": "the response should be 422",
  "keyword": "Then "
});
formatter.match({
  "location": "ArtifactSteps.groovy:23"
});
formatter.result({
  "duration": 31168,
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
  "duration": 421263,
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
  "duration": 56381789,
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
  "duration": 150714,
  "status": "passed"
});
formatter.after({
  "duration": 65074659,
  "status": "passed"
});
formatter.before({
  "duration": 614851859,
  "status": "passed"
});
formatter.scenario({
  "line": 123,
  "name": "Creating an artifact with too large of a sourceUrl",
  "description": "",
  "id": "artifact-create-apis;creating-an-artifact-with-too-large-of-a-sourceurl",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 122,
      "name": "@error"
    }
  ]
});
formatter.step({
  "line": 125,
  "name": "I have an artifact request",
  "keyword": "Given "
});
formatter.step({
  "line": 126,
  "name": "the sourceUrl is over 8192 characters",
  "keyword": "And "
});
formatter.step({
  "line": 127,
  "name": "I POST to \"/api/artifacts\"",
  "keyword": "When "
});
formatter.step({
  "line": 128,
  "name": "the response should be 422",
  "keyword": "Then "
});
formatter.match({
  "location": "ArtifactSteps.groovy:23"
});
formatter.result({
  "duration": 48334,
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
  "duration": 855581,
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
  "duration": 34625779,
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
  "duration": 182208,
  "status": "passed"
});
formatter.after({
  "duration": 42162573,
  "status": "passed"
});
formatter.before({
  "duration": 550615986,
  "status": "passed"
});
formatter.scenario({
  "line": 132,
  "name": "Creating a new artifact with missing promotion fails",
  "description": "",
  "id": "artifact-create-apis;creating-a-new-artifact-with-missing-promotion-fails",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 131,
      "name": "@error"
    }
  ]
});
formatter.step({
  "line": 134,
  "name": "an environment is configured",
  "keyword": "Given "
});
formatter.step({
  "line": 135,
  "name": "a pipeline is configured",
  "keyword": "And "
});
formatter.step({
  "line": 136,
  "name": "a service is configured",
  "keyword": "And "
});
formatter.step({
  "line": 137,
  "name": "I POST to \"/api/artifacts\" with:",
  "keyword": "When ",
  "doc_string": {
    "content_type": "",
    "line": 138,
    "value": "  {\n    \"group\" : \"com.example.cucumber\",\n    \"name\" : \"cukes\",\n    \"version\" : \"1.2.345\",\n    \"sourceUrl\" : \"http://example.com/cucumber.jar\"\n  }"
  }
});
formatter.step({
  "line": 146,
  "name": "the response should be 404",
  "keyword": "Then "
});
formatter.match({
  "location": "EnvironmentSteps.groovy:16"
});
formatter.result({
  "duration": 304218,
  "status": "passed"
});
formatter.match({
  "location": "PipelineSteps.groovy:17"
});
formatter.result({
  "duration": 238727,
  "status": "passed"
});
formatter.match({
  "location": "ServiceSteps.groovy:16"
});
formatter.result({
  "duration": 205815,
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
  "duration": 45483751,
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
  "duration": 156698,
  "status": "passed"
});
formatter.after({
  "duration": 27676359,
  "status": "passed"
});
formatter.before({
  "duration": 552070839,
  "status": "passed"
});
formatter.scenario({
  "line": 150,
  "name": "Creating a new artifact with missing environment fails",
  "description": "",
  "id": "artifact-create-apis;creating-a-new-artifact-with-missing-environment-fails",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 149,
      "name": "@error"
    }
  ]
});
formatter.step({
  "line": 152,
  "name": "a promotion is configured",
  "keyword": "Given "
});
formatter.step({
  "line": 153,
  "name": "a pipeline is configured",
  "keyword": "And "
});
formatter.step({
  "line": 154,
  "name": "a service is configured",
  "keyword": "And "
});
formatter.step({
  "line": 155,
  "name": "I POST to \"/api/artifacts\" with:",
  "keyword": "When ",
  "doc_string": {
    "content_type": "",
    "line": 156,
    "value": "  {\n    \"group\" : \"com.example.cucumber\",\n    \"name\" : \"cukes\",\n    \"version\" : \"1.2.345\",\n    \"sourceUrl\" : \"http://example.com/cucumber.jar\"\n  }"
  }
});
formatter.step({
  "line": 164,
  "name": "the response should be 404",
  "keyword": "Then "
});
formatter.match({
  "location": "PromotionSteps.groovy:17"
});
formatter.result({
  "duration": 1477414,
  "status": "passed"
});
formatter.match({
  "location": "PipelineSteps.groovy:17"
});
formatter.result({
  "duration": 278600,
  "status": "passed"
});
formatter.match({
  "location": "ServiceSteps.groovy:16"
});
formatter.result({
  "duration": 229516,
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
  "duration": 112748038,
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
  "duration": 180986,
  "status": "passed"
});
formatter.after({
  "duration": 46020421,
  "status": "passed"
});
formatter.before({
  "duration": 542277912,
  "status": "passed"
});
formatter.scenario({
  "line": 168,
  "name": "Creating a new artifact with missing pipeline fails",
  "description": "",
  "id": "artifact-create-apis;creating-a-new-artifact-with-missing-pipeline-fails",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 167,
      "name": "@error"
    }
  ]
});
formatter.step({
  "line": 170,
  "name": "a promotion is configured",
  "keyword": "Given "
});
formatter.step({
  "line": 171,
  "name": "an environment is configured",
  "keyword": "And "
});
formatter.step({
  "line": 172,
  "name": "a service is configured",
  "keyword": "And "
});
formatter.step({
  "line": 173,
  "name": "I POST to \"/api/artifacts\" with:",
  "keyword": "When ",
  "doc_string": {
    "content_type": "",
    "line": 174,
    "value": "  {\n    \"group\" : \"com.example.cucumber\",\n    \"name\" : \"cukes\",\n    \"version\" : \"1.2.345\",\n    \"sourceUrl\" : \"http://example.com/cucumber.jar\"\n  }"
  }
});
formatter.step({
  "line": 182,
  "name": "the response should be 404",
  "keyword": "Then "
});
formatter.match({
  "location": "PromotionSteps.groovy:17"
});
formatter.result({
  "duration": 347183,
  "status": "passed"
});
formatter.match({
  "location": "EnvironmentSteps.groovy:16"
});
formatter.result({
  "duration": 484029,
  "status": "passed"
});
formatter.match({
  "location": "ServiceSteps.groovy:16"
});
formatter.result({
  "duration": 1068609,
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
  "duration": 35227435,
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
  "duration": 264834,
  "status": "passed"
});
formatter.after({
  "duration": 18200842,
  "status": "passed"
});
formatter.before({
  "duration": 489648211,
  "status": "passed"
});
formatter.scenario({
  "line": 186,
  "name": "Creating a new artifact with missing service fails",
  "description": "",
  "id": "artifact-create-apis;creating-a-new-artifact-with-missing-service-fails",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 185,
      "name": "@error"
    }
  ]
});
formatter.step({
  "line": 189,
  "name": "a promotion is configured",
  "keyword": "Given "
});
formatter.step({
  "line": 190,
  "name": "an environment is configured",
  "keyword": "And "
});
formatter.step({
  "line": 191,
  "name": "a pipeline is configured",
  "keyword": "And "
});
formatter.step({
  "line": 192,
  "name": "I POST to \"/api/artifacts\" with:",
  "keyword": "When ",
  "doc_string": {
    "content_type": "",
    "line": 193,
    "value": "  {\n    \"group\" : \"com.example.cucumber\",\n    \"name\" : \"cukes\",\n    \"version\" : \"1.2.345\",\n    \"sourceUrl\" : \"http://example.com/cucumber.jar\"\n  }"
  }
});
formatter.step({
  "line": 201,
  "name": "the response should be 404",
  "keyword": "Then "
});
formatter.match({
  "location": "PromotionSteps.groovy:17"
});
formatter.result({
  "duration": 410807,
  "status": "passed"
});
formatter.match({
  "location": "EnvironmentSteps.groovy:16"
});
formatter.result({
  "duration": 216585,
  "status": "passed"
});
formatter.match({
  "location": "PipelineSteps.groovy:17"
});
formatter.result({
  "duration": 214614,
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
  "duration": 66549677,
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
  "duration": 154050,
  "status": "passed"
});
formatter.after({
  "duration": 62636523,
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
  "duration": 581272601,
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
  "duration": 51071619,
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
  "duration": 25965883,
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
  "duration": 151441,
  "status": "passed"
});
formatter.after({
  "duration": 21911104,
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
  "duration": 621345153,
  "status": "passed"
});
formatter.before({
  "duration": 99554,
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
  "duration": 4159351,
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
  "duration": 84517647,
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
  "duration": 196384,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:77"
});
formatter.result({
  "duration": 1936598,
  "status": "passed"
});
formatter.after({
  "duration": 25680392,
  "status": "passed"
});
formatter.after({
  "duration": 62922,
  "status": "passed"
});
formatter.before({
  "duration": 694690030,
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
  "duration": 4587266,
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
  "duration": 62845191,
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
  "duration": 783772,
  "status": "passed"
});
formatter.after({
  "duration": 36335599,
  "status": "passed"
});
formatter.before({
  "duration": 632903633,
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
  "duration": 25180620,
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
  "duration": 282375,
  "status": "passed"
});
formatter.after({
  "duration": 42147413,
  "status": "passed"
});
formatter.before({
  "duration": 580283297,
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
  "duration": 34028820,
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
  "duration": 177346,
  "status": "passed"
});
formatter.after({
  "duration": 18945962,
  "status": "passed"
});
formatter.before({
  "duration": 721532680,
  "status": "passed"
});
formatter.before({
  "duration": 71372,
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
  "duration": 7489238,
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
  "duration": 71507165,
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
  "duration": 153277,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:77"
});
formatter.result({
  "duration": 6158809,
  "status": "passed"
});
formatter.after({
  "duration": 18907903,
  "status": "passed"
});
formatter.after({
  "duration": 26410,
  "status": "passed"
});
formatter.before({
  "duration": 498222386,
  "status": "passed"
});
formatter.before({
  "duration": 67553,
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
  "duration": 5158919,
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
  "duration": 33728266,
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
  "duration": 176834,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:77"
});
formatter.result({
  "duration": 2190602,
  "status": "passed"
});
formatter.after({
  "duration": 36014136,
  "status": "passed"
});
formatter.after({
  "duration": 30839,
  "status": "passed"
});
formatter.before({
  "duration": 473010462,
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
  "duration": 23939890,
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
  "duration": 156023,
  "status": "passed"
});
formatter.after({
  "duration": 31454041,
  "status": "passed"
});
formatter.before({
  "duration": 501164619,
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
  "duration": 27006339,
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
  "duration": 149975,
  "status": "passed"
});
formatter.after({
  "duration": 64324011,
  "status": "passed"
});
formatter.before({
  "duration": 549437141,
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
  "duration": 24896944,
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
  "duration": 122662,
  "status": "passed"
});
formatter.after({
  "duration": 44162784,
  "status": "passed"
});
formatter.before({
  "duration": 514647710,
  "status": "passed"
});
formatter.before({
  "duration": 67555,
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
  "duration": 3064195,
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
  "duration": 28167658,
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
  "duration": 169789,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:77"
});
formatter.result({
  "duration": 1332815,
  "status": "passed"
});
formatter.after({
  "duration": 10690561,
  "status": "passed"
});
formatter.after({
  "duration": 28212,
  "status": "passed"
});
formatter.before({
  "duration": 499459480,
  "status": "passed"
});
formatter.before({
  "duration": 67833,
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
  "duration": 5201933,
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
  "duration": 33482599,
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
  "duration": 136404,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:77"
});
formatter.result({
  "duration": 2066261,
  "status": "passed"
});
formatter.after({
  "duration": 37280094,
  "status": "passed"
});
formatter.after({
  "duration": 30121,
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
  "duration": 534667373,
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
  "duration": 4410040,
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
  "duration": 22170723,
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
  "duration": 188897,
  "status": "passed"
});
formatter.after({
  "duration": 32596191,
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
  "duration": 786614751,
  "status": "passed"
});
formatter.before({
  "duration": 66378,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "Fetching all deployments",
  "description": "",
  "id": "deployment-read-apis;fetching-all-deployments",
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
  "name": "I GET \"/api/deployments\"",
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
    "value": "  [{\n    \"id\" : 1,\n    \"artifact\" : {\n      \"id\" : 1,\n      \"group\" : \"com.example.cucumber\",\n      \"name\" : \"cucumber-artifact\",\n      \"version\" : \"1.0.1\",\n      \"sourceUrl\" : \"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.1/cucumber-artifact-1.0.1.jar\",\n      \"createdAt\" : \"{{created_timestamp}}\"\n    },\n    \"environment\" : \"pre-prod\",\n    \"service\" : \"faas\",\n    \"status\" : \"STARTED\",\n    \"promotions\" : [{\n      \"id\" : 1,\n      \"promotion\" : \"jenkins-smoke\",\n      \"status\" : \"STARTED\",\n      \"infoUrl\" : null,\n      \"createdAt\" : \"{{created_timestamp}}\"\n     }],\n    \"createdAt\" : \"{{created_timestamp}}\"\n  }]"
  }
});
formatter.match({
  "location": "DeploymentSteps.groovy:14"
});
formatter.result({
  "duration": 8832755,
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
  "duration": 60782360,
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
  "duration": 152797,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:77"
});
formatter.result({
  "duration": 2476514,
  "status": "passed"
});
formatter.after({
  "duration": 42119205,
  "status": "passed"
});
formatter.after({
  "duration": 27846,
  "status": "passed"
});
formatter.before({
  "duration": 444472289,
  "status": "passed"
});
formatter.before({
  "duration": 66486,
  "status": "passed"
});
formatter.scenario({
  "line": 41,
  "name": "Fetching a deployment by ID",
  "description": "",
  "id": "deployment-read-apis;fetching-a-deployment-by-id",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 40,
      "name": "@freezetime"
    }
  ]
});
formatter.step({
  "line": 43,
  "name": "there is a deployment",
  "keyword": "Given "
});
formatter.step({
  "line": 44,
  "name": "I GET \"/api/deployments/1\"",
  "keyword": "When "
});
formatter.step({
  "line": 45,
  "name": "the response should be 200",
  "keyword": "Then "
});
formatter.step({
  "line": 46,
  "name": "the body should be JSON:",
  "keyword": "And ",
  "doc_string": {
    "content_type": "",
    "line": 47,
    "value": "  {\n    \"id\" : 1,\n    \"artifact\" : {\n      \"id\" : 1,\n      \"group\" : \"com.example.cucumber\",\n      \"name\" : \"cucumber-artifact\",\n      \"version\" : \"1.0.1\",\n      \"sourceUrl\" : \"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.1/cucumber-artifact-1.0.1.jar\",\n      \"createdAt\" : \"{{created_timestamp}}\"\n    },\n    \"environment\" : \"pre-prod\",\n    \"service\" : \"faas\",\n    \"status\" : \"STARTED\",\n    \"promotions\" : [{\n      \"id\" : 1,\n      \"promotion\" : \"jenkins-smoke\",\n      \"status\" : \"STARTED\",\n      \"infoUrl\" : null,\n      \"createdAt\" : \"{{created_timestamp}}\"\n     }],\n    \"createdAt\" : \"{{created_timestamp}}\"\n  }"
  }
});
formatter.match({
  "location": "DeploymentSteps.groovy:14"
});
formatter.result({
  "duration": 6490631,
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
  "duration": 30522072,
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
  "duration": 153982,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:77"
});
formatter.result({
  "duration": 1812613,
  "status": "passed"
});
formatter.after({
  "duration": 32688758,
  "status": "passed"
});
formatter.after({
  "duration": 27220,
  "status": "passed"
});
formatter.before({
  "duration": 568539285,
  "status": "passed"
});
formatter.scenario({
  "line": 73,
  "name": "Fetching a deployment by ID that doesn\u0027t exist",
  "description": "",
  "id": "deployment-read-apis;fetching-a-deployment-by-id-that-doesn\u0027t-exist",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 75,
  "name": "I GET \"/api/deployments/1\"",
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
      "val": "/api/deployments/1",
      "offset": 7
    }
  ],
  "location": "HttpSteps.groovy:16"
});
formatter.result({
  "duration": 32059981,
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
  "duration": 139990,
  "status": "passed"
});
formatter.after({
  "duration": 88608642,
  "status": "passed"
});
formatter.before({
  "duration": 570608208,
  "status": "passed"
});
formatter.scenario({
  "line": 80,
  "name": "Fetching an deployment by a non-numeric ID",
  "description": "",
  "id": "deployment-read-apis;fetching-an-deployment-by-a-non-numeric-id",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 79,
      "name": "@error"
    }
  ]
});
formatter.step({
  "line": 82,
  "name": "I GET \"/api/deployments/0xdeadbeef\"",
  "keyword": "When "
});
formatter.step({
  "line": 83,
  "name": "the response should be 400",
  "keyword": "Then "
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
  "duration": 24256587,
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
  "duration": 155997,
  "status": "passed"
});
formatter.after({
  "duration": 31830193,
  "status": "passed"
});
formatter.before({
  "duration": 1449489041,
  "status": "passed"
});
formatter.scenario({
  "line": 101,
  "name": "Fetching an deployment with an invalid content type",
  "description": "\nIt is encouraged to specify the version of the API you would like to\nreceive inside of a Accept header. If this header is not specified than the\nclient is expected to receive the v1 version of the JSON API",
  "id": "deployment-read-apis;fetching-an-deployment-with-an-invalid-content-type",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 100,
      "name": "@error"
    }
  ]
});
formatter.step({
  "line": 107,
  "name": "there is a deployment",
  "keyword": "Given "
});
formatter.step({
  "line": 108,
  "name": "I GET \"/api/deployments/1\" with custom headers:",
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
  ],
  "keyword": "When "
});
formatter.step({
  "line": 111,
  "name": "the response should be 406",
  "keyword": "Then "
});
formatter.match({
  "location": "DeploymentSteps.groovy:14"
});
formatter.result({
  "duration": 17637675,
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
  "duration": 22568059,
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
  "duration": 163907,
  "status": "passed"
});
formatter.after({
  "duration": 53292662,
  "status": "passed"
});
formatter.before({
  "duration": 478474428,
  "status": "passed"
});
formatter.before({
  "duration": 65147,
  "status": "passed"
});
formatter.scenario({
  "line": 115,
  "name": "Fetching an deployment by the pageNumber and perPageSize",
  "description": "",
  "id": "deployment-read-apis;fetching-an-deployment-by-the-pagenumber-and-perpagesize",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 114,
      "name": "@freezetime"
    }
  ]
});
formatter.step({
  "line": 117,
  "name": "there are deployments",
  "keyword": "Given "
});
formatter.step({
  "line": 118,
  "name": "I GET \"/api/deployments?pageNumber\u003d0\u0026perPageSize\u003d5\"",
  "keyword": "When "
});
formatter.step({
  "line": 119,
  "name": "the response should be 200",
  "keyword": "Then "
});
formatter.step({
  "line": 120,
  "name": "the body should be JSON:",
  "keyword": "And ",
  "doc_string": {
    "content_type": "",
    "line": 121,
    "value": "   [{\n    \"id\" : 1,\n    \"artifact\" : {\n      \"id\" : 1,\n      \"group\" : \"com.example.cucumber\",\n      \"name\" : \"cucumber-artifact\",\n      \"version\" : \"1.0.1\",\n      \"sourceUrl\" : \"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.1/cucumber-artifact-1.0.1.jar\",\n      \"createdAt\" : \"{{created_timestamp}}\"\n    },\n    \"environment\" : \"pre-prod\",\n    \"service\" : \"faas\",\n    \"status\" : \"STARTED\",\n    \"promotions\" : [{\n      \"id\" : 1,\n      \"promotion\" : \"jenkins-smoke\",\n      \"status\" : \"STARTED\",\n      \"infoUrl\" : null,\n      \"createdAt\" : \"{{created_timestamp}}\"\n    }],\n    \"createdAt\" : \"{{created_timestamp}}\"\n  },\n  {\n    \"id\" : 2,\n    \"artifact\" : {\n      \"id\" : 2,\n      \"group\" : \"com.example.cucumber\",\n      \"name\" : \"cucumber-artifact\",\n      \"version\" : \"1.0.2\",\n      \"sourceUrl\" : \"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.2/cucumber-artifact-1.0.2.jar\",\n      \"createdAt\" : \"{{created_timestamp}}\"\n    },\n    \"environment\" : \"pre-prod\",\n    \"service\" : \"faas\",\n    \"status\" : \"STARTED\",\n    \"promotions\" : [{\n      \"id\" : 2,\n      \"promotion\" : \"status-check\",\n      \"status\" : \"STARTED\",\n      \"infoUrl\" : \"http://local.lookout.com/jenkins/job-id/2/results\",\n      \"createdAt\" : \"{{created_timestamp}}\"\n    }],\n    \"createdAt\" : \"{{created_timestamp}}\"\n  }]"
  }
});
formatter.match({
  "location": "DeploymentSteps.groovy:50"
});
formatter.result({
  "duration": 10488896,
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
  "duration": 33410622,
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
  "duration": 135918,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:77"
});
formatter.result({
  "duration": 2578647,
  "status": "passed"
});
formatter.after({
  "duration": 22313305,
  "status": "passed"
});
formatter.after({
  "duration": 26735,
  "status": "passed"
});
formatter.before({
  "duration": 515778191,
  "status": "passed"
});
formatter.scenario({
  "line": 170,
  "name": "Fetching an deployment with invalid page number",
  "description": "",
  "id": "deployment-read-apis;fetching-an-deployment-with-invalid-page-number",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 169,
      "name": "@error"
    }
  ]
});
formatter.step({
  "line": 172,
  "name": "I GET \"/api/deployments?pageNumber\u003d1\u0026perPageSize\u003d5\"",
  "keyword": "When "
});
formatter.step({
  "line": 173,
  "name": "the response should be 404",
  "keyword": "Then "
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
  "duration": 28699820,
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
  "duration": 161242,
  "status": "passed"
});
formatter.after({
  "duration": 31841339,
  "status": "passed"
});
formatter.before({
  "duration": 516808192,
  "status": "passed"
});
formatter.scenario({
  "line": 177,
  "name": "Fetching an deployment with invalid data type for pageSize",
  "description": "",
  "id": "deployment-read-apis;fetching-an-deployment-with-invalid-data-type-for-pagesize",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 176,
      "name": "@error"
    }
  ]
});
formatter.step({
  "line": 179,
  "name": "I GET \"/api/deployments?pageNumber\u003d-1\u0026perPageSize\u003d0xdeadbeef\"",
  "keyword": "When "
});
formatter.step({
  "line": 180,
  "name": "the response should be 400",
  "keyword": "Then "
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
  "duration": 31317060,
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
  "duration": 141413,
  "status": "passed"
});
formatter.after({
  "duration": 99581670,
  "status": "passed"
});
formatter.before({
  "duration": 516985686,
  "status": "passed"
});
formatter.before({
  "duration": 69208,
  "status": "passed"
});
formatter.scenario({
  "line": 184,
  "name": "Fetching the latest deployment",
  "description": "",
  "id": "deployment-read-apis;fetching-the-latest-deployment",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 183,
      "name": "@freezetime"
    }
  ]
});
formatter.step({
  "line": 186,
  "name": "there is a deployment",
  "keyword": "Given "
});
formatter.step({
  "line": 187,
  "name": "I GET \"/api/deployments/latest\"",
  "keyword": "When "
});
formatter.step({
  "line": 188,
  "name": "the response should be 200",
  "keyword": "Then "
});
formatter.step({
  "line": 189,
  "name": "the body should be JSON:",
  "keyword": "And ",
  "doc_string": {
    "content_type": "",
    "line": 190,
    "value": "  {\n    \"id\" : 1,\n    \"artifact\" : {\n      \"id\" : 1,\n      \"group\" : \"com.example.cucumber\",\n      \"name\" : \"cucumber-artifact\",\n      \"version\" : \"1.0.1\",\n      \"sourceUrl\" : \"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.1/cucumber-artifact-1.0.1.jar\",\n      \"createdAt\" : \"{{created_timestamp}}\"\n    },\n    \"environment\" : \"pre-prod\",\n    \"service\" : \"faas\",\n    \"status\" : \"STARTED\",\n    \"promotions\" : [{\n      \"id\" : 1,\n      \"promotion\" : \"jenkins-smoke\",\n      \"status\" : \"STARTED\",\n      \"infoUrl\" : null,\n      \"createdAt\" : \"{{created_timestamp}}\"\n    }],\n    \"createdAt\" : \"{{created_timestamp}}\"\n  }"
  }
});
formatter.match({
  "location": "DeploymentSteps.groovy:14"
});
formatter.result({
  "duration": 7054311,
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
  "duration": 30630443,
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
  "duration": 145793,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:77"
});
formatter.result({
  "duration": 2571808,
  "status": "passed"
});
formatter.after({
  "duration": 19923038,
  "status": "passed"
});
formatter.after({
  "duration": 27263,
  "status": "passed"
});
formatter.before({
  "duration": 465427110,
  "status": "passed"
});
formatter.before({
  "duration": 75996,
  "status": "passed"
});
formatter.scenario({
  "line": 216,
  "name": "Fetching the latest deployment when multiple deployments are present",
  "description": "",
  "id": "deployment-read-apis;fetching-the-latest-deployment-when-multiple-deployments-are-present",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 215,
      "name": "@freezetime"
    }
  ]
});
formatter.step({
  "line": 218,
  "name": "there are deployments",
  "keyword": "Given "
});
formatter.step({
  "line": 219,
  "name": "I GET \"/api/deployments/latest\"",
  "keyword": "When "
});
formatter.step({
  "line": 220,
  "name": "the response should be 200",
  "keyword": "Then "
});
formatter.step({
  "line": 221,
  "name": "the body should be JSON:",
  "keyword": "And ",
  "doc_string": {
    "content_type": "",
    "line": 222,
    "value": "  {\n    \"id\" : 2,\n    \"artifact\" : {\n      \"id\" : 2,\n      \"group\" : \"com.example.cucumber\",\n      \"name\" : \"cucumber-artifact\",\n      \"version\" : \"1.0.2\",\n      \"sourceUrl\" : \"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.2/cucumber-artifact-1.0.2.jar\",\n      \"createdAt\" : \"{{created_timestamp}}\"\n    },\n    \"environment\" : \"pre-prod\",\n    \"service\" : \"faas\",\n    \"status\" : \"STARTED\",\n    \"promotions\" : [{\n      \"id\" : 2,\n      \"promotion\" : \"status-check\",\n      \"status\" : \"STARTED\",\n      \"infoUrl\" : \"http://local.lookout.com/jenkins/job-id/2/results\",\n      \"createdAt\" : \"{{created_timestamp}}\"\n    }],\n    \"createdAt\" : \"{{created_timestamp}}\"\n  }"
  }
});
formatter.match({
  "location": "DeploymentSteps.groovy:50"
});
formatter.result({
  "duration": 8687895,
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
  "duration": 38570447,
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
  "duration": 152620,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:77"
});
formatter.result({
  "duration": 1706326,
  "status": "passed"
});
formatter.after({
  "duration": 27260587,
  "status": "passed"
});
formatter.after({
  "duration": 29433,
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
  "duration": 514910415,
  "status": "passed"
});
formatter.before({
  "duration": 200021,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "Updating a deployment with a status COMPLETED",
  "description": "",
  "id": "deployment-update-apis;updating-a-deployment-with-a-status-completed",
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
  "name": "I PATCH \"/api/deployments/1\" with:",
  "keyword": "When ",
  "doc_string": {
    "content_type": "",
    "line": 12,
    "value": "  {\n    \"status\" : \"COMPLETED\"\n  }"
  }
});
formatter.step({
  "line": 17,
  "name": "the response should be 200",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "the body should be JSON:",
  "keyword": "And ",
  "doc_string": {
    "content_type": "",
    "line": 19,
    "value": "  {\n    \"id\" : 1,\n    \"artifact\" : {\n      \"id\" : 1,\n      \"group\" : \"com.example.cucumber\",\n      \"name\" : \"cucumber-artifact\",\n      \"version\" : \"1.0.1\",\n      \"sourceUrl\" : \"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.1/cucumber-artifact-1.0.1.jar\",\n      \"createdAt\" : \"{{created_timestamp}}\"\n    },\n    \"environment\" : \"pre-prod\",\n    \"service\" : \"faas\",\n    \"status\" : \"COMPLETED\",\n    \"promotions\" : [{\n      \"id\" : 1,\n      \"promotion\" : \"jenkins-smoke\",\n      \"status\" : \"STARTED\",\n      \"infoUrl\" : null,\n      \"createdAt\" : \"{{created_timestamp}}\"\n     }],\n    \"createdAt\" : \"{{created_timestamp}}\"\n  }"
  }
});
formatter.match({
  "location": "DeploymentSteps.groovy:14"
});
formatter.result({
  "duration": 6767564,
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
  "duration": 52281829,
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
  "duration": 149075,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:77"
});
formatter.result({
  "duration": 1564080,
  "status": "passed"
});
formatter.after({
  "duration": 60352821,
  "status": "passed"
});
formatter.after({
  "duration": 26336,
  "status": "passed"
});
formatter.before({
  "duration": 565460654,
  "status": "passed"
});
formatter.before({
  "duration": 62165,
  "status": "passed"
});
formatter.scenario({
  "line": 46,
  "name": "Updating a deployment with a status FAILED",
  "description": "",
  "id": "deployment-update-apis;updating-a-deployment-with-a-status-failed",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 45,
      "name": "@freezetime"
    }
  ]
});
formatter.step({
  "line": 48,
  "name": "there is a deployment",
  "keyword": "Given "
});
formatter.step({
  "line": 49,
  "name": "I PATCH \"/api/deployments/1\" with:",
  "keyword": "When ",
  "doc_string": {
    "content_type": "",
    "line": 50,
    "value": "  {\n    \"status\" : \"FAILED\"\n  }"
  }
});
formatter.step({
  "line": 55,
  "name": "the response should be 200",
  "keyword": "Then "
});
formatter.step({
  "line": 56,
  "name": "the body should be JSON:",
  "keyword": "And ",
  "doc_string": {
    "content_type": "",
    "line": 57,
    "value": "  {\n    \"id\" : 1,\n    \"artifact\" : {\n      \"id\" : 1,\n      \"group\" : \"com.example.cucumber\",\n      \"name\" : \"cucumber-artifact\",\n      \"version\" : \"1.0.1\",\n      \"sourceUrl\" : \"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.1/cucumber-artifact-1.0.1.jar\",\n      \"createdAt\" : \"{{created_timestamp}}\"\n    },\n    \"environment\" : \"pre-prod\",\n    \"service\" : \"faas\",\n    \"status\" : \"FAILED\",\n    \"promotions\" : [{\n      \"id\" : 1,\n      \"promotion\" : \"jenkins-smoke\",\n      \"status\" : \"STARTED\",\n      \"infoUrl\" : null,\n      \"createdAt\" : \"{{created_timestamp}}\"\n     }],\n    \"createdAt\" : \"{{created_timestamp}}\"\n  }"
  }
});
formatter.match({
  "location": "DeploymentSteps.groovy:14"
});
formatter.result({
  "duration": 7691150,
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
  "duration": 43046261,
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
  "duration": 193229,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:77"
});
formatter.result({
  "duration": 1604807,
  "status": "passed"
});
formatter.after({
  "duration": 20420676,
  "status": "passed"
});
formatter.after({
  "duration": 26082,
  "status": "passed"
});
formatter.before({
  "duration": 530403587,
  "status": "passed"
});
formatter.scenario({
  "line": 83,
  "name": "Updating a deployment with invalid status transition",
  "description": "",
  "id": "deployment-update-apis;updating-a-deployment-with-invalid-status-transition",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 85,
  "name": "there is a deployment",
  "keyword": "Given "
});
formatter.step({
  "line": 86,
  "name": "I PATCH \"/api/deployments/1\" with:",
  "keyword": "When ",
  "doc_string": {
    "content_type": "",
    "line": 87,
    "value": "  {\n    \"status\" : \"NOT_STARTED\"\n  }"
  }
});
formatter.step({
  "line": 92,
  "name": "the response should be 406",
  "keyword": "Then "
});
formatter.match({
  "location": "DeploymentSteps.groovy:14"
});
formatter.result({
  "duration": 5569451,
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
  "duration": 31226412,
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
  "duration": 141266,
  "status": "passed"
});
formatter.after({
  "duration": 38627248,
  "status": "passed"
});
formatter.before({
  "duration": 523043371,
  "status": "passed"
});
formatter.scenario({
  "line": 96,
  "name": "Updating a deployment with an malformed status",
  "description": "",
  "id": "deployment-update-apis;updating-a-deployment-with-an-malformed-status",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 95,
      "name": "@error"
    }
  ]
});
formatter.step({
  "line": 98,
  "name": "there is a deployment",
  "keyword": "Given "
});
formatter.step({
  "line": 99,
  "name": "I PATCH \"/api/deployments/1\" with:",
  "keyword": "When ",
  "doc_string": {
    "content_type": "",
    "line": 100,
    "value": "  {\n    \"status\" : \"INVALID\"\n  }"
  }
});
formatter.step({
  "line": 105,
  "name": "the response should be 400",
  "keyword": "Then "
});
formatter.match({
  "location": "DeploymentSteps.groovy:14"
});
formatter.result({
  "duration": 5139252,
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
  "duration": 25948779,
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
  "duration": 147536,
  "status": "passed"
});
formatter.after({
  "duration": 16295096,
  "status": "passed"
});
formatter.before({
  "duration": 494437849,
  "status": "passed"
});
formatter.scenario({
  "line": 109,
  "name": "Updating a deployment that doesn\u0027t exist",
  "description": "",
  "id": "deployment-update-apis;updating-a-deployment-that-doesn\u0027t-exist",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 108,
      "name": "@error"
    }
  ]
});
formatter.step({
  "line": 111,
  "name": "I PATCH \"/api/deployments/1\" with:",
  "keyword": "When ",
  "doc_string": {
    "content_type": "",
    "line": 112,
    "value": "  {\n    \"status\" : \"FAILED\"\n  }"
  }
});
formatter.step({
  "line": 117,
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
  "duration": 34896627,
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
  "duration": 158051,
  "status": "passed"
});
formatter.after({
  "duration": 65315818,
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
  "duration": 541104993,
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
  "duration": 29241629,
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
  "duration": 29326858,
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
  "duration": 142269,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:77"
});
formatter.result({
  "duration": 1879142,
  "status": "passed"
});
formatter.after({
  "duration": 28711797,
  "status": "passed"
});
formatter.before({
  "duration": 472779384,
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
  "duration": 6753582,
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
  "duration": 24532955,
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
  "duration": 140240,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:77"
});
formatter.result({
  "duration": 1149843,
  "status": "passed"
});
formatter.after({
  "duration": 16786847,
  "status": "passed"
});
formatter.before({
  "duration": 555200392,
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
  "duration": 20883057,
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
  "duration": 130780,
  "status": "passed"
});
formatter.after({
  "duration": 29842266,
  "status": "passed"
});
formatter.uri("api/flow/reading.feature");
formatter.feature({
  "line": 1,
  "name": "Flow READ APIs",
  "description": "\nAs a RESTful client or user\nI should be able to read information about flows",
  "id": "flow-read-apis",
  "keyword": "Feature"
});
formatter.before({
  "duration": 499121527,
  "status": "passed"
});
formatter.before({
  "duration": 63956,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "Fetching a Flow by ID",
  "description": "",
  "id": "flow-read-apis;fetching-a-flow-by-id",
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
  "name": "there is a flow",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I GET \"/api/flows/1\"",
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
    "value": "{\n  \"id\" : 1,\n  \"createdAt\" : \"{{created_timestamp}}\",\n  \"artifact\" : {\n      \"id\" : 1,\n      \"group\" : \"com.example.cucumber\",\n      \"name\" : \"cucumber-artifact\",\n      \"version\" : \"1.0.1\",\n      \"sourceUrl\" : \"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.1/cucumber-artifact-1.0.1.jar\",\n      \"createdAt\" : \"{{created_timestamp}}\"\n    },\n  \"deployments\":[{\n    \"id\" : 1,\n    \"artifact\" : {\n      \"id\" : 1,\n      \"group\" : \"com.example.cucumber\",\n      \"name\" : \"cucumber-artifact\",\n      \"version\" : \"1.0.1\",\n      \"sourceUrl\" : \"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.1/cucumber-artifact-1.0.1.jar\",\n      \"createdAt\" : \"{{created_timestamp}}\"\n    },\n    \"environment\" : \"pre-production\",\n    \"service\" : \"bluffdale\",\n    \"promotions\":[],\n    \"status\" : \"STARTED\",\n    \"createdAt\" : \"{{created_timestamp}}\"\n  },\n  {\n    \"id\" : 2,\n    \"artifact\" : {\n      \"id\" : 1,\n      \"group\" : \"com.example.cucumber\",\n      \"name\" : \"cucumber-artifact\",\n      \"version\" : \"1.0.1\",\n      \"sourceUrl\" : \"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.1/cucumber-artifact-1.0.1.jar\",\n      \"createdAt\" : \"{{created_timestamp}}\"\n    },\n    \"environment\" : \"production\",\n    \"service\" : \"bluffdale\",\n    \"promotions\":[],\n    \"status\" : \"STARTED\",\n    \"createdAt\" : \"{{created_timestamp}}\"\n  }],\n  \"service\":\"bluffdale\"\n}"
  }
});
formatter.match({
  "location": "FlowSteps.groovy:13"
});
formatter.result({
  "duration": 11349378,
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
  "duration": 38039993,
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
  "duration": 170131,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:77"
});
formatter.result({
  "duration": 4373931,
  "status": "passed"
});
formatter.after({
  "duration": 16968499,
  "status": "passed"
});
formatter.after({
  "duration": 35410,
  "status": "passed"
});
formatter.before({
  "duration": 467116104,
  "status": "passed"
});
formatter.scenario({
  "line": 62,
  "name": "Fetching a Flow by ID that doesn\u0027t exist",
  "description": "",
  "id": "flow-read-apis;fetching-a-flow-by-id-that-doesn\u0027t-exist",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 64,
  "name": "I GET \"/api/flows/1\"",
  "keyword": "When "
});
formatter.step({
  "line": 65,
  "name": "the response should be 404",
  "keyword": "Then "
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
  "duration": 21538631,
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
  "duration": 138788,
  "status": "passed"
});
formatter.after({
  "duration": 12118477,
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
  "duration": 405764783,
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
  "duration": 144783641,
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
  "duration": 137434,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:77"
});
formatter.result({
  "duration": 1162339,
  "status": "passed"
});
formatter.after({
  "duration": 26557544,
  "status": "passed"
});
formatter.uri("api/pipeline/reading.feature");
formatter.feature({
  "line": 1,
  "name": "Pipeline READ APIs",
  "description": "As a RESTful client or user\nI should be able to read information about pipelines",
  "id": "pipeline-read-apis",
  "keyword": "Feature"
});
formatter.before({
  "duration": 540084573,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "Fetching all pipelines",
  "description": "",
  "id": "pipeline-read-apis;fetching-all-pipelines",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "a pipeline configuration named \"devtoprod\":",
  "keyword": "Given ",
  "doc_string": {
    "content_type": "",
    "line": 9,
    "value": "description: \"Development to production pipeline\"\nenvironments:\n     dev-alpha:\n     dev-beta:\n     integ:\n     preprod:\n       promotions:\n          - prod-preflight\n          - manual\n     prod:"
  }
});
formatter.step({
  "line": 21,
  "name": "I GET \"/api/pipelines\"",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "the response should be 200",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "the body should be JSON:",
  "keyword": "And ",
  "doc_string": {
    "content_type": "",
    "line": 24,
    "value": "  [{\n      \"ident\" : \"devtoprod\",\n      \"description\": \"Development to production pipeline\",\n      \"environments\": {\n        \"dev-alpha\": {\n          \"promotions\": []\n        },\n        \"dev-beta\": {\n          \"promotions\": []\n        },\n        \"integ\": {\n          \"promotions\": []\n        },\n        \"preprod\": {\n          \"promotions\": [\n            \"prod-preflight\",\n            \"manual\"\n          ]\n        },\n        \"prod\": {\n          \"promotions\": []\n        }\n      }\n  }]"
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
  "duration": 12220721,
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
  "duration": 23647016,
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
  "duration": 733401,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:77"
});
formatter.result({
  "duration": 1255392,
  "status": "passed"
});
formatter.after({
  "duration": 54085139,
  "status": "passed"
});
formatter.before({
  "duration": 479137601,
  "status": "passed"
});
formatter.scenario({
  "line": 52,
  "name": "Fetching an pipeline by name that exists",
  "description": "",
  "id": "pipeline-read-apis;fetching-an-pipeline-by-name-that-exists",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 54,
  "name": "a pipeline configuration named \"devtoprod\":",
  "keyword": "Given ",
  "doc_string": {
    "content_type": "",
    "line": 55,
    "value": "description: \"Development to production pipeline\"\nenvironments:\n  dev-alpha:\n  dev-beta:\n  integ:\n  pre-prod:\n    promotions:\n      - prod-preflight\n      - manual\n  prod:"
  }
});
formatter.step({
  "line": 67,
  "name": "I GET \"/api/pipelines/devtoprod\"",
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
    "value": "{\n  \"ident\" : \"devtoprod\",\n  \"description\": \"Development to production pipeline\",\n  \"environments\": {\n    \"dev-alpha\": {\n      \"promotions\": []\n    },\n    \"dev-beta\": {\n      \"promotions\": []\n    },\n    \"integ\": {\n      \"promotions\": []\n    },\n    \"pre-prod\": {\n      \"promotions\": [\n        \"prod-preflight\",\n        \"manual\"\n      ]\n    },\n    \"prod\": {\n      \"promotions\": []\n    }\n  }\n}"
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
  "duration": 5757402,
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
  "duration": 20443518,
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
  "duration": 151120,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:77"
});
formatter.result({
  "duration": 2415839,
  "status": "passed"
});
formatter.after({
  "duration": 19654756,
  "status": "passed"
});
formatter.before({
  "duration": 424302275,
  "status": "passed"
});
formatter.scenario({
  "line": 98,
  "name": "Fetching an pipeline by name that doesn\u0027t exist",
  "description": "",
  "id": "pipeline-read-apis;fetching-an-pipeline-by-name-that-doesn\u0027t-exist",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 100,
  "name": "I GET \"/api/pipelines/fass\"",
  "keyword": "When "
});
formatter.step({
  "line": 101,
  "name": "the response should be 404",
  "keyword": "Then "
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
  "duration": 15734410,
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
  "duration": 150297,
  "status": "passed"
});
formatter.after({
  "duration": 19101484,
  "status": "passed"
});
formatter.uri("api/promotion/creating.feature");
formatter.feature({
  "line": 1,
  "name": "Promotion Result APIs",
  "description": "\nAs a RESTful client or user\nI should be able to add Promotion result for a Deployment in the system",
  "id": "promotion-result-apis",
  "keyword": "Feature"
});
formatter.before({
  "duration": 468554906,
  "status": "passed"
});
formatter.before({
  "duration": 55416,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "Adding a result for a Promotion associated with a Deployment",
  "description": "",
  "id": "promotion-result-apis;adding-a-result-for-a-promotion-associated-with-a-deployment",
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
  "name": "I POST to \"/api/deployments/1/promotions\" with:",
  "keyword": "When ",
  "doc_string": {
    "content_type": "",
    "line": 12,
    "value": "  {\n    \"name\"  : \"jenkins-smoke\",\n    \"status\" : \"SUCCESS\",\n    \"infoUrl\" : \"http://local.lookout.com/jenkins/job-id/2/results\"\n  }"
  }
});
formatter.step({
  "line": 19,
  "name": "the response should be 201",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "the body should be JSON:",
  "keyword": "And ",
  "doc_string": {
    "content_type": "",
    "line": 21,
    "value": "  {\n    \"id\" : 1,\n    \"promotion\" : \"jenkins-smoke\",\n    \"status\" : \"SUCCESS\",\n    \"infoUrl\" : \"http://local.lookout.com/jenkins/job-id/2/results\",\n    \"createdAt\" : \"{{created_timestamp}}\"\n  }"
  }
});
formatter.match({
  "location": "DeploymentSteps.groovy:14"
});
formatter.result({
  "duration": 7315324,
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
  "duration": 43143075,
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
  "duration": 152107,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:77"
});
formatter.result({
  "duration": 1029852,
  "status": "passed"
});
formatter.after({
  "duration": 10673261,
  "status": "passed"
});
formatter.after({
  "duration": 27845,
  "status": "passed"
});
formatter.before({
  "duration": 603137664,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "Adding a result with invalid status for a Promotion associated with a Deployment",
  "description": "",
  "id": "promotion-result-apis;adding-a-result-with-invalid-status-for-a-promotion-associated-with-a-deployment",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 34,
  "name": "there is a deployment",
  "keyword": "Given "
});
formatter.step({
  "line": 35,
  "name": "I POST to \"/api/deployments/1/promotions\" with:",
  "keyword": "When ",
  "doc_string": {
    "content_type": "",
    "line": 36,
    "value": "  {\n    \"name\"  : \"jenkins-smoke\",\n    \"status\" : \"CREATED\",\n    \"infoUrl\" : \"http://local.lookout.com/jenkins/job-id/2/results\"\n  }"
  }
});
formatter.step({
  "line": 43,
  "name": "the response should be 406",
  "keyword": "Then "
});
formatter.match({
  "location": "DeploymentSteps.groovy:14"
});
formatter.result({
  "duration": 5548674,
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
  "duration": 26052189,
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
  "duration": 221602,
  "status": "passed"
});
formatter.after({
  "duration": 33408301,
  "status": "passed"
});
formatter.before({
  "duration": 390131910,
  "status": "passed"
});
formatter.scenario({
  "line": 46,
  "name": "Adding Promotion result for a Deployment that doesn\u0027t exist",
  "description": "",
  "id": "promotion-result-apis;adding-promotion-result-for-a-deployment-that-doesn\u0027t-exist",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 48,
  "name": "I POST to \"/api/deployments/1/promotions\" with:",
  "keyword": "When ",
  "doc_string": {
    "content_type": "",
    "line": 49,
    "value": "  {\n    \"name\"  : \"jenkins-smoke\",\n    \"status\" : \"SUCCESS\",\n    \"infoUrl\" : \"http://local.lookout.com/jenkins/job-id/2/results\"\n  }"
  }
});
formatter.step({
  "line": 56,
  "name": "the response should be 404",
  "keyword": "Then "
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
  "duration": 18160788,
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
  "duration": 129754,
  "status": "passed"
});
formatter.after({
  "duration": 19655268,
  "status": "passed"
});
formatter.before({
  "duration": 466448497,
  "status": "passed"
});
formatter.scenario({
  "line": 60,
  "name": "Adding a result for a Promotion which is not associated with the Deployment",
  "description": "",
  "id": "promotion-result-apis;adding-a-result-for-a-promotion-which-is-not-associated-with-the-deployment",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 59,
      "name": "@error"
    }
  ]
});
formatter.step({
  "line": 62,
  "name": "I POST to \"/api/deployments/1/promotions\" with:",
  "keyword": "When ",
  "doc_string": {
    "content_type": "",
    "line": 63,
    "value": "  {\n    \"name\"  : \"test-smoke\",\n    \"status\" : \"FAILED\",\n    \"infoUrl\" : \"http://local.lookout.com/jenkins/job-id/2/results\"\n  }"
  }
});
formatter.step({
  "line": 70,
  "name": "the response should be 404",
  "keyword": "Then "
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
  "duration": 26555113,
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
  "duration": 131287,
  "status": "passed"
});
formatter.after({
  "duration": 15026834,
  "status": "passed"
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
  "duration": 446439921,
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
  "duration": 8072290,
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
  "duration": 20831280,
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
  "duration": 147718,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:77"
});
formatter.result({
  "duration": 894622,
  "status": "passed"
});
formatter.after({
  "duration": 20736365,
  "status": "passed"
});
formatter.before({
  "duration": 646457164,
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
  "duration": 4766397,
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
  "duration": 21448052,
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
  "duration": 140398,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:77"
});
formatter.result({
  "duration": 956975,
  "status": "passed"
});
formatter.after({
  "duration": 29442766,
  "status": "passed"
});
formatter.before({
  "duration": 491801938,
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
  "duration": 17423577,
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
  "duration": 297920,
  "status": "passed"
});
formatter.after({
  "duration": 73201459,
  "status": "passed"
});
formatter.before({
  "duration": 478145990,
  "status": "passed"
});
formatter.before({
  "duration": 649008,
  "status": "passed"
});
formatter.scenario({
  "line": 52,
  "name": "Fetching a result for a Promotion associated with a Deployment",
  "description": "",
  "id": "promotion-read-apis;fetching-a-result-for-a-promotion-associated-with-a-deployment",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 51,
      "name": "@freezetime"
    }
  ]
});
formatter.step({
  "line": 54,
  "name": "there is a deployment",
  "keyword": "Given "
});
formatter.step({
  "line": 55,
  "name": "I GET \"/api/deployments/1/promotions/1\"",
  "keyword": "When "
});
formatter.step({
  "line": 56,
  "name": "the response should be 200",
  "keyword": "Then "
});
formatter.step({
  "line": 57,
  "name": "the body should be JSON:",
  "keyword": "And ",
  "doc_string": {
    "content_type": "",
    "line": 58,
    "value": "  {\n    \"id\" : 1,\n    \"promotion\" : \"jenkins-smoke\",\n    \"status\" : \"STARTED\",\n    \"infoUrl\" : null,\n    \"createdAt\" : \"{{created_timestamp}}\"\n  }"
  }
});
formatter.match({
  "location": "DeploymentSteps.groovy:14"
});
formatter.result({
  "duration": 4827780,
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
  "duration": 24947363,
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
  "duration": 139685,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:77"
});
formatter.result({
  "duration": 1329095,
  "status": "passed"
});
formatter.after({
  "duration": 14588588,
  "status": "passed"
});
formatter.after({
  "duration": 269592,
  "status": "passed"
});
formatter.before({
  "duration": 641905902,
  "status": "passed"
});
formatter.scenario({
  "line": 69,
  "name": "Fetching Promotion result for a Deployment that doesn\u0027t exist",
  "description": "",
  "id": "promotion-read-apis;fetching-promotion-result-for-a-deployment-that-doesn\u0027t-exist",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 71,
  "name": "I GET \"/api/deployments/1/promotions/1\"",
  "keyword": "When "
});
formatter.step({
  "line": 72,
  "name": "the response should be 404",
  "keyword": "Then "
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
  "duration": 108336043,
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
  "duration": 141500,
  "status": "passed"
});
formatter.after({
  "duration": 22459672,
  "status": "passed"
});
formatter.before({
  "duration": 378453350,
  "status": "passed"
});
formatter.scenario({
  "line": 76,
  "name": "Fetching a result for a Promotion which is not associated with the Deployment",
  "description": "",
  "id": "promotion-read-apis;fetching-a-result-for-a-promotion-which-is-not-associated-with-the-deployment",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 75,
      "name": "@error"
    }
  ]
});
formatter.step({
  "line": 78,
  "name": "there is a deployment",
  "keyword": "Given "
});
formatter.step({
  "line": 79,
  "name": "I GET \"/api/deployments/1/promotions/5\"",
  "keyword": "When "
});
formatter.step({
  "line": 80,
  "name": "the response should be 404",
  "keyword": "Then "
});
formatter.match({
  "location": "DeploymentSteps.groovy:14"
});
formatter.result({
  "duration": 5323074,
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
  "duration": 29047029,
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
  "duration": 186207,
  "status": "passed"
});
formatter.after({
  "duration": 29453225,
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
  "duration": 486323029,
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
  "duration": 13013867,
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
  "duration": 20001762,
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
  "duration": 136153,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:77"
});
formatter.result({
  "duration": 1008391,
  "status": "passed"
});
formatter.after({
  "duration": 16113039,
  "status": "passed"
});
formatter.before({
  "duration": 477668035,
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
  "duration": 8092966,
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
  "duration": 23103716,
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
  "duration": 174172,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:77"
});
formatter.result({
  "duration": 1202332,
  "status": "passed"
});
formatter.after({
  "duration": 78894050,
  "status": "passed"
});
formatter.before({
  "duration": 477949539,
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
  "duration": 18396780,
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
  "duration": 178421,
  "status": "passed"
});
formatter.after({
  "duration": 149979891,
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
formatter.before({
  "duration": 479559915,
  "status": "passed"
});
formatter.before({
  "duration": 84017,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Webhooks should be invoked when deployment is completed",
  "description": "",
  "id": "webhook-invocation--when-deployment-is-completed;webhooks-should-be-invoked-when-deployment-is-completed",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@freezetime"
    },
    {
      "line": 3,
      "name": "@webhook"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "a webhook \"completed\" configuration:",
  "keyword": "Given ",
  "doc_string": {
    "content_type": "",
    "line": 6,
    "value": "  deployment:\n    completed:\n      - http://localhost:10000/job/notify-deployment-started/build"
  }
});
formatter.step({
  "line": 11,
  "name": "there is a deployment in \"STARTED\" state",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I PATCH \"/api/deployments/1\" with:",
  "keyword": "When ",
  "doc_string": {
    "content_type": "",
    "line": 13,
    "value": "  {\n    \"status\" : \"COMPLETED\"\n  }"
  }
});
formatter.step({
  "line": 18,
  "name": "the webhook should be invoked with the JSON:",
  "keyword": "Then ",
  "doc_string": {
    "content_type": "",
    "line": 19,
    "value": "  {\n    \"id\" : 1,\n    \"artifact\" : {\n      \"id\" : 1,\n      \"group\" : \"com.example.cucumber\",\n      \"name\" : \"cucumber-artifact\",\n      \"version\" : \"1.0.1\",\n      \"sourceUrl\" : \"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.1/cucumber-artifact-1.0.1.jar\",\n      \"createdAt\" : \"{{created_timestamp}}\"\n    },\n    \"status\" : \"COMPLETED\",\n    \"service\" : \"faas\",\n    \"environment\" : \"pre-prod\",\n    \"createdAt\" : \"{{created_timestamp}}\"\n  }"
  }
});
formatter.match({
  "arguments": [
    {
      "val": "completed",
      "offset": 11
    }
  ],
  "location": "WebhookSteps.groovy:25"
});
formatter.result({
  "duration": 14072512,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "STARTED",
      "offset": 26
    }
  ],
  "location": "WebhookSteps.groovy:98"
});
formatter.result({
  "duration": 5561360,
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
  "duration": 57359406,
  "status": "passed"
});
formatter.match({
  "location": "WebhookSteps.groovy:74"
});
formatter.result({
  "duration": 1003656488,
  "status": "passed"
});
formatter.after({
  "duration": 28261848,
  "status": "passed"
});
formatter.after({
  "duration": 48478,
  "status": "passed"
});
formatter.before({
  "duration": 481197203,
  "status": "passed"
});
formatter.before({
  "duration": 114448,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
  "name": "Environment webhooks should be invoked when artifacts are completed",
  "description": "",
  "id": "webhook-invocation--when-deployment-is-completed;environment-webhooks-should-be-invoked-when-artifacts-are-completed",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 38,
      "name": "@freezetime"
    },
    {
      "line": 38,
      "name": "@webhook"
    }
  ]
});
formatter.step({
  "line": 40,
  "name": "an environment webhook \"completed\" configuration named \"pre-prod\":",
  "keyword": "Given ",
  "doc_string": {
    "content_type": "",
    "line": 41,
    "value": "description: \"DeployDB Primary Integration\"\nwebhooks:\n  deployment:\n    completed:\n      - http://localhost:10000/job/notify-deployment-started/build"
  }
});
formatter.step({
  "line": 48,
  "name": "there is a deployment in \"STARTED\" state",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "I PATCH \"/api/deployments/1\" with:",
  "keyword": "When ",
  "doc_string": {
    "content_type": "",
    "line": 50,
    "value": "  {\n    \"status\" : \"COMPLETED\"\n  }"
  }
});
formatter.step({
  "line": 55,
  "name": "the webhook should be invoked with the JSON:",
  "keyword": "Then ",
  "doc_string": {
    "content_type": "",
    "line": 56,
    "value": "  {\n    \"id\" : 1,\n    \"artifact\" : {\n      \"id\" : 1,\n      \"group\" : \"com.example.cucumber\",\n      \"name\" : \"cucumber-artifact\",\n      \"version\" : \"1.0.1\",\n      \"sourceUrl\" : \"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.1/cucumber-artifact-1.0.1.jar\",\n      \"createdAt\" : \"{{created_timestamp}}\"\n    },\n    \"status\" : \"COMPLETED\",\n    \"service\" : \"faas\",\n    \"environment\" : \"pre-prod\",\n    \"createdAt\" : \"{{created_timestamp}}\"\n  }"
  }
});
formatter.match({
  "arguments": [
    {
      "val": "completed",
      "offset": 24
    },
    {
      "val": "pre-prod",
      "offset": 56
    }
  ],
  "location": "WebhookSteps.groovy:40"
});
formatter.result({
  "duration": 9510863,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "STARTED",
      "offset": 26
    }
  ],
  "location": "WebhookSteps.groovy:98"
});
formatter.result({
  "duration": 7203153,
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
  "duration": 61382772,
  "status": "passed"
});
formatter.match({
  "location": "WebhookSteps.groovy:74"
});
formatter.result({
  "duration": 1001171664,
  "status": "passed"
});
formatter.after({
  "duration": 25156843,
  "status": "passed"
});
formatter.after({
  "duration": 21688,
  "status": "passed"
});
formatter.uri("api/webhook/deploymentCreated.feature");
formatter.feature({
  "line": 1,
  "name": "Webhook invocation  when deployment is created",
  "description": "",
  "id": "webhook-invocation--when-deployment-is-created",
  "keyword": "Feature"
});
formatter.before({
  "duration": 567406780,
  "status": "passed"
});
formatter.before({
  "duration": 38741,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Webhooks should be invoked when artifacts are created",
  "description": "",
  "id": "webhook-invocation--when-deployment-is-created;webhooks-should-be-invoked-when-artifacts-are-created",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@freezetime"
    },
    {
      "line": 3,
      "name": "@webhook"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "a webhook \"created\" configuration:",
  "keyword": "Given ",
  "doc_string": {
    "content_type": "",
    "line": 6,
    "value": "  deployment:\n    created:\n       - http://localhost:10000/job/notify-deployment-started/build"
  }
});
formatter.step({
  "line": 11,
  "name": "promotions are configured",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "an environment is configured",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "a pipeline is configured",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "a service is configured",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I POST to \"/api/artifacts\" with an artifact",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "the webhook should be invoked with the JSON:",
  "keyword": "Then ",
  "doc_string": {
    "content_type": "",
    "line": 17,
    "value": "  {\n    \"id\" : 1,\n    \"artifact\" : {\n      \"id\" : 1,\n      \"group\" : \"com.example.cucumber\",\n      \"name\" : \"cukes\",\n      \"version\" : \"1.0.1\",\n      \"sourceUrl\" : \"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.1/cucumber-artifact-1.0.1.jar\",\n      \"createdAt\" : \"{{created_timestamp}}\"\n    },\n    \"status\" : \"CREATED\",\n    \"service\" : \"faas\",\n    \"environment\" : \"integ\",\n    \"createdAt\" : \"{{created_timestamp}}\"\n  }"
  }
});
formatter.match({
  "arguments": [
    {
      "val": "created",
      "offset": 11
    }
  ],
  "location": "WebhookSteps.groovy:25"
});
formatter.result({
  "duration": 9247162,
  "status": "passed"
});
formatter.match({
  "location": "PromotionSteps.groovy:24"
});
formatter.result({
  "duration": 239538,
  "status": "passed"
});
formatter.match({
  "location": "EnvironmentSteps.groovy:16"
});
formatter.result({
  "duration": 140637,
  "status": "passed"
});
formatter.match({
  "location": "PipelineSteps.groovy:17"
});
formatter.result({
  "duration": 185788,
  "status": "passed"
});
formatter.match({
  "location": "ServiceSteps.groovy:16"
});
formatter.result({
  "duration": 127594,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/api/artifacts",
      "offset": 11
    }
  ],
  "location": "WebhookSteps.groovy:63"
});
formatter.result({
  "duration": 71235163,
  "status": "passed"
});
formatter.match({
  "location": "WebhookSteps.groovy:74"
});
formatter.result({
  "duration": 1001145010,
  "status": "passed"
});
formatter.after({
  "duration": 31904339,
  "status": "passed"
});
formatter.after({
  "duration": 20497,
  "status": "passed"
});
formatter.before({
  "duration": 748906003,
  "status": "passed"
});
formatter.before({
  "duration": 37475,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "Environment webhooks should be invoked when artifacts are created",
  "description": "",
  "id": "webhook-invocation--when-deployment-is-created;environment-webhooks-should-be-invoked-when-artifacts-are-created",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 35,
      "name": "@freezetime"
    },
    {
      "line": 35,
      "name": "@webhook"
    }
  ]
});
formatter.step({
  "line": 37,
  "name": "an environment webhook \"created\" configuration named \"integ\":",
  "keyword": "Given ",
  "doc_string": {
    "content_type": "",
    "line": 38,
    "value": "description: \"DeployDB Primary Integration\"\nwebhooks:\n  deployment:\n    created:\n      - http://localhost:10000/job/notify-deployment-started/build"
  }
});
formatter.step({
  "line": 45,
  "name": "promotions are configured",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "a pipeline is configured",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "a service is configured",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "I POST to \"/api/artifacts\" with an artifact",
  "keyword": "When "
});
formatter.step({
  "line": 49,
  "name": "the webhook should be invoked with the JSON:",
  "keyword": "Then ",
  "doc_string": {
    "content_type": "",
    "line": 50,
    "value": "  {\n    \"id\" : 1,\n    \"artifact\" : {\n      \"id\" : 1,\n      \"group\" : \"com.example.cucumber\",\n      \"name\" : \"cukes\",\n      \"version\" : \"1.0.1\",\n      \"sourceUrl\" : \"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.1/cucumber-artifact-1.0.1.jar\",\n      \"createdAt\" : \"{{created_timestamp}}\"\n    },\n    \"status\" : \"CREATED\",\n    \"service\" : \"faas\",\n    \"environment\" : \"integ\",\n    \"createdAt\" : \"{{created_timestamp}}\"\n  }"
  }
});
formatter.match({
  "arguments": [
    {
      "val": "created",
      "offset": 24
    },
    {
      "val": "integ",
      "offset": 54
    }
  ],
  "location": "WebhookSteps.groovy:40"
});
formatter.result({
  "duration": 8691693,
  "status": "passed"
});
formatter.match({
  "location": "PromotionSteps.groovy:24"
});
formatter.result({
  "duration": 154777,
  "status": "passed"
});
formatter.match({
  "location": "PipelineSteps.groovy:17"
});
formatter.result({
  "duration": 133119,
  "status": "passed"
});
formatter.match({
  "location": "ServiceSteps.groovy:16"
});
formatter.result({
  "duration": 119689,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/api/artifacts",
      "offset": 11
    }
  ],
  "location": "WebhookSteps.groovy:63"
});
formatter.result({
  "duration": 53660762,
  "status": "passed"
});
formatter.match({
  "location": "WebhookSteps.groovy:74"
});
formatter.result({
  "duration": 1001131927,
  "status": "passed"
});
formatter.after({
  "duration": 28292863,
  "status": "passed"
});
formatter.after({
  "duration": 20522,
  "status": "passed"
});
formatter.uri("api/webhook/deploymentStarted.feature");
formatter.feature({
  "line": 1,
  "name": "Webhook invocation  when deployment is started",
  "description": "",
  "id": "webhook-invocation--when-deployment-is-started",
  "keyword": "Feature"
});
formatter.before({
  "duration": 484577319,
  "status": "passed"
});
formatter.before({
  "duration": 39745,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Webhooks should be invoked when deployment is started",
  "description": "",
  "id": "webhook-invocation--when-deployment-is-started;webhooks-should-be-invoked-when-deployment-is-started",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@freezetime"
    },
    {
      "line": 3,
      "name": "@webhook"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "a webhook \"started\" configuration:",
  "keyword": "Given ",
  "doc_string": {
    "content_type": "",
    "line": 6,
    "value": "  deployment:\n    started:\n      - http://localhost:10000/job/notify-deployment-started/build"
  }
});
formatter.step({
  "line": 11,
  "name": "there is a deployment in \"CREATED\" state",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I PATCH \"/api/deployments/1\" with:",
  "keyword": "When ",
  "doc_string": {
    "content_type": "",
    "line": 13,
    "value": "  {\n    \"status\" : \"STARTED\"\n  }"
  }
});
formatter.step({
  "line": 18,
  "name": "the webhook should be invoked with the JSON:",
  "keyword": "Then ",
  "doc_string": {
    "content_type": "",
    "line": 19,
    "value": "  {\n    \"id\" : 1,\n    \"artifact\" : {\n      \"id\" : 1,\n      \"group\" : \"com.example.cucumber\",\n      \"name\" : \"cucumber-artifact\",\n      \"version\" : \"1.0.1\",\n      \"sourceUrl\" : \"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.1/cucumber-artifact-1.0.1.jar\",\n      \"createdAt\" : \"{{created_timestamp}}\"\n    },\n    \"status\" : \"STARTED\",\n    \"service\" : \"faas\",\n    \"environment\" : \"pre-prod\",\n    \"createdAt\" : \"{{created_timestamp}}\"\n  }"
  }
});
formatter.match({
  "arguments": [
    {
      "val": "started",
      "offset": 11
    }
  ],
  "location": "WebhookSteps.groovy:25"
});
formatter.result({
  "duration": 10666274,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CREATED",
      "offset": 26
    }
  ],
  "location": "WebhookSteps.groovy:98"
});
formatter.result({
  "duration": 6050229,
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
  "duration": 62519583,
  "status": "passed"
});
formatter.match({
  "location": "WebhookSteps.groovy:74"
});
formatter.result({
  "duration": 1002863698,
  "status": "passed"
});
formatter.after({
  "duration": 27910689,
  "status": "passed"
});
formatter.after({
  "duration": 20867,
  "status": "passed"
});
formatter.before({
  "duration": 680341899,
  "status": "passed"
});
formatter.before({
  "duration": 39996,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "Environment webhooks should be invoked when artifacts are started",
  "description": "",
  "id": "webhook-invocation--when-deployment-is-started;environment-webhooks-should-be-invoked-when-artifacts-are-started",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 37,
      "name": "@freezetime"
    },
    {
      "line": 37,
      "name": "@webhook"
    }
  ]
});
formatter.step({
  "line": 39,
  "name": "an environment webhook \"started\" configuration named \"pre-prod\":",
  "keyword": "Given ",
  "doc_string": {
    "content_type": "",
    "line": 40,
    "value": "description: \"DeployDB Primary Integration\"\nwebhooks:\n  deployment:\n    started:\n      - http://localhost:10000/job/notify-deployment-started/build"
  }
});
formatter.step({
  "line": 47,
  "name": "there is a deployment in \"CREATED\" state",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "I PATCH \"/api/deployments/1\" with:",
  "keyword": "When ",
  "doc_string": {
    "content_type": "",
    "line": 49,
    "value": "  {\n    \"status\" : \"STARTED\"\n  }"
  }
});
formatter.step({
  "line": 54,
  "name": "the webhook should be invoked with the JSON:",
  "keyword": "Then ",
  "doc_string": {
    "content_type": "",
    "line": 55,
    "value": "  {\n    \"id\" : 1,\n    \"artifact\" : {\n      \"id\" : 1,\n      \"group\" : \"com.example.cucumber\",\n      \"name\" : \"cucumber-artifact\",\n      \"version\" : \"1.0.1\",\n      \"sourceUrl\" : \"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.1/cucumber-artifact-1.0.1.jar\",\n      \"createdAt\" : \"{{created_timestamp}}\"\n    },\n    \"status\" : \"STARTED\",\n    \"service\" : \"faas\",\n    \"environment\" : \"pre-prod\",\n    \"createdAt\" : \"{{created_timestamp}}\"\n  }"
  }
});
formatter.match({
  "arguments": [
    {
      "val": "started",
      "offset": 24
    },
    {
      "val": "pre-prod",
      "offset": 54
    }
  ],
  "location": "WebhookSteps.groovy:40"
});
formatter.result({
  "duration": 7011560,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CREATED",
      "offset": 26
    }
  ],
  "location": "WebhookSteps.groovy:98"
});
formatter.result({
  "duration": 13583107,
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
  "duration": 79544649,
  "status": "passed"
});
formatter.match({
  "location": "WebhookSteps.groovy:74"
});
formatter.result({
  "duration": 1001324765,
  "status": "passed"
});
formatter.after({
  "duration": 64864970,
  "status": "passed"
});
formatter.after({
  "duration": 25775,
  "status": "passed"
});
formatter.uri("api/webhook/promotionCompletedFail.feature");
formatter.feature({
  "line": 1,
  "name": "Webhook invocation when promotion is completed with failed state",
  "description": "",
  "id": "webhook-invocation-when-promotion-is-completed-with-failed-state",
  "keyword": "Feature"
});
formatter.before({
  "duration": 561408866,
  "status": "passed"
});
formatter.before({
  "duration": 44556,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Webhooks should be invoked when promotion is completed in failed state",
  "description": "",
  "id": "webhook-invocation-when-promotion-is-completed-with-failed-state;webhooks-should-be-invoked-when-promotion-is-completed-in-failed-state",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@freezetime"
    },
    {
      "line": 3,
      "name": "@webhook"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "a webhook \"completed\" configuration:",
  "keyword": "Given ",
  "doc_string": {
    "content_type": "",
    "line": 6,
    "value": "  promotion:\n    completed:\n      - http://localhost:10000/job/notify-promotion-completed/build"
  }
});
formatter.step({
  "line": 11,
  "name": "there is a deployment in \"COMPLETED\" state",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I POST to \"/api/deployments/1/promotions\" with:",
  "keyword": "When ",
  "doc_string": {
    "content_type": "",
    "line": 13,
    "value": "  {\n    \"name\"  : \"jenkins-smoke\",\n    \"status\" : \"FAILED\",\n    \"infoUrl\" : \"http://local.lookout.com/jenkins/job-id/2/results\"\n  }"
  }
});
formatter.step({
  "line": 20,
  "name": "the webhook should be invoked with the JSON:",
  "keyword": "Then ",
  "doc_string": {
    "content_type": "",
    "line": 21,
    "value": "  {\n    \"id\" : 1,\n    \"artifact\" : {\n      \"id\" : 1,\n      \"group\" : \"com.example.cucumber\",\n      \"name\" : \"cucumber-artifact\",\n      \"version\" : \"1.0.1\",\n      \"sourceUrl\" : \"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.1/cucumber-artifact-1.0.1.jar\",\n      \"createdAt\" : \"{{created_timestamp}}\"\n    },\n    \"status\" : \"VERIFIED\",\n    \"service\" : \"faas\",\n    \"environment\" : \"pre-prod\",\n    \"createdAt\" : \"{{created_timestamp}}\",\n    \"promotionResult\":{\n      \"id\" : 1,\n      \"createdAt\" : \"{{created_timestamp}}\",\n      \"promotion\": \"jenkins-smoke\",\n      \"infoUrl\" : \"http://local.lookout.com/jenkins/job-id/2/results\",\n      \"status\" : \"FAILED\"\n    }\n  }"
  }
});
formatter.match({
  "arguments": [
    {
      "val": "completed",
      "offset": 11
    }
  ],
  "location": "WebhookSteps.groovy:25"
});
formatter.result({
  "duration": 15464784,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "COMPLETED",
      "offset": 26
    }
  ],
  "location": "WebhookSteps.groovy:98"
});
formatter.result({
  "duration": 8262893,
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
  "duration": 65856233,
  "status": "passed"
});
formatter.match({
  "location": "WebhookSteps.groovy:74"
});
formatter.result({
  "duration": 1001017958,
  "status": "passed"
});
formatter.after({
  "duration": 11267335,
  "status": "passed"
});
formatter.after({
  "duration": 16356,
  "status": "passed"
});
formatter.before({
  "duration": 758892411,
  "status": "passed"
});
formatter.before({
  "duration": 37815,
  "status": "passed"
});
formatter.scenario({
  "line": 47,
  "name": "Environment webhooks should be invoked when promotions are completed in failed state",
  "description": "",
  "id": "webhook-invocation-when-promotion-is-completed-with-failed-state;environment-webhooks-should-be-invoked-when-promotions-are-completed-in-failed-state",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 46,
      "name": "@freezetime"
    },
    {
      "line": 46,
      "name": "@webhook"
    }
  ]
});
formatter.step({
  "line": 48,
  "name": "an environment webhook \"completed\" configuration named \"pre-prod\":",
  "keyword": "Given ",
  "doc_string": {
    "content_type": "",
    "line": 49,
    "value": "description: \"DeployDB Primary Integration\"\nwebhooks:\n  promotion:\n    completed:\n      - http://localhost:10000/job/notify-promotion-completed/build"
  }
});
formatter.step({
  "line": 56,
  "name": "there is a deployment in \"COMPLETED\" state",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "I POST to \"/api/deployments/1/promotions\" with:",
  "keyword": "When ",
  "doc_string": {
    "content_type": "",
    "line": 58,
    "value": "  {\n    \"name\"  : \"jenkins-smoke\",\n    \"status\" : \"FAILED\",\n    \"infoUrl\" : \"http://local.lookout.com/jenkins/job-id/2/results\"\n  }"
  }
});
formatter.step({
  "line": 65,
  "name": "the webhook should be invoked with the JSON:",
  "keyword": "Then ",
  "doc_string": {
    "content_type": "",
    "line": 66,
    "value": "  {\n    \"id\" : 1,\n    \"artifact\" : {\n      \"id\" : 1,\n      \"group\" : \"com.example.cucumber\",\n      \"name\" : \"cucumber-artifact\",\n      \"version\" : \"1.0.1\",\n      \"sourceUrl\" : \"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.1/cucumber-artifact-1.0.1.jar\",\n      \"createdAt\" : \"{{created_timestamp}}\"\n    },\n    \"status\" : \"VERIFIED\",\n    \"service\" : \"faas\",\n    \"environment\" : \"pre-prod\",\n    \"createdAt\" : \"{{created_timestamp}}\",\n    \"promotionResult\":{\n      \"id\" : 1,\n      \"createdAt\" : \"{{created_timestamp}}\",\n      \"promotion\": \"jenkins-smoke\",\n      \"infoUrl\" : \"http://local.lookout.com/jenkins/job-id/2/results\",\n      \"status\" : \"FAILED\"\n    }\n  }"
  }
});
formatter.match({
  "arguments": [
    {
      "val": "completed",
      "offset": 24
    },
    {
      "val": "pre-prod",
      "offset": 56
    }
  ],
  "location": "WebhookSteps.groovy:40"
});
formatter.result({
  "duration": 7035369,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "COMPLETED",
      "offset": 26
    }
  ],
  "location": "WebhookSteps.groovy:98"
});
formatter.result({
  "duration": 7418826,
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
  "duration": 106031662,
  "status": "passed"
});
formatter.match({
  "location": "WebhookSteps.groovy:74"
});
formatter.result({
  "duration": 1000956996,
  "status": "passed"
});
formatter.after({
  "duration": 19262041,
  "status": "passed"
});
formatter.after({
  "duration": 22407,
  "status": "passed"
});
formatter.uri("api/webhook/promotionCompletedSuccess.feature");
formatter.feature({
  "line": 1,
  "name": "Webhook invocation when promotion is completed with success state",
  "description": "",
  "id": "webhook-invocation-when-promotion-is-completed-with-success-state",
  "keyword": "Feature"
});
formatter.before({
  "duration": 357967442,
  "status": "passed"
});
formatter.before({
  "duration": 37932,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Webhooks should be invoked when promotion is completed in success state",
  "description": "",
  "id": "webhook-invocation-when-promotion-is-completed-with-success-state;webhooks-should-be-invoked-when-promotion-is-completed-in-success-state",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@freezetime"
    },
    {
      "line": 3,
      "name": "@webhook"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "a webhook \"completed\" configuration:",
  "keyword": "Given ",
  "doc_string": {
    "content_type": "",
    "line": 6,
    "value": "  promotion:\n    completed:\n      - http://localhost:10000/job/notify-promotion-completed/build"
  }
});
formatter.step({
  "line": 11,
  "name": "there is a deployment in \"COMPLETED\" state",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I POST to \"/api/deployments/1/promotions\" with:",
  "keyword": "When ",
  "doc_string": {
    "content_type": "",
    "line": 13,
    "value": "  {\n    \"name\"  : \"jenkins-smoke\",\n    \"status\" : \"SUCCESS\",\n    \"infoUrl\" : \"http://local.lookout.com/jenkins/job-id/2/results\"\n  }"
  }
});
formatter.step({
  "line": 20,
  "name": "the webhook should be invoked with the JSON:",
  "keyword": "Then ",
  "doc_string": {
    "content_type": "",
    "line": 21,
    "value": "  {\n    \"id\" : 1,\n    \"artifact\" : {\n      \"id\" : 1,\n      \"group\" : \"com.example.cucumber\",\n      \"name\" : \"cucumber-artifact\",\n      \"version\" : \"1.0.1\",\n      \"sourceUrl\" : \"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.1/cucumber-artifact-1.0.1.jar\",\n      \"createdAt\" : \"{{created_timestamp}}\"\n    },\n    \"status\" : \"VERIFIED\",\n    \"service\" : \"faas\",\n    \"environment\" : \"pre-prod\",\n    \"createdAt\" : \"{{created_timestamp}}\",\n    \"promotionResult\":{\n      \"id\" : 1,\n      \"createdAt\" : \"{{created_timestamp}}\",\n      \"promotion\": \"jenkins-smoke\",\n      \"infoUrl\" : \"http://local.lookout.com/jenkins/job-id/2/results\",\n      \"status\" : \"SUCCESS\"\n    }\n  }"
  }
});
formatter.match({
  "arguments": [
    {
      "val": "completed",
      "offset": 11
    }
  ],
  "location": "WebhookSteps.groovy:25"
});
formatter.result({
  "duration": 10640256,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "COMPLETED",
      "offset": 26
    }
  ],
  "location": "WebhookSteps.groovy:98"
});
formatter.result({
  "duration": 5521234,
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
  "duration": 48206022,
  "status": "passed"
});
formatter.match({
  "location": "WebhookSteps.groovy:74"
});
formatter.result({
  "duration": 1001113242,
  "status": "passed"
});
formatter.after({
  "duration": 15313221,
  "status": "passed"
});
formatter.after({
  "duration": 18630,
  "status": "passed"
});
formatter.before({
  "duration": 422331740,
  "status": "passed"
});
formatter.before({
  "duration": 35637,
  "status": "passed"
});
formatter.scenario({
  "line": 47,
  "name": "Environment webhooks should be invoked when promotions are completed in success state",
  "description": "",
  "id": "webhook-invocation-when-promotion-is-completed-with-success-state;environment-webhooks-should-be-invoked-when-promotions-are-completed-in-success-state",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 46,
      "name": "@freezetime"
    },
    {
      "line": 46,
      "name": "@webhook"
    }
  ]
});
formatter.step({
  "line": 48,
  "name": "an environment webhook \"completed\" configuration named \"pre-prod\":",
  "keyword": "Given ",
  "doc_string": {
    "content_type": "",
    "line": 49,
    "value": "description: \"DeployDB Primary Integration\"\nwebhooks:\n  promotion:\n    completed:\n      - http://localhost:10000/job/notify-promotion-completed/build"
  }
});
formatter.step({
  "line": 56,
  "name": "there is a deployment in \"COMPLETED\" state",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "I POST to \"/api/deployments/1/promotions\" with:",
  "keyword": "When ",
  "doc_string": {
    "content_type": "",
    "line": 58,
    "value": "  {\n    \"name\"  : \"jenkins-smoke\",\n    \"status\" : \"SUCCESS\",\n    \"infoUrl\" : \"http://local.lookout.com/jenkins/job-id/2/results\"\n  }"
  }
});
formatter.step({
  "line": 65,
  "name": "the webhook should be invoked with the JSON:",
  "keyword": "Then ",
  "doc_string": {
    "content_type": "",
    "line": 66,
    "value": "  {\n    \"id\" : 1,\n    \"artifact\" : {\n      \"id\" : 1,\n      \"group\" : \"com.example.cucumber\",\n      \"name\" : \"cucumber-artifact\",\n      \"version\" : \"1.0.1\",\n      \"sourceUrl\" : \"http://example.com/maven/com.example.cucumber/cucumber-artifact/1.0.1/cucumber-artifact-1.0.1.jar\",\n      \"createdAt\" : \"{{created_timestamp}}\"\n    },\n    \"status\" : \"VERIFIED\",\n    \"service\" : \"faas\",\n    \"environment\" : \"pre-prod\",\n    \"createdAt\" : \"{{created_timestamp}}\",\n    \"promotionResult\":{\n      \"id\" : 1,\n      \"createdAt\" : \"{{created_timestamp}}\",\n      \"promotion\": \"jenkins-smoke\",\n      \"infoUrl\" : \"http://local.lookout.com/jenkins/job-id/2/results\",\n      \"status\" : \"SUCCESS\"\n    }\n  }"
  }
});
formatter.match({
  "arguments": [
    {
      "val": "completed",
      "offset": 24
    },
    {
      "val": "pre-prod",
      "offset": 56
    }
  ],
  "location": "WebhookSteps.groovy:40"
});
formatter.result({
  "duration": 6546735,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "COMPLETED",
      "offset": 26
    }
  ],
  "location": "WebhookSteps.groovy:98"
});
formatter.result({
  "duration": 6176680,
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
  "duration": 50940559,
  "status": "passed"
});
formatter.match({
  "location": "WebhookSteps.groovy:74"
});
formatter.result({
  "duration": 1001218286,
  "status": "passed"
});
formatter.after({
  "duration": 21933299,
  "status": "passed"
});
formatter.after({
  "duration": 17070,
  "status": "passed"
});
});