"use client";

export default function PhoneLink({ className }: { className?: string }) {
  const parts = ["952", "26", "88", "50"];
  const number = parts.join("");
  return (
    <a href={`tel:${number}`} className={className}>
      {parts.join(" ")}
    </a>
  );
}
