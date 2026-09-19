import { Request, Response } from "express";
import prisma from "../config/prisma.js";

export const getProjects = async (
  _req: Request,
  res: Response
) => {
  try {
    const projects = await prisma.project.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    res.json({
      success: true,
      data: projects,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch projects",
    });
  }
};
