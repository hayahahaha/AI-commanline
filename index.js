import EventEmitter from 'node:events'
import handleQuestion from './genai.mjs'
import rl from './rl.mjs'
import 'dotenv/config'

class MainEvent extends EventEmitter {
	constructor() {
		super()
		this.rl = rl
		this.on('question', question => handleQuestion(question))
	}

	start() {
		this.rl.question(`How can I help you today?\n`, question => {
			this.emit('question', question)
			this.rl.close()
		})
	}
}

const mainEvent = new MainEvent(rl)

mainEvent.start()
