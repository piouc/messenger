import React from 'react'
import ReactDOM from 'react-dom'
import {EventEmitter} from 'events'

import App from './components/app'


const data = {
	currentThread: 0,
	threads: [
		{
			id: 0,
			title: 'foo'
		},
		{
			id: 1,
			title: 'bar'
		}
	],
	messages: [
		{
			id: 0,
			message: 'hello',
			thread_id: 0 
		},
		{
			id: 1,
			message: 'world!',
			thread_id: 0
		},
		{
			id: 2,
			message: 'world!',
			thread_id: 0
		},
		{
			id: 3,
			message: 'world!',
			thread_id: 0
		},
		{
			id: 4,
			message: 'world!',
			thread_id: 0
		},
		{
			id: 5,
			message: 'world!',
			thread_id: 0
		},
		{
			id: 6,
			message: 'world!',
			thread_id: 0
		},
		{
			id: 7,
			message: 'world!',
			thread_id: 0
		},
		{
			id: 8,
			message: 'world!',
			thread_id: 0
		},
		{
			id: 9,
			message: 'world!',
			thread_id: 0
		},
		{
			id: 10,
			message: 'world!',
			thread_id: 0
		},
		{
			id: 11,
			message: 'world!',
			thread_id: 0
		},
		{
			id: 12,
			message: 'world!',
			thread_id: 0
		},
		{
			id: 13,
			message: 'world!',
			thread_id: 0
		},
		{
			id: 14,
			message: 'world!',
			thread_id: 0
		},
		{
			id: 15,
			message: 'world!',
			thread_id: 0
		},
		{
			id: 16,
			message: 'world!',
			thread_id: 0
		},
		{
			id: 17,
			message: 'world!',
			thread_id: 0
		},
		{
			id: 18,
			message: 'world!',
			thread_id: 0
		},
		{
			id: 19,
			message: 'world!',
			thread_id: 0
		},
		{
			id: 20,
			message: 'java',
			thread_id: 1
		},
		{
			id: 21,
			message: 'script',
			thread_id: 1
		}
	]
}

const emitter = new EventEmitter()

document.addEventListener('DOMContentLoaded', () => {
	ReactDOM.render(<App data={data} emitter={emitter} />, document.body)
})