# 🔁 Frontend Restart — Week 1: JavaScript Fundamentals

> **Personal challenge:** Stop vibe-coding. Learn frontend the same way I learned backend — from scratch, with understanding.

---

## Rules

- ✅ 1 hour per day
- ✅ Type everything by hand — no copying
- ✅ Use [MDN Docs](https://developer.mozilla.org) when stuck — not AI
- ✅ Sit with a bug for at least **20 minutes** before googling
- ✅ Check everything in the browser **Console (F12)**

---

## File Structure

```
frontend-restart/
│
└── week1/
    ├── day1/
    │   └── index.html   ← Variables, types & functions
    ├── day2/
    │   └── index.html   ← DOM — selecting & reading
    ├── day3/
    │   └── index.html   ← DOM — changing things
    ├── day4/
    │   └── index.html   ← Event listeners
    ├── day5/
    │   └── index.html   ← Arrays & loops on the DOM
    ├── day6/
    │   └── index.html   ← Mini project (no AI)
    └── day7/
        └── index.html   ← Review & debug day
```

Each file is a single `index.html` with HTML, a `<style>` tag, and a `<script>` tag. No frameworks. No build tools. Just the browser.

---

## Day 1 — Variables, Types & Functions

**Concepts:** `let`, `const`, strings, numbers, booleans, functions, arrow functions, `console.log()`

**Tasks:**
1. Open `day1/index.html` in your browser
2. Declare 5 variables using `let` and `const` — mix strings, numbers, and booleans
3. Write 3 functions: one that returns a value, one with a parameter, one arrow function
4. Log every result with `console.log()` and verify in the Console (F12)

**Starter template:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Day 1 - Variables & Functions</title>
</head>
<body>
  <h1>Day 1 — Open the Console (F12)</h1>
</body>
<script>
  // 1. Variables
  const studentName = "Lei";
  let age = 20;
  let isEnrolled = true;

  // 2. Function that returns a value
  function greet(name) {
    return "Hello, " + name;
  }

  // 3. Function with a parameter
  function addScore(a, b) {
    return a + b;
  }

  // 4. Arrow function
  const double = (n) => n * 2;

  // Check your work
  console.log(greet(studentName));
  console.log(addScore(85, 90));
  console.log(double(5));
  console.log(age, isEnrolled);
</script>
</html>
```

**What to understand by end of day:**
- Difference between `let` and `const`
- Why functions exist (reusable logic)
- Arrow function syntax vs regular function syntax

---

## Day 2 — DOM: Selecting & Reading

**Concepts:** `getElementById`, `querySelector`, `querySelectorAll`, `textContent`, `value`, `innerHTML`

**Tasks:**
1. Build a small HTML page: one heading, two paragraphs, one input, one button
2. Select each element using all three selector methods — know when to use which
3. Read values: `element.textContent`, `element.value`, `element.innerHTML`
4. Log each to the console — understand the difference between them

**Starter template:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Day 2 - Selecting the DOM</title>
</head>
<body>
  <h1 id="main-title">Student Portal</h1>
  <p class="info">Welcome to the dashboard.</p>
  <p class="info">Check your grades below.</p>
  <input type="text" id="search-input" placeholder="Search student...">
  <button id="search-btn">Search</button>
</body>
<script>
  // getElementById
  const title = document.getElementById("main-title");
  console.log(title.textContent);

  // querySelector (grabs the FIRST match)
  const firstParagraph = document.querySelector(".info");
  console.log(firstParagraph.textContent);

  // querySelectorAll (grabs ALL matches — returns a NodeList)
  const allParagraphs = document.querySelectorAll(".info");
  console.log(allParagraphs.length); // how many?

  // reading input value
  const input = document.getElementById("search-input");
  console.log(input.value); // empty for now

  // innerHTML vs textContent — what's the difference?
  console.log(title.innerHTML);
  console.log(title.textContent);
</script>
</html>
```

**What to understand by end of day:**
- `getElementById` vs `querySelector` — which is faster to type, which is more flexible?
- Why `querySelectorAll` returns a NodeList, not an array
- When to use `textContent` vs `innerHTML` (hint: one is safer)

---

## Day 3 — DOM: Changing Things

**Concepts:** `textContent`, `classList.toggle()`, `createElement`, `appendChild`, `remove()`, `element.style`

**Tasks:**
1. Use the same page from Day 2 — now *change* things instead of just reading them
2. Update text content, swap a CSS class with `classList.toggle()`
3. Create a new element with `document.createElement()` and add it to the page
4. Remove an element with `element.remove()`
5. Change a style directly via `element.style` — then redo it using a CSS class instead, and understand why the class approach is better

**Starter template:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Day 3 - Changing the DOM</title>
  <style>
    .highlight {
      background-color: yellow;
      font-weight: bold;
    }
  </style>
</head>
<body>
  <h1 id="title">Student Portal</h1>
  <p id="status">Status: inactive</p>
  <ul id="student-list">
    <li>Anna</li>
    <li>Ben</li>
  </ul>
  <button onclick="changeTitle()">Change Title</button>
  <button onclick="toggleHighlight()">Toggle Highlight</button>
  <button onclick="addStudent()">Add Student</button>
  <button onclick="removeFirst()">Remove First</button>
</body>
<script>
  // Change text content
  function changeTitle() {
    document.getElementById("title").textContent = "LCUP Dashboard";
  }

  // Toggle a CSS class (better than element.style)
  function toggleHighlight() {
    document.getElementById("status").classList.toggle("highlight");
  }

  // Create and append a new element
  function addStudent() {
    const li = document.createElement("li");
    li.textContent = "New Student";
    document.getElementById("student-list").appendChild(li);
  }

  // Remove an element
  function removeFirst() {
    const firstItem = document.querySelector("#student-list li");
    if (firstItem) firstItem.remove();
  }
</script>
</html>
```

**What to understand by end of day:**
- Why `classList.toggle()` is better than `element.style.color = "red"`
- The difference between `appendChild` and `innerHTML +=` (one is safer and more performant)
- How `createElement` + `appendChild` maps to what you've been doing in LCUP

---

## Day 4 — Event Listeners

**Concepts:** `addEventListener`, click/input events, `event.target`, `event.stopPropagation()`, event bubbling

**Tasks:**
1. Add a click listener to a button — log a message when clicked
2. Add an `input` event to a text field — log its value every keystroke
3. Learn event bubbling: click a child element, see the parent listener also fire. Then use `event.stopPropagation()` and understand why it matters
4. Use `event.target` to identify which item was clicked inside a list

**Starter template:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Day 4 - Event Listeners</title>
  <style>
    .item { padding: 8px; border: 1px solid #ccc; margin: 4px; cursor: pointer; }
    .parent { background: #f0f0f0; padding: 12px; }
  </style>
</head>
<body>
  <h2>Task 1: Button click</h2>
  <button id="main-btn">Click me</button>

  <h2>Task 2: Input listener</h2>
  <input type="text" id="name-input" placeholder="Type something...">

  <h2>Task 3: Event bubbling</h2>
  <div class="parent" id="parent-div">
    Parent
    <button id="child-btn">Child Button</button>
  </div>

  <h2>Task 4: event.target on a list</h2>
  <ul id="grade-list">
    <li class="item">Math — 92</li>
    <li class="item">Science — 88</li>
    <li class="item">English — 95</li>
  </ul>
</body>
<script>
  // Task 1
  document.getElementById("main-btn").addEventListener("click", function() {
    console.log("Button was clicked!");
  });

  // Task 2
  document.getElementById("name-input").addEventListener("input", function(event) {
    console.log("Current value:", event.target.value);
  });

  // Task 3 — bubbling
  document.getElementById("parent-div").addEventListener("click", function() {
    console.log("Parent was clicked");
  });
  document.getElementById("child-btn").addEventListener("click", function(event) {
    console.log("Child was clicked");
    // try commenting this out and see what happens
    event.stopPropagation();
  });

  // Task 4 — event.target
  document.getElementById("grade-list").addEventListener("click", function(event) {
    if (event.target.classList.contains("item")) {
      console.log("You clicked:", event.target.textContent);
    }
  });
</script>
</html>
```

**What to understand by end of day:**
- What event bubbling is and why it happens
- Why attaching ONE listener to a parent (event delegation) is better than attaching listeners to every child
- The difference between `event.target` and `this` inside a listener

---

## Day 5 — Arrays & Loops on the DOM

**Concepts:** arrays, `forEach`, `createElement`, dynamic rendering, add/remove from array

**Tasks:**
1. Create an array of 5 student names. Loop with `forEach` and render each as an `<li>` — no `innerHTML` string building
2. Add a delete button next to each name. When clicked, remove that item from the array and re-render
3. Add an input + button to add new names dynamically

**Starter template:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Day 5 - Arrays & DOM</title>
  <style>
    li { display: flex; align-items: center; gap: 10px; padding: 6px 0; }
    button { cursor: pointer; }
  </style>
</head>
<body>
  <h2>Student List</h2>
  <input type="text" id="new-name" placeholder="Enter student name">
  <button onclick="addStudent()">Add</button>
  <ul id="list"></ul>
</body>
<script>
  let students = ["Ana", "Ben", "Carla", "Dan", "Eva"];

  function render() {
    const list = document.getElementById("list");
    list.innerHTML = ""; // clear before re-rendering

    students.forEach(function(name, index) {
      const li = document.createElement("li");

      const span = document.createElement("span");
      span.textContent = name;

      const btn = document.createElement("button");
      btn.textContent = "Delete";
      btn.addEventListener("click", function() {
        students.splice(index, 1); // remove from array
        render(); // re-render the list
      });

      li.appendChild(span);
      li.appendChild(btn);
      list.appendChild(li);
    });
  }

  function addStudent() {
    const input = document.getElementById("new-name");
    const name = input.value.trim();
    if (name) {
      students.push(name);
      input.value = "";
      render();
    }
  }

  render(); // initial render
</script>
</html>
```

**What to understand by end of day:**
- Why you clear the list before re-rendering (and what happens if you don't)
- How this pattern — store data in an array, render from it — is the foundation of how React works
- Why `splice` mutates the original array (and why that matters)

---

## Day 6 — Mini Project (No AI)

**Goal:** Build a student list app **from scratch** — no copying from previous days, no AI.

**What to build:**
- A text input and an "Add" button
- A list that renders student names dynamically
- A "Delete" button next to each name
- A counter showing how many students are in the list

**Rules:**
- Write it completely from memory
- If stuck, check MDN — not AI
- It doesn't have to look good. It just has to work.

**What to notice:**
The parts that feel slow to write are the parts you haven't actually internalized yet. Write those down — that's your Week 2 focus list.

---

## Day 7 — Review & Debug Day

**Goal:** Break your Day 6 project on purpose, then fix it using DevTools.

**Tasks:**
1. Remove a `querySelector` — see what error appears in the Console
2. Misspell an event name (`"clik"` instead of `"click"`) — why does nothing happen?
3. Delete a closing `}` — watch the whole script fail silently
4. Use the **Sources tab** in DevTools to set a breakpoint and step through your code line by line

**Reflection — write down answers to these:**
- What 3 things do you now understand that you didn't at the start of the week?
- What felt slow or unclear? (This is your Week 2 list)
- Which day was hardest and why?

---

## Progress Tracker

| Day | Topic | Status |
|-----|-------|--------|
| Day 1 | Variables, types & functions | ⬜ |
| Day 2 | DOM — selecting & reading | ⬜ |
| Day 3 | DOM — changing things | ⬜ |
| Day 4 | Event listeners | ⬜ |
| Day 5 | Arrays & loops on the DOM | ⬜ |
| Day 6 | Mini project (no AI) | ⬜ |
| Day 7 | Review & debug day | ⬜ |

> Change ⬜ to ✅ as you complete each day.

---

## Resources

- [MDN Web Docs](https://developer.mozilla.org) — your main reference, not AI
- [JavaScript.info](https://javascript.info) — best free JS learning resource
- Browser DevTools — F12, Console tab is your best friend

---

*Week 2 coming after Week 1 is done — arrays deep dive, fetch(), and connecting to a real backend.*
