import React from 'react';
import { Form, Field } from 'formik';
import Story from '../../../Story';
import createForm from '../../createForm';
import Radio from './Radio';
import Checkbox from '../Checkbox';
import FormDebug from '../../FormDebug';

const RadioFormView = props => (
  <Form>
    <Field {...props.control('blue')} />
    <Field {...props.control('blue')} />
    <Field {...props.control('blueCheckbox')} />
    <FormDebug {...props} />
  </Form>
);


const RadioForm = createForm({
  view: RadioFormView,
  controls: {
    blue: {
      component: Radio,
      title: 'first value',
    },
    blueCheckbox: {
      key: 'blue',
      component: Checkbox,
      title: 'first value',
    },
  },
});

export default ({ storiesOf }) =>
  storiesOf('Form2/controls', module)
    .add('Radio ', () => {
      return (
        <Story>
          <RadioForm />
        </Story>
      );
    });
