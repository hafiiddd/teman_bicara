// import React, { useState } from "react";

export default function numberSoal({id, isSelect, isAnswered, onSelect}) {
  return (
    <>
      <div
        // onClick = {()=>
        //   console.log(isSelect,isAnswered,onSelect)
        // }
        className={`card m-2 text-center col-auto ${
          isSelect ? "Selected" : ""
        } ${isAnswered ? "answered" : ""}`}
        id="no"
        style={{
          width: "43px",
          height: "30px",
          backgroundColor: isSelect ? "#7d944d" : isAnswered ? "#d1e7dd" : "white",
          color: isSelect ? "white" : "#7d944d",
          fontFamily: "poppins",
          fontSize: "16px",
          border: "1px solid #7d944d",
          cursor: "pointer",
          justifyContent: "center",
        }}
        data-index={id}
        onClick={() => onSelect(id)}
      >
        {id}
      </div>
    </>
  );
}
