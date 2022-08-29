let color = "#3aa757";

chrome.runtime.onInstalled.addListener(() => {
  // chrome.storage.sync.set({ color });
  // console.log("Default background color set to %cgreen", `color: ${color}`);
  chrome.storage.sync.set({ email: "abc@google.com" });
  chrome.storage.sync.get(["email"], function (result) {
    console.log("email is " + result.email);
  });
});
//storage에 사용자 email 저장
