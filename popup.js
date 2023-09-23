// Get the button and title elements from the popup
const button = document.getElementById("getTabTitleButton");
const tabTitle = document.getElementById("tabTitle");

// Add a click event listener to the button
button.addEventListener("click", async() => {
  // Get the current active tab
  let queryOptions = { active: true, lastFocusedWindow: true };
  // `tab` will either be a `tabs.Tab` instance or `undefined`.
  let [tab] = await chrome.tabs.query(queryOptions);
  tabTitle.textContent=tab.title
});
