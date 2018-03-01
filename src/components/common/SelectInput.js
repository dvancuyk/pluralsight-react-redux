import React, {PropTypes} from 'react';

const SelectInput = ({name, label, value, options, defaultOption, onChange, error}) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
        <div className="field">
          <select
            name={name}
            value={value}
            onChange={onChange}
            className="form-control"
            >
              <option value="">{defaultOption}</option>
              {options.map(o => {
                return <option key={o.value} value={o.value}>{o.text}</option>;
                })
            }
          </select>
          {error && <div className="alert alert-danger">{error}</div>}
        </div>
    </div>
  );
};

SelectInput.propTypes = {
  name: PropTypes.string.isRequired,
  label:  PropTypes.string.isRequired,
  value: PropTypes.string.isRequired ,
  options: PropTypes.array.isRequired ,
  defaultOption: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string
};

export default SelectInput;
