import React from "react";

class ContactPreview extends React.Component {
  constructor(props) {
    super(props);
    this.findFullName();
    this.createPhoneElement();
    this.createEmailElement();
    this.createAddressElement();
    this.createNationalityElement();
    this.createWebsiteElement();
    this.createLinkedinElement();
    this.contactDataElement = (
      <div className="contact-data-container">
        {this.emailElement}
        {this.websiteElement}
        {this.phoneElement}
        {this.linkedinElement}
        {this.addressElement}
        {this.nationalityElement}
      </div>
    );
  }
  findFullName = () => {
    this.fullName =
      this.props.data !== null && this.props.data.firstName !== undefined
        ? `${this.props.data.firstName} ${this.props.data.lastName}`
        : "Your Name";
  };
  createPhoneElement = () => {
    this.phoneElement =
      this.props.data !== null && this.props.data.phone !== undefined ? (
        this.props.data.phone === "" ? (
          ""
        ) : (
          <div className="phone-container">
            <div
              className="svg-container"
              style={{ backgroundColor: this.props.cvDesign.color }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="6"
                height="6"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
              </svg>
            </div>
            <span className="phone-data">
              {this.props.data.phone !== undefined ? (
                <a href={`tel:${this.props.data.phone}`}>
                  {this.props.data.phone}
                </a>
              ) : (
                "0912 121 2121"
              )}
            </span>
          </div>
        )
      ) : null;
  };
  createEmailElement = () => {
    this.emailSvg = (
      <div
        className="svg-container"
        style={{ backgroundColor: this.props.cvDesign.color }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
        </svg>
      </div>
    );
    this.emailElement =
      this.props.data !== null && this.props.data.email !== undefined ? (
        <div className="email-container">
          {this.emailSvg}
          <a className="email-data" href={`mailto:${this.props.data.email}`}>
            {this.props.data.email}
          </a>
        </div>
      ) : (
        <div className="email-container">
          {this.emailSvg}
          <span className="email-data">reza99maleki77@gmail.com</span>
        </div>
      );
  };
  createAddressElement = () => {
    this.addressSvg = (
      <div className="svg-container">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
        </svg>
      </div>
    );
    if (this.props.data !== null) {
      this.countryData =
        this.props.data.country !== undefined && this.props.data.country !== ""
          ? `${this.props.data.country}, `
          : "";
      this.cityData =
        this.props.data.city !== undefined && this.props.data.city !== ""
          ? `${this.props.data.city}, `
          : "";
      this.addressElement =
        (this.props.data.address === undefined &&
          this.props.data.country === undefined &&
          this.props.data.city === undefined) ||
        (this.props.data.address === "" &&
          this.props.data.country === "" &&
          this.props.data.city === "") ? null : (
          <div className="address-container">
            {this.addressSvg}
            <span className="address-data">{`${this.countryData}${
              this.cityData
            }${
              this.props.data.address !== undefined
                ? this.props.data.address
                : ""
            }`}</span>
          </div>
        );
    }
  };
  createNationalityElement = () => {
    this.nationalityElement =
      this.props.data !== null &&
      this.props.data.nationality !== undefined &&
      this.props.data.nationality !== "" ? (
        <div className="nationality-container">
          <div className="svg-container">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0ZM2.04 4.326c.325 1.329 2.532 2.54 3.717 3.19.48.263.793.434.743.484-.08.08-.162.158-.242.234-.416.396-.787.749-.758 1.266.035.634.618.824 1.214 1.017.577.188 1.168.38 1.286.983.082.417-.075.988-.22 1.52-.215.782-.406 1.48.22 1.48 1.5-.5 3.798-3.186 4-5 .138-1.243-2-2-3.5-2.5-.478-.16-.755.081-.99.284-.172.15-.322.279-.51.216-.445-.148-2.5-2-1.5-2.5.78-.39.952-.171 1.227.182.078.099.163.208.273.318.609.304.662-.132.723-.633.039-.322.081-.671.277-.867.434-.434 1.265-.791 2.028-1.12.712-.306 1.365-.587 1.579-.88A7 7 0 1 1 2.04 4.327Z" />
            </svg>
          </div>
          <span className="nationality-data">
            {this.props.data.nationality}
          </span>
        </div>
      ) : null;
  };
  createWebsiteElement = () => {
    this.websiteElement =
      this.props.data !== null &&
      this.props.data.website !== undefined &&
      this.props.data.website !== "" ? (
        <div className="website-container">
          <div className="svg-container">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z" />
            </svg>
          </div>
          <a
            className="website-data"
            href={`https://${this.props.data.website}`}
            target="_blank"
            rel="noreferrer"
          >
            {this.props.data.website}
          </a>
        </div>
      ) : null;
  };
  createLinkedinElement = () => {
    this.linkedinElement =
      this.props.data !== null &&
      this.props.data.linkedin !== undefined &&
      this.props.data.linkedin !== "" ? (
        <div className="linkedin-container">
          <div className="svg-container">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
            </svg>
          </div>
          <a
            className="linkedin-data"
            href={this.props.data.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            {this.props.data.linkedin}
          </a>
        </div>
      ) : null;
  };
  componentDidUpdate() {
    this.findFullName();
    this.createPhoneElement();
    this.createEmailElement();
    this.createAddressElement();
    this.createNationalityElement();
    this.createWebsiteElement();
    this.createLinkedinElement();
    this.contactDataElement = (
      <div className="contact-data-container">
        {this.emailElement}
        {this.websiteElement}
        {this.phoneElement}
        {this.linkedinElement}
        {this.addressElement}
        {this.nationalityElement}
      </div>
    );
  }
  render() {
    return (
      <div
        className={`contact-continer ${
          this.props.highlightArea === "contact" ? "highlight" : null
        }`}
      >
        <h1
          className="preview-header"
          style={{
            fontSize: `${parseInt(this.props.cvDesign.headingSize) + 2}em`,
          }}
        >
          {this.fullName}
        </h1>
        {this.contactDataElement}
      </div>
    );
  }
}

export default ContactPreview;
