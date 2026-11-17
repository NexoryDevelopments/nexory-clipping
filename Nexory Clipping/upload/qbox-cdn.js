export default {
  id: "qbox-cdn",
  name: "Qbox CDN",
  type: "http",
  endpoint: "https://api.qbox.re/v1/file",
  field: "file",
  responsePath: "data.url",
  authorization: "{apiKey}",
  inputs: [{ key: "apiKey", label: "API key" }],
};
