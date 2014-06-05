el = require './el'

document.addEventListener 'DOMContentLoaded', ->
    tEl = el(70, 'ddd')
    document.body.appendChild tEl
