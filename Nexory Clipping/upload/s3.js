// For another S3-compatible service, set its endpoint, region and addressing.
// Addressing must be "path" or "virtual-hosted".
export default {
  id: "s3",
  name: "Custom S3 (AWS defaults)",
  type: "s3",
  endpoint: "https://s3.us-east-1.amazonaws.com",
  region: "us-east-1",
  addressing: "virtual-hosted",
};
