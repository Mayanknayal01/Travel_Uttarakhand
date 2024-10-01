import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import multer from "multer";
import db from "./db.js";

const port = 5000;

// create app
const app = express();

// middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json()); //req.body

//multer

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

db.connect();
// routes

// create a track
app.post("/new-track", upload.single("image"), async (req, res) => {
  try {
    const { name, duration, difficulty, realPrice, discountedPrice } = req.body;
    const image = req.file;
    if (!image) {
      return res.status(400).send("Image file is required");
    }
    const imageData = image.buffer;

    const insertQuery = `
    INSERT INTO tracks (name, duration, difficulty, realPrice, discountedPrice, image)
    VALUES ($1, $2, $3, $4, $5, $6)
    RETURNING *;
    `;
    const values = [
      name,
      duration,
      difficulty,
      parseFloat(realPrice),
      parseFloat(discountedPrice),
      imageData,
    ];
    console.log(values);

    const result = await db.query(insertQuery, values);
    res.status(200).json(result.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Error occurred while uploading the track.");
  }
});

// GET ALL TRACK
// GET ALL TRACK
app.get("/tracks", async (req, res) => {
    try {
        const allTracks = await db.query("SELECT * FROM tracks");
        
        // Convert the image buffer to a Base64 string
        const tracksWithBase64Images = allTracks.rows.map(track => {
            return {
                ...track,
                image: track.image ? `data:image/jpeg;base64,${track.image.toString('base64')}` : null // Convert buffer to Base64 string
            };
        });

        res.json(tracksWithBase64Images);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Error fetching tracks.");
    }
});


// update track
// app.put("/track/:id", (req,res)=>{
//     const {id} = req.params;
//     const {name} = req.body;
//     const updateTrack = db.query("UPDATE test SET name = $1 WHERE id=$2",[name, id]);
//     res.json("track is updated.");
// });

// delete track.
// app.delete("/track/:id", (req, res)=>{
//     try {
//         const {id} = req.params;
//         const deleteTrack = db.query("DELETE FROM test WHERE id = $1", [id]);
//         res.json("track was deleted.");
//     } catch (err) {
//         console.log(err.message);
//     }
// });

app.listen(port, () => {
  console.log(`Server has started on port ${port}...`);
});
