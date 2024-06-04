import React from "react";
import BlogImg from "../assets/IMG_5878.jpeg";
import "./Styles/Blog.css";

const blogPosts = [
  {
    id: 1,
    title: "Digital Revolution Takeoff: Approaching the Digital Divide",
    img: BlogImg,
  
    content: `
      In a rapidly advancing digital era, falling behind means lagging in the race for progress.
      This article views the digital divide positively, acknowledging its reflection on the ongoing
      digital revolution within the context of the fourth industrial revolution. Initiatives like
      Moringa School, GLAD Technology, and Oasis Mathare, alongside organizations such as Youth Voices
      Community (YVC) #DIGIKAZI, a digital livelihood program, are actively bridging this gap. From
      TechLit Africa to #fintech solutions like Payd HQ, #innovators like Benaiah Wepundi are making
      steady strides in "Silicon Savannah", steering the spread of technology solutions, education,
      and consumption across various sectors and regions.
    `,
  },
  // Add more blog posts here
];

function Blog() {
  return (
    <div className="blog-container">
      <h1>Empowering Africa: The Tech Education Movement </h1>
      <div className="blog-grid">
        {blogPosts.map((post, index) => (
          <div
            key={post.id}
            className={`blog-card ${index === 0 ? "featured" : ""}`}
          >
            <div className="img-container">
              <img src={post.img} alt="Blog" className="blog-img" />
            </div>
            <div className="content-container">
              <h2>{post.title}</h2>
              <p>{post.content}</p>
              <a href={`/blog/${post.id}`}>Read More</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
