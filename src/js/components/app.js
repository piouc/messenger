import React, {Component} from 'react'

import ThreadList from './threadList'
import MessageBoard from './messageBoard'

export default class App extends Component {
	constructor(...args){
		super(...args)
		this.state = this.props.data
	}
	componentDidMount(){
		const {emitter} = this.props
		emitter.on('newMessage', msg => {
			if(msg.message === '') return
			const {messages} = this.state
			const state = Object.assign({}, this.state, {
				messages: messages.concat([{
					id: messages.length,
					message: msg.message,
					thread_id: msg.threadId
				}])
			})
			this.setState(state)
		})
		emitter.on('threadChange', id => {
			console.log(id)
			const state = Object.assign({}, this.state, {
				currentThread: id
			})
			this.setState(state)
		})
	}
	render(){
		const {threads, messages, currentThread} = this.state
		return (
			<div id="app">
				<ThreadList threads={threads} currentThread={currentThread} />
				<MessageBoard messages={messages} threadId={currentThread} />
			</div>
		)
	}
	getChildContext(){
		return {
			emitter: this.props.emitter
		}
	}
}

Object.assign(App, {
	childContextTypes: {
		emitter: React.PropTypes.object
	}
})
