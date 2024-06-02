const express = require("express");
const upload = require("../middlewares/uploads");
const { isAuthenticated } = require("../middlewares/isAuthenticated");
const {
  addSong,
  getAllSongs,
  getSongById,
  deleteSongById,
} = require("../controller/songController");
const router = express.Router();

router.route("/songs").post(isAuthenticated, upload, addSong);
router.route("/songs").post(isAuthenticated, getAllSongs);
router.route("/songs/:id").post(isAuthenticated, getSongById);
router.route("/songs/:id").post(isAuthenticated, deleteSongById);


module.exports = router