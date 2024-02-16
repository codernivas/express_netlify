const express = require('express');
const router = express.Router();
const authMiddle = require('../helper/auth'); // Import your authentication middleware
const featureCollection = require('../model/featureSchema'); // Import your feature collection model

// POST endpoint to add a new feature
router.post("/features", authMiddle, async (req, res) => {
  try {
    // Extract feature data from the request body
    const { image, postTitle, postDesc } = req.body;

    // Create a new feature document
    const newFeature = new featureCollection({
      image,
      postTitle,
      postDesc
    });

    // Save the new feature to the database
    await newFeature.save();

    // Return success response
    res.status(201).json({ message: "Feature added successfully", feature: newFeature });
  } catch (error) {
    // Handle errors
    console.error("Error adding feature:", error);
    res.status(500).json({ message: "Server error" });
  }
});
module.exports = router;
