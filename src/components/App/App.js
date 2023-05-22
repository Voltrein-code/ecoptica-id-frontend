/* eslint-disable import/no-extraneous-dependencies */
import { Helmet } from "react-helmet";
import { useState } from "react";
import Preview from "../Preview/Preview";
import "./App.css";
import Main from "../Main/Main";
import Home from "../Home/Home";
import Shop from "../Shop/Shop";

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="app">
      <Helmet>
        <title>Ecoptica-id</title>
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        ></meta>
      </Helmet>
      {/* <Preview loading={loading} setLoading={setLoading} /> */}
      {/* <Main>
        <Home />
      </Main> */}
      <Shop />
    </div>
  );
}

export default App;
