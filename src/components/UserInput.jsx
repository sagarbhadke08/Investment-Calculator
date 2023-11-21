import { useState } from "react";

export default function UserInput( {onChange , userInput}) {
  

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="number"
            value={userInput.initialInvestment}
            required
            onChange={(event) => {
              onChange("initialInvestment", event.target.value);
            }}
          />
        </p>

        <p>
          <label>Annual Investment</label>
          <input
            type="number"
            value={userInput.annualInvestment}
            required
            onChange={(event) => {
              onChange("annualInvestment", event.target.value);
            }}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Duration</label>
          <input
            type="number"
            value={userInput.expectedReturn}
            required
            onChange={(event) => {
              onChange("expectedReturn", event.target.value);
            }}
          />
        </p>

        <p>
          <label>Annual Investment</label>
          <input
            type="number"
            value={userInput.duration}
            required
            onChange={(event) => {
              // handleChange("duration", event.target.value);
              onchange("duration", event.target.value);
            }}
          />
        </p>
      </div>
    </section>
  );
}
