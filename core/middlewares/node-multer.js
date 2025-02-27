import multer from 'multer'
import NodeString from '../utils/node-string.js'
import NodeResponse from '../tools/node-response.js'

const nodeResponse = new NodeResponse()
const nodeString = new NodeString()
const DEST = '/tmp'
const FIELD = 'file'

const storage = multer.diskStorage({
  destination: (_req, _file, cb) => { cb(null, DEST) },
  filename: (_req, file, cb) => {
    const id = nodeString.generateRandomHash(16)
    cb(null, `${id}-${file.originalname}`)
  }
})

const upload = multer({
  storage,
  fileFilter: (_req, _file, cb) => { cb(null, true) }
})

export default function (req, res, next) {
  upload.single(FIELD)(req, res, (err) => {
    if (err) return nodeResponse.serverError(res)
    return next()
  })
}
