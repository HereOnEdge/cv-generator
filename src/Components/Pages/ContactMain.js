import React from "react";
import TextInput from "../TextInput";
import AddFieldButton from "../AddFieldButton";
import ProfilePhoto from "../ProfilePhoto";
import PreviewContainer from "../PreviewContainer";
import PreviewButton from "../PreviewButton";
import NavigationButtons from "../NavigationButtons";

class ContactMainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contact: {
        photoSrc: "",
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
        address: true,
      },
    };
    this.changeExtraFields = this.changeExtraFields.bind(this);
  }

  changeData = (field, value) => {
    this.setState((prevState) => {
      prevState.contact[field] = value;
      return {
        contact: prevState.contact,
      };
    });
  };

  changeExtraFields(fieldName, value) {
    this.setState((prevState) => {
      prevState.extraFields[fieldName] = value;
      return {
        extraFields: prevState.extraFields,
      };
    });
  }

  render() {
    return (
      <div className="contact-main main">
        <div className="contact-header header">
          <h1>What's the best way for employers to contact you? </h1>
          <p>We suggest including an email and phone number</p>
        </div>
        <div className="contact-body body">
          <div className="contact-photo">
            <ProfilePhoto
              changeData={this.changeData}
              photoSrc={this.state.contact.photoSrc}
            />
          </div>
          <div className="contact-form form">
            <TextInput
              className="contact-input half"
              label="FIRST NAME"
              changeData={this.changeData}
              field="firstName"
              placeHolder="e.g. Donald"
              validationType="text"
            />
            <TextInput
              className="contact-input half"
              label="LAST NAME"
              changeData={this.changeData}
              field="lastName"
              placeHolder="e.g. Trump"
              validationType="text"
            />
            <TextInput
              className="contact-input half"
              label="COUNTRY"
              changeData={this.changeData}
              field="country"
              placeHolder="e.g. UNITED STATES OF AMERICA"
              validationType="text"
            />
            <TextInput
              className="contact-input half"
              label="CITY/TOWN"
              changeData={this.changeData}
              field="city"
              placeHolder="e.g. New York"
              validationType="text"
            />
            <TextInput
              className="contact-input half"
              label="PHONE NUMBER"
              changeData={this.changeData}
              field="phone"
              placeHolder="e.g. 09120121212"
              validationType="phone"
            />
            <TextInput
              className="contact-input half"
              label="EMAIL"
              changeData={this.changeData}
              field="email"
              placeHolder="e.g. myemail@example.com"
              validationType="email"
            />
            <TextInput
              className="contact-input"
              label="ADDRESS"
              changeData={this.changeData}
              field="address"
              placeHolder="e.g. number 12, example st"
              changeField={this.changeExtraFields}
              visible={this.state.extraFields.address}
              removable={true}
              validationType="text"
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
              validationType="link"
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
              validationType="link"
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
              validationType="text"
            />
            <div className="moreInfoSection">
              <span className="bold">
                Add additional information to your CV
                <span className="small">(optional)</span>
              </span>
              <div className="contact-buttons">
                <AddFieldButton
                  name="website"
                  changeField={this.changeExtraFields}
                  hidden={this.state.extraFields.website}
                />
                <AddFieldButton
                  name="linkedin"
                  changeField={this.changeExtraFields}
                  hidden={this.state.extraFields.linkedin}
                />
                <AddFieldButton
                  name="nationality"
                  changeField={this.changeExtraFields}
                  hidden={this.state.extraFields.nationality}
                />
                <AddFieldButton
                  name="address"
                  changeField={this.changeExtraFields}
                  hidden={this.state.extraFields.address}
                />
                <div className="contact-preview">
                  <PreviewContainer
                    className="previewContainer"
                    data={this.props.data}
                    highlightArea={this.props.topic}
                  />
                  <PreviewButton />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="contact-foot">
          <NavigationButtons
            topic={"contact"}
            data={this.state.contact}
            editData={this.props.changeState}
            navLink={this.props.navLink}
            page={this.props.page}
            currentPageNode={this.props.currentPageNode}
            completedTopics={this.props.completedTopics}
          />
        </div>
      </div>
    );
  }
}

export default ContactMainPage;
