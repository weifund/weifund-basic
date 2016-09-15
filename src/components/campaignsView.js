const campaignsView = function(options) {
  const t = options.t;

  return `
    <br />

    <h1 class="text-huge text-center">${t("campaignsView.header")}</h1>
    <h3 class="text-center">${t("campaignsView.subHeader")}</h3>

    <br /><br /><br /><br /><br /><br /><br />

    <div class="row">
      <div id="staffpicks_list"><h3>${t("campaignsView.loading")}</h3></div>
    </div>

    <br /><br /><br /><br /><br /><br />

    <div class="row">
      <h3> ${t("campaignsView.campaignsHeader")}</h3>

      <br /><br />

      <div id="campaigns_list"><h3>${t("campaignsView.loading")}</h3></div>
    </div>
  </div>
  `;
};

module.exports = campaignsView;
