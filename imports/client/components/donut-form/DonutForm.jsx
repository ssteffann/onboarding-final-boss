import React from 'react';
import PropTypes from 'prop-types';
import {AutoForm, AutoField, RadioField, ErrorField} from 'uniforms-unstyled';
import DonutsSchema from '/imports/db/donuts/schema';
import './style/donut-form.css';

const images = [
  '/assets/donut_1.png',
  '/assets/donut_2.png',
  '/assets/donut_3.png',
];

const DonutImg = ({ imgSrc, isSelected }) =>
  (<img className={`image ${isSelected ? 'selected' : '' }`} src={imgSrc} />);

class DonutForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedImg: '',
    }
  }

  componentDidMount() {
    const { model = {} } = this.props;

    this.onImageChange(model.image);
  }

  onImageChange = (value) => {
    this.setState({ selectedImg: value });
  };

  render() {
    const { onSubmit, model, submitLabel, title, subtitle} = this.props;

    return (<div className='donut-form-container'>
      <h1 className='title'>{title}</h1>
      <div className='subtitle'>{subtitle}</div>

      <AutoForm schema={DonutsSchema} onSubmit={onSubmit} model={model}>

        <div className='margin-wrapper'>
          <p>{'Select a donut!'}</p>

          <RadioField
            name="image"
            label={false}
            onChange={this.onImageChange}
            allowedValues={images}
            className='images-container flex-container flex-row justify-space-between'
            transform={(value) => <DonutImg imgSrc={value} isSelected={this.state.selectedImg === value} />}
          />
          <ErrorField name="image" />
        </div>

        <div className='margin-wrapper'>
          <p>{'Can you eat this?'}</p>
          <AutoField
            name="isComestible"
            label={false}
            allowedValues={[true, false]}
            className='radio'
            checkboxes={true}
            transform={(value) => value ? 'Yes' : 'No'}
          />
          <ErrorField name="isComestible" />
        </div>

        <AutoField name="name" label={false} placeholder />
        <ErrorField name="name"/>

        <AutoField name="price" label={false} placeholder />
        <ErrorField name="price"/>

        <div className='margin-wrapper'>
          <button className='btn btn-full btn-pink' type="submit">
            {submitLabel}
          </button>
        </div>
      </AutoForm>
    </div>);
  };
}

DonutForm.displayName = 'DonutForms';
DonutForm.propTypes = {
  onSubmit: PropTypes.func,
  model: PropTypes.object,
  submitLabel: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

export default DonutForm;
