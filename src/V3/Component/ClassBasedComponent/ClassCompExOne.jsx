import { Component } from "react";

export class ClassCompExOne extends Component{
    constructor(props){
         // calling Component class constructor
    super(props)
         // creating and initialize a state in class comp

         this.state = {
            classTime: '2hrs',
            classDays: ['Mon','Tues','Wed']

         }
    }

    updateTime = () => {
        console.log('updating time'); //sync
        console.log('before update', this.state); //sync

        // first update state with passes value
        // call the function you passes as second argument
           
        this.setState({...this.state, classTime:'4hrs'}, () => {
            console.log('from callback', this.state); // sync
        }); // async

        console.log('after update', this.state); // sync

    }



    render(){
        return(
            <main>
                <h3>Class Comp</h3>
                <div>User: {this.props.username}</div>
                <div>Batch: {this.props.batch}</div>
                <div>Time: {this.state.classDays.join(', ')}</div>
                <div>Days: {this.state.classTime}</div>
                <button onClick={this.updateTime}>updateTime</button>
            </main>
        )
    }
}