/**
 * Photograph slot. Uses a CSS background rather than <img> so that a
 * missing file degrades silently to the gradient placeholder instead of
 * rendering a broken-image icon.
 */
export default function Photo({
  src,
  className = "",
  zoomOnHover = false,
}: {
  src: string;
  className?: string;
  zoomOnHover?: boolean;
}) {
  return (
    <div className={`photo-slot ${className}`}>
      <div
        className={`absolute inset-0 bg-cover bg-center ${
          zoomOnHover
            ? "transition-transform duration-500 group-hover:scale-105"
            : ""
        }`}
        style={{ backgroundImage: `url(${src})` }}
        aria-hidden="true"
      />
    </div>
  );
}
