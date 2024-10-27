import * as dateFns from 'date-fns'

export function toSlug (input) {
  return input.substring(0, input.indexOf('.')).trim()
}

export function formatDate (date) {
  return dateFns.format(Date.parse(date), 'PPP')
}
