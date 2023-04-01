export default function FeaturedPost({ photo, title, description, category }) {
  return (
    <div className="card sm:col-span-12 md:col-span-6 lg:col-span-3 bg-base-100 shadow-xl mt-8">
      <figure>
        <img
          className="w-full  h-64 transition duration-300 ease-in-out hover:scale-110"
          src={photo}
          alt="Shoes"
        />
      </figure>

      <div className="card-body p-4">
        <div className="bg-primary text-accent text-xs  font-medium uppercase text-center p-1 rounded-md w-1/4 ">
          {category}
        </div>
        <h2 className="card-title">{title}</h2>

        <p className=" font-thin text-xs"> 10 DEC 2023 </p>
      </div>
    </div>
  );
}

// https://pbs.twimg.com/media/CmTAcUxUkAASHCh?format=jpg&name=4096x4096
//https://i.pinimg.com/736x/41/88/b9/4188b955e34449b282a54146114bcbe0.jpg
//https://usefuldiyprojects.com/wp-content/uploads/2021/11/recyclable-materials-scaled.jpg
