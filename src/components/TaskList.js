import React, { Component } from 'react'
import { Task } from './Task'

export class TaskList extends Component {

    render() {
        const { taskList, onDelete, onComplete } = this.props
        return (
            <div>
                <ul className="task--list">
                    {
                        taskList.map((data, index) => {
                            return (
                                <li key={index} className="task--list--item">
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
