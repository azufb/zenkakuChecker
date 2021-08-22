import React from "react";
import Form from "./components/FormArea";
import Checked from "./components/Checked";

const App:React.VoidFunctionComponent  = () => {
  return (
    <>
      <h1>全角チェッカー</h1>
      <Form />
      <Checked />
    </>
  );
}

export default App;
