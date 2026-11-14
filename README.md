# Nexory Clipping

A lightweight, low-overhead screen capture and instant replay utility for Windows, built in Rust.

Nexory Clipping sits quietly in your system tray using near-zero CPU and minimal RAM while you browse or work, automatically waking up to record a rolling 2-minute replay buffer the moment you launch a game.

---

## Features

* **Smart Instant Replay (Past 2 Minutes):** Automatically detects when you're playing a game and spins up a hardware-encoded rolling buffer—staying completely dormant during normal desktop use.
* **Region Snipping Tool:** Quickly drag and capture any area of your screen to your clipboard or disk.
* **Instant Screenshots:** Capture full-screen or active window screenshots with a single hotkey.
* **Screen Recording:** Start and stop manual, full-session recordings on demand.
* **Built in Rust:** Native Windows performance with a tiny memory footprint and negligible idle resource usage.

---

## Installation

1. Download the setup `.exe` directly from this repository (click the file and hit **Download raw file**, or grab it from **[Releases](https://github.com/[your-username]/[repo-name]/releases)**).
2. Run the setup `.exe` to install [App Name].
3. Once installed, it runs quietly in your system tray.

*(Note: Because this is an independent, unsigned installer, Windows SmartScreen may show a prompt on first launch. Click **More info** → **Run anyway** to proceed.)*

---

## Default Hotkeys

| Action | Shortcut |
| :--- | :--- |
| **Save Instant Replay (Past 2 Min)** | `Alt + F10` *(update to your defaults)* |
| **Region Snip** | `Alt + Shift + S` |
| **Screenshot** | `Alt + F12` |
| **Toggle Screen Recording** | `Alt + F9` |

---

## Feedback & Bug Reports

Have a suggestion, found a bug, or have a game that isn't being detected properly? Open an issue in the **[Issues](https://github.com/[your-username]/[repo-name]/issues)** tab.



---

## License

Nexory Clipping is freeware. See the [LICENSE](LICENSE) file for full terms.****

<sub>The installer is made with [Slint](https://slint.dev).
[![Made with Slint](logo/MadeWithSlint-logo-whitebg.png)](https://slint.dev)
