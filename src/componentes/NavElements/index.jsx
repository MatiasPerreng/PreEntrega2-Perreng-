import React from 'react';

function NavElements(props) {
  return (
    <li>
      <a href="#" className="item-list">
        {props.value}
      </a>
    </li>
  );
}

export default NavElements;
