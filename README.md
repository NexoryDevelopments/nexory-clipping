# Nexory Clipping

A gameplay clipping, screen recording, and screenshot tool for Windows.

## Features

- **Instant replay:** Save the last 2 minutes of gameplay with a hotkey.
- **Region snip:** Drag over any area and copy it to the clipboard or save it.
- **Screenshots:** Full screen or active window.
- **Screen recording:** Start and stop a full recording on demand.
- **Optional cloud upload:** Upload a clip to your own storage and get a link. Supports Fivemanage, Cloudflare R2, S3-compatible storage, and custom HTTP endpoints. Uploads only happen when you pick a clip and press upload. Your credentials stay on your PC.

## Download

[**Download the latest release**](https://github.com/NexoryDevelopments/nexory-clipping/releases/latest)

There are two ways to download it:

1. **Installer (`NexoryClippingSetup.exe`):** Run the setup `.exe`. The app starts in your system tray.
2. **Standalone (`Nexory Clipping.exe` / `.zip`):** Extract and run `Nexory Clipping.exe` directly without installing anything.

Both files are unsigned, so Windows SmartScreen may warn you on first launch. Click **More info → Run anyway**.

## Code signing

The app is currently unsigned. I'm a student living on a fixed income of €125/month, so paying ~€10/month for a code-signing certificate isn't in my budget right now. Once enough people use the app, or if people who really like the program want to help cover the cost through small donations, I plan to get it signed in the future.

Until then, Windows SmartScreen will show an "Unknown publisher" warning when you run the installer or executable. You can check your download against the SHA-256 hashes listed in each release.

## Antivirus detections

Some engines flag Nexory Clipping with generic machine-learning detections. Check the releases for more info and links to VirusTotal.

None of them name a specific malware family, and every bundled DLL and script scans clean. This is common for new, unsigned installers and background screen capture tools.

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
