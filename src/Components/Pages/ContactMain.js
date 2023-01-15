import React from "react";
import TextInput from "../TextInput";

class ContactMainPage extends React.Component {
  constructor(props) {
    super(props);
    this.changeState = this.props.changeState;
    this.state = {
      firstName: "",
      lastName: "",
      country: "",
      city: "",
      address: "",
      phone: "",
      email: "",
      website: "",
    };
  }

  changeData = (field, value) => {
    this.setState({
      [field]: value,
    });
  };

  render() {
    return (
      <div>
        <h1>What's the best way for employers to contact you? </h1>
        <p>We suggest including an email and phone number</p>
        <TextInput
          className="contact-input half"
          label="FIRST NAME"
          changeData={this.changeData}
          field="firstName"
          placeHolder="e.g. Donald"
        />
        <TextInput
          className="contact-input half"
          label="LAST NAME"
          changeData={this.changeData}
          field="lastName"
          placeHolder="e.g. Trump"
        />
        <TextInput
          className="contact-input half"
          label="EMAIL"
          changeData={this.changeData}
          field="email"
          placeHolder="e.g. myemail@example.com"
        />
      </div>
    );
  }
}

export default ContactMainPage;
