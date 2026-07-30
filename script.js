(function () {
  // Detect iOS (iPhone, iPad, iPod + modern iPadOS)
  function isIOS() {
    return /iPad|iPhone|iPod/.test(navigator.userAgent) ||
           (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  }

  if (isIOS()) {
    setTimeout(function () {
      window.location.href = 'redirect.html';
    }, 1000); // 1-second delay
  }
})();
