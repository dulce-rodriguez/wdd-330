const links = [
    {
      label: "Week 1",
      url: "week1/index.html",
    },
    {
      label: "Week 2",
      url: "week2/index.html",
    },
    {
      label: "Week 3",
      url: "week3/index.html",
    },
    {
      label: "Week 4",
      url: "week4/index.html",
    },
    {
      label: "Week 5",
      url: "week5/index.html",
    },
    {
      label: "ToDo List",
      url: "week5/todo.html",
    },
    {
      label: "Week 7",
      url: "week7/index.html",
    },
    {
      label: "Week 8",
      url: "week8/index.html",
    },
    {
      label: "Week 9",
      url: "week9/index.html",
    },
    {
      label: "Week 10",
      url: "week10/notes.html",
    },
    {
      label: "Final Project",
      url: "project/index.html",
    },
  ]

  function loadIndex() {
      const ol = document.querySelector("#linksList");

      links.forEach( link => {
          const li = document.createElement("li")
          const href = document.createElement("a");
          href.setAttribute("href", link.url);
          href.innerText = link.label;

          li.appendChild(href);
          ol.appendChild(li);
      })
  }
