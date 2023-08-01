import React, {Component} from "react";


export default class LifecycleOne extends Component {
    constructor(props){
        super(props);
        this.state ={
            name: 'kunal'
        }
        console.log('running constructor');
    }
    componentDidMount(){
        console.log('running component did mount');
    }
    shouldComponentUpdate(){
        console.log(" running shouldComponentUpdate");
        return true;
    }

    componentDidUpdate(){
        console.log("running componentDidUpdate");
    }

    getSnapshotBeforeUpdate(){
        console.log("running getSnapshotBeforeUpdate");
        return null;
    }

    updateName =()=>{
        this.setState({
            ...this.state,
            name: 'pranav'
        })
            
    }

    render(){
        console.log('running render');
          // this method returns JSX code what needs to be shown in the DOM
          // required method
        return(
            <>
            <div>Lifecycle One</div>
            <div>Name: {this.state.name} </div>
            <button onClick={this.updateName}>Change Name</button>
            
            </>

        )
    }

    static getDerivedStateFromProps(){
         console.log("running getDerivedStateFromProps");
         return null;
    }
}
// const a = 20

// const b = a*40;

// const c = 40*10