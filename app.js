const accordion = document.getElementsByClassName("label");
const industry = document.getElementById("industry").children;
const jobfunction = document.getElementById("job-function").children;
const revenueSize = document.getElementById("revenue-size").children;
const employeeSize = document.getElementById("employee-size").children;
const loctn = document.getElementById("location").children;
const contactFields = document.getElementById("contact-fields").children;
const companyFields = document.getElementById("company-fields").children;
const projectTier = document.getElementById("project-tier").children;

const industryView = document.getElementById("industry-items");
const jobfunctionView = document.getElementById("job-function-items");
const revenueSizeView = document.getElementById("revenue-size-items");
const employeeSizeView = document.getElementById("employee-size-items");
const loctnView = document.getElementById("location-items");
const contactFieldsView = document.getElementById("contact-fields-items");
const companyFieldsView = document.getElementById("company-fields-items");
const projectTierView = document.getElementById("project-tier-items");

for (let i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function () {
    this.parentElement.classList.toggle("active");
  });
}

function addRemove(item, itemView) {
  Array.from(item).forEach((button) => {
    const items = document.createElement("p");
    items.classList.add("item");
    button.addEventListener("click", function () {
      items.innerHTML = `${this.innerText} <span class="delete">&times;</span>`;
      items.children[0].addEventListener("click", () => {
        items.remove();
      });
      itemView.appendChild(items);
    });
  });
}

addRemove(industry, industryView);
addRemove(jobfunction, jobfunctionView);
addRemove(revenueSize, revenueSizeView);
addRemove(employeeSize, employeeSizeView);
addRemove(loctn, loctnView);
addRemove(contactFields, contactFieldsView);
addRemove(companyFields, companyFieldsView);
addRemove(projectTier, projectTierView);
