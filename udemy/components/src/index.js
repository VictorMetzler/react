import React from "react";
import ReactDOM from "react-dom";
import faker, { fake } from "faker";

const App = () => {
  return (
    <div className="ui container comments">
      <div className="comment">
        <a href="/" className="avatar">
          <img alt="avatar" src={faker.image.avatar()} />
        </a>
        <div className="content">
          <a href="/" className="author">
            {faker.internet.userName()}
          </a>
          <div className="metadata">
            <span className="date">
              {`Today at ${
                faker.date
                  .recent()
                  .toLocaleDateString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })
                  .split(" ")[1]
              }
              `}
            </span>
          </div>
          <div className="text">{faker.lorem.sentence()}</div>
        </div>
      </div>
      <div className="comment">
        <a href="/" className="avatar">
          <img alt="avatar" src={faker.image.avatar()} />
        </a>
        <div className="content">
          <a href="/" className="author">
            {faker.internet.userName()}
          </a>
          <div className="metadata">
            <span className="date">{`Today at ${
              faker.date
                .recent()
                .toLocaleDateString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })
                .split(" ")[1]
            }
              `}</span>
          </div>
          <div className="text">{faker.lorem.sentence()}</div>
        </div>
      </div>
      <div className="comment">
        <a href="/" className="avatar">
          <img alt="avatar" src={faker.image.avatar()} />
        </a>
        <div className="content">
          <a href="/" className="author">
            {faker.internet.userName()}
          </a>
          <div className="metadata">
            <span className="date">{`Today at ${
              faker.date
                .recent()
                .toLocaleDateString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })
                .split(" ")[1]
            }
              `}</span>
          </div>
          <div className="text">{faker.lorem.sentence()}</div>
        </div>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
