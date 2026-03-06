chrome.runtime.onMessage.addListener((request) => {
  if (request.action === "fillForm") {

    const profile = {
      name: "Apeksha Sood",
      email: "apekshasood03@gmail.com",
      phone: "7895629961",
      linkedin: "https://linkedin.com",
    };

    document.querySelectorAll("input").forEach((input) => {

      const field = input.name.toLowerCase();

      if (field.includes("name")) input.value = profile.name;
      if (field.includes("email")) input.value = profile.email;
      if (field.includes("phone")) input.value = profile.phone;
      if (field.includes("linkedin")) input.value = profile.linkedin;

    });

  }
});