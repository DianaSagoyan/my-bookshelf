import { useState } from "react";

function AddBook() {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    pages: "",
    startDate: "",
    genre: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/books", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setMessage("Book added successfully");
        setFormData({
          title: "",
          author: "",
          pages: "",
          startDate: "",
          genre: "",
        });
      } else {
        setMessage("Failed to add the book");
      }
    } catch (err) {
      setMessage(err);
    }
  };

  return (
    <div>
      <h1>Add a Book</h1>
      {message && <p>{message}</p>}
      <div>
        <input
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
        />
        <input
          name="author"
          placeholder="Author"
          value={formData.author}
          onChange={handleChange}
        />
        <input
          name="pages"
          type="number"
          placeholder="Pages"
          value={formData.pages}
          onChange={handleChange}
        />
        <input
          name="startDate"
          type="date"
          value={formData.startDate}
          onChange={handleChange}
        />
        <input
          name="genre"
          placeholder="Genre"
          value={formData.genre}
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>Add Book</button>
      </div>
    </div>
  );
}

export default AddBook;
