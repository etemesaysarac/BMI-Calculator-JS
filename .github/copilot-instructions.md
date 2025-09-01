# Copilot Instructions for JavaScript_Examples

## Project Overview
This project currently contains a single file: `LoveScore.js`. It is a simple JavaScript program that calculates a random "love score" between two people based on user input.

## Key File
- `LoveScore.js`: Main script. Prompts for two names, generates two random scores, and outputs their sum as a percentage.

## Patterns and Conventions
- Uses browser `prompt()` for input and `console.log()` for output. This is suitable for running in browser environments or Node.js with compatible input methods.
- Random score generation uses `Math.random() * 100`, then floors and adjusts the value to get an integer between 1 and 100 for `LoveScore`, and 0 to 99 for `LoveScore2`.
- The final output concatenates both scores, which may result in values like "Your love score is 7512%" (not a true sum or average). This is intentional in the current code.

## Developer Workflows
- No build, test, or debug scripts are present. To run, simply execute `LoveScore.js` in a browser console or with Node.js (note: `prompt()` is not natively supported in Node.js).
- No external dependencies or package managers are used.

## Integration Points
- No external APIs, libraries, or modules are integrated.
- No cross-file or cross-component communication; all logic is in a single file.

## Project-Specific Guidance for AI Agents
- Focus on single-file scripts and direct user interaction via prompts and console output.
- If expanding, maintain simplicity and avoid introducing frameworks unless requested.
- Document any new files or workflows in this instruction file for future agents.

## Example Usage
```javascript
prompt("Enter your name:");
prompt("Enter your partner's name:");
// ...existing code...
```

---
If you add new files, workflows, or conventions, update this file to keep future agents productive.
