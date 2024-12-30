import React, { useState } from "react";
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
    <div>
      <div className="p-4 rounded-2" style={{ backgroundColor: "#c8df98" }}>
        <div className="w-100 fw-bold">
          <h3 className="fw-bold" id="questions" style={{ fontSize: "20px" }}>
            {question}
          </h3>
        </div>
        <div>
           {options.map((option, index) => (
            <Options
              key={index}
              option={option.option}
              point={option.point}
              isSelected={selectedAnswers?.option === option.option} 
              onSelect={() => onSelect(id, option.option, option.point)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
