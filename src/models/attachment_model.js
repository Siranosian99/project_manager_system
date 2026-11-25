/*
Alan	Tip	Açıklama
task	ObjectId	Hangi Task'a eklendiği (Task)
uploadedBy	ObjectId	Dosyayı yükleyen kullanıcı (User)
fileName	String	Dosyanın orijinal adı
fileUrl	String	Dosyanın saklandığı konumun URL'si
fileType	String	Dosyanın türü (image, pdf, video vb.)
fileSize	Number	Dosyanın boyutu (byte)
 */

import mongoose from "mongoose";
const attachmentSchema = new mongoose.Schema(
  {
    task: { type: mongoose.Schema.Types.ObjectId, ref: "Task", required: true },
    uploadedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    fileName: {
      type: String,
      required: true,
      trim: true,
    },
    fileUrl: { type: String, required: true },
    fileType: { type: String, required: true },
    fileSize: { type: Number, required: true, min: 0 },
  },
  { timestamps: true },
);

const Attachment = mongoose.model("Attachment", attachmentSchema);
export default Attachment;
