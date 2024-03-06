const toggleButton = document.getElementById("toggle-button");

// handle close/open extension side bar when toggling the toggle button
toggleButton.addEventListener("click", () => {
  chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
    const tab = tabs[0];

    function toggleApp() {
      const reactApp = document.getElementById("react-chrome-app");
      if (reactApp.style.visibility === "hidden") {
        reactApp.style.visibility = "visible";
      } else {
        reactApp.style.visibility = "hidden";
      }
    }

    chrome.scripting
      .executeScript({
        target: {tabId: tab.id},
        func: toggleApp,
        //        files: ['contentScript.js'],  // To call external file instead
      })
      .then(() => console.log("Injected a function!"));
  });
});
