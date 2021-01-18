import React from "react";
import "./App.css";


class Odometer extends React.Component {
  constructor() {
    super();
    this.state = {
      odo: "0000",
    };
  }
  changeOdometer(n) {
    let num = Number(this.state.odo) + n;
    if (num > 9999) {
      this.setState({ odo: "0000" });
      return;
    }
    if (num < 10) {
      this.setState({ odo: "000" + num });
      return;
    }
    if (num < 100) {
      this.setState({ odo: "00" + num });
      return;
    }
    if (num < 1000) {
      this.setState({ odo: "0" + num });
      return;
    }
    this.setState({ odo: num });
  }
  render() {
    return (
      <>
        <button className="odo" onClick={() => this.changeOdometer(1)}>add 1</button>
        <button className="odo" onClick={() => this.changeOdometer(10)}>add 10</button>
        <button className="odo" onClick={() => this.changeOdometer(100)}>add 100</button>
        <button className="odo" onClick={() => this.changeOdometer(1000)}>add 1000</button>
        <div className="odo">
          <h3>{this.state.odo}</h3>
        </div>
      </>
    );
  }
}




function Main() {
  return (
    <body>
      <div className="body">
        <h1> {lab()}</h1>
        <p>Welcome to React world!!! </p>
      </div>
    </body>
  );
}
function Footer() {
  return (
    <footer className="App">
      <p>Copy Right @</p>
      <span>saja</span>
    </footer>
  );
}
function App() {
  return (
    <>
    
      <Main />
      <Odometer />
      <Footer />
    </>
  );
}
function lab() {
  return "Lab_37";
}
export default App;