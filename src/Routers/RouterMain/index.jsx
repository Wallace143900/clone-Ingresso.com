import { Route, Routes } from "react-router-dom"
import { Filmes } from "../../Pages/Filmes"
import { Cinemas } from "../../Pages/Cinemas"
import { Eventos } from "../../Pages/Eventos"
import { Noticias } from "../../Pages/Notícias"
import { EmCartaz } from "../../Pages/Filmes/emCartaz"
import { EmBreve } from "../../Pages/Filmes/emBreve"
import { Register } from "../../Pages/Register"
import { Login } from "../../Pages/Login"
import { HomePage } from "../../Pages/HomePage"

export const RouterMain = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/filmes" element={<Filmes />} />
            <Route path="/cinemas" element={<Cinemas />} />
            <Route path="/eventos" element={<Eventos />} />
            <Route path="/noticias" element={<Noticias />} />
            <Route path="/emCartaz" element={<EmCartaz />} />
            <Route path="/emBreve" element={<EmBreve />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
        </Routes>
    )
}