import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react"
import Movie from "./Movie";
function Detail() {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState();
    const getMovie = async () => {
        try {
            const response = await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const json = await response.json();
            console.log(json);
            setMovie(json.data.movie);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching movie:', error);
            setLoading(false);
        }
    };

    useEffect(() => {
        getMovie();
    }, [getMovie, id]);
    console.log(id);
    return (
    <div>
        {loading ? <h1>Loading...</h1> : <div>
        <Movie
            key={movie.id}
            id={movie.id}
            img={movie.medium_cover_image}
            title={movie.title}
            summary={movie.summary}
            genres={movie.genres}
        />
        </div>}
    </div>
    )
}

export default Detail;