### Redux
  Redux is a predictable state container for Javascript APPS
  ##### Redux is for JS Applications
    - Not tied to REACT. Can be used with any library or even vanilla javascript
    - Redux is a state container - stores the state of application
    - Redux is predictable
      - state of the application can change
      - all state transitions are explicit and it is possible to keep track of them
  ##### Why need Redux?
    - react app consists of several components and managing the state acroos these components is hard
    - state is contained outside of the component in a Container
    - Prop drilling is the process in a React app where props are passed from one part of a tree to another by going through other parts that do not need the data, but only help in passing it through the tree.
    - React and Redux operate independently of each other. So, React-Redux package is used to communicate between each of them
    - Most basic mistake - learning react and redux in parallel

  ##### Three Core Concepts
    - Store
      - Holds the state of the application
      - one store for the application
      - Responsibilities
        - hold the app state
        - allows access to state via `getState()`
        - allows state to be updated via dispatch(action)
        - registers listeners via `subscribe(listener)`
        - handles unregistering of listeners via the function returned by `subscribe(listener)`
    - Action
      - describes what happened
      - only way to interact with the store
      - carry some info from app to redux store
      - have a type property indicates the type of action being performed
      - type property is typically defined as string constants
      - can have more than 1 property in the object
      - action creator is a function that returns the action
    - Reducer
    - specify how the app's state changes in reponse to actions sent to the store
      - ties the store and actions together
      - carries out the state transition depending on the action
      - Function that accepts state and action as as arg, and return the next state of the app
      - (previousState, action) => newState

  ##### Three Principles
    - PI.   ```the state of the whole application is stored in an object tree within a single store```
    - PII.  ```the only way to change the state is to emit an action, an object describing what happened```
    - PIII. ```To specify how the state tree is transformed by actions, you write pure reducers```
              - Pure Reducers - pure function that take (previousState, action) => newState

  ##### Middleware
    - is the suggested way to extend redux with custom functionality
    - provides 3rd party extension point between dispatching an action and moment it reaches the reducer
    - use middleware for logging, crash reporting, performing async tasks, etc
      - import applyMiddleware
      - pass it as arg to createStore
      - pass the logger to the applyMiddleware 

  ##### Async Actions
    - Async API calls to fetch data from an end point and use the data in your application

  ##### Redux Thunk Middleware
    - axios
      - requests to an API end point
    - redux-thunk
      - define async action creators
      - middleware
    - thunk middleware gives ability for an action creator to return a function instead of an action object
    - this function doesn't have to be pure
    - can cause side effects like async api calls
    - can also dispatch actions
