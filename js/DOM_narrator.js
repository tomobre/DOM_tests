export function narrator() {
  function populateVoiceList() {
    if (typeof speechSynthesis === "undefined") {
      return;
    }
    let voicesList = speechSynthesis.getVoices();
    let $parent = document.querySelector("#listVoices");
    voicesList.forEach((el) => {
      let option = document.createElement("option");
      option.setAttribute("data-name", el.name);
      option.textContent = el.name + " (" + el.lang + ")";
      $parent.appendChild(option);
    });
  }

  populateVoiceList();
  if (
    typeof speechSynthesis !== "undefined" &&
    speechSynthesis.onvoiceschanged !== undefined
  ) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }

  document.addEventListener("click", (e) => {
    let $text = document.querySelector("#textToNarrate");
    if (e.target.matches("#actNarrate")) {
      let voiceList = speechSynthesis.getVoices();
      for (let i = 0; i < voiceList.length; i++) {
        let selectedOption = document
          .querySelector("#listVoices")
          .selectedOptions[0].getAttribute("data-name");
        if (voiceList[i].name === selectedOption) {
          let utterThis = new SpeechSynthesisUtterance($text.value);
          utterThis.voice = voiceList[i];
          speechSynthesis.speak(utterThis);
        }
      }
    }
  });
}
