import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
    const [loading, setLoading] = useState(true);
    const [moiveInfo, setMoviesInfo] = useState({});

    const { id } = useParams();

    const getMovie = async () => {
        const api = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
        setLoading(false);
        setMoviesInfo(api.data.movie);
        console.log(api.data.movie);
    }

    useEffect(() => {
        getMovie();
    }, [])

    return (
        <div>
            {loading ? <h1>Loading</h1> :
                <div>
                    <h1>{moiveInfo.title}</h1>
                    <img src={moiveInfo.large_cover_image}></img>
                    <ul>
                        <h2>genres</h2>
                        {moiveInfo.genres.map((g) => <li key={g}>{g}</li>)}
                    </ul>
                </div>
            }
        </div>
    )
}

export default Detail;