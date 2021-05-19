export default {
  init() {
    $('[data-toggle="imgTooltip"]').tooltip({
      HTML: true,
      template:
        '<div class="tooltip imgTooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner imgTooltip-inner"></div></div>',
    });
  },
  finalize() {},
};
