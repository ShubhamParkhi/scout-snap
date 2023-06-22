/**
 * The snap origin to use.
 * Will default to the local hosted snap if no value is provided in environment.
 */
/* eslint-disable */
export const defaultSnapOrigin =
  process.env.SNAP_ORIGIN ?? 'npm:@kleros/scout-snap';
