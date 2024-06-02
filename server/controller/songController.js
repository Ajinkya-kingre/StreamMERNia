const Song = require("../models/song");

const addSong = async (req, res) => {
  try {
    const { title, artist, url } = req.body;

    if (!title || !artist || !url) {
      return res.status(400).json({ message: "Fill all the required fields" });
    }

    const song = new Song({
      title,
      artist,
      url,
    });

    await song.save();

    return res.status(200).json({ message: "Song added", song });
  } catch (error) {
    console.error(error);
    return res
      .status(400)
      .json({ message: "Error adding song", error: error.message });
  }
};

const getAllSongs = async (req, res) => {
  try {
    const songs = await Song.find();
    return res.status(200).json(songs);
  } catch (error) {
    console.error(error);
    return res
      .status(404)
      .json({ message: "Error fetching songs", error: error.message });
  }
};

const getSongById = async (req, res) => {
  try {
    const { id } = req.params;
    const song = await Song.findById(id);
    if (!song) {
      return res.status(404).json({ message: "Song not found" });
    }
    return res.status(200).json({ message: "Fetched the song", song });
  } catch (error) {
    console.error(error);
    return res
      .status(404)
      .json({ message: "Error fetching the song", error: error.message });
  }
};

const deleteSongById = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedSong = await Song.findByIdAndDelete(id);
    if (!deletedSong) {
      return res.status(404).json({ message: "Song not found" });
    }
    return res.status(200).json({ message: "Song deleted successfully" });
  } catch (error) {
    console.error(error);
    return res
      .status(404)
      .json({ message: "Error deleting the song", error: error.message });
  }
};

module.exports = { addSong, getAllSongs, getSongById, deleteSongById };
