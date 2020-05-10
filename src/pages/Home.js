import React, { Component } from "react";
import axios from "axios";

import Blogs from '../components/Blogs';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      blogs: []
    };
  }

  componentDidMount() {
    axios.get("https://tuong-blog-api.glitch.me/api/blogs").then(res => {
      this.setState({
        blogs: res.data.blogs
      });
    });
  }

  render() {
    return <div className="Home">
      <h2 className='mb-3'>Newest Blogs</h2>
      <Blogs blogs={this.state.blogs}/>
    </div>;
  }
}

export default Home;
