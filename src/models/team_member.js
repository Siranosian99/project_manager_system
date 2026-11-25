import mongoose from "mongoose";
const teamMemberSchema = new mongoose.Schema(
  {
    team: {
      type: mongoose.Shemea.Types.ObjectId,
      ref: "Team",
      required: true,
    },
    user: {
      type: mongoose.Shemea.Types.ObjectId,
      ref: "User",
      required: true,
    },
    role: {
      type: String,
      enum: ["admin", "member", "viewer"],
      default: "member",
    },
    joinedAt: { type: Date, default: Date.now },
  },
  { timestamps: true },
);
teamMemberSchema.index({ team: 1, user: 1 }, { unique: true });

const TeamMember = mongoose.model("teamMemberSchema", teamMemberSchema);
export default TeamMember;
