import React, {Component} from 'react'

class ThreadListItem extends Component {
	render() {
		const {thread, current} = this.props
		return (
			<li className={`thread-list-item ${current ? 'current' : ''}`} onClick={() => this.context.emitter.emit('threadChange', this.props.thread.id)}>
				{thread.title}
			</li>
		)
	}
}
Object.assign(ThreadListItem, {
	contextTypes: {
		emitter: React.PropTypes.object
	}
})

export default class ThreadList extends Component {
	render() {
		const {threads, currentThread} = this.props
		return (
			<ul className="thread-list">
				{threads.map(thread => (<ThreadListItem thread={thread} current={currentThread === thread.id} key={thread.id} />))}
			</ul>
		)
	}
}