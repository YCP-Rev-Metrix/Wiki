+++
title = "Wavelet Dialog"
weight = 80
description = 'Run wavelet analysis with both the Wavelet Helper dialog and the Wavelet Dialog.'
+++

### What this help covers

- **Wavelet Helper Dialog** (`WavletHelperWidget`): where you choose wavelet family/type/order and isolation mode.
- **Wavelet Dialog**: where results are plotted in tabs and compared against the original signal.

### Wavelet Helper Dialog

- Add one or more wavelet rows.
- For each row, set:
  - **Family**
  - **Type**
  - **Order**
  - Optional isolation (`Isolate High-Frequency` or `Isolate Low-Frequency`)
- Click **OK** to send the selected list into the Wavelet Dialog.

### Wavelet Dialog

- **Tabbed graph area** shows one tab per selected wavelet result, plus an **Original** tab.
- **Series checkboxes** control line visibility only (data remains intact).
- **Width / Reset controls** change x-range view.
- Clicking the graph places a cursor and shows exact values in the highlight label.

### Example workflow (bior6.8 + haar bandpass-style analysis)

Use this example from [Analysis Mode](../analysis_mode/) to run a practical two-wavelet workflow:

1. Open **Motor Wavelet** or **SmartDot Wavelet**.
2. In the Wavelet Helper Dialog, add two rows:
   - Row 1: Type `bior6.8`, set **Order = 5**, enable **Isolate Low-Frequency**.
   - Row 2: Type `haar`, set **Order = 1**, enable **Isolate High-Frequency**.
3. Keep those isolation settings exactly as listed above.
4. Click **OK** to open results in the Wavelet Dialog.
5. Compare `bior6.8` and `haar` tabs against **Original**.
6. In the **Original** tab, toggle selected wavelet components to inspect a bandpass-style view of retained vs removed content.

This is the recommended method in the app for wavelet-based bandpass-style exploration.

### Note

> This guide is implementation-focused and based on the current app workflow. For deeper theory, refer to Professor Hake's thesis. 

