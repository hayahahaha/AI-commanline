import { GoogleGenerativeAI } from '@google/generative-ai'
import 'dotenv/config'

const genAI = new GoogleGenerativeAI(process.env.GEMINIAI_API_KEY)

async function run() {
  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-pro' })
    const prompt = process.argv[2]

    if (!prompt) {
      console.log('Don\'t have promt')
      return
    }
    const result = await model.generateContent([prompt])

    const response = result.response
    const text = await response.text()
    console.log(text)
  } catch (error) {
    console.log("Some thing wrong");
    console.log(JSON.stringify(error))
  }
}

run()

