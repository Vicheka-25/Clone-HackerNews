import { Fragment } from "react";
import y18 from "../assets/y18.gif";
import "../styles/App.css";

export const Header = () => {
  const LeftSide = (
    <div
      style={{
        display: "flex",
      }}
    >
      <a href="#">
        <img
          src={y18}
          style={{
            margin: "2px",
            width: 18,
            height: 18,
            border: "1px white solid",
          }}
        />
      </a>

      <span>
        <b style={{ marginRight: 5 }}>
          <a href="#">Hacker News</a>
        </b>
        <a href="#">new</a>
        {" | "}
        <a href="#">past</a>
        {" | "}
        <a href="#">comments</a>
        {" | "}
        <a href="#">ask</a>
        {" | "}
        <a href="#">show</a>
        {" | "}
        <a href="#">jobs</a>
        {" | "}
        <a href="#">submit</a>
      </span>
    </div>
  );

  const RightSide = (
    <div>
      <a href="#">login</a>
    </div>
  );

  return (
    // <Fragment>
    //   <div
    //     style={{
    //       fontSize: "10pt",
    //       width: "85%",
    //       height: "25px",
    //       backgroundColor: "#ff6600",
    //       display: "flex",
    //       alignItems: "center",
    //       paddingTop: "3px",
    //       paddingLeft:"4px",
    //       paddingRight: "4px",

    //     }}
    //   >
    //     <div style={{ display: "flex", justifyContent: "space-between" }}>
    //       <div>{LeftSide}</div>
    //       <div>{RightSide}</div>
    //     </div>
    //   </div>
    // </Fragment>
    //   );
    // };

    <table
      style={{
        width: "100%",
        borderWidth: "0px",
        backgroundColor: "#f6f6ef",
        border: "0px",
        padding: "2px",
        borderSpacing: "0px",
      }}
    >
      
      <tbody>
        <tr>
          <td style={{ backgroundColor: "#ff6600", padding: "0px" }}>
            <table style={{ padding: "5px", width: "100%", border: "0" }}>
              <tr>
                <td style={{display: "flex"}}>{LeftSide}</td>
                <td style={{ textAlign: "right", paddingRight: "4px" }}>
                  <span >
                    <a href="#">login</a>
                  </span>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  );
};
