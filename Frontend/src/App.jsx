import React, { useState } from "react";
import axios from "axios";

const App = () => {
  const [files, setFiles] = useState([]);

  const handleFileChange = (event) => {
    setFiles([...event.target.files]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const formData = new FormData();
      for (const file of files) {
        formData.append("files", file);
      }

      const response = await axios.post("http://localhost:5500/image/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("Images uploaded successfully:", response.data);
      // Handle response data as needed
    } catch (error) {
      console.error("Error uploading images:", error);
    }
  };

  return (
    <form encType="multipart/form-data" onSubmit={handleSubmit}>
      <input type="file" name="files" multiple onChange={handleFileChange} />
      <button type="submit">Upload Files</button>
    </form>
  );
};

export default App;
