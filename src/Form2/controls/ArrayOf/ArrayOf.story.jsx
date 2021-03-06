import React from 'react';
import { Form, Field, FastField } from 'formik';
import Story from '../../../Story';
import createForm from '../../createForm';
import ArrayOf from './ArrayOf';
import Input from '../Input/Input';
import Radio from '../Radio';
import FormDebug from '../../FormDebug';

const ArrayOfFormView = (props) => {
  return (
    <Form>
      <Field {...props.control('inputArray')} />
      <FastField {...props.control('inputArray')} title="FastField/inputArray" />
      <hr />
      <Field {...props.control('inputArray')} />
      <FormDebug {...props} />
    </Form>
  );
};

const ArrayOfForm = createForm({
  view: ArrayOfFormView,
  controls: {
    inputArray: {
      title: 'ArrayOf',
      component: ArrayOf,
      itemComponent: Input,
      itemProps: {
        type: 'number',
      },
      itemInitialValue: '',
      showRemoveButton: true,
      autoAddLastItem: true,
      maxCount: 5,
      minCount: 2,
    },
    inputArray2: {
      title: 'inputArray2',
      component: ArrayOf,
      itemComponent: Input,
      showRemoveButton: true,
      // addLastItem: true,
    },
    inputArray3: {
      title: 'inputArray3',
      component: ArrayOf,
      itemComponent: Input,
      showRemoveButton: true,
      showAddButton: true,
      addButton: 'Добавить input',
    },
  },
});

export default ({ storiesOf }) =>
  storiesOf('Form2/controls', module)
    .add('ArrayOf ', () => {
      return (
        <Story>
          <ArrayOfForm
            initialValues={{
            inputArray: [
              1122221,
              222222,
            ],
          }}
          />
        </Story>
      );
    });

