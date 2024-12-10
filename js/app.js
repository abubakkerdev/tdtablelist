let addTableList = document.querySelector(".addTableList");

let tableListData = "";
tableJsonFile.map((element, index) => {
  tableListData += `
  <tr>
    <td>${element.eventName}</td>
    <td class="cpair">${element.currency}</td>
    <td>${element.startDate}</td>
    <td>${element.id}</td>
    <td>${element.actual}</td>
    <td>${element.forecast}</td>
    <td>${element.previous}</td>
    <td>${element.point}</td>

    <td>${
      element.colour === "up"
        ? '<span class="up"></span>'
        : '<span class="down"></span>'
    }</td>
    <td>${
      element.mPredict === "up"
        ? '<span class="up"></span>'
        : '<span class="down"></span>'
    }</td>
    <td class="imgUrl">${element.imgLink.map((el, ind) => {
      return `<a href="${el}" target="_blank">${ind + 1}</a>`;
    })}
    </td>
  </tr>`;
});

addTableList.innerHTML = tableListData;

new DataTable("#example", {
  layout: {
    bottomEnd: {
      paging: {
        firstLast: false,
      },
    },
  },
  ordering: false,
});
