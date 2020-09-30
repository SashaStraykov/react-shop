import React, { useContext } from "react";
import PropTypes from "prop-types";
import { PageContext } from "../context";
import { Link, Switch, Route, useRouteMatch } from "react-router-dom";

const PageContent = () => {
  const context = useContext(PageContext);
  const { name } = context;
  let { path, url } = useRouteMatch();
  return (
    <div>
      <div>
        <h2>Topics</h2>
        <ul>
          <li>
            <Link to={`${url}/rendering`}>Rendering with React</Link>
          </li>
          <li>
            <Link to={`${url}/components`}>Components</Link>
          </li>
          <li>
            <Link to={`${url}/props-v-state`}>Props v. State</Link>
          </li>
        </ul>

        <Switch>
          <Route exact path={path}>
            <h3>Please select a topic.</h3>
          </Route>
          <Route path={`${path}/:topicId`}>
            <h1>yes</h1>
          </Route>
        </Switch>
      </div>
    </div>
  );
};

PageContent.propTypes = {};

export default PageContent;


