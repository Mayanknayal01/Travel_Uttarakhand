import React, { useState } from "react";
import "./AddTrack.css";


const AddTrack = () => {
  const [formData, setFormData] = useState({
    name: "",
    duration: "",
    difficulty: "",
    realPrice: "",
    discountedPrice: "",
    image: null,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFileChange = (event) => {
    setFormData((prevState) => ({
      ...prevState,
      image: event.target.files[0],
    }));
  };

  const handleAdd = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("name", formData.name);
    data.append("duration", formData.duration);
    data.append("difficulty", formData.difficulty);
    data.append("realPrice", parseInt(formData.realPrice));
    data.append("discountedPrice", parseInt(formData.discountedPrice));
    data.append("image", formData.image);
    console.log("Form Data: ", data);

    try {
      const response = await fetch("http://localhost:5000/new-trek", {
        method: "POST",
        body: data,
      });
      if (!response.ok) {
        throw new Error("Failed to upload track.");
      }

      const result = await response.json();
      console.log("Trek added:", result);
      window.location.reload();
    } catch (error) {
      console.error("Error uploading trek: ", error);
    }
  };

  return (
    <>
      {/* treks entry */}

      <div className="main">
        <div className="addtrackone">
          <form className="addtrack-container" onSubmit={handleAdd}>
            <div className="addtrack-title">
              <h2>"Add Treks"</h2>
            </div>
            <div className="addtrack-details">
              <label htmlFor="name">Trek Name: </label>
              <input
                type="text"
                placeholder="Track Name"
                id="name"
                name="name"
                onChange={handleChange}
                required
              />
              <label htmlFor="duration">Duration: </label>
              <input
                type="text"
                placeholder="Duration"
                id="duration"
                name="duration"
                onChange={handleChange}
                required
              />
              <label htmlFor="difficulty">Difficulty: </label>
              <input
                type="text"
                name="difficulty"
                placeholder="Difficulty"
                onChange={handleChange}
                id="difficulty"
              />
              <label htmlFor="realPrice">Real Price: </label>
              <input
                type="number"
                placeholder="Real Price"
                id="realPrice"
                name="realPrice"
                onChange={handleChange}
                required
              />
              <label htmlFor="finalPrice">Discounted Price:</label>
              <input
                type="number"
                placeholder="Discounted Price"
                id="finalPrice"
                name="discountedPrice"
                onChange={handleChange}
                required
              />
              <label htmlFor="image">Image: </label>
              <input
                type="file"
                accept="image/*"
                placeholder="Image"
                name="image"
                onChange={handleFileChange}
                id="image"
                required
              />
            </div>
            <button type="submit">Add</button>
          </form>
        </div>

        {/* homestays entry */}

        <div className="addtracktwo">
          <form className="addtrack-container">
            <div className="addtrack-title">
              <h2>"Add Homestays"</h2>
            </div>
            <div className="addtrack-details">
              <label htmlFor="homestayname">Trek Name: </label>
              <input
                type="text"
                placeholder="Track Name"
                id="homestayname"
                required
              />
              <label htmlFor="homestayduration">Duration: </label>
              <input
                type="text"
                placeholder="Duration"
                id="homestayduration"
                required
              />
              <label htmlFor="homestaydifficulty">Difficulty: </label>
              <input
                type="text"
                placeholder="Difficulty"
                id="homestaydifficulty"
              />
              <label htmlFor="homestayrealPrice">Real Price: </label>
              <input
                type="number"
                placeholder="Real Price"
                id="homestayrealPrice"
                required
              />
              <label htmlFor="homestayfinalPrice">Discounted Price:</label>
              <input
                type="number"
                placeholder="Discounted Price"
                id="homestayfinalPrice"
                required
              />
              <label htmlFor="homestayimage">Image: </label>
              <input
                type="file"
                accept="image/*"
                placeholder="Image"
                id="homestayimage"
                required
              />
            </div>
            <button type="submit">Add</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddTrack;
