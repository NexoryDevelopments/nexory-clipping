# Nexory Clipping

A lightweight screen capture and instant replay utility for Windows, built in Rust.

Nexory Clipping sits in your system tray and stays dormant during normal desktop
use. When you launch a game, it starts a hardware-encoded rolling replay buffer
of the last 2 minutes.

## Features

- **Instant replay (past 2 minutes):** detects when you're playing a game and
  records a rolling buffer. It stays dormant on the desktop.
- **Region snip:** drag to capture any area to your clipboard or disk.
- **Instant screenshots:** full screen or active window with one hotkey.
- **Screen recording:** start and stop full-session recordings on demand.
- **Optional cloud upload:** share a clip manually to your own storage
  (Fivemanage, Cloudflare R2, S3-compatible, or a custom HTTP endpoint).
  Nothing is uploaded unless you choose a clip and press upload. Your
  credentials are stored locally on your PC.

## Download

[**Download the latest release**](../../releases/latest)

Run the setup `.exe`. The app then runs in your system tray.

> The installer is unsigned, so Windows SmartScreen may show a prompt on first
> launch. Click **More info → Run anyway**.

[![Made with Slint](https://raw.githubusercontent.com/slint-ui/slint/master/logo/MadeWithSlint-logo-light.svg#gh-light-mode-only)](https://slint.dev)

## Default hotkeys

| Action | Shortcut |
| --- | --- |
| Save instant replay (past 2 min) | Alt + F10 |
| Region snip | Alt + Shift + S |
| Screenshot | Alt + F12 |
| Toggle screen recording | Alt + F9 |

## Feedback & bug reports

Found a bug, have a suggestion, or a game that isn't detected properly?
Open an issue in the Issues tab.

## License

Nexory Clipping is freeware. See [LICENSE](LICENSE) for the full terms.
Third-party notices are in [THIRD-PARTY-LICENSES](THIRD-PARTY-LICENSES).
