# Week 2 Quiz

1. Copy all contents of `arr1` into another array `arr2` using the spread operator.

```js
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [...arr1];     // Change this line
```

2. Replace the two assignments with an equivalent destructuring assignment. It should still assign the variables `today` and `tomorrow` the values of `today` and `tomorrow` from the `HIGH_TEMPERATURES` object.

```js
const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

// Only change code below this line

const today = HIGH_TEMPERATURES.today;
const tomorrow = HIGH_TEMPERATURES.tomorrow;

const { today: highToday , tomorrow: highTomorrow } =HIGH_TEMPERATURES;


// Only change code above this line

```

3. Use destructuring assignment within the argument to the function `half` to send only `max` and `min` inside the function.

```js
const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};

// Only change code below this line
const half = ({ stats.max, stats.min }) => (max + min) / 2.0; 
// Only change code above this line
```

4. Use the `class` keyword and write a constructor to create the `Vegetable` class.

   The `Vegetable` class allows you to create a vegetable object with a property `name` that gets passed to the constructor.

```js
// Only change code below this line
class Vegetable{
  constructor(name) {
    this.name = name;
  }
}
// Only change code above this line

const carrot = new Vegetable('carrot');
console.log(carrot.name); // Should display 'carrot'
```

5. There are two string-related functions in the example. Export both of them using the method of your choice.

```js
const uppercaseString = (string) => {
  return string.toUpperCase();
}

export default uppercaseString;

const lowercaseString = (string) => {
  return string.toLowerCase()
}

export default lowercaseString;

// My Answer Below
export const uppercaseString = (string) => {
  return string.toUpperCase();
}

export const lowercaseString = (string) => {
  return string.toLowerCase()
}

```

6. Add the appropriate `import` statement that will allow the current file to use the `uppercaseString` and `lowercaseString` functions you exported in the previous question. These functions are in a file called `string_functions.js`, which is in the same directory as the current file.

```js

// My Answer Below
export const uppercaseString = (string) => {
  return string.toUpperCase();
}


export const lowercaseString = (string) => {
  return string.toLowerCase()
}

// Only change code above this line
import uppercaseString from './string_functions';
import lowercaseString from './string_functions';


uppercaseString("hello");
lowercaseString("WORLD!");
```

7. The current code uses JSX to assign a `div` element to the constant `JSX`. Replace the `div` with an `h1` element and add the text `Hello JSX!` inside it.

```js
// My Answer Below
const JSX = <h1>Hello JSX!</h1>;
```

8. Define a new constant `JSX` that renders a `div` which contains the following elements in order:

   An `h1`, a `p`, and an unordered list that contains three `li` items. You can include any text you want within each element.

```js
// write your code here

const JSX = (
    <div>
      <h1>Hello JSX!</h1>
      <p>Here is a List</p>
      <ul>
        <li>Element 1</li>
        <li>Element 2</li>
        <li>Element 3</li>
      </ul>
    </div>
);
```

9. The example has a simple JSX component. Use the `ReactDOM.render()` method to render this component to the page. You can pass defined JSX elements directly in as the first argument and use `document.getElementById()` to select the DOM node to render them to. There is a `div` with `id='challenge-node'` available for you to use. Make sure you don't change the `JSX` constant.

```js
const JSX = (
  <div>
    <h1>Hello World</h1>
    <p>Lets render this to the DOM</p>
  </div>
);
// change code below this line

ReactDOM.redner(JSX,document.getElementById('challenge-node'));
```

10. The example has a function called `MyComponent`. Complete this function so it returns a single `div` element which contains some string of text.

```js
const MyComponent = function() {
  // change code below this line
    return(
      <div>
        My Solution
      </div>
    );
  // change code above this line
}
```

11. There are `Calendar` and `CurrentDate` components in the code editor. When rendering `CurrentDate` from the `Calendar` component, pass in a property of `date` assigned to the current date from JavaScript's `Date` object. Then access this `prop` in the `CurrentDate` component, showing its value within the `p` tags. Note that for `prop` values to be evaluated as JavaScript, they must be enclosed in curly brackets, for instance `date={Date()}`.

```js
const CurrentDate = (props) => {
  return (
    <div>
      { /* change code below this line */ }
      <p>The current date is: { props.date } </p>
      { /* change code above this line */ }
    </div>
  );
};

const Calendar = () => {
    return (
      <div>
        <h3>What date is it?</h3>
        { /* change code below this line */ }
        <CurrentDate date={ Date() }/>
        { /* change code above this line */ }
      </div>
    );
};

```

12. Define `propTypes` for the `Items` component to require `quantity` as a prop and verify that it is of type `number`.

```js
import PropTypes from 'prop-types';

const Items = (props) => {
  return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
};

// change code below this line

Items.propTypes = {
    quantity: PropTypes.number.isRequired
};
// change code above this line

Items.defaultProps = {
  quantity: 0
};

const ShoppingCart = () => {
    return <Items />
};

```

13. Render an instance of the `ReturnTempPassword` component in the parent component `ResetPassword`. Here, give `ReturnTempPassword` a prop of `tempPassword` and assign it a value of a string that is at least 8 characters long. Within the child, `ReturnTempPassword`, access the `tempPassword` prop within the `strong` tags to make sure the user sees the temporary password.

```js
const ReturnTempPassword = (props) => {
    return (
        <div>
            { /* change code below this line */ }
            <p>Your temporary password is: <strong>{ props.tempPassword }</strong></p>
            { /* change code above this line */ }
        </div>
    );
};

const ResetPassword = () => {
    return (
        <div>
          <h2>Reset Password</h2>
          <h3>We've generated a new temporary password for you.</h3>
          <h3>Please reset this password from your account settings ASAP.</h3>
          { /* change code below this line */ }
          <ReturnTempPassword tempPassword="DsszxjdEio" />
          { /* change code above this line */ }
        </div>
    );
};

```

14. In the code editor, `MyComponent` already has state. Define an `h1` tag in the component's render method which renders the value of `name` from the component's state.

```js
const MyComponent = () => {
  const [name, setName] = useState('Redwood');
  
  return (
      <div>
        { /* change code below this line */ }
        <h1>{ name }</h1>
        { /* change code above this line */ }
      </div>
  );
};

```

15. There is a `button` element in the code example that has an `onClick()` handler. This handler is triggered when the `button` receives a click event in the browser, and runs the `handleClick` method defined on `MyComponent`. Within the `handleClick` method, update the component `state` using `setState()`. Set the `name` property in `state` to equal the string `React Rocks!`.

```js
const MyComponent = () => {

  const [state, setState] = useState('Initial State');

  const handleClick = () => {
    // change code below this line
    setState('React Rocks!')
    // change code above this line
  }
  return (
      <div>
        <button onClick={handleClick}>Click Me</button>
        <h1>{state}</h1>
      </div>
  );
};

```

16. What are **state** and **props** in React?

    // My Answer Below
    Props are used to pass data between react components. States is for managing data.

17. How can React pass information from child to parent components?

    // My Answer Below
    React uses props to pass information from child and parent components

18. What two properties are needed for two-way binding in React?

    // My Answer Below
    You will need a onChange event that access and changes the state of a prop
    You will also need a value prop to access a two-way binding

19. Use the `&&` logical operator so the `h1` only renders if `display` is `true`.

```js
const MyComponent = () => {
    
  const [display, setDisplay] = useState(true);

  const toggleDisplay = () => {
    setDisplay(!display);
  }
    
  // change code below this line
    
  return ( 
       <div>
         <button onClick={toggleDisplay}>Toggle Display</button>
         { display && <h1>Displayed!</h1> }
       </div>
  );
};

```

20. Return the provided string with the first letter of each word capitalized. **Make sure the rest of the word is in lower case.**

```js
function titleCase(str) {

  // My Answer Below
  const splitStr = str.toLowerCase().split(" ");

  for (let i = 0; i < splitStr.length; i ++) {
    if(splitStr.length[i] < splitStr.length) {
      splitstr[i].charAt(0).toUpperCase();
    }
    str = splitStr.join(" ");
  }
  return str;
}

titleCase("I'm a little tea pot");

```

 