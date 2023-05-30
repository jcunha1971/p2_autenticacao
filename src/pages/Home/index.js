import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import useAuth from "../../hooks/useAuth";
import * as C from "./styles";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Home = () => {
    const { signout } = useAuth();
    const navigate = useNavigate();
    const jsonStr = localStorage.getItem('user_token');
    const data = JSON.parse(jsonStr);
    const email = data.email;
    const username = email.split("@")[0]; // Obtém o nome de usuário a partir do email

    return (
        <C.Container>
            <C.Title>Home</C.Title>
            <C.UserInfo>
                <C.UserName>Olá, {username}!</C.UserName>
            </C.UserInfo>            <Carousel>
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "300px" }}>
                    <img src="https://i.imgur.com/ymYfurO.jpg" alt="Image 1" style={{ maxWidth: "300px", margin: "auto" }} />
                </div>
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "300px" }}>
                    <img src="https://i.imgur.com/zIS1hvG.jpg" alt="Image 2" style={{ maxWidth: "300px", margin: "auto" }} />
                </div>
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "300px" }}>
                    <img src="https://i.imgur.com/TqHXEND.jpg" alt="Image 3" style={{ maxWidth: "300px", margin: "auto" }} />
                </div>
            </Carousel>
            <Button
                Text="Sair"
                onClick={() => {
                    signout();
                    navigate("/");
                }}
            >
                Sair
            </Button>
        </C.Container>
    );
};

export default Home;
