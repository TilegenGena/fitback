import React, { useContext, useState } from "react";
import { AdminContext } from "../context/AdminProvider";
import Map from "../image/Captura.png";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Smile1 from "../image/smile1.png";
import Smile2 from "../image/smile2.png";
import Smile3 from "../image/smile3.png";
import Footer from "../components/Footer";

const Fitback = () => {
  const [newFitback, setNewFitback] = useState({
    name: "",
    email: "",
    message: "",
  });

  const { addFitback } = useContext(AdminContext);

  function handleInput(event) {
    let object = {
      ...newFitback,
      [event.target.name]: event.target.value,
    };
    setNewFitback(object);
  }

  function handleSubmit(event) {
    event.preventDefault();
    for (let key in newFitback) {
      if (!newFitback[key].trim()) {
        alert("Заполните все поля");
        return;
      }
    }
    addFitback(newFitback);
    setNewFitback({
      name: "",
      email: "",
      message: "",
    });
  }

  return (
    <Box sx={{ flexGrow: 2 }}>
      <Grid container spacing={2}>
        <div className="form">
          <form onSubmit={handleSubmit}>
            <h2>Reach us out!</h2>
            <input
              className="form-name"
              name="name"
              type="text"
              placeholder="Your name"
              onChange={handleInput}
              value={newFitback.name}
            />
            <input
              className="form-email"
              name="email"
              type="email"
              placeholder="Your email"
              onChange={handleInput}
              value={newFitback.email}
            />
            <input
              className="form-message"
              name="message"
              type="textarea"
              placeholder="Your message"
              onChange={handleInput}
              value={newFitback.message}
            />
            <button type="submit" className="form-button">
              Send message
            </button>
          </form>
        </div>
        <Grid div xs>
          <div className="map">
            <img src={Map} alt="map-pics" />
          </div>
          <div className="smile-1">
            <img src={Smile1} alt="smile" />
          </div>
          <div className="smile-2">
            <img src={Smile2} alt="smile" />
          </div>
          <div className="smile-3">
            <img src={Smile3} alt="smile" />
          </div>
        </Grid>
      </Grid>
      <Footer/>
    </Box>
  );
};

export default Fitback;
