"use server";
import prisma from "@/utils/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

export const getAllTasks = async () => {
  return await prisma.task.findMany({
    orderBy: { createdAt: "desc" },
  });
};

export const createTask = async (formData) => {
  const content = formData.get("content");
  await prisma.task.create({
    data: {
      content,
    },
  });
  revalidatePath("/tasks");
};

export const createTaskCustom = async (prevState, formData) => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const content = formData.get("content");
  const Task = z.object({
    content: z.string().min(5, "Task must be at least 5 characters"),
  });
  try {
    Task.parse({ content });
    await prisma.task.create({
      data: {
        content,
      },
    });
    revalidatePath("/tasks");

    return { message: "success with creating task", status: "success" };
  } catch (error) {
    console.log("error", error);
    return { message: error.errors[0].message, status: "error" };
  }
};

export const deleteTask = async (prevState, formData) => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const id = formData.get("id");

  try {
    const test = await prisma.task.delete({
      where: { id },
    });
    // revalidatePath("/tasks");
    console.log("test", test);
    // how to update state here and revalidate path
    return { message: "Task deleted", status: "success" };
  } catch (error) {
    return { message: "error.errors[0].message", status: "error" };
  }
};

export const getTask = async (id) => {
  return await prisma.task.findUnique({
    where: { id },
  });
};

export const editTask = async (formData) => {
  const id = formData.get("id");
  const content = formData.get("content");
  const completed = formData.get("completed") === "on" ? true : false;
  await prisma.task.update({
    where: { id },
    data: { content, completed },
  });
  redirect("/tasks");
};
