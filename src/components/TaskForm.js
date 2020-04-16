import React, { Component } from 'react'
import { taskFormStyle } from '../styles/TaskForm'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'


export class TaskForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            taskName: "",
            taskDuration: "",
            taskList: []
        }
    }
    componentDidMount() {
        //console.log(taskFormStyle)
    }

    onSubmit = (e) => {
        e.preventDefault()
        const { taskName, taskDuration, taskList } = this.state
        const newTask = {
            taskName: taskName,
            taskDuration: taskDuration
        }

        /**
         * this.setState({
  arrayvar: [...this.state.arrayvar, newelement]
})
         */
        this.setState(prevState => ({
            taskList: [...prevState.taskList, newTask],
            taskDuration: "",
            taskName: ""
        }))
    }

    onChange = (e) => {
        e.preventDefault()
        this.setState({ [e.target.name]: e.target.value })
    }
    render() {
        const { taskName, taskDuration } = this.state
        return (
            <div style={taskFormStyle}>
                <MuiThemeProvider>
                    <React.Fragment>
                        <AppBar title="Add a task" />
                        <form noValidate onSubmit={this.onSubmit}>
                            <TextField
                                hintText="Task Name"
                                floatingLabelText="Task Name"
                                onChange={this.onChange}
                                name="taskName"
                                defaultValue={taskName}
                                value={taskName}
                            />
                            <TextField
                                hintText="Task Duration"
                                floatingLabelText="Task Duration"
                                onChange={this.onChange}
                                name="taskDuration"
                                defaultValue={taskDuration}
                                value={taskDuration}
                            />
                            <RaisedButton
                                label="Next"
                                primary={true}
                                type="submit"
                            />
                        </form>
                    </React.Fragment>
                </MuiThemeProvider>
            </div>
        )
    }
}

export default TaskForm
