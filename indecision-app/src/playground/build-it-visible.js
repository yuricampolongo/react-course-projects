class VisibilityToggle extends React.Component{
    constructor(props){
        super(props);
        this.handleToggleVisibitly = this.handleToggleVisibitly.bind(this);
        this.state = {
            visibility: false
        }
    }
    
    handleToggleVisibitly(){
        this.setState((prevState) =>{
            return{
                visibility: !prevState.visibility
            }
        });
    }

    render(){
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggleVisibitly}>{this.state.visibility ? 'Hide details' : 'Show details'}</button>
                {this.state.visibility && (
                    <div>
                        <p>Showing details</p>
                    </div>
                )}
            </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));