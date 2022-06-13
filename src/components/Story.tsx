import axios from "axios";

import { FC, Fragment, useEffect, useState } from "react";

interface NewStoryProps {
  by: string;
  descendants: number;
  // kids: number[];
  time: number;
  score: number;
  title: string;
  // type: string;
  url: string;
}

export interface StoryProps {
  id: number;
  index: number;
}

export const Story: FC<StoryProps> = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [itemState, setItemState] = useState<NewStoryProps>();

  // const url = "{props.url}";
  // const result = new URL(url).host;
  // const newUrl = url.slice(0, url.lastIndexOf('/'));

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        `https://hacker-news.firebaseio.com/v0/item/${props.id}.json?print=pretty`
      )
      .then((res) => {
        console.log("res", res);
        const dataRes: NewStoryProps = res.data;
        setItemState(dataRes);
      })
      .finally(() => setIsLoading(false));
  }, [props.id]);

  if (isLoading) {
    return <div style={{ fontSize: "10pt" }}>loading...</div>;
  }

  return (
    <Fragment>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          paddingLeft: "5px",
          alignItems: "flex-start",
          overflow: "hidden",
        }}
      >
        <a href={itemState?.url}>
          <td style={{ fontSize: "10pt", display: "flex" }}>
            {props.index}.{" "}
            <div
              style={{ cursor: "pointer" }}
              className="votearrow"
              title="upvote"
            />
            {itemState?.title}
            {/* <span style={{ fontSize: 11, color: "#828282" }}>
              ({itemState?.url})
            </span> */}
          </td>
        </a>
        <td
          style={{
            display: "flex",
            fontSize: 10,
            paddingLeft: 20,
            color: "#828282",
            justifyContent: "flex-start",
          }}
        >
          {itemState?.score} points by {itemState?.by} {" | "}{" "}
          <a
            href={`https://news.ycombinator.com/item?id=${props.id}`}
          >
            {itemState?.descendants} comments
          </a>
        </td>
      </div>
    </Fragment>
  );
};
