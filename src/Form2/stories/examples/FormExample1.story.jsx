import React from 'react';
import { Form, FastField } from 'formik';

import Story from '../../../Story';
import createForm from '../../createForm';
import FormGroup from '../../FormGroup';
import FormDebug from '../../FormDebug';

import Input from '../../controls/Input';
import Select from '../../controls/Select';
import Checkbox from '../../controls/Checkbox';
import TagsPicker from '../../controls/TagsPicker';

// import '../../../styles/lib/antd.g.css';
// import '../../../styles/lib/bootstrap.g.css';

const FormExample1View = (props) => {
  return (
    <Form>
      <FastField {...props.controls.input} />
      <FastField {...props.controls.select} />
      <FastField {...props.controls.checkbox} />
      <FastField {...props.controls.tagsPicker} />
      <FormDebug {...props} />
    </Form>
  );
};

const FormExample1 = createForm({
  view: FormExample1View,
  FormGroup,
  controls: {
    input: {
      title: 'input',
      component: Input,
      placeholder: 'input',
    },
    select: {
      title: 'The Select',
      component: Select,
      options: [
        {
          value: 'corporation',
          title: 'first',
        },
        {
          value: 'individual',
          title: 'second',
        },
      ],
      placeholder: 'placeholder',
    },
    checkbox: {
      title: 'The Checkbox',
      component: Checkbox,
      label: 'Checkbox label',
      placeholder: 'Checkbox placeholder',
    },
    tagsPicker: {
      title: 'tagsPicker',
      component: TagsPicker,
      triggerTitle: 'Выбрать теги',
      flat: true,
      fields: [
        {
          _id: '1',
          value: 'one',
          title: 'Один',
        },
        {
          _id: '2',
          value: 'two',
          title: 'Два',
        },
        {
          _id: '3',
          value: 'three',
          title: 'Три',
        },
        {
          _id: '4',
          value: 'four',
          title: 'Четыре',
        },
      ],
    },
  },
});

module.exports = ({ storiesOf }) =>
  storiesOf('Form2/examples', module)
    .add('FormExample', () => {
      return (
        <Story>
          <FormExample1 />
        </Story>
      );
    });