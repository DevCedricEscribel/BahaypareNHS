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
    onSelect: function () {
      const fromSelect = document.getElementById("fromSelect");
      const from = fromSelect ? fromSelect.value : "";

      // Hide all existing arrows first
      document.querySelectorAll('[id^="From-"]').forEach((arrow) => {
        arrow.style.display = "none";
      });

      // Only show arrows if a valid starting point is selected
      if (from === "main_gate") {
        document.querySelectorAll("#From-Gate-ToJHSCourt").forEach((arrow) => {
          arrow.style.display = "";
        });
      } else if (from === "canteen") {
        document
          .querySelectorAll("#From-Canteen-ToJHSCourt")
          .forEach((arrow) => {
            arrow.style.display = "";
          });
      }
      const buildingShape = document.querySelector('[data-title="JHS Court"]');
      if (buildingShape) buildingShape.classList.add("selected");
    },
  },
  "SHS Court": {
    type: "court",
    description: "Senior High School basketball court and sports facility",
    directions: [
      "Located in the western area",
      "Access through the sports complex entrance",
      "Equipment available at the office",
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
        document.querySelectorAll("#From-Gate-ToSHSCourt").forEach((arrow) => {
          arrow.style.display = "";
        });
      } else if (from === "canteen") {
        document
          .querySelectorAll("#From-Canteen-ToSHSCourt")
          .forEach((arrow) => {
            arrow.style.display = "";
          });
      }
      const buildingShape = document.querySelector('[data-title="SHS Court"]');
      if (buildingShape) buildingShape.classList.add("selected");
    },
  },
  "Main Office": {
    type: "office",
    description: "Administrative office for student services and information",
    directions: [
      "Enter through the main entrance",
      "Located on the ground floor",
      "Office hours: 8:00 AM - 5:00 PM",
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
        document.querySelectorAll("#From-Gate-To").forEach((arrow) => {
          arrow.style.display = "";
        });
      } else if (from === "canteen") {
        document.querySelectorAll("#From-Canteen-").forEach((arrow) => {
          arrow.style.display = "";
        });
      }
      const buildingShape = document.querySelector(
        '[data-title="Main Office"]',
      );
      if (buildingShape) buildingShape.classList.add("selected");
    },
  },
  Library: {
    type: "building",
    description: "School library with study areas and resources",
    directions: [
      "Enter through the academic building",
      "Second floor, room 201",
      "Quiet study areas available",
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
        document.querySelectorAll("#From-Gate-To").forEach((arrow) => {
          arrow.style.display = "";
        });
      } else if (from === "canteen") {
        document.querySelectorAll("#From-Canteen-").forEach((arrow) => {
          arrow.style.display = "";
        });
      }
      const buildingShape = document.querySelector('[data-title="Library"]');
      buildingShape.classList.add("selected");
    },
  },
  Fireexit: {
    type: "facility",
    description:
      "Emergency fire exit for safe evacuation. For evacuation purposes, check the map for the green spots indicating fire exits and follow the walkpath to reach the safe area.",
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
      document
        .querySelectorAll('[data-title="EvacuationArea"]')
        .forEach((el) => {
          el.classList.add("selected");
        });
      document.querySelectorAll('[data-title="Walkpath"]').forEach((el) => {
        el.classList.add("selected");
      });
    },
  },
  Clinic: {
    type: "facility",
    description: "School clinic for student health and medical needs",
    directions: [
      "Enter through the main gate",
      "Turn Left and pass through 3 rooms",
      "The clinic is on your Left",
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
        document.querySelectorAll("#From-Gate-Toclinic").forEach((arrow) => {
          arrow.style.display = "";
        });
      } else if (from === "canteen") {
        document.querySelectorAll("#From-Canteen-Toclinic").forEach((arrow) => {
          arrow.style.display = "";
        });
      }
      // Also select the building shape
      const buildingShape = document.querySelector('[data-title="Clinic"]');
      if (buildingShape) buildingShape.classList.add("selected");
    },
  },
  ADAS: {
    type: "facility",
    description: "ADAS Office",
    directions: [],
    onSelect: function () {
      const fromSelect = document.getElementById("fromSelect");
      const from = fromSelect ? fromSelect.value : "";

      // Hide all existing arrows first
      document.querySelectorAll('[id^="From-"]').forEach((arrow) => {
        arrow.style.display = "none";
      });

      // Only show arrows if a valid starting point is selected
      if (from === "main_gate") {
        document.querySelectorAll("#From-Gate-ToADAS").forEach((arrow) => {
          arrow.style.display = "";
        });
      } else if (from === "canteen") {
        document.querySelectorAll("#From-Canteen-ToADAS").forEach((arrow) => {
          arrow.style.display = "";
        });
      }
      // Also select the building shape
      const buildingShape = document.querySelector('[data-title="ADAS"]');
      if (buildingShape) buildingShape.classList.add("selected");
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
  "Building 8": {
    type: "building",
    description: "Building 8 classrooms for Grades 7 and 8",
    directions: [
      "Enter through the main gate",
      "Turn left and walk straight for 92 meters",
      "You are now at building 8",
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
        document.querySelectorAll("#From-Gate-ToB8").forEach((arrow) => {
          arrow.style.display = "";
        });
      } else if (from === "canteen") {
        document.querySelectorAll("#From-Canteen-ToB8").forEach((arrow) => {
          arrow.style.display = "";
        });
      }
      // Also select the building shape
      const buildingShape = document.querySelector('[data-title="Building 8"]');
      if (buildingShape) buildingShape.classList.add("selected");
    },
  },
  "Morrison and Accountability": {
    type: "Room",
    description: "classrooms for Morison and Accountability",
    directions: [
      "Enter through the main gate",
      "Turn left and walk straight for 92 meters",
      "You are now at Room Morison and Accountability",
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
        '[data-title="Morison and Accountability"]',
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
        '[data-title="Book Storage"]',
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
      "You are now at Room 3 is Book Storage ",
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
        '[data-title="Book Storage2"]',
      );
      if (buildingShape) buildingShape.classList.add("selected");
    },
  },
  "Twain and Improvement": {
    type: "Room",
    description: "Building 11 is Twain and Improvement",
    directions: [
      "Enter through the main gate",
      "Turn left and walk straight for 92 meters",
      "You are now at Building 11 is Twain and Improvement",
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
        document.querySelectorAll("#From-Gate-ToB11").forEach((arrow) => {
          arrow.style.display = "";
        });
      } else if (from === "canteen") {
        document.querySelectorAll("#From-Canteen-ToB11").forEach((arrow) => {
          arrow.style.display = "";
        });
      }
      // Also select the building shape
      const buildingShape = document.querySelector(
        '[data-title="Twain and Improvement"]',
      );
      if (buildingShape) buildingShape.classList.add("selected");
    },
  },
  "Whitman, System and Integrity": {
    type: "Room",
    description: "Building 9 is Whitman, System and Integrity",
    directions: [
      "Enter through the main gate",
      "Turn left and walk straight for 92 meters",
      "You are now at Building 9 Whitman, System and Integrity",
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
        document.querySelectorAll("#From-Gate-ToB9").forEach((arrow) => {
          arrow.style.display = "";
        });
      } else if (from === "canteen") {
        document.querySelectorAll("#From-Canteen-ToB9").forEach((arrow) => {
          arrow.style.display = "";
        });
      }
      // Also select the building shape
      const buildingShape = document.querySelector(
        '[data-title="Whitman, System and Integrity"]',
      );
      if (buildingShape) buildingShape.classList.add("selected");
    },
  },
  "Kilmer and Equity": {
    type: "Room",
    description: "Building 10 is Kilmer and Equity",
    directions: [
      "Enter through the main gate",
      "Turn left and walk straight for 92 meters",
      "You are now at Building 10 is Kilmer and Equity",
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
        document.querySelectorAll("#From-Gate-ToB10").forEach((arrow) => {
          arrow.style.display = "";
        });
      } else if (from === "canteen") {
        document.querySelectorAll("#From-Canteen-ToB10").forEach((arrow) => {
          arrow.style.display = "";
        });
      }
      // Also select the building shape
      const buildingShape = document.querySelector(
        '[data-title="Kilmer and Equity"]',
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
        '[data-title="BSP Quarters"]',
      );
      if (buildingShape) buildingShape.classList.add("selected");
    },
  },
  "Faith and Hemingway": {
    type: "Room",
    description: "Room Faith and Hemingway",
    directions: [
      "Enter through the main gate",
      "Turn left and walk straight for 92 meters",
      "You are now at Room Faith and Hemingway",
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
        '[data-title="Hope and Hemingway"]',
      );
      if (buildingShape) buildingShape.classList.add("selected");
    },
  },
  "JHS Faculty": {
    type: "Room",
    description: "JHS Faculty",
    directions: [
      "Enter through the main gate",
      "Turn left and walk straight for 92 meters",
      "You are now at JHS Faculty",
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
        document.querySelectorAll("#From-Gate-JHSFaculty").forEach((arrow) => {
          arrow.style.display = "";
        });
      } else if (from === "canteen") {
        document
          .querySelectorAll("#From-Canteen-JHSFaculty")
          .forEach((arrow) => {
            arrow.style.display = "";
          });
      }
      // Also select the building shape
      const buildingShape = document.querySelector(
        '[data-title="JHS Faculty"]',
      );
      if (buildingShape) buildingShape.classList.add("selected");
    },
  },
  "SHS Faculty": {
    type: "Room",
    description: "SHS Faculty",
    directions: [
      "Enter through the main gate",
      "Turn left and walk straight for 92 meters",
      "You are now at SHS Faculty",
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
        document.querySelectorAll("#From-Gate-SHSFaculty").forEach((arrow) => {
          arrow.style.display = "";
        });
      } else if (from === "canteen") {
        document
          .querySelectorAll("#From-Canteen-SHSFaculty")
          .forEach((arrow) => {
            arrow.style.display = "";
          });
      }
      // Also select the building shape
      const buildingShape = document.querySelector(
        '[data-title="SHS Faculty"]',
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
  Restroom: {
    type: "Room",
    description: "Restroom",
    directions: [],
    onSelect: function () {
      const fromSelect = document.getElementById("fromSelect");
      const from = fromSelect ? fromSelect.value : "";

      // Hide all existing arrows first
      document.querySelectorAll('[id^="From-"]').forEach((arrow) => {
        arrow.style.display = "none";
      });

      // Only show arrows if a valid starting point is selected
      if (from === "main_gate") {
        document.querySelectorAll("#From-Gate-Restroom").forEach((arrow) => {
          arrow.style.display = "";
        });
      } else if (from === "canteen") {
        document.querySelectorAll("#From-Canteen-Restroom").forEach((arrow) => {
          arrow.style.display = "";
        });
      }
      // Also select the building shape
      const buildingShape = document.querySelector('[data-title="Restroom"]');
      if (buildingShape) buildingShape.classList.add("selected");
    },
  },
  Canteen: {
    type: "facility",
    description: "Student dining hall and food service area",
    directions: [
      "Located in the central building",
      "Multiple entrances available",
      "Meal times: 11:30 AM - 1:30 PM",
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
        document.querySelectorAll("#From-Gate-ToCanteen").forEach((arrow) => {
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
    room: "SHS Faculty",
    location: "SHS Faculty",
    floor: "1st Floor",
    students: ["SHS Faculty"],
  },
  {
    room: "JHS Faculty",
    location: "JHS Faculty",
    floor: "1st Floor",
    students: ["JHS Faculty"],
  },
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
      "7 - Myanmar",
      "8 - Patience",
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
      "7 - Cambodia",
      "8 - Humility",
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
      "7 - Laos",
      "10 - Competence",
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
      "7 - Singapore",
      "8 - Courage",
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
      "7 - Brunei",
      "8 - Charity",
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
      "7 - Indonesia",
      "8 - Love",
    ],
  },

  {
    room: "7 - Philippines",
    location: "Building 2",
    floor: "1st Floor",
    students: [
      "Aquino, Yhannel Escabas",
      "Calma, Euri Sky Bulanadi",
      "Canasa, Arjer Lorenzo",
      "Canimo, Prince Rylee Dela Pena",
      "Castro, Yohan Wesley Sta. Rita",
      "Dayao, Riay Flores",
      "De Guzman, John Daniel De Jesus",
      "De Guzman, Prince Kristian Andy Vill",
      "De Jesus, Rich Ivan Maniaul",
      "Dela Cruz, Cyrus Jordan S.",
      "Dela Cruz, James Benedict Vitonio",
      "Dela Peña, Mark Andrei Alaban",
      "Donggo-An, Stephen Adrian",
      "Llovia, Jheo Dela Peña",
      "Malawit, Luis Gabriel Padilla",
      "Maniaul, Jeurzel Whigan",
      "Nogoy, Stephen Adriel Parayao",
      "Pacheco, Jairo Yuta",
      "Padilla, Nigel Ramos",
      "Sadie, Cedrick Manuel Guillermo",
      "Soliman, John Romulo Gutierre",
      "Sunga, Adonis Caezar Dela Peña",
      "Tuliao, John Abegnale Reye",
      "Verde, Kayden Liam",
      "Aligora, Rhyzz Laureen Francisco",
      "Balagtas, Shanel De Guzman",
      "Baltazar, Julieianna Marie Cruz",
      "Briones, Leanna Raine Maniaul",
      "Buco, Shanessa Aquene Castrol",
      "Cuevas, Angel Madicon Lagman",
      "Cunanan, Maria Francheska Antoni",
      "Cuyco, Jill Anne Bautista",
      "Dela Peña, Astrid Bengco",
      "Derit, Vianka Grace Chico",
      "Dingalan, Precious Jamela Santos",
      "Gonzales, Francine Gerrie Rivera",
      "Guevarra, Sophia Ysabelle Gumabon",
      "Gutierrez, Shakira Mae Espinas",
      "Lamadrid, Khloe Yani Mallari",
      "Lobo, Rheign Althea Santos",
      "Magat, Leira Joy Bahilio",
      "Manangu, Kassidie Chloe Mangulabn",
      "Salazar, April Rose Bernardino",
      "Santos, Lycah Mariz Ponce",
      "Umali, Kaithlyn Ann Suarez",
      "Valdez, Tyra Rhinea Diego",
      "Adviser: Darlene Hannah A. Potot",
      "7 - Philippines",
    ],
  },

  {
    room: "10 - Quality",
    location: "Building 2",
    floor: "1st Floor",
    students: [
      "Aragon, Jerome B.",
      "Basquiñas, Rogie D. L.",
      "Bautista, Prince Kerby C.",
      "Cayetano, James Clark A.",
      "Chavez, Melchor D. C.",
      "Cortel, Ronjian M.",
      "Daza, Andrei Yhael S.",
      "De Leon, Francisco Jr. N.",
      "De Leon, Jhont Vincent F.",
      "De Leon, Joey A.",
      "Dela Cruz, Jayrelle R.",
      "Dela Cruz, Jun T.",
      "Dela Cruz, Justine B.",
      "Dela Cruz, Mark Julian D.",
      "Dela Peña, Dancel L.",
      "Dela Torre, James Matthew D.",
      "Gatbonton, Justin Roy D. C.",
      "Macalinao, John Paul C.",
      "Magbanua, Khaliv Andrei A.",
      "Manarang, Jewel B.",
      "Mariano, Paolo B.",
      "Mariano, Raymart D. C.",
      "Mariano, Richmond T.",
      "Miranda, James Daniel B.",
      "Molca, Jared P. C.",
      "Narciso, Joko R.",
      "Nosares, Christian James B.",
      "Ortal, Richard Jr. G.",
      "Paradero, Christian Joseph S.",
      "Parungao, Jay-Z M.",
      "Perez, Alfred L.",
      "Ponce, John Miguel N.",
      "Puno, Jayro E.",
      "Samulde, Robin N.",
      "Sanchez, Andymar Q.",
      "Sangcap, Axel John C.",
      "Sangcap, Marco H.",
      "Sanguyo, James Andrew M.",
      "Santiago, Jamil C.",
      "Santos, Arsel J. T.",
      "Santos, Mark Rheyan M.",
      "Santos, Ronnie Jr. M.",
      "Sinel, Joren P.",
      "Suarez, Dean Michael A.",
      "Torres, Lynnard James P.",
      "Adviser: Alexander P. Cunanan",
      "10 - Quality",
    ],
  },

  {
    room: "9 - Shakespear",
    location: "Building 2",
    floor: "1st Floor",
    students: [
      "Aguila, Jhon Mel A.",
      "Aguilto, Jack Noel G.",
      "Bautista, Jhon Ivo V.",
      "Carpio, Kurt Steven M.",
      "Caloza, Jhon Benedict D.",
      "Castro, Ethan Jonas Paul S.",
      "Cruz, Reyvension Paul E.",
      "De Leon, Gerry Jr. B.",
      "De Luna, Naithan Kurt S.",
      "Enrile, John Angerik R. (T L)",
      "Enrile, Matt Axel G",
      "Enriquez, Jhairel F.",
      "Gonzales, James Carl C.",
      "Jasojaso, Kohn Yohan",
      "Magat, Gabriel B.",
      "Mangulabnan, Marc Jacob M.",
      "Miranda, Junix",
      "Ortega, Jervie Louis D.",
      "Robles, Louis Angelo",
      "Sagum, Brenn Kyle L.",
      "Silva, Jay Mark F.",
      "Taruc, Jo Stephen B",
      "Amante, Jonalyn L.",
      "Bininlkrizeth, Florie D.C.",
      "Castrorhona, Criselle M",
      "Clemente, Loraine C.",
      "Crisistomo Tiu, Krizchelle",
      "David, Heilly Dienne",
      "Dullas, Juana Mae H.",
      "Jordan, Elaine C.",
      "Kanimo, Ma Giselle P.",
      "Manarang, Princess Zian J.",
      "Manarang, Mikaelle Kyra Q.",
      "Mangulabnan, Sophia",
      "Salonga, Jackie N.",
      "Salonga, Jillian Mae",
      "Salonga, Felicity Jemma M.",
      "San Jose, Chloe G.",
      "San Juan, Annilian",
      "Soliman, Thamiya Rielle D.",
      "Adviser: Mary Dianne Cajucom",
      "9 - Shakespear",
    ],
  },
  {
    room: "8 - Chastity",
    location: "Building 2",
    floor: "1st Floor",
    students: [
      "Bautista, Prince Nathan G.",
      "Buenaventura, John Mar M.",
      "Canasa, Romjon Ivan A.",
      "Cao, Lance S.",
      "Cayanan, Shem Eliazer P.",
      "Cervantes, Jerwin S.",
      "Culala, Gerald M.",
      "De Leon, John Ryanne D.",
      "Esller, Billy John D.",
      "Fajura, Jinn Carl W.",
      "Hernandez, Jhon T-Jay C.",
      "Latombo, Luis L.",
      "Mallari, John David B.",
      "Mallari, Lenard Jake A.",
      "Manalo, Melvin Jr. D.",
      "Manarang, Ramon Quiel G.",
      "Nalangay, John Michael S.",
      "Navarro, Harvie Jade O.",
      "Pangan, Arkin M.",
      "Perez, Rolenz C.",
      "Puno, Edwin, Jr. H.",
      "Tolentino, Bruce Taryn D.",
      "Untulan, Angelo D.",
      "Cabana, Lix Marcon P.",
      "Camacho, Yesha Q.",
      "Cao, Abegail Rose D.",
      "De Jesus, Annie Rose A.",
      "Dela Cruz, Francheska Alliyah F.",
      "Delima, Princess Ashley S.",
      "Lagman, Crisha Raven E.",
      "Lagman, Reynalyn L.",
      "Laxamana, Shahira S.",
      "Manalili, Windelyn G.",
      "Manalo, Dessa Mae B.",
      "Mananghaya, Rosette B.",
      "Mojica, Rica Joyce L.",
      "Nabong, Lady Jewel C.",
      "Perez, Jamiya P.",
      "Sibug, Jessa Y.",
      "Vargas, Jezeth H.",
      "Yacat, Lady Genoveva S.",
      "Adviser: Rufino S.J. Abargos Jr.",
      "8 - Chastity",
    ],
  },

  {
    room: "7 - Vietnam",
    location: "Building 2",
    floor: "2nd Floor",
    students: [
      "Aguinaldo, Gerald M.",
      "Alvarez, Joselito T.",
      "Baluyot, James Jayster G.",
      "Cruz, Jhon Rix B.",
      "Cruz, Von Jaycob E.",
      "De Jesus, Roberto DP.",
      "Estrada, Prince Gabriel",
      "Gervacio, Dominic S.",
      "Manalastas, Cahlex Jazz",
      "Marzol Manarang, Renz M.",
      "Manarang, Shane Patrick",
      "Rosal Mangalindan, Rheyn Lycon I.",
      "Parayao, Gilbert Adrian D.",
      "Puno, Carl Prince Leeam P.",
      "Quiambao, Patrick D.",
      "Santos, Adrian V.",
      "Sarmiento, Daniel M.",
      "Taruc, Harden C.",
      "Umali, Kenneth B.",
      "Vergara, Josh",
      "Vitonio, John J.",
      "Ablaza, Princess Eiffer D.",
      "Aguinaldo, Angie B.",
      "Bucani, Maricel H.",
      "Canimo, Gera Axia E.",
      "Castro, Mary Joy A.",
      "Celso, Mhaddyzon V.",
      "Claravall, Rylanne Alyssa T.",
      "Dela Cruz, Krista Althea R.",
      "Dela Pena, Liera Jane Calontoc",
      "Delfin, Cindy S.",
      "Dordas, Patrish Airien O.",
      "Evangelista, Angel B.",
      "Evangelista, Katelyn M.",
      "Estoras, Angel A.",
      "Hernandez, Arliah Jaziel",
      "Jama, Jobelle Lyn",
      "Jimenez, Richlyn Mae R.",
      "Leonardo, Ivon C.",
      "Manliwat, Jenny Rose",
      "Morial, Maureen M.",
      "Musngi, Maycy Shane S.",
      "Reyes, Princess",
      "Sagum, May DG.",
      "Sarmiento, Erica B.",
      "Sta Ana, Nicole G.",
      "Torres, Kelly M.",
      "Adviser: Aileen S. Francisco",
      "7 - Vietnam",
    ],
  },
  {
    room: "8 - Justice",
    location: "Building 2",
    floor: "2nd Floor",
    students: [
      "Caluag, Jairuz A.",
      "Dela Cruz, Mac Mervin C.",
      "Dela Fuente, Mark Angelo B.",
      "Dimla, Evann Joss S.",
      "Enriquez, Vergel B.",
      "Escalona, Tristan Khiel G.",
      "Estrada, Kent C.",
      "Geonzon, Gabriel P.",
      "Martin, Cyrus Glhen M.",
      "Muñoz, John Carl L.",
      "Pascasio, Rain John M.",
      "Reyes, Ransen V.",
      "Sadie, Jet Raizen T.",
      "Sagum, Mjay B.",
      "Sangcap, Ayrex S.",
      "Santiago, Mark Ian S.",
      "Sitchon, Jericho P.",
      "Soliman, Mateo Iñigo C.",
      "Supan, Marcelito S.",
      "Talao, Aldrin, Dela L.",
      "Tolentino, Mico A.",
      "Villegas, Christian Lee T.",
      "Violen, Jarren Anthony A.",
      "Acbay, Samantha Nicole G.",
      "Alfonso, Elizabeth T.",
      "Caputilla, Rose Jenel D.",
      "Catacutan, Jasmine S.",
      "Custodio, Tiffany Boblyn D.",
      "Dela Peña, Queen Maria",
      "Engano, Angelyn S.",
      "Gonzales, Chrisha C.",
      "Inocencio, Alexa Rhian B.",
      "Lagunday, Flordeliza J.",
      "Manabat, Aleli C.",
      "Manalastas, Keil M.",
      "Nazal, Mikaela Iyana V.",
      "Parungao, Dianara P.",
      "Salas, Bernadette L.",
      "Salas, Jessie M.",
      "San Juan, Cara M.",
      "Sanguyo, Vannah Krizel D.",
      "Adviser: Jemima C. David",
      "8 - Justice",
    ],
  },

  {
    room: "10 - Responsibility",
    location: "Building 2",
    floor: "2nd Floor",
    students: [
      "Balajadia, Julliana S.",
      "Buenaventura, Nicole V.",
      "Buenaventura, Precious Angel S.",
      "Canimo, Chianlyn Jayessa P.",
      "Cao, Nicole G.",
      "Carangian, Ziana C.",
      "Carpio, Tricia Mae Q.",
      "Castillo, Pauleen H.",
      "Clemente, Reyzie L.",
      "Colo, Rose Nelly G.",
      "Cruz, Grace S.",
      "Cruz, Renz Myca S.",
      "Culala, Gelyne M.",
      "De Guzman, Erich M.",
      "Dela Cruz, JC Patriz L.",
      "Garcia, Sophia Anne E.",
      "Gonzales, Claumeril D.",
      "Hernandez, Bea C.",
      "Manuel, Angela Shane D.",
      "Mariano, Realyn P.",
      "Maxenne, Padilla",
      "Musngi, Cristine Andrea M.",
      "Parungao, Janice A.",
      "Peducnio, Angeli Nicole M.",
      "Perez, Andrea Mae F.",
      "Ricamata, Mikaela Shane M.",
      "Santos, Stephanie Cel M.",
      "Sarmiento, Akisha Claire M.",
      "Taylor, Aliyah Shane D.",
      "Villanueva, Crystal Mine R.",
      "Vinuya, Densei Chanelle D.",
      "Vitonio, Diana Mae B.",
      "Yco, LJ Cris L.",
      "Yocte, Mary Joyce C.",
      "Adviser: Ma. Cristina M. Mallari",
      "10 - Responsibility",
    ],
  },
  {
    room: "9 - Orwell",
    location: "Building 2",
    floor: "2nd Floor",
    students: [
      "De Leon, Justin B.",
      "De Guzman, Karbie L.",
      "Dela Peña, Arnel P.",
      "Dela Peña, Ronhiel John M.",
      "Hernandez, Jairus L.",
      "Layom, Jhairous M.",
      "Lazaro, Nuel M.",
      "Linsangan, Raine S.",
      "Pascasio, Airon John",
      "Sagum, Marco",
      "Reyes, Lord Amvear",
      "Solas, Mark Joseph",
      "Garcia, Mark Lorenz",
      "Barboza, Jericel",
      "Barrientes, Recalynne",
      "Borja, Yannah Alexa",
      "Esmera, Jherisie",
      "Francisco, Cattleya",
      "Hipolito, Myca",
      "Larin, Charice",
      "Laurente, Uann P.",
      "Manangu, Denise",
      "Mancia, Sean Elaiza",
      "Medina, Sofia",
      "Quimbao, Marcelinalyn",
      "Sagum, Reajane",
      "Simblio, Susan Marie",
      "Sta. Maria, Jazrel",
      "Sulit, Rubilyn",
      "Telan, Angel",
      "Adviser: Gerlie Mangulabnan",
      "9 - Orwell",
    ],
  },

  {
    room: "9 - Frost",
    location: "Building 2",
    floor: "3rd Floor",
    students: [
      "Adarme, Rainiel I.",
      "Asi, Cristian Jay L.",
      "Barrientes, Micko Dela Cruz",
      "Brosas, Christian Gibb P.",
      "Cao, Lord Bryan A.",
      "Dacaldacal, Axel M.",
      "De Jesus, Rodolfo A. (B.A.)",
      "Dela Cruz, John Lemuel",
      "Dela Pena, Riker Lloyd",
      "Dolva, Jay-Ar G.",
      "Felipe, Ryan Christian D.",
      "Hangie, Jasper C.",
      "Lawis, Hiel",
      "Lontoc, Louise Pocholo I.",
      "Lontoc, Tristan Jacob",
      "Luctu, John Jacob",
      "Mananghaya, Arjie",
      "Manlapaz, Mark J-Rex C.",
      "Miranda, Erlouie P.",
      "Pineda, Jered L.",
      "Rivera, James A.",
      "Sanchez, Mark Gerald M.",
      "Santiago, John Philip",
      "Santos, Andrei A.",
      "Santos, Cyrus L.",
      "Santos, Nathaniel B. (T.L.)",
      "Taruc, Ron Jiro D.",
      "Valencia, Justine Pol S.",
      "Cornes, Janelle Dela Cruz",
      "Dela Pena, Lian Eunice V.",
      "Manalastas, Erich Lapuz",
      "Villa, Alyzee Marie Mangulabnan",
      "Adviser: Merry Gil Arroyo",
      "9 - Frost",
    ],
  },
  {
    room: "10 - Resiliency",
    location: "Building 2",
    floor: "3rd Floor",
    students: [
      "Abuzo, Alexis N.",
      "Andres, Justin Ariel",
      "Aquino, Mark Gian M.",
      "Araojo, Yongirho S.",
      "Bulanadi, Prince Jharyl C.",
      "Cadiao, Rommel G.",
      "Castro, Alexis N.",
      "Cruz, Andrei John A.",
      "De Castro, Kean S.",
      "De Guzman, Julius F.",
      "De Leon, Elyrico Faith M.",
      "De Leon, Julius G.",
      "Dela Peña, Aaron Kyle J.",
      "Diaz, Reynold D.",
      "Dizon, Marby Carlo C.",
      "Garcia, Jan Eros M.",
      "Giron, R-Win Jay R.",
      "Lagman, Denver M.",
      "Lalu, Alry John D.",
      "Sanguyo, Renz Jherielle L.",
      "Villanueva, Lance Lheeanne V.",
      "Abocado, Charmela Faye C.",
      "Alfaro, Kylie Venice D.",
      "Basa, Xena Franchessca M.",
      "Bautista, Euniece M.",
      "Chico, Kayce M.",
      "Chico, Krystel Joy T.",
      "Dayap, Jamielove J.",
      "De Leon, Jancen Vash C.",
      "Dela Cruz, Angela Mae R.",
      "Mendoza, Leivie Jean S.",
      "Puno, Erica G.",
      "Puyat, Jhana Mae V.",
      "Santos, Jesie Mae R.",
      "Adviser: Marlon B. Alabado",
      "10 - Resiliency",
    ],
  },

  {
    room: "9 - Rowling",
    location: "Building 2",
    floor: "3rd Floor",
    students: [
      "Alolor, Cedrick P.",
      "Bautista, Christian Joseph P.",
      "Caranza, Lemuel L.",
      "Carreon, Ronron B.",
      "Chan, Denzel Brian A.",
      "Claravall, Reid Alexandre T.",
      "Cruz, Gerald C.",
      "Cunanan, El-Jay G.",
      "De Guzman, Carlos C.",
      "De Guzman, Jemuel Mc Harvey D.",
      "De Guzman, Mike R.",
      "Gatbonton, David Laurence G.",
      "Gonzales, Jhayrell L.",
      "Gonzales, Ryzyn Drei E.",
      "Liwanag, Elijah Lovel B.",
      "Lontoc, Louis Iñigo B.",
      "Lopez, Ray Arkin D.",
      "Manarang, Reniel D. G.",
      "Mangalus, Joshua Yalong",
      "Mateo, Azriel Shiro D.",
      "Salaysay, Prince Charles J.",
      "Bulos, Ashley Judel F.",
      "Dela Cruz, Jilliane H.",
      "Espinocilla, Rain L.",
      "Hortelano, Wena M.",
      "Luctu, Alexandra Mae D.",
      "Mallari, Alyana Rose M.",
      "Manabat, Alyeska Devon E.",
      "Manabat, Precious Andrea R.",
      "Manarang, Leanne Sophia E.",
      "Manio, Hanna Aliyah I.",
      "Manliwat, Princess Ashley M.",
      "Marcelo, Kristina Claire D.",
      "Mariano, Alexa Eunice Z.",
      "Mateo, Avril M.",
      "Miranda, Janela R.",
      "Pacunio, Eunice Jean S.",
      "Quiambao, Jay-Ann D.",
      "Quiambao, Princess Maegan S.",
      "Rellora, Tricia B.",
      "Reyes, Princess Eunice D.",
      "San Pedro, Bianca Mae V.",
      "Santiago, Sofia S.",
      "Teomera, Ashley Joy S.",
      "Villangca, Andrea L.",
      "Adviser: Aedrianne D. Nucum",
      "9 - Rowling",
    ],
  },

  {
    room: "9 - Rowling",
    location: "Building 2",
    floor: "3rd Floor",
    students: [
      "Amor, John Reinnald M.",
      "Caleon, Randy S.",
      "Culala, Ervinn Jay F. (T.I.)",
      "De Leon, Ramil M.",
      "De Leon, Randel M.",
      "Dela Peña, Yumoon S.",
      "Hernandez, Paul Jefferson",
      "Manalastas, Justine S.",
      "Miclat, Jyohan Clark A.",
      "Pableo, Zid Mathew P.",
      "Parungao, Kenneth B. (B.A.)",
      "Penalba, Jerome Jaz D.",
      "Torres, Lord Angelo E.",
      "Bantasan, Karyl Unice G.",
      "Bautista, Mica Mae G.",
      "Berba, Lie Nikki",
      "Cruz, Zhantal Mahe M.",
      "Cunanan, Leona Venice A.",
      "De Jesus, Crystal Anne S.",
      "De Leon, Kristal Ann L.",
      "Edaño, Erich O.",
      "Lagman, Jenelyn",
      "Mangalus, Juliane V.",
      "Parayao, Allia C.",
      "Reburiano, Zafirah Maeve P.",
      "Saga, Marilyn V.",
      "Sagum, Joana Nicole G.",
      "Salas, Princess C.",
      "Sarmiento, Louie Ashley C.",
      "Sonido, Precious Hian H.",
      "Victorio, Angeline M.",
      "Adviser: Judith E. Gatbonton",
      "9 - Rowling",
    ],
  },
  {
    room: "10 - Responsiveness",
    location: "Building 2",
    floor: "3rd Floor",
    students: [
      "Alolor, Cedrick P.",
      "Bautista, Christian Joseph P.",
      "Caranza, Lemuel L.",
      "Carreon, Ronron B.",
      "Chan, Denzel Brian A.",
      "Claravall, Reid Alexandre T.",
      "Cruz, Gerald C.",
      "Cunanan, El-Jay G.",
      "De Guzman, Carlos C.",
      "De Guzman, Jemuel Mc Harvey D.",
      "De Guzman, Mike R.",
      "Gatbonton, David Laurence G.",
      "Gonzales, Jhayrell L.",
      "Gonzales, Ryzyn Drei E.",
      "Liwanag, Elijah Lovel B.",
      "Lontoc, Louis Iñigo B.",
      "Lopez, Ray Arkin D.",
      "Manarang, Reniel D. G.",
      "Mangalus, Joshua Yalong",
      "Mateo, Azriel Shiro D.",
      "Salaysay, Prince Charles J.",
      "Bulos, Ashley Judel F.",
      "Dela Cruz, Jilliane H.",
      "Espinocilla, Rain L.",
      "Hortelano, Wena M.",
      "Luctu, Alexandra Mae D.",
      "Mallari, Alyana Rose M.",
      "Manabat, Alyeska Devon E.",
      "Manabat, Precious Andrea R.",
      "Manarang, Leanne Sophia E.",
      "Manio, Hanna Aliyah I.",
      "Manliwat, Princess Ashley M.",
      "Marcelo, Kristina Claire D.",
      "Mariano, Alexa Eunice Z.",
      "Mateo, Avril M.",
      "Miranda, Janela R.",
      "Pacunio, Eunice Jean S.",
      "Quiambao, Jay-Ann D.",
      "Quiambao, Princess Maegan S.",
      "Rellora, Tricia B.",
      "Reyes, Princess Eunice D.",
      "San Pedro, Bianca Mae V.",
      "Santiago, Sofia S.",
      "Teomera, Ashley Joy S.",
      "Villangca, Andrea L.",
      "Adviser: Aedrianne D. Nucum",
      "10 - Responsiveness",
    ],
  },

  {
    room: "10 - Productivity",
    location: "Building 2",
    floor: "4th Floor",
    students: [
      "Carangian, Nathaniel S.",
      "Gonzales, Marquise Cole J.",
      "Lontoc, Dan Steven D. V.",
      "Malawit, Ralph Gabiel P.",
      "Miranda, Leeam C.",
      "Mortifero, Khalil S.",
      "Nogoy, Richwell Rafael P.",
      "Pangan, Randell R.",
      "Perez, Arjem R.",
      "Pescasio, Benj Nicolo M.",
      "Robles, Mark Harvey S.",
      "San Jose, Jude Matthew Y.",
      "San Jose, Yuan Lee A.",
      "Santos, King Arthur Rein III M.",
      "Sunga, Cyrus Kyle D. P.",
      "Sunga, Jude Mathew C.",
      "Tolentino, John Russel S.",
      "Tumang, Rodney A.",
      "Vasquez, Charles Darwin G.",
      "Vinuya, Jellian I.",
      "Alfaro, Ma. Andrea Faye G.",
      "Bautista, Khacy Mae M.",
      "Bautista, Ma. Mikaela B.",
      "Bautista, Venice Joyeli O.",
      "Billones, Angelica D.",
      "Buco, Princess D. C.",
      "Calma, Ayesha A.",
      "Canasa, Teri Angeline A.",
      "Canimo, Aexhielle E.",
      "Catacutan, Lharaine G.",
      "Cruz, Janessa Marice C.",
      "Cruz, Mary Grace B.",
      "David, Jashley Nicole S.",
      "Dimaapi, Princess Jennyline S.",
      "Dimla, Gracejoy Ann S.",
      "Dingalan, Princess Jaymee S.",
      "Domingo, Princess Angienelle N.",
      "Felipe, Mikaela M.",
      "Gonzales, Francesca Geraldine R.",
      "Intol, Allea Jean O.",
      "Llanes, Jemimah Brielle B.",
      "Torres, Eilana Allainne D. C.",
      "Adviser: Alvin M. Dela Cruz",
      "10 - Productivity",
    ],
  },
  {
    room: "9 - Andersen",
    location: "Building 2",
    floor: "4th Floor",
    students: [
      "Baylon, Arvie D.",
      "Burayog, Knate John P.",
      "Dayap, Raven Meil J.",
      "De Guzman, Steven E.",
      "De Leon, Gerry Jr. B.",
      "Dela Peña, Erjhen P.",
      "Enriquez, Gerard T.",
      "Fabella, Eoin Ken M.",
      "Franco, Sean Kenneth R.",
      "Joson, Ronald Gabe",
      "Mendoza, Christian John G.",
      "Nalangay, Stephen Mateo S.",
      "Pablico, Marvin R.",
      "Pacheco, Jedric S.",
      "Pangilinan, Nathan S.",
      "Parungao, Yassimher P.",
      "Quiambao, Cris Makiel G.",
      "Sagum, Eduard Mathew J.",
      "Sagum, Jhan Brix",
      "Salayasay, Lebrick S.",
      "Andres, Shantal B.",
      "De Guzman, Stephanie E.",
      "Dullas, Joana Mae H.",
      "Inocencio, Prinsses U. M.",
      "Ison, Jewelmine P.",
      "Lamis, Quennie Mae B.",
      "Lazaro, John Chioule A.",
      "Mallari, Maica Jane C.",
      "Mangulabnan, Jazmine Raeselle S.",
      "Manlapaz, Ruth Margareth T.",
      "Nate, Aquila Ezra D.",
      "Pablo, Jems Kate M.",
      "Palad, Zhelinne J.",
      "Patawaran, Reanette B.",
      "San Jose, Rebecca C.",
      "Sarsonas, Mikayla Iyah D.",
      "Salinas, Prince Eldref D.G.",
      "Sulit, Lawrenz S.",
      "Tangcangco, Jhay-Em D.L.",
      "Vicente, Fhrinze Quielle M.",
      "Adviser: Janet Potot",
      "9 - Andersen",
    ],
  },

  {
    room: "JHS COMPUTER LAB - (COMPUTER LAB)",
    location: "Building 2",
    floor: "4th Floor",
    students: ["JHS COMPUTER LAB - (COMPUTER LAB)"],
  },

  {
    room: "4th Room - Registrar Office",
    location: "Building 3",
    floor: "1st Floor",
    students: ["Registrar`s Office"],
  },
  {
    room: "3rd Room - Administrative Office",
    location: "Building 3",
    floor: "1st Floor",
    students: ["Administrative Office"],
  },
  {
    room: "2nd Room - Principal's Office",
    location: "Building 3",
    floor: "1st Floor",
    students: ["Principal's Office"],
  },
  {
    room: "1st Room - SBM Office",
    location: "Building 3",
    floor: "1st Floor",
    students: ["SBM Office"],
  },
  {
    room: "1st Room - 11 - Internet",
    location: "Building 3",
    floor: "2nd Floor",
    students: [
      "Bulos, Mark Andrei Mabato",
      "Dela Peña, Tyron De Jesus",
      "Caleon, Gabriel De Guzman",
      "Canasa, Mark Aron Bermon",
      "Ganiza, Chris Jerico Bautista",
      "Gimpes, James Patrick Dao",
      "Marcelo, Prince Dan Espidido",
      "Muncal, Carl Andrei Inoncillo",
      "Pelayo, John Erickson Gojar",
      "San Jose, Keeane Cedrick Razon",
      "Sanguyo, Synned Luigi Luctu",
      "Vinuya, Lebron James Manarang",
      "Abalos, Angelic Gin Peno",
      "Beason, Erica Rose Canimo",
      "Bernardo, Stephanie Jane Cunanan",
      "Canasa, Rona Mae Manio",
      "De Guzman, Frencheska Elaine Castro",
      "Dela Cruz, Babylyn Sagum",
      "Encarnacion, Rhian Parayao",
      "Garcia, Chanise Vinuya",
      "Linsangan, Precious Ureta",
      "Manalang, Charisse D.",
      "Mangahas, Divine Precious Lambon",
      "Mangulamas, Mohdina Carpio",
      "Marcelo, Jeann Balajadia",
      "Mariano, Eli Ann Dela Rosa",
      "Morial, Wency Manlapaz",
      "Musngi, Merylle Ann Gatbonton",
      "Pamilar, Mary Ann Tubig",
      "Parayao, Maureen Tua",
      "Perado, Alleah Pacheco",
      "Punzalan, Pauline George Castro",
      "Reynaldo, Sydney Nicole Parungao",
      "Sagum, Denise Velaiza Santos",
      "Salas, Roan Sangcap",
      "Sandoval, Aslie Ponce",
      "Santos, Rhiana",
      "Tecson, Unice P.",
      "Adviser: Lovely V. Balatinsayo",
      "1 - Internet",
    ],
  },
  {
    room: "2nd Room - 11 - Microsoft ",
    location: "Building 3",
    floor: "2nd Floor",
    students: [
      "Bulos, Mark Andrei Mabato",
      "Dela Peña, Tyron De Jesus",
      "Enrile, Cyrus Ken Roque",
      "Estabillo, Ella James Medina",
      "Lamis, John Lester Angel Dela Torre",
      "Layota, Zyriel Sagum",
      "Manahan, John Michael Baustista",
      "Mariano, Janh Gabriel Tolentino",
      "Musngi, Prince Raven Aquino",
      "Narro, Allraine Gion Dela Peña",
      "Pangan, Dharljay Manalili",
      "Payad, Rain De Guzman",
      "Bato, Neian Vetanie Peña",
      "Baustista, Jennelyn Santos",
      "Cagungun, Jaschie Mae Sagum",
      "Caluag, Jenash Castellano",
      "Carpio, Mycah Maglalang",
      "Conejos, Marian Grace Lontoc",
      "Cruz, Joyce Ann Tolentino",
      "Del Rosario, Frances Bayani",
      "Dela Peña, Mary Elisa Ramos",
      "Dela Peña, Rhian Joyce Velado",
      "Dimla, Eury Anne Sta. Maria",
      "Enrile, Jairah Mielle Rollon",
      "Gagarin, Janina Alexa Mari Pelayo",
      "Galang, Mikaela Velasco",
      "Gapac, Cassandra Jeanelle Gonzales",
      "Igna, Mercy Bustamante",
      "Luctu, Aira Shelvin Saulog",
      "Manalastas, Maralyn Palmes",
      "Manarang, Celine Francine Sagum",
      "Miclat, Sunshine Alhexis Corpuz",
      "Rebancos, Lorraine Kimberly Manaol",
      "Reloj, Syeisha Anika Cunanan",
      "Salas, Reslika Sadie",
      "Salaysay, Kyle Couleen Sunga",
      "Sanguyo, Savina Baruelo",
      "Tapac, Tiyehn Chen Tolentino",
      "Tolentino, Diana Castro",
      "Adviser: Ralph Lawrence T. Alindayu",
      "11 - Microsoft ",
    ],
  },
  {
    room: "1st Room - 11 - Processor",
    location: "Building 3",
    floor: "3rd Floor",
    students: [
      "Canasa, John Carlo L.",
      "Cao, Jhun Rey A.",
      "Celerico, Ivzen B.",
      "Culala, Jeffiel Andrei H.",
      "Dela Cruz, Luigie B.",
      "Dela Peña, Meynard G.",
      "Del Rosario, Cyrus Dave DG.",
      "Franco, John Prince D.",
      "Galang, Jack Lorenz A.",
      "Macalino, Alex Graham D.",
      "Martin, Carl Stephen B.",
      "Mationg, Jhed DR.",
      "Peñalosa, Sean Matthew",
      "Antonino, Jade Sophia L.",
      "Araojo, Rhian J.",
      "Azid, Ashley S.",
      "Buco, Shantina Adine C.",
      "Bulanadi, Ace Eunica A.",
      "Bustamante, Jennica S.",
      "Catalig, Jerica P.",
      "David, Hillary Daffny C.",
      "Dela Peña, Audrey Nicole T.",
      "Escat, Rysa N.",
      "Hernandez, Jennica L.",
      "Jadraque, Kim Miguela M.",
      "Lacanlale, Ryza M.",
      "Laxamana, Kristine Cassandra S.",
      "Libayao, Andrea Janine",
      "Lorenzo, Andrea C.",
      "Lucas, Jamielyn DC.",
      "Magat, Jenela Louise E.",
      "Manlapaz, Althea Yhunniz M.",
      "Padilla, Michelle Jhayann S.",
      "Rizalado, Jorizza Claudia S.",
      "Sahagun, Queene Mae Irish D.",
      "Sarmiento, Zyrine Jane C.",
      "Tangcangco, Paula Jean B.",
      "Adviser: Clariza M. Canimo",
      "11 - Processor",
    ],
  },
  {
    room: "2nd Room - 12 - Literacy",
    location: "Building 3",
    floor: "3rd Floor",
    students: [
      "Bulanadi, Menard",
      "Canimo, Kyle",
      "Cunanan, Jhay-L",
      "Lagado, Kevin",
      "Liwanag, Jake",
      "Mangulabnan, Ralph",
      "Puno, Gian",
      "Sagum, Prince",
      "Santos, Angelo",
      "Talao, Joshua",
      "Villareal, Franz",
      "Yamat, Cyrille",
      "Almiro, Princess",
      "Balagtas, Airah",
      "Balingao, Nicole",
      "Bautista, Jennifer",
      "Baylon, Airah",
      "Cagungun, Jennifer",
      "Calacsan, Angel",
      "Cao, Maria",
      "Catacutan, Lean",
      "Clemente, Joyce",
      "Cortel, Caylee",
      "Cruz, Nicole",
      "De Leon, Lei",
      "Dela Peña, Trixie",
      "Joson, Princess",
      "Lopez, Laurence",
      "Manalastas, Carmela",
      "Manalili, Josh",
      "Manangu, Desiree",
      "Manapat, Gissel",
      "Mangulabnan, Jane",
      "Mangulabnan, Lyka",
      "Mangulabnan, Queen",
      "Manlapaz, Jewel",
      "Nacu, Mary",
      "Pacheco, Myka",
      "Padilla, Rose",
      "Padilla, Roxxy",
      "Paguio, Ariaana",
      "Paguio, Cyrille",
      "Pelayo, Jemilyn",
      "San Antonio, Lean",
      "Santos, Maria",
      "Sayaboc, Glyzzelle",
      "Solita, Valerie",
      "Tiongco, Rica",
      "Tolentino, Maybeline",
      "Valenzona, Glycel",
      "Yadan, Janel",
      "Adviser: Eris D. Liwanag",
      "12 - Literacy",
    ],
  },
  {
    room: "1st Room - 12 - Innovation",
    location: "Building 3",
    floor: "4th Floor",
    students: [
      "Bautista, Brent Joshua",
      "Catacutan, James",
      "Fabella, Ka'el",
      "Lagare, Ivanne Rey",
      "Lansangan, Mathew",
      "Manabat, Kiel Adrian",
      "Manginsay, Love Francis",
      "Padilla, Aldrin",
      "Padilla, Reyniel",
      "Peh, Joseph",
      "Sagum, Eduard",
      "Belonio, Janelle",
      "Cunanan, Eunice",
      "Cupino, Verlene Faith",
      "Dela Peña, Jewel Mae",
      "Dela Peña, Loraine Joy",
      "Enrile, Kylle Ehrin",
      "Evangelista, Mariel",
      "Garcia, Maryjhen",
      "Gonzales, Charlotte Steffany",
      "Hipolito, Xandy",
      "Mangulabnan, Marinel",
      "Mendoza, Rio Ace",
      "Palma, Erica Niña",
      "Pareja, Mylene Joyce",
      "Pelayo, Felicity Kate",
      "Ramos, Andrei",
      "Sagum, Kyle Cindrelle",
      "Sanguyo, Mary Rose",
      "Santos, Princess Yurie",
      "Soliman, Angel",
      "Soliman, Julia",
      "Suck, Princess",
      "Tan, Merjen Denise",
      "Trinidad, Ashbel Erica",
      "Villafuerte, Princess Anne",
      "Adviser: Louie May M. Villanueva",
      "12 - Innovation",
    ],
  },
  {
    room: "2nd Room - 12 Technology",
    location: "Building 3",
    floor: "4th Floor",
    students: [
      "Aguinaldo, Joaquin Miquel",
      "Antonio, John Michael",
      "Casaclang, Eurie Jeinz",
      "De Leon, Jhon Mherk",
      "Maniaul, Darwin",
      "Payad, Angelo",
      "Perez, Bryan Lee",
      "Ponce, Edilon Jr.",
      "Quiambao, Marvin",
      "Rodriguez, Gian Carlo",
      "Tecson, Drikz",
      "Verde, Ken Paolo",
      "Whigan, Seirold",
      "Aguila, Mary Pearl",
      "Aguinaldo, Jessa",
      "Ajose, Kyla",
      "Albus, Janina Joy",
      "Buenviaje, Dana Mae",
      "Canimo, Beverly",
      "Dela Rosa, Kharlyn",
      "Dimaapi, Anna Marie",
      "Guanzing, Haidilyn",
      "Lozano, Jamielyn",
      "Magat, Precious Hariet Moira",
      "Ortega, Christine Leira",
      "Pacheco, Jayden Carly",
      "Punsalan, Melamie",
      "Quiambao, Criskiella",
      "Rivera, Shynn Mei",
      "Roaring, Jhanna",
      "Salonga, Riza",
      "Sanchez, Steffanie Joy",
      "Santiago, Angel Tricia",
      "Soliman, Rheign Princess",
      "Adviser: Christian Aries C. Lapuz",
      "12 Technology",
    ],
  },

  {
    room: "1st Room - 12 - Creativity",
    location: "Building 4",
    floor: "1st Floor",
    students: [
      "Aducal, James Villanueva",
      "De Guzman, Bernard Turla",
      "De Guzman, Carl Wayne Lagman",
      "De Leon, Edcel Balboa",
      "Hernandez, Ronald Gimina",
      "Sison, Rain Ramos",
      "Torres, Anthony De Jesus",
      "Torres, Renan Bayles",
      "Buco, Geraldine Mudlong",
      "Cadiao, Rona Mae Guevarra",
      "Cruz, Micaela Faith Anadia",
      "De Guzman, Sunjoy Alcantara",
      "De Leon, Dustine Mae Garcia",
      "Dela Peña, Julie Sarmiento",
      "Gatbonton, Bernadette De Castro",
      "Giron, Glaiza Karyle Garcia",
      "Luctu, Phoemela Sulit",
      "Magtuto, Marry Joy Satiequia",
      "Mangulabnan, Paulene Mariano",
      "Manuel, Sophia Andrea Mariano",
      "Marcelo, Claire Merry",
      "Mendoza, Kimberly Cruz",
      "Saralde, Jonayca Franco",
      "Satur, Angel Loraine Martinez",
      "Sibug, Janice Yambao",
      "Sulit, Maria Andrea Salise",
      "Adviser: Rochelle N. Manansala",
      "12 - Creativity",
    ],
  },
  {
    room: "2nd Room - 12 - Initiative",
    location: "Building 4",
    floor: "1st Floor",
    students: [
      "Abelida, John Frederick Alapidi",
      "Agupe, Melquisedec Saulog",
      "Blas, Gio Romelle Santiago",
      "Cunanan, Michael Aveles",
      "De Leon, Glen Mark Sangcap",
      "De Vera, Dennis Bacurin",
      "Dela Cruz, Mark Arson Lontoc",
      "Jimenez, Aldrin Blas",
      "Mañaol, Eurie Ann Santos",
      "Tañedo, Jhone Cyruss Cruz",
      "Angeles, Janna Alliana Dela Cruz",
      "Balajadia, Maica Gwyneth Lamis",
      "Calma, Heart Bairan",
      "Canimo, Kristel Ann Aquino",
      "Caoagdan, Cyrell Jean Perez",
      "Castro, Alyssa Lenijan",
      "Garcia, Rhezza Taganas",
      "Hayawon, Angel Dela Cruz",
      "Indon, Dianne Maun",
      "Lacap, Nicole Perez",
      "Lagman, Arianne Moran",
      "Luciano, Princess Cortes",
      "Pedro, Jamie Sagum",
      "Ramboyong, Merylle Pabuaya",
      "Sangcap, Mea Erika Hisita",
      "Sanguyo, Sairah Quiroz",
      "Taruc, Rhealyn Ann Castro",
      "Tolentino, Desiree Castro",
      "Tolentino, Gee Ann De Guzman",
      "Villanueva, Era Miles Olmo",
      "Villaseñor, Edmary Castro",
      "Adviser: Judie Ann C. Reyes",
      "12 - Initiative",
    ],
  },
  {
    room: "1st Room - SHS COMPUTER LAB",
    location: "Building 4",
    floor: "2nd Floor",
    students: ["SHS COMPUTER LAB - (COMPUTER LAB)"],
  },
  {
    room: "2nd Room - 11 - Digital",
    location: "Building 4",
    floor: "2nd Floor",
    students: [
      "Celso, Cedrick Victoria",
      "Cruz, Lian Jacob Huqnatan",
      "Gajita, Daimien Kristian Escaño",
      "Lazaro, Mark Ryan Gregorio",
      "Liwag, Erald Jimenez",
      "Ruffy, Keen Rame Purugganan",
      "De Guzman, Marko Enerio",
      "Baltazar, John Mark Andrew Aguasito",
      "Bergaro, Romar Carpio",
      "Bulanadi, Jeric Paul Fabia",
      "Calinawan, Brent Pielago",
      "De Guzman, Vincent Trevinia",
      "Dela Cruz, Marc Caleb Malonzo",
      "Faustino, Lian Jaizee Dimapilis",
      "Javier, Cedric Jay Padilla",
      "Jimenez, Cyrus Joshua Cambe",
      "Labado, Raven John Sangcap",
      "Lorenzo, Prince Gian Maraya",
      "Magdaong, Alchris Sangcap",
      "Navarro, Nestelle Dear Torrero",
      "Pacheco, Elijah Lexell Espiritu",
      "Paluyo, Aldrix San Pedro",
      "Puno, Anthony Viloria",
      "Punzalan, Justine Mark Dimain",
      "Regalia, Jhon Michael Puno",
      "Rivera, Syrell Marc Sagum",
      "Somido, Mark Angelo Gabriel",
      "Yabut, Tyler Chase Paas",
      "Alacar, Anna Nicole Salandino",
      "Canimo, Nicole",
      "Canimo, Sophia",
      "Dotillos, Kristine Mariel Melencio",
      "Bulanadi, Maureen Joyce",
      "Dayrit, Princess Carlyn",
      "Quiambao, Lalaine Sagcal",
      "Tolentino, Roline De Guzman",
      "Manalastas, Shiela Mae Dela Cruz",
      "Manuyag, Kriza Mae Lugtu",
      "Padilla, Sheila May Cunanan",
      "Patigdas, Rhijanna Jade Payuyo",
      "Quiambao, Judy Miranda",
      "Sanguyo, Sharlene Valiente",
      "Tolentino, Crystal Pearl Valdez",
      "Adviser: Eric D. Dungca",
      "11 - Digital",
    ],
  },

  {
    room: "1st Room - 11 - Phyton",
    location: "Building 5",
    floor: "1st Floor",
    students: [
      "Canasa, Aldrin Aquino",
      "Dela Mines, Jeffrey Culala",
      "Dela Peña, Meynard Gatbonton",
      "Dimla, Librado Sorento",
      "Gavino, John Benidick Antonio",
      "Manalastas, Jay Pee Yunun",
      "Manarang, Caeruz Miguel Guillermo",
      "Nogoy, Angelo Padilla",
      "Reyes, John Russel Toboca",
      "Salandaguit, Mico Taruc",
      "Sangcap, Jay-R Martin",
      "Yambao, Nesty Sunga",
      "Baltazar, Gerald Olivers",
      "Bemardo, Chris Lawrence Fugaban",
      "Canimo, Vincent Santos",
      "De Leon, Charlie Clemente",
      "Dita, Kristan Corpin",
      "Fernandez, Carl Dexter Cruz",
      "Lagman, Reynan Lucas",
      "Larin, Darwin Angeles",
      "Mangulabnan, Ariel Reyes",
      "Parayao, Cholo Lean Santos",
      "Salas, Jaycee Bernardo",
      "Sulit, Christian Nugoy",
      "Telan, Jaedlyn Gabrielle David",
      "Vales, Justine Borja",
      "Vinuya, Efren Jay Santiago",
      "Whigan, Ajay Bernardo",
      "Adviser: Japeth M. Lamsen",
      "11 - Phyton",
    ],
  },
  {
    room: "2nd Room - 11 - Database",
    location: "Building 5",
    floor: "1st Floor",
    students: [
      "Benaning, Rey John",
      "Buenaventura, Mark James Monterde",
      "Carpio, Jude Law Dantes",
      "Castillo, Zildjian Reyes",
      "De Vera, Jerold Lee Cabug",
      "Estimago, Edmart Briones",
      "Garcia, John Joshua Sadie",
      "Guillermo, Jeremy Tanawit",
      "Juanillo, Kim Justine Tubig",
      "Manarang, Arjin Cyle Hipolito",
      "Quinto, Sam Kenjie Santos",
      "Reburiano Jr., Evener Payuyo",
      "Sagum, Mark Javier Baltazar",
      "Santos, John Renmuel Malabanan",
      "Silva, Mark Juvern Flor",
      "Torres, Marc Eco Caluag",
      "Villorente, Marky Madola",
      "Yacat, Lance Angelo Sagum",
      "Bantasan, Kriselle Yaj Santos",
      "Belen, Princess Anneth Miranda",
      "Cao, Amanda Sophia Camuyag",
      "Castro, Rian Mae Madlangbayan",
      "Chico, Catherene May Trespecios",
      "Corpin, Krizza Mae Molabe",
      "Datuimam, Jannah Edrozo",
      "De Juaiting, Kate Wendy Sadiaza",
      "De Leon, Jenelyn Gatdula",
      "Decin, Dona Rose Olivera",
      "Diaz, Reyvelyn De Guzman",
      "Dilag, Jemica Sabenicio",
      "Fernando, Mary Jane Reyes",
      "Garcia, Kim Mallari",
      "Gumabon, Lian Jane Laydan",
      "Latombo, Mica Lorenzo",
      "Linga, Zyrelle Kate Delos Reyes",
      "Malonzo, Dazserre C.",
      "Manalili, Sarah Jane Carpio",
      "Nuguid, Pauline Rain Culala",
      "Pangan, Angeliene John Bengco",
      "Sagum, Bianca Sanguyo",
      "San Pedro, Jan Myca Manaysay",
      "Sangcap, Althea Cunanan",
      "Sta. Ana, Diana Gonzales",
      "Tolentino, Irish Mae Musni",
      "Adviser: Luz Clarita S. Marin",
      "11 - Database",
    ],
  },
  {
    room: "1st Room - 12 - Adaptability",
    location: "Building 5",
    floor: "2nd Floor",
    students: [
      "Apolonio, Zidane Padilla",
      "Canimo, Liam Patrick Sarreal",
      "De Leon, Julian Atento",
      "Lontoc, Kyle Jasper Isip",
      "Sanguyo, Gian Gumabon",
      "Viador, Luis Glean Morelos",
      "Toledo, Edmund Jr. Lising",
      "Agudera, Marian Sulit",
      "Bacual, Jasmine Godin",
      "Borja, Ashley Nicole Colobong",
      "Caleon, Elisa Mae Panganoron",
      "Clemente, Kimberly Cebu",
      "Clemente, Kristal Cebu",
      "Esmejarda, Mary Rose Buco",
      "Hernandez, Jasmine Matic",
      "Ileto, Marian Palacio",
      "Leonardo, Nicole Carpio",
      "Lontoc, Elaisa Joy Ledesma",
      "Luctu, Alex Ria Valerie De Leon",
      "Mangulabnan, Kimberlie Gabriel",
      "Maningo, Shena Mae Jubay",
      "Molina, Princess Lasafin",
      "Pastrana, Princess Joy Esmiro",
      "Peñalba, Jenica Dela Peña",
      "Rivera, Mylene Aguas",
      "Sagum, Eden Chico",
      "Sanguyo, Shiela Mae Magat",
      "Tangcangco, Ashley Sinque",
      "Toledo, Era Shiela Mae Lising",
      "Tolentino, Clarisse Alvarez",
      "Whigan, Juliana Nicole Mercado",
      "Adviser: Lander M. Alabado",
      "12 - Adaptability",
    ],
  },
  {
    room: "2nd Room - 11 - Software",
    location: "Building 5",
    floor: "2nd Floor",
    students: [
      "Alvaran, John Carlo M.",
      "Alvarez, John Louie Dullas",
      "Bautista, Kurt Angelo Padilla",
      "Cao, Lawrence Buenaventura",
      "Cariño, Raiven Rondinay",
      "Chico, Emmanuel Tangcangco",
      "Cortez, Lawrence Ledesma",
      "De Leon, Adrix Bailo",
      "Dela Cruz, Darwin Picara",
      "Gavino, John Edcel Antonio",
      "Layug, Calex Jaycob Punzalan",
      "Manarang, Dave Dela Cruz",
      "Ocampo, Prince Jeniel Manalastas",
      "Quitoriano, David Noah Sarmiento",
      "Ricamata, Mark Steven Manliwat",
      "Rivera, Justine Aguas",
      "Sagum, Mark Alwin David",
      "Torrefiel, James Culala",
      "Varona, Kevin Cao",
      "Acosta, Kylishene Aquino",
      "Aquino, Cloue Ann Puno",
      "Bagsic, Rachel Joy Butial",
      "Baltazar, Irah Juan",
      "Buenaventura, Angelyn Manalastas",
      "Caleon, Kharyll De Guzman",
      "Celso, Lea Lucia Sunga",
      "Chico, Jen Mercy Culala",
      "Chico, Runny Remodo",
      "Cunanan, Lorraine Dumalaog",
      "Dacanay, Charizze Sagum",
      "De Guzman, Lharaine Manalastas",
      "Dela Cruz, Nina Angela Palisoc",
      "Dela Peña, Khaily Nicole Reyes",
      "Idago, Liann Linsangan",
      "Lajom, Mariane Catherine",
      "Lalu, Princess Jhewel Manalo",
      "Magtoto, Jade Errah Cao",
      "Manio, Lindsay Villena",
      "Parungao, Tiffany Maniaul",
      "Sangcap, Lhean Lumandas",
      "Sangcap, Mariz Reandillar",
      "Soliman, Jonalene Manaloto",
      "Vergara, Jenverly Reluao",
      "Villaverde, Rhea Esrellado",
      "Adviser: Jennifer Mandap - Manahan",
      "11 - Software",
    ],
  },

  {
    room: "1st Room - 11 - Analytics",
    location: "Building 5",
    floor: "3rd Floor",
    students: [
      "Adarme, Ronnie De Jesus Jr.",
      "Agulto, Angelito Santos Jr.",
      "Alapidi, Gerick De Leon",
      "Blas, Jan Ernest Gonzales",
      "Cabañero, Mark John Roce",
      "De Castro, Warren Pelayo",
      "De Leon, Wally Reyes",
      "Dela Cruz, Elizer Sarmiento",
      "De Guzman, Jerson Dullas",
      "Diaz, Ricardo Catacutan",
      "Fabila, John Paul Navales",
      "Fanuncio, Charles Denver Teologo",
      "Fino, Prince Rj Buenaventura",
      "Gimoto, Hendrix Marzol",
      "Laurio, Mark Justine Escanilla",
      "Lazaro, James Christian Salas",
      "Natividad, Ronnel Madola",
      "Pacheco, Audrick Baltazar",
      "Salas, Rhem Denver",
      "Villanueva, Miles Russel D.",
      "Aguilar, Angel Grace Pangan",
      "Aguinaldo, Bianca Mariz Soliman",
      "Aquino, Mikaela Joyce Mariano",
      "Belardo, Rheana Dela Cruz",
      "Bulaon, Jorie Anne Caluag",
      "Chavez, Beecy Dela Cruz",
      "Crisostomo, Alanzae Canasa",
      "Cunanan, Christine Arco",
      "De Guzman, Jewel Daria",
      "Dela Cruz, Babylyn Sagum",
      "Delos Santos, Jenica Cajes",
      "Edaño, Erah Oraye",
      "Galang, Anne Sangcap",
      "Magat, Daniela Parcellano",
      "Manabat, Leizel Anne Dela Cruz",
      "Manalastas, Joy Bulan",
      "Manliwat, Shaira Shane Sagum",
      "Palacio, Joanna Mae Militante",
      "Parayao, Angel Nicole Alcarioto",
      "Parayao, Jamaica Pacis",
      "Soliven, Ana Patricia Cano",
      "Tangcangco, Yesha Mae Codilla",
      "Whigan, Nichoulyn Mercado",
      "Yamat, Maria Mercedes Lagman",
      "Adviser: Joselle B. Magbanua",
      "11 - Analytics",
    ],
  },
  {
    room: "2nd Room - 12 - Proficient",
    location: "Building 5",
    floor: "3rd Floor",
    students: [
      "Abedo, Dharien John Cabato",
      "Balboa, Gabriel Halasan",
      "Baltazar, Jiann Carlo",
      "Baltazar, Johnson Maranan",
      "Borja, Prince Troy Amadeus",
      "Calanday, Jay Daryll Mariano",
      "Camero, Steven Nathaniel Lawis",
      "Canoza, Vincent Eladia",
      "Cao, Marc Romar Baylon",
      "Catalig, Orven Myles Mangulabran",
      "Cunios, Oliver John Aballe",
      "Esguerra, Mharc Kerwin Macalino",
      "Gumanog, Jedrick",
      "Hila, Marion Ray Sinuto",
      "Ignacio, Aaron James Manalastas",
      "Lalu, Cerimie Tolentino",
      "Lozano, Robert",
      "Lulu, Keith Lawrence Mallari",
      "Magtoto, Vhan Allen",
      "Mallari, John Andrei Calma",
      "Manalastas, Leomar Palmes",
      "Montes, Kurt Erson Hemandez",
      "Mulacruz, John Joshua Mallari",
      "Pabu-aya, Laurence M.",
      "Antonio, Editha Jacobe",
      "Arnejo, Jessa Miranda",
      "Aurelio, Rovinell Quiambao",
      "David, Jhoanna Mae Buguid",
      "Dela Cruz, Mika Ella Mostaza",
      "Dela Peña, Althea Nicole Boholano",
      "Dela Perña, Arian Puloños",
      "Dela Peña, Mary Rose Aquino",
      "Huerpo, Jasmine Dela Cruz",
      "Ibasco, Jackelyn Bulanadi",
      "Manalastas, Syreene Ann Gabor",
      "Adviser: Zairah Jane B. Labasan",
      "12 - Proficient",
    ],
  },
  {
    room: "1st Room - Computer Lab",
    location: "Building 5",
    floor: "4th Floor",
    students: ["Computer Lab"],
  },
  {
    room: "2nd Room - 12 - Communication",
    location: "Building 5",
    floor: "4th Floor",
    students: [
      "Aguila, Joros Alcantara",
      "Alfaro, Marc Andrew Gatbonton",
      "Balaguer, Lawrens Cuasto",
      "Carpio, Adrian Dela Perna",
      "Catacutan, Justine Jay Binuya",
      "De Lara, Jerome Pablico",
      "Dela Pena, Jeff Martin",
      "Dungca, Jhon Cedrick Reyes",
      "Lagman, Renz Carpio",
      "Lazaro, Alexis Ruri Mejos",
      "Navarro, Jerome Silva",
      "Punzalan, Mart Jimuel Reyes",
      "Sagum, Rhayniel Dayao",
      "Santiago, Ramil Bautista",
      "Suba, Romel Mangalus",
      "Tupas, Andrew Gleneel Cao",
      "Vinuya, Dexter Mangalus",
      "Dela Cruz, Hazel Hipolito",
      "Dela Cruz, Jenica Mangalus",
      "Dela Pena, Charisse De Guzman",
      "Mariano, Crizyl Batoon",
      "Mariano, Raiza Dela Cruz",
      "Perez, Jamaeca Ryca Gonzales",
      "Reyes, Chrisvin Andrea",
      "Sagum, Nicole De Leon",
      "Salas, Lorraine Santos",
      "Salas, Rhianne Santos",
      "Salaysay, Trixie Lorenzo",
      "Santos, Princess Geraldine Sumdo",
      "Vergara, Precious Jeanelle Sagum",
      "Adviser: Jhoanna S. Villegas",
      "12 - Communication",
    ],
  },

  {
    room: "1st Room -SSLG Office",
    location: "Building 6",
    floor: "1st Floor",
    students: ["SSLG Office"],
  },
  {
    room: "2nd Room - 12 - Leadership",
    location: "Building 6",
    floor: "1st Floor",
    students: [
      "Acuña, Cyrus Denver",
      "Aragon, Jaymar Borja",
      "Bernal, Jhomark Dyllan Abadillos",
      "David, Annex Estrella",
      "David, Jared Aaron Semacio",
      "De Guzman, Angelo Dela Cruz",
      "De Guzman, John Pau",
      "Ensela, King Rowin",
      "Hernandez, Angelo James Arenas",
      "Hipolito, Vien Tabarno",
      "Maturingan, Matthrix",
      "Palacio, Armel Aying",
      "Adviser: Rowell F. Gonzales",
      "12 - Leadership",
    ],
  },
  {
    room: "3rd Room - 12 - Flexibility",
    location: "Building 6",
    floor: "1st Floor",
    students: [
      "Amor, Marcy Analo",
      "Baco, Aaron Bejerano",
      "Barzo, Jeffrey Sanguyo",
      "Bulaon, Jhon Zyrelle Benedicto",
      "Canasa, Mike Francis Dajac",
      "Canilla, Roden Sebastian Carlos",
      "Canimo, Martin Vecedo",
      "Carpina, Dave Clark De Leon",
      "Castro, John Rey Javier",
      "Castro, Trojan Grecko Manalastas",
      "Cerezo, Rovhack Lazaro",
      "Cunanan, Dexzel Bolaños",
      "De Guzman, Gillian Lei Anchojas",
      "De Guzman, Guiller Canimo",
      "De Guzman, Josh Emmanuel Padilla",
      "De Guzman, Khian Daniel Ragot",
      "De Leon, Adrian De Jesus",
      "De Leon, Ralph Andrei Manalo",
      "De Leon, Rhomel Facun",
      "Dela Cruz, Steiven Miranda",
      "Enriquez, Jusfer Lapuz",
      "Garcia, John Raven Valenzuela",
      "Gulapa, Reymyear Bayona",
      "Gumafelix, Jayden Buenaventura",
      "Lasac, Erick Guansing",
      "Lising, Bhiboy Kayle Curray",
      "Mananghaya, Raffy Parungao",
      "Manarang, Lance Andrei Dimla",
      "Miranda, Jasper Perez",
      "Sagum, Mark Dela Cruz",
      "Rellora, Joshua Bulaon",
      "Salas, Andie Mar Lalu",
      "Santos, A-Jay Alfaro",
      "Saspa, Rhain Vergel Dela Cruz",
      "Solito, Juan Sebastian Magcalas",
      "Tingal, Jayvee Dela Cruz",
      "Torres, Mark Joseph Estimago",
      "Tumali, Luis Addie Maniti",
      "Yambao, Reymac Perez",
      "Adviser: Hannah Erika G. Barrera",
      "12 - Flexibility",
    ],
  },

  {
    room: "1st Room - 12 - Collaboration",
    location: "Building 6",
    floor: "2nd Floor",
    students: [
      "Abelida, Mark Adrian Alapidi",
      "Aguinaldo, Robbie John Soliman",
      "Alindayu, Bryle Jerome Tolentino",
      "Banaag Jr., Joseph Red",
      "Mangulabnan, Aj Dulay",
      "Mariano, Kurt James Leron",
      "Patigdas, Ralph Jericho Payuyo",
      "Santos, Andrei Guardian",
      "Santos, Chris Allen Lapuz",
      "Agravante, Jennilyn Delos Santos",
      "Arapan, Jasmin Calma",
      "Bernardino, Cielo Maica Samonte",
      "Bradicina, Lyka Noreen De Guzman",
      "Cornes, Althea Suarez",
      "De Leon, Jayann Delos Santos",
      "Delos Santos, Mhiyaka",
      "Estrada, Jasmine Pangilinan",
      "Guillermo, Ailene Pagalawan",
      "Hernandez, Jasmine Lalu",
      "Adviser: Rosemarie C. Navarro",
      "12 - Collaboration",
    ],
  },
  {
    room: "2nd Room - Beautycare Laboratory",
    location: "Building 6",
    floor: "2nd Floor",
    students: ["Beautycare Laboratory"],
  },

  {
    room: "9 - Morrison",
    location: "Morrison and Accountability",
    floor: "1st Floor",
    students: [
      "CASTILLO, ANTHONY P.",
      "DESOYO, VIN RAISEN P.",
      "DOMINGO, JOKO F.",
      "FAGELA, BEN ALEXANDER B.",
      "GONZALES, MC LORD JHAY G.",
      "JACINTO, JHON CLARK E.",
      "MALLARI, MARCO JAMES G.",
      "MANALASTAS, JHON WARREN Y.",
      "MANIO, VENER JR. M.",
      "MANIRON, DENVER N.",
      "MENDOZA, BRENT KYLE M.",
      "SAN PEDRO, JERALD B.",
      "SANTOS, NATHANIEL B.",
      "AGUINALDO, MARIEL M.",
      "BRIONES, LOUELLA NICOLE T.",
      "CARPIO, QUEENNIE A.",
      "DAVID, SOFIA V.",
      "DELA CRUZ, KARCEELYN L.",
      "GALLARDO, BLESSIE JOY M.",
      "GATBONTON, MAYBELINE G.",
      "GONZALES, CRISTEL ANN C.",
      "JUBAY, JHANELLE ANN S.",
      "LAZARO, BRIANNA MELLE M.",
      "MALLARI, PRINCESS DENISE S.",
      "NAZAL, STEPHANIE D. A.",
      "ROBLES, ALYSSA MONIQUE B.",
      "SULIT, RUSTY JEN M.",
      "YAMBAO, DAHLIA S.",
      "Adviser: Liezel C. Punzalan",
      "Morrison",
    ],
  },
  {
    room: "10 - Accountability",
    location: "Morrison and Accountability",
    floor: "1st Floor",
    students: [
      "ASUNCION, EDEL JON T.",
      "CORRAL, LORD RAYZEN D. C.",
      "CORTEZ, NIÑO M.",
      "DE JESUS, ELCRIS GABRIEL R.",
      "DE LEON, KEN LESTER P.",
      "DELA CRUZ, JOHN DIRHAMS P.",
      "GARCIA, JOHN MICHAEL V.",
      "IM, KYEONGVIN A.",
      "MACAPAGAL, ROYIEN JELD B.",
      "MAGCALAS, KRISTOFFE YUKIE L.",
      "MANALASTAS, ANGELO M.",
      "MANLIWAT, ALDRIN M.",
      "OLMO, EDWIN C.",
      "PANGAN, MARK LORENZ G.",
      "PUNO, JOHN TROY.",
      "SANTOS, YUAN A.",
      "SIMBULAN, JUDE G.",
      "TUNGOL, REALYN S.",
      "VIDAR, JOHN BRIAN G.",
      "CANIMO, JANA MAE C.",
      "LALO, TRISHA MAE S.",
      "MANGULABNAN, MARY ROSE P.",
      "MANGULABNAN, NYKA E.",
      "POTOT, SHEKINAH C.",
      "SAGUM, JOCAS S. J.",
      "SAGUM, RENCHIE G.",
      "SAMONTE, JASMINE V.",
      "SANTOS, EUNICE M.",
      "SANTOS, PRECIOUS MARIANE S.",
      "SARTO, CHERELL A.",
      "TELAN, NICA D.",
      "TOLENTINO, SHAINA S.",
      "VALENZONA, MARIA ELEZA G.",
      "VELASCO, MARY LORRAINE P.",
      "Adviser: Edel Ann P. Galvez",
    ],
  },

  {
    room: "10 - Improvement",
    location: "Twain and Improvement",
    floor: "1st Floor",
    students: [
      "CAMUYAG, CEDRICK H.",
      "CASTRO, MARK ELMO C.",
      "DELA CRUZ, CHOLO",
      "DELA CRUZ, JOHN STEVEN D. L.",
      "ESPIRITU, RIAN REY U.",
      "JUBAY, JERIEL S.",
      "LASAC, CRISHLER G.",
      "LIWAG, MARK AARON M.",
      "MANIAUL, SAM ICARUS Q.",
      "MANLIWAT, AHRON JAY S.",
      "MIRANDA, PRINCE GABRIEL B.",
      "QUIAMBAO, RONEL M.",
      "DAYRIT, BABYLYN S.",
      "GACHO, CHARLYN RAE D. R.",
      "JAVIER, CHARLEEN MAE G.",
      "JOSON, JOEHANNA ROSH S.",
      "JUBAY, JUDITH S.",
      "MANALASTAS, JHANE E.",
      "MANANGHAYA, SHERLYN B.",
      "MANANSALA, MARISON M.",
      "MANARANG, MERCEDITA A.",
      "MARCELO, ROSE CYRA D. R.",
      "MENDOZA, PRINCESS RHEA A.",
      "MUSNGI, JANINA MAE G.",
      "NAVARRO, DAISY M.",
      "NAVARRO, JHADE C.",
      "PABALAN, ALIAH TRISH C.",
      "PACHECO, ELIZAH LORRAINE E.",
      "PARENA, TRICIA MAE Y.",
      "QUEMAN, NICOLE JANE L.",
      "ROCAMORA, MARIELLE CRIS M.",
      "SAGUM, JASMIN D. G.",
      "SALCEDO, REXINE M.",
      "SANCHEZ, ZYRENE P.",
      "SANGCAP, MARY ROSE A.",
      "SANTOS, ALYANA ROSE C.",
      "SANTOS, JESSA D.",
      "TORRES, CYRILLE D.",
      "Adviser: Leslie Anne M. Sandiego",
    ],
  },
  {
    room: "9 - Twain",
    location: "Twain and Improvement",
    floor: "1st Floor",
    students: [
      "BACO, VHAL BEJERANO",
      "CAMUYAG, MARCO",
      "CANASA, ANJELO",
      "CUNANAN, JOHN PAUL",
      "ESMERALDA, JOHN MICHAEL AGA",
      "FERRER, PRINCE FRENCEL NATE",
      "JIMENEZ, CARLOS ALEJO SUZUKI",
      "LAWIS, NHEIL",
      "LEGACION, JAMILE",
      "LUCTU, JOMEL",
      "MALONZO, KERWIN CARDINIO",
      "MANLUTAC, JAYSON CARPIO",
      "MIRANDA, LUIS JOHN",
      "PINEDA, JERED LEDESMA",
      "PINEDA, JOHN PAUL VIERNES",
      "PONCE, WENDEL",
      "SAGUM, DANIEL LUIS",
      "SAGUM, NATHANIEL DE LEON",
      "SALCEDO, JULIANO ROMMEL JR.",
      "SANGUYO, LUIGI SALAC",
      "TORRES, LYNNARD JAMES PINEDA",
      "TORRES, MELVIN ALMARIO",
      "VERALLO, AMIEL KIAN MALONZO",
      "VILLANUEVA, MARK JAMES",
      "YABUT, MATTHEW LOUISE GONZALES",
      "YANZON, KHIEL KHERBY",
      "CANTIGA, JILLIAN JHARICH",
      "MANARANG, ROSEMARIE",
      "PUNZALAN, JASMINE",
      "SALVADOR, AVRIL",
      "Adviser: Elaissa Jhane M. Jimenez",
    ],
  },

  {
    room: "9 - Kilmer",
    location: "Kilmer and Equity",
    floor: "1st Floor",
    students: [
      "ANDAN, MARK JACOB J.",
      "ARBANAAG, RAYMARK REN R.",
      "BALAJADIA, MC GAVIN G.",
      "CALMA, HARVEE G.",
      "DE LEON, JEFFERSON T.",
      "DE LEON, MARK GERALD S.",
      "DIMAAPI, JERWIN S.",
      "ESTEBAN, LANS JOSEPHIX J.",
      "INFANTADO, GILBERT D. JR.",
      "MEMPIN, RON GIAN G.",
      "PERADO, ADRIAN P.",
      "VILLANUEVA, JERZEL JOHN J.",
      "AGAS, APPLE D.",
      "BAUTISTA, CRISTINE M.",
      "BOLLUSA, MIA MARIEL P.",
      "BULANADI, STEPHANIE A.",
      "CAO, SHANEL EMMELLE J.",
      "CORDOVA, CHLOE LORRAIN L.",
      "DELA PEÑA, QUEEN ELIZABE E.",
      "GARCIA, ELLA JANE C.",
      "LUMBANG, SHARMAINE C.",
      "MANIO, ASHLEY NICOLE M.",
      "MARCELO, KRIZEL P.",
      "NOLASCO, ANCEL MAE G.",
      "PERATER, JULIANAH J.",
      "PEREZ, KAYE ANN T.",
      "ROBLES, LIALYN KAE P.",
      "SAGUM, SHAZNA ERICA R.",
      "SULIT, VEVILYN D.",
      "YAP, CHERRY JOY J.",
      "Adviser: Erica Gray G. Naluz",
    ],
  },
  {
    room: "10 - Equity",
    location: "Kilmer and Equity",
    floor: "1st Floor",
    students: [
      "ABLAZA, JOSH LORDRAIN M.",
      "AGUILAR, DAN JARED D. P.",
      "AGUINALDO, ARCHIE A.",
      "ANAHAW, CARL LAURENZ A.",
      "AQUINO, JOHN CHRISTOPH R.",
      "BAUTISTA, MARCO ELDRICK P.",
      "BULANADI, RHINSTER S.",
      "CALUMPAD, CEDRICK E.",
      "CAO, JERSON R.",
      "CARPIO, ARNEL A.",
      "CASTRO, ESTEVEN DAVID C.",
      "CASTRO, GODWIN D. S.",
      "CATACUTAN, JUSTINE Y.",
      "CATALIG, JOLU E.",
      "CATALIG, JUSTIN T.",
      "DELA PEÑA, GHIAN CARLO V.",
      "DELOS SANTOS, DEXTER C.",
      "DELOS SANTOS, RENZO G.",
      "ENGUERRO, KYLE JACOB B.",
      "GABRIEL, EDISON D.",
      "GUILLERMO, MICCO C.",
      "HIPOLITO, MELVIN D. C.",
      "IBASCO, ANDREW B.",
      "LAGMAN, JHON RAFAEL D.",
      "LARIN, JOHN NATHAN Q.",
      "LOQUISAN, ARON JAMES C.",
      "MAGAT, KING JAYDEN KYLER M.",
      "MANALILI, LEIDON MARCUS",
      "MANALILI, WENDELLE G.",
      "MANANGHAYA, CARL JIAN V.",
      "MANGALUS, JEREMY M.",
      "MANIRON, JED DARELL N.",
      "MARCELO, MELVIN A.",
      "MONTANO, JARED D. C.",
      "UBAJAN, JOHN DANIEL L.",
      "YAP, PAUL D. G.",
      "BANTASAN, KRISTHEL JOY G.",
      "BERNAN, JESSICA C.",
      "CAMUYAG, FRENCHIE B.",
      "JORDAS, KIMBERLY D.",
      "LUCAS, JANNA S.",
      "MARIANO, KELLY PRINCESS P.",
      "PANGAN, ASHLEY",
      "PUNO, RHIAN JOY C.",
      "Adviser: Kathlyn Joy Semanero",
    ],
  },

  {
    room: "1st room 9 - Whitman",
    location: "Whitman, System and Integrity",
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
    room: "1st room 10 - Integrity",
    location: "Whitman, System and Integrity",
    floor: "1st Floor",
    students: [
      "AGUINALDO, JIYANNE B.",
      "AGUINALDO, NICOLE B.",
      "ALOBA, MELISSA MARIE L.",
      "BERNARDINO, JESSY RICH P.",
      "BOLO, ANGELA ELLAINE S.",
      "BUENO, HAZEL G.",
      "CANIMO, EZZIYAH JYLE C.",
      "CANIMO, JOANNA D. P.",
      "CARLOS, JAYZELLE ANNE M.",
      "CARPINA, ASHLEY NICOLE D. L.",
      "CARPIO, SAMANTHA ALISON D. P.",
      "DE LEON, REYZIE R.",
      "DELA CRUZ, DANIELA S.",
      "DELA PEÑA, LYKA MAE B.",
      "DELA PEÑA, SAIRAVELLE H.",
      "ESPENOCILLA, ROMINA B.",
      "GAMAO, ASHANTI COLLEN D. L. C.",
      "GENIZA, LOUISE JOY B.",
      "GONZALES, KIM CEE C.",
      "HERNANDEZ, JENNA MAY R.",
      "IGNACIO, JAYLINE R.",
      "LACANILAO, GREIZELLE ANNE M.",
      "LONTOC, MARY JOY M.",
      "MALLARI, LORRAINE T.",
      "MANALASTAS, JOAN L.",
      "MANARANG, ERICA M.",
      "MATIMTIM, PERLA JANE V.",
      "NAVARRO, ZHYLINE O.",
      "PALAD, ZANIAH ELLINE J.",
      "REYES, KRIZIA ROWELLAINE B.",
      "SALINAS, CALIAH YSABEL M.",
      "SAN MATEO, MAXENNE R.",
      "Adviser: Kei Ann L. Sanchez",
    ],
  },
  {
    room: "2nd room 11 - System",
    location: "Whitman, System and Integrity",
    floor: "1st Floor",
    students: [
      "CAO, JOHN DAVID M.",
      "CARPIO, ARWIN BENEDICT A.",
      "DAVID, DENNIS A.",
      "DELA CRUZ, ARDEAN JOSEPH A.",
      "DELA ROSA, RON DANIEL C.",
      "DELOS SANTOS, JAMES ROD R.",
      "GALIAS, RUSSEL C.",
      "MAGAT, EDUARDO JR. S.",
      "MIRANDA, IVAN M.",
      "PORCOPIO, JOBEN D.",
      "PUNO, ALEXIS D.",
      "SALAS, MICHAEL ANGELO D.",
      "SANGCAP, ALDREX S.",
      "SANTOS, ZAIJAN B.",
      "SUMAWAY, RAYZEN M.",
      "TAÑEDO, AARON JAMES C.",
      "VINUYA, KEN KHIAN A.",
      "ACUÑA, SAMANTHA NICOLE M.",
      "AREGLADO, AUDREY JAMAICA G.",
      "BERMUNDO, CHARLOTE C.",
      "CRUZ, ERAIZA L.",
      "CUNANAN, LALLAINE S.",
      "DE JESUS, BEA MAE S.",
      "DE LEON, JASMINE F.",
      "DELA CRUZ, MARY JANE B.",
      "DELA PEÑA, MA. MERCEDES A.",
      "DIMLA, PRINCESS MAE G.",
      "GUADAYO, CARYIL B.",
      "JULIAN, PAMELA AYESSA D.",
      "MANABAT, ALSHANA DHEIL E.",
      "MANALASTAS, JAMAICA NICOLE N.",
      "MANANGHAYA, ANGEL C.",
      "MANGULABNAN, RAYLYN M.",
      "MONTEROYO, ARLYCA P.",
      "PORTILLO, RUTH CHELA G.",
      "RIVERA, JANINA ALTHEA D. J.",
      "ROBLICO, MA. ELENA JOSEPHIA S.",
      "RODRIGUEZ, KRISCY MAE C.",
      "SANGCAP, REY-ANN C.",
      "SANGUYO, SHARLENE Q.",
      "SOLIMAN, NORILYN R.",
      "SOLITA, NICOLE S.",
      "SUPAN, MICA D.",
      "Adviser: Frenchy V. Kasingsing",
    ],
  },

  {
    room: "BSP Quarters",
    location: "Room 8",
    floor: "1st Floor",
    students: ["BSP Quarters"],
  },

  {
    room: "9 - Hemingway",
    location: "Faith and Hemingway",
    floor: "1st Floor",
    students: [
      "ALCANTARA, EARL ANGELO S.",
      "DAVID, AEDHAN RALF",
      "DELA TORRE, RONALD D.",
      "FAGELA, BEN ALEXANDER B.",
      "FAJURA, JIAN DREY",
      "GUEVARRA, KRIZ ZYREL O.",
      "HIPOLITO, DANIEL T.",
      "IGNACIO, ANGELO JAYSIE JR. C.",
      "MANARANG, MARK EZEKIEL",
      "SALONGA, RENZ F.",
      "SULIT, JACOB ISAAC L.",
      "VALERO, AERON P.",
      "VERALLO, AMIEL KIAN",
      "ARISTON, DENZIE FAYE M.",
      "CASTRO, JENICA M.",
      "DE GUZMAN, AMIE ROSE T.",
      "GALVEZ, CRISTINA JOLIE B.",
      "LALO, PAULINE JOY S.",
      "LUCIANO, ERICA C.",
      "MANGALUS, ROSE ANN O.",
      "PEREZ, ASHIANTY G.",
      "SALANDAGUIT, KRISTAL CATE T. (B.A.)",
      "SANGCAP, PRINCESS LORRAINE",
      "SANTIAGO, JASMINE L.",
      "Adviser: Madelyn Legaspi",
    ],
  },
  {
    room: "8 - Faith",
    location: "Faith and Hemingway",
    floor: "1st Floor",
    students: [
      "AQUINO, BRETT MATTHEW L.",
      "BERNAL, ALLEXIS AIDHEN A.",
      "BOLA, JAYSON ROYCE B.",
      "BURAYAG, INIGO MIGUEL M.",
      "CALMA, KURT JAYDEN R.",
      "CALUAG, JOHN GABRIEL B.",
      "CAO, RONALD A.",
      "CATACUTAN, STEPHEN ACE B.",
      "CERVANEZ, REYNALDO JAY T.",
      "DELA CRUZ, JAMES A.",
      "HERNANDEZ, ADRIAN JHON L.",
      "HERNANDEZ, RAIN RUSSEL G.",
      "HIPOLITO, MANUEL JR. T.",
      "LAPUZ, JACOB M.",
      "LARON, MARK ARKIEL G.",
      "MANALASTAS, DANIEL B.",
      "MARIANO, PRINCE JAMIER D.",
      "ORTAL, REYNOLD G.",
      "QUAS, JHOMER R.",
      "TURLA, JOHN EDIESON L.",
      "VINUYA, PATRICK S.",
      "YAMBAO, RENZ JOMEL D.",
      "BALIDOY, PERLY D.",
      "BARLAAN, SOFIA BERNADETTE M.",
      "BERBA, PRINCESS QUIEL D.",
      "BONDAD, RICA MAE L.",
      "CARPIO, ARA JANE A.",
      "CATALIG, ERIKA C.",
      "CRUZ, RICHAMAE",
      "DE GUZMAN, RHIZZIE MAE D.",
      "DENILA, ANGELICA JOY R.",
      "GATBONTON, KRISTA MAE L.",
      "MANGULABNAN, ALDRICH LHOYD A.",
      "MOLINA, ANDREA FAITH A.",
      "RAMOS, ALTHEA RHAINE C.",
      "SANTOS, AHKIRA JHANE M.",
      "SIMBILLO, NICHOLE M.",
      "TEOMERA, PRECIOUS HANNAH S.",
      "VANZUELA, MA ELYZA C.",
      "VELASQUEZ, KEZIAH ANN D.",
      "VILLAREAL, RAINNE YSABELLE M.",
      "Adviser: Maricel V. Aquino",
    ],
  },

  {
    room: "1st room, 7 - Thailand",
    location: "Building 8",
    floor: "1st Floor",
    students: [
      "AQUINO, YHANNEL E.",
      "CALMA, EURI SKY B.",
      "CANASA, ARJER L.",
      "CANIMO, PRINCE RYLEE D.",
      "CASTRO, YOHAN WESLEY S.",
      "DAYAO, RIAY F.",
      "DE GUZMAN, JOHN DANIEL D.",
      "DE GUZMAN, PRINCE KRISTIAN ANDY V.",
      "DE JESUS, RICH IVAN M.",
      "DELA CRUZ, CYRUS JORDAN S.",
      "DELA CRUZ, JAMES BENEDICT V.",
      "DELA PENA, MARK ANDREI A.",
      "DONGGO-AN, STEPHEN ADRIAN",
      "LLOVIA, JHEO D.",
      "MALAWIT, LUIS GABRIEL P.",
      "MANIAUL, JEURZEL W.",
      "NOGOY, STEPHEN ADRIEL P.",
      "PACHECO, JAIRO Y.",
      "PADILLA, NIGEL R.",
      "SADIE, CEDRICK MANUEL G.",
      "SOLIMAN, JOHN ROMULO G.",
      "SUNGA, ADONIS CAEZAR D.",
      "TULIAO, JOHN ABEGNALE R.",
      "VERDE, KAYDEN LIAM",
      "ALIGORA, RHYZZ LAUREEN F.",
      "BALAGTAS, SHANEL D.",
      "BALTAZAR, JULIEIANNA MARIE C.",
      "BRIONES, LEANNA RAINE M.",
      "BUCO, SHANESSA AQUENE C.",
      "CUEVAS, ANGEL MADICON L.",
      "CUNANAN, MARIA FRANCHESKA A.",
      "CUYCO, JILL ANNE B.",
      "DELA PEÑA, ASTRID B.",
      "DERIT, VIANKA GRACE C.",
      "DINGALAN, PRECIOUS JAMELA S.",
      "GONZALES, FRANCINE GERRIE R.",
      "GUEVARRA, SOPHIA YSABELLE G.",
      "GUTIERREZ, SHAKIRA MAE E.",
      "LAMADRID, KHLOE YANI M.",
      "LOBO, RHEIGN ALTHEA S.",
      "MAGAT, LEIRA JOY B.",
      "MANANGU, KASSIDIE CHLOE M.",
      "SALAZAR, APRIL ROSE B.",
      "SANTOS, LYCAH MARIZ P.",
      "UMALI, KAITHLYN ANN S.",
      "VALDEZ, TYRA RHINEA D.",
      "Adviser: Edlyn B. Cao",
      "7 - Thailand",
    ],
  },
  {
    room: "1st room, 8 - Hope",
    location: "Building 8",
    floor: "1st Floor",
    students: [
      "AGRAVANTE, JEROME D.",
      "AGUILAR, CARL CYRUS D.",
      "AGUINALDO, ANGELITO A.",
      "AQUINO, CARLOS MIGUEL F.",
      "AQUINO, MARC EIDRICH S.",
      "BALINGIT, JOSEPH P.",
      "CASTILLO, JOHN PATRICK",
      "CASTRO, NAITHAN",
      "DAVID, RENE EMMANUEL D.",
      "EVANGELISTA, LOUIS GABRIEL G.",
      "FRAGO, KIAN D.",
      "FRANCISCO, RHOHAN CARL L.",
      "GUANZING, WARREN M.",
      "GUEVARRA, IRIS M.",
      "JUAN, MARK ANDREI B.",
      "NACU, JOHN KIAN M.",
      "NAVARRO, JAMIER H.",
      "NAYANGA, NIGEL REY P.",
      "SANTIAGO, NIEL AERO C.",
      "SANTOS, DANIEL D.",
      "SANTOS, KIAN C.",
      "TOLENTINO, JHAY LORD M.",
      "ALARCON, JASMINE T.",
      "AMANTE, JOCEL L.",
      "AQUINO, AYA NAUREEN G.",
      "BASA, KATE CELINE R.",
      "BRIONES, MARIA ANTHONIA T.",
      "CAHANDING, MAXINE JOY S.",
      "CAO, ABEGAIL ROSE D.",
      "CARIÑO, RAILYN R.",
      "DE GUZMAN, KHYLIE NICOLE A.",
      "DELA PEÑA, SAMANTHA JHANE L.",
      "ENCINA, JOHNIELLA SHANE D.",
      "JALMANZAR, JOYCE ANN",
      "LAZARO, CLOUIE ANNE C.",
      "MALLARI, LIANA ELAINE T.",
      "MALLARI, RIANA LYN M.",
      "PARUNGAO, JONALYN A.",
      "PAZ, RHEA ANGELA G.",
      "SANTOS, CELINA D.",
      "SARMIENTO, ANDREA GALE S.",
      "Adviser: Larrie M. Del Rosario",
      "8 - Hope",
    ],
  },
  {
    room: "2nd room, 7 - Malaysia",
    location: "Building 8",
    floor: "1st Floor",
    students: [
      "BERGADO, JAMES C.",
      "BLAS, RENIEL JASSAM C.",
      "CAO, ATHAN R.",
      "CATACUTAN, FROILAN D.",
      "CELSO, DARWIN YURI M.",
      "CUNANAN, PAUL DANIEL D.",
      "DE VERA, ABRIL",
      "FRENILLA, FLORBERTO JR. L.",
      "HIPOLITO, KEVIN MICHAEL D.",
      "LOZANO, JERALD MATTHEW R.",
      "MAGAT, JOSHUA C.",
      "MANALASTAS, RENZ LOUIE D.",
      "MANGALUS, JUSTINE O.",
      "PANGAN, ADRIAN A.",
      "ROQUETA, RAFAEL JAMES P.",
      "SANGUYO, JOHN ANDREI C.",
      "SANTIAGO, AARON MARK M.",
      "SANTOS, JHAIRELLE E.",
      "SARAGOZA, DANIROMME ISAIAH S.",
      "TABING, JOHN ANDREI",
      "TADEO, JOHN MATTHEW L.",
      "YOCTE, CHRISTIAN JAMES C.",
      "AQUINO, MICHAELA",
      "BALAJADIA, ALTEA ZAMANTHA S.",
      "BALAJADIA, AVYGAIL BRIZ",
      "BAUTISTA, GEMARIE V.",
      "CALMA, ELIZE JHADE P.",
      "CORDERO, RAIVILHINE D.",
      "CRUZ, MIKAYLA EDVANGAIL E.",
      "DAVID, MICHELLE T.",
      "DELOS SANTOS, CRISTALYN D.",
      "FRANCISCO, BEA LORAIBE D.",
      "IGNACIO, ARIANE D.",
      "IGNACIO, SYRENE JADE F.",
      "LAXAMANA, KEITH ALAIZA E.",
      "LEONARDO, SHANE D.",
      "LIWAG, RANDZEL MEI V.",
      "MALLARI, JAY ANN P.",
      "MOJICA, JANNELA C.",
      "NARCISO, JASMINE C.",
      "PANGAN, AIRISH S.",
      "PERADO, ALTHEA P.",
      "PEREZ, BERNALYN D.",
      "PUNO, PRINCESS DHAINE",
      "SAGUM, ZYRILLE D.",
      "SULIT, CHRISTY JANELA N.",
      "Adviser: Ace Guevarra",
      "7 - Malaysia",
    ],
  },
  {
    room: "2nd room 8 - Honor",
    location: "Building 8",
    floor: "1st Floor",
    students: [
      "ALINEA, JOHN APRIAN LEE P.",
      "BELEN, CYRIL RAMCEZ D.",
      "BROSAS, CRIS JORDAN P.",
      "CALWAG, XIAN REY O.",
      "CAO, CJ T.",
      "CAOAGDAN, LANCE JUSTIN P.",
      "CASTRO, CYRUS KIAN R.",
      "CHICO, SHERED S.",
      "DELA ROSA, JHARED A.",
      "JOSON, NATE FRANCIS S.",
      "LELIS, NATHAN MITZI Q.",
      "LEONARDO, KIM TAKGO B.",
      "LORENZO, PRINCE ANDREW M.",
      "MANALASTAS, KIYOSHI Y.",
      "MANGULABNAN, JHAIRYL OWEN C.",
      "MATALANG, JAN CARWYN M.",
      "MORILLO, MIGUEL ANDREW N.",
      "PADILLA, JOSHUA C.",
      "PALO, GMARK H.",
      "SALAS, MARTIN SHANE R.",
      "SANGUYO, ZYMOND SAM M.",
      "SANTANA, REN CYRUS V.",
      "VIDAR, JOHN PAUL G.",
      "BININI, KRIZELLE ROSE D.",
      "BUTIAL, ERICH P.",
      "CASYAO, JASMIN JOY D.",
      "CRUZ, CRYSTEL ANN B.",
      "DAVID, SOPHIA TIFFANY E.",
      "DE GUZMAN, GIVEN GRACE D.",
      "DELA CRUZ, ASHLEY D.",
      "DELOS SANTOS, MIKAELA M.",
      "GATBONTON, ANGELICA D.",
      "GREGORIO, GENNY C.",
      "GULAPA, KATE EZRA M.",
      "HERNANDEZ, JASMINE R.",
      "LARIN, KANNERY C.",
      "MANGULABNAN, TRISHIA MAE S.",
      "MUSNI, CHELSSIE C.",
      "PELAYO, JANE ANDREA G.",
      "TRASONA, JANISSA N.",
      "VIOLA, MILKCA FAITH C.",
      "Adviser: Robin M. Reyes",
      "8 - Honor",
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
      "11 - System",
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
      `,
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
        `,
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
      `,
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

  // Hide all arrows
  arrows.forEach((arrow) => {
    arrow.style.display = "none";
  });
}

document.addEventListener("click", function (e) {
  if (!e.target.closest(".search-container")) {
    searchResults.style.display = "none";
  }
});
