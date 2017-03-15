import React from 'react';

/*---------COMPONENT---------*/
const JournalInput = ({onSavePost, onChangePostText, onCancelEdit, inputText, editing, transcript}) => {
  
  return(
  <div className="container">
      <div>
          <i className="material-icons">mic</i>
          <i className="material-icons">comment</i>
          <textarea className="flow-text" rows="10" cols="100" value={inputText} onChange={onChangePostText} />
      </div>
      <button className="waves-effect btn btn-large green darken-2" onClick={onSavePost}>{editing ? 'Update' : '+'} Post</button>
      {editing && <button className="waves-effect btn btn-large green darken-4" onClick={onCancelEdit}>Cancel</button>}
  </div>
  );

};

export default JournalInput;
