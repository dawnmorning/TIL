import { Link } from "react-router-dom";
function Movie({ id, coverImg, title, genres }) {
  return (
    <div>
      <h2>
        <Link to={`/movie/${id}`}>{title}</Link>
      </h2>
      <img src={coverImg} alt="" />
      {/* <div>{title}</div> */}
      <ul>
        {genres.map((genre, idx) => (
          <li key={idx}>{genre}</li>
        ))}
      </ul>
    </div>
  );
}
export default Movie;
