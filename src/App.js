import React from "react";
import { Routes, Route } from 'react-router-dom';
import { Provider } from "react-redux";

import { HomePage } from "./pages/home-page";
import { Header } from "./components/header";
import { store } from "./redux";

function App() {
  return (

    <Provider store={store}>
      <div className="App">
        {<Header />}
        <Routes>
          <Route path="/" element={<HomePage />} />

        </Routes>
      </div>
    </Provider>

  );
}

export default App;
