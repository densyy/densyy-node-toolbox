const corsHeaders = Object.freeze(
  new Map([
    ['Access-Control-Allow-Origin', '*'],
    ['Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH'],
    ['Access-Control-Allow-Headers', 'Content-Type, x-access-token']
  ])
)

export default function (req, res, next) {
  Object.entries(corsHeaders).forEach(([header, value]) => {
    res.setHeader(header, value)
  })

  if (req.method === 'OPTIONS') return res.status(204).end()
  next()
}
