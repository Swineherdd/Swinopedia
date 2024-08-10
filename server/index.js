import express  from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import helmet from "helmet";
import cors from "cors";
import dotenv from "dotenv";
import multer from "multer";
import morgan from "morgan";
import path from "path";
import { fileURLToPath } from "url";
import { error } from "console";
import { register } from "./controllers/auth.js";
import authRoutes from "./routes/auth.js";
import { verify } from "crypto";
import { verifyToken } from "./middleware/auth.js";
import userRoutes from "./routes/users.js";
import postRoutes from "./routes/posts.js"
import {createPost} from "./controllers/posts.js";
import User from "./modules/User.js";
import Post from "./modules/Post.js";
import {users, posts} from "./data/index.js"
// popa

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({policy: "cross-origin"}));
app.use(morgan("common"));
app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());
app.use("/assets", express.static(path.join(__dirname, 'public/assets')));

// file popa
const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, "public/assets");

    },
    filename: function(req, file, cb){
        cb(null, file.originalname);
    }
});
const upload = multer({storage});
// routes reg
app.post("/auth/register", upload.single("picture") ,register);
app.post('/posts', verifyToken, upload.single('picture'), createPost);
// routes
app.use("/auth", authRoutes);
app.use("/users", userRoutes);
app.use("/posts", postRoutes);
// MONGOOSE
const PORT = process.env.PORT || 6001;
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,

}).then(() =>
{
    // User.insertMany(users);
    // Post.insertMany(posts);
   app.listen(PORT, ()=> console.log(`Server Port: ${PORT}`));
}).catch((error) => console.log(`${error} didnt connect`))

