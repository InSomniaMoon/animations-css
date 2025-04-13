export class Activity extends HTMLElement {
  constructor() {
    super();
    // this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  sanitizeHTML(html) {
    // remove all  tags
    return html?.replace(/<[^>]*>/g, "") ?? "";
  }

  render() {
    const activity = JSON.parse(this.getAttribute("activity"));

    // this.shadowRoot.innerHTML = `
    this.innerHTML = `
    
   
    <div class="activity-wrapper" id="activity_${activity.id}">
    <div class="activity">
      <img
        src="${activity.image}"
        class="activity-image"
      />
      <div class="activity-content">
        <h3
          class="activity-title"
          style="view-transition-name: activity_${activity.id}-title"
        >${activity.activityName}</h3>
        <p class="activity-description">${this.sanitizeHTML(
          activity.description
        )}        </p>
      </div>
    </div>
    <div class="details" >
      <div class="details-image-container">
        <img
          src="${activity.image}"
          class="activity-image"
        />
        <a class="details-button" href="/activities/${
          activity.id
        }">Voir les détails</a>
      </div>
      <div class="details-content">
      ${activity.stats
        .map(
          (stat) => `
         <div class="details-item">
          <p class="details-item-label">${stat.label}</p>
          <p class="details-item-value">
          ${stat.value}
          </p>
        </div>
        `
        )
        .join("")}
      </div>
    </div>
  </div>
    `;
  }
}

customElements.define("activity-card", Activity);
