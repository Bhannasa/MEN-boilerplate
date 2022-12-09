const { Schema, default: mongoose } = require("mongoose");

const UserSchema = new Schema(
    {
        name: { type: String, required: true },
        mobileNumber: { type: String, required: true },
        OTP: { type: Number },
        isOTPVerified: { type: Boolean, default: false },
        password: { type: String, required: true },
        isActive: { type: Boolean, default: false, required: true },
    }, { timestamps: true }
)
module.exports = mongoose.model('User', UserSchema);