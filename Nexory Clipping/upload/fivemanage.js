export default {
  id: "fivemanage",
  name: "Fivemanage",
  type: "http",
  endpoint: "https://api.fivemanage.com/api/v3/file",
  field: "file",
  responsePath: "data.url",
  authorization: "{apiKey}",
  inputs: [{ key: "apiKey", label: "Media API token" }],
};
