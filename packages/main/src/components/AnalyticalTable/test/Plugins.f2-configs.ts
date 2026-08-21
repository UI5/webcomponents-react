// Plain (React-free) config list for the `useF2CellEdit` per-input round-trip test. It lives in its
// own module so the spec — which runs in Node and cannot import the browser-only gallery file — can
// import the id/label list to parameterize its test loop, while `Plugins.gallery.tsx` uses the same
// ids to key its column definitions.

export type F2InputColumnId =
  | 'button'
  | 'check-box'
  | 'combo-box'
  | 'date-picker'
  | 'date-range-picker'
  | 'date-time-picker'
  | 'dynamic-date-range'
  | 'file-uploader'
  | 'icon'
  | 'input'
  | 'message-view-button'
  | 'multi-combo-box'
  | 'multi-input'
  | 'radio-button'
  | 'rating-indicator'
  | 'search'
  | 'segmented-button'
  | 'select'
  | 'slider'
  | 'split-button'
  | 'step-input'
  | 'switch'
  | 'text-area'
  | 'time-picker'
  | 'toggle-button';

export interface F2InputConfig {
  id: F2InputColumnId;
  label: string;
}

export const f2InputConfigs: F2InputConfig[] = [
  { id: 'button', label: 'Button' },
  { id: 'check-box', label: 'CheckBox' },
  { id: 'combo-box', label: 'ComboBox' },
  { id: 'date-picker', label: 'DatePicker' },
  { id: 'date-range-picker', label: 'DateRangePicker' },
  { id: 'date-time-picker', label: 'DateTimePicker' },
  { id: 'dynamic-date-range', label: 'DynamicDateRange' },
  { id: 'file-uploader', label: 'FileUploader' },
  { id: 'icon', label: 'Icon' },
  { id: 'input', label: 'Input' },
  { id: 'message-view-button', label: 'MessageViewButton' },
  { id: 'multi-combo-box', label: 'MultiComboBox' },
  { id: 'multi-input', label: 'MultiInput' },
  { id: 'radio-button', label: 'RadioButton' },
  { id: 'rating-indicator', label: 'RatingIndicator' },
  { id: 'search', label: 'Search' },
  { id: 'segmented-button', label: 'SegmentedButton' },
  { id: 'select', label: 'Select' },
  { id: 'slider', label: 'Slider' },
  { id: 'split-button', label: 'SplitButton' },
  { id: 'step-input', label: 'StepInput' },
  { id: 'switch', label: 'Switch' },
  { id: 'text-area', label: 'TextArea' },
  { id: 'time-picker', label: 'TimePicker' },
  { id: 'toggle-button', label: 'ToggleButton' },
];
