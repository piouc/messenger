import React, {Component} from 'react'

class Message extends Component {
	componentDidMount(){
		setTimeout(() => this.refs.message.scrollIntoView({block: 'start', behavior: 'smooth'}), 0)
	}
	render(){
		return (
			<li className="message" ref="message">
				{this.props.message.message}
			</li>
		)
	}
}

class NewMessage extends Component {
	constructor(...args){
		super(...args)
		this.newMessage = this.newMessage.bind(this)
	}
	render() {
		return (
			<div className="new-message">
				<input type="text" ref="input" onKeyDown={e => {
					if(e.key === 'Enter'){
						this.newMessage()
					}
				}}/>
				<button onClick={this.newMessage}>+</button>
			</div>
		)
	}
	newMessage(){
		this.context.emitter.emit('newMessage', {
			message: this.refs.input.value,
			threadId: this.props.threadId
		})
		this.refs.input.value = ''
	}
}
Object.assign(NewMessage, {
	contextTypes: {
		emitter: React.PropTypes.object
	}
})

export default class MessageBoard extends Component {
	// componentDidMount(){
	// 	this.context.emitter.on('newMessage', () => {
	// 		const {messageList} = this.refs
	// 		setTimeout(() => {
	// 			messageList.scrollTop = messageList.scrollHeight - messageList.clientHeight
	// 		}, 0)
	// 	})
	// }
	render() {
		const {messages, threadId} = this.props
		return (
			<div className="message-board">
				<NewMessage threadId={threadId} />
				<ul className="message-list" ref="messageList">
					{messages.filter(m => m.thread_id === threadId).map(message => (<Message message={message} key={message.id} />))}
				</ul>
			</div>
		)
	}
}
Object.assign(MessageBoard, {
	contextTypes: {
		emitter: React.PropTypes.object
	}
})