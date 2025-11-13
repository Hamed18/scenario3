import { model, Schema } from "mongoose";
import { IUser } from "./user.interface";
import config from "../../config";
import bcrypt from "bcrypt";

const userSchema = new Schema<IUser>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Please provide your email"],
      unique: true,
      validate: {
        validator: function (value: string) {
          return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(value);
        },
        message: "{VALUE} is not a valid email",
      },
      immutable: true,
    },
    role: {
      type: String,
      enum: {
        values: ["Admin", "Gamer"],
        message: "{VALUE} is not a valid role. Valid roles are Admin, Gamer.",
      },
      default: "Gamer",
      required: true,
    },
    password: {
      type: String,
      required: true,
      select: false,
    },
    isActive: {
      type: Boolean,
      default: true,
      required: true,
    },

    // ✅ Newly added fields
    whatsapp: {
      type: String,
      required: [true, "WhatsApp number is required"],
      trim: true,
    },
    address: {
      type: String,
      required: [true, "Current address is required"],
      trim: true,
    },
    institution: {
      type: String,
      required: [true, "Institution name is required"],
      trim: true,
    },
    gameUID: {
      type: String,
      required: [true, "In-game UID is required"],
      trim: true,
    },
  },
  {
    timestamps: true, // optional 
  }
);

userSchema.pre("save", async function (next) {
  const user = this;
  if (user.isModified("password")) {
    user.password = await bcrypt.hash(
      user.password,
      Number(config.bcrypt_salt_rounds)
    );
  }
  next();
});

userSchema.post("save", function (doc, next) {
  doc.password = "";
  next();
});

const User = model<IUser>("User", userSchema);
export default User;
