(() => {
  let youtubeLeftControls, youtubePlayer;

  let currentPage = "";

  chrome.runtime.onMessage.addListener((obj, sender, response) => {
    const { type, value, pageId } = obj;

    if (type === "NEW") {
        currentPage = pageId;
        newVideoLoaded();
    }
  });
/*
  const newPageLoaded = () => {
      const calcExists = document.getElementsByClassName("calc-btn")[0];
      console.log(calcExists);

      if (!calcExists) {
          const calcBtn = document.createElement("img");

          calcBtn.src = chrome.runtime.getURL("images/calc.png");
          calcBtn.className = "calc-button";
          calcBtn.title = "Click to gang up multiple artworks";

          addNewLineItem = document.getElementsByClassName("add-new-line-item")[0];
          
          addNewLineItem.append(calcBtn);
          calcBtn.addEventListener("click", calcBtnEventHandler);
      }
  }
*/
  const newVideoLoaded = () => {
    const bookmarkBtnExists = document.getElementsByClassName("bookmark-btn")[0];

    if (!bookmarkBtnExists) {
      const bookmarkBtn = document.createElement("img");

      bookmarkBtn.src = chrome.runtime.getURL("assets/bookmark.png");
      bookmarkBtn.className = "ytp-button " + "bookmark-btn";
      bookmarkBtn.title = "Click to bookmark current timestamp";

      youtubeLeftControls = document.getElementsByClassName("add-new-line-item")[0];
      //youtubePlayer = document.getElementsByClassName('video-stream')[0];

      youtubeLeftControls.appendChild(bookmarkBtn);
      bookmarkBtn.addEventListener("click", addNewBookmarkEventHandler);
    }
  };

  newPageLoaded();

})();


/*
const div = document.querySelector("div.title");


// `document.querySelector` may return null if the selector doesn't match anything.
if (div) {
  const text = div.textContent;
  const wordMatchRegExp = /[^\s]+/g; // Regular expression
  const words = text.matchAll(wordMatchRegExp);
  // matchAll returns an iterator, convert to array to get word count
  const wordCount = [...words].length;
  const readingTime = Math.round(wordCount / 200);
  const badge = document.createElement("p");
  // Use the same styling as the publish information in an article's header
  badge.classList.add("color-secondary-text", "type--caption");
  badge.textContent = `⏱️ ${readingTime} min read`;

  // Support for API reference docs
  const heading = div.querySelector("h1");
  // Support for article docs with date
  const date = div.querySelector("time")?.parentNode;

  (date ?? heading).insertAdjacentElement("afterend", badge);
}
*/