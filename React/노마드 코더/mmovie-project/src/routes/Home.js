import { useEffect, useState } from "react";
import Movie from "../components/Movie";
function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const movieData = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
      )
    ).json();
    // console.log(movieData.data.movies);
    setMovies(movieData.data.movies);

    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div>
      {loading ? (
        <h3>Loading...</h3>
      ) : (
        movies.map((data) => (
          <div>
            <Movie
              key={data.id}
              id={data.id}
              title={data.title}
              coverImg={data.medium_cover_image}
              summary={data.summary}
              genres={data.genres}
            />
          </div>
        ))
      )}
    </div>
  );
}
export default Home;
