import React from "react";
import mathLogo from "../Images/mathProject.png";
import {Link} from "react-router-dom"
const LeftSideComponent = () => {
  return (
    <>
      <div className="left_container">
        <div className="img_container">
          <img src={mathLogo} alt="mathLogo" />
        </div>
        <ul>
          <Link to="/"><li>Simple Calculator</li></Link>
          <Link to="/determinant_calculator"><li>Determination Calculator in matrix</li></Link>
          <Link to="/adjoint_calculator"><li>Adjoint Calculator in matrix</li></Link>
        </ul>
      </div>
    </>
  );
};

export default LeftSideComponent;
