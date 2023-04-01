import Header from "../containers/Home/header-section";
import FeaturedPostSection from "../containers/Home/featuredPost-section";
import RecentPostSection from "../containers/Home/recentPost-section";
import CreateButton from "../components/roundButton";
import Subscribe from "../containers/Home/subscribe-section";
import Footer from "../components/shared/footer";

export default function Home({
  posts,
  categories,
  currentCategory,
  setCurrentCategory,
  handleDeletePost,
  featuredPosts,
  isLoading
}) {

 
  return (
    <>
      <Header />
      <div className="container mx-auto">
        <Subscribe />
        <FeaturedPostSection
          featuredPosts={featuredPosts}
          posts={posts}
          categories={categories}
          isLoading={ isLoading}
        />
        <RecentPostSection
          posts={posts}
          categories={categories}
          currentCategory={currentCategory}
          setCurrentCategory={setCurrentCategory}
          handleDeletePost={handleDeletePost}
          isLoading={ isLoading}
        />
        <CreateButton />
      </div>

      <Footer />
    </>
  );
}
