import React from "react";
import { connect } from "react-redux";

import { selectSections } from "../../redux/directory/directory.selectors";

import MenuItem from "../menu-item/menu-item";

import "./directory.styles.scss";

const Directory = ({ sections }) => (
  <div className="directory-menu">
    {sections.map(({ id, ...otherProps }) => (
      <MenuItem key={id} {...otherProps}></MenuItem>
    ))}
  </div>
);

const mapStateToProps = (state) => ({
  sections: selectSections(state),
});

export default connect(mapStateToProps)(Directory);