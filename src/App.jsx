import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import usePost from "./hooks/usePosts";

import NavBar from "./components/navBar";
import SignUp from "./pages/sign-up";
import LogIn from "./pages/log-in";
import Home from "./pages/home";
import Post from "./pages/Post";
import Error from "./pages/notFound.JSX";
import Loader from "./components/shared/loader";

function App() {
  //------------- state -------------
  const {
    posts,
    setPosts,
    categories,
    setCategories,
    currentCategory,
    setCurrentCategory,
    featuredPosts,
    isLoading,
    error
  } = usePost();

  const [loading, setLoading] = useState(false);

  const { user } = useAuthContext();
  //------------- Effects -------------
  //------------- Loading -------------
  // useEffect(() => {
  //   setLoading(true);

  //   const timeout = setTimeout(() => {
  //     setLoading(false);
  //   }, 2000);

  //   return () => {
  //     clearTimeout(timeout);
  //     setLoading(false);
  //   };
  // }, []);

  if (isLoading) {
    return <Loader/>;
  }

  //------------- Handler -------------
  const handleAddNewPost = (post) => {
    setPosts([...posts, post]);
  };

  const handleDeletePost = (deletedPost) => {
    setPosts(posts.filter((post) => post.id !== deletedPost.id));
  };

  const handleEditPost = (editedPost) => {
    setPosts(
      posts.map((post) =>
        post.id === editedPost.id ? { ...editedPost } : post
      )
    );
  };

  //------------- UI -------------
  return (
    <>
      <BrowserRouter>
        <ToastContainer />

        <NavBar />

        <Routes>
          <Route
            path="/"
            element={
              <Home
                posts={posts}
                categories={categories}
                currentCategory={currentCategory}
                setCurrentCategory={setCurrentCategory}
                handleDeletePost={handleDeletePost}
                featuredPosts={featuredPosts}
              />
            }
          />
          <Route
            path="/register"
            element={!user ? <SignUp /> : <Navigate to="/" />}
          />
          <Route
            path="/login"
            element={!user ? <LogIn /> : <Navigate to="/" />}
          />
          
          <Route
            path="/post/:postid"
            element={
              user ? (
                <Post
                  categories={categories}
                  handleAddNewPost={handleAddNewPost}
                  handleEditPost={handleEditPost}
                />
              ) : (
                <Navigate to="/login" />
              )
            }
          />

          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
