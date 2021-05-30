import React from "react";
import { Link } from "react-router-dom";
import "./studentHomePage.css";

class StudentHomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: "1st",
    };
  }

  render() {
    let { date } = this.state;
    return (
      <div
        data-layer="98e0bbc5-0f47-4c6d-b38f-8996cb8268af"
        className="studentHomePage"
      >
        <div
          data-layer="22988ec0-d3b9-4db5-9e63-1b1e1c3761bf"
          className="mainBg"
        ></div>
        <div
          data-layer="dc48df1e-2d94-4494-a890-d88dcc9fa74c"
          className="sidebar"
        >
          <div
            data-layer="df43210b-96d2-46fd-bae7-01ebc69a7ed3"
            className="bg01f0e3fb"
          ></div>
          <div
            data-layer="b395a6d5-f0cd-4cb0-a0a2-c49d425f0e48"
            className="line2df0eea1"
          ></div>
          <div
            data-layer="9a330e06-4bcd-4100-8cf3-5486f78d5a28"
            className="line6be02d8a"
          ></div>
          <Link to="/LandingPage">
            <div
              data-layer="31ee7356-0758-4070-a8d5-a3e6c70d8d26"
              className="menu"
            >
              Logout
            </div>
            <div
              data-layer="7c28fed0-324c-4d89-b638-43fe1bdb6e71"
              className="loguot"
            >
              <svg
                data-layer="2af3604d-6c0c-49f5-b525-9ed867942250"
                preserveAspectRatio="none"
                viewBox="-0.75 -0.75 20.27490234375 13.9599609375"
                className="path31"
              >
                <path d="M 0 7.4794921875 L 13.66546630859375 7.4794921875 L 10.20849609375 10.6064453125 L 11.88525390625 12.4599609375 L 18.77490234375 6.2294921875 L 11.88525390625 0 L 10.20849609375 1.853515625 L 13.6651611328125 4.9794921875 L 0 4.9794921875 L 0 7.4794921875 Z" />
              </svg>
              <svg
                data-layer="b40dd319-9684-4432-9dd2-f39989e4af69"
                preserveAspectRatio="none"
                viewBox="-0.75 -0.75 25.8134765625 30.3046875"
                className="path32"
              >
                <path d="M 24.3134765625 0 L 0 0 L 0 6.09765625 L 2.5 6.09765625 L 2.5 2.5 L 21.8134765625 2.5 L 21.8134765625 26.3046875 L 2.5 26.3046875 L 2.5 22.64453125 L 0 22.64453125 L 0 28.8046875 L 24.3134765625 28.8046875 L 24.3134765625 0 Z" />
              </svg>
            </div>
          </Link>
          <div
            data-layer="fb65a3ae-af09-4bad-86fa-f8f555414810"
            className="calendare572cade"
          >
            <div
              data-layer="a950906c-b312-4453-a3e9-278f15ed0838"
              className="bg726a6d1a"
            ></div>
            <div
              data-layer="223e374f-d495-46f4-b242-c22b6ca638e3"
              className="linec08025ff"
            ></div>
            <div
              data-layer="f8d60927-c396-4f07-9a20-6c242816e787"
              className="title72e37b0d"
            >
              Calendar
            </div>
            <svg
              data-layer="4eb23822-6013-4f0a-9fd3-38edd0699591"
              preserveAspectRatio="none"
              viewBox="-1337.3148193359375 539.2752075195312 17.91796875 17.918701171875"
              className="info85c342b0"
            >
              <path d="M -1336.564819335938 548.234130859375 C -1336.564819335938 543.6998901367188 -1332.889282226563 540.0252075195313 -1328.35595703125 540.0252075195313 C -1323.82177734375 540.0252075195313 -1320.14697265625 543.6998901367188 -1320.14697265625 548.234130859375 C -1320.14697265625 552.768310546875 -1323.82177734375 556.4439086914063 -1328.35595703125 556.4439086914063 C -1332.889282226563 556.4439086914063 -1336.564819335938 552.768310546875 -1336.564819335938 548.234130859375 Z M -1335.56494140625 548.234130859375 C -1335.56494140625 552.2094116210938 -1332.330322265625 555.4440307617188 -1328.35595703125 555.4440307617188 C -1324.379760742188 555.4440307617188 -1321.14697265625 552.2094116210938 -1321.14697265625 548.234130859375 C -1321.14697265625 544.2587890625 -1324.379760742188 541.0250854492188 -1328.35595703125 541.0250854492188 C -1332.330322265625 541.0250854492188 -1335.56494140625 544.2587890625 -1335.56494140625 548.234130859375 Z M -1328.85546875 552.1923217773438 L -1328.85546875 546.5628051757813 L -1327.855590820313 546.5628051757813 L -1327.855590820313 552.1923217773438 L -1328.85546875 552.1923217773438 Z M -1328.85546875 545.4486083984375 L -1328.85546875 544.2767944335938 L -1327.855590820313 544.2767944335938 L -1327.855590820313 545.4486083984375 L -1328.85546875 545.4486083984375 Z" />
            </svg>
            <div
              data-layer="f2f36b27-8089-415d-8ed3-eec3a9ed43fb"
              className="calendar66588a46"
            >
              <div
                data-layer="1c78432e-61c7-4676-93a7-e6154a59228f"
                className="group27"
                onClick={() => this.setState({ date: "6th" })}
              >
                <div
                  data-layer="1d93b147-84b8-48ee-b4e7-0965d50bcfd1"
                  className="bgfe666171"
                ></div>
              </div>
              <div
                data-layer="e288932d-57b6-42fa-9bd1-0b0c4c713138"
                className="x0d7cc8380"
              >
                6
              </div>
              <div
                data-layer="a3b8af17-f670-4952-8896-fc34853b4648"
                className="group35"
                onClick={() => this.setState({ date: "13th" })}
              >
                <div
                  data-layer="fbc6b8b0-3891-4ca4-94d7-fadd075a04ea"
                  className="bg70431295"
                ></div>
                <div
                  data-layer="13275cbe-3d2f-4386-8e68-309c2a4b0eb2"
                  className="x04ea87b51"
                >
                  13
                </div>
              </div>
              <svg
                data-layer="90cad9d8-23e7-4ed3-962c-c002d5b4b005"
                preserveAspectRatio="none"
                viewBox="-0.75 39.25 1.5 1.5"
                className="bg7dacfa86"
              >
                <path d="M 0 40 L 0 40 Z" />
              </svg>
              <div
                data-layer="489a1c9b-9a9f-4a94-992a-67b1075dc5e0"
                className="group42"
                onClick={() => this.setState({ date: "20th" })}
              >
                <div
                  data-layer="e8ffefd9-d1d2-4e62-8356-789307abc9b2"
                  className="bg0ef49807"
                ></div>
                <div
                  data-layer="15d87507-ec38-4794-bbb5-3c396d2e8c5b"
                  className="x0e96002ef"
                >
                  20
                </div>
              </div>
              <div
                data-layer="980b4907-a3d3-4037-9874-ebe26c3ac4d3"
                className="group49"
                onClick={() => this.setState({ date: "27th" })}
              >
                <div
                  data-layer="c93dfc7a-f08f-4482-b27a-18d706655e2b"
                  className="bg00a21aff"
                ></div>
                <div
                  data-layer="797f8d42-86cd-4ace-aef4-e5918707af81"
                  className="x026846e9c"
                >
                  27
                </div>
              </div>
              <div
                data-layer="e33dfa84-6dee-4bea-bffb-074a718ef0ca"
                className="group26"
                onClick={() => this.setState({ date: "5th" })}
              >
                <div
                  data-layer="0c65dd15-3641-4163-a9e6-242020073291"
                  className="bg25a9800e"
                ></div>
                <div
                  data-layer="6900bced-d947-42a2-9a99-75b9b250b7c4"
                  className="x0bd6e2637"
                >
                  5
                </div>
              </div>
              <div
                data-layer="0208a438-c667-46a0-97da-efa6fe20b027"
                className="group34"
                onClick={() => this.setState({ date: "12th" })}
              >
                <div
                  data-layer="b73531b7-b97b-4bd7-b1b3-e842492d6810"
                  className="bg79d193d3"
                ></div>
                <div
                  data-layer="c9048f75-da8d-43e8-be44-b32986c07439"
                  className="x09cb0984a"
                >
                  12
                </div>
              </div>
              <div
                data-layer="33a13f1a-564a-4082-8bbc-60661a7abe53"
                className="group41"
                onClick={() => this.setState({ date: "19th" })}
              >
                <div
                  data-layer="0cdd3ee9-8acd-4778-8b2a-e47e3d2ed319"
                  className="bg44f55678"
                ></div>
                <div
                  data-layer="332c360d-630d-47fe-8890-ac414635a625"
                  className="x0c86f54cf"
                >
                  19
                </div>
              </div>
              <div
                data-layer="67ee0a2a-0120-43e9-80cc-a2754f0aed55"
                className="group48"
                onClick={() => this.setState({ date: "26th" })}
              >
                <div
                  data-layer="e3939294-ce12-4977-943a-9596d831d5ed"
                  className="bg5c3f9b15"
                ></div>
                <div
                  data-layer="e0d9f05e-f7fc-4d36-8077-e2f6a10bb969"
                  className="x0ebc76363"
                >
                  26
                </div>
              </div>
              <div
                data-layer="8a9eccc1-86f2-4b04-8ab2-ca69436b8e77"
                className="group25"
                onClick={() => this.setState({ date: "4th" })}
              >
                <div
                  data-layer="fd038fd8-81d2-49cf-8617-eb817e2d76ad"
                  className="bg134c9f20"
                ></div>
                <div
                  data-layer="6e3f8c7e-1de8-4d9c-947e-794a9be2d7e6"
                  className="x064ce653f"
                >
                  4
                </div>
              </div>
              <div
                data-layer="1c092a51-7a6e-482f-b756-974e0e67850d"
                className="group33"
                onClick={() => this.setState({ date: "11th" })}
              >
                <div
                  data-layer="1521c4c4-c826-4f15-a7f1-fa70c6d5630a"
                  className="bg0145c6e1"
                ></div>
                <div
                  data-layer="b103996e-29ab-4dfe-9838-4404712fd373"
                  className="x02a2e9511"
                >
                  11
                </div>
              </div>
              <div
                data-layer="37276afa-c22d-455b-8082-ebc1d5a12b80"
                className="group40"
                onClick={() => this.setState({ date: "18th" })}
              >
                <div
                  data-layer="9550e6a1-a07b-44fb-9d4b-fbfd4925d3d5"
                  className="bgf1b5884a"
                ></div>
                <div
                  data-layer="08ea4da6-361a-4eab-88d7-a5eb5f184234"
                  className="x002d7b690"
                >
                  18
                </div>
              </div>
              <div
                data-layer="27ec224a-f600-44ac-a115-88a4117a4fea"
                className="group47"
                onClick={() => this.setState({ date: "25th" })}
              >
                <div
                  data-layer="eba65482-1d94-44d8-9c48-b4cf9bba34e1"
                  className="bg8bdb06c4"
                ></div>
                <div
                  data-layer="491da47c-51b1-4afb-ba27-56722e448bc8"
                  className="x09fd23303"
                >
                  25
                </div>
              </div>
              <div
                data-layer="3d852818-2674-4f9e-bc57-83d7a2bc6b71"
                className="group24"
                onClick={() => this.setState({ date: "3rd" })}
              >
                <svg
                  data-layer="204ed77b-a2fc-4cca-beb9-fc9707f9db88"
                  preserveAspectRatio="none"
                  viewBox="-0.75 -0.75 41.5 41.5"
                  className="bgf0828ee8"
                >
                  <path d="M 8 0 L 32 0 C 36.41827774047852 0 40 3.581721782684326 40 8 L 40 32 C 40 36.41827774047852 36.41827774047852 40 32 40 L 8 40 C 3.581721782684326 40 0 36.41827774047852 0 32 L 0 8 C 0 3.581721782684326 3.581721782684326 0 8 0 Z" />
                </svg>
                <div
                  data-layer="c4375c78-2fa0-48b7-ad7c-2b1d878ef13b"
                  className="x000bc41fe"
                >
                  3
                </div>
              </div>
              <div
                data-layer="02559a17-fd99-4d04-b076-bbd9fd8cb091"
                className="group32"
                onClick={() => this.setState({ date: "10th" })}
              >
                <div
                  data-layer="a3697e2a-f085-4c57-90c7-e670ce16bea8"
                  className="bg46dc2604"
                ></div>
                <div
                  data-layer="3c01e39c-f326-415d-a189-1794bb6fa4d9"
                  className="x08834c5ad"
                >
                  10
                </div>
              </div>
              <div
                data-layer="4516e10f-4e68-4b35-b7b3-e62e0815fb47"
                className="group39"
                onClick={() => this.setState({ date: "17th" })}
              >
                <div
                  data-layer="a7bd1c87-afaa-488b-8ae7-b1c58ba07bc4"
                  className="bg1407d9d3"
                ></div>
                <div
                  data-layer="24666de5-d8e3-4897-a0f4-92ff3ae19584"
                  className="x03c29fa4d"
                >
                  17
                </div>
              </div>
              <div
                data-layer="55496c06-61a1-4da0-97de-be527c6d2f11"
                className="group46"
                onClick={() => this.setState({ date: "24th" })}
              >
                <div
                  data-layer="f0950e8a-eaee-4cc4-9a75-02baef827a83"
                  className="bg6954ada0"
                ></div>
                <div
                  data-layer="a44cb01d-635e-49f9-a580-1dd42138062e"
                  className="x03d2727c0"
                >
                  24
                </div>
              </div>
              <div
                data-layer="353acb0f-1e41-48ab-aba5-4f715979b6d8"
                className="group53"
                onClick={() => this.setState({ date: "31st" })}
              >
                <div
                  data-layer="ec3bc6e1-353e-4ca5-8e3f-02dcef37f725"
                  className="bg13da5ca0"
                ></div>
                <div
                  data-layer="2f311d41-4efd-49c3-b9bf-1f9e78c6b862"
                  className="x0a1923530"
                >
                  31
                </div>
              </div>
              <div
                data-layer="8731cc4a-3224-46fa-a00d-651c2b834079"
                className="group23"
                onClick={() => this.setState({ date: "2nd" })}
              >
                <svg
                  data-layer="f6dd1e6f-b2b6-4de2-8f5b-fa99c1a26211"
                  preserveAspectRatio="none"
                  viewBox="-0.75 -0.75 41.5 41.5"
                  className="bg1775d0a3"
                >
                  <path d="M 8 0 L 32 0 C 36.41827774047852 0 40 3.581721782684326 40 8 L 40 32 C 40 36.41827774047852 36.41827774047852 40 32 40 L 8 40 C 3.581721782684326 40 0 36.41827774047852 0 32 L 0 8 C 0 3.581721782684326 3.581721782684326 0 8 0 Z" />
                </svg>
                <div
                  data-layer="49221f84-c593-4692-a3c9-3180edea5453"
                  className="x02337ffc7"
                >
                  2
                </div>
              </div>
              <div
                data-layer="198eec77-9fef-4db9-b246-e3c2932e12d7"
                className="group31"
                onClick={() => this.setState({ date: "9th" })}
              >
                <div
                  data-layer="b3e93bee-cb08-4ae9-951e-66aa55fc84af"
                  className="bga3eaa28a"
                ></div>
                <div
                  data-layer="0baf5a18-ba26-4c55-9362-c5b1ab36946a"
                  className="x0d2786d1d"
                >
                  9
                </div>
              </div>
              <div
                data-layer="e2ae3fd3-1fc9-4425-8138-1f029fdb0d04"
                className="group38"
                onClick={() => this.setState({ date: "16th" })}
              >
                <div
                  data-layer="16368fd9-4e2e-4b46-a2f9-4fcbb3b9e22f"
                  className="bg6dc988af"
                ></div>
                <div
                  data-layer="a42a3931-46f4-4492-b894-7b19e9dec23c"
                  className="x05eb71aaa"
                >
                  16
                </div>
              </div>
              <div
                data-layer="fcf86aa9-9951-4eaa-beb0-bc0ff7107b13"
                className="group45"
                onClick={() => this.setState({ date: "23rd" })}
              >
                <div
                  data-layer="3fec9a2c-a578-453a-9696-4951b506ae6b"
                  className="bge4733280"
                ></div>
                <div
                  data-layer="3c8b4036-c777-468f-b71a-6e70bfbe3e61"
                  className="x0d7fa3fcf"
                >
                  23
                </div>
              </div>
              <div
                data-layer="93f6b144-cbde-4920-9caf-b7101471d37d"
                className="group52"
                onClick={() => this.setState({ date: "30th" })}
              >
                <div
                  data-layer="db9693f8-76d4-45ea-b812-18627f2a1d65"
                  className="bg0d28c5e1"
                ></div>
                <div
                  data-layer="7ae93951-de7f-4b1e-9f46-451c9bb62a5e"
                  className="x084b18aae"
                >
                  30
                </div>
              </div>
              <div
                data-layer="00ebf7c3-a2d3-41db-add1-08808eed2de0"
                className="group22"
                onClick={() => this.setState({ date: "1st" })}
              >
                <svg
                  data-layer="7aacae49-eda6-41fc-adc1-6d4c417ac9c3"
                  preserveAspectRatio="none"
                  viewBox="-0.75 -0.75 41.5 41.5"
                  className="bgbd2140ec"
                >
                  <path d="M 8 0 L 32 0 C 36.41827774047852 0 40 3.581721782684326 40 8 L 40 32 C 40 36.41827774047852 36.41827774047852 40 32 40 L 8 40 C 3.581721782684326 40 0 36.41827774047852 0 32 L 0 8 C 0 3.581721782684326 3.581721782684326 0 8 0 Z" />
                </svg>
                <div
                  data-layer="b78ef9de-4774-4f2d-9d0d-62da11954d96"
                  className="x0e5b41e74"
                >
                  1
                </div>
              </div>
              <div
                data-layer="21058aa5-2247-4cf7-b095-683d19f0b30f"
                className="group30"
              >
                <div
                  data-layer="a862a0f3-f1bc-425d-aa7f-62946214209f"
                  className="bgdf0ae23a"
                ></div>
                <div
                  data-layer="33efad43-c319-4da3-b452-df9c5a3ab6d3"
                  className="group29"
                  onClick={() => this.setState({ date: "8th" })}
                >
                  <div
                    data-layer="7b437861-bbe9-4c10-bb19-a7828f5f3b39"
                    className="x09a8ffbb6"
                  >
                    8
                  </div>
                </div>
              </div>
              <div
                data-layer="5032803d-7125-4f67-bf3a-f5eb0f94f3d2"
                className="group37"
                onClick={() => this.setState({ date: "15th" })}
              >
                <div
                  data-layer="1b0f3fa3-ae5f-4fe4-89d3-930852e0e5a4"
                  className="bgdd620255"
                ></div>
                <div
                  data-layer="696e30cf-ecd3-4c7d-a593-4b14542c7aec"
                  className="x0d4720dcf"
                >
                  15
                </div>
              </div>
              <div
                data-layer="98e66515-a737-4c88-b614-a2ce75c66e23"
                className="group44"
                onClick={() => this.setState({ date: "22nd" })}
              >
                <div
                  data-layer="5969be4e-8363-4b18-92bc-f76629de22d0"
                  className="bg7ebb3b8d"
                ></div>
                <div
                  data-layer="1103bc9f-a435-4d55-92ed-3b992e1dd4bb"
                  className="x00c82ea22"
                >
                  22
                </div>
              </div>
              <div
                data-layer="cd0afb2e-a552-4272-ad7a-9389f0f035cf"
                className="group51"
                onClick={() => this.setState({ date: "29th" })}
              >
                <div
                  data-layer="084c178b-0b12-4743-9670-0f97ac3c6e25"
                  className="bg9ce9b988"
                ></div>
                <div
                  data-layer="d331a6ad-11f2-45a9-9d6f-5ff12f486c6a"
                  className="x088023371"
                >
                  29
                </div>
              </div>
              <div
                data-layer="714eedd7-8e84-4c16-9759-841fb9fab15e"
                className="group28"
                onClick={() => this.setState({ date: "7th" })}
              >
                <div
                  data-layer="58ebabea-4948-4044-86de-85b0210839cf"
                  className="bg87125c76"
                ></div>
              </div>
              <div
                data-layer="d657deb1-c7b9-440c-9a1a-5532840264d7"
                className="x0447a6e51"
              >
                7
              </div>
              <div
                data-layer="8361665f-b4f7-4ff0-aba6-6355567fe59f"
                className="group36"
                onClick={() => this.setState({ date: "14th" })}
              >
                <div
                  data-layer="1dad1bcf-9c9e-41f7-a0f2-9d9c49d67964"
                  className="bg6591a6f1"
                ></div>
                <div
                  data-layer="ede90dea-62e7-49f7-acb9-030c004c6cd9"
                  className="x0606af191"
                >
                  14
                </div>
              </div>
              <div
                data-layer="82b75c19-2130-466b-8d70-61b6a418d52a"
                className="group43"
                onClick={() => this.setState({ date: "21st" })}
              >
                <div
                  data-layer="f2f01865-12c5-454b-ad0d-7d15374e0761"
                  className="bgf86a978e"
                ></div>
                <div
                  data-layer="b963a557-79e0-42e8-8d7e-2585fed75695"
                  className="x0ab620856"
                >
                  21
                </div>
              </div>
              <div
                data-layer="22e57be8-9595-468e-8bb8-f058cfe21298"
                className="group50"
                onClick={() => this.setState({ date: "28th" })}
              >
                <div
                  data-layer="4bdd3ee9-f44e-4485-bb75-a9352db7d580"
                  className="bg873270ba"
                ></div>
                <div
                  data-layer="f88ea0cd-f779-45ac-bc56-7abbb2ad846a"
                  className="x0"
                >
                  28
                </div>
              </div>
            </div>
            <div
              data-layer="29a8011c-da32-4178-9105-ca2dcfa1ddf4"
              className="calendar3b257f57"
            >
              <svg
                data-layer="6c7e887a-bdc5-4583-a598-80d9df1f98a3"
                preserveAspectRatio="none"
                viewBox="-2914.04638671875 1541.2254638671875 19.5 18.0140380859375"
                className="calendarIcon"
              >
                <path d="M -2913.29638671875 1558.489501953125 L -2913.29638671875 1543.2587890625 L -2909.4111328125 1543.2587890625 L -2909.4111328125 1544.715087890625 L -2911.841064453125 1544.715087890625 L -2911.841064453125 1557.033325195313 L -2896.7509765625 1557.033325195313 L -2896.7509765625 1544.715087890625 L -2899.496826171875 1544.715087890625 L -2899.496826171875 1543.2587890625 L -2895.29638671875 1543.2587890625 L -2895.29638671875 1558.489501953125 L -2913.29638671875 1558.489501953125 Z M -2902.240966796875 1555.74365234375 L -2906.321533203125 1555.74365234375 L -2906.321533203125 1551.6630859375 L -2902.239990234375 1551.6630859375 L -2902.239990234375 1555.742797851563 L -2902.239990234375 1555.74365234375 Z M -2905.045166015625 1554.502563476563 L -2903.48095703125 1554.502563476563 L -2903.48095703125 1552.938354492188 L -2905.045166015625 1552.938354492188 L -2905.045166015625 1554.502563476563 Z M -2910.927734375 1555.74365234375 L -2910.927734375 1551.6630859375 L -2906.84716796875 1551.6630859375 L -2906.84716796875 1555.742797851563 L -2906.84716796875 1555.74365234375 L -2910.927734375 1555.74365234375 Z M -2909.65234375 1554.502563476563 L -2908.088134765625 1554.502563476563 L -2908.088134765625 1552.938354492188 L -2909.65234375 1552.938354492188 L -2909.65234375 1554.502563476563 Z M -2901.71533203125 1551.075317382813 L -2901.71533203125 1546.994750976563 L -2897.634765625 1546.994750976563 L -2897.634765625 1551.075317382813 L -2901.71533203125 1551.075317382813 Z M -2900.43994140625 1549.834228515625 L -2898.875732421875 1549.834228515625 L -2898.875732421875 1548.27099609375 L -2900.43994140625 1548.27099609375 L -2900.43994140625 1549.834228515625 Z M -2902.240966796875 1551.075317382813 L -2906.321533203125 1551.075317382813 L -2906.321533203125 1546.994750976563 L -2902.239990234375 1546.994750976563 L -2902.239990234375 1551.075317382813 Z M -2905.045166015625 1549.834228515625 L -2903.48095703125 1549.834228515625 L -2903.48095703125 1548.27099609375 L -2905.045166015625 1548.27099609375 L -2905.045166015625 1549.834228515625 Z M -2910.927734375 1551.075317382813 L -2910.927734375 1546.994750976563 L -2906.84716796875 1546.994750976563 L -2906.84716796875 1551.075317382813 L -2910.927734375 1551.075317382813 Z M -2909.65234375 1549.834228515625 L -2908.088134765625 1549.834228515625 L -2908.088134765625 1548.27099609375 L -2909.65234375 1548.27099609375 L -2909.65234375 1549.834228515625 Z M -2901.92578125 1545.609619140625 L -2901.92578125 1541.975463867188 L -2900.4814453125 1541.975463867188 L -2900.4814453125 1545.609619140625 L -2901.92578125 1545.609619140625 Z M -2908.243896484375 1545.609619140625 L -2908.243896484375 1541.975463867188 L -2906.80029296875 1541.975463867188 L -2906.80029296875 1545.609619140625 L -2908.243896484375 1545.609619140625 Z M -2905.67626953125 1544.702392578125 L -2905.67626953125 1543.2587890625 L -2903.168701171875 1543.2587890625 L -2903.168701171875 1544.702392578125 L -2905.67626953125 1544.702392578125 Z" />
              </svg>
              <div
                data-layer="28e12c20-e95e-4bba-bca5-c36810d4a375"
                className="may2019"
              >
                May 2019
              </div>
              <div
                data-layer="83e79b7b-6767-4c5f-acbb-18f8510cdaf5"
                className="calendar"
              >
                Calendar
              </div>
            </div>
          </div>
          <div
            data-layer="5e54922e-7296-4967-98cb-fe185bd0ddaf"
            className="bg2aad8834"
          ></div>
          <div
            data-layer="bd27961f-0ab1-4d7b-adba-c2684b30540d"
            className="bg9e1a1240"
          ></div>
          <div
            data-layer="0eff46c8-ec91-4e8a-8f28-6569dcc67f45"
            className="bg"
          ></div>
          <div
            data-layer="7fccefeb-ce86-49b2-99b0-bd3a368ec7ee"
            className="visiotrsOnline"
          >
            <div
              data-layer="115ff952-edcc-453d-a3d1-a0a3057a761c"
              className="rectangle57"
            ></div>
            <svg
              data-layer="2eb5c667-be56-460b-8340-c3c7b4aaa262"
              preserveAspectRatio="none"
              viewBox="-0.75 -0.75 892.2998046875 4.5"
              className="line"
            >
              <path d="M 0 0 L 235.6699371337891 0 L 890.800048828125 0 L 890.800048828125 3 L 0 3 L 0 0 Z" />
            </svg>
            <div
              data-layer="4bdb7081-d817-4641-9fac-45181337d517"
              className="title05a080f9"
            >
              Resive a Time Slot On May {date} 2019
            </div>
            <div
              data-layer="47014bbb-6fee-4bea-8fb6-1130750569b9"
              className="info"
            >
              <svg
                data-layer="1f2c163f-19c5-4cd0-93d0-d4379f1eb377"
                preserveAspectRatio="none"
                viewBox="626.85498046875 687.4450073242188 17.91796875 17.91900634765625"
                className="path45"
              >
                <path d="M 635.8140258789063 704.614013671875 C 640.3480224609375 704.614013671875 644.0230102539063 700.93798828125 644.0230102539063 696.4039916992188 C 644.0230102539063 691.8699951171875 640.3480224609375 688.1950073242188 635.8140258789063 688.1950073242188 C 631.280029296875 688.1950073242188 627.60498046875 691.8699951171875 627.60498046875 696.4039916992188 C 627.60498046875 700.93798828125 631.280029296875 704.614013671875 635.8140258789063 704.614013671875 Z M 635.8140258789063 689.1950073242188 C 639.7899780273438 689.1950073242188 643.0230102539063 692.4290161132813 643.0230102539063 696.4039916992188 C 643.0230102539063 700.3790283203125 639.7899780273438 703.614013671875 635.8140258789063 703.614013671875 C 631.8389892578125 703.614013671875 628.60498046875 700.3790283203125 628.60498046875 696.4039916992188 C 628.60498046875 692.4290161132813 631.8389892578125 689.1950073242188 635.8140258789063 689.1950073242188 Z" />
              </svg>
              <div
                data-layer="7db5cc25-f72f-4b37-b67a-2ad05b239234"
                className="rectangle33"
              ></div>
              <div
                data-layer="87a35a40-d183-4fc1-830f-34021783d959"
                className="rectangle34"
              ></div>
            </div>
          </div>
        </div>
        <svg
          data-layer="f664f632-8244-4e40-be2e-63e03401c39a"
          preserveAspectRatio="none"
          viewBox="-0.75 -0.75 41.5 41.5"
          className="profileImage44481d9b"
        >
          <defs>
            <pattern
              id="img-profileImage44481d9b"
              patternContentUnits="userSpaceOnUse"
              width="100%"
              height="100%"
            >
              <image
                xlinkHref={require("./assets/profileImage44481d9b.png")}
                x="0"
                y="0"
                width="40.00px"
                height="40.00px"
              />
            </pattern>
          </defs>
          <path
            d="M 20 0 C 31.04569625854492 0 40 8.954304695129395 40 20 C 40 31.04569625854492 31.04569625854492 40 20 40 C 8.954304695129395 40 0 31.04569625854492 0 20 C 0 8.954304695129395 8.954304695129395 0 20 0 Z"
            fill="url(#img-profileImage44481d9b)"
          />
        </svg>
        <div
          data-layer="76841107-e913-4759-93b4-6bb70baa7d9a"
          className="namea06f2441"
        >
          Miroslav Minev
        </div>
        <div
          data-layer="9626ce53-fcfa-444f-8333-84a07a8b8268"
          className="topElements"
        >
          <div
            data-layer="1183d676-d176-4d90-97bb-47cd9f9629b9"
            className="search8f40be6a"
          >
            <svg
              data-layer="2b208ed6-d196-4dd2-87f1-e5596bf91eb1"
              preserveAspectRatio="none"
              viewBox="0 0 50 50"
              className="ellipse7"
            >
              <path d="M 25 0 C 38.8071174621582 0 50 11.1928825378418 50 25 C 50 38.8071174621582 38.8071174621582 50 25 50 C 11.1928825378418 50 0 38.8071174621582 0 25 C 0 11.1928825378418 11.1928825378418 0 25 0 Z" />
            </svg>
            <svg
              data-layer="08f08f74-7d6c-41a2-a505-577e20b41956"
              preserveAspectRatio="none"
              viewBox="457.55999755859375 1019.9359741210938 27.5 27.49908447265625"
              className="search"
            >
              <path d="M 469.5546264648438 1036.806396484375 C 471.1106262207031 1038.062622070313 473.0877685546875 1038.818359375 475.2433471679688 1038.818359375 C 480.2506408691406 1038.818359375 484.3099670410156 1034.759033203125 484.3099670410156 1029.751708984375 C 484.3099670410156 1024.744384765625 480.2506408691406 1020.685974121094 475.2433471679688 1020.685974121094 C 470.23681640625 1020.685974121094 466.1775207519531 1024.744384765625 466.1775207519531 1029.751708984375 C 466.1775207519531 1031.907348632813 466.9331359863281 1033.88427734375 468.1893920898438 1035.440551757813 L 458.3099975585938 1045.319702148438 L 459.6759948730469 1046.68505859375 L 469.5546264648438 1036.806396484375 Z M 475.2433471679688 1022.617370605469 C 479.177490234375 1022.617370605469 482.37841796875 1025.817504882813 482.37841796875 1029.751708984375 C 482.37841796875 1033.685791015625 479.177490234375 1036.886840820313 475.2433471679688 1036.886840820313 C 471.3092346191406 1036.886840820313 468.1090087890625 1033.685791015625 468.1090087890625 1029.751708984375 C 468.1090087890625 1025.817504882813 471.3092346191406 1022.617370605469 475.2433471679688 1022.617370605469 Z" />
            </svg>
          </div>
          <div
            data-layer="a8a578ea-7c4a-4035-9e57-3d93193e983a"
            className="notificationsf4b46f55"
          >
            <svg
              data-layer="1f9557a8-02d6-4bc9-ac28-fdbafd577296"
              preserveAspectRatio="none"
              viewBox="0 0 50 50"
              className="ellipse8c66b54a8"
            >
              <path d="M 25 0 C 38.8071174621582 0 50 11.1928825378418 50 25 C 50 38.8071174621582 38.8071174621582 50 25 50 C 11.1928825378418 50 0 38.8071174621582 0 25 C 0 11.1928825378418 11.1928825378418 0 25 0 Z" />
            </svg>
            <svg
              data-layer="4c5fc22a-031d-4e36-9764-fa970fda81df"
              preserveAspectRatio="none"
              viewBox="722.2999877929688 1824.453857421875 25.5 27.5"
              className="notificationsbb3a0ea8"
            >
              <path d="M 734.0587158203125 1825.203857421875 L 734.0587158203125 1828.278930664063 C 730.40283203125 1828.822998046875 727.56982421875 1832.322509765625 727.56982421875 1836.555297851563 L 727.56982421875 1840.6923828125 C 727.56982421875 1842.877197265625 727.1671142578125 1844.39794921875 725.0419921875 1846.175903320313 L 723.0499877929688 1847.844116210938 L 731.3929443359375 1847.844116210938 C 731.6013793945313 1849.728637695313 733.15185546875 1851.203857421875 735.049560546875 1851.203857421875 C 736.947998046875 1851.203857421875 738.4984741210938 1849.728637695313 738.7069702148438 1847.844116210938 L 747.0499877929688 1847.844116210938 L 745.0570678710938 1846.175903320313 C 742.9327392578125 1844.39794921875 742.5300903320313 1842.877197265625 742.5300903320313 1840.6923828125 L 742.5300903320313 1836.555297851563 C 742.5300903320313 1832.322509765625 739.697021484375 1828.822998046875 736.0404052734375 1828.278930664063 L 736.0404052734375 1825.203857421875 L 734.0587158203125 1825.203857421875 Z M 735.049560546875 1849.301879882813 C 734.2362060546875 1849.301879882813 733.55615234375 1848.67724609375 733.3801879882813 1847.844116210938 L 736.7197265625 1847.844116210938 C 736.5437622070313 1848.67724609375 735.8636474609375 1849.301879882813 735.049560546875 1849.301879882813 Z M 740.5484008789063 1836.555297851563 L 740.5484008789063 1840.6923828125 C 740.5484008789063 1842.648315429688 740.8488159179688 1844.299072265625 742.11865234375 1845.9423828125 L 727.981201171875 1845.9423828125 C 729.2510986328125 1844.299072265625 729.5515747070313 1842.648315429688 729.5515747070313 1840.6923828125 L 729.5515747070313 1836.555297851563 C 729.5515747070313 1832.994873046875 732.0175170898438 1830.0986328125 735.049560546875 1830.0986328125 C 738.082275390625 1830.0986328125 740.5484008789063 1832.994873046875 740.5484008789063 1836.555297851563 Z" />
            </svg>
          </div>
          <div
            data-layer="ee723e4c-fed5-4ef3-b652-5d0d74d4fd86"
            className="notificationsb9b8b17b"
          >
            <svg
              data-layer="b59e9a39-2286-4a31-b251-e94a77e90d30"
              preserveAspectRatio="none"
              viewBox="0 0 50 50"
              className="ellipse8"
            >
              <path d="M 25 0 C 38.8071174621582 0 50 11.1928825378418 50 25 C 50 38.8071174621582 38.8071174621582 50 25 50 C 11.1928825378418 50 0 38.8071174621582 0 25 C 0 11.1928825378418 11.1928825378418 0 25 0 Z" />
            </svg>
            <svg
              data-layer="7e4d7865-c352-404a-bf58-4bab561a61cd"
              preserveAspectRatio="none"
              viewBox="722.2999877929688 1824.453857421875 25.5 27.5"
              className="notifications"
            >
              <path d="M 734.0587158203125 1825.203857421875 L 734.0587158203125 1828.278930664063 C 730.40283203125 1828.822998046875 727.56982421875 1832.322509765625 727.56982421875 1836.555297851563 L 727.56982421875 1840.6923828125 C 727.56982421875 1842.877197265625 727.1671142578125 1844.39794921875 725.0419921875 1846.175903320313 L 723.0499877929688 1847.844116210938 L 731.3929443359375 1847.844116210938 C 731.6013793945313 1849.728637695313 733.15185546875 1851.203857421875 735.049560546875 1851.203857421875 C 736.947998046875 1851.203857421875 738.4984741210938 1849.728637695313 738.7069702148438 1847.844116210938 L 747.0499877929688 1847.844116210938 L 745.0570678710938 1846.175903320313 C 742.9327392578125 1844.39794921875 742.5300903320313 1842.877197265625 742.5300903320313 1840.6923828125 L 742.5300903320313 1836.555297851563 C 742.5300903320313 1832.322509765625 739.697021484375 1828.822998046875 736.0404052734375 1828.278930664063 L 736.0404052734375 1825.203857421875 L 734.0587158203125 1825.203857421875 Z M 735.049560546875 1849.301879882813 C 734.2362060546875 1849.301879882813 733.55615234375 1848.67724609375 733.3801879882813 1847.844116210938 L 736.7197265625 1847.844116210938 C 736.5437622070313 1848.67724609375 735.8636474609375 1849.301879882813 735.049560546875 1849.301879882813 Z M 740.5484008789063 1836.555297851563 L 740.5484008789063 1840.6923828125 C 740.5484008789063 1842.648315429688 740.8488159179688 1844.299072265625 742.11865234375 1845.9423828125 L 727.981201171875 1845.9423828125 C 729.2510986328125 1844.299072265625 729.5515747070313 1842.648315429688 729.5515747070313 1840.6923828125 L 729.5515747070313 1836.555297851563 C 729.5515747070313 1832.994873046875 732.0175170898438 1830.0986328125 735.049560546875 1830.0986328125 C 738.082275390625 1830.0986328125 740.5484008789063 1832.994873046875 740.5484008789063 1836.555297851563 Z" />
            </svg>
            <svg
              data-layer="8b858565-0636-41d4-a54d-90ce71056bc3"
              preserveAspectRatio="none"
              viewBox="0 0 10 10"
              className="ellipse10"
            >
              <path d="M 5 0 C 7.76142406463623 0 10 2.238576173782349 10 5 C 10 7.76142406463623 7.76142406463623 10 5 10 C 2.238576173782349 10 0 7.76142406463623 0 5 C 0 2.238576173782349 2.238576173782349 0 5 0 Z" />
            </svg>
          </div>
          <div
            data-layer="e3e45b19-eb80-4dd5-bc1b-3f2424f6e8a7"
            className="profile73590119"
          >
            <svg
              data-layer="7cf3820f-cfb9-45dd-9646-c635a492ca29"
              preserveAspectRatio="none"
              viewBox="0 0 50 50"
              className="ellipse9"
            >
              <path d="M 25 0 C 38.8071174621582 0 50 11.1928825378418 50 25 C 50 38.8071174621582 38.8071174621582 50 25 50 C 11.1928825378418 50 0 38.8071174621582 0 25 C 0 11.1928825378418 11.1928825378418 0 25 0 Z" />
            </svg>
            <svg
              data-layer="8dddbf45-d52c-47dc-bc57-1185f43e2de4"
              preserveAspectRatio="none"
              viewBox="-0.75 -0.75 23.5 23.49999237060547"
              className="profile"
            >
              <path d="M 0 22 L 0.1654350310564041 20.85020065307617 C 0.8054391741752625 16.42293739318848 5.46323299407959 13.08392524719238 10.99961853027344 13.08392524719238 C 16.53676605224609 13.08392524719238 21.19379806518555 16.42293739318848 21.83456420898438 20.85020065307617 L 22 22 L 0 22 Z M 2.477140188217163 19.98574256896973 L 19.52285957336426 19.98574256896973 C 18.44355964660645 17.13119316101074 15.01156139373779 15.09805583953857 10.99961853027344 15.09805583953857 C 6.988438606262207 15.09805583953857 3.557202816009521 17.13119316101074 2.477140188217163 19.98574256896973 Z M 4.829838752746582 6.108600616455078 C 4.829838752746582 2.739883422851563 7.597681999206543 0 10.99961853027344 0 C 14.40231800079346 0 17.16946220397949 2.739883422851563 17.16946220397949 6.108600616455078 C 17.16946220397949 9.478073120117188 14.40231800079346 12.21808242797852 10.99961853027344 12.21808242797852 C 7.597681999206543 12.21808242797852 4.829838752746582 9.478073120117188 4.829838752746582 6.108600616455078 Z M 6.863933086395264 6.108600616455078 C 6.863933086395264 8.367293357849121 8.718737602233887 10.20382499694824 10.99961853027344 10.20382499694824 C 13.27980041503906 10.20382499694824 15.13530349731445 8.367293357849121 15.13530349731445 6.108600616455078 C 15.13530349731445 3.851544857025146 13.27980041503906 2.01350212097168 10.99961853027344 2.01350212097168 C 8.718737602233887 2.01350212097168 6.863933086395264 3.851544857025146 6.863933086395264 6.108600616455078 Z" />
            </svg>
          </div>
          <div
            data-layer="7a9aec83-5880-45c7-8e0b-4e759faa67ac"
            className="exampleLogo"
          >
            <div
              data-layer="6b3a39e6-95ce-4845-92ad-575179664c2c"
              className="rectangle56"
            ></div>
          </div>
        </div>
        <svg
          data-layer="e552048a-1eee-42a9-9b2d-6cfaba9221e7"
          preserveAspectRatio="none"
          viewBox="-0.75 -0.75 41.5 41.5"
          className="profileImage"
        >
          <defs>
            <pattern
              id="img-profileImage"
              patternContentUnits="userSpaceOnUse"
              width="100%"
              height="100%"
            >
              <image
                xlinkHref={require("./assets/profileImage.png")}
                x="0"
                y="0"
                width="40.00px"
                height="40.00px"
              />
            </pattern>
          </defs>
          <path
            d="M 20 0 C 31.04569625854492 0 40 8.954304695129395 40 20 C 40 31.04569625854492 31.04569625854492 40 20 40 C 8.954304695129395 40 0 31.04569625854492 0 20 C 0 8.954304695129395 8.954304695129395 0 20 0 Z"
            fill="url(#img-profileImage)"
          />
        </svg>
        <div
          data-layer="e4456f91-efdb-40fc-9077-ffd279d1d6db"
          className="namef1504954"
        >
          Miroslav Minev
        </div>
        <div
          data-layer="2b3389a5-58dc-43c8-8f17-9378b23c0fcf"
          className="namec32bf6b8"
        >
          166684686
        </div>
        <div
          data-layer="a0b93fc4-f372-4cf0-8d7c-092276fc3eaa"
          className="title128328b7"
        >
          Reserve a date from the calendar below :
        </div>
        <div
          data-layer="5ec10945-2a7d-4584-88d6-25c31e9b2312"
          className="group61"
        >
          <div
            data-layer="524a39b5-6be0-4a18-9ae7-2380ca2bd216"
            className="rectangle144"
          ></div>
          <div
            data-layer="ebaf15bb-e89a-4572-8213-58142eb0af1e"
            className="name07fe4850"
          >
            Current Bookings
          </div>
        </div>
        <Link to="StudentSupportPage">
          <div
            data-layer="0f77f3b4-525a-4236-8e2d-f1af0f1b6c4e"
            className="group62"
          >
            <div
              data-layer="5f2fb8ae-ee1f-4bda-910c-ad58ad0e422c"
              className="rectangle145"
            ></div>
            <div
              data-layer="ca510c39-a6b1-4c3e-a990-1c92686665e2"
              className="name07114cb5"
            >
              Contact Support
            </div>
          </div>
        </Link>
        <div
          data-layer="41e17f1c-b05b-4b23-8f39-bbb55f333752"
          className="group63"
        >
          <div
            data-layer="5aad3374-05d1-42fc-94d7-0e712ceaa389"
            className="rectangle146"
          ></div>
          <div
            data-layer="821d667c-fd7d-4b9c-96c7-f844619bf0d1"
            className="name93a2426e"
          >
            Create a new reservation
          </div>
        </div>
        <div
          data-layer="4ed742d4-f660-413f-8d67-3a8d4210e6b7"
          className="title53c6aac2"
        >
          Selected Date
        </div>
        <div
          data-layer="3a4bb77b-faca-4326-bb9c-12202e8b5ae8"
          className="title1fceb989"
        >
          Available Date
        </div>
        <div
          data-layer="d2a69a2b-2e30-4738-bac6-0b379d4daf3a"
          className="title"
        >
          Unavailable Date
          <br />
        </div>
        <div
          data-layer="d926312c-8507-4719-a875-55e529474d42"
          className="group17e79ebc05"
          onClick={(e) =>
            localStorage.setItem("slot", "May 1st 2019, 10:00 AM")
          }
        >
          <div
            data-layer="6de6385a-0a5c-47ab-8f95-f4777b35bcb6"
            className="group54"
          >
            <div
              data-layer="e96bedc6-1ec3-42e6-9e84-64434e5f1942"
              className="repeatGrid1f70f23aa"
            >
              <div
                data-layer="656057a4-836c-4160-b000-02c8cd1eedaf"
                className="rectangle14965afcec8"
              ></div>
            </div>
            <div
              data-layer="e093b38c-d572-4636-91e7-95732134301a"
              className="name727426f8"
            >
              Book Date/ Time
            </div>
          </div>
        </div>
        <div
          data-layer="269da3d3-be1f-4bc8-8a43-c06bec126907"
          className="group1718b9d925"
        >
          <div
            data-layer="36899851-c44a-49f2-a4ce-0bf217ccbf54"
            className="group56"
            onClick={(e) =>
              localStorage.setItem("slot", "May 1st 2019, 12:00 PM")
            }
          >
            <div
              data-layer="cdc5131f-ed01-4765-acf4-19537c6dcbff"
              className="repeatGrid1a23c5cfc"
            >
              <div
                data-layer="1dad91d1-1fe7-40e0-b1e1-9b3dc147243d"
                className="rectangle1491bbbfe33"
              ></div>
            </div>
            <div
              data-layer="7a76e2e4-2f43-475a-8974-d2f9a4368315"
              className="namec9777df0"
            >
              Book Date/ Time
            </div>
          </div>
        </div>
        <div
          data-layer="0329ebdf-6364-4f19-b24f-6a994ff48da8"
          className="group171836d976"
        >
          <div
            data-layer="6f681088-ea1f-4d39-a051-4488e4c566bb"
            className="group58"
            onClick={(e) =>
              localStorage.setItem("slot", "May 1st 2019, 3:00 PM")
            }
          >
            <div
              data-layer="1238e3ea-4a7f-4a43-9800-e83523deffa2"
              className="repeatGrid1f358c776"
            >
              <div
                data-layer="391485a0-f899-4259-962a-fee0e43554b6"
                className="rectangle149525272dc"
              ></div>
            </div>
            <div
              data-layer="cbd33df2-02f2-4c86-8ce5-a03f0b4fa325"
              className="name03c2d2d5"
            >
              Book Date/ Time
            </div>
          </div>
        </div>
        <div
          data-layer="f27a24fe-7a0f-4bc3-9200-b2f57dd34944"
          className="group17"
        >
          <div
            data-layer="1e82b055-1f85-4796-896f-6cb727a3057d"
            className="group60"
            onClick={(e) =>
              localStorage.setItem("slot", "May 1st 2019, 4:00 PM")
            }
          >
            <div
              data-layer="03b8b901-184a-4ce3-ae14-054e0e39600e"
              className="repeatGrid16599b863"
            >
              <div
                data-layer="eedc2054-55c1-4643-9104-1373eefd2ec9"
                className="rectangle149d0da5e4c"
              ></div>
            </div>
            <div
              data-layer="a7dd3fdb-514c-4a62-b8f0-fe6a54f67b4e"
              className="namee4299f39"
            >
              Book Date/ Time
            </div>
          </div>
        </div>
        <div
          data-layer="e35d1219-025b-446d-bdd3-5321ded4b96a"
          className="group18da7ea306"
        >
          <div
            data-layer="c0c95fce-a819-4a5a-a1d3-ea8cdeb0c029"
            className="group55"
            onClick={(e) =>
              localStorage.setItem("slot", "May 1st 2019, 6:00 PM")
            }
          >
            <div
              data-layer="495c9095-99ac-4820-97c8-fce12fa6b375"
              className="repeatGrid1cfd03baf"
            >
              <div
                data-layer="67e3bda5-812c-4808-b45f-48ed1e5cd4ec"
                className="rectangle14963637fcc"
              ></div>
            </div>
            <div
              data-layer="bc0f5ad6-d8b1-40c9-b35a-f8bc6e0342dc"
              className="name711967a4"
            >
              Book Date/ Time
            </div>
          </div>
        </div>
        <div
          data-layer="03380f84-c2ee-4d78-96e0-a5c2b00be4b9"
          className="group1894cf1079"
        >
          <div
            data-layer="ed885d6e-35e9-4e8a-b634-42fa00b08a97"
            className="group59"
            onClick={(e) =>
              localStorage.setItem("slot", "May 1st 2019, 8:00 PM")
            }
          >
            <div
              data-layer="e1e36940-538d-4e1b-a6d0-c4a47cfbf100"
              className="repeatGrid1ccfe5b10"
            >
              <div
                data-layer="ae5b2ac8-90e3-49c4-961d-a881cae6b3f9"
                className="rectangle14980a2f12b"
              ></div>
            </div>
            <div
              data-layer="e74eed59-3789-42d6-b812-9c029b4deaa0"
              className="named20c06a5"
            >
              Book Date/ Time
            </div>
          </div>
        </div>
        <div
          data-layer="a02c6143-7a5d-4919-83c9-b3a76215ffee"
          className="group18"
        >
          <div
            data-layer="7a586012-f792-46b8-935f-a9b5f6e71bfe"
            className="group57"
            onClick={(e) =>
              localStorage.setItem("slot", "May 1st 2019, 10:00 PM")
            }
          >
            <div
              data-layer="f4e90a50-21d8-4058-94be-baa738d993b7"
              className="repeatGrid1"
            >
              <div
                data-layer="9f5e01c3-8a18-4b4d-86a3-8426dd72e329"
                className="rectangle149"
              ></div>
            </div>
            <div
              data-layer="0976edd7-f610-4d70-aa7a-aa1760a09d4a"
              className="namea45890e6"
            >
              Book Date/ Time
            </div>
          </div>
        </div>
        <div
          data-layer="6b811ba4-18ca-49f8-ac2e-e340152f5362"
          className="name17582203"
        >
          If you need support, please contact us through
        </div>
        <div
          data-layer="70b2a3c6-9668-41ee-bd7c-44a81c701626"
          className="name1d4865a7"
        >
          Here...
        </div>
        <div
          data-layer="e3686cf8-f2a2-440c-8695-cd96dc84aa85"
          className="name2edc0f98"
        >
          May {date} 2019, 2:00 PM
        </div>
        <div
          data-layer="d03d1265-8654-430e-beb1-b41f38d2683f"
          className="name55960111"
        >
          May {date} 2019, 10:00 AM
        </div>
        <div
          data-layer="ac6a4d9b-90bd-401c-a885-6397c92951e9"
          className="namecceb2117"
        >
          May {date} 2019, 12:00 PM
        </div>
        <div
          data-layer="c0fa9db4-2479-4ed8-a210-501cbae1e76a"
          className="nameea9b5ead"
        >
          May {date} 2019, 4:00 PM
        </div>
        <div
          data-layer="3e248de8-5664-4a81-9b41-d117cbe63967"
          className="name4d92af14"
        >
          May {date} 2019, 10:00 PM
        </div>
        <div
          data-layer="1e1786c0-4137-4270-8f45-34532cd9c6dc"
          className="name76746bfc"
        >
          May {date} 2019, 6:00 PM
        </div>
        <div data-layer="00aa9008-0be9-4717-bbe1-3016a1edb7a7" className="name">
          May {date} 2019, 8:00 PM
        </div>
      </div>
    );
  }
}

export default StudentHomePage;
