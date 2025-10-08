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
    },
  },
};

const students = [
  {
    name: "Aljur Clemente Canimo",
    room: "7 - Myanmar & 8 - Patience",
    location: "Building 1",
    floor: "1st Floor",
  },
  {
    name: "Jayson Gonzales David",
    room: "7 - Myanmar & 8 - Patience",
    location: "Building 1",
    floor: "1st Floor",
  },
  {
    name: "Xymon Rocas Sison",
    room: "7 - Myanmar & 8 - Patience",
    location: "Building 1",
    floor: "1st Floor",
  },
  {
    name: "Jada David Hernandez",
    room: "7 - Myanmar & 8 - Patience",
    location: "Building 1",
    floor: "1st Floor",
  },
  {
    name: "Mariel Malapit Sulit",
    room: "7 - Myanmar & 8 - Patience",
    location: "Building 1",
    floor: "1st Floor",
  },
  {
    name: "ABANO, ALDRIN CAYETANO",
    room: "7 - Cambodia & 8 - Humility",
    location: "Building 1",
    floor: "1st Floor",
  },
  {
    name: "ALBURO, THEA JANELLE DELA CRUZ",
    room: "7 - Cambodia & 8 - Humility",
    location: "Building 1",
    floor: "1st Floor",
  },
  {
    name: "AGAS, EXIQUEL DELA CRUZ",
    room: "7 - Cambodia & 8 - Humility",
    location: "Building 1",
    floor: "1st Floor",
  },
  {
    name: "BULAON, BEA ROSE DE BELEN",
    room: "7 - Cambodia & 8 - Humility",
    location: "Building 1",
    floor: "1st Floor",
  },
  {
    name: "CARIÑO, ROSELYN RONDINA",
    room: "7 - Cambodia & 8 - Humility",
    location: "Building 1",
    floor: "1st Floor",
  },
  {
    name: "AMPON, PRINCE LAWRENCE PERATER",
    room: "7 - Laos & 10 - Competence",
    location: "Building 1",
    floor: "1st Floor",
  },
  {
    name: "AGUINALDO, MERRY ROSE BORNALO",
    room: "7 - Laos & 10 - Competence",
    location: "Building 1",
    floor: "1st Floor",
  },
  {
    name: "AQUINO, KARL MOISES BANDA",
    room: "7 - Laos & 10 - Competence",
    location: "Building 1",
    floor: "1st Floor",
  },
  {
    name: "BAUTISTA, KATE AUDREY PADILLA",
    room: "7 - Laos & 10 - Competence",
    location: "Building 1",
    floor: "1st Floor",
  },
  {
    name: "BRITOS, NASHVILLE HABOC",
    room: "7 - Laos & 10 - Competence",
    location: "Building 1",
    floor: "1st Floor",
  },
  {
    name: "Ed Jireh Calma Cabingao",
    room: "7 - Myanmar & 8 - Patience",
    location: "Building 1",
    floor: "1st Floor",
  },
  {
    name: "Carlo Dela Cruz Reyes",
    room: "7 - Myanmar & 8 - Patience",
    location: "Building 1",
    floor: "1st Floor",
  },
  {
    name: "Jerah Lynn Cruz Buco",
    room: "7 - Myanmar & 8 - Patience",
    location: "Building 1",
    floor: "1st Floor",
  },
  {
    name: "Jasmine Diaz Canzon",
    room: "7 - Myanmar & 8 - Patience",
    location: "Building 1",
    floor: "1st Floor",
  },
  {
    name: "Angel Lee Tayao Parayao",
    room: "7 - Myanmar & 8 - Patience",
    location: "Building 1",
    floor: "1st Floor",
  },
  {
    name: "Jaspher Tapang De Belen",
    room: "7 - Cambodia & 8 - Humility",
    location: "Building 1",
    floor: "1st Floor",
  },
  {
    name: "Jaypee Cadapan De Belen",
    room: "7 - Cambodia & 8 - Humility",
    location: "Building 1",
    floor: "1st Floor",
  },
  {
    name: "Tiezel Kaye Magat Caluag",
    room: "7 - Cambodia & 8 - Humility",
    location: "Building 1",
    floor: "1st Floor",
  },
  {
    name: "Erika Chico Catalig",
    room: "7 - Cambodia & 8 - Humility",
    location: "Building 1",
    floor: "1st Floor",
  },
  {
    name: "Janine Dolor Lagman",
    room: "7 - Cambodia & 8 - Humility",
    location: "Building 1",
    floor: "1st Floor",
  },
  {
    name: "AQUINO, VINCE CHRISTIAN, CUNANAN",
    room: "7 Laos & 10 - Competence",
    location: "Building 1",
    floor: "1st Floor",
  },
  {
    name: "ABALLA, RAFFLEZEL, IGNACIO",
    room: "7 Laos & 10 - Competence",
    location: "Building 1",
    floor: "1st Floor",
  },
  {
    name: "BALTAZAR, ESTEVEN HANZ, IMPERIAL",
    room: "7 Laos & 10 - Competence",
    location: "Building 1",
    floor: "1st Floor",
  },
  {
    name: "ALVARO, RHIANNA JOY",
    room: "7 Laos & 10 - Competence",
    location: "Building 1",
    floor: "1st Floor",
  },
  {
    name: "ARGANA, ERICKA, MANLIWAT",
    room: "7 Laos & 10 - Competence",
    location: "Building 1",
    floor: "1st Floor",
  },
  {
    name: "Balajadia, Charlie Garingarao",
    room: "7 - Singapore & 8 - Courage",
    location: "Building 1",
    floor: "2nd Floor",
  },
  {
    name: "Aguilar, Charlyn Mae David",
    room: "7 - Singapore & 8 - Courage",
    location: "Building 1",
    floor: "2nd Floor",
  },
  {
    name: "Basas, Vince Lauren Encarnacion",
    room: "7 - Singapore & 8 - Courage",
    location: "Building 1",
    floor: "2nd Floor",
  },
  {
    name: "Aguinaldo, Ashley Jhoy Mariano",
    room: "7 - Singapore & 8 - Courage",
    location: "Building 1",
    floor: "2nd Floor",
  },
  {
    name: "Alcantara, Amberlyne Cloe Santos",
    room: "7 - Singapore & 8 - Courage",
    location: "Building 1",
    floor: "2nd Floor",
  },
  {
    name: "Carlo Mangahas Chico",
    room: "7 - Singapore & 8 - Courage",
    location: "Building 1",
    floor: "2nd Floor",
  },
  {
    name: "Ian Culala Chico",
    room: "7 - Singapore & 8 - Courage",
    location: "Building 1",
    floor: "2nd Floor",
  },
  {
    name: "Jheny Mangalus Castillo",
    room: "7 - Singapore & 8 - Courage",
    location: "Building 1",
    floor: "2nd Floor",
  },
  {
    name: "Apple Salicsic Lopez",
    room: "7 - Singapore & 8 - Courage",
    location: "Building 1",
    floor: "2nd Floor",
  },
  {
    name: "Raycel Dolor Magat",
    room: "7 - Singapore & 8 - Courage",
    location: "Building 1",
    floor: "2nd Floor",
  },

  {
    name: "Jessie Reyes San Juan",
    room: "7 - Brunei & 8 - Charity",
    location: "Building 1",
    floor: "2nd Floor",
  },
  {
    name: "Eron Renz Olmo Villanueva",
    room: "7 - Brunei & 8 - Charity",
    location: "Building 1",
    floor: "2nd Floor",
  },
  {
    name: "Aliyah Divine Bolina Estrada",
    room: "7 - Brunei & 8 - Charity",
    location: "Building 1",
    floor: "2nd Floor",
  },
  {
    name: "Aerrien Mae Espino Reyes",
    room: "7 - Brunei & 8 - Charity",
    location: "Building 1",
    floor: "2nd Floor",
  },
  {
    name: "Sabrina Faith De Guzman Sadie",
    room: "7 - Brunei & 8 - Charity",
    location: "Building 1",
    floor: "2nd Floor",
  },
  {
    name: "Jerick Balagtas Alonzo",
    room: "7 - Brunei & 8 - Charity",
    location: "Building 1",
    floor: "2nd Floor",
  },
  {
    name: "Jake Reyes Lacanilao",
    room: "7 - Brunei & 8 - Charity",
    location: "Building 1",
    floor: "2nd Floor",
  },
  {
    name: "Ariella Carpio Alvarez",
    room: "7 - Brunei & 8 - Charity",
    location: "Building 1",
    floor: "2nd Floor",
  },
  {
    name: "Flor Arceo Cunanan",
    room: "7 - Brunei & 8 - Charity",
    location: "Building 1",
    floor: "2nd Floor",
  },
  {
    name: "Sam Punzalan Pragacha",
    room: "7 - Brunei & 8 - Charity",
    location: "Building 1",
    floor: "2nd Floor",
  },

  {
    name: "ADRIANO, ANDREI HARRISON COLLADO",
    room: "7 - Indonesia & 8 - Love",
    location: "Building 1",
    floor: "2nd Floor",
  },
  {
    name: "BAIRAN, JHAZZREIN KHIEL RUBIANO",
    room: "7 - Indonesia & 8 - Love",
    location: "Building 1",
    floor: "2nd Floor",
  },
  {
    name: "BAUTISTA, DRENZ GEONZEB GAMBOA",
    room: "7 - Indonesia & 8 - Love",
    location: "Building 1",
    floor: "2nd Floor",
  },
  {
    name: "BANTASAN, KIMBERLY ANNE GUILLERMO",
    room: "7 - Indonesia & 8 - Love",
    location: "Building 1",
    floor: "2nd Floor",
  },
  {
    name: "BOLLUSA, MARIZ MAE PALMA",
    room: "7 - Indonesia & 8 - Love",
    location: "Building 1",
    floor: "2nd Floor",
  },
  {
    name: "Johnny Caleon De Leon",
    room: "7 - Indonesia & 8 - Love",
    location: "Building 1",
    floor: "2nd Floor",
  },
  {
    name: "Justine Guardian Santos",
    room: "7 - Indonesia & 8 - Love",
    location: "Building 1",
    floor: "2nd Floor",
  },
  {
    name: "Rhian Jimenez Calma",
    room: "7 - Indonesia & 8 - Love",
    location: "Building 1",
    floor: "2nd Floor",
  },
  {
    name: "Andrea Blas Jimenez",
    room: "7 - Indonesia & 8 - Love",
    location: "Building 1",
    floor: "2nd Floor",
  },
  {
    name: "Shine Cunanan Padilla",
    room: "7 - Indonesia & 8 - Love",
    location: "Building 1",
    floor: "2nd Floor",
  },
];
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
