import React from 'react';
import PropTypes from 'prop-types';
import './subMenu.css';

function SubMenu({ children }) {
  return (
    <div className="dropdown" data-dropdown>
      <button type="button" className="link" data-dropdown-button>Maintenance</button>
      <div className="dropdown-options">
        {children}
      </div>
    </div>
  );
}

SubMenu.defaultProps = {
  children: [],
};

SubMenu.propTypes = {
  children: PropTypes.element,
};
export default SubMenu;
