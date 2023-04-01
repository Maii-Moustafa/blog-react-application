import React, { useMemo } from "react";
import FeaturedPost from "../../components/featuredPost";
import Title from "../../components/shared/title";

export default function FeaturedPostSection({ categories, featuredPosts }) {
  //
  featuredPosts = useMemo(() => {
    return featuredPosts?.map((post) => ({
      ...post,
      category: categories.find((category) => category.id === post.category),
    }));
  }, [categories]);
  //------------- UI -------------
  return (
    <>
      <Title title="Featured Articles" />
      <div className="grid md:grid-cols-12 gap-4 flex-wrap mt-8">
        {featuredPosts.length !== 0 &&
          featuredPosts?.map((post) => {
            return (
              <FeaturedPost
                key={post.id}
                title={post.title}
                description={post.description}
                category={post.category?.category}
                photo={post.photo}
              />
            );
          })}
      </div>
    </>
  );
}
