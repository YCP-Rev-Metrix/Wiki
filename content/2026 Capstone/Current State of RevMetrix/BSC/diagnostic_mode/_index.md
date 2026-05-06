+++
title = "Diagnostic Mode"
weight = 20
description = 'Manual motor control, diagnostic recording, and sensor review.'
+++

### What's on this page

- **Connect Motors / Disconnect Motors** enables motor control hardware.
- **Start Diagnostic / Stop Diagnostic** toggles recorded diagnostic sessions.
- **Home Motors** returns tilt/angle to zero reference.
- **Override** opens override mode with extended slider and graph ranges.
- **Spin, Tilt, Angle sliders** plus increment/decrement buttons command motors.
- **Spin/Tilt/Angle graphs** show commanded values and encoder traces.
- **Temperature / Current graph buttons** open sensor graph dialogs.
- **Save** submits recorded session data; **Analyze** opens [Analysis Mode](../analysis_mode/).
- **SmartDot Connect panel** scans/connects SmartDot and streams sensor data (see [SmartDot Connect Widget](../smartdot_connect_widget/) and [General SmartDot Help](../smartdot_general/)).

### How to use this page

- On the left side are three graphs, one per motor axis.
- Each graph shows instruction values and encoder-based feedback.
  - Angle and tilt currently do not have active encoders, so their encoder traces read `0` with real motors.

- Below each graph are labels that show the current instruction and encoder value numerically.

- Below the labels are slider controls for each motor.
- The arrow buttons step values in discrete increments:
  - Spin steps by `10 RPM`.
  - Angle and tilt step by `1°`.
- Use the arrow buttons for precise changes.

- Normal operating ranges are:
  - Spin: `0` to `600 RPM`
  - Angle: `-45°` to `45°`
  - Tilt: `-22°` to `22°`

- Bottom controls include:
  - **Connect Motors / Disconnect Motors**
  - **Start Diagnostic / Stop Diagnostic**
  - **Home Motors**

- To move the motors, press **Connect Motors** first.
- This does **not** start data collection.

- After setting initial motor conditions, connect SmartDot using the [SmartDot Connect Widget](../smartdot_connect_widget/).
- Press **Start Diagnostic** to begin data collection.
- Press the same button again to stop data collection.

- Current and temperature values are shown in the lower-left area.
- These readouts are currently implemented for the primary motor channel.

- See [General SmartDot Help](../smartdot_general/) for SmartDot workflow guidance.
- See [Motor and SmartDot Graph Widget](../motor_graph_widget/) for graph behavior and color keys.

### Override Mode

- **Override Mode is for debugging only. Improper use can damage the device.**
- **When Override Mode is active, keep one hand on E-Stop at all times.**

- In Override Mode, angle and tilt ranges can extend to `±360°`.
- **Do not use large uncontrolled slider sweeps. You can burn out motors if you are not careful.**

- Spin can reach up to `1200 RPM`.
- **Low-speed compensation causes instability above `900 RPM`. Watch thumb grips and clearances carefully.**