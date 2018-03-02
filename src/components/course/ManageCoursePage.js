import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseForm from './CourseForm';

class ManageCoursePage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      course: Object.assign({}, props.course),
      errors: {},
      saving: false
    };

    this.saveCourse = this.saveCourse.bind(this);
    this.updateCourseState = this.updateCourseState.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.course.id !== nextProps.course.id) {
      this.setState({course: Object.assign({}, nextProps.course) });
    }
  }

  redirect() {
    this.context.router.push('/courses');
  }

  saveCourse(event) {
    event.preventDefault();
    this.setState({saving: true});
    this.props.actions.saveCourse(this.state.course)
      .then(() => this.redirect());
  }

  updateCourseState(event) {
    const field = event.target.name;
    let course = Object.assign({}, this.state.course);
    course[field] = event.target.value;

    return this.setState({course: course});
  }

  render() {
    return (
        <CourseForm
          course={this.state.course}
          errors={this.state.errors}
          allAuthors= {this.props.authors}
          onChange={this.updateCourseState}
          onSave={this.saveCourse}
          saving={this.state.saving}
           />
    );
  }
}

ManageCoursePage.propTypes = {
  course: PropTypes.object.isRequired,
  authors: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

ManageCoursePage.contextTypes = {
  router: PropTypes.object
};

function findCourse(id, courses) {

  let filtered = courses.filter(course => course.id === id);

  if(filtered.length)
    return filtered[0];

  return {
    title: '',
    category: '',
    watchHref: '',
    id: '',
    authorId: '',
    length: ''
  };
}

function mapStateToProps(state, ownProps) {
  let id = ownProps.params.id;

  let course = findCourse(id, state.courses);

  let authorsList = state.authors.map(author => {
          return {value: author.id, text: `${author.firstName} ${author.lastName}`};
        });

  return {
    course: course,
    authors: authorsList
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
