/* eslint-disable import/no-extraneous-dependencies */
import { Helmet } from "react-helmet";
import { useState } from "react";
import Preview from "../Preview/Preview";
import "./App.css";

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
      <Preview loading={loading} setLoading={setLoading} />
    </div>
  );
}

export default App;
