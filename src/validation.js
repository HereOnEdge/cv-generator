const checkValidation = function (event) {
  let notAllowed = [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "+",
    "=",
  ];
  let value = event.target.value;
  let is_valid = "valid";
  notAllowed.map((symbol) => {
    if (value.includes(`${symbol}`)) {
      is_valid = "not-valid";
      console.log(symbol);
      this.setState({
        valid: false,
      });
    }
  });
  return is_valid;
};

export { checkValidation };
