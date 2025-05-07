import { ArrowBigUp } from "lucide-react";

export const Logo = ({
  color = "color"
}: {
  color?: "color" | "white";
}) => {
  return (
    <div className={`rounded-lg border-2 ${color === "white" ? "border-white" : "border-book-secondary"} p-1`}>
      <ArrowBigUp className={`h-6 w-6 ${color === "white" ? "text-white" : "text-book-secondary"}`} />
    </div>
  );
};