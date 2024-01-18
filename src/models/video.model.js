import mongoose, {Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregrate-paginate-v2";

const videoSchema = new Schema(
{
  videofile: {
    type: Strimg // cloudinary url
    required: ture
  }
  thumbnail: {
    type: Strimg // cloudinary url
    required: ture
  }
},
title: {
    type: Strimg // cloudinary url
    required: ture
  },
  description: {
    type: Strimg,
    required: ture
  }
  duration: {
    type: Number, 
    required: ture
  },
  views: {
    type: Number,
    default: 0
  },
  isPublished: {
    type: Boolean,
    default: ture
  },
  owner: {
    type: Schema.Types.objecId,
    ref: "User"
  }

{

      timestamps: ture
}


)

videoSchema.plugin(mongooseAggregatePaginate)
export const video = mongoose.model("Video", videoSchema)















































