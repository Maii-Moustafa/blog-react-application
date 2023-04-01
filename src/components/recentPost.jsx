import { Link } from "react-router-dom";

import axios from "axios";
import { toast } from "react-toastify";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css

import { useAuthContext } from "../hooks/useAuthContext";

import { BiEditAlt } from "react-icons/Bi";
import { MdDeleteForever } from "react-icons/Md";

export default function RecentPost({
  id,
  post,
  photo,
  title,
  description,
  category,
  handleDeletePost,
}) {
  //
  //------------- state -------------
  const { user } = useAuthContext();
  //------------- handlers -------------
  const handleDelete = async (post) => {
    {
      /*------------------------------------------------------------------------------------- TODO: when delete an only post in page -> empty pagination*/
    }

    confirmAlert({
      title: "Delete post",
      message: "Are you sure to do this.",
      buttons: [
        {
          label: "Yes",
          onClick: async () => {
            try {
              console.log(post);
              // call be
              const { data } = await axios.delete(
                `http://localhost:3000/posts/${post.id}`
              );
              // update app state
              handleDeletePost(post);
              toast.success("Post deleted successfully!", {
                position: toast.POSITION.TOP_CENTER,
              });
            } catch (error) {
              toast.error("Something went wrong, please try again later...", {
                position: toast.POSITION.TOP_CENTER,
              });
              console.log(error);
            }
          },
        },
        {
          label: "No",
          // onClick: () => alert('Click No')
        },
      ],
    });
  };

  //------------- UI -------------
  return (
    <>
      <div className="card  bg-base-100 shadow-xl mt-10">
        <figure style={{ height: "570px" }}>
          <img
            className="w-full transition duration-300 ease-in-out hover:scale-110"
            src={
              photo
                ? photo
                : "https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png"
            }
            alt="post image"
          />
        </figure>
        <div className="card-body p-4">
          <div className="bg-primary text-accent text-sm  font-medium uppercase text-center p-2 rounded-xl w-1/6 ">
            {category}
          </div>
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
        </div>
        {user && (
          <div className="card-footer pr-4 flex justify-between items-center">
            <div className="flex items-center">
              <div className="avatar">
                <div className="w-24 rounded-full">
                  <img src="../src/assets/images/avatar1.jpg" />
                </div>
              </div>

              <p className=" text-gray-500 capitalize">
                by{" "}
                <span className=" uppercase font-semibold mr-4">
                  {user?.user?.firstname} {user?.user?.lastName}
                </span>
                <span className=" font-thin text-sm">- 10 DEC 2023 -</span>
              </p>
            </div>
            {user && user?.user.id === post.userId && (
              <div className="flex">
                <div>
                  <Link to={`/post/${id}`}>
                    <BiEditAlt className=" text-2xl mr-2 hover:text-accent" />
                  </Link>
                </div>

                <div>
                  <MdDeleteForever
                    onClick={() => handleDelete(post)}
                    className=" text-2xl hover:text-red-700"
                  />
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
}
