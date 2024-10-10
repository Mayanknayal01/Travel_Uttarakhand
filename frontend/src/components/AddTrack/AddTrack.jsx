import React, { useState } from "react";
import "./AddTrack.css";


const AddTrack = () => {
  const [formData, setFormData] = useState({
    name: "",
    duration: "",
    difficulty: "",
    altitude: "",
    distance: "",
    transportation: "",
    meals: "",
    season: "",
    trek_type: "",
    realPrice: "",
    discountedPrice: "",
    image: null,
    overview: "",
    highlight: "",
    itinerary: "",
    itinerary_details: "",
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
    data.append("altitude", formData.altitude);
    data.append("distance", formData.distance);
    data.append("transportation", formData.transportation);
    data.append("meals", formData.meals);
    data.append("season", formData.season);
    data.append("trek_type", formData.trek_type);
    data.append("realPrice", parseInt(formData.realPrice));
    data.append("discountedPrice", parseInt(formData.discountedPrice));
    data.append("image", formData.image);
    data.append("overview", formData.overview);
    data.append("highlight", formData.highlight);
    data.append("itinerary", formData.itinerary);
    data.append("itinerary_details", formData.itinerary_details);
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
              <label htmlFor="altitude">Altitude: </label>
              <input
                type="text"
                name="altitude"
                placeholder="Altitude"
                onChange={handleChange}
                id="altitude"
              />
              <label htmlFor="distance">Distance: </label>
              <input
                type="text"
                name="distance"
                placeholder="Distance"
                onChange={handleChange}
                id="distance"
              />
              <label htmlFor="transportation">Transportation: </label>
              <input
                type="text"
                name="transportation"
                placeholder="Transportation"
                onChange={handleChange}
                id="transportation"
              />
              <label htmlFor="meals">Meals: </label>
              <input
                type="text"
                name="meals"
                placeholder="Meals"
                onChange={handleChange}
                id="meals"
              />
              <label htmlFor="season">Season: </label>
              <input
                type="text"
                name="season"
                placeholder="Season"
                onChange={handleChange}
                id="season"
              />
              <label htmlFor="trek_type">Trek type: </label>
              <input
                type="text"
                name="trek_type"
                placeholder="solo/group"
                onChange={handleChange}
                id="trek_type"
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
              <label htmlFor="image">Thumbnail Image: </label>
              <input
                type="file"
                accept="image/*"
                placeholder="Image"
                name="image"
                onChange={handleFileChange}
                id="image"
                required
              />
              <label htmlFor="overview">Overview: </label>
              <input
                type="text"
                name="overview"
                placeholder="Overview"
                onChange={handleChange}
                id="overview"
              />
              <label htmlFor="highlights">Highlights: </label>
              <input
                type="text"
                name="highlights"
                placeholder="Highlights"
                onChange={handleChange}
                id="highlights"
              />
              <label htmlFor="itinerary">Itinerary: </label>
              <input
                type="text"
                name="days"
                placeholder="Days"
                onChange={handleChange}
                id="days"
              />
              <label htmlFor="itinerary_details"></label>
              <input
                type="text"
                name="detail"
                placeholder="Day's detail"
                onChange={handleChange}
                id="detail"
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
