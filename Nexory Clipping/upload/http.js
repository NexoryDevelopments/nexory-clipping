// Set your uploader's endpoint, multipart file field and JSON response path.
// For an endpoint that needs no authorization, remove authorization and inputs.
export default {
  id: "http",
  name: "Custom HTTP",
  type: "http",
  endpoint: "https://uploads.example/api/upload",
  field: "file",
  responsePath: "data.url",
  authorization: "Bearer {apiKey}",
  inputs: [{ key: "apiKey", label: "API key" }],
};
