import { useContext, useEffect, useState } from "react";
import BlogCard from "./BlogCard";
import AddBlog from "./AddBlog";
import { AuthContext } from "../../Authentication/AuthProvider";
const Blogs = () => {
  const { user } = useContext(AuthContext);
  // console.log(user);
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  //   console.log(blogs);
  return (
    <div className="max-w-7xl mx-auto mt-5">
      <h1 className="dark:text-white font-semibold text-5xl text-center mb-5">
        All Blogs
      </h1>
      <div className="flex w-32 mt-1 overflow-hidden rounded mx-auto mb-3 md:mb-14">
        <div className="flex-1 h-2 bg-teal-200"></div>
        <div className="flex-1 h-2 bg-teal-400"></div>
        <div className="flex-1 h-2 bg-teal-300"></div>
      </div>
      <div className="grid grid-cols-1 mb-10 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
        {blogs?.map((blog) => (
          <BlogCard key={blog.id} blog={blog}></BlogCard>
        ))}
      </div>
      {/* add blog */}

      {user && <AddBlog></AddBlog>}
    </div>
  );
};

export default Blogs;
