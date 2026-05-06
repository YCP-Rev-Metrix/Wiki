+++
title = "Motor and SmartDot Graph Widget"
weight = 86
description = 'Combined graph behavior for motor and SmartDot time-series displays.'
+++

### What this widget is

This document defines the behavior shared by the **Motor Graph** and **SmartDot Graph** widgets.

- The **Motor Graph** displays commanded values and encoder values over time.
- The **SmartDot Graph** displays accelerometer, gyroscope, magnetometer, and light values over time.
- The graph controls affect rendering only. They do not change stored data.

### Display modes

You can select three display modes:

- **Scroll**
  - Shows a sliding time window.
  - The default window is `0.1` seconds.
  - You can set this value with the range-width control.
- **View All**
  - Shows the full duration of the current run.
- **Range**
  - Shows data between explicit minimum and maximum times.
  - The default range is `0` to `2` seconds.
  - You can set min/max using the controls in the lower-right area.

### Vertical cursor and readout

- Clicking the graph places a vertical cursor at the clicked time.
- The widget highlights the nearest sample on each visible line.
- The bottom label shows exact values at the highlighted time.

### Line visibility

- The checkboxes on the right side enable and disable individual lines.
- Checkbox state changes visibility only.
- Data collection and persistence continue for all series.

### Color keys

Motor Graph color key:

- <span style="color:#FF0000"><strong>Spin</strong></span>: red (`#FF0000`)
- <span style="color:#00AA00"><strong>Tilt</strong></span>: green (`#00AA00`)
- <span style="color:#0000FF"><strong>Angle</strong></span>: blue (`#0000FF`)
- <span style="color:#00FFFF"><strong>Spin Data / Spin Encoder</strong></span>: cyan (`#00FFFF`) dashed
- <span style="color:#FF00FF"><strong>Tilt Data / Tilt Encoder</strong></span>: magenta (`#FF00FF`) dashed
- <span style="color:#FFFF00"><strong>Angle Data / Angle Encoder</strong></span>: yellow (`#FFFF00`) dashed

SmartDot Graph color key:

- <span style="color:#FF0000"><strong>Accelerometer X</strong></span>: red (`#FF0000`)
- <span style="color:#00AA00"><strong>Accelerometer Y</strong></span>: green (`#00AA00`)
- <span style="color:#0000FF"><strong>Accelerometer Z</strong></span>: blue (`#0000FF`)
- <span style="color:#00FFFF"><strong>Gyroscope X</strong></span>: cyan (`#00FFFF`)
- <span style="color:#FF00FF"><strong>Gyroscope Y</strong></span>: magenta (`#FF00FF`)
- <span style="color:#FFFF00"><strong>Gyroscope Z</strong></span>: yellow (`#FFFF00`)
- <span style="color:#008080"><strong>Magnetometer X</strong></span>: teal (`#008080`)
- <span style="color:#800000"><strong>Magnetometer Y</strong></span>: maroon (`#800000`)
- <span style="color:#800080"><strong>Magnetometer Z</strong></span>: purple (`#800080`)
- <span style="color:#777777"><strong>Light</strong></span>: gray (`#777777`) 

### Where this widget is used

- [Shot View](../shot_view/) uses Motor Graph on the left and SmartDot Graph on the right.
- [Analysis Mode](../analysis_mode/) uses both graph widgets for loaded session data.
- [Diagnostic Mode](../diagnostic_mode/) uses SmartDot Graph for live SmartDot review.

### Note

- In the SmartDot Graph, the `log2` of the light value is displayed so it stays on a comparable scale with the other plotted values.