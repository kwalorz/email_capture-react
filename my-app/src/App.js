import React from "react";
import EmailModal from "./EmailModal/EmailModal";
import { EMProvider } from "./EmailModal/EMProvider";

const App = () => {
  return (
    <EMProvider>
      <>
        <header className="page-header">
          <div className="logo">
            Wicked
            <div className="logo__sub">Awesome Shoes</div>
          </div>
        </header>
        <main
          className="content-area"
          style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + "/img/dark_theme-gradient.png"
            })`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <h1>Content Area</h1>
        </main>
        <EmailModal />
        <div className="email-modal" />
      </>
    </EMProvider>
  );
};

export default App;
