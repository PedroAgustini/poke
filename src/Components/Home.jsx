import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import ImageTitle from "./Images/Title-image.png"
import { welcome } from "../store/slices/inputWelcome.slices";

const Home = () => {
    const [inputValue, setInputValue] = useState("");
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const submitName = (e) => {
      e.preventDefault()
      if(inputValue !== "") {
        navigate("/pokemon")
        setInputValue("")
        dispatch(welcome(inputValue))
      } else {
        console.log("Incorrecto!!")
      }
    }
    return (
        <div className="home">
          <div className="home-container text-align-center">
            <div className="home-title-img margin-btm2rem">
              <img src={ImageTitle} alt="image-title" />
            </div>
            <div className="home-info margin-btm2rem">
              <h2 className="home-subtitle">¡Hola entrenador!</h2>
              <p>Para poder comenzar dame tú nombre</p>
            </div>
            <div className="home-input">
              <form action="" onSubmit={submitName}>
                <input type="text" placeholder="Tú nombre..." className="input-name" value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
                <button type="submit" className="btn-submit">Comenzar</button>
              </form>
            </div>
          </div>
        </div>
    );
};

export default Home;