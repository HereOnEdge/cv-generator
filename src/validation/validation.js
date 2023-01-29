import { letters, symbols, numbers } from "./characters";

const checkValidation = function (value, type) {
  const notAllowed = validationList[type].notAllowed; // initialize not allowed charcters
  const mustHave = validationList[type].mustHave; // initialize the characters it must have
  let is_valid = "valid"; // set default validation status to 'valid'

  //check value to not be empty
  if (value === "") {
    return (is_valid = "");
  }
  // check phone number length
  if (type === "phone") {
    if (value.length < 10) {
      return (is_valid = "not-valid");
    }
  }
  // check value to not have any forbidden characters
  for (let symbol of notAllowed) {
    if (value.includes(symbol)) {
      is_valid = "not-valid";
    }
  }
  // return not valid if it has forbidden characters
  if (is_valid === "not-valid") {
    return is_valid;
  } else {
    // check if value has all the characters it needs to have
    if (mustHave !== null) {
      for (let symbol of mustHave) {
        if (value.includes(symbol)) {
          is_valid = "valid";
        } else {
          return (is_valid = "not-valid");
        }
      }
    }
    return is_valid; // return valid or not-valid
  }
};

// organize each type of input with its own allowed and not allowed characters inside an object
const validationList = {
  text: {
    notAllowed: [...numbers, ...symbols, "+"],
    mustHave: null,
  },
  phone: {
    notAllowed: [...letters, ...symbols, " "],
    mustHave: null,
  },
  email: {
    notAllowed: [" "],
    mustHave: ["@", "."],
  },
  link: {
    notAllowed: [" "],
    mustHave: ["."],
  },
  month: {
    notAllowed: [],
    mustHave: null,
  },
};

export { checkValidation };
