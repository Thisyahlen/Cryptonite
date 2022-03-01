import React from "react";
import Banner from "../components/Banner/Banner.js";
import CoinsTable from "../components/Crypto/CoinsTable.js";
import News from "../components/News/News.js";
import Topo from "../media/topo.jpg";

const Homepage = () => {
  return (
    <div>
      <div
        style={{
          height: 120,
          backgroundColor: "#c6cec6",
          // zIndex: 1,
          marginTop: -120,
        }}
      ></div>
      {/* {" "} */}
      <div
        style={{
          // margin: 0,
          // padding: 0,
          // display: "flex",
          // justifyContent: "center",
          // alignItems: "center",
          height: "100%",
          width: "100%",
          backgroundColor: "#f2f2f2",
          // backgroundColor: "red",
        }}
      >
        <News />
      </div>
      <div
        style={{
          margin: 0,
          padding: 0,
          height: "100%",
          width: "100%",
        }}
      >
        <Banner />
        <CoinsTable />
      </div>
    </div>
  );
};

export default Homepage;
