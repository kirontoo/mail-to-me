chrome.runtime.onInstalled.addListener(function () {
	chrome.contextMenus.create({
		id: "emailLink",
		title: "Copy link and email",
		contexts: ["page"],
    visible: true
	});
});

chrome.contextMenus.onClicked.addListener(function (info, tab) {
	if (info.menuItemId === "emailLink") {
		chrome.tabs.sendMessage(tab.id, {
			type: "emailLink",
      url: info.pageUrl,
      title: tab.title
		});
	}
});
