module.exports = (size, className) ->
    div = document.createElement 'div'

    div.className = className
    div.style.height = "#{size}px"
    div.style.width = "#{size}px"

    div
