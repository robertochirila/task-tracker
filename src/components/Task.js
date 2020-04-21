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
                                    className="task--action--buttons"
                                    label="Delete"
                                    primary={true}
                                    type="submit"
                                    onClick={this.delete}
                                />
                                <p><span className="task--details">{task.taskName}</span>
                                    <span className="task--details">{task.taskDuration}</span></p>
                                <RaisedButton
                                    className="task--action--buttons"
                                    label="Finish"
                                    primary={true}
                                    type="submit"
                                    onClick={this.complete}
                                />
                            </React.Fragment>
                            :
                            <div className="task--complete--wrapper">
                                <RaisedButton
                                    className="task--action--buttons"
                                    label="Delete"
                                    primary={true}
                                    type="submit"
                                    onClick={this.delete}
                                />
                                <p><span className="task--details">{task.taskName}</span>
                                    <span className="task--details">{task.taskDuration}</span></p>
                                <RaisedButton
                                    className="task--action--buttons"
                                    label="Finish"
                                    primary={true}
                                    type="submit"
                                    onClick={this.complete}
                                />
                            </div>
                    }
                </MuiThemeProvider>
            </React.Fragment>
        )
    }
}

export default Task
