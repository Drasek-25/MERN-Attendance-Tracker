# Week 4 Quiz

1. What is axios?  
    
    // My Answer Below
     Axios is a library in react used to perform HTTP requests

2. What is HTTP? 

    // My Answer Below
    HTTP is a protocol that allows the fetching of resources, such as HTML documents. It also acts as the foundation of any data exchange on the web and it is a client-server protocol.

3. What are four commonly used HTTP verbs? 

    // My Answer Below
    GET, POST, PUT, DELETE

4. What is an asynchronous API call?  

    // My Answer Below
    asynchronous are used to receive a callback when the data has been received. This lets the brower continue to work as normal while your request is being handled.

5. What is a promise in asynchronous programming? 

    // My Answer Below
    Promise is an object that serves as a placeholder and container for the final result.

6. How does the `useEffect` hook work in React?  

    // My Answer Below
    useEffect is a hook that allows you to preform  side effects in functional component.
    When useing the useEffect hook, you are telling react that you component needs to do something after it is rendered. 

7. Explain the use of a dependency array in a `useEffect` hook. 

    // My Answer Below
    The dependency array is the second optional argument in the useEffect function. It is an array of dependencies that, when changed from the previous render, will recall the effect function defined in the first argument.

8. What JavaScript package needs to be imported to use React Router?  

    // My Answer Below
    You will need to download the react-router-dom package to use any kind of Router, Switch, Route, Link and BrowserRouter.

9. What tag needs to be wrapped around your top-level component to use React Router? 
    
    // My Answer Below
    After importing { BrowserRouter, Route, Link } from 'react-router-dom'; you will to wrap your <App /> component with the <BrowswerRouter> tag.

10. In the example below, identify the route parameter:

    // My Answer Below
    path='/people/:id' is the route parameter.

```
<Route path='/people/:id' component={People} />
```

11. In the example above, how would you access the route parameter in the `People` component?  

    // My Answer Below
    To access the route parameter in the People component you need to include component={People} inside of the <Route /> tag.
    

12. **Using a `switch` statement**, complete the `getLetter(s)` function below. It has one parameter: a string, , consisting of lowercase English alphabetic letters (`a` through `z`). It must return `A`, `B`, `C`, or `D` depending on the following criteria:

    - If the first character in string is in the set `{a,e,i,o,u}`, then return `A`.
    - If the first character in string is in the set `{b,c,d,f,g}`, then return `B`.
    - If the first character in string is in the set `{h,j,k,l,m}`, then return `C`.
    - If the first character in string is in the set `{n,p,q,r,s,t,v,w,x,y,z}`, then return `D`.

    **Hint:** You can get the letter at some index in using the syntax `s[i]` or `s.charAt(i)`.

```
function getLetter(s) {
    let letter;
    // Write your code here
   switch (s[0]) {
        case ('a' || 'e' || 'o' || 'i' || 'u'):
            letter = 'A';
            break;

        case ('b' || 'c' || 'd' || 'f' || 'g'):
            letter = 'B';
            break;

        case ('h' || 'j' || 'k' || 'l' || 'm'):
            letter = 'C';
            break;

        case ('z' || 'n' || 'p' || 'q' || 'r' || 's' || 't' || 'v' || 'w' || 'x' || 'y'):
            letter = 'D';

    }

    
    return letter;
}
```

13. **Using try, catch, finally**, complete the *reverseString* function; it has one parameter, ***s***. You must perform the following actions:
    1. *Try* to reverse string ***s*** using the *split*, *reverse*, and *join* methods.
    2. If an exception is thrown, *catch* it and print the contents of the exception's ***message*** on a new line.
    3. Print ***s*** on a new line. If no exception was thrown, then this should be the reversed string; if an exception was thrown, this should be the original string.

```
function reverseString(s) {
    
    try {
        s.split("").reverse().join("");
    } catch (e) {
         console.log('s.split is not a function');
    }
    console.log(s);
}

reverseString("Dog"); // This should return "goD"

```

