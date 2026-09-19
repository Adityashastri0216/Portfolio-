import { Request, Response } from "express";
import prisma from "../config/prisma.js";

export const createMessage = async (
  req: Request,
  res: Response
) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const newMessage = await prisma.message.create({
      data: {
        name,
        email,
        message,
      },
    });

    return res.status(201).json({
      success: true,
      message: "Message sent successfully",
      data: newMessage,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};
