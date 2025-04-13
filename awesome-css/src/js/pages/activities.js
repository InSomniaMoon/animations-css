fetch("/src/transformed_data.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);

    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get("id");
    const activity = data[id];

    if (!activity) {
      activitiesContainer.innerHTML = "<p>Activity not found</p>";
      return;
    }

    activity.id = id;

    loadPage(activity);
  });

function loadPage(data) {
  document.querySelector("#title").textContent = data.activityName;
  document.querySelector(
    "#title"
  ).style.viewTransitionName = `activity_${data.id}-title`;

  document.querySelector("#description").innerHTML = data.description;
  document.querySelector("#activity-image").src = data.image;
  document.querySelector("#activity-image").alt = data.activityName;
  document.querySelector(
    "#activity-image"
  ).style.viewTransitionName = `activity_${data.id}-image`;
}
