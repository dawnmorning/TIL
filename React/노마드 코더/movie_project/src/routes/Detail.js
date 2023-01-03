import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState([true]);
  const [details, setDetails] = useState([]);
  //   console.log(id);
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json.data.movie.genres);
    setDetails(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div>
      <div>
        <h2>{details.title_long}</h2>
      </div>
      <div>
        <img src={details.medium_cover_image} alt="" />
      </div>
      <ul>
        {loading ? "Loading..." : details.genres.map((g) => <li>{g}</li>)}
      </ul>
      <div>{details.description_full}</div>
    </div>
  );
}
export default Detail;
