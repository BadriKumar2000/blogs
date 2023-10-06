import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { TailSpin } from "react-loader-spinner";
import "./itemdetails.css";

const BlogItemDetails = () => {
  const [blogsData, updateBlogDate] = useState([]);
  const [isLoading, updateIsLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const getBlogItemDetails = async (id) => {
      const response = await fetch(`https://apis.ccbp.in/blogs/${id}`);
      const data = await response.json();
      const updatedData = {
        title: data.title,
        imageUrl: data.image_url,
        content: data.content,
        avatarUrl: data.avatar_url,
        author: data.author,
      };
      updateBlogDate(updatedData);
      updateIsLoading(false);
    };
    getBlogItemDetails(id);
  });

  const renderBlogItemDetails = () => {
    const { title, imageUrl, content, avatarUrl, author } = blogsData;
    return (
      <div className="blog-info">
        <h2 className="blog-details-title">{title}</h2>

        <div className="author-details">
          <img className="author-pic" src={avatarUrl} alt={author} />
          <p className="details-author-name">{author}</p>
        </div>

        <img className="blog-image" src={imageUrl} alt={title} />
        <p className="blog-content">{content}</p>
      </div>
    );
  };

  return (
    <div className="blog-list-container">
      {isLoading ? (
        <TailSpin
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="tail-spin-loading"
          radius="1"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      ) : (
        <div className="blog-container">{renderBlogItemDetails()}</div>
      )}
    </div>
  );
};

export default BlogItemDetails;
