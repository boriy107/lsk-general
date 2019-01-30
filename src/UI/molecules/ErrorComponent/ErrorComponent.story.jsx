import React from 'react';
import Error404 from './svg/error404';
import Error403 from './svg/error403';
import Error500 from './svg/error500';
import ErrorComponent from './ErrorComponent';
import ThemeInjector from '../../../ThemeInjector';
import Button from '../../../Button';

const articles = [
  {
    title: 'Что-то пошло не так',
    subtitle: 'Not found: /cabinet/company',
    actions: <Button paint="primary">Вернуться на главную страницу</Button>,
    footer: 'No spam! We promise, only best stuff',
  },
];

export default ({ storiesOf }) => (
  storiesOf('ui/ErrorComponent', module)
    .add('Error 404', () => (
      <div style={{ padding: 60 }}>
        <ThemeInjector>
          <ErrorComponent
            {...articles[0]}
            image={<Error404 width="100%" height={320} />}
          />
        </ThemeInjector>
      </div>
    ))
    .add('Error 403', () => (
      <div style={{ padding: 60 }}>
        <ThemeInjector>
          <ErrorComponent
            {...articles[0]}
            image={<Error403 width="100%" height={320} />}
          />
        </ThemeInjector>
      </div>
    ))
    .add('Error 500', () => (
      <div style={{ padding: 60 }}>
        <ThemeInjector>
          <ErrorComponent
            {...articles[0]}
            image={<Error500 width="100%" height={320} />}
          />
        </ThemeInjector>
      </div>
    ))
);
