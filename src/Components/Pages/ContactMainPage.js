import { useContext, useState, useEffect } from "react";
import ProfilePhoto from "../ProfilePhoto";
import TextInput from "../Input/TextInput";
import AddFieldButton from "../Input/AddFieldButton";
import PreviewContainer from "../Preview/PreviewContainer";
import PreviewButton from "../Preview/PreviewButton";
import NavigationButtons from "../NavigationButtons/NavigationButtons";
import Preview from "../Preview/Preview";
import {
  TopicContext,
  PageContext,
  DataContext,
  CompletedTopicsContext,
  CurrentPageNodeContext,
  CvDesignContext,
  ChangeStateContext,
  IsPreviewVisibleContext,
  ChangePreviewStateContext,
} from "../../App";

const ContactMainPage = () => {
  // use the contexts we need
  const topic = useContext(TopicContext);
  const page = useContext(PageContext);
  const data = useContext(DataContext);
  const completedTopics = useContext(CompletedTopicsContext);
  const currentPageNode = useContext(CurrentPageNodeContext);
  const cvDesign = useContext(CvDesignContext);
  const changeState = useContext(ChangeStateContext);
  const isPreviewVisible = useContext(IsPreviewVisibleContext);
  const changePreviewState = useContext(ChangePreviewStateContext);

  // declare all the states
  const [contact, changeContact] = useState({
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
  });
  const [extraFields, changeExtraFields] = useState({
    website: false,
    linkedin: false,
    nationality: false,
    address: true,
  });
  const [filledVitalInputs, changeFilledVitalInputs] = useState(false);
  const [showVitalInputs, changeShowVitalInputs] = useState(false);

  // declare a function to change the main data's state
  const changeData = (field, value) => {
    // update the data
    changeContact((prevState) => {
      if (field === "firstName" || field === "lastName") {
        value = value.charAt(0).toUpperCase() + value.slice(1);
      }
      prevState[field] = value;
      changeState(
        prevState,
        topic,
        page,
        currentPageNode,
        completedTopics,
        currentPageNode
      );
      return prevState;
    });

    // check vital inputs to see if they are filled
    checkVitalInputs();
  };

  // declare a function to toggle Extra Fields visibility
  const changeExtraFieldsFunc = (fieldName, value) => {
    changeExtraFields((prevState) => {
      prevState[fieldName] = value;
      return prevState;
    });
  };

  //declare a function to update the photo source
  const findPhotoSrc = () => {
    if (data[topic] !== undefined) {
      changeContact((prevState) => {
        prevState.photoSrc = data.contact.photoSrc;
        return prevState;
      });
    }
  };

  // declare a function to find which Extra Field is visible and which is not
  const findVisibleFields = () => {
    if (data[topic] !== undefined) {
      for (let extraField in extraFields) {
        if (data[topic][extraField] !== "") {
          changeExtraFields((prevState) => {
            prevState[extraField] = true;
          });
        }
      }
    }
  };

  // declare a function to check if Vital Inputs are filled
  const checkVitalInputs = () => {
    changeFilledVitalInputs((prevState) => {
      return contact.email === "" ||
        contact.firstName === "" ||
        contact.lastName === ""
        ? false
        : true;
    });
  };

  // declare a function to highlight unfilled Vital Inputs
  const highlightVitalInputs = () => {
    changeShowVitalInputs((prevState) => {
      prevState = filledVitalInputs ? false : true;
      return prevState;
    });
  };

  // when component did mount
  useEffect(() => {
    // find the source of users's profile photo
    findPhotoSrc();
    // check which Extra Fields should be visible
    findVisibleFields();
  }, []);

  return (
    <div className="main-container">
      <div className="contact-main main">
        <div className="contact-header header">
          <h1>What's the best way for employers to contact you? </h1>
          <p>We suggest including an email and phone number</p>
        </div>
        <div className="contact-body body">
          <div className="contact-photo">
            <ProfilePhoto changeData={changeData} photoSrc={contact.photoSrc} />
          </div>
          <div className="contact-form form">
            <TextInput
              data={data}
              topic={topic}
              className="half"
              label="FIRST NAME"
              changeData={changeData}
              field="firstName"
              placeHolder="e.g. Donald"
              validationType="text"
              isRed={[topic].firstName === "" && showVitalInputs ? true : false}
            />
            <TextInput
              data={data}
              topic={topic}
              className="half"
              label="LAST NAME"
              changeData={changeData}
              field="lastName"
              placeHolder="e.g. Trump"
              validationType="text"
              isRed={[topic].lastName === "" && showVitalInputs ? true : false}
            />
            <TextInput
              data={data}
              topic={topic}
              className="half"
              label="COUNTRY"
              changeData={changeData}
              field="country"
              placeHolder="e.g. UNITED STATES OF AMERICA"
              validationType="text"
            />
            <TextInput
              data={data}
              topic={topic}
              className="half"
              label="CITY/TOWN"
              changeData={changeData}
              field="city"
              placeHolder="e.g. New York"
              validationType="text"
            />
            <TextInput
              data={data}
              topic={topic}
              className="half"
              label="PHONE NUMBER"
              changeData={changeData}
              field="phone"
              placeHolder="e.g. 09120121212"
              validationType="phone"
            />
            <TextInput
              data={data}
              topic={topic}
              className="half"
              label="EMAIL"
              changeData={changeData}
              field="email"
              placeHolder="e.g. myemail@example.com"
              validationType="email"
              isRed={[topic].email === "" && showVitalInputs ? true : false}
            />
            <TextInput
              data={data}
              topic={topic}
              className=""
              label="ADDRESS"
              changeData={changeData}
              field="address"
              placeHolder="e.g. number 12, example st"
              changeField={changeExtraFields}
              visible={extraFields.address}
              removable={true}
              validationType="text"
            />
            <TextInput
              data={data}
              topic={topic}
              className="half"
              label="WEBSITE"
              changeData={changeData}
              field="website"
              placeHolder="e.g. www.myWebsite.com"
              changeField={changeExtraFields}
              visible={extraFields.website}
              removable={true}
              validationType="link"
            />
            <TextInput
              data={data}
              topic={topic}
              className="half"
              label="Linkedin"
              changeData={changeData}
              field="linkedin"
              placeHolder="e.g. example.linkedin.com"
              changeField={changeExtraFields}
              visible={extraFields.linkedin}
              removable={true}
              validationType="link"
            />
            <TextInput
              data={data}
              topic={topic}
              className="half"
              label="NATIONALITY"
              changeData={changeData}
              field="nationality"
              placeHolder="e.g. Iranian"
              changeField={changeExtraFields}
              visible={extraFields.nationality}
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
                  changeField={changeExtraFieldsFunc}
                  hidden={extraFields.website}
                />
                <AddFieldButton
                  name="linkedin"
                  changeField={changeExtraFieldsFunc}
                  hidden={extraFields.linkedin}
                />
                <AddFieldButton
                  name="nationality"
                  changeField={changeExtraFieldsFunc}
                  hidden={extraFields.nationality}
                />
                <AddFieldButton
                  name="address"
                  changeField={changeExtraFieldsFunc}
                  hidden={extraFields.address}
                />
              </div>
            </div>
          </div>
          <div className="contact-preview whole-preview">
            <PreviewContainer
              data={data}
              changePreviewState={changePreviewState}
              topic={topic}
              page={page}
              cvDesign={cvDesign}
            />
            <PreviewButton changePreviewState={changePreviewState} />
          </div>
        </div>
        <div className="contact-foot foot">
          <NavigationButtons
            topic={topic}
            data={contact}
            editData={changeState}
            page={page}
            currentPageNode={currentPageNode}
            completedTopics={completedTopics}
            hasNext={currentPageNode.next === null ? false : true}
            hasBack={currentPageNode.back === null ? false : true}
            filledVitalInputs={filledVitalInputs}
            showVitalInputs={highlightVitalInputs}
          />
        </div>
      </div>
      {isPreviewVisible ? (
        <div className="preview-background">
          <Preview
            data={data}
            cvDesign={cvDesign}
            hasCloseButton={true}
            changePreviewState={changePreviewState}
          />
        </div>
      ) : null}
    </div>
  );
};
export default ContactMainPage;
