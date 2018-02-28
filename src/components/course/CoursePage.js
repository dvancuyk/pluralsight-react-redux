import React, {PropTypes } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';

class CoursesPage extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      course: { title: null }
    };

    this.onTitleChange = this.onTitleChange.bind(this);
    this.onSave = this.onSave.bind(this);
  }

  onTitleChange(event){
    const course = this.state.course;
    course.title = event.target.value;
    this.setState({course: course});
  }

  onSave() {
    this.props.createCourse(this.state.course);
  }

  courseRow(course, index) {
    return <div key={index}>{course.title}</div>;
  }

  render() {
    return (
      <div>
        <h1>Courses</h1>
        {this.props.courses.map(this.courseRow)}
        <h2>Add Course</h2>
        <input type="text"
          onChange={this.onTitleChange}
          value={this.state.course.title} />

        <input type="submit"
          onClick={this.onSave}
          value="Save" />
      </div>
    );
  }
}

CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired
};

const mapStateToProps = (state, ownProps) => {
  return {
    courses: state.courses // Aligns with the property defined in the reducers/index.js
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createCourse: course => dispatch(courseActions.createCourse(course))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
