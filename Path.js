const locations = {
  "Walk path": {
    type: "pathway",
    description: "Main walkway connecting different areas of the school",
    directions: [
      "Follow the main path",
      "Stay on designated walkways",
      "Watch for other students",
    ],
  },
  "JHS Court": {
    type: "court",
    description: "Junior High School basketball court and recreational area",
    directions: [
      "Enter through the main gate",
      "Court is located in the eastern section",
      "Check schedule for availability",
    ],
  },
  "SHS Court": {
    type: "court",
    description: "Senior High School basketball court and sports facility",
    directions: [
      "Located in the western area",
      "Access through the sports complex entrance",
      "Equipment available at the office",
    ],
  },
  "Main Office": {
    type: "office",
    description: "Administrative office for student services and information",
    directions: [
      "Enter through the main entrance",
      "Located on the ground floor",
      "Office hours: 8:00 AM - 5:00 PM",
    ],
  },
  Library: {
    type: "building",
    description: "School library with study areas and resources",
    directions: [
      "Enter through the academic building",
      "Second floor, room 201",
      "Quiet study areas available",
    ],
  },
  Cafeteria: {
    type: "facility",
    description: "Student dining hall and food service area",
    directions: [
      "Located in the central building",
      "Multiple entrances available",
      "Meal times: 11:30 AM - 1:30 PM",
    ],
  },
  Fireexit: {
    type: "facility",
    description: "Emergency fire exit for safe evacuation",
    directions: [
      "Locate the nearest fire exit sign",
      "Proceed calmly to the exit",
      "Follow staff instructions",
    ],
    onSelect: function () {
      // Highlight all shapes with data-title="Fireexit"
      document.querySelectorAll('[data-title="Fireexit"]').forEach((el) => {
        el.classList.add("selected");
      });
    },
  },
  "Building 1": {
    type: "building",
    description: "Building 1 houses classrooms for Grades 7 to 10",
    directions: [
      "Enter through the main gate",
      "Access via the main walkway",
      "Walk straight for 48 meters",
      "You are now at Building 1",
    ],
    onSelect: function () {
      // Unhide the ToB1 arrow polygon
      const arrow = document.querySelector("#ToB1");
      if (arrow) arrow.style.display = "";
      // Also select the building shape
      const buildingShape = document.querySelector('[data-title="Building 1"]');
      if (buildingShape) buildingShape.classList.add("selected");
    },
  },
};

// Flattened searchable students array
const students = [];
[
  {
    room: "7 - Myanmar & 8 - Patience",
    location: "Building 1",
    floor: "1st Floor",
    students: [
      "Aljur Clemente Canimo",
      "Jayson Gonzales David",
      "Xymon Rocas Sison",
      "Jada David Hernandez",
      "Mariel Malapit Sulit",
      "Ed Jireh Calma Cabingao",
      "Carlo Dela Cruz Reyes",
      "Jerah Lynn Cruz Buco",
      "Jasmine Diaz Canzon",
      "Angel Lee Tayao Parayao",
    ],
  },
  {
    room: "7 - Cambodia & 8 - Humility",
    location: "Building 1",
    floor: "1st Floor",
    students: [
      "ABANO, ALDRIN CAYETANO",
      "ALBURO, THEA JANELLE DELA CRUZ",
      "AGAS, EXIQUEL DELA CRUZ",
      "BULAON, BEA ROSE DE BELEN",
      "CARIÑO, ROSELYN RONDINA",
      "Jaspher Tapang De Belen",
      "Jaypee Cadapan De Belen",
      "Tiezel Kaye Magat Caluag",
      "Erika Chico Catalig",
      "Janine Dolor Lagman",
    ],
  },
  {
    room: "7 - Laos & 10 - Competence",
    location: "Building 1",
    floor: "1st Floor",
    students: [
      "AMPON, PRINCE LAWRENCE PERATER",
      "AGUINALDO, MERRY ROSE BORNALO",
      "AQUINO, KARL MOISES BANDA",
      "BAUTISTA, KATE AUDREY PADILLA",
      "BRITOS, NASHVILLE HABOC",
      "AQUINO, VINCE CHRISTIAN, CUNANAN",
      "ABALLA, RAFFLEZEL, IGNACIO",
      "BALTAZAR, ESTEVEN HANZ, IMPERIAL",
      "ALVARO, RHIANNA JOY",
      "ARGANA, ERICKA, MANLIWAT",
    ],
  },
  {
    room: "7 - Singapore & 8 - Courage",
    location: "Building 1",
    floor: "2nd Floor",
    students: [
      "Balajadia, Charlie Garingarao",
      "Aguilar, Charlyn Mae David",
      "Basas, Vince Lauren Encarnacion",
      "Aguinaldo, Ashley Jhoy Mariano",
      "Alcantara, Amberlyne Cloe Santos",
      "Carlo Mangahas Chico",
      "Ian Culala Chico",
      "Jheny Mangalus Castillo",
      "Apple Salicsic Lopez",
      "Raycel Dolor Magat",
    ],
  },
  {
    room: "7 - Brunei & 8 - Charity",
    location: "Building 1",
    floor: "2nd Floor",
    students: [
      "Jessie Reyes San Juan",
      "Eron Renz Olmo Villanueva",
      "Aliyah Divine Bolina Estrada",
      "Aerrien Mae Espino Reyes",
      "Sabrina Faith De Guzman Sadie",
      "Jerick Balagtas Alonzo",
      "Jake Reyes Lacanilao",
      "Ariella Carpio Alvarez",
      "Flor Arceo Cunanan",
      "Sam Punzalan Pragacha",
    ],
  },
  {
    room: "7 - Indonesia & 8 - Love",
    location: "Building 1",
    floor: "2nd Floor",
    students: [
      "ADRIANO, ANDREI HARRISON COLLADO",
      "BAIRAN, JHAZZREIN KHIEL RUBIANO",
      "BAUTISTA, DRENZ GEONZEB GAMBOA",
      "BANTASAN, KIMBERLY ANNE GUILLERMO",
      "BOLLUSA, MARIZ MAE PALMA",
      "Johnny Caleon De Leon",
      "Justine Guardian Santos",
      "Rhian Jimenez Calma",
      "Andrea Blas Jimenez",
      "Shine Cunanan Padilla",
    ],
  },
].forEach((group) => {
  group.students.forEach((name) => {
    students.push({
      name,
      room: group.room,
      location: group.location,
      floor: group.floor,
    });
  });
});

// Search functionality
const searchInput = document.getElementById("searchInput");
const searchResults = document.getElementById("searchResults");

searchInput.addEventListener("input", function () {
  const query = this.value.toLowerCase().trim();

  if (query.length < 2) {
    searchResults.style.display = "none";
    return;
  }

  const results = [];

  // Search students
  students.forEach((student) => {
    if (student.name.toLowerCase().includes(query)) {
      results.push({
        type: "student",
        title: student.name,
        subtitle: `${student.room} — ${student.floor}, ${student.location}`,
        location: student.location,
        room: student.room, // 🟢 Added for later use
        floor: student.floor, // 🟢 Added for later use
      });
    }
  });

  // Search locations
  Object.keys(locations).forEach((location) => {
    if (location.toLowerCase().includes(query)) {
      results.push({
        type: "location",
        title: location,
        subtitle: locations[location].description,
        location: location,
      });
    }
  });

  displaySearchResults(results);
});

function displaySearchResults(results) {
  if (results.length === 0) {
    searchResults.style.display = "none";
    return;
  }

  searchResults.innerHTML = results
    .map(
      (result) => `
        <div 
          class="search-result-item" 
          onclick='selectSearchResult(${JSON.stringify(result)})'>
          <div class="fw-bold">${result.title}</div>
          <small class="text-muted">${result.subtitle}</small>
        </div>
      `
    )
    .join("");

  searchResults.style.display = "block";
}

// 🟢 UPDATED: selectSearchResult now handles both student & location
function selectSearchResult(result) {
  searchInput.value = result.title;
  searchResults.style.display = "none";

  if (result.type === "student") {
    // Highlight the student's building
    findLocation(result.location);

    // 🟢 Update info panel with student's room and floor
    document.getElementById("locationInfo").style.display = "block";
    document.getElementById("selectedLocation").textContent = result.title;
    document.getElementById("locationDescription").innerHTML = `
      <strong>Room:</strong> ${result.room}<br>
      <strong>Floor:</strong> ${result.floor}<br>
      <strong>Location:</strong> ${result.location}
    `;

    // Replace directions with a short note for students
    const directionsContainer = document.getElementById("directionsContainer");
    // Show the normal directions for the student's location
    const location = locations[result.location];
    if (location && location.directions) {
      directionsContainer.innerHTML = `
      <h6 class="text-primary mb-3"><i class="fas fa-directions me-2"></i>Directions to ${
        result.location
      }</h6>
      <div class="mb-2">
        <span class="badge bg-info">
          ${
            result.floor === "1st Floor"
              ? "Ground/1st Floor"
              : result.floor === "2nd Floor"
              ? "2nd Floor"
              : result.floor
          }
        </span>
      </div>
      ${location.directions
        .map(
          (step, index) => `
        <div class="direction-step">
          <div class="d-flex align-items-center">
          <span class="badge bg-primary rounded-circle me-3">${index + 1}</span>
          <span>${step}</span>
          </div>
        </div>
        `
        )
        .join("")}
      <div class="mt-3 p-3 bg-light rounded">
        <small class="text-muted">
        <i class="fas fa-info-circle me-1"></i>
        Estimated walking time: ${Math.floor(Math.random() * 5) + 2} minutes
        </small>
      </div>
      `;
    } else {
      directionsContainer.innerHTML = `<div class="text-muted">No directions available for this location.</div>`;
    }
  } else {
    // Normal location search
    findLocation(result.location);
  }
}

// Existing map functions remain unchanged
document.querySelectorAll(".shape").forEach((shape) => {
  shape.addEventListener("click", function () {
    const title = this.getAttribute("data-title");
    selectLocation(title, this);
  });
});

function selectLocation(locationName, element) {
  document
    .querySelectorAll(".shape")
    .forEach((s) => s.classList.remove("selected"));

  if (element) {
    element.classList.add("selected");
  }

  const location = locations[locationName];
  if (!location) return;

  const allArrows = document.querySelectorAll(".shape[id^='To']");
  allArrows.forEach((arrow) => (arrow.style.display = "none"));

  if (location.onSelect && typeof location.onSelect === "function") {
    location.onSelect();
  }

  document.getElementById("locationInfo").style.display = "block";
  document.getElementById("selectedLocation").textContent = locationName;
  document.getElementById("locationDescription").textContent =
    location.description;

  const directionsContainer = document.getElementById("directionsContainer");
  directionsContainer.innerHTML = `
    <h6 class="text-primary mb-3"><i class="fas fa-directions me-2"></i>Directions to ${locationName}</h6>
    ${location.directions
      .map(
        (step, index) => `
        <div class="direction-step">
          <div class="d-flex align-items-center">
            <span class="badge bg-primary rounded-circle me-3">${
              index + 1
            }</span>
            <span>${step}</span>
          </div>
        </div>
      `
      )
      .join("")}
    <div class="mt-3 p-3 bg-light rounded">
      <small class="text-muted">
        <i class="fas fa-info-circle me-1"></i>
        Estimated walking time: ${Math.floor(Math.random() * 5) + 2} minutes
      </small>
    </div>
  `;
}

function findLocation(locationName) {
  const shape = document.querySelector(`[data-title="${locationName}"]`);
  if (shape) {
    selectLocation(locationName, shape);
    if (window.innerWidth <= 768) {
      document
        .querySelector(".map-container")
        .scrollIntoView({ behavior: "smooth" });
    }
  }
}

function resetMap() {
  document
    .querySelectorAll(".shape")
    .forEach((s) => s.classList.remove("selected"));
  document.getElementById("locationInfo").style.display = "none";
  document.getElementById("directionsContainer").innerHTML = `
    <div class="text-center text-muted py-5">
      <i class="fas fa-map-signs fa-3x mb-3"></i>
      <p>Click on any location on the map to see directions and information</p>
    </div>
  `;
  searchInput.value = "";
  searchResults.style.display = "none";
}

document.addEventListener("click", function (e) {
  if (!e.target.closest(".search-container")) {
    searchResults.style.display = "none";
  }
});
