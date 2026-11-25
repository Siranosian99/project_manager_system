/*
Alan	    Tip	        Açıklama
name	    String	    Etiketin adı
color	    String	    Etiketin rengi (Hex color)
project	    ObjectId	Hangi projeye ait olduğu (Project)
createdBy	ObjectId	Etiketi oluşturan kullanıcı (User)
 */
import mongoose from "mongoose";
const labelSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      minlength: 2,
      maxlength: 30,
    },
    color: { type: String, required: true, match: /^#([A-Fa-f0-9]{6})$/ },
    project: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Project",
      required: true,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true },
);
const Label = mongoose.model("labelSchema", labelSchema);
export default Label;
