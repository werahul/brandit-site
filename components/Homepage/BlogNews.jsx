import Link from "next/link";
import React from "react";

const BlogNews = () => {
  const blogs = [
    {
      id: 1,
      title: "Influencer Marketing’s Role in PR Campaigns",
      service: "Influencer Marketing",
      image: "/blogsImg/blog1.png",
      path: "/blogs/influencer-marketings-role-in-pr-campaigns ",
    },
    {
      id: 2,
      title: "PR vs Advertising: Why earned media wins",
      service: "Public Relations",
      image: "/blogsImg/blog2.png",
      path: "/blogs/pr-vs-advertising-why-earned-media-wins ",
    },
    {
      id: 3,
      title: "The power of storytelling in PR",
      service: "Brand Storytelling",
      image: "/blogsImg/blog3.png",
      path: "/blogs/the-power-of-storytelling-in-pr ",
    },
    {
      id: 4,
      title: "The psychology behind VIP guestlist curation",
      service: "Guestlist Curation",
      image: "/blogsImg/blog4.png",
      path: "/blogs/the-psychology-behind-vip-guestlist-curation ",
    },
    {
      id: 5,
      title: "How storytelling supercharges your brand connections",
      service: "Brand Storytelling",
      image: "/blogsImg/blog5.png",
      path: "/blogs/how-storytelling-supercharges-your-brand-connections ",
    },
    {
      id: 6,
      title: "Why your brand needs strategy to thrive in the market",
      service: "Brand Strategy Consulting",
      image: "/blogsImg/blog6.png",
      path: "/blogs/why-your-brand-needs-strategy-to-thrive-in-the-market ",
    },
  ];

  return (
    <div className="bg-white text-[#1C1D58] lg:pt-10 px-0">
      <div className="max-container lg:px-16 px-5">
        <div className="lg:flex justify-between items-center mb-8">
          <h2 className="text-[36px] lg:text-h2 font-bold">Perspectives</h2>
          <Link href="/blogs" className="hidden lg:block hover:underline">
            View All
          </Link>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {blogs.map((blog, index) => (
            <Link href={blog.path}>
              <div
                key={blog.id}
                className={`relative rounded-lg overflow-hidden cursor-pointer group h-[397px] transition-all duration-300 ${
                  index >= 3 ? "hidden lg:block" : ""
                }`}
              >
                {/* Overlay */}
                <div className="absolute inset-0 bg-[#D9E7D9] transition-opacity duration-300 group-hover:opacity-0"></div>

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-40"></div>

                {/* Image */}
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover scale-105 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100"
                />

                {/* Service Tag */}
                <span className="absolute top-4 left-4 px-3 py-1 bg-white text-[#1C1D58] text-sm rounded">
                  {blog.service}
                </span>

                {/* Content */}
                <div className="p-6 absolute bottom-0 left-0 w-full">
                  <h3 className="text-[20px] lg:text-[24px] leading-[28px] transition-colors duration-300 group-hover:text-white">
                    {blog.title}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="lg:hidden mt-0 flex items-center justify-center">
          <Link href="/blogs">
            <span className="hover:underline">View All</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogNews;
