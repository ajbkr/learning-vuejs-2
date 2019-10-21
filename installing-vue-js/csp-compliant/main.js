chrome.app.runtime.onLaunched.addListener(function () {
  // centre the window on the screen
  var screenWidth = screen.availWidth
  var screenHeight = screen.availHeight
  var width = 500
  var height = 300

  chrome.app.window.create('index.html', {
    id: 'learningVueID',
    outerBounds: {
      width,
      height,
      left: Math.round((screenWidth - width) / 2),
      top: Math.round((screenHeight - height) / 2)
    }
  })
})
