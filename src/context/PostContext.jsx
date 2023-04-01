import { createContext, useState } from "react";

const PostContext = createContext({});

export function ThemeProvider({ children }) {
  const [state, setState] = useState({
    posts: "",
    categories: "",
    currentCategory: 0,
  });
  //   const [posts, setPosts] = useState([]);

  //   const [categories, setCategories] = useState([]);

  //   const [currentCategory, setCurrentCategory] = useState(0);

  return (
    <PostContext.Provider
      value={{
        ...state,
        setState: (data) => setState({ ...state, ...data }),
      }}
    >
      {children}
    </PostContext.Provider>
  );
}

export default PostContext;
