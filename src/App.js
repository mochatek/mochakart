import { Component } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";

export default class App extends Component {
  render() {
    return (
      <main className="container">
        <Header />
        <Content />
        <Footer />
      </main>
    );
  }
}
