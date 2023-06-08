/* eslint-disable import/no-extraneous-dependencies */
import { Helmet } from "react-helmet";
import { useState } from "react";
import Preview from "../Preview/Preview";
import "./App.css";
import Main from "../Main/Main";
import Home from "../Home/Home";
import Shop from "../Shop/Shop";
import Profile from "../Profile/Profile";
import Auth from "../Auth/Auth";

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
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        ></meta>
      </Helmet>
      {/* <Preview loading={loading} setLoading={setLoading} /> */}
      <Auth loading={loading} setLoading={setLoading} />
      {/* <Main>
        <Home />
      </Main> */}
      {/* <Shop /> */}
      {/* <Profile /> */}
    </div>
  );
}

export default App;
