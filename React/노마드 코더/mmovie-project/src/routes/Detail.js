import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();
//   console.log(id);
    useEffect(()=> {
        
    },[])
  return (
    <div>
      <h3>Detail</h3>
    </div>
  );
}
export default Detail;
