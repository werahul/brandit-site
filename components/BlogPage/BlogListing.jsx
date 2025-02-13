import React, { useState } from "react";

const BlogListing = () => {
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
    {
      id: 7,
      title: "Lorem ipsum dolor sit amet consectetur. Sagittis",
      service: "Service 4",
      image: "https://picsum.photos/id/118/400/400",
      description: "Lorem ipsum",
    },
    {
      id: 8,
      title: "Lorem ipsum dolor sit amet consectetur. Sagittis",
      service: "Service 6",
      image: "https://picsum.photos/id/178/400/400",
      description: "Lorem ipsum",
    },
    {
      id: 9,
      title: "Lorem ipsum dolor sit amet consectetur. Sagittis",
      service: "Service 2",
      image: "https://picsum.photos/id/138/400/400",
      description: "Lorem ipsum",
    },
    {
      id: 10,
      title: "Lorem ipsum dolor sit amet consectetur. Sagittis",
      service: "Service 4",
      image: "https://picsum.photos/id/118/400/400",
      description: "Lorem ipsum",
    },
    {
      id: 11,
      title: "Lorem ipsum dolor sit amet consectetur. Sagittis",
      service: "Service 6",
      image: "https://picsum.photos/id/178/400/400",
      description: "Lorem ipsum",
    },
    {
      id: 12,
      title: "Lorem ipsum dolor sit amet consectetur. Sagittis",
      service: "Service 2",
      image: "https://picsum.photos/id/138/400/400",
      description: "Lorem ipsum",
    },
  ];

  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(blogs.length / itemsPerPage);

  const currentBlogs = blogs.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <div className="bg-white text-[#1C1D58] rounded-[80px] py-[120px] px-0">
      <div className="max-container px-16">
        <div className="grid lg:grid-cols-3 gap-6">
          {currentBlogs.map((blog) => (
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

      {/* Pagination */}
      <div className="flex items-center justify-center mt-8 gap-4">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          className="text-green-400 text-xl disabled:opacity-50"
          disabled={currentPage === 1}
        >
          <svg
            width="34"
            height="34"
            viewBox="0 0 34 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.3" clip-path="url(#clip0_226_1875)">
              <path
                d="M0.386894 18.058C0.387287 18.0584 0.387618 18.0589 0.38808 18.0593L7.27673 24.9147C7.7928 25.4283 8.62751 25.4263 9.1412 24.9102C9.65483 24.3941 9.65285 23.5594 9.13679 23.0458L4.51175 18.4432L32.4316 18.4432C33.1598 18.4432 33.75 17.8529 33.75 17.1248C33.75 16.3967 33.1598 15.8065 32.4316 15.8065L4.51181 15.8065L9.13672 11.2038C9.65279 10.6902 9.65477 9.8555 9.14114 9.33943C8.62744 8.82323 7.79266 8.82145 7.27666 9.33495L0.388011 16.1904C0.387618 16.1908 0.387286 16.1912 0.386825 16.1916C-0.129506 16.707 -0.127858 17.5444 0.386894 18.058Z"
                fill="#45D400"
              />
            </g>
            <defs>
              <clipPath id="clip0_226_1875">
                <rect
                  width="33.7498"
                  height="33.7498"
                  fill="white"
                  transform="translate(33.75 34) rotate(180)"
                />
              </clipPath>
            </defs>
          </svg>
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            className={`w-10 scale-105 h-10 flex items-center justify-center rounded-full text-green-500 transition-all ${
              currentPage === index + 1 ? "bg-green-600 text-[#ffffff]" : ""
            }`}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          className="text-green-400 text-xl disabled:opacity-50"
          disabled={currentPage === totalPages}
        >
          <svg
            width="34"
            height="34"
            viewBox="0 0 34 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.3" clip-path="url(#clip0_226_1879)">
              <path
                d="M33.3631 15.942C33.3627 15.9416 33.3624 15.9411 33.3619 15.9407L26.4733 9.08532C25.9572 8.57175 25.1225 8.57366 24.6088 9.0898C24.0952 9.60587 24.0971 10.4406 24.6132 10.9542L29.2383 15.5568H1.31835C0.590226 15.5568 0 16.1471 0 16.8752C0 17.6033 0.590226 18.1935 1.31835 18.1935H29.2382L24.6133 22.7962C24.0972 23.3098 24.0952 24.1445 24.6089 24.6606C25.1226 25.1768 25.9573 25.1786 26.4733 24.6651L33.362 17.8096C33.3624 17.8092 33.3627 17.8088 33.3632 17.8084C33.8795 17.293 33.8779 16.4556 33.3631 15.942Z"
                fill="#45D400"
              />
            </g>
            <defs>
              <clipPath id="clip0_226_1879">
                <rect width="33.7498" height="33.7498" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default BlogListing;
