
/* req.query
   req.query is an object containing a property for each query string parameter in the route.
   ( A query string begins with a '?' in the url and seperated by '&' symbols)
   If there is no query string, it is an empty object {}.

    GET /search?q=tobi+ferret
        req.query.q => "tobi ferret"


    GET /shoes?order=desc&shoe[color]=blue&shoe[type]=converse
        req.query.order => "desc"

        req.query.shoe.color => "blue"

        req.query.shoe.type => "converse"

*/


const query = (req, res) => {
    console.log(req.query);

    let { foo }  = req.query;
    res.send({ foo, message: 'query route' });
}

/* req.params
    req.params is an object containing properties mapped to the named route “parameters”.
    For example, if you have the route /user/:id, then the 'id' property is available as req.params.id
    This object defaults to {}.

*/

const params = (req, res) => {
    console.log(req.params);

    let { id } = req.params;        // data type is stored as string..
    // id = parseInt(req.params.id);   // converts to typer number

    res.send({ id, message: 'params route' });
}


/* req.body
    req.body contains key-value pairs of data submitted in the request body.
    By default, it is undefined, and is populated when you use body-parsing middleware such as body-parser.
    Typically we'll use req.body when a user is POSTing some data.

    If we want to use req.body we will need to install body-parser and configure it in our server.js
    npm install body-parser
*/

const body = (req, res) => {
    console.log(req.body);

    let data = req.body;
    res.send({ data, message: 'body route'  });
}

module.exports = {
    query,
    params,
    body
}