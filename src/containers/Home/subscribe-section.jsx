export default function Subscribe() {
  return (
    <>
      <div className="relative sm:mt-10 md:mt-10 lg:mt-80 ">
        <div className="w-1/3 -z-50 mt-10  absolute hidden lg:block bottom-[95px]">
          <img className="" src="../src/assets/images/grid.jpg" alt="" />
        </div>
        <div className="bg-primary rounded-2xl p-6 flex justify-between items-center flex-wrap z-10">
          <div>
            <h2 className="text-2xl font-bold">Subscribe to my Newsletter</h2>
            <p className="mt-2">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className="form-control w-full  lg:w-1/3 sm:mt-4 md:mt-4">
            <div className="relative">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered h-14 w-full pr-16"
              />
              <button
                className="btn  bg-accent absolute top-0 right-0 h-14 w-1/3 rounded-l-none tooltip tooltip-bottom "
                data-tip="WIP :)"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
