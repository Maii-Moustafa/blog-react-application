import { Link } from "react-router-dom";

import { TbPencilPlus } from "react-icons/Tb";

export default function CreateButton() {
  return (
    <>
      <Link to="/post/add">
        <button
          className="btn bg-accent btn-circle fixed bottom-80 right-2 tooltip tooltip-left border-0 "
          data-tip="create new post"
        >
          <span className="flex justify-center items-center">
            <TbPencilPlus className=" text-3xl" />
          </span>
        </button>{" "}
      </Link>
    </>
  );
}
