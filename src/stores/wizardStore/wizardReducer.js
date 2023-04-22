import { ConfigSchema } from "./wizardSchemas";
export const initialState = {
  model: null,
  config: null,
  intsf: null,
  outtsf: null,
  message: null,
};

export function wizardStateReducer(state, action) {
  switch (action.type) {
    case "model": {
      if (!action.file) {
        return {
          ...state,
          model: null,
        };
      }
      const modelFileName = action.file[0].name;
      const fext = modelFileName.split(".").pop();
      if (fext !== "pkl") {
        return {
          ...state,
          message: "Model file format not supported.",
        };
      }

      return {
        ...state,
        model: action.file,
        message: null,
      };
    }
    case "config": {
      //NOTE: Check if it is a file object.
      if (!action.file) {
        return {
          ...state,
          config: null,
        };
      }
      //NOTE: Check if it is a json file.
      const modelFileName = action.file[0].name;
      const fext = modelFileName.split(".").pop();
      if (fext !== "json") {
        return {
          ...state,
          message: "Configuration file format not supported.",
        };
      }

      return {
        ...state,
        config: action.file,
        message: null,
      };
    }
    case "intsf": {
      if (!action.file) {
        return {
          ...state,
          intsf: null,
        };
      }

      const modelFileName = action.file[0].name;
      const fext = modelFileName.split(".").pop();
      if (fext !== "pkl") {
        return {
          ...state,
          message: "File format not supported.",
        };
      }

      return {
        ...state,
        intsf: action.file,
        message: null,
      };
    }
    case "outtsf": {
      if (!action.file) {
        return {
          ...state,
          outtsf: null,
        };
      }

      const modelFileName = action.file[0].name;
      const fext = modelFileName.split(".").pop();
      if (fext !== "pkl") {
        return {
          ...state,
          message: "File format not supported.",
        };
      }

      return {
        ...state,
        outtsf: action.file,
        message: null,
      };
    }
    case "setMessage": {
      return {
        ...state,
        message: action.message,
      };
    }
    case "clearMessage": {
      return {
        ...state,
        message: null,
      };
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}

//NOTE: configFile is actually a FileArray
export function readAndParseConfig(configFile, onComplete) {
  if (!configFile) {
    return;
  }
  const reader = new FileReader();
  reader.readAsText(configFile[0]);
  reader.onload = () => {
    let parsedConfig;
    try {
      //NOTE: Validate that the text is proper JSON
      parsedConfig = JSON.parse(reader.result);
    } catch (e) {
      onComplete({
        parsedConfig: null,
        message: "Configuration file is not valid JSON.",
      });
    }
    //NOTE: Validate that the JSON object created above fits our schema.
    const result = ConfigSchema.safeParse(parsedConfig);
    if (result.success) {
      console.log("Logging after zod parsing." + JSON.stringify(result.data));
      onComplete({
        parsedConfig: result.data,
        message: null,
      });
    } else {
      onComplete({
        parsedConfig: null,
        message: "Incorrect configuration structure.",
      });
    }
  };
}
