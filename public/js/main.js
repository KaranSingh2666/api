//

const imggen = async (e) => {
  const size = document.querySelector("#size").value;
  const prompts = document.querySelector("#prompt").value;
  document.querySelector(".msg").textContent = "";
  document.querySelector("#image").src = "";
  e.preventDefault();
  try {
    if (prompts !== "") {
      showspinner();
      const response = await fetch("/openai/createimg", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          input: prompts,
          size: size,
        }),
      });

      if (!response.ok) {
        hidespinner();
        throw new Error("That image could not be generated");
      }
      const data = await response.json();
      console.log(data.url)
      document.querySelector('#image').src = data.url;
      hidespinner();
    } else {
      alert("plz give some thought");
      return;
    }
  } catch (error) {
    document.querySelector(".msg").textContent = error;
  }
};
document.querySelector("#image-form").addEventListener("submit", imggen);

const showspinner = () => {
  document.querySelector(".spinner").classList.add("show");
};
const hidespinner = () => {
  document.querySelector(".spinner").classList.remove("show");
};
