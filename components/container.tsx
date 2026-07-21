import { cn } from "@/lib/cn";

type ContainerProps = {
  as?: React.ElementType;
  width?: "content" | "wide";
  className?: string;
  children: React.ReactNode;
};

/**
 * Horizontal layout primitive. `content` (~1088px) for reading; `wide`
 * (~1344px) for large case-study media. Gutters scale with viewport.
 */
export function Container({
  as: Tag = "div",
  width = "content",
  className,
  children,
}: ContainerProps) {
  return (
    <Tag
      className={cn(
        "mx-auto w-full px-6 sm:px-8 lg:px-10",
        width === "content" ? "max-w-content" : "max-w-wide",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
