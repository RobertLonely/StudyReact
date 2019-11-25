import React from "react";

export default class SendComment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <label htmlFor="man"> 评论人: </label>
        <input type="text" id="man" ref="man" />
        <label htmlFor="content"> 评论人: </label>
        <textarea id="content" cols="50" rows="5" ref="content"></textarea>
        <input type="button" value="发布评论" onClick={this.addComment} />
      </div>
    );
  }

  addComment = () => {
    // 1. 从本地存储中，先获取之前的评论数组
    // 2. 获取到评论人和评论内容
    // 3. 把最新的这条评论，unshift 进去
    // 4. 在把最新的评论数组，保存到本地存储中

    var all = JSON.parse(localStorage.getItem("allComment") || "[]");

    var cmtInfo = {
      id: all.length,
      user: this.refs.man.value,
      content: this.refs.content.value
    };

    all.unshift(cmtInfo);
    localStorage.setItem("allComment", JSON.stringify(all));
    this.refs.man.value = this.refs.content.value = "";
    this.props.reload();
  };
}
