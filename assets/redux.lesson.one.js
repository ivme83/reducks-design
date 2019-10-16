export const reduxone = `
const initialApple = {
  color: 'red',
  dirty: true,
  remainingBites: 5,
};

const WASH = { type: 'WASH' };
const EAT = { type: 'EAT', bites: 2 };
const ROT = { type: 'ROT' };

function appleReducer(state = initialApple, action) {
  switch (action.type) {
    case 'WASH':
      return { ...state, dirty: false };
    case 'EAT':
      return {
        ...state,
        remainingBites: Math.max(0, state.remainingBites - action.bites),
      };
    case 'ROT':
      return { ...state, color: 'brown' };
    default:
      return state;
  }
}

const store = createStore(appleReducer, initialApple);

const styles = {
  color: 'black',
  listStyle: 'none',
  textAlign: 'left',
};

const ReduxLessonOne = ({ color, dirty, remainingBites }) => (
  <div>
    <ul style={styles}>
      <li>Current State</li>
      <li>{'{'}</li>
      <li>
        <ul style={styles}>
          <li>color: {color}</li>
          <li>dirty: {dirty.toString()}</li>
          <li>remainingBites: {remainingBites}</li>
        </ul>
      </li>
      <li>{'}'}</li>
    </ul>
    <button onClick={() => store.dispatch(WASH)}>Wash</button>
    <button onClick={() => store.dispatch(EAT)}>Eat</button>
    <button onClick={() => store.dispatch(ROT)}>Rot</button>
  </div>
);

const mapStateToProps = state => {
  const { color, dirty, remainingBites } = state;

  return {
    color: color,
    dirty: dirty,
    remainingBites: remainingBites,
  };
};

const ConnectedReduxLessonOne =
  connect(mapStateToProps)(ReduxLessonOne);

render(
  <Provider store={store}>
    <ConnectedReduxLessonOne />
  </Provider>
);
`;
