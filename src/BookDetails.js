import { useParams ,useNavigate } from "react-router-dom";
import useFetch from "./useFetch";

const BookDetails = () => {
  const { id } = useParams();
  const {
    data: book,
    isPending,
    error,
  } = useFetch("http://localhost:8000/books/" + id);
  const navigate =useNavigate()
  const deleteClick = () => {
    fetch('http://localhost:8000/books/' + book.id ,{
        method:"DELETE"
    }).then(()=>{
    navigate("/")
    })
  };
  return (
    <div className="book-details">
      {isPending && <div>Loading ...</div>}
      {error && <div>{error}</div>}
      {book && (
        <article>
          <h2>{book.title}</h2>
          <p className="written">Written by {book.author}</p>
          <p>{book.body}</p>
          <button onClick={deleteClick}>Delete</button>
        </article>
      )}
    </div>
  );
};

export default BookDetails;
