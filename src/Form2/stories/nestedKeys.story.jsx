import React from 'react';
import { Form, Field } from 'formik';
import Story from '../../Story';
import createForm from '../createForm';
import Input from '../controls/Input';
import Select from '../controls/Select';
import FormGroup from '../FormGroup';
import FormDebug from '../FormDebug';

const InputFormView = (props) => {
  return (
    <Form>
      <Field {...props.controls.input} />
      <Field {...props.controls.dependent} />
      <Field {...props.controls['test.input']} />
      <FormDebug {...props} />
    </Form>
  );
};

const InputForm = createForm({
  view: InputFormView,
  FormGroup,
  controls: {
    input: {
      title: 'Input',
      initialValue: 'one',
      component: Input,
    },
    dependent: {
      key: 'input',
      title: 'Dependent control',
      component: Select,
      options: [
        {
          value: 'one',
        },
        {
          value: 'two',
        },
      ],
    },
    'test.input': {
      key: 'test@input',
      title: 'Not nested field',
      initialValue: 'createForm.controls.initialValue',
      component: Input,
    },
  },
});

module.exports = ({ storiesOf }) =>
  storiesOf('Form2/nestedKeys', module)
    .add('key', () => {
      return (
        <Story>
          <InputForm onSubmit={(values) => { console.log({ values }); }} />
        </Story>
      );
    });