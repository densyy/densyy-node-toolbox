import language from '../languages/pt-BR.js'

const STATUS_OK = 'ok'
const STATUS_ERROR = 'error'
const STATUS_CODE_SUCCESS = 200
const STATUS_CODE_CREATED = 201
const STATUS_CODE_SERVER_ERROR = 500
const SERVER_ERROR_MESSAGE = language.tools.response_1

export default Object.freeze(
  class NodeResponse {
    success (res, message) {
      return this._sendResponse(res, STATUS_OK, STATUS_CODE_SUCCESS, message)
    }

    create (res, message) {
      return this._sendResponse(res, STATUS_OK, STATUS_CODE_CREATED, message)
    }

    simpleError (res, statusCode, message) {
      return this._sendResponse(res, STATUS_ERROR, statusCode, message)
    }

    serverError (res) {
      return this._sendResponse(res, STATUS_ERROR, STATUS_CODE_SERVER_ERROR, SERVER_ERROR_MESSAGE)
    }

    empty (res) {
      return this._sendResponse(res, STATUS_OK, STATUS_CODE_SUCCESS, null)
    }

    _sendResponse (res, status, statusCode, body) {
      return res
        .status(statusCode)
        .json({ status, statusCode, body })
    }
  }
)
