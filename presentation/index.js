// Import React
import React from 'react';
import { Provider, connect } from 'react-redux';
import { createStore } from 'redux';
// import 'prismjs';
// import 'prismjs/components/prism-javascript';

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  Image,
  List,
  ListItem,
  Notes,
  Quote,
  Slide,
  Text,
  CodePane,
  ComponentPlayground
} from 'spectacle';

import CodeSlide from 'spectacle-code-slide';
import { reduxone } from '../assets/redux.lesson.one';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Require CSS
import './index.css';
require('normalize.css');

const theme = createTheme(
  {
    primary: '#292929',
    secondary: '#E1E1E1',
    tertiary: '#03A9FC',
    quaternary: '#CECECE'
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica'
  }
);

const lessonCode = {
  reduxone
};

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
      >
        <Slide transition={['zoom']}>
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Redux Explainer
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" fit bold>
            Simple Redux explainer with Reducks
          </Text>
        </Slide>
        <CodeSlide
          transition={[]}
          lang="javascript"
          className="redux-code-slide"
          textSize={20}
          code={require('raw-loader!../assets/redux.example')}
          ranges={[
            { loc: [0, 5], title: 'Initial State' },
            { loc: [6, 9], title: 'Actions' },
            { loc: [10, 34], title: 'Reducer' },
            { loc: [12, 15], title: 'Wash' },
            { loc: [16, 23], title: 'Eat' },
            { loc: [24, 27], title: 'Rot' },
            { loc: [28, 32], title: 'Default' },
            // ...
          ]}
        />
        <Slide>
          <ComponentPlayground
            theme="dark"
            code={lessonCode.reduxone}
            scope={{
              Provider,
              connect,
              createStore
            }}
          />
        </Slide>
      </Deck>
    );
  }
}
