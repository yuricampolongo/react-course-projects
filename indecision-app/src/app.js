console.log('App.js is running...');

var app = {
    title:'Indecision app',
    subtitle:'React project'
};

//JSX - JavaScript XML
var template = (
    <div>
        <h1>{app.title}</h1>
        <p>{app.subtitle}</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div>
);

var user = {
    name:'Walter Geoffrey',
    age: 2,
    location: 'USA'
};
var templateTwo = (
    <div>
        <h1>{user.name}</h1>
        <p>Age: {user.age}</p>
        <p>Location: {user.location}</p>
    </div>
);

var root = document.getElementById('app');

ReactDOM.render(template,root);