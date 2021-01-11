import React from "react";

import { Link } from 'react-router-dom';

import CollectionItem from "../collection-item/collection-item";

import "./prieview-collection.styles.scss";

const PreviewCollection = ({ title, items }) => (
  <Link to={`shop/${title.toLowerCase()}`} >
  <div className='collection-preview'>
    <h1 className='title'>{title.toUpperCase()}</h1>
    <div className='preview'>
      {items
        .filter((item, idx) => idx < 4)
        .map( item => (
          <CollectionItem key={item.id} item={item} preview={true} />
        ))}
    </div>
  </div>
  </Link>
);

export default PreviewCollection;
