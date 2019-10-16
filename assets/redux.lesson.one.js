export const reduxone = `
/**
 * Sample React Component
 * Output domContainerNode is 'mountNode'
 */

const initialApple = {
  color: 'red',
  dirty: true,
  remainingBites: 5
};

const WASH = { type: 'WASH' };
const EAT = { type: 'EAT', bites: 2 };
const ROT = { type: 'ROT' };

function appleReducer(state = initialApple, action) {
  switch(action.type) {
    case 'WASH':
      return { ...state, dirty: false };
    case 'EAT':
      return {
        ...state,
        remainingBites: Math.max(0, state.remainingBites - action.bites)
      };
    case 'ROT':
      return { ...state, color: 'brown' };
    default:
      return state;
  }
}

const store = createStore(appleReducer, initialApple);

const styles = {
  color: "black",
  listStyle: "none",
  textAlign: "left"
};

function handleChange() {
  const currentApple = store.getState();
  if (currentApple.color === 'red') {
    console.log('Looks delicious!');
  } else {
    console.log('Looks awful, better throw it in the bin!');
  }
}
store.subscribe(handleChange);

const ReduxLessonOne = (props) => {
  const currentState = store.getState();

  return (
    <div>
      <ul style={styles}>
        <li>{'{'}</li>
          <li>
            <ul style={styles}>
              {Object.keys(currentState)
                .map(eachKey => 
                  <li key={eachKey}>
                    {eachKey} - {currentState[eachKey].toString()}
                  </li>
                )
              }
            </ul>
          </li>
          <li>{'}'}</li>
      </ul>
      <button onClick={() => store.dispatch(WASH)}>Wash</button>
      <button onClick={() => store.dispatch(EAT)}>Eat</button>
      <button onClick={() => store.dispatch(ROT)}>Rot</button>
    </div>
  );
};

const ConnectedReduxLessonOne = connect()(ReduxLessonOne);

render(
  <Provider store={store}>
    <ConnectedReduxLessonOne />
  </Provider>)
`;
