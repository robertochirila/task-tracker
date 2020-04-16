import React, { Component } from 'react'
import { taskListStyle } from '../styles/TaskListStyle'
import { Task } from './Task'

export class TaskList extends Component {

    render() {
        const { taskList, onDelete, onComplete } = this.props
        return (
            <div>
                <ul style={taskListStyle}>
                    {
                        taskList.map((data, index) => {
                            return (
                                <li key={index}>
                                    <Task
                                        index={index}
                                        task={data}
                                        onDelete={onDelete}
                                        onComplete={onComplete}

                                    />
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default TaskList
