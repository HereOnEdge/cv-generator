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
  notAllowed.map((symbol) => {
    if (value.includes(`${symbol}`)) {
      this.setState({
        valid: false,
      });
    } else {
      this.setState({
        input: value,
        valid: true,
      });
      this.props.changeData(this.field, this.state.input);
    }
  });
};

export { checkValidation };
