"use client";
import DoctorImage from "@/assets/doctor.jpg"
import { useGetAllBlogs } from "@/hooks/useBlogs";
import Image from "next/image";

const BlogPage = () => {
  const { data: blogs, isLoading, error } = useGetAllBlogs();

  if (isLoading) {
    return <p className="text-center text-xl">Loading blogs...</p>;
  }

  if (error) {
    return (
      <p className="text-center text-xl text-red-600">
        Error loading blogs: {error.message}
      </p>
    );
  }

  return (
    <div className="min-h-screen p-6">
      <h1 className="text-3xl font-semibold text-center mb-8">Latest <span className="text-green-600"> Blogs </span></h1>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {blogs.slice(0, 10).map((blog) => (
          <div
            key={blog.id}
            className="bg-white border border-green-200 rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl flex flex-col"
          >
            {/* Optional: Add an image for each blog */}
            {/* <img src="https://via.placeholder.com/400x200" alt="Blog Image" className="w-full h-48 object-cover" /> */}
            <Image src={DoctorImage}
            alt="Thumbnail"
            height={400}
            width={600}
            className="w-full" />
            <div className="flex-1 p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                <a
                  href={`/blog/${blog.id}`}
                  className="hover:text-green-600 transition duration-300"
                >
                  {blog.title}
                </a>
              </h3>
              <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                {blog.body}
              </p>
              <a
                href={`/blog/${blog.id}`}
                className="text-green-600 hover:text-green-800 transition duration-300"
              >
                Read More →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
