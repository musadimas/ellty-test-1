document.querySelectorAll("[data-checkbox-item]").forEach((item) => {
  const checkbox = item.querySelector("input[type='checkbox']");
  const box = item.querySelector(".checkbox-box");
  const icon = item.querySelector(".checkbox-icon");

  item.addEventListener("click", () => {
    checkbox.checked = !checkbox.checked;
    console.log(checkbox.checked);

    if (checkbox.checked) {
      box.classList.add("bg-[#2469F6]!", "border-none!", "group-hover:bg-[#5087F8]!");
      icon.classList.add("text-white!");
    } else {
      box.classList.remove("bg-[#2469F6]!", "border-none!", "group-hover:bg-[#5087F8]!");
      icon.classList.remove("text-white!");
      box.classList.add("bg-transparent", "border-[#CDCDCD]/[60]", "group-hover:border-[#BDBDBD]");
      icon.classList.add("text-[#878787]");
    }
  });
});
