import { IoMdArrowDropright } from "react-icons/Io";

export default function Header() {
  return (
    <>
      <div className="bg-primary ">
        <div className="container mx-auto grid md:columns-4 p-8 ">
          <div className="  sm:col-span-4 md:col-span-4 lg:col-span-1 lg:w-1/2 mt-16 mb-16 ">
            <p className="text-md">
              LIFESTYLE , APRIL 04{" "}
              <IoMdArrowDropright className=" inline m-0 p-0 " />
              <IoMdArrowDropright className=" inline m-0 p-0 " />
              <IoMdArrowDropright className=" inline" />
            </p>
            <h1 className="mt-5 text-6xl font-bold">
              I Shouted Above The Sudden Noise
            </h1>
            <p className="mt-5">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero,
              temporibus dolor commodi tempora consequatur amet iste. Et
              consectetur aspernatur culpa? Recusandae et id sed. Consectetur
              obcaecati omnis et error perferendis.
            </p>
            <button
              className="btn btn-outline btn-outline-secondary hover:bg-secondary hover:border-0  w-1/3 mt-5 tooltip tooltip-bottom "
              data-tip="WIP :)"
            >
              Read More
            </button>
          </div>
          <div className="relative  mt-10 hidden lg:block  lg:col-span-3">
            <img
              className="rounded-3xl absolute	 w-1/3 right-[90px] bottom-[-225px]"
              src="https://images.unsplash.com/photo-1488161628813-04466f872be2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTZ8MTEwMDUxNHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=2000&q=60"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}
