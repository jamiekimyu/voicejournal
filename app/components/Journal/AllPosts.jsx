import React from 'react';
import marked from 'marked';

function filterPosts(posts, filterText) {
  if (filterText.length === 0) return posts;
  return posts.filter(post => new RegExp(filterText, 'i').test(post.text));
}

const AllPosts = ({onStartPostEdit, onDeletePost, posts, filterText}) => {

  return(
  <div>
    {filterPosts(posts, filterText).map((post, idx) =>
      <div key={post.date}>
        {/*{post.date}*/}
        <i onClick={() => onStartPostEdit(idx)} className="material-icons" title="Edit Post">mode_edit</i>
        <i onClick={() => onDeletePost(idx)} className="material-icons" title="Delete Post">delete</i>
        <div dangerouslySetInnerHTML={{__html: marked(post.text)}} />
      </div>)}
  </div>
  );
  
};

export default AllPosts;
