const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
	username: mongoose.SchemaTypes.String,
	discordid: {
		type: mongoose.SchemaTypes.String,
		required: true,
	}
})

module.export = mongoose.model("User", profileSchema);