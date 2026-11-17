# Nexory Clipping

A small screen capture and instant replay tool for Windows, written in Rust.

It lives in your system tray and stays idle on the desktop. When you launch a
game, it starts a hardware-encoded replay buffer of the last 2 minutes by default.

https://www.virustotal.com/gui/file/dd8195a0b96871e05f98802c90d745f2b91c1a9d40071ec20d9d52c8eef44706/detection - Setup
https://www.virustotal.com/gui/file/913ffcabe7778f4dd904b68c114047fbf04551ad174b2f5313abfe60650d7d48?nocache=1 - Main app

Detected because it is an unknown and unsigned new app. I will sign the app if I start getting a userbase. Alternatively using Microsoft Store as a workaround for free signing of my app.

## Features

- **Instant replay:** save the last 2 minutes of gameplay with a hotkey.
- **Region snip:** drag over any area and copy it to the clipboard or save it.
- **Screenshots:** full screen or active window.
- **Screen recording:** start and stop a full recording on demand.
- **Optional cloud upload:** upload a clip to your own storage and get a link.
  Supports Fivemanage, Cloudflare R2, S3-compatible storage, and custom HTTP
  endpoints. Uploads only happen when you pick a clip and press upload.
  Your credentials stay on your PC.

## Download

[**Download the latest release**](https://github.com/NexoryDevelopments/nexory-clipping/releases/latest)

Run the setup `.exe`. The app starts in your system tray.

The installer is unsigned, so Windows SmartScreen may warn you on first launch.
Click **More info → Run anyway**.

[![Made with Slint](https://raw.githubusercontent.com/slint-ui/slint/master/logo/MadeWithSlint-logo-light.svg#gh-light-mode-only)](https://slint.dev)

## Default hotkeys

| Action | Shortcut |
| --- | --- |
| Save instant replay | Alt + F10 |
| Region snip | Alt + Shift + S |
| Screenshot | Alt + F12 |
| Toggle screen recording | Alt + F9 |

## Support

Nexory Clipping is free. If you want to support development, you can do so on
[Ko-fi](https://ko-fi.com/YOUR_NAME).

## Feedback

Found a bug, have an idea, or a game that isn't detected? Open an issue in the Issues tab.

## License

Freeware. See [LICENSE](https://github.com/NexoryDevelopments/nexory-clipping/blob/main/LICENSE) for the terms.
