-- E-Self Tool — Supabase Schema
-- Auth: OFF (anonymous mode — no user_id required)
-- Run this in your Supabase SQL Editor

CREATE TABLE IF NOT EXISTS assessments (
  id         UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMPTZ NOT NULL    DEFAULT NOW(),

  -- Computed results
  score      INT         NOT NULL    CHECK (score BETWEEN 0 AND 100),
  zone       TEXT        NOT NULL,
  state      TEXT        NOT NULL,
  mode       TEXT        NOT NULL,
  flow       TEXT        NOT NULL,

  -- Identity Form
  name       TEXT        NOT NULL DEFAULT 'Anonim',
  city       TEXT        NOT NULL DEFAULT '-',
  whatsapp   TEXT        NOT NULL DEFAULT '-',

  -- Raw answers (0–4 only)
  q1  INT NOT NULL CHECK (q1  BETWEEN 0 AND 4),
  q2  INT NOT NULL CHECK (q2  BETWEEN 0 AND 4),
  q3  INT NOT NULL CHECK (q3  BETWEEN 0 AND 4),
  q4  INT NOT NULL CHECK (q4  BETWEEN 0 AND 4),
  q5  INT NOT NULL CHECK (q5  BETWEEN 0 AND 4),
  q6  INT NOT NULL CHECK (q6  BETWEEN 0 AND 4),
  q7  INT NOT NULL CHECK (q7  BETWEEN 0 AND 4),
  q8  INT NOT NULL CHECK (q8  BETWEEN 0 AND 4),
  q9  INT NOT NULL CHECK (q9  BETWEEN 0 AND 4),
  q10 INT NOT NULL CHECK (q10 BETWEEN 0 AND 4),
  q11 INT NOT NULL CHECK (q11 BETWEEN 0 AND 4),
  q12 INT NOT NULL CHECK (q12 BETWEEN 0 AND 4),
  q13 INT NOT NULL CHECK (q13 BETWEEN 0 AND 4),
  q14 INT NOT NULL CHECK (q14 BETWEEN 0 AND 4),
  q15 INT NOT NULL CHECK (q15 BETWEEN 0 AND 4),
  q16 INT NOT NULL CHECK (q16 BETWEEN 0 AND 4),
  q17 INT NOT NULL CHECK (q17 BETWEEN 0 AND 4),
  q18 INT NOT NULL CHECK (q18 BETWEEN 0 AND 4),
  q19 INT NOT NULL CHECK (q19 BETWEEN 0 AND 4),
  q20 INT NOT NULL CHECK (q20 BETWEEN 0 AND 4)
);

-- Enable Row Level Security
ALTER TABLE assessments ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert (anonymous mode)
CREATE POLICY "Allow anonymous inserts"
  ON assessments FOR INSERT
  WITH CHECK (true);

-- Note: SELECT policy is disabled on the database level for the anonymous key.
-- Individual assessment retrieval and administrative access are proxy-routed through
-- Next.js Server-side API routes using the Supabase Service Role Key to guarantee data privacy.

