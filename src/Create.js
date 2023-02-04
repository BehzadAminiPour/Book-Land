import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");
  const [isPending, setIsPending] = useState(false);
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    setIsPending(true);
    const book = { title, body, author };
    fetch("http://localhost:8000/books", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(book),
    }).then(() => {
      navigate("/");
      setIsPending(false);
    });
    setTitle("");
    setBody("");
    setAuthor("")
  };
  return (
    <div className="create">
      <h2>Add a new book</h2>
      <form onSubmit={submitHandler}>
        <label>Book Title :</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Book Body :</label>
        <textarea
          type="text"
          required
          value={body} 
          onChange={(e) => setBody(e.target.value)}
        />
        <label>Book Author :</label>
        <input
          type="text"
          required
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />

        {!isPending && <button>Add Book</button>}
        {isPending && <button disabled>Adding book...</button>}
      </form>
    </div>
  );
};

export default Create;
