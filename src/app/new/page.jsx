"use client";
import { useState } from "react";
import { Parent } from "../providers/Header";
const Page = () => {
  const [input1, setInput1] = useState("");
  const [error1, setError1] = useState(false);
  const [input2, setInput2] = useState("");
  const [error2, setError2] = useState(false);

  const check = () => {
    if (input1 == "") {
      setError1(true);
    } else {
      setError1(false);
    }
    if (input2 == "") {
      setError2(true);
    } else {
      setError2(false);
    }
  };

  return (
    <Parent>
      <div className="position">
        <div className="Create">
          <input
            onChange={(e) => setInput1(e.target.value)}
            className="inputCreate"
            placeholder="Title..."
          />
          <div>
            {error1 ? (
              <div class="error">
                <div class="error__icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    viewBox="0 0 24 24"
                    height="24"
                    fill="none">
                    <path
                      fill="#393a37"
                      d="m13 13h-2v-6h2zm0 4h-2v-2h2zm-1-15c-1.3132 0-2.61358.25866-3.82683.7612-1.21326.50255-2.31565 1.23915-3.24424 2.16773-1.87536 1.87537-2.92893 4.41891-2.92893 7.07107 0 2.6522 1.05357 5.1957 2.92893 7.0711.92859.9286 2.03098 1.6651 3.24424 2.1677 1.21325.5025 2.51363.7612 3.82683.7612 2.6522 0 5.1957-1.0536 7.0711-2.9289 1.8753-1.8754 2.9289-4.4189 2.9289-7.0711 0-1.3132-.2587-2.61358-.7612-3.82683-.5026-1.21326-1.2391-2.31565-2.1677-3.24424-.9286-.92858-2.031-1.66518-3.2443-2.16773-1.2132-.50254-2.5136-.7612-3.8268-.7612z"></path>
                  </svg>
                </div>
                <div class="error__title">it can't be empty.</div>
                <div class="error__close">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    viewBox="0 0 20 20"
                    height="20">
                    <path
                      fill="#393a37"
                      d="m15.8333 5.34166-1.175-1.175-4.6583 4.65834-4.65833-4.65834-1.175 1.175 4.65833 4.65834-4.65833 4.6583 1.175 1.175 4.65833-4.6583 4.6583 4.6583 1.175-1.175-4.6583-4.6583z"></path>
                  </svg>
                </div>
              </div>
            ) : null}
          </div>
          <input
            onChange={(e) => setInput2(e.target.value)}
            className="inputCreate"
            placeholder="Description..."
          />
          <div>
            {error2 ? (
              <div class="error">
                <div class="error__icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    viewBox="0 0 24 24"
                    height="24"
                    fill="none">
                    <path
                      fill="#393a37"
                      d="m13 13h-2v-6h2zm0 4h-2v-2h2zm-1-15c-1.3132 0-2.61358.25866-3.82683.7612-1.21326.50255-2.31565 1.23915-3.24424 2.16773-1.87536 1.87537-2.92893 4.41891-2.92893 7.07107 0 2.6522 1.05357 5.1957 2.92893 7.0711.92859.9286 2.03098 1.6651 3.24424 2.1677 1.21325.5025 2.51363.7612 3.82683.7612 2.6522 0 5.1957-1.0536 7.0711-2.9289 1.8753-1.8754 2.9289-4.4189 2.9289-7.0711 0-1.3132-.2587-2.61358-.7612-3.82683-.5026-1.21326-1.2391-2.31565-2.1677-3.24424-.9286-.92858-2.031-1.66518-3.2443-2.16773-1.2132-.50254-2.5136-.7612-3.8268-.7612z"></path>
                  </svg>
                </div>
                <div class="error__title">it can't be empty.</div>
                <div class="error__close">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    viewBox="0 0 20 20"
                    height="20">
                    <path
                      fill="#393a37"
                      d="m15.8333 5.34166-1.175-1.175-4.6583 4.65834-4.65833-4.65834-1.175 1.175 4.65833 4.65834-4.65833 4.6583 1.175 1.175 4.65833-4.6583 4.6583 4.6583 1.175-1.175-4.6583-4.6583z"></path>
                  </svg>
                </div>
              </div>
            ) : null}
          </div>
          <button
            onClick={() => check()}
            className="buttons4"
            style={{ color: "white", fontWeight: "500" }}>
            Done
          </button>
        </div>
      </div>
    </Parent>
  );
};
export default Page;
