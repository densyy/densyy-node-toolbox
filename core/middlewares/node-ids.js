import NodeResponse from '../tools/node-response.js'
import language from '../languages/pt-BR.js'

const nodeResponse = new NodeResponse()
const regexMongoId = /^[0-9a-fA-F]{24}$/

export default function (req) {
  const ids = extractIds(req.params)

  if (ids.length && ids.every(id => regexMongoId.test(id))) return true

  return nodeResponse.simpleError(req, 406, language.middlewares.ids_1)
}

function extractIds (params = {}) {
  return Object.entries(params)
    .filter(([key]) => /^id.*/.test(key))
    .map(([, value]) => value)
}
