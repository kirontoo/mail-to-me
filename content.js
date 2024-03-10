chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
	if (request.type === "emailLink") {
		window.open(`mailto:kirontoo@gmail.com?subject=${uri}&body=${request.url}`)
	}
});
