import React from "react";
import "../styles/ProfilePhoto.css";

class ProfilePhoto extends React.Component {
  constructor(props) {
    super(props);
    this.changeData = this.props.changeData;
    this.savePhotoSrc = this.savePhotoSrc.bind(this);
  }

  savePhotoSrc = (event) => {
    const file = event.target.files[0];
    const photoSrc = URL.createObjectURL(file);
    this.changeData("photoSrc", photoSrc);
  };

  render() {
    return (
      <div className="photo-container">
        {this.props.photoSrc === "" ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
            <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1v-1c0-1-1-4-6-4s-6 3-6 4v1a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12z" />
          </svg>
        ) : (
          <img src={this.props.photoSrc} alt="profile portrait"></img>
        )}
        <input
          className="upload-photo"
          type="file"
          id="profile-picture"
          name="profile-picture"
          accept="image/png, image/jpeg, image/svg, image/jpg"
          onChange={(event) => this.savePhotoSrc(event)}
        ></input>
        <label htmlFor="profile-picture">+ Upload photo</label>
        <div className="picture-desc">
          <span className="bold">Add a photo to your CV</span>
          <div>
            Supported file formats are .jpg .png . jpeg .svg.
            <br />
            There is no file size limit.
          </div>
        </div>
      </div>
    );
  }
}

export default ProfilePhoto;
