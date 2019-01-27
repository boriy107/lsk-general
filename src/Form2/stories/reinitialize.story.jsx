import React, { Component } from 'react';
import { Form, Field } from 'formik';
import autobind from 'core-decorators/lib/autobind';

import Story from '../../Story';
import createForm from '../createForm';
import Input from '../controls/Input';
import Select from '../controls/Select';
import Tags from '../controls/Tags';
import FormDebug from '../FormDebug';
import FormGroup from '../FormGroup';

const InputFormView = (props) => {
  return (
    <Form>
      <Field {...props.controls.input} />
      <Field {...props.controls.input2} />
      <Field {...props.controls.select} />
      <Field {...props.controls.tags} />
      <FormDebug {...props} />
    </Form>
  );
};


const controls = {
  input: {
    title: 'Input',
    component: Input,
  },
  input2: {
    title: 'Input2',
    component: Input,
  },
  select: {
    title: 'Select',
    component: Select,
    options: ['a', 'b', 'c'],
  },
  tags: {
    title: 'Tags',
    component: Tags,
    flat: true,
    options: ['a', 'b', 'c'],
  },
};
const SampleForm = createForm({
  view: InputFormView,
  FormGroup,
  controls,
});

class Container extends Component {
  state = {
    input: 'demo',  // eslint-disable-line
  }
  @autobind
  handleChange(values) {
    this.setState(values);
  }
  render() {
    return (
      <div>
        <table>
          <tbody>
            <tr>
              <td>
                <SampleForm
                  enableReinitialize
                  initialValues={this.state}
                  onChange={this.handleChange}
                />
              </td>
              <td>
                <SampleForm
                  enableReinitialize
                  initialValues={this.state}
                  onChange={this.handleChange}
                />
              </td>
              <td style={{ verticalAlign: 'top' }}>
                {Object.keys(controls).map((name) => {
                  return (
                    <div>
                      {name} =
                      <button onClick={() => this.setState({ [name]: 123 })}>
                        123
                      </button>
                      <button onClick={() => this.setState({ [name]: 'asd' })}>
                        asd
                      </button>
                      <button onClick={() => this.setState({ [name]: { asd: 123 } })}>
                        asd: 123
                      </button>
                      <button onClick={() => this.setState({ [name]: [1, 2, 3] })}>
                        [1,2,3]
                      </button>
                      <button onClick={() => this.setState({ [name]: null })}>
                        null
                      </button>
                      <button onClick={() => this.setState({ [name]: undefined })}>
                        undefined
                      </button>
                      <button onClick={() => { delete this.state[name]; this.setState({ q: 1 }); }}>
                        delete {name}
                      </button>
                    </div>
                  );
                })}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}


export default ({ storiesOf }) =>
  storiesOf('Form2', module)
    .add('reinitialize', () => {
      return (
        <Story>
          <Container />
        </Story>
      );
    });
