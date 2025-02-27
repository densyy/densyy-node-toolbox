const securityHeaders = Object.freeze(
  new Map([
    ['Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload'],
    ['Cache-Control', 'no-store, no-cache, must-revalidate, private'],
    ['Pragma', 'no-cache'],
    ['Expires', '0'],
    ['X-Content-Type-Options', 'nosniff']
  ])
)

const headersToDelete = Object.freeze(
  ['X-Powered-By', 'Server', 'ETag']
)

export default function (_req, res, next) {
  securityHeaders.forEach((value, header) => {
    res.setHeader(header, value)
  })

  headersToDelete.forEach(header => res.removeHeader(header))
  next()
}
