/**
 * The snap origin to use.
 * Will default to the local hosted snap if no value is provided in environment.
 */
export const defaultSnapOrigin =
  process.env.SNAP_ORIGIN ?? `https://gmkung.github.io/contract-insights-snap/packages/snap/`;
