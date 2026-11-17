# Nexory Clipping

A lightweight, privacy-first gameplay clipping, screen recording, and screenshot utility for Windows.

## Features

- **Instant replay:** Save the last 2 minutes of gameplay with a hotkey.
- **Region snip:** Drag over any area and copy it to the clipboard or save it.
- **Screenshots:** Capture the full screen or active window.
- **Screen recording:** Start and stop a full recording on demand.
- **Optional cloud upload:** Upload a clip to your own storage and get a shareable link. Supports Fivemanage, Cloudflare R2, S3-compatible storage, and custom HTTP endpoints. Uploads only happen when you pick a clip and press upload—your credentials stay on your PC.

## Download

[**Download the latest release**](https://github.com/NexoryDevelopments/nexory-clipping/releases/latest)

Each release offers two ways to get started:

1. **Installer (`NexoryClippingSetup.exe`):** Run the setup `.exe` to install the app with Start Menu shortcuts. Once launched, the app runs in your system tray.
2. **Standalone / Portable (`.zip` / `Nexory Clipping.exe`):** Extract and run `Nexory Clipping.exe` directly with no installation required. *(Useful if you prefer not to run an unsigned installer or want to keep everything in one folder.)*

Because the binaries are unsigned, Windows SmartScreen may show a warning on first launch—click **More info → Run anyway** to proceed.

## Code signing

The app is currently unsigned. I'm a student living on a fixed income of €125/month, so a recurring code-signing subscription (~€10/month) isn't in my budget right now. Once enough people use the app—or if anyone who really enjoys the program wants to chip in with a small donation to help cover the cost—I plan to get it properly signed in the future.

Until then, Windows SmartScreen will show an "Unknown publisher" warning when you run the installer or executable. You can verify both downloads against the SHA-256 hashes listed in each release.

## Antivirus detections

Some engines flag Nexory Clipping with generic machine-learning detections. Check the releases page for more info and direct links to the VirusTotal scans.

None of them name a specific malware family, and every bundled DLL and script scans clean. This is common for new, unsigned Rust binaries—especially compressed installers and background screen-capture utilities.

## Privacy

No account and no telemetry. The app only uses the network to update the detectable-games list (cached locally), for an optional version check on launch, and for uploads you start yourself.

## Default hotkeys

| Action | Shortcut |
| --- | --- |
| Save instant replay | `Alt + F10` |
| Region snip | `Alt + Shift + S` |
| Screenshot | `Alt + F12` |
| Toggle screen recording | `Alt + F9` |

These defaults were picked to avoid clashing with common overlays and other apps, but another program on your PC may still use the same keys. If a hotkey doesn't work or triggers something else, change it under **Settings → Shortcuts**.

## Support

Nexory Clipping is free. If you want to support development or help cover code-signing costs, you can do so on [Ko-fi](https://ko-fi.com/YOUR_NAME).

## Feedback

Found a bug, have an idea, or a game that isn't detected? Open an issue in the [Issues](https://github.com/NexoryDevelopments/nexory-clipping/issues) tab.
## License

Freeware. See [LICENSE](https://github.com/NexoryDevelopments/nexory-clipping/blob/main/LICENSE) for the terms.
