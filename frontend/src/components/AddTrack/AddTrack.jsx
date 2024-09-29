import React from "react";
import "./AddTrack.css";

const AddTrack = () => {
  return (
    <>

    {/* treks entry */}

      <div className="main">
        <div className="addtrackone">
          <form action="" className="addtrack-container">
            <div className="addtrack-title">
              <h2>"Add Treks"</h2>
            </div>
            <div className="addtrack-details">
              <label htmlFor="name">Trek Name: </label>
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
              <label htmlFor="finalPrice">Discounted Price:</label>
              <input
                type="number"
                placeholder="Discounted Price"
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

        {/* homestays entry */}

        <div className="addtracktwo">
          <form action="" className="addtrack-container">
            <div className="addtrack-title">
              <h2>"Add Homestays"</h2>
            </div>
            <div className="addtrack-details">
              <label htmlFor="name">Trek Name: </label>
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
              <label htmlFor="finalPrice">Discounted Price:</label>
              <input
                type="number"
                placeholder="Discounted Price"
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
      </div>
    </>
  );
};

export default AddTrack;
