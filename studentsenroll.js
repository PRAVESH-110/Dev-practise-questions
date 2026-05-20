// Students can enroll in a course.
// Each course has a max capacity of 50.
// Write a Node.js API endpoint that:
// Enrolls student
// Prevents overbooking
// Prevents double enrollment
// Handles race conditions



import express from "express"
import {z} from "zod"
import jwt from "jsonwebtoken"
import mongoose from "mongoose";
const app=express()
app.use(express.json());

const courseSchema = new mongoose.Schema({
  name: String,
  capacity: { type: Number, default: 50 },
  enrolledCount: { type: Number, default: 0 },
  students: [{ type: mongoose.Schema.Types.ObjectId, ref: "Student" }]
});


app.post('/enroll-student/:id',async function(req,res){
    try{
        const {studentId}= req.params;

        //to prevent duplicate value creation (reace conditions if other is applying simult)
        const existingStudent= await courseSchema.findAndUpdate({
        _id: courseId,
        enrolledCount: { $lt: 50 }, // capacity check
        students: { $ne: studentId } // prevent duplicate
      },
      {
        //set to add only unique values
        $addToSet: { students: studentId },
        $inc: { enrolledCount: 1 }
      },
      { new: true }
    );
    if (!updatedCourse) {
      return res.status(400).json({
        message: "Course full or already enrolled"
      });
    }

    res.json({ message: "Enrolled successfully" });

    }
    catch(err){
        res.status(400).json({
            message:"Failed to create student"
        })
    }
})