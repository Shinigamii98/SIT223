import React from "react";
import { Link } from "react-router-dom";
import "./studentRegistration.css";

class StudentRegistration extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div
        data-layer="2486e441-87cd-4ccb-8720-c5a91dc4720e"
        className="studentRegistration"
      >
        <div
          data-layer="00f7ad5e-82b6-4918-935e-90d5fbd068e7"
          className="mainBg"
        ></div>
        <div
          data-layer="a9058bfa-1944-4a1f-b137-91994397b4d1"
          className="sidebar"
        >
          <div
            data-layer="a3de531a-8a4d-445b-baed-956cb3436089"
            className="bg9599847a"
          ></div>
          <div
            data-layer="b4e07bf7-1f95-4d78-80aa-1f43a66682d5"
            className="lineca7ff135"
          ></div>
        </div>
        <div
          data-layer="aef33771-ad49-45f9-802a-737074e9feb8"
          className="count836393a0"
        >
          <div
            data-layer="84497434-c27c-4890-a413-90b904180454"
            className="bg750f5bba"
          ></div>
        </div>
        <div
          data-layer="34bc98fc-6b09-4802-bc6f-f5a6873b4c78"
          className="line"
        ></div>
        <div
          data-layer="a25a05ce-0738-43c5-80e2-a90f65402881"
          className="count1b022824"
        >
          <input
            data-layer="e4ef3092-a522-4a5c-afdd-c107ddcfc53f"
            className="bgd165344f"
            onChange={(e) => localStorage.setItem("name", e.target.value)}
          ></input>
        </div>
        <div
          data-layer="0a24ac82-befa-4512-b44b-8c820cfb8f1b"
          className="count4baa5584"
        >
          <input
            type="date"
            data-layer="98017035-8f6c-4083-90d6-c07ef6e4f0ac"
            className="bgb332079b"
            onChange={(e) => localStorage.setItem("dob", e.target.value)}
          ></input>
        </div>
        <div
          data-layer="52607712-3b02-4a1d-9ea4-5fd7a15839f3"
          className="count85da7a80"
        >
          <input
            data-layer="bbb28b96-ee27-474f-937a-9b43dd627151"
            className="bg96a2049b"
          ></input>
        </div>
        <div
          data-layer="97dbf0cb-75ab-4069-bc41-49d87bf11335"
          className="counta9a5ff1a"
        >
          <input
            data-layer="83cec989-56ae-48ac-9f51-13e549118e78"
            className="bg8cc5bdeb"
          ></input>
        </div>
        <div
          data-layer="39a2c0b7-9cf6-41fb-8cca-e279ab5b38b7"
          className="count"
        >
          <input
            data-layer="c19cedc8-58ed-4d92-8f01-d62545ffdf11"
            className="bg"
          ></input>
        </div>
        <input
          type="checkbox"
          data-layer="c214f54c-f88d-4060-925f-e293fa3c7cf5"
          className="checkbox"
        ></input>
        <div
          data-layer="29e58f24-5877-4bea-bebb-fbd533c9b01e"
          className="title"
        >
          Please Enter Your Details :
        </div>
        <div
          data-layer="07e637e5-a90d-4a3b-a649-b11310fb07cb"
          className="fullName"
        >
          Full Name
        </div>
        <div
          data-layer="acfe77fa-7cf8-4a7d-b224-a3359b7c597f"
          className="emailAddress"
        >
          Email Address
        </div>
        <div
          data-layer="cac8bc3c-0b82-4342-b928-be2c172378ee"
          className="dateOfBirth"
        >
          Date of Birth
        </div>
        <div
          data-layer="5a62da79-9b24-466c-80e7-8e7e1a9d4ffc"
          className="address"
        >
          Address
        </div>
        <div
          data-layer="193720bc-b6c6-4494-bda4-c41b4bdf85cd"
          className="studentId"
        >
          Student ID
        </div>
        <div
          data-layer="58ef334c-aa57-4a05-bd64-cf9624fe644b"
          className="iAgreeToTheTermsAndConditions"
        >
          I agree to the terms and conditions
        </div>
        <Link to="/StudentHomePage">
          <div
            data-layer="9b5658b7-b037-456d-b0cb-1f6a0b8b1c4c"
            className="rectangle144"
          >
            <div
              data-layer="7606f007-2e38-45b1-bd04-909d6519dd2b"
              className="name"
            >
              Submit
            </div>
          </div>
        </Link>
      </div>
    );
  }
}

export default StudentRegistration;
