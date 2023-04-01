import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import axios from "axios";
import { toast } from "react-toastify";

import { useAuthContext } from "../hooks/useAuthContext";
import useUploadImg from "../hooks/useUploadImg";

import Input from "../components/shared/input";
import Footer from "../components/shared/footer";
import ReviewModal from "../components/reviewModal";
import UploadButton from "../components/upload button ";
import Title from "../components/shared/title";

import Loader from "../components/shared/loader";

export default function Post({ categories, handleAddNewPost, handleEditPost }) {
  //------------- state -------------
  const { postid } = useParams();

  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    description: "",
    category: "1",
    photo: "",
    imageURL: "",
  });

  const { user } = useAuthContext();

  const {
    selectedImg,
    setSelectedImg,
    onChangeFile,
    handleUpload,
    isLoading,
    error,
  } = useUploadImg();

  const [errorr, setError] = useState(null);
  const [Loading, setIsLoading] = useState(null);
  //------------- effect -------------
  useEffect(() => {
    async function fetchPostById() {
      const { data } = await axios.get(`http://localhost:3000/posts/${postid}`);
      console.log(data);
      setForm({
        title: data.title,
        description: data.description,
        category: +data.category,
        photo: data.photo,
        imageURL: data.imageURL,
      });
      console.log(form);
    }

    if (postid !== "add") fetchPostById();
  }, []);

  //------------- handlers -------------
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // call BE
    try {
      if (postid === "add") {
        await handleAdd();
      } else {
        await handleEdit();
      }
      // navigate to the home page
      navigate("/");
    } catch (error) {
      console.log(error);
      toast("Something went wrong, please try again later...");
    }
  };

  const handleAdd = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const { data } = await axios.post("http://localhost:3000/posts", {
        userId: user.user.id,
        title: form.title,
        description: form.description,
        category: +form.category,
        photo: form.imageURL ? form.imageURL : selectedImg.Url,
      });
      console.log(data);
      // console.log(user.id);
      // update app state
      handleAddNewPost(data);
      setIsLoading(false);

      toast.success("Post added successfully");
    } catch (error) {
      toast("Something went wrong, please try again later...");
    }
  };

  const handleEdit = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const { data } = await axios.patch(
        `http://localhost:3000/posts/${postid}`,
        {
          userId: user.user.id,
          title: form.title,
          description: form.description,
          category: +form.category,
          photo: form.imageURL ? form.imageURL : selectedImg.Url,
          // URL.createObjectURL(selectedImage),
        }
      );
      handleEditPost(data);
      setIsLoading(false);

      toast.success("Post edited successfully");
    } catch (error) {
      toast.error("Something went wrong, please try again later...");
      setError(error);
    }
  };

  if (isLoading) {
    return <Loader />;
  }

  //------------- UI -------------
  return (
    <>
      <div className="container mx-auto ">
        <div className="mt-8  shadow-md">
          {/* ------------- form ------------- */}
          <div className="form mt-20">
            <div className="w-full  p-10 text-center mb-20">
              {/* <h1 className="text-3xl my-4">
                {postid === "add" ? "Create your own post" : "Edit POST"}
              </h1> */}
              <Title
                title={postid === "add" ? "Create your own post" : "Edit POST"}
                className="w-1/2"
              />
              <form onSubmit={handleSubmit}>
                <div className="flex flex-col justify-center items-center ">
                  <div className="w-1/2 p-4 ">
                    <Input
                      type="text"
                      label="Title"
                      name="title"
                      value={form.title}
                      onChange={handleChange}
                    />
                    <label htmlFor="description" className="label">
                      <span className="label-text">Description</span>
                    </label>
                    <textarea
                      className="textarea textarea-bordered textarea-lg w-full  "
                      label="description"
                      name="description"
                      value={form.description}
                      onChange={handleChange}
                      required
                    />
                    <div className="form-control w-full ">
                      <label htmlFor="category" className="label">
                        <span className="label-text">Category</span>
                      </label>
                      <select
                        name="category"
                        value={form.category}
                        onChange={handleChange}
                        className="select select-accent w-full "
                      >
                        {categories.slice(1).map((category) => (
                          <option key={category.id} value={category.id}>
                            {category.category}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="   mt-10 flex  justify-center items-center">
                      <UploadButton
                        handleChange={handleChange}
                        form={form}
                        selectedImg={selectedImg}
                        onChangeFile={onChangeFile}
                        handleUpload={handleUpload}
                        isLoading={isLoading}
                        error={error}
                      />
                    </div>
                  </div>
                </div>

                <div className=" flex flex-col justify-center items-center mt-6">
                  <button
                    className="btn bg-accent my-3 w-1/2"
                    type="submit"
                    disabled={Loading}
                  >
                    {postid === "add" ? "Add" : "Update"}
                  </button>

                  {/* ------------- Review Post------------- */}
                  <ReviewModal
                    title={form.title}
                    description={form.description}
                    photo={form.Photo}
                    selectedImg={selectedImg}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
