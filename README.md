# Learn Kotlin 2.4 Features

A self-contained set of interactive lessons covering the major concepts introduced in Kotlin 2.4. Each lesson is a standalone HTML file with explanations, code examples, and a quiz.

## Lessons

| # | Topic | Status |
|---|-------|--------|
| [1](lessons/0001-context-parameters.html) | Context Parameters | Stable |
| [2](lessons/0002-explicit-backing-fields.html) | Explicit Backing Fields | Stable |
| [3](lessons/0003-collection-literals.html) | Collection Literals | Experimental |
| [4](lessons/0004-map-fallback-functions.html) | Map Fallback Functions | Experimental |
| [5](lessons/0005-swift-export-alpha.html) | Swift Export Alpha | Alpha |
| [6](lessons/0006-introduced-at.html) | @IntroducedAt | Experimental |

## Structure

```
lessons/        — one HTML file per lesson, with inline quiz
reference/      — printable cheat sheets, one per topic
assets/         — shared stylesheet and quiz engine
learning-records/ — notes on prior knowledge and session context
MISSION.md      — goal and scope for this learning workspace
RESOURCES.md    — curated primary sources and community links
```

## Usage

Clone the repo and open any lesson directly in a browser — no build step, no server needed.

```bash
git clone https://github.com/Njko/learn_kotlin_2_4_features.git
open learn_kotlin_2_4_features/lessons/0001-context-parameters.html
```

## Primary source

All lessons are grounded in the official [What's new in Kotlin 2.4](https://kotlinlang.org/docs/whatsnew24.html) documentation.
