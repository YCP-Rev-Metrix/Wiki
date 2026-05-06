+++
title = "General SmartDot Help"
weight = 88
description = 'Operational guidance and best practices for SmartDot usage across the app.'
+++

### What SmartDot is in this app

SmartDot is the ball-mounted sensor source used by the app for motion and environment telemetry.
The app treats SmartDot as a multi-sensor device with timestamped streams:

- Accelerometer: `x`, `y`, `z`
- Gyroscope: `x`, `y`, `z`
- Magnetometer: `x`, `y`, `z`
- Light: scalar value

These streams are collected, graphed, and persisted with session data.

### Where SmartDot is used

- [Shot Mode](../shot_mode/)
  - SmartDot connection is required before launching a shot workflow.
- [Diagnostic Mode](../diagnostic_mode/)
  - SmartDot data is collected during diagnostic recordings.
- [Shot View](../shot_view/)
  - SmartDot traces are displayed live during shot execution.
- [Analysis Mode](../analysis_mode/)
  - SmartDot traces are analyzed using FFT, derivatives, bandpass, and wavelets.
- [Data View](../data_view/)
  - Saved sessions containing SmartDot data are loaded and replayed.

### Connection workflow

1. Connect SmartDot before starting shot/diagnostic capture.
2. Use [SmartDot Connect Widget](../smartdot_connect_widget/) to scan and select a device.
3. Confirm status reports connected.
4. Start the run only after connection is stable.
5. Disconnect cleanly when done or before changing devices.

### Simulated vs physical SmartDot

- On desktop builds, the simulated device is:
  - `SI:MU:LA:TE:DD:OT`
- On hardware-capable builds, scan results include discoverable physical devices.
- The app supports both paths through the same workflow.

### MetaMotion details

- The physical SmartDot path uses a **MetaMotion** device implementation in this app.
- MetaMotion is connected over Bluetooth and exposes accelerometer, gyroscope, magnetometer, and light streams.
- The app connects through a worker thread so the UI remains responsive during connection attempts.
- Connection status updates are surfaced in the SmartDot Connect widget.
- Disconnect events are propagated back into the UI so active pages can stop collection safely.

### MetaMotion in practice

- When MetaMotion is connected, Shot and Diagnostic workflows collect live sensor streams.
- During stop/save transitions, collected MetaMotion samples are packaged into the current session.
- If MetaMotion disconnects mid-run, the app requires reconnection before reliable SmartDot data continues.

### Data lifecycle

1. SmartDot data is buffered during active collection.
2. During session stop/save transitions, buffered samples are packaged into the session data model.
3. Packaged data is available in analysis and cloud submission workflows.

### Data quality and repeatability

- Keep SmartDot placement and orientation consistent between sessions.
- Keep run setup consistent when comparing sessions.
- Verify active data flow in graph pages during runs.
- Use the same analysis settings when comparing outcomes between runs.

### Troubleshooting

- **SmartDot not found during scan**
  - Re-run scan and wait for completion.
  - Confirm device power and proximity.
  - On desktop, select `SI:MU:LA:TE:DD:OT`.

- **Connected but no meaningful graph updates**
  - Confirm the run has started (shot/diagnostic).
  - Confirm the correct page is open ([Shot View](../shot_view/) or [Diagnostic Mode](../diagnostic_mode/)).
  - Confirm the selected graph series are enabled.

- **Unexpected disconnect during run**
  - Stop the run safely.
  - Reconnect through [SmartDot Connect Widget](../smartdot_connect_widget/).
  - Restart the run only after stable reconnection.

- **Data looks inconsistent between sessions**
  - Verify mounting/orientation consistency.
  - Verify comparable shot/diagnostic conditions.
  - Verify matching analysis configuration in [Analysis Mode](../analysis_mode/).

### Warnings

> **Do NOT** move or remount the SmartDot mid-session
> when you need comparable data.
>
> **Do NOT** assume old buffered samples
> belong to the current run.
>
> **Do NOT** ignore disconnect notifications
> while motors continue running.

