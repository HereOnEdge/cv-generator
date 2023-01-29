import React from "react";
import TextInput from "../Input/TextInput";
import AddFieldButton from "../Input/AddFieldButton";
import ProfilePhoto from "../ProfilePhoto";
import PreviewContainer from "../Preview/PreviewContainer";
import PreviewButton from "../Preview/PreviewButton";
import NavigationButtons from "../NavigationButtons/NavigationButtons";
// import "../../styles/ContactMain.css";

class ContactMainPage extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.data);
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

  findPhotoSrc() {
    if (this.props.data[this.props.topic] !== undefined) {
      this.setState((prevState) => {
        prevState.contact.photoSrc = this.props.data.contact.photoSrc;
        return { contact: prevState.contact };
      });
    }
  }

  findVisibleFields() {
    if (this.props.data[this.props.topic] !== undefined) {
      for (let extraField in this.state.extraFields) {
        if (this.props.data[this.props.topic][extraField] !== "") {
          this.setState((prevState) => {
            prevState.extraFields[extraField] = true;
          });
        }
      }
    }
  }

  componentDidMount() {
    this.findPhotoSrc();
    this.findVisibleFields();
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
              className="half"
              label="FIRST NAME"
              changeData={this.changeData}
              field="firstName"
              placeHolder="e.g. Donald"
              validationType="text"
              data={this.props.data}
              topic={this.props.topic}
            />
            <TextInput
              className="half"
              label="LAST NAME"
              changeData={this.changeData}
              field="lastName"
              placeHolder="e.g. Trump"
              validationType="text"
              data={this.props.data}
              topic={this.props.topic}
            />
            <TextInput
              className="half"
              label="COUNTRY"
              changeData={this.changeData}
              field="country"
              placeHolder="e.g. UNITED STATES OF AMERICA"
              validationType="text"
              data={this.props.data}
              topic={this.props.topic}
            />
            <TextInput
              className="half"
              label="CITY/TOWN"
              changeData={this.changeData}
              field="city"
              placeHolder="e.g. New York"
              validationType="text"
              data={this.props.data}
              topic={this.props.topic}
            />
            <TextInput
              className="half"
              label="PHONE NUMBER"
              changeData={this.changeData}
              field="phone"
              placeHolder="e.g. 09120121212"
              validationType="phone"
              data={this.props.data}
              topic={this.props.topic}
            />
            <TextInput
              className="half"
              label="EMAIL"
              changeData={this.changeData}
              field="email"
              placeHolder="e.g. myemail@example.com"
              validationType="email"
              data={this.props.data}
              topic={this.props.topic}
            />
            <TextInput
              className=""
              label="ADDRESS"
              changeData={this.changeData}
              field="address"
              placeHolder="e.g. number 12, example st"
              changeField={this.changeExtraFields}
              visible={this.state.extraFields.address}
              removable={true}
              validationType="text"
              data={this.props.data}
              topic={this.props.topic}
            />
            <TextInput
              className="half"
              label="WEBSITE"
              changeData={this.changeData}
              field="website"
              placeHolder="e.g. www.myWebsite.com"
              changeField={this.changeExtraFields}
              visible={this.state.extraFields.website}
              removable={true}
              validationType="link"
              data={this.props.data}
              topic={this.props.topic}
            />
            <TextInput
              className="half"
              label="Linkedin"
              changeData={this.changeData}
              field="linkedin"
              placeHolder="e.g. example.linkedin.com"
              changeField={this.changeExtraFields}
              visible={this.state.extraFields.linkedin}
              removable={true}
              validationType="link"
              data={this.props.data}
              topic={this.props.topic}
            />
            <TextInput
              className="half"
              label="NATIONALITY"
              changeData={this.changeData}
              field="nationality"
              placeHolder="e.g. Iranian"
              changeField={this.changeExtraFields}
              visible={this.state.extraFields.nationality}
              removable={true}
              validationType="text"
              data={this.props.data}
              topic={this.props.topic}
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
              </div>
            </div>
          </div>
          <div className="contact-preview whole-preview">
            <PreviewContainer
              data={this.props.data}
              highlightArea={this.props.topic}
            />
            <PreviewButton />
          </div>
        </div>
        <div className="contact-foot foot">
          <NavigationButtons
            topic={this.props.topic}
            data={this.state.contact}
            editData={this.props.changeState}
            page={this.props.page}
            currentPageNode={this.props.currentPageNode}
            completedTopics={this.props.completedTopics}
            hasNext={this.props.currentPageNode.next === null ? false : true}
            hasBack={this.props.currentPageNode.back === null ? false : true}
          />
        </div>
      </div>
    );
  }
}

export default ContactMainPage;
