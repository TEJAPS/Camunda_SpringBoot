import React, { Component } from "react";
// import Viewer from "bpmn-js/lib/Modeler";
import Viewer from "bpmn-js/lib/NavigatedViewer";
import "bpmn-js/dist/assets/diagram-js.css";
import "bpmn-js/dist/assets/bpmn-font/css/bpmn-embedded.css";
import axios from "axios";

export default class DiagramMenuContentComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      diagram: "",
    };
    this.fetchData = this.fetchData.bind(this);
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   if (
  //     // nextProps.processDefinitionId !== this.props.processDefinitionId ||
  //     nextProps.activeTaskId !== this.props.activeTaskId
  //   ) {
  //     return true;
  //   }
  //   return false;
  // }

  componentDidUpdate(prevProps) {
    console.log(
      "componentDidUpdate DiagramMenuContentComponent",
      this.props.activeTaskId
    );
    if (
      this.props.taskDetailMenuContentComponentId !==
      prevProps.taskDetailMenuContentComponentId
    ) {
      this.fetchData();
    }
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    var container = document.getElementById("modellercontainer");
    container.innerHTML = "";
    axios
      .get(
        "http://127.0.0.1:8085/engine-rest/process-definition/" +
          this.props.processDefinitionId +
          "/xml"
      )
      .then((r) => {
        this.setState({ diagram: r.data.bpmn20Xml });
        const viewer = new Viewer({
          container,
          keyboard: {
            bindTo: document,
          },
        });

        viewer
          .importXML(r.data.bpmn20Xml)
          .then(({ warnings }) => {
            if (warnings.length) {
              console.log("Warnings", warnings);
            } else {
              console.log("no warnings");
            }

            function setColor(element, stroke, fill) {
              var businessObject = element.businessObject;

              businessObject.di.set("stroke", stroke);
              businessObject.di.set("fill", fill);

              var gfx = elementRegistry.getGraphics(element);

              var type = element.waypoints ? "connection" : "shape";

              graphicsFactory.update(type, element, gfx);
            }

            const elementRegistry = viewer.get("elementRegistry");

            const graphicsFactory = viewer.get("graphicsFactory");

            const element = elementRegistry.get(this.props.taskname);

            setColor(element, "green", "yellow");
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
      <div class="tasldetailmenucontentcomponent" id="modellercontainer"></div>
    );
  }
}
