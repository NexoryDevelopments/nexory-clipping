# Nexory Clipping

## Antivirus detections

Some engines flag Nexory Clipping with generic machine-learning detections. Check the releases for more info / links to virustotal.

None of them name a specific malware family, and every bundled DLL and script
scans clean. This is common for new, unsigned installers, and screen capture
tools that run in the background tend to get flagged more often.

## Code signing

The app is not code-signed at the moment. Code signing certificates cost money,
so I'll sign it once enough people use the app to make that cost worth it.
Until then, Windows may show an "unknown publisher" warning. As a free alternative, I may publish it on the Microsoft Store, where Microsoft
signs the package. The installer on this page would stay unsigned.

## Features

- **Instant replay:** save the last 2 minutes of gameplay with a hotkey.
- **Region snip:** drag over any area and copy it to the clipboard or save it.
- **Screenshots:** full screen or active window.
- **Screen recording:** start and stop a full recording on demand.
- **Optional cloud upload:** upload a clip to your own storage and get a link.
  Supports Fivemanage, Cloudflare R2, S3-compatible storage, and custom HTTP
  endpoints. Uploads only happen when you pick a clip and press upload.
  Your credentials stay on your PC.

## Privacy

No account and no telemetry. The app only uses the network to update the
detectable-games list (cached locally), for an optional version check on
launch, and for uploads you start yourself.

## Download

[**Download the latest release**](https://github.com/NexoryDevelopments/nexory-clipping/releases/latest)

Run the setup `.exe`. The app starts in your system tray.

The installer is unsigned, so Windows SmartScreen may warn you on first launch.
Click **More info → Run anyway**.

## Default hotkeys

| Action | Shortcut |
| --- | --- |
| Save instant replay | Alt + F10 |
| Region snip | Alt + Shift + S |
| Screenshot | Alt + F12 |
| Toggle screen recording | Alt + F9 |

These defaults were picked to avoid clashing with common overlays and other
apps, but another program on your PC may still use the same keys. If a hotkey
doesn't work or triggers something else, change it under **Settings → Shortcuts**.

## Support

Nexory Clipping is free. If you want to support development, you can do so on
[Ko-fi](https://ko-fi.com/YOUR_NAME).

## Feedback

Found a bug, have an idea, or a game that isn't detected? Open an issue in the Issues tab.

## License

Freeware. See [LICENSE](https://github.com/NexoryDevelopments/nexory-clipping/blob/main/LICENSE) for the terms.
