function scrapeData() {
  let eventTitle = "";
  let eventDetails = "";

  // Desktop view selectors
  const titleElementDesktop = document.querySelector(
    'h1[data-testid="event-title"]'
  );
  const detailsElementDesktop = document.querySelector(
    'div[data-testid="event-details"]'
  );

  // Mobile view selectors
  const titleElementMobile = document.querySelector(
    "h1.MobileNav__Title-sc-9b74d80e-6"
  );
  const detailsElementMobile = document.querySelector(
    'p[data-testid="event-details"]'
  );

  if (titleElementDesktop) {
    eventTitle = titleElementDesktop.innerText;
  } else if (titleElementMobile) {
    eventTitle = titleElementMobile.innerText;
  } else {
    console.log("Title element not found.");
  }

  if (detailsElementDesktop) {
    eventDetails = detailsElementDesktop.innerText;
  } else if (detailsElementMobile) {
    eventDetails = detailsElementMobile.innerText;
  } else {
    console.log("Details element not found.");
  }

  if (eventTitle) {
    console.log("Event Title:", eventTitle);
  }
  if (eventDetails) {
    console.log("Event Details:", eventDetails);
  }
}

scrapeData();
