import React, { Component } from "react";
import axios from "axios";

import AllBlogs from "../components/Blogs";
import Pagination from "../components/Pagination";

class Blogs extends Component {
  constructor() {
    super();
    this.state = {
      blogs: [],
      pagination: {}
    };
    
    this.onLoadPage = this.onLoadPage.bind(this);
  }

  componentDidMount() {
    axios.get("https://tuong-blog-api.glitch.me/api/blogs").then(res => {
      this.setState({
        blogs: res.data.blogs,
        pagination: res.data.pagination
      });
    });
  }
  
  onLoadPage(num) {
    axios.get(`https://tuong-blog-api.glitch.me/api/blogs?page=${num}`).then(res => {
      this.setState({
        blogs: res.data.blogs,
        pagination: res.data.pagination
      });
    });
  }

  render() {
    return (
      <div className="Blogs">
        <h2 className="mb-3">Blogs</h2>
        <AllBlogs blogs={this.state.blogs} />
        <Pagination pagination={this.state.pagination} onLoadPage={this.onLoadPage} />
      </div>
    );
  }
}

export default Blogs;
