import React from "react";

const Box = (id, handleRemove, width=5, height=5, backgroundColor="red") => {
    const remove = () => handleRemove(id);
    return (
      <div>
        <div
          style={{
            height: `${height}em`,
            width: `${width}em`,
            backgroundColor
          }}
        />
        <button onClick={remove}>Remove</button>
      </div>
    );
  }

export default Box;
