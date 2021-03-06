import React from 'react';
import { Form, Field } from 'formik';
import RadioButtonGroup from './RadioButtonGroup';
import createForm from '../../createForm';
import Story from '../../../Story';
import FormDebug from '../../FormDebug';

const RadioButtonGroupFormView = props => (
  <Form>
    <Field {...props.controls.get('RadioButtonGroup')} />
    <FormDebug {...props} />
  </Form>
);

const RadioButtonGroupForm = createForm({
  view: RadioButtonGroupFormView,
  controls: {
    RadioButtonGroup: {
      component: RadioButtonGroup,
      title: 'RadioButtonGroup',
      options: [
        {
          value: 'byDate',
          title: 'По дате',
        },
        {
          value: 'month3',
          title: '3 месяца',
        },
        {
          value: 'month6',
          title: '6 месяцев',
        },
      ],
    },
  },
});

export default ({ storiesOf }) =>
  storiesOf('Form2/controls', module).add(
    'RadioButton',
    () => (
      <Story>
        <RadioButtonGroupForm />
      </Story>
    ),
  );
