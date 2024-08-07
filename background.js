chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === 'complete' && tab.url.includes('seatgeek.com/jessica-pratt-tickets/columbus-ohio-ace-of-cups-2024-09-14-6-pm/concert/16944780')) {
      chrome.scripting.executeScript({
        target: { tabId: tabId },
        files: ['content.js']
      });
    }
  });
  