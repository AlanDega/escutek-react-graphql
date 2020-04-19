import React, { Component } from "react";

import Task from "../components/Task";

export default class Level1 extends Component {
  render() {
    return (
      <>
        <section className="fill-height">
          <div className="container">
            <Task />
          </div>
        </section>
      </>
    );
  }
}
