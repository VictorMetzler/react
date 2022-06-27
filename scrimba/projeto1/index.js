import Header from "./Header";

function MainContent() {
  return <h1>I'm learning React!</h1>;
}

function Footer() {
  return (
    <footer className="footer">
      <small>© 2022 Lawrence development. All rights reserved.</small>
    </footer>
  );
}

function MainContent() {
  return (
    <div>
      <h1>Fun facts about React</h1>
      <ol>
        <li>Was first released in 20123</li>
        <li>Originaly bla bla</li>
      </ol>
    </div>
  );
}

function Page() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

ReactDOM.render(<Page />, document.getElementById("root"));
