import React from "react";
import { Link } from "react-router-dom";

const notFound = () => {
  return (
    <div>
      <h1>404 NOT FOUND</h1>
      <b>
        <p id="title" title="error code: 0x000b3dcv: H̶̨͟͠҉e͘͘͜͜'̛͢s҉͏̢ ̷͡c̶̨̕o̕m͜͠į͢͞n̕͠͞͡g͢͏̴ ">
          ಠ_ಠ
        </p>
      </b>
      <p id="other" title="error code: 0x000b3dcv: H̶̨͟͠҉e͘͘͜͜'̛͢s҉͏̢ ̷͡c̶̨̕o̕m͜͠į͢͞n̕͠͞͡g͢͏̴ ">
        Nothing to see here - move on
      </p>
      <Link to="/login">
        <button>Go Back to the site</button>
      </Link>
    </div>
  );
};

export default notFound;
