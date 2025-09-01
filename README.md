# BMI Pro — Body Mass Index Calculator

> Lightweight • Deterministic • Developer-friendly

[![JavaScript](https://img.shields.io/badge/Language-JavaScript-yellow)]() [![Node.js](https://img.shields.io/badge/Platform-Node.js-green)]() [![License-MIT](https://img.shields.io/badge/License-MIT-lightgrey)]()

---

## Project snapshot (one-liner)

**BMI Pro** is a small, well-engineered Body Mass Index calculator implemented in JavaScript, with HTML demo and a Python reference port. The repository is organized and documented to present a polished, production-ready micro-utility suitable for demos, portfolios, and embeddable services.

---

## Table of contents

* [What it does](#what-it-does)
* [Highlights](#highlights)
* [Demo / Screenshots](#demo--screenshots)
* [Quick start](#quick-start)

  * [Web (HTML) usage](#web-html-usage)
  * [Node.js usage](#nodejs-usage)
  * [Python usage (reference port)](#python-usage-reference-port)
* [API & contract](#api--contract)
* [BMI categories (reference)](#bmi-categories-reference)
* [Design notes & rationale](#design-notes--rationale)
* [Suggested enhancements & roadmap](#suggested-enhancements--roadmap)
* [Testing & CI recommendations](#testing--ci-recommendations)
* [Contributing](#contributing)
* [License](#license)

---

## What it does

* Computes Body Mass Index (BMI) using `weight (kg)` and `height (m)` with explicit input validation.
* Returns a human-friendly classification message (`underweight` / `normal weight` / `overweight`).
* Minimal, dependency-free code intended to be embedded in web pages, Node.js apps, or small services.

---

## Highlights

* ✅ **Explicit input validation** (type checks and clear error messages)
* ✅ **Deterministic output** with consistent rounding
* ✅ **Small, single-purpose API** for easy reuse
* ✅ **Well-documented** with examples and test suggestions

---

## Demo / Screenshots

Place runtime screenshots in `Assets/` and reference them like this:

```md
![Run example](Assets/bmi_run.png)
*Figure — Node.js output example*
```

---

## Quick start

### Web (HTML) usage

Create `index.html` and include `bmi.js` (the JavaScript function). Example UI snippet for demonstration:

```html
<!doctype html>
<html>
<head>
  <meta charset="utf-8" />
  <title>BMI Pro — Demo</title>
  <style>
    body { font-family: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif; padding: 2rem; background:#f7f9fc }
    .card { max-width:420px; margin:auto; padding:1.25rem; border-radius:10px; box-shadow:0 6px 26px rgba(16,24,40,0.06); background:#fff }
    input { width:100%; padding:.5rem; margin:.25rem 0; border-radius:6px; border:1px solid #e6eef8 }
    button { padding:.6rem 1rem; border-radius:8px; cursor:pointer; background:#0066ff; color:#fff; border:none }
    pre { background:#0b1220; color:#d9f0ff; padding:1rem; border-radius:6px; overflow:auto }
  </style>
</head>
<body>
  <div class="card">
    <h2>BMI Pro — Demo</h2>
    <label>Weight (kg): <input id="weight" type="number" step="0.1" /></label>
    <label>Height (m): <input id="height" type="number" step="0.01" /></label>
    <button id="calc">Calculate BMI</button>
    <pre id="result"></pre>
  </div>

  <script src="./bmi.js"></script>
  <script>
    document.getElementById('calc').addEventListener('click', () => {
      const w = parseFloat(document.getElementById('weight').value);
      const h = parseFloat(document.getElementById('height').value);
      try {
        const msg = calculateBMI(w, h); // function defined in bmi.js
        document.getElementById('result').textContent = msg;
      } catch (err) {
        document.getElementById('result').textContent = 'Error: ' + err.message;
      }
    });
  </script>
</body>
</html>
```

### Node.js usage

File: `bmi.js` (module export)

```js
/**
 * Calculates Body Mass Index (BMI) and returns a health message.
 * @param {number} weight - Weight in kilograms
 * @param {number} height - Height in meters
 * @returns {string} BMI message
 */
function calculateBMI(weight, height) {
  if (typeof weight !== "number" || typeof height !== "number") {
    throw new Error("Invalid input: weight and height must be numbers.");
  }

  const bmi = weight / Math.pow(height, 2);
  const roundedBMI = Math.round(bmi);

  if (bmi < 18.5) {
    return `Your BMI is ${roundedBMI}, so you are underweight.`;
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    return `Your BMI is ${roundedBMI}, so you have a normal weight.`;
  } else {
    return `Your BMI is ${roundedBMI}, so you are overweight.`;
  }
}

module.exports = { calculateBMI };

// Example run
if (require.main === module) {
  try {
    console.log(calculateBMI(70, 1.75));
  } catch (err) {
    console.error(err.message);
  }
}
```

Run:

```bash
node bmi.js
```

### Python usage (reference port)

File: `bmi.py`

```py
def calculate_bmi(weight: float, height: float) -> str:
    if not isinstance(weight, (int, float)) or not isinstance(height, (int, float)):
        raise ValueError("Invalid input: weight and height must be numbers.")
    bmi = weight / (height ** 2)
    rounded = round(bmi)
    if bmi < 18.5:
        return f"Your BMI is {rounded}, so you are underweight."
    elif bmi <= 24.9:
        return f"Your BMI is {rounded}, so you have a normal weight."
    else:
        return f"Your BMI is {rounded}, so you are overweight."

if __name__ == '__main__':
    print(calculate_bmi(70,1.75))
```

---

## API & contract

**Function signature:** `calculateBMI(weight: number, height: number) : string`

* **Inputs**: `weight` — kilograms (Number, required); `height` — meters (Number, required)
* **Errors**: throws `Error` for non-number inputs
* **Return**: human readable `string` with rounded BMI and classification

**Structured output (recommended alternative)**
If you need a programmatic response, implement and export a structured variant:

```js
function calculateBMIStructured(weight, height) {
  const text = calculateBMI(weight, height); // reuse
  const bmi = Number((weight / Math.pow(height,2)).toFixed(2));
  const rounded = Math.round(bmi);
  const category = bmi < 18.5 ? 'underweight' : (bmi <= 24.9 ? 'normal' : 'overweight');
  return { bmi, rounded, category, text };
}
```

---

## BMI categories (reference)

|      Category | BMI range (kg/m²) |
| ------------: | :---------------- |
|   Underweight | `< 18.5`          |
| Normal weight | `18.5 – 24.9`     |
|    Overweight | `≥ 25.0`          |

> Implementation note: current classification collapses all `>=25` into “overweight”. Expand if you need obese subclasses.

---

## Design notes & rationale

* **Explicit validation** reduces silent failures when embedded in UI or services.
* **Single responsibility**: the function computes and classifies BMI; side effects (I/O) are kept in examples.
* **Deterministic rounding**: UI-friendly integer rounding by default; structured output option is available for programmatic consumers.

---

## Suggested enhancements & roadmap

* Add a `precision` parameter or `structured` flag for programmatic consumers.
* Add stricter units checking and helper utilities (e.g., accept cm input with a flag).
* Add CI (GitHub Actions) with Jest for JS and pytest for Python.
* Create a minimal website using a lightweight bundler (Vite) and host via GitHub Pages.

---

## Testing & CI recommendations

* **Unit tests (Jest)**: cover the three category boundaries and invalid input

Example:

```js
const { calculateBMI } = require('./bmi');

test('normal weight', () => {
  expect(calculateBMI(70,1.75)).toMatch(/normal weight/i);
});

test('invalid input', () => {
  expect(() => calculateBMI('70','1.75')).toThrow();
});
```

* Add a GitHub Actions workflow to run tests on `push` and `pull_request`.

---

## Contributing

* Keep changes small and documented.
* Use semantic commit messages: `feat:`, `fix:`, `docs:`, `test:`.
* Include screenshots for UI changes, and add tests for behavioral changes.

---

## License

MIT © Your Name — include a `LICENSE` file at the repository root.

---

## Quick marketing blurb (header)

> **BMI Pro** — an elegant micro‑utility combining crisp validation with developer ergonomics. Lightweight, embeddable, and designed to look polished despite its intentionally small scope.

---

*End of README.*
