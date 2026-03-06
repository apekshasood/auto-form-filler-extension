chrome.runtime.onMessage.addListener((request) => {
  if (request.action === "fillForm") {

    const profile = {
      name: "Apeksha Sood",
      position: "React Frontend Developer",
      experience: "5+ years",
      email: "apeksha@email.com",
      phone: "9999999999",
      city: "Pune",
      country: "India",
      summary: "Frontend developer specializing in React, Redux, and modern JavaScript."
    };

    const inputs = document.querySelectorAll("input, textarea");

    inputs.forEach((input) => {
      const field =
        (input.name || "") +
        (input.id || "") +
        (input.placeholder || "") +
        (input.labels?.[0]?.innerText || "");

      const key = field.toLowerCase();

      if (key.includes("full name")) input.value = profile.name;

      if (key.includes("intended position") || key.includes("position"))
        input.value = profile.position;

      if (key.includes("experience"))
        input.value = profile.experience;

      if (key.includes("email"))
        input.value = profile.email;

      if (key.includes("phone"))
        input.value = profile.phone;

      if (key.includes("city"))
        input.value = profile.city;

      if (key.includes("country"))
        input.value = profile.country;

      if (key.includes("summary") || key.includes("qualification"))
        input.value = profile.summary;

      input.dispatchEvent(new Event("input", { bubbles: true }));
      input.dispatchEvent(new Event("change", { bubbles: true }));
    });

  }
});