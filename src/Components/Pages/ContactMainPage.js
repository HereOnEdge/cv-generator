import React from "react";
import TextInput from "../Input/TextInput";
import AddFieldButton from "../Input/AddFieldButton";
import ProfilePhoto from "../ProfilePhoto";
import PreviewContainer from "../Preview/PreviewContainer";
import PreviewButton from "../Preview/PreviewButton";
import NavigationButtons from "../NavigationButtons/NavigationButtons";
import Preview from "../Preview/Preview";

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
      filledVitalInputs: false,
      showVitalInputs: false,
      previewData: { ...this.props.data },
    };
    this.changeExtraFields = this.changeExtraFields.bind(this);
  }

  changeData = (field, value) => {
    this.setState((prevState) => {
      if (field === "firstName" || field === "lastName") {
        value = value.charAt(0).toUpperCase() + value.slice(1);
      }
      prevState.contact[field] = value;
      this.props.changeState(
        prevState.contact,
        this.props.topic,
        this.props.page,
        this.props.currentPageNode,
        this.props.completedTopics,
        this.props.currentPageNode
      );
      prevState.previewData.contact = prevState.contact;
      return {
        contact: prevState.contact,
        previewData: prevState.previewData,
      };
    });
    this.checkVitalInputs();
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

  checkVitalInputs = () => {
    this.setState((prevState) => {
      prevState.filledVitalInputs =
        this.state.contact.email === "" ||
        this.state.contact.firstName === "" ||
        this.state.contact.lastName === ""
          ? false
          : true;
      return { filledVitalInputs: prevState.filledVitalInputs };
    });
  };
  showVitalInputs = () => {
    this.setState((prevState) => {
      prevState.showVitalInputs = this.state.filledVitalInputs ? false : true;
      return {
        showVitalInputs: prevState.showVitalInputs,
      };
    });
  };
  componentDidMount() {
    this.findPhotoSrc();
    this.findVisibleFields();
  }
  render() {
    return (
      <div className="main-container">
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
                isRed={
                  this.state[this.props.topic].firstName === "" &&
                  this.state.showVitalInputs
                    ? true
                    : false
                }
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
                isRed={
                  this.state[this.props.topic].lastName === "" &&
                  this.state.showVitalInputs
                    ? true
                    : false
                }
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
                isRed={
                  this.state[this.props.topic].email === "" &&
                  this.state.showVitalInputs
                    ? true
                    : false
                }
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
                data={this.state.previewData}
                changePreviewState={this.props.changePreviewState}
                topic={this.props.topic}
                page={this.props.page}
                cvDesign={this.props.cvDesign}
              />
              <PreviewButton
                changePreviewState={this.props.changePreviewState}
              />
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
              filledVitalInputs={this.state.filledVitalInputs}
              showVitalInputs={this.showVitalInputs}
            />
          </div>
        </div>
        {this.props.isPreviewVisible ? (
          <div className="preview-background">
            <Preview
              data={this.state.previewData}
              cvDesign={this.props.cvDesign}
              hasCloseButton={true}
              changePreviewState={this.props.changePreviewState}
            />
          </div>
        ) : null}
      </div>
    );
  }
}

export default ContactMainPage;
