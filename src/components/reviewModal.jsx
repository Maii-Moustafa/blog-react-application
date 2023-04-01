import { useAuthContext } from "../hooks/useAuthContext";

export default function ReviewModal({ title, description, photo }) {
  //------------- state -------------
  const { user } = useAuthContext();

  //------------- UI -------------
  return (
    <>
      {/*------------------------------------------------------------------------------------- TODO: handle photo ,category agaain :( */}
      {/* The button to open modal */}
      <label
        htmlFor="my-modal-5"
        className="btn btn-outline btn-outline-secondary hover:bg-accent  w-1/2"
      >
        Review Post
      </label>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal-5" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <h3 className="font-bold text-lg">Your Post</h3>
          {/* ------------- Review Post------------- */}
          <div className="recentPost  ">
            {/* <RecentPost /> */}
            <div className="card  bg-base-100 shadow-xl mt-10">
              <figure style={{ height: "400px" }}>
                {photo ? (
                  photo && <img src={photo} alt="post photo" />
                ) : (
                  <img
                    className="w-full"
                    src="https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png"
                    alt="image placeholder"
                  />
                )}
              </figure>

              <div className="card-body p-4">
                <div className="bg-primary text-accent text-sm  font-medium uppercase text-center p-2 rounded-xl w-1/6 ">
                  category
                </div>
                <h2 className="card-title">
                  {title ? title : "Title "}
                  {/* <div className="badge badge-secondary">NEW</div> */}
                </h2>
                <p>{description ? description : "Description "}</p>
              </div>
              <div className="card-footer flex items-center">
                <div className="avatar">
                  <div className="w-24 rounded-full">
                    <img src="../src/assets/images/avatar1.jpg" />
                  </div>
                </div>
                <p className=" text-gray-500 capitalize">
                  by{""}
                  {user && (
                    <span className=" uppercase font-semibold mr-4">
                      {user?.user?.firstname} {user?.user?.lastName}
                    </span>
                  )}
                  <span className=" font-thin text-sm">- 10 DEC 2023 -</span>
                </p>
              </div>
            </div>
          </div>
          <div className="modal-action flex justify-center">
            <label htmlFor="my-modal-5" className="btn w-1/2 ">
              OK
            </label>
          </div>
        </div>
      </div>
    </>
  );
}
