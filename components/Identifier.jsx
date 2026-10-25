"use client";

// The step-by-step "What have I found?" helper.
// Each answer gives points to the stones that match, then we show the top three.

import Link from "next/link";
import { useState } from "react";
import StoneArt from "./StoneArt";
import { stones } from "@/data/stones";

const questions = [
  {
    key: "habitat",
    title: "Where did you find it?",
    options: [
      { value: "beach", label: "🌊 On a beach" },
      { value: "river", label: "🏞️ In a river or burn" },
      { value: "highland", label: "⛰️ In the hills" },
      { value: "island", label: "🏝️ On an island" },
    ],
  },
  {
    key: "colour",
    title: "What's its main colour?",
    options: [
      { value: "red", label: "Red", swatch: "#c0392b" },
      { value: "orange", label: "Orange", swatch: "#e08a3c" },
      { value: "yellow", label: "Yellow or gold", swatch: "#e9c43b" },
      { value: "green", label: "Green", swatch: "#5f9a6b" },
      { value: "white", label: "White", swatch: "#ffffff" },
      { value: "clear", label: "Clear", swatch: "linear-gradient(135deg,#ffffff,#dfe8ee)" },
      { value: "pink", label: "Pink", swatch: "#e8b4b8" },
      { value: "grey", label: "Grey", swatch: "#8d949a" },
      { value: "brown", label: "Brown", swatch: "#8b5a3c" },
      { value: "black", label: "Black", swatch: "#222" },
    ],
  },
  {
    key: "banded",
    title: "Does it have stripes, rings or layers?",
    options: [
      { value: "yes", label: "〰️ Yes, it's stripy" },
      { value: "no", label: "⬜ No, it's all one colour" },
      { value: "unsure", label: "🤷 Not sure" },
    ],
  },
  {
    key: "sparkly",
    title: "Can you see crystals or sparkly bits?",
    options: [
      { value: "yes", label: "✨ Yes, it sparkles" },
      { value: "no", label: "🪨 No, it's smooth or dull" },
      { value: "unsure", label: "🤷 Not sure" },
    ],
  },
];

function score(stone, answers) {
  let points = 0;
  let possible = 0;

  possible += 2;
  if (stone.habitats.includes(answers.habitat)) points += 2;

  possible += 4;
  if (stone.colours.includes(answers.colour)) points += 4;

  if (answers.banded !== "unsure") {
    possible += 2;
    if (stone.banded === (answers.banded === "yes")) points += 2;
  }

  if (answers.sparkly !== "unsure") {
    possible += 2;
    if (stone.sparkly === (answers.sparkly === "yes")) points += 2;
  }

  return Math.round((points / possible) * 100);
}

export default function Identifier() {
  const [answers, setAnswers] = useState({});
  const step = Object.keys(answers).length;
  const finished = step === questions.length;

  function choose(value) {
    setAnswers({ ...answers, [questions[step].key]: value });
  }

  function goBack() {
    const keys = Object.keys(answers);
    const copy = { ...answers };
    delete copy[keys[keys.length - 1]];
    setAnswers(copy);
  }

  const progress = (
    <div className="progress-dots" aria-hidden="true">
      {questions.map((q, i) => (
        <span key={q.key} className={i < step ? "done" : ""} />
      ))}
    </div>
  );

  if (finished) {
    const matches = stones
      .map((stone) => ({ stone, match: score(stone, answers) }))
      .sort((a, b) => b.match - a.match)
      .slice(0, 3);

    return (
      <div className="quiz">
        {progress}
        <h2>Your stone might be…</h2>
        <p style={{ color: "var(--muted)", margin: 0 }}>
          Tap a match to see how to check for sure.
        </p>
        <div className="results">
          {matches.map(({ stone, match }) => (
            <Link key={stone.slug} href={`/stones/${stone.slug}`} className="result-card">
              <StoneArt stone={stone} />
              <div>
                <h3>{stone.name}</h3>
                <div className="match-bar">
                  <span style={{ width: `${match}%` }} />
                </div>
                <span className="match-label">{match}% match · {stone.rarity}</span>
              </div>
            </Link>
          ))}
        </div>
        <div className="quiz-footer">
          <button className="link-btn" onClick={goBack}>← Change my last answer</button>
          <button className="btn btn-primary" onClick={() => setAnswers({})}>
            Identify another stone
          </button>
        </div>
      </div>
    );
  }

  const question = questions[step];

  return (
    <div className="quiz">
      {progress}
      <span className="eyebrow">Question {step + 1} of {questions.length}</span>
      <h2>{question.title}</h2>
      <div className="options">
        {question.options.map((option) => (
          <button key={option.value} className="option" onClick={() => choose(option.value)}>
            {option.swatch && <span className="swatch" style={{ background: option.swatch }} />}
            {option.label}
          </button>
        ))}
      </div>
      {step > 0 && (
        <div className="quiz-footer">
          <button className="link-btn" onClick={goBack}>← Back</button>
        </div>
      )}
    </div>
  );
}
