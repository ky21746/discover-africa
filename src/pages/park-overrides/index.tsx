// src/pages/park-overrides/index.tsx
import React from "react";
import GorillasPage from "../GorillasPage";

export const parkOverrides: Record<string, React.FC | undefined> = {
  // slug -> Component
  "bwindi-gorillas": GorillasPage,
};