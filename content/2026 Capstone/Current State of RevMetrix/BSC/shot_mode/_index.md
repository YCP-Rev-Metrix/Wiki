+++
title = "Shot Mode"
weight = 30
description = 'Author spin, tilt, and angle instruction curves for a shot.'
+++

### What's on this page

- This page allows recreation of a real bowling shot profile.
- The three input graphs define the shot:
  - The **Spin** input graph defaults to up to `10` inflection points (see [Input Graph Widget](../input_graph_widget/)).
  - The **Tilt** and **Angle** input graphs default to up to `3` inflection points each (see [Input Graph Widget](../input_graph_widget/)).
- You can adjust these values using the boxes at the bottom, including start and end values.
- The bottom slider adjusts shot length from `1` to `5` seconds in `0.02 s` intervals.
  - Changing this slider also changes the graph time length.
- You can use the [SmartDot Connect Widget](../smartdot_connect_widget/) on the left side to connect to a SmartDot before a run.
- The motors will home before the shot starts and then run in [Shot View](../shot_view/).

### Warnings

> **Do NOT** start a shot without confirming the arm is clear
> and the cover is on.
>
> **Ensure both SmartDots are in the arm.**
> If it is unbalanced, it can shake itself apart.
>
> Homing relies on limit switches,
> so homing is not 100% accurate.
>
> At the time of writing, there are clearance issues
> with the cord for the spin motor.

