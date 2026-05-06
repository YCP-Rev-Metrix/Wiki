+++
title = "Input Graph Widget"
weight = 89
description = 'Interactive graph editor used to define shot instruction curves.'
+++

### What this widget is

- The Input Graph lets you place and edit control points over time.
- The inflection points are connected by a cubic spline to the start and end values of the motor graph.
- The curve is hard-capped at the maximum allowed values for the motor.
- Use the boxes at the bottom to adjust the start and end values.
- Controls for adjusting graph bounds are hidden from the user.
- When a shot is entered, this widget interpolates the curve into discrete values.
- Inflection points are stored as floats from `0` to `1`, and are saved to and loaded from the database.

### Where it is used

- [Shot Mode](../shot_mode/) for spin (RPM), tilt, and angle instruction authoring.



