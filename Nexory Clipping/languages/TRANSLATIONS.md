# Nexory Clipping translations

1. Open the `languages` folder next to the Nexory executable.
2. Copy `EN.json` and name the copy after the language, such as `PT-BR.json` for Brazilian Portuguese. English and Swedish are already bundled.
3. Change `name` to the language name people should see in Settings. Translate the values under `messages` and keep the keys and any placeholders such as `{title}` intact.
4. Save the file as UTF-8 JSON. Close and reopen the Nexory library, then choose the language under **Settings → Language** and select **Save settings**.

A language pack can contain just a few messages, as in this Swedish example.

```json
{
  "name": "Svenska",
  "messages": {
    "clips": "Klipp",
    "settings": "Inställningar",
    "open_item": "Öppna {title}"
  }
}
```

**Auto** follows the Windows language preference when a matching pack is available. Missing strings fall back to English. Move any custom packs from an older build into `languages`. If a pack does not appear, check that it sits in that folder, that its filename ends in `.json`, and that its JSON is valid.

Language packs cover the library, settings, player, guide, and snip overlay. Windows dialogs, the native tray, and native error messages use their existing language.
