import React from "react";

// step 1 / use to Unicode in const
const Unicode = ({ unicode }) => {
  return (
    <div>
      <h2>
        This is Right Arrow
        {/* fromCodePoint Return the String value */}
        {/* parseInt Converts a string to an integer. */}
        {String.fromCodePoint(parseInt(unicode, 16))}
      </h2>
    </div>
  );
};

export default Unicode;
