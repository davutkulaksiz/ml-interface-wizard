export const initialState = {
  model: null,
  config: null,
  intsf: null,
  outtsf: null,
  message: null,
};

export function filesStateReducer(state, action) {
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
      if (!action.file) {
        return {
          ...state,
          config: null,
        };
      }
      const modelFileName = action.file[0].name;
      const fext = modelFileName.split(".").pop();
      if (fext !== "json") {
        return {
          ...state,
          message: "Configuration file format not supported.",
        };
      }

      const reader = new FileReader();
      reader.onload = () => {
        try {
          JSON.parse(reader.result);
        } catch (e) {
          return {
            ...state,
            message: "Configuration file is not valid JSON.",
          };
        }
      };
      reader.readAsText(action.file[0]);

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
