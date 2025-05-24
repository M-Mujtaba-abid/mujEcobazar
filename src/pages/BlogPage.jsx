import React from 'react';
import egg from '../assets/latestNews/egg.jpg'
import orange from '../assets/latestNews/orange.jpg'
import plate from '../assets/latestNews/plate.jpg'
const blogData = [
  {
    id: 1,
    title: "5 Health Benefits of Eating Fresh Fruits Daily",
    image: egg,
    summary: "Discover how fruits can boost your immunity, improve digestion, and keep your skin glowing.",
    date: "May 24, 2025",
  },
  {
    id: 2,
    title: "How to Store Vegetables to Keep Them Fresh Longer",
    image: plate,
    summary: "Learn some easy techniques to make your veggies stay crisp and fresh for days.",
    date: "May 20, 2025",
  },
  {
    id: 3,
    title: "Organic vs Non-Organic: What Should You Buy?",
    image: orange,
    summary: "We break down the facts and myths about organic produce and whether it’s worth your money.",
    date: "May 16, 2025",
  },
];

const BlogPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-green-600 mb-10">Latest from Our Blog</h1>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogData.map((blog) => (
            <div key={blog.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <img src={blog.image} alt={blog.title} className="w-full h-56 object-cover" />
              <div className="p-5">
                <p className="text-sm text-gray-500 mb-1">{blog.date}</p>
                <h2 className="text-xl font-semibold text-gray-800 mb-2">{blog.title}</h2>
                <p className="text-gray-600 text-sm">{blog.summary}</p>
                <button className="mt-4 text-green-600 hover:underline">Read More →</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
