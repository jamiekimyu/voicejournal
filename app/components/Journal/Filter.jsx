import React from 'react';

const Filter = ({onChangeFilterText, filterText}) => {

  return(

    <div>
        <i className="material-icons medium">search</i>
        <input 
          className="card grey lighten-4" 
          value={filterText} 
          onChange={onChangeFilterText}
        /> 
    </div>

  );

}

export default Filter;
