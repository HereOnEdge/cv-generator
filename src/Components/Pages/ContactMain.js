import React from "react";
import TextInput from "../TextInput";

class ContactMainPage extends React.Component {
  constructor(props) {
    super(props);
    this.changeState = this.props.changeState;
    this.state = {
      contact: {
        firstName: "",
        lastName: "",
        country: "",
        city: "",
        address: "",
        phone: "",
        email: "",
        website: "",
        linkedin: "",
        nationality: "",
      },
      extraFields: {
        website: false,
        linkedin: false,
        nationality: false,
      },
    };
    this.changeExtraFields = this.changeExtraFields.bind(this);
  }

  changeData = (field, value) => {
    this.setState((prevState) => {
      prevState.contact[field] = value;
      return {
        contact: prevState,
      };
    });
  };

  changeExtraFields(fieldName, value) {
    this.setState((prevState) => {
      prevState.extraFields[fieldName] = value;
      return {
        extraFields: prevState,
      };
    });
  }

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
          className="contact-input"
          label="ADDRESS"
          changeData={this.changeData}
          field="address"
          placeHolder="e.g. number 12, example st"
        />
        <TextInput
          className="contact-input half"
          label="COUNTRY"
          changeData={this.changeData}
          field="country"
          placeHolder="e.g. UNITED STATES OF AMERICA"
        />
        <TextInput
          className="contact-input half"
          label="CITY/TOWN"
          changeData={this.changeData}
          field="city"
          placeHolder="e.g. New York"
        />
        <TextInput
          className="contact-input half"
          label="PHONE NUMBER"
          changeData={this.changeData}
          field="phone"
          placeHolder="e.g. 09120121212"
        />
        <TextInput
          className="contact-input half"
          label="EMAIL"
          changeData={this.changeData}
          field="email"
          placeHolder="e.g. myemail@example.com"
        />
        <TextInput
          className="contact-input half"
          label="WEBSITE"
          changeData={this.changeData}
          field="website"
          placeHolder="e.g. www.myWebsite.com"
          changeField={this.changeExtraFields}
          visible={this.state.extraFields.website}
          removable={true}
        />
        <TextInput
          className="contact-input half"
          label="linkedin"
          changeData={this.changeData}
          field="linkedin"
          placeHolder="e.g. example.linkedin.com"
          changeField={this.changeExtraFields}
          visible={this.state.extraFields.linkedin}
          removable={true}
        />
        <TextInput
          className="contact-input half"
          label="NATIONALITY"
          changeData={this.changeData}
          field="nationality"
          placeHolder="e.g. Iranian"
          changeField={this.changeExtraFields}
          visible={this.state.extraFields.nationality}
          removable={true}
        />
      </div>
    );
  }
}

export default ContactMainPage;
