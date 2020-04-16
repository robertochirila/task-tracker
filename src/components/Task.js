import React, { Component } from 'react'
import RaisedButton from 'material-ui/RaisedButton'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'


export class Task extends Component {

    delete = () => {
        const { index } = this.props
        this.props.onDelete(index)
    }

    complete = () => {
        const { index } = this.props
        this.props.onComplete(index)
    }


    render() {
        const { task } = this.props
        return (
            <React.Fragment>
                <MuiThemeProvider>
                    {
                        task.completed == false ?
                            <React.Fragment>
                                <RaisedButton
                                    label="Delete"
                                    primary={true}
                                    type="submit"
                                    onClick={this.delete}
                                />
                                <p><span>{task.taskName}</span>
                                    <span>{task.taskDuration}</span></p>
                                <RaisedButton
                                    label="Complete"
                                    primary={true}
                                    type="submit"
                                    onClick={this.complete}
                                />
                            </React.Fragment>
                            :
                            <br></br>
                    }
                </MuiThemeProvider>
            </React.Fragment>
        )
    }
}

export default Task
