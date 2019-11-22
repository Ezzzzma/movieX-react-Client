import React from "react";

const Loading = () => {
  return (
    <div className="ui container">
      <div className="ui active dimmer">
        <div className="ui text loader">Loading...</div>
      </div>
      <p></p>
    </div>
  );
};

Loading.defaultProps = {
  mes: "Loading..."
}; // Hicbirsey yazmadigimizda props a nasil default atilirin cozumu

export default Loading;
