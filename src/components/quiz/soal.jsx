/* eslint-disable react/prop-types */
// import React from "react";
import "./soal.css";

const Options = ({ option, isSelected, onSelect, point }) => {
  return (
    <div
      className={`form-check w-100 py-2 px-5 rounded-5 ${
        isSelected ? "selected" : ""
      }`}
      id="options"
      style={{
        backgroundColor: isSelected ? "#7d944d" : "white",
        color: isSelected ? "white" : "#7d944d",
        fontFamily: "poppins",
        fontSize: "16px",
        border: "1px solid #7d944d",
        cursor: "pointer",
      }}
      onClick={onSelect}
    >
      <input
        className="form-check-input rad"
        type="radio"
        name="answer"
        value={point}
        checked={isSelected}
        readOnly
        style={{ display: "none" }}
      />
      <label className="form-check-label label1" style={{ cursor: "pointer" }}>
        {option}
      </label>
    </div>
  );
};

export default function Soal({
  question,
  options,
  id,
  selectedAnswers,
  onSelect,
}) {
  return (
    <div className="p-4 rounded-2" style={{ backgroundColor: "#c8df98" }}>
      <h3 className="fw-bold" id="questions" style={{ fontSize: "20px" }}>
        {question}
      </h3>
      {options.map((data, index) => (
        <Options
          key={index}
          option={data.option}
          point={data.point}
          isSelected={selectedAnswers?.option === data.option}
          onSelect={() => onSelect(id, data.option, data.point)}
        />
      ))}
    </div>
  );
}
