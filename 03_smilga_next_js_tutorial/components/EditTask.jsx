import { editTask } from "@/utils/actions";

const EditTask = ({ task }) => {
  const { id, completed, content } = task;
  return (
    <form
      action={editTask}
      className="max-w-sm p-12 border border-base-300 rounded-lg"
    >
      <input type="hidden" name="id" value={task.id} />
      <input
        type="text"
        required
        name="content"
        defaultValue={task.content}
        className="input input-bordered w-full"
      />
      <div className="form-control">
        <label className="cursor-pointer label">
          <span className="label-text">Completed</span>
          <input
            type="checkbox"
            name="completed"
            defaultChecked={task.completed}
            className="checkbox checkbox-primary checkbox-sm"
          />
        </label>
      </div>
      <button type="submit" className="btn btn-primary btn-block btn-sm">
        Edit Task
      </button>
    </form>
  );
};
export default EditTask;
