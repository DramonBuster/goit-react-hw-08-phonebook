import { connect } from 'react-redux';
import * as actions from '../../redux/contacts/contacts-action';
import { getFilter } from '../../redux/contacts/contacts-selectors';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const FormItem = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;

  font-weight: 600;
  color: black;
`;

const FormInput = styled.input`
  width: 200px;
  border-radius: 3px;
  border: solid 2px black;
  margin-bottom: 20px;

  :focus {
    outline: none;
    box-shadow: 0px 0px 1px 1px blue;
    border: solid 1px black;
  }
`;

const FormHeading = styled.h3`
  margin-bottom: 10px;
`;

const Filter = ({ value, onChange }) => (
  <FormItem>
    <FormHeading>Find contacts by name</FormHeading>
    <FormInput type="text" value={value} onChange={onChange} />
  </FormItem>
);

const mapStateToProps = state => {
  return {
    value: getFilter(state),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onChange: event => dispatch(actions.filterContact(event.target.value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};
