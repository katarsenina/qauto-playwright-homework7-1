# Run evidence: guest adds Audi TT to Garage

- Tool: Codex terminal, Playwright Test
- Command: `npx playwright test tests/add-car-guest.spec.ts --project=chromium`
- Timestamp: `2026-10-04T18:59:51+03:00`
- Environment: macOS Darwin x64, Playwright Chromium, `https://qauto.forstudy.space`
- Actual (terminal output):

  ```text
  Running 1 test using 1 worker
  ✘  1 [chromium] › tests/add-car-guest.spec.ts:4:7 › Guest adds a car to Garage › Guest log in → Add car → Audi → TT → Mileage 12000 (3ms)
  ✘  2 [chromium] › tests/add-car-guest.spec.ts:4:7 › Guest adds a car to Garage › Guest log in → Add car → Audi → TT → Mileage 12000 (retry #1) (7ms)

  Error: browserType.launch: Target page, context or browser has been closed
  [pid=25899][err] [1004/185951.616241:FATAL:base/apple/mach_port_rendezvous_mac.cc:159] Check failed: kr == KERN_SUCCESS. bootstrap_check_in org.chromium.Chromium.MachPortRendezvousServer.25899: Permission denied (1100)
  1 failed
  ```

| Element | Source |
|---|---|
| Setup | `playwright.config.ts`: base URL, Chromium project, retry policy |
| Locator/action | Current Playwright CLI accessibility snapshot and locator picker |
| Assertions | `specs/add-car.md`; scenario data in that file |

- FACTS: The runner discovered one test. Chromium failed during launch on the first attempt and retry. No test UI steps ran. Exit code: `1`.
- ASSUMPTIONS: None.
- RISKS: The test result says nothing about whether adding the car works; the browser could not start.
- HUMAN CORRECTION: None.
- DECISION: `STOP` — preserve this blocker; do not report the scenario as passed.
