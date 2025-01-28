import React from "react";

const BlogNews = () => {
  const blogs = [
    {
      id: 1,
      title: "Lorem ipsum dolor sit amet consectetur. Sagittis",
      service: "Service 6",
      image: "https://picsum.photos/id/134/400/400",
      description: "Lorem ipsum",
    },
    {
      id: 2,
      title: "Lorem ipsum dolor sit amet consectetur. Sagittis",
      service: "Service 4",
      image: "https://picsum.photos/id/144/400/400",
      description: "Lorem ipsum",
    },
    {
      id: 3,
      title: "Lorem ipsum dolor sit amet consectetur. Sagittis",
      service: "Service 2",
      image: "https://picsum.photos/id/154/400/400",
      description: "Lorem ipsum",
    },
    {
      id: 4,
      title: "Lorem ipsum dolor sit amet consectetur. Sagittis",
      service: "Service 4",
      image: "https://picsum.photos/id/114/400/400",
      description: "Lorem ipsum",
    },
    {
      id: 5,
      title: "Lorem ipsum dolor sit amet consectetur. Sagittis",
      service: "Service 6",
      image: "https://picsum.photos/id/174/400/400",
      description: "Lorem ipsum",
    },
    {
      id: 6,
      title: "Lorem ipsum dolor sit amet consectetur. Sagittis",
      service: "Service 2",
      image: "https://picsum.photos/id/134/400/400",
      description: "Lorem ipsum",
    },
  ];

  return (
    <div className="bg-white text-[#1C1D58] pt-10 px-0">
      <div className="max-container px-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-h2 font-bold ">Blog/News</h2>
          <span className="">Lorem ipsum</span>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="relative rounded-lg overflow-hidden cursor-pointer group h-[397px] transition-all duration-300"
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-[#D9E7D9] opacity-100 transition-opacity duration-300 group-hover:opacity-0"></div>

              {/* Image */}
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-full object-cover scale-105 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100"
              />

              {/* Service Tag */}
              <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-sm bg-white ">
                {blog.service}
              </span>

              {/* Content */}
              <div className="p-6 absolute bottom-0 left-0 w-full">
                <p className="text-sm mb-2">{blog.description}</p>
                <h3 className="text-lg font-semibold">{blog.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogNews;
