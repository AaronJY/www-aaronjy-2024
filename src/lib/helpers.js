export function toSlug (input) {
  return input.substring(0, input.indexOf('.')).trim()
}
