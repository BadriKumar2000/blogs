import { Component } from "react";
import { TailSpin } from "react-loader-spinner";

import BlogItem from "../BlogItem/blogitem";

import "./blogslist.css";

class BlogsList extends Component {
  state = {
    blogsData: [],
    isLoading: true,
  };

  componentDidMount() {
    this.getBlogsData();
  }

  getBlogsData = async () => {
    const response = await fetch("https://apis.ccbp.in/blogs");
    const data = await response.json();
    // console.log(data);
    const filteredData = data.map((eachBlog) => ({
      id: eachBlog.id,
      author: eachBlog.author,
      imageUrl: eachBlog.image_url,
      avatarUrl: eachBlog.avatar_url,
      topic: eachBlog.topic,
      title: eachBlog.title,
    }));
    this.setState({ blogsData: filteredData, isLoading: false });
  };

  render() {
    const { blogsData, isLoading } = this.state;
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
          blogsData.map((item) => <BlogItem blogData={item} key={item.id} />)
        )}
      </div>
    );
  }
}

export default BlogsList;
