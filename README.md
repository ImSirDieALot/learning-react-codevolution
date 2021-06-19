### Pre-requisites
    HTML, CSS, JS
    ES6 - let, const, arrow functions, template literals, etc
    JavaScript - 'this keyword, filter, map and reduce

### Folder Structure
    package.json - contains dependecies and scripts for the projects
    package-lock - consistency
    node_modules - All the dependecies are installed
    public - has the main file, index.html, which is served to the browser
                - div tag with id "root"
    src - working with most during development
        - starting point of the app is `index.js` - specify root component which would be the App component which controls the dom element in index.html ("root")
### React Fundamentals
    npx - npm package runner installed with node
        - can create apps easily
    npm - its the package manager
        - more manual steps are required
    Components  - Represents part of UI
                - reusable and can be nested inside other components
                - building blocks of react
            - 2 types of components
                    - Default Export - When importing the name can be anything if there is only one component is being exported
                    - Named Export - Name should be exact when importing
                    - Stateless Functional Components
                        - Simple functions receiving props and returning declarations
                        - Use as much as possible. Advantages:
                            - Absence of `this` keyword
                            - Force to think of a solution without using state
                            - Mainly responsible for the UI (Steless/Dumb/Presentational)
                        - literal javascript functions
                        - returns html code
                        - they can receive an object of properties refered as `props` and return the HTML to UI
                        - this HTML is refered as JSX
                    - Stateful Class Components
                        - ES6 classes that extends from React library
                        - render() method is must, which returns the HTML
                        - they can receive an object of properties refered as `props` and return the HTML to UI
                        - along with the props, class components can receive private internal state
                        - More Feature Rich
                        - Maintain their own private data - State
                        - Complex UI logic
                        - Provide lifecycle hooks
    JSX - Javascript XML, extension to the JS syntax
            - XML like code for elements and components.
                - they have tag name, attribute, children, etc
            - transpiles to plain js for browser
            - Keeps the code elegant (HTML like, instead of chaining React.createElemet)
                - class -> className (for css)
                - for -> htmlFor
                - camelCase property naming (onClick, tabIndex)
    Props - short for properties
            - optional inputs for the functional components
            - can be named to whatever in the child component but to keep it simple and understandable, use `props`
            - props are immutable (read-only)
            - {} curly braces are used in the JSX to access the props {props.name}
            - props get passed to the component
    State - state is managed with in the component
            - variables are delared in the function body
            - 
    Hooks - that lets you use state and other React features without writing class
            - Functional Components and Class Components instead of refering as stateless or stateful
            - Using state, lifecrycle methods and `this` keyword
    Conditional Rendering - Same way as conditional statements in javascript
            - if/else
                - doesn't work inside the JSX
            - Element Variables
            - Ternary operator
            - Short circuit Operator
    List Rendering

### Binding Event Handlers
1. bind this in the render method - <button onClick={this.eventHandler.bind(this)}></button>
    - every update to the state causes the component to re-render. 
    - generates new handler every time
2. Arrow function in the render method - <button onClick={() => this.eventHandler()}></button>
    - every update to the state causes the component to re-render. 
    - performance implications
3. Bind the event handler in the constructor - this.eventHandler = this.eventHandler.bind(this) 
    Then in render method - <button onClick={this.eventHandler}></button>
4. Arrow function as a class property. eventHandler = () => { do things here this.setState }
### Lifecycle Methods of Component
    Mounting - When an instance of a component is being created and inserted into the DOM
        Methods
        - constructor
            - A special function that gets called when a new component is created
            - Initialize State, Binding the event handlers (SHOULD NOT DO HTTP REQUESTS, or NOT CAUSE ANY SIDE EFFECTS)
            - super(props) - own constructor. Props are available only after passing in the props to super
            - only in constructor we can change `this.state` directly
        - static getDerivedStateFromProps
            + This is rarely used. 
            + When the state of the component depends on the changes in props overtime
            + Initial state of the component depends on the props passed
            + doesn't have access to `this` keyword since it is static method
            + DO NOT cause side effects
        - render 
            + Only required method in class component
            + read props, state and return jsx
            + pure function - with the same input always produces the same output
            + Do not change state or interact with DOM or make api calls
            + Children components lifecycle methods are also executed
        - componentDidMount
            + Only once in the whole lifecycle
            + Invoked immediately after component and all its children components have been rendered to the DOM
            + Cause Side effects (interact with DOM or make API calls)
    Updating - When a component is being re-rendered as a result of changes to either its props or state
        Methods
        - static getDerivedStateFromProps
            + Method is called everytime a component is re-rendered
            + Accepts props, state as parameters and has to return null or an object that represets the updated state of the component
            + When state depends on the props
            + no side effects
            + rarely used
        - shouldComponentUpdate
            + Dictates if the component should re-render or not
            + performance optimization
            + nextProps, nextState
            + rarely used
        - render
            + Only required method in class component
            + read props, state and return jsx
            + pure function - with the same input always produces the same output
            + Do not change state or interact with DOM or make api calls
            + Children components lifecycle methods are also executed
        - getSnapshotBeforeUpdate
            + Called right before the changes from the VDOM are to be reflected in the DOM
            + item2
            + item3
        - componentDidUpdate
    Unmounting - When a component is being removed from the DOM
        Methods
        - componentWillUnmount
    Error Handling - When there is an error during rendering, in lifecycle method or in the constructor of any child
        Methods
        - static getDerivedStateFromProps,
        - componentDidCatch
### HTTP
### Routing
### Redux
### Utilities

### Fragment
    Fragments lets group list of children elements without adding extra nodes to the dom

### Pure Components
    A pure component implements `shouldComponentUpdate` with a shallow props and state comparison, but a regular component doesn't implement this method. It always return true by default.
    ##### Shallow Comparison
        SC of prevState with currentState 
        SC of prevProps with currentProps
            Components only re-render if there is a difference returned in SC
        Why?
            Prevents unnecessary render and gives performance boost.
        - Primitive Types
            For 2 primitive types like string, number, a (SC) b returns true if a and b have the same value and are of the same type.
        - Complex Types
            For complex types like objects, a (SC) b return true if a and b reference the exact same object
### Some Interview related topics
What do you like and dislike about React?
- Love the unidirectional flow from parent to child
- React is pretty much javascript (whether using JSX or not)
- Dislike - JSX at the beginning
Conditional rendering and list rendering

What is the significance of having the key prop when rendering a list of elements?
What is a potential bug that you can introduce when using index as a key?

Class component's lifecycle methods 
Context API - What is prop drilling and how to overcome using context API

Hooks

What is VDOM and DOM?
    + DOM - Document Object Module - create nodes using javascript
    + Virtual DOM
        + VDOM is identical to JS DOM
        + same properties and methods
        + cannot decide the what to render on the DOM
        + Faster manipulation that DOM
        + Diffing
            + entire vdom is updated
            + previous state and update state - compares both of thesse
            + and  then updates the actual DOM

### Form Handling
    In regular HTML form elements, input, textarea etc are responsible on their own to handle the user inputs and update as needed
    We need react to control React
    + Controlled component
        + Form elements' value is controlled by react