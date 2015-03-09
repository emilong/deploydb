$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("api/artifact/creating.feature");
formatter.feature({
  "line": 1,
  "name": "Artifact CREATE APIs",
  "description": "\nAs a RESTful client or user\nI should be able to create new artifacts in the system",
  "id": "artifact-create-apis",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4793709591,
  "status": "passed"
});
formatter.before({
  "duration": 5111405,
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
  "location": "PromotionSteps.groovy:25"
});
formatter.result({
  "duration": 71328584,
  "status": "passed"
});
formatter.match({
  "location": "EnvironmentSteps.groovy:16"
});
formatter.result({
  "duration": 3793475,
  "status": "passed"
});
formatter.match({
  "location": "PipelineSteps.groovy:17"
});
formatter.result({
  "duration": 6919198,
  "status": "passed"
});
formatter.match({
  "location": "ServiceSteps.groovy:16"
});
formatter.result({
  "duration": 4934833,
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
  "duration": 927230422,
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
  "duration": 6172964,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:77"
});
formatter.result({
  "duration": 103417888,
  "status": "passed"
});
formatter.after({
  "duration": 59555059,
  "status": "passed"
});
formatter.after({
  "duration": 930342,
  "status": "passed"
});
formatter.before({
  "duration": 779318528,
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
  "duration": 93049260,
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
  "duration": 225483,
  "status": "passed"
});
formatter.after({
  "duration": 67559514,
  "status": "passed"
});
formatter.before({
  "duration": 780375545,
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
  "duration": 57080194,
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
  "duration": 125656,
  "status": "passed"
});
formatter.after({
  "duration": 13975457,
  "status": "passed"
});
formatter.before({
  "duration": 558635025,
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
  "duration": 58248156,
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
  "duration": 170517,
  "status": "passed"
});
formatter.after({
  "duration": 75169620,
  "status": "passed"
});
formatter.before({
  "duration": 603750220,
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
  "duration": 81874271,
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
  "duration": 171745,
  "status": "passed"
});
formatter.after({
  "duration": 74344981,
  "status": "passed"
});
formatter.before({
  "duration": 809588777,
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
  "duration": 73910,
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
  "duration": 2618849,
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
  "duration": 103775251,
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
  "duration": 182758,
  "status": "passed"
});
formatter.after({
  "duration": 27092662,
  "status": "passed"
});
formatter.before({
  "duration": 918643750,
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
  "duration": 36386,
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
  "duration": 1495860,
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
  "duration": 41385634,
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
  "duration": 149940,
  "status": "passed"
});
formatter.after({
  "duration": 57206799,
  "status": "passed"
});
formatter.before({
  "duration": 556591308,
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
  "duration": 34849,
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
  "duration": 358234,
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
  "duration": 43485442,
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
  "duration": 161459,
  "status": "passed"
});
formatter.after({
  "duration": 52519421,
  "status": "passed"
});
formatter.before({
  "duration": 495916709,
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
  "duration": 68159,
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
  "duration": 974623,
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
  "duration": 33707490,
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
  "duration": 418470,
  "status": "passed"
});
formatter.after({
  "duration": 42221463,
  "status": "passed"
});
formatter.before({
  "duration": 537587319,
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
  "duration": 291512,
  "status": "passed"
});
formatter.match({
  "location": "PipelineSteps.groovy:17"
});
formatter.result({
  "duration": 274725,
  "status": "passed"
});
formatter.match({
  "location": "ServiceSteps.groovy:16"
});
formatter.result({
  "duration": 200390,
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
  "duration": 45590833,
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
  "duration": 164927,
  "status": "passed"
});
formatter.after({
  "duration": 62634001,
  "status": "passed"
});
formatter.before({
  "duration": 530025945,
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
  "location": "PromotionSteps.groovy:18"
});
formatter.result({
  "duration": 1474107,
  "status": "passed"
});
formatter.match({
  "location": "PipelineSteps.groovy:17"
});
formatter.result({
  "duration": 260460,
  "status": "passed"
});
formatter.match({
  "location": "ServiceSteps.groovy:16"
});
formatter.result({
  "duration": 280052,
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
  "duration": 45049353,
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
  "duration": 152092,
  "status": "passed"
});
formatter.after({
  "duration": 69794916,
  "status": "passed"
});
formatter.before({
  "duration": 641803025,
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
  "location": "PromotionSteps.groovy:18"
});
formatter.result({
  "duration": 313871,
  "status": "passed"
});
formatter.match({
  "location": "EnvironmentSteps.groovy:16"
});
formatter.result({
  "duration": 504578,
  "status": "passed"
});
formatter.match({
  "location": "ServiceSteps.groovy:16"
});
formatter.result({
  "duration": 247331,
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
  "duration": 26353926,
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
  "duration": 153606,
  "status": "passed"
});
formatter.after({
  "duration": 40143017,
  "status": "passed"
});
formatter.before({
  "duration": 591493255,
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
  "location": "PromotionSteps.groovy:18"
});
formatter.result({
  "duration": 353621,
  "status": "passed"
});
formatter.match({
  "location": "EnvironmentSteps.groovy:16"
});
formatter.result({
  "duration": 173679,
  "status": "passed"
});
formatter.match({
  "location": "PipelineSteps.groovy:17"
});
formatter.result({
  "duration": 252553,
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
  "duration": 56211428,
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
  "duration": 164639,
  "status": "passed"
});
formatter.after({
  "duration": 62095373,
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
  "duration": 343106155,
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
  "duration": 49963454,
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
  "duration": 25381681,
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
  "duration": 176328,
  "status": "passed"
});
formatter.after({
  "duration": 32364884,
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
  "duration": 399479252,
  "status": "passed"
});
formatter.before({
  "duration": 79616,
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
  "duration": 3428774,
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
  "duration": 78650085,
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
  "duration": 170694,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:77"
});
formatter.result({
  "duration": 1281125,
  "status": "passed"
});
formatter.after({
  "duration": 31031347,
  "status": "passed"
});
formatter.after({
  "duration": 50637,
  "status": "passed"
});
formatter.before({
  "duration": 394276918,
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
  "duration": 3488454,
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
  "duration": 44846458,
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
  "duration": 716893,
  "status": "passed"
});
formatter.after({
  "duration": 35874555,
  "status": "passed"
});
formatter.before({
  "duration": 553636098,
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
  "duration": 26354595,
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
  "duration": 249574,
  "status": "passed"
});
formatter.after({
  "duration": 20573184,
  "status": "passed"
});
formatter.before({
  "duration": 457274574,
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
  "duration": 36699946,
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
  "duration": 149821,
  "status": "passed"
});
formatter.after({
  "duration": 57639111,
  "status": "passed"
});
formatter.before({
  "duration": 471534905,
  "status": "passed"
});
formatter.before({
  "duration": 71144,
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
  "duration": 8289647,
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
  "duration": 100451841,
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
  "duration": 160118,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:77"
});
formatter.result({
  "duration": 9732377,
  "status": "passed"
});
formatter.after({
  "duration": 35865837,
  "status": "passed"
});
formatter.after({
  "duration": 31004,
  "status": "passed"
});
formatter.before({
  "duration": 509920085,
  "status": "passed"
});
formatter.before({
  "duration": 287104,
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
  "duration": 11258344,
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
  "duration": 48506081,
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
  "duration": 167366,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:77"
});
formatter.result({
  "duration": 1719862,
  "status": "passed"
});
formatter.after({
  "duration": 89254435,
  "status": "passed"
});
formatter.after({
  "duration": 29429,
  "status": "passed"
});
formatter.before({
  "duration": 598677197,
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
  "duration": 30107456,
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
  "duration": 164858,
  "status": "passed"
});
formatter.after({
  "duration": 17274764,
  "status": "passed"
});
formatter.before({
  "duration": 390705541,
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
  "duration": 31681742,
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
  "duration": 159494,
  "status": "passed"
});
formatter.after({
  "duration": 46516356,
  "status": "passed"
});
formatter.before({
  "duration": 538349199,
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
  "duration": 41790530,
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
  "duration": 231484,
  "status": "passed"
});
formatter.after({
  "duration": 60940217,
  "status": "passed"
});
formatter.before({
  "duration": 535584134,
  "status": "passed"
});
formatter.before({
  "duration": 67570,
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
  "duration": 4318654,
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
  "duration": 45688222,
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
  "duration": 162262,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:77"
});
formatter.result({
  "duration": 1477078,
  "status": "passed"
});
formatter.after({
  "duration": 19545021,
  "status": "passed"
});
formatter.after({
  "duration": 28253,
  "status": "passed"
});
formatter.before({
  "duration": 553812373,
  "status": "passed"
});
formatter.before({
  "duration": 63983,
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
  "duration": 4670731,
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
  "duration": 26581841,
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
  "duration": 124040,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:77"
});
formatter.result({
  "duration": 2178170,
  "status": "passed"
});
formatter.after({
  "duration": 18855691,
  "status": "passed"
});
formatter.after({
  "duration": 25477,
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
  "duration": 492435644,
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
  "duration": 3831321,
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
  "duration": 26006454,
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
  "duration": 147824,
  "status": "passed"
});
formatter.after({
  "duration": 62764786,
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
  "duration": 467700989,
  "status": "passed"
});
formatter.before({
  "duration": 68485,
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
  "duration": 13215665,
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
  "duration": 57205593,
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
  "duration": 178618,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:77"
});
formatter.result({
  "duration": 3510150,
  "status": "passed"
});
formatter.after({
  "duration": 29328615,
  "status": "passed"
});
formatter.after({
  "duration": 27970,
  "status": "passed"
});
formatter.before({
  "duration": 455735375,
  "status": "passed"
});
formatter.before({
  "duration": 70176,
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
  "duration": 6502801,
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
  "duration": 33195718,
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
  "duration": 165804,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:77"
});
formatter.result({
  "duration": 6863590,
  "status": "passed"
});
formatter.after({
  "duration": 31446528,
  "status": "passed"
});
formatter.after({
  "duration": 26170,
  "status": "passed"
});
formatter.before({
  "duration": 396216304,
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
  "duration": 31577198,
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
  "duration": 130335,
  "status": "passed"
});
formatter.after({
  "duration": 20485718,
  "status": "passed"
});
formatter.before({
  "duration": 472313280,
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
  "duration": 26952615,
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
  "duration": 135575,
  "status": "passed"
});
formatter.after({
  "duration": 19130189,
  "status": "passed"
});
formatter.before({
  "duration": 404130597,
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
  "duration": 7175717,
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
  "duration": 19117444,
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
  "duration": 148049,
  "status": "passed"
});
formatter.after({
  "duration": 32158183,
  "status": "passed"
});
formatter.before({
  "duration": 448525596,
  "status": "passed"
});
formatter.before({
  "duration": 70822,
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
  "duration": 12322554,
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
  "duration": 43529863,
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
  "duration": 151950,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:77"
});
formatter.result({
  "duration": 2644444,
  "status": "passed"
});
formatter.after({
  "duration": 41048909,
  "status": "passed"
});
formatter.after({
  "duration": 27170,
  "status": "passed"
});
formatter.before({
  "duration": 424414516,
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
  "duration": 18822097,
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
  "duration": 180499,
  "status": "passed"
});
formatter.after({
  "duration": 20589083,
  "status": "passed"
});
formatter.before({
  "duration": 493118860,
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
  "duration": 34602338,
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
  "duration": 160777,
  "status": "passed"
});
formatter.after({
  "duration": 50570938,
  "status": "passed"
});
formatter.before({
  "duration": 473716763,
  "status": "passed"
});
formatter.before({
  "duration": 69803,
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
  "duration": 5740184,
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
  "duration": 41438260,
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
  "duration": 144259,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:77"
});
formatter.result({
  "duration": 3246149,
  "status": "passed"
});
formatter.after({
  "duration": 48311614,
  "status": "passed"
});
formatter.after({
  "duration": 25802,
  "status": "passed"
});
formatter.before({
  "duration": 322367354,
  "status": "passed"
});
formatter.before({
  "duration": 61311,
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
  "duration": 9344518,
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
  "duration": 28671989,
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
  "duration": 132288,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:77"
});
formatter.result({
  "duration": 1498264,
  "status": "passed"
});
formatter.after({
  "duration": 30747148,
  "status": "passed"
});
formatter.after({
  "duration": 23956,
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
  "duration": 350339918,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "Updating a deployment with a status STARTED",
  "description": "",
  "id": "deployment-update-apis;updating-a-deployment-with-a-status-started",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 9,
  "name": "there is a deployment",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I PATCH \"/api/deployments/1\" with:",
  "keyword": "When ",
  "doc_string": {
    "content_type": "",
    "line": 11,
    "value": "  {\n    \"status\" : \"COMPLETED\"\n  }"
  }
});
formatter.step({
  "line": 16,
  "name": "the response should be 204",
  "keyword": "Then "
});
formatter.match({
  "location": "DeploymentSteps.groovy:14"
});
formatter.result({
  "duration": 11436681,
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
  "duration": 52427255,
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
  "duration": 151807,
  "status": "passed"
});
formatter.after({
  "duration": 18274802,
  "status": "passed"
});
formatter.before({
  "duration": 371911073,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Updating a deployment with a status COMPLETED",
  "description": "",
  "id": "deployment-update-apis;updating-a-deployment-with-a-status-completed",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 21,
  "name": "there is a deployment",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "I PATCH \"/api/deployments/1\" with:",
  "keyword": "When ",
  "doc_string": {
    "content_type": "",
    "line": 23,
    "value": "  {\n    \"status\" : \"FAILED\"\n  }"
  }
});
formatter.step({
  "line": 28,
  "name": "the response should be 204",
  "keyword": "Then "
});
formatter.match({
  "location": "DeploymentSteps.groovy:14"
});
formatter.result({
  "duration": 6131272,
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
  "duration": 35056737,
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
  "duration": 148092,
  "status": "passed"
});
formatter.after({
  "duration": 17369427,
  "status": "passed"
});
formatter.before({
  "duration": 394122840,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "Updating a deployment with invalid status transition",
  "description": "",
  "id": "deployment-update-apis;updating-a-deployment-with-invalid-status-transition",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 33,
  "name": "there is a deployment",
  "keyword": "Given "
});
formatter.step({
  "line": 34,
  "name": "I PATCH \"/api/deployments/1\" with:",
  "keyword": "When ",
  "doc_string": {
    "content_type": "",
    "line": 35,
    "value": "  {\n    \"status\" : \"NOT_STARTED\"\n  }"
  }
});
formatter.step({
  "line": 40,
  "name": "the response should be 406",
  "keyword": "Then "
});
formatter.match({
  "location": "DeploymentSteps.groovy:14"
});
formatter.result({
  "duration": 6490462,
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
  "duration": 34102979,
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
  "duration": 134110,
  "status": "passed"
});
formatter.after({
  "duration": 48558070,
  "status": "passed"
});
formatter.before({
  "duration": 435618932,
  "status": "passed"
});
formatter.scenario({
  "line": 44,
  "name": "Updating a deployment with an malformed status",
  "description": "",
  "id": "deployment-update-apis;updating-a-deployment-with-an-malformed-status",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 43,
      "name": "@error"
    }
  ]
});
formatter.step({
  "line": 46,
  "name": "there is a deployment",
  "keyword": "Given "
});
formatter.step({
  "line": 47,
  "name": "I PATCH \"/api/deployments/1\" with:",
  "keyword": "When ",
  "doc_string": {
    "content_type": "",
    "line": 48,
    "value": "  {\n    \"status\" : \"INVALID\"\n  }"
  }
});
formatter.step({
  "line": 53,
  "name": "the response should be 400",
  "keyword": "Then "
});
formatter.match({
  "location": "DeploymentSteps.groovy:14"
});
formatter.result({
  "duration": 11576861,
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
  "duration": 33364124,
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
  "duration": 218129,
  "status": "passed"
});
formatter.after({
  "duration": 28024968,
  "status": "passed"
});
formatter.before({
  "duration": 437145881,
  "status": "passed"
});
formatter.scenario({
  "line": 57,
  "name": "Updating a deployment that doesn\u0027t exist",
  "description": "",
  "id": "deployment-update-apis;updating-a-deployment-that-doesn\u0027t-exist",
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
  "name": "I PATCH \"/api/deployments/1\" with:",
  "keyword": "When ",
  "doc_string": {
    "content_type": "",
    "line": 60,
    "value": "  {\n    \"status\" : \"FAILED\"\n  }"
  }
});
formatter.step({
  "line": 65,
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
  "duration": 36812294,
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
  "duration": 234595,
  "status": "passed"
});
formatter.after({
  "duration": 40349908,
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
  "duration": 496619442,
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
  "duration": 85842398,
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
  "duration": 46596089,
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
  "duration": 167950,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:77"
});
formatter.result({
  "duration": 1301035,
  "status": "passed"
});
formatter.after({
  "duration": 57379814,
  "status": "passed"
});
formatter.before({
  "duration": 764226529,
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
  "duration": 7652196,
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
  "duration": 43106261,
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
  "duration": 147361,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:77"
});
formatter.result({
  "duration": 1791110,
  "status": "passed"
});
formatter.after({
  "duration": 44939790,
  "status": "passed"
});
formatter.before({
  "duration": 462852850,
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
  "duration": 21660004,
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
  "duration": 154005,
  "status": "passed"
});
formatter.after({
  "duration": 80854824,
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
  "duration": 828104750,
  "status": "passed"
});
formatter.before({
  "duration": 95971,
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
  "duration": 53607216,
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
  "duration": 37932423,
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
  "duration": 392036,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:77"
});
formatter.result({
  "duration": 3168797,
  "status": "passed"
});
formatter.after({
  "duration": 81562813,
  "status": "passed"
});
formatter.after({
  "duration": 31040,
  "status": "passed"
});
formatter.before({
  "duration": 569485093,
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
  "duration": 52315323,
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
  "duration": 155218,
  "status": "passed"
});
formatter.after({
  "duration": 47849404,
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
  "duration": 353842164,
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
  "duration": 56293039,
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
  "duration": 163023,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:77"
});
formatter.result({
  "duration": 1086537,
  "status": "passed"
});
formatter.after({
  "duration": 50579390,
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
  "duration": 425746468,
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
  "duration": 13119948,
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
  "duration": 41652937,
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
  "duration": 147910,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:77"
});
formatter.result({
  "duration": 4661189,
  "status": "passed"
});
formatter.after({
  "duration": 51516875,
  "status": "passed"
});
formatter.before({
  "duration": 464772817,
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
  "duration": 8400146,
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
  "duration": 24754141,
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
  "duration": 143290,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:77"
});
formatter.result({
  "duration": 1344443,
  "status": "passed"
});
formatter.after({
  "duration": 38381911,
  "status": "passed"
});
formatter.before({
  "duration": 785080824,
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
  "duration": 24083247,
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
  "duration": 160519,
  "status": "passed"
});
formatter.after({
  "duration": 33363260,
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
  "duration": 568498486,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "Adding a result for a Promotion associated with a Deployment",
  "description": "",
  "id": "promotion-result-apis;adding-a-result-for-a-promotion-associated-with-a-deployment",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 9,
  "name": "there is a deployment",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I POST to \"/api/deployments/1/promotions\" with:",
  "keyword": "When ",
  "doc_string": {
    "content_type": "",
    "line": 11,
    "value": "  {\n    \"name\"  : \"jenkins-smoke\",\n    \"status\" : \"SUCCESS\",\n    \"infoUrl\" : \"http://local.lookout.com/jenkins/job-id/2/results\"\n  }"
  }
});
formatter.step({
  "line": 18,
  "name": "the response should be 204",
  "keyword": "Then "
});
formatter.match({
  "location": "DeploymentSteps.groovy:14"
});
formatter.result({
  "duration": 12222539,
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
  "duration": 55639853,
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
  "duration": 123407,
  "status": "passed"
});
formatter.after({
  "duration": 23789294,
  "status": "passed"
});
formatter.before({
  "duration": 732205773,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Adding a result with invalid status for a Promotion associated with a Deployment",
  "description": "",
  "id": "promotion-result-apis;adding-a-result-with-invalid-status-for-a-promotion-associated-with-a-deployment",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 23,
  "name": "there is a deployment",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "I POST to \"/api/deployments/1/promotions\" with:",
  "keyword": "When ",
  "doc_string": {
    "content_type": "",
    "line": 25,
    "value": "  {\n    \"name\"  : \"jenkins-smoke\",\n    \"status\" : \"CREATED\",\n    \"infoUrl\" : \"http://local.lookout.com/jenkins/job-id/2/results\"\n  }"
  }
});
formatter.step({
  "line": 32,
  "name": "the response should be 406",
  "keyword": "Then "
});
formatter.match({
  "location": "DeploymentSteps.groovy:14"
});
formatter.result({
  "duration": 11311909,
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
  "duration": 42882808,
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
  "duration": 145082,
  "status": "passed"
});
formatter.after({
  "duration": 19195009,
  "status": "passed"
});
formatter.before({
  "duration": 661274377,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "Adding Promotion result for a Deployment that doesn\u0027t exist",
  "description": "",
  "id": "promotion-result-apis;adding-promotion-result-for-a-deployment-that-doesn\u0027t-exist",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 37,
  "name": "I POST to \"/api/deployments/1/promotions\" with:",
  "keyword": "When ",
  "doc_string": {
    "content_type": "",
    "line": 38,
    "value": "  {\n    \"name\"  : \"jenkins-smoke\",\n    \"status\" : \"SUCCESS\",\n    \"infoUrl\" : \"http://local.lookout.com/jenkins/job-id/2/results\"\n  }"
  }
});
formatter.step({
  "line": 45,
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
  "duration": 48663752,
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
  "duration": 152245,
  "status": "passed"
});
formatter.after({
  "duration": 65758433,
  "status": "passed"
});
formatter.before({
  "duration": 786217675,
  "status": "passed"
});
formatter.scenario({
  "line": 49,
  "name": "Adding a result for a Promotion which is not associated with the Deployment",
  "description": "",
  "id": "promotion-result-apis;adding-a-result-for-a-promotion-which-is-not-associated-with-the-deployment",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 48,
      "name": "@error"
    }
  ]
});
formatter.step({
  "line": 51,
  "name": "I POST to \"/api/deployments/1/promotions\" with:",
  "keyword": "When ",
  "doc_string": {
    "content_type": "",
    "line": 52,
    "value": "  {\n    \"name\"  : \"test-smoke\",\n    \"status\" : \"FAILED\",\n    \"infoUrl\" : \"http://local.lookout.com/jenkins/job-id/2/results\"\n  }"
  }
});
formatter.step({
  "line": 59,
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
  "duration": 28628042,
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
  "duration": 136845,
  "status": "passed"
});
formatter.after({
  "duration": 53844037,
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
  "duration": 504733373,
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
  "duration": 17098990,
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
  "duration": 30239858,
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
  "duration": 150108,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:77"
});
formatter.result({
  "duration": 13205817,
  "status": "passed"
});
formatter.after({
  "duration": 74215830,
  "status": "passed"
});
formatter.before({
  "duration": 504669302,
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
  "duration": 13166493,
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
  "duration": 29256307,
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
  "duration": 119387,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:77"
});
formatter.result({
  "duration": 720813,
  "status": "passed"
});
formatter.after({
  "duration": 65755660,
  "status": "passed"
});
formatter.before({
  "duration": 725878837,
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
  "duration": 72356522,
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
  "duration": 257578,
  "status": "passed"
});
formatter.after({
  "duration": 34125912,
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
  "duration": 808455033,
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
  "duration": 32984563,
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
  "duration": 34158992,
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
  "duration": 143557,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:77"
});
formatter.result({
  "duration": 1021219,
  "status": "passed"
});
formatter.after({
  "duration": 225648697,
  "status": "passed"
});
formatter.before({
  "duration": 559860475,
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
  "duration": 11143565,
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
  "duration": 35674145,
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
  "duration": 161780,
  "status": "passed"
});
formatter.match({
  "location": "HttpSteps.groovy:77"
});
formatter.result({
  "duration": 1014196,
  "status": "passed"
});
formatter.after({
  "duration": 45201035,
  "status": "passed"
});
formatter.before({
  "duration": 505969345,
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
  "duration": 19441634,
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
  "duration": 154677,
  "status": "passed"
});
formatter.after({
  "duration": 88696997,
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
  "duration": 424575073,
  "status": "passed"
});
formatter.before({
  "duration": 74189,
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
  "location": "WebhookSteps.groovy:24"
});
formatter.result({
  "duration": 38075069,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "STARTED",
      "offset": 26
    }
  ],
  "location": "WebhookSteps.groovy:96"
});
formatter.result({
  "duration": 16398948,
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
  "duration": 92359814,
  "status": "passed"
});
formatter.match({
  "location": "WebhookSteps.groovy:72"
});
formatter.result({
  "duration": 1003351561,
  "status": "passed"
});
formatter.after({
  "duration": 26345889,
  "status": "passed"
});
formatter.after({
  "duration": 56468,
  "status": "passed"
});
formatter.before({
  "duration": 454841089,
  "status": "passed"
});
formatter.before({
  "duration": 60332,
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
  "location": "WebhookSteps.groovy:38"
});
formatter.result({
  "duration": 11152462,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "STARTED",
      "offset": 26
    }
  ],
  "location": "WebhookSteps.groovy:96"
});
formatter.result({
  "duration": 8256902,
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
  "duration": 42521652,
  "status": "passed"
});
formatter.match({
  "location": "WebhookSteps.groovy:72"
});
formatter.result({
  "duration": 1001004334,
  "status": "passed"
});
formatter.after({
  "duration": 23629922,
  "status": "passed"
});
formatter.after({
  "duration": 21227,
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
  "duration": 2208945439,
  "status": "passed"
});
formatter.before({
  "duration": 55076,
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
  "location": "WebhookSteps.groovy:24"
});
formatter.result({
  "duration": 39291419,
  "status": "passed"
});
formatter.match({
  "location": "PromotionSteps.groovy:25"
});
formatter.result({
  "duration": 252051,
  "status": "passed"
});
formatter.match({
  "location": "EnvironmentSteps.groovy:16"
});
formatter.result({
  "duration": 127991,
  "status": "passed"
});
formatter.match({
  "location": "PipelineSteps.groovy:17"
});
formatter.result({
  "duration": 171275,
  "status": "passed"
});
formatter.match({
  "location": "ServiceSteps.groovy:16"
});
formatter.result({
  "duration": 136556,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/api/artifacts",
      "offset": 11
    }
  ],
  "location": "WebhookSteps.groovy:61"
});
formatter.result({
  "duration": 63726906,
  "status": "passed"
});
formatter.match({
  "location": "WebhookSteps.groovy:72"
});
formatter.result({
  "duration": 1001632817,
  "status": "passed"
});
formatter.after({
  "duration": 58722883,
  "status": "passed"
});
formatter.after({
  "duration": 27714,
  "status": "passed"
});
formatter.before({
  "duration": 695795528,
  "status": "passed"
});
formatter.before({
  "duration": 616096,
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
  "location": "WebhookSteps.groovy:38"
});
formatter.result({
  "duration": 9430216,
  "status": "passed"
});
formatter.match({
  "location": "PromotionSteps.groovy:25"
});
formatter.result({
  "duration": 160595,
  "status": "passed"
});
formatter.match({
  "location": "PipelineSteps.groovy:17"
});
formatter.result({
  "duration": 652007,
  "status": "passed"
});
formatter.match({
  "location": "ServiceSteps.groovy:16"
});
formatter.result({
  "duration": 140254,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/api/artifacts",
      "offset": 11
    }
  ],
  "location": "WebhookSteps.groovy:61"
});
formatter.result({
  "duration": 78363275,
  "status": "passed"
});
formatter.match({
  "location": "WebhookSteps.groovy:72"
});
formatter.result({
  "duration": 1001329617,
  "status": "passed"
});
formatter.after({
  "duration": 23326205,
  "status": "passed"
});
formatter.after({
  "duration": 326319,
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
  "duration": 369561811,
  "status": "passed"
});
formatter.before({
  "duration": 94408,
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
  "location": "WebhookSteps.groovy:24"
});
formatter.result({
  "duration": 12275587,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CREATED",
      "offset": 26
    }
  ],
  "location": "WebhookSteps.groovy:96"
});
formatter.result({
  "duration": 18792807,
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
  "duration": 55818692,
  "status": "passed"
});
formatter.match({
  "location": "WebhookSteps.groovy:72"
});
formatter.result({
  "duration": 1001047938,
  "status": "passed"
});
formatter.after({
  "duration": 34861553,
  "status": "passed"
});
formatter.after({
  "duration": 53169,
  "status": "passed"
});
formatter.before({
  "duration": 575383588,
  "status": "passed"
});
formatter.before({
  "duration": 60844,
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
  "location": "WebhookSteps.groovy:38"
});
formatter.result({
  "duration": 7635429,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CREATED",
      "offset": 26
    }
  ],
  "location": "WebhookSteps.groovy:96"
});
formatter.result({
  "duration": 6154235,
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
  "duration": 50034773,
  "status": "passed"
});
formatter.match({
  "location": "WebhookSteps.groovy:72"
});
formatter.result({
  "duration": 1001071488,
  "status": "passed"
});
formatter.after({
  "duration": 22279637,
  "status": "passed"
});
formatter.after({
  "duration": 19703,
  "status": "passed"
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