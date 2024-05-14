const changeContent = (index) => {
  var paragraphs = {
    1: "From small office electrical fit-outs to large commercial plants and warehouses, our expert team is on hand to deliver tailored electrical solutions to your commercial project. We provide specialist support throughout your entire construction process, working with you to ensure your build is finished on time, and on budget. ",
    2: "Hammond Electrical has been involved with the modular building industry for over 40 years. From residential buildings and switch rooms, to large industrial kitchens and mining camp amenities, our electrical installations for modular buildings are pre-wired in Perth and ready to be shipped out across the country.",
    3: "As a building owner you’ve got a duty of care—and this includes electricity. At Hammond Electrical, we help ensure you continue to provide reliable power to your properties and tenants. Whether it’s a connection for a new tenant, repairing your existing fit-out, or a completely new build, we’ll take care of your complete electrical needs.",
    4: "The right connection is critical for retirement villages. Whether it’s for critical medical equipment, or to power your village’s lifestyle needs, we can create a solution that keeps your residents safe and secure, around the clock. We’re on call when you need us, so we can help you provide a healthier, happier environment for your residents.",
    5: "You can’t do much if your site doesn’t have power. At Hammond Electrical we help you stay connected for the life of your construction projects. Whether it’s a short-term project or an emergency supply, and with both overhead and underground connection options, we help you provide a safe, reliable power supply for your site, wherever you are.",
  };
  const content = document.getElementById("content");
  content.textContent = paragraphs[index];

  const spans = document.querySelectorAll(".tabs__card span");
  spans.forEach(function (span, index1) {
    if (index1 === index - 1) {
      span.classList.add("highlighted");
    } else {
      span.classList.remove("highlighted");
    }
  });

  const tabs = document.querySelectorAll(".tabs__card");

  tabs.forEach(function (tab, index2) {
    if (index2 === index - 1) {
      tab.classList.add("active");
    } else {
      tab.classList.remove("active");
    }
  });

  const tabs__svg = document.querySelectorAll(".tabs__svg");

  tabs__svg.forEach(function (tab_svg, index3) {
    if (index3 === index - 1) {
      tab_svg.classList.add("svg_border");
    } else {
      tab_svg.classList.remove("svg_border");
    }
  });

  const svgs = document.querySelectorAll(".tabs__svg svg");
  svgs.forEach(function (svg, index4) {
    if (index4 === index - 1) {
      svg.classList.add("svg_fill");
    } else {
      svg.classList.remove("svg_fill");
    }
  });
};
