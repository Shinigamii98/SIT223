import React from "react";
import { Link } from "react-router-dom";
import "./organizerLogIn.css";

class OrganizerLogIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div
        data-layer="99bbd441-06cf-4d8f-9523-458f510c1de0"
        className="organizerLogIn"
      >
        <div
          data-layer="df7fcd4c-f7a1-4643-8f3b-4752a49d3a8d"
          className="mainBg"
        ></div>
        <div
          data-layer="677e3464-97c2-4c8e-bbb7-2722eb89704f"
          className="sidebar"
        >
          <div
            data-layer="feebedfe-2d7a-4ba5-afbb-ddae23f18199"
            className="bg262e228c"
          ></div>
          <div
            data-layer="8a34bd5d-d75a-46b1-a9fa-271c9d790f25"
            className="linecad9de01"
          ></div>
        </div>
        <div
          data-layer="197feb4a-a4d9-40cb-be5f-5ae16c338a94"
          className="line"
        ></div>
        <div
          data-layer="3862a1ee-3659-4fc3-aa47-596e11823c94"
          className="count44bf8b17"
        >
          <input
            data-layer="386755ac-3ea5-4f40-952a-cb76eb770e41"
            className="bg7caf6344"
          ></input>
        </div>
        <div
          data-layer="14fcde8e-455c-4881-814c-20a902504d57"
          className="count"
        >
          <input
            data-layer="b40bc677-56ba-4a21-9dee-c6d32b1851a4"
            className="bg"
          ></input>
        </div>
        <Link to="/OrganizerHomePage">
          <div
            data-layer="170c9b7e-0236-4673-8f5b-39ad04220232"
            className="rectangle144"
          >
            <div
              data-layer="db35bbfd-d679-4d04-b5b7-0cf60b27dc60"
              className="name59e6cd67"
            >
              Log in
            </div>
          </div>
        </Link>
        <div
          data-layer="d84cc162-355a-458c-bf18-17b1528c133d"
          className="rectangle147"
        >
          <div
            data-layer="46dc4b34-a1bb-4495-b9f2-2fb46450b1c7"
            className="name"
          >
            Sign Up
          </div>
        </div>
        <div
          data-layer="032879c4-8916-4f30-a5a2-e85f9709ea34"
          className="title"
        >
          Please Enter Your login credentials :
        </div>
        <div
          data-layer="39a88baa-645c-41ed-a42e-f64ebd0eb092"
          className="emailAddress"
        >
          Email address
        </div>
        <div
          data-layer="07e350a1-8354-44e2-abd8-78d2aeb6746b"
          className="password"
        >
          Password
        </div>
      </div>
    );
  }
}

export default OrganizerLogIn;
