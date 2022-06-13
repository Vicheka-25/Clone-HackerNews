import axios from "axios";
import React, { useEffect } from "react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Story } from "../components/Story";
import "../styles/App.css";

function App() {
  const [topStoryState, setTopStoryState] = React.useState<number[]>([]);

  useEffect(() => {
    axios
      .get("https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty")
      .then((res) => {
        const data = res.data;
        setTopStoryState(data);
      })
      .catch((err) => alert(err));
  });
  return (
    <div className="App" style={{ display: "flex", justifyContent: "center" }}>
      <table style={{ minWidth: "796px" }}>
        <tbody>
          <tr style={{ fontSize:"10pt" }}>
            <Header />
          </tr>
          <tr
            style={{
              backgroundColor: "#F6F6EF",
              border: "0px",
              borderCollapse: "collapse",
              borderSpacing: "0px",
              marginLeft: "auto",
              marginRight: "auto",
              padding: "0px",
              width: "85%",
            
            }}
          >
            {topStoryState.map((id, index) => {
              return <Story id={id} index={index} />;
            })}
          </tr>
          <tr
            style={{
              backgroundColor: "#F6F6EF",
              fontSize: "8pt"
            }}
          >
            <Footer />
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
