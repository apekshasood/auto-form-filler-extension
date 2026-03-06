document.getElementById("fillForm").addEventListener("click", async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  if (!tab.id) return;

  chrome.tabs.sendMessage(tab.id, { action: "fillForm" }).catch(() => {
    console.log("Content script not ready");
  });
});