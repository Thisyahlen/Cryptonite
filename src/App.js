import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Homepage from "./Pages/Homepage";
import Coinpage from "./Pages/Coinpage";
import { makeStyles } from "@material-ui/core";
import Alert from "./components/Alert";
import Footer from "./components/Footer";
import AboutUs from "./Pages/AboutUs";

function App() {
  const useStyles = makeStyles(() => ({
    App: {
      backgroundColor: "#f2f2f2",
      color: "white",
      minHeight: "100vh",
    },
  }));

  const classes = useStyles();

  return (
    <>
      <Router>
        <div className={classes.App}>
          {/* <NavBar/> */}
          <Header />
          <Routes>
            <Route path="/" element={<Homepage />} exact />
            <Route path="/coins/:id" element={<Coinpage />} />
            <Route path="/about" element={<AboutUs />} />
          </Routes>
          <Footer />
        </div>
        <Alert />
      </Router>
    </>
  );
}

export default App;
