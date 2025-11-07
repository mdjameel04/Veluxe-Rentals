import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken'


export const registerUser = async (req, res)=>{
    try {
        const {name, email, password}= req.body;

        const userExists = await User.findOne({email});
       if(userExists) return res.status(400).json({message: "user already exists"})

      const hashedPassword = await bcrypt.hash(password, 10)
const newUser = await User.create({
    name,
    password: hashedPassword,
    email
});
res.status(201).json({message:"user created succesfully",
    user: { id: newUser._id, name: newUser.name, email: newUser.email },
})
    } catch (error) {
        res.status(500).json({message:error.message })
    }
};

export const loginUser = async (req,res)=>{
    try {
        const {email,password} = req.body
      const user = await User.findOne({email});
      if(!user) return res.status(404).json({message: "user not found"})
     
        const isMatch = await bcrypt.compare(password, user.password) 
        if(!isMatch) return res.status(404).json({message:"invalid credentials"})

            const token = jwt.sign(
                {id:user._id, email: user.email},
                process.env.JWT_SECRET,
                {expiresIn: "7d"}
            );
            res.json({ message: "Login successful", token, user: { id: user._id, name: user.name, email: user.email }});
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}