import mongoose, {Schema, Document, Model} from "mongoose";

// Define typescript interface for message document 
export interface IMessage extends Document {
    user: string;
    message: string; 
    type?: 'text' | 'image' | 'file'; //type property of message 
    createdAt?: Date;
    updatedAt?: Date; 
} 

// create schema for the above interface 
const messageSchema: Schema = new Schema<IMessage>({
    user: {type: String, required: true}, 
    message: {type: String, required: true},
    type: {type: String, enum: ['text', 'image', 'file'], default: 'text'},
}, {
    timestamps: true, // Automatically add createdAt and updatedAt fields
  }); 

//exports the Message model with the specified schema and TypeScript interface
export const Message: Model<IMessage> = mongoose.model<IMessage>('Message', messageSchema); 