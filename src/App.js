import React from "react";
import { Routes, Route } from 'react-router-dom';
import { Provider } from "react-redux";

import { HomePage } from "./pages/home-page";
import { Header } from "./components/header";
import { store } from "./redux";
import { GamePage } from "./pages/game-page";
import { OrderPage } from "./pages/order-page";

function App() {
  return (

    <Provider store={store}>
      <div className="App">
        {<Header />}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route exact path="/app/:title" element={<GamePage />} />
          <Route exact path="/order" element={<OrderPage />} />

        </Routes>
      </div>
    </Provider>

  );
}

export default App;
