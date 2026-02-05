export enum ValueColor {
  /**
   * Critical value color.
   */
  Critical = 'Critical',
  /**
   * Error value color.
   */
  Error = 'Error',
  /**
   * Good value color.
   */
  Good = 'Good',
  /**
   * Neutral value color.
   */
  Neutral = 'Neutral',
  /**
   * None value color.
   *
   * __Note__: "None" has the same color as "Neutral" but doesn't add the tooltip and accessible-name for the numeric content.
   */
  None = 'None',
}
