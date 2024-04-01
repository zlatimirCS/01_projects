"use client";
import React, { useEffect } from "react";
import { deleteTask } from "@/utils/actions";
import { useFormStatus, useFormState } from "react-dom";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const DeleteButton = () => {
  const { pending } = useFormStatus();
  return (
    <button type="submit" className="btn btn-xs btn-error">
      {pending ? "Deleting task..." : "Delete"}
    </button>
  );
};

const initialState = {
  message: null,
  status: null,
};

const DeleteForm = ({ id }) => {
  const [stateCur, formAction] = useFormState(deleteTask, initialState);
  const router = useRouter();
  useEffect(() => {
    if (stateCur.status === "error") {
      toast.error(stateCur.message);
      return;
    }
    if (stateCur.status === "success") {
      console.log("ovde smo usli opet");
      toast.success(stateCur.message);
      router.refresh();
      return;
    }
  }, [stateCur]);
  console.log("state", stateCur);
  return (
    <form action={formAction}>
      <input type="hidden" name="id" value={id} />
      <DeleteButton />
    </form>
  );
};
export default DeleteForm;
