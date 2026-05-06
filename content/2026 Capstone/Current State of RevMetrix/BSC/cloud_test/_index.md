+++
title = "Cloud Test"
weight = 70
description = 'Developer test page for cloud API endpoints and motor diagnostics.'
+++

### What's on this page

- **Cloud Test tab** includes API test actions for posting/getting session-related data.
- **Session ID controls** support targeted load calls.
- **Response/log widgets** show command output and status.
- **Motor Diagnostics tab** includes:
  - Run Spin Diagnostic
  - Tune Duty Scale
  - Run Stepper Diagnostic
  - Trigger/Clear Motor Fault
  - Edit Motor Tuning

### How to use this page

1. Use this page for validation and troubleshooting, not routine operation.
2. Pick a single API operation and confirm response output before the next one.
3. For motor diagnostics, set duration parameters first, then run one diagnostic at a time.
4. Return to [Home](../home/) when done.

### Warnings

> **Do NOT** use Cloud Test
> as an operator workflow page for normal sessions.
>
> **Do NOT** trigger simulated or real motor faults
> without a recovery plan.
>
> **Do NOT** run overlapping diagnostics
> that command the same hardware simultaneously.

