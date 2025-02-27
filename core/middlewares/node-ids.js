import NodeResponse from '../tools/node-response.js'
import language from '../languages/pt-BR.js'

const nodeResponse = new NodeResponse()
const regexMongoId = /^[0-9a-fA-F]{24}$/

export default function (req, res, next) {
  const ids = extractIds(req.params)

  if (!ids.length) return next()

  const isValid = ids.every(id => regexMongoId.test(id))
  if (isValid) return next()

  return nodeResponse.simpleError(res, 406, language.middlewares.ids_1)
}

function extractIds (params = {}) {
  return Object.entries(params)
    .filter(([key]) => /^id.*/.test(key))
    .map(([, value]) => value)
    .filter(Boolean)
}
