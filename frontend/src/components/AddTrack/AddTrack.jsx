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
    banner: null,
    heading: "",
    mainImage: null,
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
    const { name, files } = event.target; // Get the input name and files
    const file = files[0]; // Get the first file

    setFormData((prevState) => ({
      ...prevState,
      [name]: file, // Update the specific file input in the state
    }));
  };

  const handleAdd = async (e) => {
    e.preventDefault();

    const trek = new FormData();
    trek.append("name", formData.name);
    trek.append("realPrice", parseInt(formData.realPrice));
    trek.append("discountedPrice", parseInt(formData.discountedPrice));
    trek.append("image", formData.image);
    trek.append("duration", formData.duration);
    trek.append("difficulty", formData.difficulty);
    console.log("Form Data: ", trek);

    const trekdetails = new FormData();

    trekdetails.append("name", formData.name);
    trekdetails.append("mainImage", formData.mainImage);
    trekdetails.append("duration", formData.duration);
    trekdetails.append("difficulty", formData.difficulty);
    trekdetails.append("altitude", formData.altitude);
    trekdetails.append("distance", formData.distance);
    trekdetails.append("transportation", formData.transportation);
    trekdetails.append("meals", formData.meals);
    trekdetails.append("season", formData.season);
    trekdetails.append("trek_type", formData.trek_type);
    trekdetails.append("banner", formData.banner);
    trekdetails.append("heading", formData.heading);
    trekdetails.append("overview", formData.overview);
    trekdetails.append("highlight", formData.highlight);
    trekdetails.append("itinerary", formData.itinerary);
    trekdetails.append("itinerary_details", formData.itinerary_details);

    try {
      const response1 = await fetch("http://localhost:5000/new-trek", {
        method: "POST",
        body: trek,
      });
      if (!response1.ok) {
        throw new Error("Failed to upload track.");
      }

      const result1 = await response1.json();
      console.log("Trek added:", result1);
    } catch (error) {
      console.error("Error uploading trek: ", error);
    }
    try {
      const response2 = await fetch("http://localhost:5000/new-trek-details", {
        method: "POST",
        body: trekdetails,
      });
      if (!response2.ok) {
        throw new Error("Failed to upload track.");
      }

      const result = await response2.json();
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
              <label htmlFor="image">Card Image: </label>
              <input
                type="file"
                accept="image/*"
                placeholder="Image"
                name="image"
                onChange={handleFileChange}
                id="image"
                required
              />
              <label htmlFor="banner">Banner Image: </label>
              <input
                type="file"
                accept="image/*"
                placeholder="Banner Image"
                name="banner"
                onChange={handleFileChange}
                id="banner"
                required
              />
              <label htmlFor="mainImage">Main Image: </label>
              <input
                type="file"
                accept="image/*"
                placeholder="Main Image"
                name="mainImage"
                onChange={handleFileChange}
                id="mainImage"
                required
              />
              <label htmlFor="heading">Heading: </label>
              <input
                type="text"
                placeholder="Heading"
                id="heading"
                name="heading"
                onChange={handleChange}
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
              <label htmlFor="highlight">Highlights: </label>
              <input
                type="text"
                name="highlight"
                placeholder="Highlights"
                onChange={handleChange}
                id="highlight"
              />
              <label htmlFor="itinerary">Itinerary: </label>
              <input
                type="text"
                name="itinerary"
                placeholder="Days"
                onChange={handleChange}
                id="itinerary"
              />
              <label htmlFor="itinerary_details">itinerary_details: </label>
              <input
                type="text"
                name="itinerary_details"
                placeholder="Day's detail"
                onChange={handleChange}
                id="itinerary_details"
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
