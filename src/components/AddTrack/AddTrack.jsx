import React from "react";
import "./AddTrack.css";

const AddTrack = () => {
  return (
    <>
      <div className="addtrack">
        <form action="" className="addtrack-container">
          <div className="addtrack-title">
            <h2>"Login"</h2>
            <p className="cross">X</p>
          </div>
          <div className="addtrack-details">
            <label htmlFor="name">Track Name: </label>
            <input type="text" placeholder="Track Name" id="name" required />
            <label htmlFor="duration">Duration: </label>
            <input type="text" placeholder="Duration" id="duration" required />
            <label htmlFor="difficulty">Difficulty: </label>
            <input type="text" placeholder="Difficulty" id="difficulty" />
            <label htmlFor="realPrice">Real Price: </label>
            <input
              type="number"
              placeholder="Real Price"
              id="realPrice"
              required
            />
            <label htmlFor="finalPrice">Final Price:</label>
            <input
              type="number"
              placeholder="Final Price"
              id="finalPrice"
              required
            />
            <label htmlFor="image">Image: </label>
            <input
              type="file"
              accept="image/*"
              placeholder="Image"
              id="image"
              required
            />
          </div>
          <button type="submit">Add</button>
        </form>
      </div>
    </>
  );
};

export default AddTrack;
