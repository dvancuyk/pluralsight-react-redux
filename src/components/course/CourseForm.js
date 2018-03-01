import React, {PropTypes} from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';

const CourseForm = ({course, allAuthors, onSave, onChange, loading, errors}) => {
  let view = (
    <form>
      <h1>Manage Course</h1>
      <TextInput name="title" label="Title" value={course.title} onChange={onChange} error={errors.title} />
      <SelectInput name="authorId" label="Author" value={course.authorId} options={allAuthors} defaultOption="Select Author" onChange={onChange} error={errors.authorId} />
      <TextInput name="category" label="Category" value={course.category} onChange={onChange} error={errors.category} />
      <TextInput name="length" label="Length" value={course.length} onChange={onChange} error={errors.length} />
      <button className="btn btn-primary" onClick={onSave}>Save</button>
    </form>
  );

  return view;
};

CourseForm.propTypes = {
  course: PropTypes.object.isRequired,
  allAuthors: PropTypes.array,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  errors: PropTypes.object
};

export default CourseForm;
