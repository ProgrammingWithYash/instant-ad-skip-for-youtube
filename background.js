chrome.action.onClicked.addListener(function (tab) {

	chrome.tabs.query({ 'active': true, 'lastFocusedWindow': true, 'currentWindow': true }, async function (tabs) {
		var id = tabs[0].id;

		// url = tabs[0].url;
		// chrome.tabs.update(id, { url: "https://www.youtube.com../watch?v=" + url.substring(32, url.length) });

		chrome.scripting.executeScript({
			target: { tabId: id },
			files: ["inject.js"]
		});
	});

})