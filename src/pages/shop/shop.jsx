import React from "react";
import { Route, Switch } from 'react-router-dom';

import CollectionsOverview from '../../components/collection-overview/collection-overview';
import CollectionPage from '../collection/collection';

const ShopPage = ({ match }) => {
  return(
    <div className="shop-page">
      <Switch>
      <Route path={`${match.path}/:collection`} component={CollectionPage} />
      <Route path={`${match.path}`} component={CollectionsOverview} />
      </Switch>
    </div>
  )};

export default ShopPage;
