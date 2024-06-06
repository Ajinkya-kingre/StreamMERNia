// controller/playlistController.js
const Playlist = require("../models/playlists");

const createPlaylist = async (req, res) => {
  try {
    const { title, song } = req.body;
    const userId = req.user.userId; // Assuming the authenticated user's ID is stored in req.user
    console.log(req.user)

    if (!title || !song) {
      return res.status(400).json({ message: "Title and song are required" });
    }

    const playlist = new Playlist({
      title,
      user: userId,
      song,
    });

    await playlist.save();

    return res.status(201).json({ message: "Playlist created", playlist });
  } catch (error) {
    console.error(error);
    return res
      .status(400)
      .json({ message: "Error creating playlist", error: error.message });
  }
};

const getAllPlaylists = async (req, res) => {
  try {
    const userId = req.user._id; // Assuming the authenticated user's ID is stored in req.user
    const playlists = await Playlist.find({ user: userId }).populate("song");
    return res.status(200).json(playlists);
  } catch (error) {
    console.error(error);
    return res
      .status(404)
      .json({ message: "Error fetching playlists", error: error.message });
  }
};

const getPlaylistById = async (req, res) => {
  try {
    const { id } = req.params;
    const playlist = await Playlist.findById(id).populate("song");
    if (!playlist) {
      return res.status(404).json({ message: "Playlist not found" });
    }
    return res.status(200).json(playlist);
  } catch (error) {
    console.error(error);
    return res
      .status(404)
      .json({ message: "Error fetching playlist", error: error.message });
  }
};

const updatePlaylist = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, song } = req.body;

    const updatedPlaylist = await Playlist.findByIdAndUpdate(
      id,
      { title, song }
      //   { new: true }
    );

    if (!updatedPlaylist) {
      return res.status(404).json({ message: "Playlist not found" });
    }

    return res
      .status(200)
      .json({ message: "Playlist updated", updatedPlaylist });
  } catch (error) {
    console.error(error);
    return res
      .status(400)
      .json({ message: "Error updating playlist", error: error.message });
  }
};

const deletePlaylistById = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedPlaylist = await Playlist.findByIdAndDelete(id);
    if (!deletedPlaylist) {
      return res.status(404).json({ message: "Playlist not found" });
    }
    return res.status(200).json({ message: "Playlist deleted successfully" });
  } catch (error) {
    console.error(error);
    return res
      .status(404)
      .json({ message: "Error deleting playlist", error: error.message });
  }
};

module.exports = {
  createPlaylist,
  getAllPlaylists,
  getPlaylistById,
  updatePlaylist,
  deletePlaylistById,
};
