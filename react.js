
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