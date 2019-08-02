import React from "react";
import store from "../index";
import specValues from "./blockSpecs";

const addBlock = typeName => {
  store.dispatch({
    type: "ADD_BLOCK",
    typeName,
    values: {
      // inNode and outNode are a list, since a block can have multiple input and output
      inNode: [],
      outNode: [],
      collapse: false,
      ...specValues[typeName]
    }
  });
};

const AddBlock = () => {
  return (
    <React.Fragment>
      <div className="dropdown">
        <button
          className="btn btn-info m-2 dropdown-toggle"
          id="New Dropdown"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          New
        </button>
        <div className="dropdown-menu" aria-labelledby="New Dropdown">
          <div className="dropdown-item" onClick={() => addBlock("Delay")}>
            Delay
          </div>
          <div className="dropdown-item" onClick={() => addBlock("Transposer")}>
            Transposer
          </div>
          <div className="dropdown-item" onClick={() => addBlock("Pan")}>
            Pan
          </div>
          <div className="dropdown-item" onClick={() => addBlock("Player")}>
            Player
          </div>
          <div className="dropdown-item" onClick={() => addBlock("SignalGen")}>
            SignalGen
          </div>
          <div className="dropdown-item" onClick={() => addBlock("Speaker")}>
            Speaker
          </div>
          <div className="dropdown-item" onClick={() => addBlock("DirectInput")}>
            DirectInput
          </div>
          <div className="dropdown-item" onClick={() => addBlock("Pitch")}>
            Pitch
          </div>
          {/* <div className="dropdown-item" onClick={() => addBlock("VSTHost")}>
            VSTHost
          </div> */}
          <div className="dropdown-item" onClick={() => addBlock("Routing")}>
            Routing
          </div>
          <div className="dropdown-item" onClick={() => addBlock("Mixer")}>
            Mixer
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AddBlock;
