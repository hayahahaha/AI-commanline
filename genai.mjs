import { GoogleGenerativeAI } from '@google/generative-ai'

const genAI = new GoogleGenerativeAI(process.env.GEMINIAI_API_KEY)

/**
 * Asynchronously handles a question by generating content using a generative model.
 *
 * @param {string} question - The question to be processed.
 * @return {Promise} A promise that resolves to the generated content.
 */
async function handleQuestion(question) {
	try {
		const model = genAI.getGenerativeModel({ model: 'gemini-pro' })

		if (!question) {
			console.log("Don't have question")
			return
		}

		const result = await model.generateContent([question])

		const response = result.response
		const text = response.text()

		console.log(text)
	} catch (error) {
		console.log('error;', error)
	}
}

export default handleQuestion
