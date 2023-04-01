export default function Footer() {
  return (
    <>
      <footer
        className="footer footer-center relative p-10 bg-footer text-base-content rounded gap-y-4 "
        style={{ marginTop: "260px" }}
      >
        <div
          style={{ bottom: "132px", backgroundColor: "rgb(255 ,240 ,255)" }}
          className="grid md:grid-cols-8 gap-4 w-3/4  absolute p-6 bg-gray-100 text-base-content rounded-3xl z-10 "
        >
          <div
            style={{
              backgroundImage: `url(
            https://pbs.twimg.com/media/CmTAcUxUkAASHCh?format=jpg&name=4096x4096
            )`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              width: "100%",
              height: "340px",
              borderRadius: "10px",
            }}
            className="hidden md:hidden lg:block lg:col-span-2"
          ></div>
          <div
            style={{
              backgroundImage: `url(
                https://usefuldiyprojects.com/wp-content/uploads/2021/11/recyclable-materials-scaled.jpg
            )`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              width: "100%",
              height: "340px",
              borderRadius: "10px",
            }}
            className="hidden md:hidden lg:block lg:col-span-2"
          ></div>
          <div
            style={{
              backgroundImage: `url(
                https://i.pinimg.com/736x/41/88/b9/4188b955e34449b282a54146114bcbe0.jpg )`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              width: "100%",
              height: "340px",
              borderRadius: "10px",
            }}
            className="sm:col-span-8 md:col-span-4 lg:col-span-2"
          ></div>
          <div
            style={{
              backgroundImage: `url(
                https://i.pinimg.com/736x/4c/4e/f2/4c4ef201462c7042e3cb6dd00e791131.jpg
            )`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              width: "100%",
              height: "340px",

              borderRadius: "10px",
            }}
            className="hidden md:block lg:block md:col-span-4 lg:col-span-2"
          ></div>
        </div>
        <div className="grid grid-flow-col gap-4 mt-36  text-lg text-white">
          <a className="link link-hover">Home</a>
          <a className="link link-hover tooltip tooltip-top " data-tip="WIP :)">
            About us
          </a>
          <a className="link link-hover">Contact</a>
        </div>
        {/* <img className=" w-16 mt-10" src="../src/assets/images/logo.png" alt="" /> */}
        <div>
          <p className="text-white">
            Copyright © 2023 - All right reserved by ACME Industries Ltd
          </p>
        </div>
      </footer>
    </>
  );
}
