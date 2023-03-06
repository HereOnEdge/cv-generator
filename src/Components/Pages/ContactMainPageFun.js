import { useContext, useState, useEffect } from "react";

const ContactMainPage = (props) => {
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
      props.changeState(
        prevState,
        props.topic,
        props.page,
        props.currentPageNode,
        props.completedTopics,
        props.currentPageNode
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
    if (props.data[props.topic] !== undefined) {
      changeContact((prevState) => {
        prevState.photoSrc = props.data.contact.photoSrc;
        return prevState;
      });
    }
  };

  // declare a function to find which Extra Field is visible and which is not
  const findVisibleFields = () => {
    if (props.data[props.topic] !== undefined) {
      for (let extraField in extraFields) {
        if (props.data[props.topic][extraField] !== "") {
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
    showVitalInputs((prevState) => {
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
};
