/**
 * Thrown for invalid or missing arguments/configuration passed to the satora
 * protocol (e.g. a missing source chain or swap amount).
 */
export declare class SatoraInvalidOptionsError extends Error {
    /**
     * @param {string} message - The error message.
     */
    constructor(message: string);
}
