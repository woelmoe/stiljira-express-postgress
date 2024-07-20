import { Express } from 'express'

/** Через get-запрос на корень можно увидеть адрес домена */
export function checkDomain(app: Express) {
  app.get('/', (req, res) => {
    const domain = req.hostname
    res.send(`Domain: ${domain}`)
  })
}
