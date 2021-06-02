import React from "react";

const PaginatedList = ({list, Component}) => {
  return (
  <ul>
    {list.map(item => 
    <Component key={item.id} post={item} />
    )}
  </ul>
  )
}

export default PaginatedList;
