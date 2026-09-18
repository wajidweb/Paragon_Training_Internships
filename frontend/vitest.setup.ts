import "@testing-library/jest-dom";
import { vi } from "vitest";
import React, { ComponentProps } from "react";

// Mock next/image
vi.mock("next/image", () => ({
  __esModule: true,
  default: (props: ComponentProps<"img">) => {
    return React.createElement("img", props);
  },
}));

// Mock next/font/google
vi.mock("next/font/google", () => ({
  Geist: () => ({
    variable: "--font-geist-sans",
    style: { fontFamily: "Geist" },
  }),
  Geist_Mono: () => ({
    variable: "--font-geist-mono",
    style: { fontFamily: "Geist-Mono" },
  }),
}));
