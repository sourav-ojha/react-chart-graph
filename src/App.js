import logo from "./logo.svg";
import "./App.css";
import Charts from "../src/components/Charts";
import { Component } from "react";
class App extends Component {
  constructor() {
    super();
    this.state = {
      chartData: {
        labels: ["Delhi", "UP", "Bihar", "Odisha", "Jharkhand"],
        datasets: [
          {
            label: "population",
            data: [250000, 300000, 225000, 150000, 100000],
            backgroundColor: [
              "rgba(255,45,45,0.6)",
              "rgba(255,255,45,0.6)",
              "rgba(45,255,45,0.6)",
              "rgba(255,45,245,0.6)",
              "rgba(45,255,245,0.6)",
            ],
          },
        ],
      },
    };
  }

  //   UNSAFE_componentWillMount(){
  //   this.getChartData();
  // }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Charts chartData={this.state.chartData} />
       
      </div>
    );
  }
}

export default App;
