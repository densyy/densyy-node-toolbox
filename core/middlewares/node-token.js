import NodeJWT from '../tools/node-jwt.js'
import NodeResponse from '../tools/node-response.js'
import language from '../languages/pt-BR.js'

const nodeJWT = new NodeJWT()
const nodeResponse = new NodeResponse()

export default async function (req, res, ...secrets) {
  const token = req.headers['x-access-token']
  if (!token) return sendError(res, 401, language.middlewares.token_1)

  for (const secret of secrets) {
    const result = await nodeJWT.verifyToken(token, secret)
    if (result) return true
  }

  return sendError(res, 401, language.middlewares.token_2)
}

function sendError (res, statusCode, message) {
  return nodeResponse.simpleError(res, statusCode, message)
}
