import { CreateForm } from "./create-form";
import "./createpost.css";

export const CreatePost = () => {
  return (
    <div className="post-container">
        <p> Create a Post</p>
        <CreateForm />
    </div>
  );
};
