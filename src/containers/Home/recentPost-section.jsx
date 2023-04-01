import React, { useState, useMemo } from "react";

import CategoryCard from "../../components/categoryCard";
import RecentPost from "../../components/recentPost";
import Title from "../../components/shared/title";

const pageSize = 3;

export default function RecentPostSection({
  posts,
  categories,
  currentCategory,
  setCurrentCategory,
  handleDeletePost,
  isLoading
}) {
  //------------- state -------------

  const [currentPage, setCurrentPage] = useState(1);

  let noOfPages = 1;

  //------------- handlers -------------
  const changeCurrentCategory = (id) => {
    console.log("clicked");

    setCurrentCategory(id);
    setCurrentPage(1);
    // console.log(id);
  };

  const changeCurrentPage = (page) => {
    setCurrentPage(page);
  };

  //filter
  let postsToRender = useMemo(() => {
    // console.log("Memo run!!!");
    return currentCategory === 0
      ? posts
      : posts.filter((post) => post.category == currentCategory);
  }, [posts, currentCategory]);

  // pagination
  noOfPages = Math.ceil(postsToRender.length / pageSize);
  const pages = Array(noOfPages)
    .fill(0)
    .map((post, i) => i + 1); //[1,2 ...]

  const start = currentPage * pageSize - pageSize;
  const end = start + pageSize;
  postsToRender = postsToRender.slice(start, end).map((post) => ({
    ...post,
    category: categories.find((category) => category.id === post.category),
  }));


  if (isLoading) {
    return <Loader/>;
  }
  //------------- UI -------------
  return (
    <>
      <div className="mt-8 grid md:grid-cols-12  md:order-1 sm:order-2 gap-10  m-auto justify-center">

      <div className="categories sm:col-span-11 md:col-span-4  md:order-2">
          <Title title="Categories" />
          {categories.length === 0 && (
            <div className="flex justify-center">{/* <Loader /> */}</div>
          )}

          {/*------------- categories -------------*/}
          {categories.length !== 0 &&
            categories.map((category) => (
              <CategoryCard
                key={category.id}
                id={category.id}
                photo={category.photo}
                changeCurrentCategory={changeCurrentCategory}
                category={category.category}
                // categoryNum={postsToRender.length}
              />
            ))}
        </div>
        <div className="recentPost sm:col-span-11 md:col-span-8 ">
          <Title title="Recent Articles" />

          {postsToRender.length === 0 && (
            <div className="flex justify-center">{/* <Loader /> */}</div>
          )}

          {/*------------- posts -------------*/}
          {postsToRender.length !== 0 &&
            postsToRender.map((post) => (
              <RecentPost
                key={post.id}
                post={post}
                id={post.id}
                photo={post.photo}
                title={post.title}
                description={post.description}
                category={post.category?.category || "not categorized"}
                handleDeletePost={handleDeletePost}
                
              />
            ))}

          {/*------------- pagination -------------*/}
          {pages.length > 1 && (
            <div className=" m-14">
              <div className="btn-group flex justify-center">
                {pages.map((page) => (
                  <button
                    onClick={() => changeCurrentPage(page)}
                    key={page}
                    className={`btn ${
                      page === currentPage
                        ? "  active:bg-primary"
                        : "bg-secondary"
                    }`}
                  >
                    {page}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        
      </div>
    </>
  );
}
