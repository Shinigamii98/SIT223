import React from "react";
import { Link } from "react-router-dom";
import "./landingPage.css";

class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div
        data-layer="137e9b41-8595-413b-910a-bb45bf1ff339"
        className="landingPage"
      >
        <div
          data-layer="139657d2-026e-4f0f-a457-19f58be30ad1"
          className="mainBg"
        ></div>
        <div
          data-layer="d8f8290a-6d79-443c-9af8-4a32b45ffcd7"
          className="sidebar"
        >
          <div
            data-layer="820f5b15-1360-4fd3-990e-41bcbbefaaf7"
            className="bg"
          ></div>
          <div
            data-layer="35d55372-5c74-4314-a189-a2fb68723d6e"
            className="line8cb3cad3"
          ></div>
          <div
            data-layer="1d0d7421-d347-44c1-ad70-4456e34d99fe"
            className="line"
          ></div>
        </div>
        <div
          data-layer="1404fea1-15e4-4efa-879c-523a3f778d4b"
          className="titleacb0b1f3"
        >
          Are You a Student Or An Organizer ?
        </div>
        <Link to="/StudentRegisterPage">
          <div
            data-layer="614b274f-d642-4844-815d-8e78ef313865"
            className="group20"
          >
            <div
              data-layer="b2403b83-9b3e-47c0-98ce-8e8e85bf2778"
              className="title"
            >
              Student
            </div>
            <div
              data-layer="c8dca5d4-fdd0-4e9d-b4c4-14c7d34fcc77"
              className="group19"
            >
              <div
                data-layer="163d02b1-08d3-4e2e-96fc-dbae16b5afd1"
                className="kisspngStudentGroupStudentSociety5ae0b7c7908fe65183529015246765515921"
              ></div>
            </div>
          </div>
        </Link>
        <Link to="/OrganizerLoginPage">
          <div
            data-layer="6c8bd0fd-4c4e-4954-8c99-8ee43b6f61c5"
            className="group21"
          >
            <div
              data-layer="c8a4bdf0-8876-4de2-bd2c-80c0c248ffaa"
              className="titlea94abfd2"
            >
              Organizer
            </div>
            <div
              data-layer="94b0efe4-be20-4010-9fc5-b15ecf5f9d64"
              className="x3433437474employmentEmployeeImagesPng"
            ></div>
          </div>
        </Link>
      </div>
    );
  }
}

export default LandingPage;
