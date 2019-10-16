// Import React
import React from 'react';
import { Provider, connect } from 'react-redux';
import { createStore } from 'redux';
// import 'prismjs';
// import 'prismjs/components/prism-javascript';

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  Code,
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
  ComponentPlayground,
  Markdown
} from 'spectacle';

import CodeSlide from 'spectacle-code-slide';
import { reduxone } from '../assets/redux.lesson.one';
import { types } from '../assets/state/ducks/todos/types';
import { actions } from '../assets/state/ducks/todos/actions';
import { reducers } from '../assets/state/ducks/todos/reducers';
import { operations } from '../assets/state/ducks/todos/operations';
import { selectors } from '../assets/state/ducks/todos/selectors';
import { index } from '../assets/state/ducks/todos/index';

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
  reduxexample: require('raw-loader!../assets/redux.example'),
  ducksexample: require('raw-loader!../assets/ducks.example'),
  reduxone,
  state: {
    types,
    actions,
    reducers,
    operations,
    selectors,
    index
  }
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
          code={lessonCode.reduxexample}
          ranges={[
            { loc: [0, 5], title: 'Initial State' },
            { loc: [6, 9], title: 'Actions' },
            { loc: [10, 34], title: 'Reducer' },
            { loc: [12, 15], title: 'Wash' },
            { loc: [16, 23], title: 'Eat' },
            { loc: [24, 27], title: 'Rot' },
            { loc: [28, 32], title: 'Default' }
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
        <Slide>
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Re-Ducks
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" fit bold>
            Modular approach to organizing and maintaining Redux
          </Text>
        </Slide>
        <Slide>
          <Heading size={2} fit caps>
            A Duck file must
          </Heading>
          <List textColor="tertiary">
            <Appear>
              <ListItem>
                MUST export default a function called reducer()
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>MUST export its action creators as functions</ListItem>
            </Appear>
            <Appear>
              <ListItem>
                MUST have action types in the form
                npm-module-or-app/reducer/ACTION_TYPE
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                MAY export its action types as UPPER_SNAKE_CASE, if an external
                reducer needs to listen for them, or if it is a published
                reusable library
              </ListItem>
            </Appear>
          </List>
        </Slide>
        <CodeSlide
          transition={[]}
          lang="javascript"
          className="redux-code-slide"
          textSize={20}
          code={lessonCode.ducksexample}
          ranges={[
            { loc: [2, 7], title: 'Actions' },
            { loc: [8, 15], title: 'Reducer' },
            { loc: [16, 32], title: 'Action Creators' }
            // ...
          ]}
        />
        <Slide>
          <Heading size={2} fit caps>
            Re-Ducks uses folders
          </Heading>
          <List textColor="tertiary">
            <Appear>
              <ListItem>
                MUST contain the entire logic for handling only ONE concept in
                your app, ex: product, cart, session, etc.
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                MUST have an index.js file that exports according to the
                original duck rules.
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                MUST keep code with similar purpose in the same file, ex:
                reducers, selectors, actions, etc.
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>MUST contain the tests related to the duck.</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide>
          <Heading size={2} fit caps>
            Sample Folder Structure
          </Heading>
          <Markdown>
            {`
              duck/
                ├── types.js
                ├── actions.js
                ├── reducers.js
                ├── operations.js
                ├── selectors.js
                ├── index.js
            `}
          </Markdown>
        </Slide>
        {Object.keys(lessonCode.state).map((eachDuck, index) => (
          <Slide key={eachDuck + index}>
            <Heading size={2} fit caps>
              {eachDuck}
            </Heading>
            <CodePane lang="javascript" source={lessonCode.state[eachDuck]} />
          </Slide>
        ))}
        <Slide>
          <Heading size={2} fit caps>
            Resources
          </Heading>
          <List textColor="tertiary">
            <ListItem>
              <a href="https://formidable.com/open-source/spectacle/">
                https://formidable.com/open-source/spectacle/
              </a>
            </ListItem>
            <ListItem>
              <a href="https://github.com/lennerd/spectacle">
                https://github.com/lennerd/spectacle - Fix for Spectacle ComponentPlayground
              </a>
            </ListItem>
            <ListItem>
              <a href="https://dev.to/hemanth/explain-redux-like-im-five">
                https://dev.to/hemanth/explain-redux-like-im-five
              </a>
            </ListItem>
            <ListItem>
              <a href="https://github.com/alexnm/re-ducks">
                https://github.com/alexnm/re-ducks
              </a>
            </ListItem>
            <ListItem>
              <a href="https://github.com/jthegedus/re-ducks-examples">
                https://github.com/jthegedus/re-ducks-examples
              </a>
            </ListItem>
          </List>
        </Slide>
      </Deck>
    );
  }
}
