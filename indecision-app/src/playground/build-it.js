const app = {
    title: 'Visibility Toggle',
    toggled: false
}

const appRoot = document.getElementById('app');

const toggle = () => {
    app.toggle = !app.toggle;
    render();
}

const render = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            <button onClick={toggle}>{app.toggle ? 'Hide details' : 'Show details'}</button>
            <p>{app.toggle ? 'Showing info' : undefined}</p>
            
        </div>
    );

    ReactDOM.render(template, appRoot);
}

render();