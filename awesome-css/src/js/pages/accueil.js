const categories = document.querySelector(".categories");
const chips = categories?.querySelectorAll(".chip");

chips?.forEach((chip) =>
  chip.addEventListener("click", handleCategoryChipClick)
);

function handleCategoryChipClick(event) {
  const chip = event.currentTarget;
  const category = chip.dataset.category;
  chips.forEach((c) => {
    if (c !== chip) {
      c.classList.remove("selected");
    }
  });
  if (chip.classList.contains("selected")) {
    chip.classList.remove("selected");
  } else {
    chip.classList.add("selected");
  }
}

function showActivitiesByCategory(category) {
  const activities = document.querySelectorAll(".activity-wrapper");

  activities.forEach((activity) => {
    const activityCategory = activity.dataset.category;
    if (category === "all" || activityCategory === category) {
      activity.style.display = "block";
    } else {
      activity.style.display = "none";
    }
  });
}