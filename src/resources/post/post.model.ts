import { Schema, model} from 'mongoose'
import Post from '@/resources/post/post.interface'

const PostSchema = new Schema(
    {
        title:{
            type: 'string',
            required: true,
        },
        body:{
            type:'string',
            required: true,
        },
    },
    { timestamps: true }
)

export default model<Post>('Post', PostSchema) 