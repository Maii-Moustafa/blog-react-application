import { useForm } from "react-hook-form";

import usePost from "../hooks/usePosts";
import ImageUpload from "../components/FileUpload";

export default function AddPost() {
  //------------- state -------------

  const { posts, setPosts, categories, currentCategory, setCurrentCategory } =
    usePost();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // setPosts(data);
  };

  

  // useEffect(() => {
  //   async function fetchProductById() {
  //     const { data } = await axios.get(
  //       `http://localhost:3000/menu/${productid}`
  //     );
  //     setForm({
  //       name: data.name,
  //       price: data.price,
  //       category: data.category,
  //     });
  //   }

  //   if (productid !== "add") fetchProductById();
  // }, []);

  // const handleChange = (e) => {
  //   setForm({ ...form, [e.target.name]: e.target.value });
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   // call BE
  //   try {
  //     if (productid === "add") {
  //       await handleAdd();
  //     } else {
  //       await handleEdit();
  //     }
  //     // navigate to the admin page
  //     navigate("/admin");
  //   } catch (error) {
  //     console.log(error);
  //     toast("Something went wrong, please try again later...");
  //   }
  // };

  // const handleAdd = async () => {
  //   const { data } = await axios.post("http://localhost:3000/menu", {
  //     name: form.name,
  //     price: +form.price,
  //     category: +form.category,
  //     inCart: false,
  //     count: 0,
  //   });
  //   // update app state
  //   handleAddNewProduct(data);
  // };

  // const handleEdit = async () => {
  //   const { data } = await axios.put(
  //     `http://localhost:3000/menu/${productid}`,
  //     {
  //       name: form.name,
  //       price: +form.price,
  //       category: +form.category,
  //       inCart: false,
  //       count: 0,
  //     }
  //   );
  //   handleEditProduct(data);
  // };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col container mx-auto">
          {/* register your input into the hook by invoking the "register" function */}
          <input
            className="input input-bordered w-full max-w-xs mt-4"
            // defaultValue="test"
            {...register("title", { required: true })}
          />
          {errors.title && (
            <div className="alert alert-error shadow-lg max-w-xs mt-2">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="stroke-current flex-shrink-0 h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>Error! required.</span>
              </div>
            </div>
          )}

          {/* include validation with required or other standard HTML validation rules */}
          <textarea
            className="textarea textarea-bordered textarea-lg w-full max-w-xs mt-4"
            {...register("description", { required: true })}
          />

          {/* errors will return when field validation fails  */}
          {errors.description && (
            <div className="alert alert-error shadow-lg max-w-xs mt-2">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="stroke-current flex-shrink-0 h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>Error! required.</span>
              </div>
            </div>
          )}

          {/* <input
            type="file"
            className="file-input file-input-bordered file-input-warning w-full max-w-xs mt-4"
            {...register("photo", { required: true })}
          /> */}

          <div className="container">
            <div className="content">
              <ImageUpload 
              register={register}
              handleSubmit={handleSubmit}
              />
            </div>
          </div>
          {errors.title && (
            <div className="alert alert-error shadow-lg max-w-xs mt-2">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="stroke-current flex-shrink-0 h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>Error! required.</span>
              </div>
            </div>
          )}

         
          <input className="btn btn-primary mt-4" type="submit" />
        </div>
      </form>
    </>
  );
}
