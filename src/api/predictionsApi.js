const host = process.env.REACT_APP_WIZARD_HOST;
const port = process.env.REACT_APP_WIZARD_PORT;
export const predictionsWsUrl = `ws://${host}:${port}/api/v1/predict/ws`;
const baseUrl = `http://${host}:${port}`;

function createMetadata(config) {
  console.log(baseUrl)
  let metadata = {};
  metadata.name = config.model.name;
  metadata.desc = config.model.description;
  metadata.model_type = config.model.type;
  metadata.in_transformer = config.model.in_transformer;
  metadata.out_transformer = config.model.out_transformer;
  metadata.target_name = config.target.name;
  metadata.expires = "0";

  metadata.feature_names = config.features.map((item) => item.name);
  console.log(metadata);
  return metadata;
}

export async function uploadModelWrapper(args) {
  const { model, config, intsf, outtsf } = args;
  return uploadModel(model, config, intsf, outtsf);
}

async function uploadModel(modelFile, config, inTsf, outTsf) {
  const metadata = createMetadata(config);
  const formData = new FormData();
  formData.append("model_file", modelFile);
  formData.append("metadata_request", JSON.stringify(metadata));

  if (inTsf) {
    formData.append("in_tsf", inTsf);
  }
  if (outTsf) {
    formData.append("out_tsf", outTsf);
  }

  try {
    const response = await fetch(`${baseUrl}/api/v1/upload`, {
      method: "POST",
      body: formData,
    });

    return await response.json();
  } catch {
    throw "network-error-try-again";
  }
}
