import axios from "axios";
import { useEffect, useState } from "react";

import { toast } from "react-toastify";

const usePost = () => {
  //------------- state -------------
  const [posts, setPosts] = useState([]);

  const [featuredPosts, setFeaturedPosts] = useState([]);

  const [categories, setCategories] = useState([]);

  const [currentCategory, setCurrentCategory] = useState(0);

  const [isLoading, setIsLoading] = useState(null);
  const [error, setError] = useState(null);

  const handleFeaturedPost = (data) => {
    const fPosts = [...data];
    const featuredP = fPosts.filter((post) => {
      return post.feature;
    });

    setFeaturedPosts(featuredP);
  };
  //------------- Effects -------------
  useEffect(() => {
    setIsLoading(true);
    async function getCategories() {
      try {
        const { data } = await axios.get("http://localhost:3000/categories");
        setCategories(data);
        setIsLoading(false);
      } catch (error) {
        toast("Something went wrong, please try again later...");
        setIsLoading(false);

        // setError(error.message);
        // toast(error);
      }
    }

    async function getPosts() {
      try {
        const { data } = await axios.get("http://localhost:3000/posts");

        setPosts(data);
        handleFeaturedPost(data);
        setIsLoading(false);
        // console.log(featuredP);
      } catch (error) {
        toast("Something went wrong, please try again later...");
        setIsLoading(false);
        // setError(error.message);
        // toast(error);
      }
    }

    getPosts();
    getCategories();
  }, []); //[] after first render only

  return {
    posts,
    setPosts,
    categories,
    setCategories,
    currentCategory,
    setCurrentCategory,
    featuredPosts,
    setFeaturedPosts,
    isLoading,
  };
};

export default usePost;
