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
    description: "Building 1 classrooms for Grades 7 to 10",
    directions: [
      "Enter through the main gate",
      "Access via the main walkway",
      "Walk straight for 48 meters",
      "You are now at Building 1",
    ],
    onSelect: function () {
      const fromSelect = document.getElementById("fromSelect");
      const from = fromSelect ? fromSelect.value : "";

      // Hide all existing arrows first
      document.querySelectorAll('[id^="From-"]').forEach((arrow) => {
        arrow.style.display = "none";
      });

      // Only show arrows if a valid starting point is selected
      if (from === "main_gate") {
        document.querySelectorAll("#From-Gate-ToB1").forEach((arrow) => {
          arrow.style.display = "";
        });
      } else if (from === "canteen") {
        document.querySelectorAll("#From-Canteen-ToB1").forEach((arrow) => {
          arrow.style.display = "";
        });
      }
      const buildingShape = document.querySelector('[data-title="Building 1"]');
      if (buildingShape) buildingShape.classList.add("selected");
    },
  },
  "Building 2": {
    type: "building",
    description:
      "Building 2 classrooms for Grades 7 to 10 and JHJ COMPUTER LAB",
    directions: [
      "Enter through the main gate",
      "Access via the main walkway",
      "Walk straight for 48 meters",
      "Turn left and walk straight for 30 meters",
      "Building 2 is on your right",
    ],
    onSelect: function () {
      const fromSelect = document.getElementById("fromSelect");
      const from = fromSelect ? fromSelect.value : "";

      // Hide all existing arrows first
      document.querySelectorAll('[id^="From-"]').forEach((arrow) => {
        arrow.style.display = "none";
      });

      // Only show arrows if a valid starting point is selected
      if (from === "main_gate") {
        document.querySelectorAll("#From-Gate-ToB2").forEach((arrow) => {
          arrow.style.display = "";
        });
      } else if (from === "canteen") {
        document.querySelectorAll("#From-Canteen-ToB2").forEach((arrow) => {
          arrow.style.display = "";
        });
      }
      // Also select the building shape
      const buildingShape = document.querySelector('[data-title="Building 2"]');
      if (buildingShape) buildingShape.classList.add("selected");
    },
  },
  "Building 3": {
    type: "building",
    description:
      "Building 3 classrooms for Grades 11 to 12 and Registrar Office, Administrative Office, Principal's Office, SBM Office",
    directions: [
      "Enter through the main gate",
      "Access via the main walkway",
      "Walk straight for 48 meters",
      "Turn left and walk straight for 68 meters",
      "Building 3 is on your right",
    ],
    onSelect: function () {
      const fromSelect = document.getElementById("fromSelect");
      const from = fromSelect ? fromSelect.value : "";

      // Hide all existing arrows first
      document.querySelectorAll('[id^="From-"]').forEach((arrow) => {
        arrow.style.display = "none";
      });

      // Only show arrows if a valid starting point is selected
      if (from === "main_gate") {
        document.querySelectorAll("#From-Gate-ToB3").forEach((arrow) => {
          arrow.style.display = "";
        });
      } else if (from === "canteen") {
        document.querySelectorAll("#From-Canteen-ToB3").forEach((arrow) => {
          arrow.style.display = "";
        });
      }
      // Also select the building shape
      const buildingShape = document.querySelector('[data-title="Building 3"]');
      if (buildingShape) buildingShape.classList.add("selected");
    },
  },
  "Building 4": {
    type: "building",
    description:
      "Building 4 classrooms for Grades 11 to 12 and SHS COMPUTER LAB",
    directions: [
      "Enter through the main gate",
      "Access via the main walkway",
      "Walk straight for 48 meters",
      "Turn left and walk straight for 100 meters",
      "Building 4 is on your right",
      "The building 4 is beside building 3",
    ],
    onSelect: function () {
      const fromSelect = document.getElementById("fromSelect");
      const from = fromSelect ? fromSelect.value : "";

      // Hide all existing arrows first
      document.querySelectorAll('[id^="From-"]').forEach((arrow) => {
        arrow.style.display = "none";
      });

      // Only show arrows if a valid starting point is selected
      if (from === "main_gate") {
        document.querySelectorAll("#From-Gate-ToB4").forEach((arrow) => {
          arrow.style.display = "";
        });
      } else if (from === "canteen") {
        document.querySelectorAll("#From-Canteen-ToB4").forEach((arrow) => {
          arrow.style.display = "";
        });
      }
      // Also select the building shape
      const buildingShape = document.querySelector('[data-title="Building 4"]');
      if (buildingShape) buildingShape.classList.add("selected");
    },
  },
  "Building 5": {
    type: "building",
    description: "Building 5 classrooms for Grades 11 to 12",
    directions: [
      "Enter through the main gate",
      "Turn left and walk straight for 92 meters",
      "Then when you reach building 6, turn right",
      "walk straight for 5 meters",
      "The building 5 is now on your left",
    ],
    onSelect: function () {
      const fromSelect = document.getElementById("fromSelect");
      const from = fromSelect ? fromSelect.value : "";

      // Hide all existing arrows first
      document.querySelectorAll('[id^="From-"]').forEach((arrow) => {
        arrow.style.display = "none";
      });

      // Only show arrows if a valid starting point is selected
      if (from === "main_gate") {
        document.querySelectorAll("#From-Gate-ToB5").forEach((arrow) => {
          arrow.style.display = "";
        });
      } else if (from === "canteen") {
        document.querySelectorAll("#From-Canteen-ToB5").forEach((arrow) => {
          arrow.style.display = "";
        });
      }

      // Also select the building shape
      const buildingShape = document.querySelector('[data-title="Building 5"]');
      if (buildingShape) buildingShape.classList.add("selected");
    },
  },
  "Building 6": {
    type: "building",
    description: "Building 6 classrooms for Grades  12",
    directions: [
      "Enter through the main gate",
      "Turn left and walk straight for 92 meters",
      "You are now at building 6",
    ],
    onSelect: function () {
      const fromSelect = document.getElementById("fromSelect");
      const from = fromSelect ? fromSelect.value : "";

      // Hide all existing arrows first
      document.querySelectorAll('[id^="From-"]').forEach((arrow) => {
        arrow.style.display = "none";
      });

      // Only show arrows if a valid starting point is selected
      if (from === "main_gate") {
        document.querySelectorAll("#From-Gate-ToB6").forEach((arrow) => {
          arrow.style.display = "";
        });
      } else if (from === "canteen") {
        document.querySelectorAll("#From-Canteen-ToB6").forEach((arrow) => {
          arrow.style.display = "";
        });
      }
      // Also select the building shape
      const buildingShape = document.querySelector('[data-title="Building 6"]');
      if (buildingShape) buildingShape.classList.add("selected");
    },
  },
  "Morison and Accountability": {
    type: "Room",
    description: "Room 1 is classrooms for Morison and Accountability",
    directions: [
      "Enter through the main gate",
      "Turn left and walk straight for 92 meters",
      "You are now at Room 1 is classrooms for Morison and Accountability",
    ],
    onSelect: function () {
      const fromSelect = document.getElementById("fromSelect");
      const from = fromSelect ? fromSelect.value : "";

      // Hide all existing arrows first
      document.querySelectorAll('[id^="From-"]').forEach((arrow) => {
        arrow.style.display = "none";
      });

      // Only show arrows if a valid starting point is selected
      if (from === "main_gate") {
        document.querySelectorAll("#From-Gate-ToR1").forEach((arrow) => {
          arrow.style.display = "";
        });
      } else if (from === "canteen") {
        document.querySelectorAll("#From-Canteen-ToR1").forEach((arrow) => {
          arrow.style.display = "";
        });
      }
      // Also select the building shape
      const buildingShape = document.querySelector(
        '[data-title="Morison and Accountability"]'
      );
      if (buildingShape) buildingShape.classList.add("selected");
    },
  },
  "Book Storage": {
    type: "Room",
    description: "Room 2 is Book Storage",
    directions: [
      "Enter through the main gate",
      "Turn left and walk straight for 92 meters",
      "You are now at Room 2 is Book Storage",
    ],
    onSelect: function () {
      const fromSelect = document.getElementById("fromSelect");
      const from = fromSelect ? fromSelect.value : "";

      // Hide all existing arrows first
      document.querySelectorAll('[id^="From-"]').forEach((arrow) => {
        arrow.style.display = "none";
      });

      // Only show arrows if a valid starting point is selected
      if (from === "main_gate") {
        document.querySelectorAll("#From-Gate-ToR2").forEach((arrow) => {
          arrow.style.display = "";
        });
      } else if (from === "canteen") {
        document.querySelectorAll("#From-Canteen-ToR2").forEach((arrow) => {
          arrow.style.display = "";
        });
      }
      // Also select the building shape
      const buildingShape = document.querySelector(
        '[data-title="Book Storage"]'
      );
      if (buildingShape) buildingShape.classList.add("selected");
    },
  },
  "Book Storage2": {
    type: "Room",
    description: "Room 3 is Book Storage",
    directions: [
      "Enter through the main gate",
      "Turn left and walk straight for 92 meters",
      "You are now at Room 3 is Book Storage",
    ],
    onSelect: function () {
      const fromSelect = document.getElementById("fromSelect");
      const from = fromSelect ? fromSelect.value : "";

      // Hide all existing arrows first
      document.querySelectorAll('[id^="From-"]').forEach((arrow) => {
        arrow.style.display = "none";
      });

      // Only show arrows if a valid starting point is selected
      if (from === "main_gate") {
        document.querySelectorAll("#From-Gate-ToR3").forEach((arrow) => {
          arrow.style.display = "";
        });
      } else if (from === "canteen") {
        document.querySelectorAll("#From-Canteen-ToR3").forEach((arrow) => {
          arrow.style.display = "";
        });
      }
      // Also select the building shape
      const buildingShape = document.querySelector(
        '[data-title="Book Storage2"]'
      );
      if (buildingShape) buildingShape.classList.add("selected");
    },
  },
  "Twain and Improvement": {
    type: "Room",
    description: "Room 5 is Twain and Improvement",
    directions: [
      "Enter through the main gate",
      "Turn left and walk straight for 92 meters",
      "You are now at Room 5 is Twain and Improvement",
    ],
    onSelect: function () {
      const fromSelect = document.getElementById("fromSelect");
      const from = fromSelect ? fromSelect.value : "";

      // Hide all existing arrows first
      document.querySelectorAll('[id^="From-"]').forEach((arrow) => {
        arrow.style.display = "none";
      });

      // Only show arrows if a valid starting point is selected
      if (from === "main_gate") {
        document.querySelectorAll("#From-Gate-ToR5").forEach((arrow) => {
          arrow.style.display = "";
        });
      } else if (from === "canteen") {
        document.querySelectorAll("#From-Canteen-ToR5").forEach((arrow) => {
          arrow.style.display = "";
        });
      }
      // Also select the building shape
      const buildingShape = document.querySelector(
        '[data-title="Twain and Improvement"]'
      );
      if (buildingShape) buildingShape.classList.add("selected");
    },
  },
  "Whitman and Integrity": {
    type: "Room",
    description: "Room 6 is Whitman and Integrity",
    directions: [
      "Enter through the main gate",
      "Turn left and walk straight for 92 meters",
      "You are now at Room 6 is Whitman and Integrity",
    ],
    onSelect: function () {
      const fromSelect = document.getElementById("fromSelect");
      const from = fromSelect ? fromSelect.value : "";

      // Hide all existing arrows first
      document.querySelectorAll('[id^="From-"]').forEach((arrow) => {
        arrow.style.display = "none";
      });

      // Only show arrows if a valid starting point is selected
      if (from === "main_gate") {
        document.querySelectorAll("#From-Gate-ToR6").forEach((arrow) => {
          arrow.style.display = "";
        });
      } else if (from === "canteen") {
        document.querySelectorAll("#From-Canteen-ToR6").forEach((arrow) => {
          arrow.style.display = "";
        });
      }
      // Also select the building shape
      const buildingShape = document.querySelector(
        '[data-title="Whitman and Integrity"]'
      );
      if (buildingShape) buildingShape.classList.add("selected");
    },
  },
  "Kilmer and Equity": {
    type: "Room",
    description: "Room 7 is Kilmer and Equity",
    directions: [
      "Enter through the main gate",
      "Turn left and walk straight for 92 meters",
      "You are now at Room 7 is Kilmer and Equity",
    ],
    onSelect: function () {
      const fromSelect = document.getElementById("fromSelect");
      const from = fromSelect ? fromSelect.value : "";

      // Hide all existing arrows first
      document.querySelectorAll('[id^="From-"]').forEach((arrow) => {
        arrow.style.display = "none";
      });

      // Only show arrows if a valid starting point is selected
      if (from === "main_gate") {
        document.querySelectorAll("#From-Gate-ToR7").forEach((arrow) => {
          arrow.style.display = "";
        });
      } else if (from === "canteen") {
        document.querySelectorAll("#From-Canteen-ToR7").forEach((arrow) => {
          arrow.style.display = "";
        });
      }
      // Also select the building shape
      const buildingShape = document.querySelector(
        '[data-title="Kilmer and Equity"]'
      );
      if (buildingShape) buildingShape.classList.add("selected");
    },
  },
  "BSP Quarters": {
    type: "Room",
    description: "Room 8 is BSP Quarters",
    directions: [
      "Enter through the main gate",
      "Turn left and walk straight for 92 meters",
      "You are now at Room 8 is BSP Quarters",
    ],
    onSelect: function () {
      const fromSelect = document.getElementById("fromSelect");
      const from = fromSelect ? fromSelect.value : "";

      // Hide all existing arrows first
      document.querySelectorAll('[id^="From-"]').forEach((arrow) => {
        arrow.style.display = "none";
      });

      // Only show arrows if a valid starting point is selected
      if (from === "main_gate") {
        document.querySelectorAll("#From-Gate-ToR8").forEach((arrow) => {
          arrow.style.display = "";
        });
      } else if (from === "canteen") {
        document.querySelectorAll("#From-Canteen-ToR8").forEach((arrow) => {
          arrow.style.display = "";
        });
      }
      // Also select the building shape
      const buildingShape = document.querySelector(
        '[data-title="BSP Quarters"]'
      );
      if (buildingShape) buildingShape.classList.add("selected");
    },
  },
  "Hope and Hemingway": {
    type: "Room",
    description: "Room 9 is Hope and Hemingway",
    directions: [
      "Enter through the main gate",
      "Turn left and walk straight for 92 meters",
      "You are now at Room 9 is Hope and Hemingway",
    ],
    onSelect: function () {
      const fromSelect = document.getElementById("fromSelect");
      const from = fromSelect ? fromSelect.value : "";

      // Hide all existing arrows first
      document.querySelectorAll('[id^="From-"]').forEach((arrow) => {
        arrow.style.display = "none";
      });

      // Only show arrows if a valid starting point is selected
      if (from === "main_gate") {
        document.querySelectorAll("#From-Gate-ToR9").forEach((arrow) => {
          arrow.style.display = "";
        });
      } else if (from === "canteen") {
        document.querySelectorAll("#From-Canteen-ToR9").forEach((arrow) => {
          arrow.style.display = "";
        });
      }
      // Also select the building shape
      const buildingShape = document.querySelector(
        '[data-title="Hope and Hemingway"]'
      );
      if (buildingShape) buildingShape.classList.add("selected");
    },
  },
  "Extra Room": {
    type: "Room",
    description: "",
    directions: [""],
    onSelect: function () {
      const fromSelect = document.getElementById("fromSelect");
      const from = fromSelect ? fromSelect.value : "";

      // Hide all existing arrows first
      document.querySelectorAll('[id^="From-"]').forEach((arrow) => {
        arrow.style.display = "none";
      });

      // Only show arrows if a valid starting point is selected
      if (from === "main_gate") {
        document.querySelectorAll("#").forEach((arrow) => {
          arrow.style.display = "";
        });
      } else if (from === "canteen") {
        document.querySelectorAll("#").forEach((arrow) => {
          arrow.style.display = "";
        });
      }
      // Also select the building shape
      const buildingShape = document.querySelector('[data-title=""]');
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
  {
    room: "7 - Philippines & 10 - Quality",
    location: "Building 2",
    floor: "1st Floor",
    students: [
      "Acuña, Megan Dela Mines",
      "Aquino, Dylan",
      "Aquino, Cloreed Puno",
      "Baltazar, Warren De Guzman",
      "Briones, Althea Nicole Tolentino",
      "ARAGON, JEROME BORJA",
      "MARIANO, PAOLO BATOON",
      "BASQUINAS, ROGIE DE LEON",
      "MARIANO, RAYMART DELA CRUZ",
      "BAUTISTA, PRINCE KERVY CASTILLO",
    ],
  },
  {
    room: "9 - Shakespear & 8 - Chastity",
    location: "Building 2",
    floor: "1st Floor",
    students: [
      "AGUILA, JHON MEL. A",
      "AGUILTO, JACK NOEL G.",
      "AMANTE, JONALYN L.",
      "BININI, KRIZETH FLORIE D.C",
      "CASTRO, RHONA CRISELLE M.",
      "Jerwin Soliman Cervantes",
      "Gerald Mortalla Culala",
      "Yesha Quiambao Camacho",
      "Reynalyn Lucas Yambao",
      "Jessa Yambao Sibug",
    ],
  },
  {
    room: "7 - Vietnam & 8 - Justice",
    location: "Building 2",
    floor: "2nd Floor",
    students: [
      "ABLAZA, PRINCESS EIFFER DIZON",
      "ALVAREZ, JOSELITO TOLENTINO JR.",
      "AGUINALDO, ANGIE BUTIAL",
      "BALUYOT, JAMES JAYSTER GALVAN",
      "BUCANI, MARICEL HERNANDEZ",
      "Kent Cabudol Estrada",
      "Aldrin Dela Paz Talao",
      "Elizabeth Talao Alfonso",
      "Aleli Chico Manabat",
      "Jessie Mempin Salas",
    ],
  },
  {
    room: "9 - Orwell & 10 - Responsibility",
    location: "Building 2",
    floor: "2nd Floor",
    students: [
      "BALAJADIA, JULLIANA SALVADOR",
      "MATURINGAN, MAXENNE PADILLA",
      "BUENAVENTURA, NICOLE VITONIO",
      "MUSNGI, CRISTINE ANDREA MICLAT",
      "BUENAVENTURA, PRECIOUS ANGEL SUI",
      "PARUNGAO, JANICE ALFARO",
      "CAVAN, RHOJET C.",
      "DE LEON, JUSTIN B.",
      "BARBOZA, JERICEL R.",
      "BARRIENTES, REALYNNE",
      "HIPOLITO, MYCA",
    ],
  },
  {
    room: "9 - Frost & 10 - Resiliency",
    location: "Building 2",
    floor: "3rd Floor",
    students: [
      "ADARME, RAINIEL IMAS",
      "ASI, CRISTIAN JAY LALU",
      "CORNES, JANELLE DELA CRUZ",
      "DELA PEÑA, LHIAN EUNICE VELADO",
      "MANALASTAS, ERICH LAPUZ",
      "ABUZO, ALEXIS NAZAL",
      "ABOCADO, CHARMELA FAYE CHICO",
      "ANDRES, JUSTIN ARIEL",
      "ALFARO, KYLIE VENICE DELA CRUZ",
      "BASA, XENA FRANCHESSCA MANARANG",
    ],
  },
  {
    room: "9 - Rowling & 10 - Responsiveness",
    location: "Building 2",
    floor: "3rd Floor",
    students: [
      "AMOR, JOHN REINNALD M.",
      "CALEON, RANDY S.",
      "BANTASAN, KARYL UNICE G.",
      "BAUTISTA, MICA MAE G.",
      "BERBA, LIE NIKKI",
      "ALOLOR, CEDRICK PARINA",
      "BULOS, ASHLEY JUDEL",
      "DELA CRUZ, JILLIANE HIPOLITO",
      "CARANZA, LEMUEL LAGMAN",
      "ESPINOCILLA, RAIN LONTOC",
    ],
  },
  {
    room: "9 - Andersen & 10 - Productivity",
    location: "Building 2",
    floor: "4th Floor",
    students: [
      "CARANGIAN, NATHANIEL SANTOS",
      "ALFARO, MA. ANDREA FAYE GATBONTON",
      "GONZALES, MARQUISE COLE JULIANO",
      "BAUTISTA, KHACY MAE MENDOZA",
      "BAUTISTA, MA MIKAELA BLAS",
      "BAYLON, ARVIE D.",
      "BURAYOG, KHATE JOHN P.",
      "ANDRES, SHANTAL B.",
      "DE GUZMAN, STEPHANIE E.",
      "INOCENCIO, PRINSSES LJ M.",
    ],
  },
  {
    room: "JHJ COMPUTER LAB - (COMPUTER LAB)",
    location: "Building 2",
    floor: "4th Floor",
    students: ["JHJ COMPUTER LAB - (COMPUTER LAB)"],
  },
  {
    room: "1st Room - Registrar Office",
    location: "Building 3",
    floor: "1st Floor",
    students: ["Registrar Office"],
  },
  {
    room: "2nd Room - Administrative Office",
    location: "Building 3",
    floor: "1st Floor",
    students: ["Administrative Office"],
  },
  {
    room: "3rd Room - Principal's Office",
    location: "Building 3",
    floor: "1st Floor",
    students: ["Principal's Office"],
  },
  {
    room: "4th Room - SBM Office",
    location: "Building 3",
    floor: "1st Floor",
    students: ["SBM Office"],
  },
  {
    room: "1st Room - 11 - Microsoft",
    location: "Building 3",
    floor: "2nd Floor",
    students: [
      "Bulos, Mark Andrei Mabato",
      "Dela Peña, Tyron De Jesus",
      "Bato, Neian Vetanie Peña",
      "Bautista, Jennelyn Santos",
      "Cagungun, Jaschie Mae Sagum",
    ],
  },
  {
    room: "2nd Room - 11 - Internet",
    location: "Building 3",
    floor: "2nd Floor",
    students: [
      "Bulos, Mark Andrei Mabato",
      "Dela Peña, Tyron De Jesus",
      "Bato, Neian Vetanie Peña",
      "Bautista, Jennelyn Santos",
      "Cagungun, Jaschie Mae Sagum",
    ],
  },
  {
    room: "1st Room - 12 - Literacy & 11 - Processor",
    location: "Building 3",
    floor: "3rd Floor",
    students: [
      "Bulanadi, Menard Villorente",
      "Lagado, Kevin Leonardo",
      "Mangulabnan, Jane Cristal Sagum",
      "Tolentino, Maybeline Dela Peña",
      "Baylon, Airah Doctor",
      "Canasa, John Carlo Lorenzo",
      "Cao, Jhun Rey Anduyan",
      "Antonio, Jade Sophia Liwanag",
      "Araojo, Rhian Jacquez",
      "Azid, Ashley Santos",
    ],
  },
  {
    room: "1st Room - 12 - Technology & 12 - Innovation",
    location: "Building 3",
    floor: "4th Floor",
    students: [
      "Quiambao, Criskiella Guibao",
      "Punsalan, Melamie Carlos",
      "Lozano, Jamielyn Reyes",
      "Tecson, Drikz Panoy",
      "Atonio, John Michael Bautista",
      "Evangelista, Mariel Cano",
      "Cupino, Verlene Faith De Jesus",
      "Sagum, Kyle Cinderelle Mallari",
      "Soliman, Julia De Guzman",
      "Villafuerte, Princess Anne Sagum",
    ],
  },
  {
    room: "1st Room - 12 - Initiative",
    location: "Building 4",
    floor: "1st Floor",
    students: [
      "De vera, Dennis Bacurin",
      "Jimenez, Aldrin Blas",
      "Calma, Heart Bairan",
      "Indon, Diane Maun",
      "Lacap, Nicole Perez",
    ],
  },
  {
    room: "2nd Room - 12 - Creativity",
    location: "Building 4",
    floor: "1st Floor",
    students: [
      "Sison, Rain Ramos",
      "Torres, Renan Bayles",
      "Luctu, Phoemela Sulit",
      "Sibug, Janice Yambao",
      "Mendoza, Kimberly Cruz",
    ],
  },
  {
    room: "1st Room - 11 - Digital",
    location: "Building 4",
    floor: "2nd Floor",
    students: [
      "Celso, Cedrick Victoria",
      "Cruz, Lian Jacob Hugnatan",
      "Dayrit, Princess Carlyn",
      "Quiambao, Lalaine Sagcal",
      "Tolentino, Roline De Guzman",
    ],
  },
  {
    room: "2nd Room - SHS COMPUTER LAB",
    location: "Building 4",
    floor: "2nd Floor",
    students: ["SHS COMPUTER LAB - (COMPUTER LAB)"],
  },
  {
    room: "1st Room - 11 - Phyton",
    location: "Building 5",
    floor: "1st Floor",
    students: [
      "Canasa, Aldrin Aquino",
      "Dela Mines, Jeffrey Culala",
      "Baltazar, Gerald Oliveros",
      "Dita, Kristan Corpin",
      "Vales, Justine Borja",
    ],
  },
  {
    room: "2nd Room - 11 - Database",
    location: "Building 5",
    floor: "1st Floor",
    students: [
      "Benaning, Rey John",
      "Buenaventura, Mark James Monterde",
      "Bantasan, Kriselle Yaj Santos",
      "Belen, Princess Anneth Miranda",
      "Cao, Amanda Sophia Camuyag",
    ],
  },
  {
    room: "1st Room - 12 - Adaptability",
    location: "Building 5",
    floor: "2nd Floor",
    students: [
      "Clemente, Kimberly Cebu",
      "Clemente, Kristal Cebu",
      "Sagum, Eden Chico",
      "De Leon, Julian Atento",
      "Sanguyo, Gian Gumabon",
    ],
  },
  {
    room: "2nd Room - 11 - Software",
    location: "Building 5",
    floor: "2nd Floor",
    students: [
      "Alvaran, John Carlo M.",
      "Alvarez, John Louie Dullas",
      "Acosta, Kylishene Aquino",
      "Aquino, Cloue Ann Puno",
      "Bagsic, Rachel Joy Butial",
    ],
  },
  {
    room: "1st Room - 11 - Analytics",
    location: "Building 5",
    floor: "3rd Floor",
    students: [
      "Adarme, Ronnie De Jesus Jr.",
      "Agulto, Angelito Santos Jr.",
      "Aguilar, Angel Grace Pangan",
      "Aguinaldo, Bianca Mariz Soliman",
      "Aquino, Mikaela Joyce Mariano",
    ],
  },
  {
    room: "2nd Room - 12 - Proficient",
    location: "Building 5",
    floor: "3rd Floor",
    students: [
      "Dela Peña, Arian Puloños",
      "Arnejo, Jessa Miranda",
      "Aurelio, Rovinell Quiambao",
      "Canoza, Vincent Eladia",
      "Lalu, Ceremie Tolentino",
    ],
  },
  {
    room: "1st Room - 12 - Communication",
    location: "Building 5",
    floor: "4th Floor",
    students: [
      "Navarro, Jerome Silva",
      "Vergara, Precious Janelle Sagum",
      "Dela Peña, Jeff Martin",
      "Dela Peña, Charisse De Guzman",
      "Sagum, Nicole De Leon",
    ],
  },
  {
    room: "1st Room - 12 - Flexibility",
    location: "Building 6",
    floor: "1st Floor",
    students: [
      "Amor, Marcy Analo",
      "Baco, Aaron Bejerano",
      "Barzo, Jeffrey Sanguyo",
      "Bulaon, Jhon Zyrelle Benedicto",
      "Canasa, Mike Francis Dajac",
    ],
  },
  {
    room: "2nd Room - 12 - Leadership",
    location: "Building 6",
    floor: "1st Floor",
    students: [
      "David, Annex Estrella",
      "Hipolito, Vien Tambamo",
      "Aragon, Jaymar Borja",
      "David, Jared Aaron Semacio",
      "De Guzman, Angelo Dela Cruz",
    ],
  },
  {
    room: "1st Room - 12 - Collaboration",
    location: "Building 6",
    floor: "2nd Floor",
    students: [
      "Mangulabnan, Aj Dulay",
      "Santos, Andrei Guardian",
      "Cornes, Althea Suarez",
      "Arapan, Jasmin Calma",
      "Quinto, Lorraine Santos",
    ],
  },
  {
    room: "9 - Morrison & 10 - Accountability",
    location: "Room 1",
    floor: "1st Floor",
    students: [
      "CASTILLO, ANTHONY P.",
      "DOMINGO, JOKO F.",
      "AGUINALDO, MARIEL M.",
      "CARPIO, QUENNIE A.",
      "DAVID, SOFIA V.",
      "ASUNCION, EDEL JON TORRES.",
      "CANIMO, JANA MAE, CALEON.",
      "CORRAL, LORD RAYZEN, DELA CRUZ.",
      "LALO, TRISHA MAE, SANGUYO.",
      "MANGULABNAN, MARY ROSE PUNO.",
    ],
  },
  {
    room: "9 - Twain & 10 - Improvement",
    location: "Room 5",
    floor: "1st Floor",
    students: [
      "BACO, VHAL BEJERANO",
      "BAYONGAN, JOHN MAR",
      "CANTIGA, JILLIAN JHARICH",
      "MANARANG, ROSEMARIE",
      "PUNZALAN, JASMINE",
      "CAMUYAG, CEDRICK HERNANDEZ",
      "DAYRIT, BABYLYN SULIT",
      "CASTRO, MARK ELMO CARANTO",
      "GACHO, CHARLYN RAE, DEL ROSARIO",
      "JAVIER, CHARLEEN MAE, GUANZON",
    ],
  },
  {
    room: "9 - Whitman & 10 - Integrity",
    location: "Room 6",
    floor: "1st Floor",
    students: [
      "AQUINO, STEVEN F.",
      "BANAAG, REYMARK R.",
      "AGUINALDO, SHANE MARIAN",
      "AMARO, ERRAH R.",
      "BAGSIC, SHANE CHANEL B.",
      "AGUINALDO, JIYANNE BUTIAL",
      "AGUINALDO, NICOLE BUTIAL",
      "HERNANDEZ, JENNA MAY RONQUILLO",
      "ALOBA, MELISSA MARIE LAGMAN",
      "IGNACIO, JAYLINE ROXAS",
    ],
  },
  {
    room: "9 - Kilmer & 10 - Equity",
    location: "Room 7",
    floor: "1st Floor",
    students: [
      "ANDAN, MARK JACOB",
      "BALAJADIA, MC GAVIN",
      "AGAS, APPLE",
      "BAUTISTA, CRISTINE M.",
      "BOLLUSA, MIA MARIEL P.",
      "ABLAZA, JOSH LORDRAIN MAGAT",
      "GUILLERMO, MICCO CASIN",
      "AGUILAR, DAN JARED DELA PEÑA",
      "AGUINALDO, ARCHIE ALICO",
      "IBASCO, ANDREW BULANADI",
    ],
  },
  {
    room: "BSP Quarters",
    location: "Room 8",
    floor: "1st Floor",
    students: ["BSP Quarters"],
  },
  {
    room: "8 - Hope & 10 - Hemingway",
    location: "Room 9",
    floor: "1st Floor",
    students: [
      "Joseph Pangan Balingit",
      "Kian Dela Cruz Frago",
      "Jocel Larin Amante",
      "Kate Caline Reyes Basa",
      "Railyn Rondina Cariño",
      "Alcantara, Earl Angelo S.",
      "David, Aedhan Ralf",
      "Ariston, Denzie Faye M.",
      "Castro, M. Jenica",
      "De Guzman, Amie Rose T.",
    ],
  },
  {
    room: "7 - Thailand & 8 - Faith",
    location: "Room 11",
    floor: "1st Floor",
    students: [
      "Aquino, Yhannel Escabas",
      "Aligora, Rhyzz Laureen Francisco",
      "Calma, Euri Sky Bulanadi",
      "Balagtas, Shanel De Guzman",
      "Baltazar, Julieianna Marie Cruz",
      "Cao, Ronald Alipaopao",
      "Lapuz, Jacob Mangulabnan",
      "Balidoy, Perly David",
      "Catalig, Erika Chico",
      "Simbillo, Nichole Magat",
    ],
  },
  {
    room: "7 - Malaysia & 8 - Honor",
    location: "Room 12",
    floor: "1st Floor",
    students: [
      "Bergado, James Carpio",
      "Aquino, Michaela",
      "Blas, Reniel Jassam Caones",
      "Balajadia, Alica Zamantha Simbulan",
      "Balajadia, Avygail Briz",
      "Cao, CJ Tolentino",
      "Chico, Shered Sagum",
      "Butial, Erich Pareña",
      "Larin, Kannery Carpio",
      "Musni, Chelssie Cruz",
    ],
  },
  {
    room: "11 - System",
    location: "Room 13",
    floor: "1st Floor",
    students: [
      "Cao, John David Mananghaya",
      "Carpio, Arwin Benedict Aguinaldo",
      "Acuña, Samantha Nicole Morna",
      "Areglado, Audrey Jamaica Gatbonton",
      "Bermundo, Charlote Canazares",
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

// Select all elements with class "arrow"
const arrows = document.querySelectorAll('.arrow, [class*="arrow-"]');

arrows.forEach((arrow) => {
  arrow.parentNode.appendChild(arrow); // Bring each to front
});

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
