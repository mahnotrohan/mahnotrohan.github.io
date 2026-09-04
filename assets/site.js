(() => {
  const homeQuestions = {
    control: "How much of what happens to us is within our control—and how much is chance?",
    identity: "Which parts of identity are ours, borrowed, or quietly performed?",
    meaning: "When is meaning-seeking generative, and when does it become a trap?",
    tools: "How do the tools we use alter the shape of our thinking?",
    making: "Why is building so magnetic—and maintaining so easy to neglect?"
  };

  const homeButtons = Array.from(document.querySelectorAll("[data-home-thread]"));
  const homeQuestion = document.querySelector(".thread-question");
  const homeCount = document.querySelector(".thread-count");

  if (homeButtons.length && homeQuestion && homeCount) {
    homeButtons.forEach((button, index) => {
      button.addEventListener("click", () => {
        homeButtons.forEach((item) => {
          item.setAttribute("aria-pressed", String(item === button));
        });
        homeQuestion.textContent = homeQuestions[button.dataset.homeThread];
        homeCount.textContent = `${String(index + 1).padStart(2, "0")} / 05`;
      });
    });
  }

  const orreryTabs = Array.from(document.querySelectorAll("[data-orrery-thread]"));
  const orreryPanels = Array.from(document.querySelectorAll("[data-orrery-panel]"));
  const orreryLists = Array.from(document.querySelectorAll("[data-orrery-list]"));
  const orrerySummary = document.querySelector(".orrery-summary");
  const detailTitle = document.querySelector(".detail-title");
  const detailDescription = document.querySelector(".detail-description");
  const guidedLink = document.querySelector(".guided-link");
  const mapLink = document.querySelector(".map-link");
  const orbitDescription = document.querySelector("#orbit-description");

  if (
    orreryTabs.length &&
    orreryPanels.length &&
    orreryLists.length &&
    orrerySummary &&
    detailTitle &&
    detailDescription &&
    guidedLink &&
    mapLink
  ) {
    const selectConstellation = (choice) => {
      const list = choice.closest("[data-orrery-list]");
      list.querySelectorAll(".constellation-choice").forEach((item) => {
        const selected = item === choice;
        item.classList.toggle("is-selected", selected);
        if (selected) item.setAttribute("aria-current", "true");
        else item.removeAttribute("aria-current");
      });

      detailTitle.textContent = choice.dataset.constellationTitle;
      detailDescription.textContent = choice.dataset.constellationDescription;
      guidedLink.href = `${choice.dataset.constellationUrl}#start`;
      mapLink.href = choice.dataset.constellationUrl;
    };

    const selectThread = (tab, moveFocus = false) => {
      const key = tab.dataset.orreryThread;

      orreryTabs.forEach((item) => {
        const selected = item === tab;
        item.setAttribute("aria-selected", String(selected));
        item.tabIndex = selected ? 0 : -1;
      });

      orreryPanels.forEach((panel) => {
        panel.hidden = panel.dataset.orreryPanel !== key;
      });

      orrerySummary.textContent = tab.dataset.threadSummary;
      document.querySelectorAll(".orbit").forEach((orbit) => {
        orbit.classList.toggle("is-active", orbit.dataset.orbit === key);
      });
      document.querySelectorAll("[data-orbit-group]").forEach((group) => {
        const selected = group.dataset.orbitGroup === key;
        group.querySelectorAll(".orbit-node").forEach((node) => {
          node.classList.toggle("is-active", selected);
        });
      });

      if (orbitDescription) {
        const count = document.querySelector(`[data-orrery-list="${key}"]`).children.length;
        orbitDescription.textContent = `The ${tab.dataset.threadName} thread is selected. Its ${count} constellation points are highlighted.`;
      }

      const activeList = document.querySelector(`[data-orrery-list="${key}"]`);
      const firstChoice = activeList.querySelector(".constellation-choice");
      if (firstChoice) selectConstellation(firstChoice);
      if (moveFocus) tab.focus();
    };

    orreryTabs.forEach((tab, index) => {
      tab.addEventListener("click", () => selectThread(tab));
      tab.addEventListener("keydown", (event) => {
        if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
        event.preventDefault();
        let nextIndex = index;
        if (event.key === "ArrowLeft") nextIndex = (index - 1 + orreryTabs.length) % orreryTabs.length;
        if (event.key === "ArrowRight") nextIndex = (index + 1) % orreryTabs.length;
        if (event.key === "Home") nextIndex = 0;
        if (event.key === "End") nextIndex = orreryTabs.length - 1;
        selectThread(orreryTabs[nextIndex], true);
      });
    });

    document.querySelectorAll(".constellation-choice").forEach((choice) => {
      choice.addEventListener("click", (event) => {
        if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
        event.preventDefault();
        selectConstellation(choice);
      });
    });
  }
})();
