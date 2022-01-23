import React, { Component } from "react";
import Modeler from "bpmn-js/lib/Modeler";
import axios from "axios";

export default class DiagramMenuContentComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      diagram: "",
    };
  }

  componentDidMount() {
    var container = document.getElementById("modellercontainer");
    axios
      .get(
        "http://127.0.0.1:8085/engine-rest/process-definition/expression:1:37f87bc2-7c42-11ec-906c-50e085e44b12/xml"
      )
      .then((r) => {
        this.setState({ diagram: r.data.bpmn20Xml });
        const modeler = new Modeler({
          container,
          keyboard: {
            bindTo: document,
          },
        });

        modeler
          .importXML(r.data.bpmn20Xml)
          .then(({ warnings }) => {
            if (warnings.length) {
              console.log("Warnings", warnings);
            } else {
              console.log("no warnings");
            }

            const canvas = modeler.get("modeling");
            canvas.setColor("CalmCustomerTask", {
              stroke: "green",
              fill: "yellow",
            });
          })
          .catch((err) => {
            console.log("error", err);
          });
      })
      .catch((e) => {
        this.setState({ diagram: "error" });
        console.log(e, "rror");
      });
  }

  render() {
    return (
      <div>
        <div id="modellercontainer"></div>
      </div>
    );
  }
}
