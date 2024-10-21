import React from 'react';
import preloader from "../../../img/gear-spinner.svg";

let Preloader = (props) => {
  return (
    <div>
      <img style={{ height: 100 }} src={preloader} alt="" />
    </div>
  );
};

export default Preloader;
