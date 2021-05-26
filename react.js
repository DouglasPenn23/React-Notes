
// Creates constant name containing the String
// Josh Perez
const name = 'Josh Perez';


// Creates an element using JSX
// You're using JSX w/ name
const element = <h1>Hello, {name}</h1>;

// Calls the React Document Object Model
// Invokes Render
// Render is description of what you want to 
// see on the screen.
ReactDOM.render(
    // References the element instantiated above
  element,
  // Go into the document and get this element by it's id "root".
  document.getElementById('root')
);




// Create a function called formatName
// With the argument user 
function formatName(user) {
    // Returns the user. First name & last Name as a string
    // With a space between them. 
    return user.firstName + ' ' + user.lastName;
  }
  
  // Creates a constant called user with two parameters
  // First Name & Last Name. 
  const user = {
    firstName: 'Harper',
    lastName: 'Perez'
  };
  
  // Creates a constant called element
  const element = (
      // Creates h1 HTML Element
      // Uses JS function on the user to say Hello
    <h1>
      Hello, {formatName(user)}!
    </h1>
  );
  
  // Calls React Document Object Model
  // Uses render to describe what you want to see on the screen.
  ReactDOM.render(
      // Tells it to render the constant element we created
    element,
    document.getElementById('root')
  );



  // After compilation regular JSX Expressions become regular JS function
  // calls & evaluate to JS Objects.

  // This means you can use JSX inside of if & for loops, assign it to 
  // variables, accept it as arguments & return it from functions. 

  // Creates a function called getGreeting with argument of user.
  function getGreeting(user){
      // If there is a user
      if(user){

        // Return H1 element using function formatname on the user.
          return <h1>Hello, {formatName(user)}!</h1>;
      }
      // If not return an h1 element saying Hello Stranger.
      return <h1>Hello, Stranger.</h1>
  }

  
  // Props are arguments passed into react components.
  // Props are passed to compenents via html attributes. 

  // Babel compiles JSX down to React.createElement() calls. 

  // Creates another constant called element that has HTML
  const element = (
    <h1 className="greeting">
      Hello, world!
    </h1>
  );

  // Above is the same as this:
  
  // Creates a constant called element using react
  const element = React.createElement(
      // Type of:
    'h1',
    // Props:
    {className: 'greeting'},
    // Children
    'Hello, world!'
  );
  
  // These objects are called React Elements.
  // They are like descriptions of what you want to see on the screen.
  // React Reads these objects and uses them to construct the DOM & keep
  // it up to date. 


  // An element Describes what you want to see on the screen
  // Unlike Browser DOM elements,
  // React elements are plain objects & are cheap to create. 
  // React DOM takes care of updating the DOM to match the React elements.

  // Lets say there is a div somewhere in HTML file like so
  // <div id="root"></div>
  // We call this a root DOM node because everything inside it will be managed 
  // by React DOM
  // Apps built w/ React usually have a single root DOM node. 
  // However, if you are integrating React into an existing App you may have
  // as many isolated root DOM nodes as you like. 

  // To render a React element into a root DOM node
  // Pass both to ReactDOM.render()

    // Creates a constant with H1 element 
  const element = <h1>Hello, World</h1>;

  // Calls React Document Object Model to render
  // renders our constant element & gets our too element by ID.
  ReactDOM.render(element, document.getElementById('root'));

  // The Above will render Hello World on the page.

  // React elements are immutable
  // Immutable means thare once an element is created its children
  // & attributes cannot be changed. 





  // Ticking Clock Example
  // It Calls ReactDom.render() every second from a setInterval() callback

  // Creates a function called tick
  function tick() {
      // Creates a const called element
      // Element is like a single frame in a movie. 
    const element = (
        // HTML DIV & H1 elements
        // h2 element creates the date with the second line
        // It creates a Date with a constructor and uses toLocaleTimeString
        // To grab time
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
      </div>
    );
    
    // Tells the React DOM to render the element and get the root element by ID.

    ReactDOM.render(element, document.getElementById('root'));
  }
  
  // Calls the function set Interval which invokes tick method and 1000

  // The same function w/o comments. 
  setInterval(tick, 1000);

//   function tick() {
//     const element = (
//       <div>
//         <h1>Hello, world!</h1>
//         <h2>It is {new Date().toLocaleTimeString()}.</h2>
//       </div>
//     );
//     ReactDOM.render(element, document.getElementById('root'));
//   }
  
//   setInterval(tick, 1000);


// React DOM compares the element & it's children too the previous one
// Then it only applies the DOM updates necessary to bring the DOM to
// the desired state. 


// React only updates what's necessary
// React suggests I think about how the UI should look at any given moment
// Rather than how to change it over time, which will help eliminating bugs



// Components
// Components let you split the UI into independent, reusable pieces and 
// think about each piece in isolation. 

// Simplest way to define a component is to write a JS Function
// Creates function called Welcome which takes in properties and returns a
// a React element. 
function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
  }

  // This is a valid React component because:
  // 1. It accepts a single Props (Which Stands for properties) object
  // argument with data. 
  // 2. Bc it returns a React element. 
  // We call such components function components because they
  // are literally js functions


  // You can also use an ES6 class to define a component
  class Welcome extends React.Component {
    render() {
      return <h1>Hello, {this.props.name}</h1>;
    }
  }


  //        RENDERING A COMPONENT
  
  // So far we have only encountered React elements that represent DOM tags. 
  // like so,
  const element = <div />;

  // However, elements can also represent user-defined components
  const element = <Welcome name="Sara" />

  // When React sees an element representing a user-defined component,
  // It passes JSX attributes to this component as a single object.
  // We call this object "Props"

  // For example, the below code will render "Hello, Sara"
  // On the page.
  //                Uncommented Version
  function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
  }
  
  const element = <Welcome name="Sara" />;
  ReactDOM.render(
    element,
    document.getElementById('root')
  );


  // Commented Version
  
  // Creates a function called welcome which takes in properties
  // This is our component
  function Welcome(props) {
    // Specifies what will happen in Welcome function
    // Returns H1 element saying Hello with rendered properties name
    return <h1>Hello, {props.name}</h1>;
  }
  
  // Creates an element invoking welcome function with name Sara
  // Calls our component with the name Sara as props
  const element = <Welcome name="Sara" />;
  // Calls React DOM, uses render method.
  ReactDOM.render(
      // This part specifies what is to be rendered within React DOM
      // Tells it to render element
    element,
    // Tells it to get root element by ID.
    document.getElementById('root')
  );

  // Note: Always start component names with a Capital Letter

// To summarize above
// 1. We call ReactDOM.render() w/ the <Welcome name="Sara"/> element
// 2. React calls the Welcome component with {name: 'Sara'} as the props
// 3. Our Welcome component returns a <h1> Hello, Sara </h1> element as
// the result. 
// 4. React DOM efficiently updates the DOM to match <h1> Hello, Sara</h1>




//              Composing Components
// Components can refer to other components in their output
// This lets us use the same component abstraction for any level of detail
// A button, a form, a dialog, a screen: in React apps, all those are commonly
// expressed as components

// For example we can create an App component that renders Welcome many times:

// Creates a component/function called Welcome that accepts props
// & returns html 
function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
  }
  
  // Creates a function called App that returns a div
  // The div is filled with Welcome component with different name
  // properties 
  function App() {
    return (
        // Welcome component with name being passed in as props. 
      <div>
        <Welcome name="Sara" />
        <Welcome name="Cahal" />
        <Welcome name="Edite" />
      </div>
    );
  }
  
  // Calling React DOM to render the App & grab the root element by ID. 
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );


  //                    EXTRACTING COMPONENTS
  
  // Don't be afraid to split components into smaller components
  // For example, consider this comment component
  // It accepts author (an object), text(a string) & a date as props and 
  // describes a comment on a social media website.

  function Comment(props) {
    return (
      <div className="Comment">
        <div className="UserInfo">
          <img className="Avatar"
            src={props.author.avatarUrl}
            alt={props.author.name}
          />
          <div className="UserInfo-name">
            {props.author.name}
          </div>
        </div>
        <div className="Comment-text">
          {props.text}
        </div>
        <div className="Comment-date">
          {formatDate(props.date)}
        </div>
      </div>
    );
  }

  // This component can be tricky to change because of all the nesting
  // it is also hard to reuse individual parts of it. 
  // Let's extract a few components from it. 

  // First we will extract Avatar.
  
  // Commented
  // Creates a function called avatar that takes in props
  function Avatar(props) {
      // returns the image 
    return (
        // Says to return img with classname avatar and props being
        // the avatarurl & username.
      <img className="Avatar"
        src={props.user.avatarUrl}
        alt={props.user.name}
      />
    );
  }

  // UnCommented
  function Avatar(props) {
    return (
      <img className="Avatar"
        src={props.user.avatarUrl}
        alt={props.user.name}
      />
    );
  }

  // The avatar doesn't need to know that it is being rendered inside a
  // comment. 
  // This is why we have given its prop a more gener name: user 
  // rather than author. 

  // We can now simplify Comment a tiny bit
  // Uncommented
  function Comment(props) {
    return (
      <div className="Comment">
        <div className="UserInfo">
          <Avatar user={props.author} />
          <div className="UserInfo-name">
            {props.author.name}
          </div>
        </div>
        <div className="Comment-text">
          {props.text}
        </div>
        <div className="Comment-date">
          {formatDate(props.date)}
        </div>
      </div>
    );
  }
  

  // Commented Version 
  // Function or component called comment that takes in props
  function Comment(props) {
      // returns a div element
    return (
      <div className="Comment">
        <div className="UserInfo">
          <Avatar user={props.author} />
          <div className="UserInfo-name">
            {props.author.name}
          </div>
        </div>
        <div className="Comment-text">
          {props.text}
        </div>
        <div className="Comment-date">
          {formatDate(props.date)}
        </div>
      </div>
    );
  }
