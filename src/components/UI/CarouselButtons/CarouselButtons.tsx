import * as React from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

export const DotButton = ({
  selected,
  onClick,
}: {
  selected: boolean;
  onClick(): void;
}) => (
  <button
    role="button"
    aria-label="button"
    className={`embla__dot${selected ? " is-selected" : ""}`}
    onClick={onClick}
  />
);

export const PrevButton = ({
  enabled,
  onClick,
}: {
  enabled: boolean;
  onClick(): void;
}) => (
  <button
    role="button"
    aria-label="prev"
    className={` ${
      enabled ? "bg-opacity-50" : " bg-opacity-30"
    } absolute left-0 top-1/2 -translate-y-1/2 bg-neutral bg-opacity-50`}
    onClick={onClick}
    disabled={!enabled}
  >
    <HiChevronLeft
      className={`h-10 w-10 ${enabled ? "text-white" : "text-neutral"}`}
    />
  </button>
);

export const NextButton = ({
  enabled,
  onClick,
}: {
  enabled: boolean;
  onClick(): void;
}) => (
  <button
    role="button"
    aria-label="next"
    className={` ${
      enabled ? "bg-opacity-50" : " bg-opacity-30"
    } absolute right-0 top-1/2 -translate-y-1/2 bg-neutral bg-opacity-50`}
    onClick={onClick}
    disabled={!enabled}
  >
    <HiChevronRight
      className={`h-10 w-10 ${enabled ? "text-white" : "text-neutral"}`}
    />
  </button>
);
