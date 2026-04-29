import React from "react";

function Awards() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6 p-5">
          <img src="media/images/largestBroker.svg" />
        </div>
        <div className="col-6 p-5 mt-3">
          <h1>Largest stock broker in India</h1>
          <p className="mb-5">
            2+ million Zerodha client contribute to over 15% of all retail order
            volumes in India daily bt trading and investing in:
          </p>
          <div className="row">
            <div className="col">
              <ul>
                <li>Futures and Options</li>
              </ul>
              <ul>
                <li>Commodity derivatives</li>
              </ul>
              <ul>
                <li>Currency derivatives</li>
              </ul>
            </div>
            <div className="col">
              <ul>
                <li>Stock & IPOs</li>
              </ul>
              <ul>
                <li>Direct mutual funds</li>
              </ul>
              <ul>
                <li>Bonds and Govt.Securities</li>
              </ul>
            </div>
          </div>
          <img src="media/images/pressLogos.png" style={{ width: "90%" }} />
        </div>
      </div>
    </div>
  );
}

export default Awards;
