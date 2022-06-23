const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const profileSchema = new Schema({
	_id: mongoose.Schema.Types.ObjectId,
	userID: String,
	nickname: String,
	ar: Number,
	server: String,
	uid: Number,
});

module.exports = mongoose.model("Userchm", profileSchema);