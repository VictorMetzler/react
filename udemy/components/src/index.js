import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import ApprovalCard from "./ApprovalCard";

import CommentDetail from "./CommentDetail";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          author={faker.internet.userName()}
          avatarImg={faker.image.avatar()}
          timeAgo={`Today at ${
            faker.date
              .recent()
              .toLocaleDateString([], {
                hour: "2-digit",
                minute: "2-digit",
              })
              .split(" ")[1]
          }`}
          content={faker.lorem.sentence()}
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
