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

🔁 Frontend Restart — Week 2: Arrays Deep Dive, Fetch & Real Backend Connections
Continuing the challenge: understand *why* things work, not just copy-paste them. Week 1 built the DOM/event foundation. Week 2 connects that foundation to real async data and the patterns you'll actually use in LibraryHub.

Rules
✅ 1 hour per day
✅ Type everything by hand — no copying
✅ Use MDN Docs when stuck — not AI
✅ Sit with a bug for at least 20 minutes before googling
✅ Check everything in the browser Console (F12) and Network tab

File Structure
frontend-restart/
│
└── week2/
    ├── day1/
    │   └── index.html   ← Closures inside loops
    ├── day2/
    │   └── index.html   ← Event delegation
    ├── day3/
    │   └── index.html   ← fetch() & async/await basics
    ├── day4/
    │   └── index.html   ← Handling real API responses & errors
    ├── day5/
    │   └── index.html   ← dataset & syncing UI state
    ├── day6/
    │   └── index.html   ← Mini project — fetch + render + delegate (no AI)
    └── day7/
        └── index.html   ← Review & connect to real backend

Day 1 — Closures Inside Loops
Concepts: closures, `var` vs `let` scoping, why loop variables "stick" to the wrong value

Tasks:
1. Build a list of 5 buttons using a `for` loop with `var i`. Each button's click should log its own index.
2. Click each button. Do they log the index you expect, or do they all log the same number?
3. Change `var i` to `let i` and try again. What changed?
4. Now do the same thing with `.forEach()` instead of a `for` loop — does it have the same problem as `var`? Why or why not?

Starter template:
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Day 1 - Closures in Loops</title>
</head>
<body>
  <div id="buttons"></div>
</body>
<script>
  const container = document.getElementById("buttons");

  // Try this first with var, then switch to let
  for (var i = 0; i < 5; i++) {
    const btn = document.createElement("button");
    btn.textContent = "Button " + i;
    btn.addEventListener("click", function() {
      console.log("You clicked button index:", i);
    });
    container.appendChild(btn);
  }
</script>
</html>
```

What to understand by end of day:
- Why `var` is function-scoped and `let` is block-scoped
- Why each loop iteration with `let` creates a *new* variable binding, but `var` reuses one shared binding
- Why this exact bug is the #1 reason dynamically-created buttons "click the wrong item" in real apps

---

Day 2 — Event Delegation
Concepts: event bubbling (from Week 1 Day 4), one listener vs many, `event.target`, `.closest()`

Tasks:
1. Take your Day 1 button list. Instead of attaching a listener to each button, attach ONE listener to the parent `#buttons` div.
2. Inside that single listener, use `event.target` to figure out which button was clicked.
3. Now make it so clicking anywhere *inside* a button (like an icon you add inside it) still correctly identifies the button — use `.closest()`.
4. Dynamically add 3 more buttons *after* the page loads (via a separate "Add Button" button). Do they still work with your delegated listener without adding new code? Why?

Starter template:
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Day 2 - Event Delegation</title>
</head>
<body>
  <button id="add-btn">Add Button</button>
  <div id="buttons"></div>
</body>
<script>
  const container = document.getElementById("buttons");
  let count = 0;

  function addButton() {
    const btn = document.createElement("button");
    btn.textContent = "Button " + count;
    btn.dataset.index = count;
    container.appendChild(btn);
    count++;
  }

  // Pre-add a few
  addButton(); addButton(); addButton();

  document.getElementById("add-btn").addEventListener("click", addButton);

  // ONE listener on the parent instead of one per button
  container.addEventListener("click", function(event) {
    const clickedBtn = event.target.closest("button");
    if (!clickedBtn) return;
    console.log("Clicked button with index:", clickedBtn.dataset.index);
  });
</script>
</html>
```

What to understand by end of day:
- Why delegation automatically works for elements added *after* the listener was set up (this is the part that trips up beginners)
- Why `.closest()` matters when the click target is a child element (like an `<i>` icon) inside your button
- The tradeoff: delegation is more efficient for large/dynamic lists, but slightly harder to read for beginners

---

Day 3 — fetch() & async/await Basics
Concepts: Promises, `async`/`await`, `.then()` vs `await`, `response.json()`

Tasks:
1. Use a free public API (e.g. `https://jsonplaceholder.typicode.com/users`) to fetch a list of fake users.
2. Write it once using `.then()` chains.
3. Rewrite the *same* function using `async`/`await`. Compare readability.
4. Log the raw `response` object before calling `.json()` — what does it actually contain? What is `response.ok`, `response.status`?

Starter template:
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Day 3 - Fetch Basics</title>
</head>
<body>
  <ul id="user-list"></ul>
</body>
<script>
  // Version 1: .then() chains
  function loadUsersThen() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(function(response) {
        console.log("status:", response.status, "ok:", response.ok);
        return response.json();
      })
      .then(function(users) {
        console.log(users);
      })
      .catch(function(error) {
        console.log("Error:", error);
      });
  }

  // Version 2: async/await — rewrite the same logic yourself
  async function loadUsersAwait() {
    // TODO: try/catch, await fetch, check response.ok, await response.json()
  }

  loadUsersThen();
</script>
</html>
```

What to understand by end of day:
- `async`/`await` is just syntax sugar over Promises — same thing, easier to read top-to-bottom
- Why `fetch()` does NOT throw an error on 404/401/500 — only on network failure — and why you must check `response.ok` yourself
- Why you need `await` twice: once for the network response, once for parsing the JSON body

---

Day 4 — Handling Real API Responses & Errors
Concepts: `try/catch`, status codes, guard clauses, avoiding repeated auth-check code

Tasks:
1. Fetch a URL that doesn't exist (typo the endpoint) and observe what happens without a `try/catch`.
2. Add `try/catch` around it. What does the `catch` block receive?
3. Simulate a 401 by fetching a URL that requires auth you don't have. Write a guard clause that checks `response.status` and handles it.
4. Refactor: since you'll repeat the same 401/403 check in many functions, write ONE reusable helper function that takes a `response` and returns `true`/`false` for "should I redirect to login."

Starter template:
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Day 4 - Errors & Guard Clauses</title>
</head>
<body></body>
<script>
  // Reusable auth guard — call this at the top of every fetch function
  function isUnauthorized(response) {
    return response.status === 401 || response.status === 403;
  }

  async function loadData(url) {
    try {
      const response = await fetch(url);

      if (isUnauthorized(response)) {
        console.log("Redirect to login here");
        return null;
      }

      if (!response.ok) {
        console.log("Request failed with status:", response.status);
        return null;
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.log("Network or parsing error:", error);
      return null;
    }
  }

  loadData("https://jsonplaceholder.typicode.com/nonexistent-endpoint");
</script>
</html>
```

What to understand by end of day:
- The difference between a network error (caught by `catch`) and an HTTP error status (you must check manually)
- Why pulling repeated logic into a small helper function (`isUnauthorized`) is a DRY / clean-code practice
- How this maps directly to the repeated `401 || 403` blocks in your LibraryHub `script.js`

---

Day 5 — dataset & Syncing UI State
Concepts: `data-*` attributes, `element.dataset`, keeping JS state and DOM state in sync

Tasks:
1. Render a list of 5 "book" cards from a hardcoded array, each with a `data-book-id` attribute matching the book's id.
2. Add a "favorite" button per card. Clicking it should toggle a CSS class AND update an in-memory array of favorite ids — using `dataset` to know which book was clicked.
3. Simulate reloading the page (call your render function again) and make sure buttons whose id is in your favorites array show as "favorited" immediately, without re-clicking.
4. Bonus: do this with event delegation (from Day 2) instead of one listener per card.

Starter template:
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Day 5 - dataset & State Sync</title>
  <style>
    .favorited { color: red; font-weight: bold; }
  </style>
</head>
<body>
  <div id="grid"></div>
</body>
<script>
  const books = [
    { id: 1, name: "Clean Code" },
    { id: 2, name: "Effective Java" },
    { id: 3, name: "You Don't Know JS" },
  ];
  let favoriteIds = [2]; // pretend this came from the server

  function render() {
    const grid = document.getElementById("grid");
    grid.innerHTML = "";

    books.forEach(book => {
      const card = document.createElement("div");
      card.dataset.bookId = book.id;
      card.innerHTML = `
        <span>${book.name}</span>
        <button class="fav-btn">♥</button>
      `;

      const favBtn = card.querySelector(".fav-btn");
      if (favoriteIds.includes(book.id)) {
        favBtn.classList.add("favorited");
      }

      grid.appendChild(card);
    });
  }

  // TODO: add ONE delegated click listener on #grid
  // - find the closest data-book-id from the click
  // - toggle it in favoriteIds
  // - toggle the "favorited" class on that button

  render();
</script>
</html>
```

What to understand by end of day:
- `dataset.bookId` reads/writes the `data-book-id` HTML attribute — it's how you attach an id to a DOM element without a global lookup
- Why re-running `render()` after state changes (instead of manually poking the DOM) keeps your UI and data in sync — this is the same idea behind your `loadBooks()` re-render pattern
- Why you convert ids to `String()` when comparing (`dataset` values are always strings, but your array might hold numbers)

---

Day 6 — Mini Project (No AI)
Goal: Build a small "book favorites" app from scratch — no copying from previous days, no AI.

What to build:
- Fetch a list of items from `https://jsonplaceholder.typicode.com/posts?_limit=6` (pretend these are "books")
- Render them as cards using a loop (no `innerHTML +=` string concatenation across multiple appends — build clean elements)
- Add a favorite toggle button per card using **event delegation**, not per-card listeners
- Use `try/catch` and a guard clause for failed responses
- A counter showing how many are currently favorited

Rules:
- Write it completely from memory
- If stuck, check MDN — not AI
- It doesn't have to look good. It just has to work.

What to notice: which parts felt slow — closures, delegation, or the fetch/error handling? Write it down, that's your focus for reviewing LibraryHub's actual code next.

---

Day 7 — Review & Connect to Real Backend
Goal: Take everything from Week 2 and map it onto your actual LibraryHub `script.js`.

Tasks:
1. Open your real `renderBooks()` function. Identify every spot where a listener is attached *inside* the `forEach` loop. Pick ONE (start with `.btn-fav`) and refactor it to use event delegation on `#books-grid` instead.
2. Find every repeated `if(response.status === 401 || response.status === 403)` block across your file. Replace them with the `isUnauthorized(response)` helper pattern from Day 4.
3. In `loadBooks()`, you `await` the books fetch, then separately `await loadFavorite()`. Look up `Promise.all()` — could these two independent fetches run at the same time instead of one after another? Try rewriting it.
4. Use DevTools Network tab: throttle your connection to "Slow 3G" and click around your real app. Does anything break or feel broken while waiting? Where would a loading state help?

Reflection — write down answers to these:
- Which Week 2 concept mattered most for understanding your *own* LibraryHub code?
- After refactoring `.btn-fav` to use delegation, did the app behave any differently, or just read cleaner?
- What's your Week 3 focus list? (e.g. loading states, debouncing search input, modal state management)

Progress Tracker
Day | Topic | Status
--- | --- | ---
Day 1 | Closures inside loops | ⬜
Day 2 | Event delegation | ⬜
Day 3 | fetch() & async/await basics | ⬜
Day 4 | Handling real API responses & errors | ⬜
Day 5 | dataset & syncing UI state | ⬜
Day 6 | Mini project (no AI) | ⬜
Day 7 | Review & connect to real backend | ⬜

Change ⬜ to ✅ as you complete each day.

Resources
- MDN Web Docs — your main reference, not AI
- JavaScript.info — Promises, async/await, and closures chapters
- Browser DevTools — Network tab (throttling) and Console
- jsonplaceholder.typicode.com — free fake API for practicing fetch without touching your real backend

Week 3 coming after Week 2 is done — debouncing input, loading/skeleton states, and modal state management.
