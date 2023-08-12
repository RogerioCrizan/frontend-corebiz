import React from "react";

import { UseMinicartProvider } from "./hooks/useMinicart";
import Header from "./components/common/Header";
import Fullbanner from "./components/Fullbanner";
import Shelf from "./components/Shelf";
import Newsletter from "./components/Newsletter";
import Footer from "./components/common/Footer";

import "./styles/App.css";

function App() {
  return (
    <UseMinicartProvider>
      <Header />
      <Fullbanner />
      <Shelf />
      <Newsletter />
      <Footer />
    </UseMinicartProvider>
  );
}

export default App;
