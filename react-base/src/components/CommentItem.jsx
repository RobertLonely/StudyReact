import React from "react";
//导入CommentItem组件的样式
import cItem from '@/css/cItem.scss'

export default function CommentItem(props) {
  return (
    <div className={cItem.box}>
      <h1 className={cItem.title}>评论人:{props.user}</h1>
      <h1 className={cItem.content}>评论内容:{props.content}</h1>
    </div>
  );
}
