import NodeLogger from '../utils/node-logger.js'

const nodeLogger = new NodeLogger()

export default function (req, _res, next) {
  const date = new Date().toUTCString()
  const { method, url } = req
  const ip = req.headers['x-forwarded-for'] || req.headers['x-real-ip'] || req.headers.host

  nodeLogger.log(`ACCESS: ${date} - ${method} ${url} ${ip}`)
  next()
}
