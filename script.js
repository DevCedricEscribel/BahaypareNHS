(function () {
  const img = document.getElementById("school-map");
  const overlay = document.getElementById("overlay");
  const container = document.querySelector(".map-container");
  const tooltip = document.getElementById("tooltip");

  // polygons NodeList
  const polygons = overlay.querySelectorAll("polygon");
  const labelsGroup = overlay.querySelector("#labels");

  // utility: parse points string into array [[x,y],...]
  function parsePoints(pointsStr) {
    return pointsStr
      .trim()
      .split(/\s*,\s*|\s+/)
      .map(Number)
      .reduce((acc, val, idx, arr) => {
        if (idx % 2 === 0) acc.push([val, arr[idx + 1]]);
        return acc;
      }, []);
  }

  // compute centroid (average of vertices)
  function centroid(points) {
    const len = points.length;
    let sx = 0,
      sy = 0;
    points.forEach((p) => {
      sx += p[0];
      sy += p[1];
    });
    return [sx / len, sy / len];
  }

  // sync overlay size/position to image
  function syncOverlay() {
    if (!img.naturalWidth || !img.naturalHeight) return;
    // set viewBox to natural image size so polygon coords are in original pixels
    overlay.setAttribute(
      "viewBox",
      `0 0 ${img.naturalWidth} ${img.naturalHeight}`
    );

    // compute image position relative to container
    const imgRect = img.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();
    const left = imgRect.left - containerRect.left;
    const top = imgRect.top - containerRect.top;

    // size the svg to match rendered image size (so viewBox -> CSS maps 1:1)
    overlay.style.width = imgRect.width + "px";
    overlay.style.height = imgRect.height + "px";
    overlay.style.left = left + "px";
    overlay.style.top = top + "px";
    overlay.style.transform = "none"; // no extra scaling — viewBox handles scaling

    // update labels: remove any existing label nodes, recreate
    labelsGroup.innerHTML = "";
    polygons.forEach((poly, i) => {
      const pts = parsePoints(poly.getAttribute("points"));
      const [cx, cy] = centroid(pts);
      const text = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "text"
      );
      text.setAttribute("x", cx);
      text.setAttribute("y", cy);
      text.textContent = poly.dataset.title || `R${i + 1}`;
      labelsGroup.appendChild(text);
    });
  }

  // show tooltip for polygon
  function onPolyMouseMove(e) {
    const title = this.dataset.title || this.getAttribute("id") || "Room";
    // page coords for tooltip
    tooltip.style.left = e.pageX + 8 + "px";
    tooltip.style.top = e.pageY - 34 + "px";
    tooltip.innerText = title;
    tooltip.style.display = "block";
  }
  function onPolyLeave() {
    tooltip.style.display = "none";
  }
  function onPolyClick(e) {
    e.preventDefault();
    alert("Clicked: " + (this.dataset.title || "Room"));
  }

  // attach events to polygons (works on desktop and mobile taps)
  function attachPolyEvents() {
    polygons.forEach((poly) => {
      poly.addEventListener("mousemove", onPolyMouseMove);
      poly.addEventListener("mouseenter", onPolyMouseMove);
      poly.addEventListener("mouseleave", onPolyLeave);
      poly.addEventListener("click", onPolyClick);
      // enable touch support (touchmove -> show tooltip at touch point)
      poly.addEventListener(
        "touchstart",
        function (ev) {
          const touch = ev.touches && ev.touches[0];
          if (touch) {
            tooltip.style.left = touch.pageX + 8 + "px";
            tooltip.style.top = touch.pageY - 34 + "px";
            tooltip.innerText = this.dataset.title || "Room";
            tooltip.style.display = "block";
          }
        },
        { passive: true }
      );
      poly.addEventListener("touchend", () => {
        tooltip.style.display = "none";
      });
    });
  }

  // Initialize after image loads
  function init() {
    // make sure <area> coords respond to resizing too
    if (typeof imageMapResize === "function") {
      try {
        imageMapResize();
      } catch (e) {
        /* ignore */
      }
    }
    syncOverlay();
    attachPolyEvents();
  }

  // run at load and on resize (debounce)
  let resizeTimer = null;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(syncOverlay, 80);
  });

  // image may be cached, ensure naturalWidth available
  if (img.complete && img.naturalWidth) {
    init();
  } else {
    img.addEventListener("load", init);
  }

  // optional: observe container changes (if layout modifies image size)
  const ro = new ResizeObserver(() => syncOverlay());
  ro.observe(img);
})();

// Sample student data - replace with your actual data
const students = [
  {
    name: "Mariel Evangelista",
    room: "Room 101",
    building: "Main Building",
    floor: "1st Floor",
  },
  {
    name: "Kyle Cindrelle Sagum",
    room: "Room 205",
    building: "Science Wing",
    floor: "2nd Floor",
  },
  {
    name: "Princess Anne Villafuerte",
    room: "Room 103",
    building: "Main Building",
    floor: "1st Floor",
  },
  {
    name: "Verlene Faith",
    room: "Room 301",
    building: "Arts Building",
    floor: "3rd Floor",
  },
  {
    name: "Emma Brown",
    room: "Room 150",
    building: "Library Wing",
    floor: "1st Floor",
  },
  {
    name: "Frank Miller",
    room: "Room 220",
    building: "Science Wing",
    floor: "2nd Floor",
  },
  {
    name: "Grace Lee",
    room: "Room 105",
    building: "Main Building",
    floor: "1st Floor",
  },
  {
    name: "Henry Taylor",
    room: "Room 310",
    building: "Arts Building",
    floor: "3rd Floor",
  },
];

const searchInput = document.getElementById("studentSearch");
const searchBtn = document.getElementById("searchBtn");
const searchResults = document.getElementById("searchResults");
const resultsContainer = document.getElementById("resultsContainer");
const directionsPanel = document.getElementById("directionsPanel");
const directionsContainer = document.getElementById("directionsContainer");

function searchStudents() {
  const query = searchInput.value.trim().toLowerCase();

  if (query.length === 0) {
    searchResults.style.display = "none";
    return;
  }

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(query)
  );

  displaySearchResults(filteredStudents);
}

function displaySearchResults(results) {
  resultsContainer.innerHTML = "";

  if (results.length === 0) {
    resultsContainer.innerHTML = `
                    <div class="no-results">
                        <i class="bi bi-person-x display-6 mb-3"></i>
                        <div>No students found matching "${searchInput.value}"</div>
                    </div>
                `;
  } else {
    results.forEach((student) => {
      const resultDiv = document.createElement("div");
      resultDiv.className = "student-result";
      resultDiv.innerHTML = `
                        <div class="d-flex justify-content-between align-items-start">
                            <div>
                                <div class="fw-bold text-dark">${student.name}</div>
                                <small class="text-muted">${student.building} • ${student.floor}</small>
                            </div>
                            <span class="room-badge">${student.room}</span>
                        </div>
                    `;

      resultDiv.addEventListener("click", () => showDirections(student));
      resultsContainer.appendChild(resultDiv);
    });
  }

  searchResults.style.display = "block";
}

function showDirections(student) {
  // Sample directions - customize based on your school layout
  const directions = [
    "Enter through the main entrance",
    `Head to the ${student.building}`,
    `Take the stairs to the ${student.floor}`,
    `Walk down the hallway`,
    `Look for ${student.room} on your right`,
    "You have arrived at your destination!",
  ];

  directionsContainer.innerHTML = "";

  // Add student info header
  const headerDiv = document.createElement("div");
  headerDiv.className = "mb-3 p-3 bg-light rounded";
  headerDiv.innerHTML = `
                <div class="fw-bold text-primary">${student.name}</div>
                <div class="text-muted">${student.room} • ${student.building}</div>
            `;
  directionsContainer.appendChild(headerDiv);

  // Add directions
  directions.forEach((direction, index) => {
    const directionDiv = document.createElement("div");
    directionDiv.className = "direction-item";
    directionDiv.innerHTML = `
                    <div class="d-flex align-items-center">
                        <div class="direction-number">${index + 1}</div>
                        <div>${direction}</div>
                    </div>
                `;
    directionsContainer.appendChild(directionDiv);
  });

  // Scroll to directions on mobile
  if (window.innerWidth <= 768) {
    directionsPanel.scrollIntoView({ behavior: "smooth" });
  }
}

// Event listeners
searchBtn.addEventListener("click", searchStudents);
searchInput.addEventListener("input", searchStudents);
searchInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    searchStudents();
  }
});

// Clear search when clicking outside
document.addEventListener("click", function (e) {
  if (
    !e.target.closest("#studentSearch") &&
    !e.target.closest("#searchResults")
  ) {
    if (searchInput.value.trim() === "") {
      searchResults.style.display = "none";
    }
  }
});
(function () {
  function c() {
    var b = a.contentDocument || a.contentWindow.document;
    if (b) {
      var d = b.createElement("script");
      d.innerHTML =
        "window.__CF$cv$params={r:'98ade7cf867ebc4b',t:'MTc1OTg0NTQyNS4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";
      b.getElementsByTagName("head")[0].appendChild(d);
    }
  }
  if (document.body) {
    var a = document.createElement("iframe");
    a.height = 1;
    a.width = 1;
    a.style.position = "absolute";
    a.style.top = 0;
    a.style.left = 0;
    a.style.border = "none";
    a.style.visibility = "hidden";
    document.body.appendChild(a);
    if ("loading" !== document.readyState) c();
    else if (window.addEventListener)
      document.addEventListener("DOMContentLoaded", c);
    else {
      var e = document.onreadystatechange || function () {};
      document.onreadystatechange = function (b) {
        e(b);
        "loading" !== document.readyState &&
          ((document.onreadystatechange = e), c());
      };
    }
  }
})();
