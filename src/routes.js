import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import AboutPage from './components/about/AboutPage';
import CoursePage from './components/course/CoursePage';
import HomePage from './components/home/HomePage';
import ManageCoursePage from './components/course/ManageCoursePage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="course" component={CoursePage} />
    <Route path="course/:id" component={ManageCoursePage} />
    <Route path="about" component={AboutPage} />
  </Route>
);
