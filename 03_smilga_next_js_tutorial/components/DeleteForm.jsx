"use server";
import { deleteTask } from "@/utils/actions";

const DeleteForm = async ({ id }) => {
  console.log(id);
  return (
    <form action={deleteTask}>
      <input type="hidden" name="id" value={id} />
      <button type="submit" className="btn btn-xs btn-error">
        Delete task
      </button>
    </form>
  );
};
export default DeleteForm;
