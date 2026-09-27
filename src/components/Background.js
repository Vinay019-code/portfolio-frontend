/**
 * Lightweight CSS-based background with grid and glow effects.
 * Replaces the heavy Three.js particle background for better performance.
 */
export default function Background() {
  return (
    <>
      <div className="bg-grid" aria-hidden="true" />
      <div className="bg-glow" aria-hidden="true" />
      <div className="bg-glow-secondary" aria-hidden="true" />
    </>
  );
}