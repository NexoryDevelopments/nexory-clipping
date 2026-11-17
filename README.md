# Nexory Clipping

## Antivirus detections

Some engines flag Nexory Clipping with generic machine-learning detections. Check the releases for more info / links to virustotal.

None of them name a specific malware family, and every bundled DLL and script
scans clean. This is common for new, unsigned installers, and screen capture
tools that run in the background tend to get flagged more often.

## Code signing

The app is currently unsigned. I'm a student living on a fixed income of €125/month, so a recurring code-signing subscription (~€10/month) isn't in my budget right now. Once enough people use the app or if anyone who really enjoys the program wants to chip in with a small donation to help cover the cost. I plan to get it properly signed in the future.

Until then, Windows SmartScreen will show an "Unknown publisher" warning when you run the installer—click **More info → Run anyway** to proceed. You can verify the installer against the SHA-256 hash listed in each release.

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
