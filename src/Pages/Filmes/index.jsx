import { useEffect, useState } from "react";
import { EmBreve } from "./EmBreve";
import { EmCartaz } from "./EmCartaz";

export const Filmes = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const API_KEY = '23d0ab8d7cf643a842ddf58bf2720c69';
        const fetchMovies = async () => {
            try {
                const response = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=pt-BR&page=1`);
                const data = await response.json();
                setMovies(data.results);
            } catch (error) {
                console.error('Erro ao buscar filmes:', error);
            }
        };

        fetchMovies();
    }, []);

    return (
        <section>
            {movies.map((movie) => (
                <EmCartaz key={movie.id} movie={movie} />
            ))}
            <EmBreve />
        </section>
    );
};