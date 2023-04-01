export default function CategoryCard({
  id,
  photo,
  category,
  changeCurrentCategory,
  categoryNum,
}) {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(
            ${photo} 
            )`,
          backgroundPosition: "center",
          // backgroundSize: "cover",
          height: "570px",
          border: "30px solid  rgba(255, 255, 255, 0)",
          borderRadius: "60px",
          boxShadow: "inset 0px 0px 0px 2px rgb(235, 195, 166)",
          boxSizing: "border-box",
        }}
        // {/*------------------------------------------------------------------------------------- TODO: animation + active onclick */}
        className=" card relative  bg-base-100 shadow-xl  mt-10 p-10 flex justify-end overflow-hidden md:h-[300px] "
        onClick={() => changeCurrentCategory(id)}
      >
        <div>
          <div
            className="btn card-body bg-white p-4 mb-15 border-0 hover:bg-accent "
            style={{
              borderRadius: "10px",
            }}
          >
            <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-white bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-40"></div>

            <h2
              style={{
                // color: "rgb(235, 195, 166)",
                color: "black",
                borderRadius: "10px",
              }}
              className=" card-title flex justify-center z-10 "
            >
              {/*------------------------------------------------------------------------------------- TODO: Display number of each category */}
              {category}
              {/* {`(${categoryNum})`} */}
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}
