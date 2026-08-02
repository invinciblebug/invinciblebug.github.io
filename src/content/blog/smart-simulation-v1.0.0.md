---
title: "Smart Simulation v1.0.0"
description: "First public release of Smart Simulation for The Sims 4. An intelligent mod that detects and recovers from stalls, speeds up loading, and keeps gameplay smooth."
pubDate: 2026-08-02
tags: ["smart-simulation", "sims-4", "release"]
---

I am excited to share the first public release of **Smart Simulation v1.0.0**.

I built this mod because I was tired of watching my Sims freeze mid-simulation, getting stuck in routing loops, or just standing there doing the head bob thing while my game slowed to a crawl. I wanted something that fixes these problems without changing how the game plays.

Smart Simulation is that mod.

## What It Does

The mod quietly runs in the background and handles the annoying stuff:

- **Stall Recovery** - Automatically detects and recovers from Sims freezing or getting stuck.
- **Timeline Freeze Detection** - Detects when the game's internal timeline gets stuck and recovers gracefully.
- **Head Bobbing Prevention** - Fixes the annoying "head bob" freeze effect where Sims stare into space.
- **Fast Loading Screen** - Speeds up the loading screen with an adjustable multiplier.
- **Routing Stall Detection** - Detects and recovers from Sims stuck pathfinding.
- **Detailed Error Logs** - Includes sim info, lot details, and queued actions when errors occur.
- **Automatic Updates** - Notifies you when a new version is available.
- **In-Game Debug Commands** - View status, change settings, and run diagnostics without leaving the game.

## What It Does NOT Do

This is important to me. Smart Simulation does not:

- Change Sim autonomy
- Modify gameplay tuning
- Alter game speed (except during loading screens)
- Change NPC behavior
- Interfere with other mods

I wanted to build something that works alongside your existing mod setup, not replace it.

## Installation

1. Download the latest release from [GitHub](https://github.com/invinciblebug/SmartSimulation/releases/tag/v1.0.0) or [CurseForge](https://www.curseforge.com/sims4/mods/smart-simulation).
2. Extract the ZIP file.
3. Copy both files into `Documents/Electronic Arts/The Sims 4/Mods/`.
4. Enable **Custom Content and Mods** and **Script Mods Allowed** in Game Options > Other.
5. Restart The Sims 4.

The mod file is named: `[INVINCIBLEBUG] SmartSimulation v{version}.ts4script`

Both files must be in your Mods folder for the mod to work.

## In-Game Commands

Use these commands in the cheat console (`Ctrl+Shift+C`) while in Live mode:

| Command | Description |
|---------|-------------|
| `ss.status` | Show mod status and statistics |
| `ss.config` | Show all current settings |
| `ss.set_config <key> <value>` | Change a setting and save it |
| `ss.dump_timeline` | Dump timeline heap to log file |
| `ss.reset_state` | Reset watchdog state manually |
| `ss.diagnostics` | Dump full diagnostic report to log |
| `ss.help` | Show all available commands |

Example: `ss.set_config loading_speed_multiplier 5` to speed up loading screens.

## Configuration File (.dat)

You can also configure settings by editing the `smart_simulation.dat` file directly.

**Location:** `Documents/Electronic Arts/The Sims 4/[INVINCIBLEBUG]/smart_simulation.dat`

**Priority Chain:**
1. Runtime cheat commands (`ss.set_config`) - Highest priority
2. `.dat` file overrides (game start)
3. Mod defaults (hardcoded) - Lowest priority

Edit the `.dat` file before starting the game to apply your preferred settings automatically on startup.

## Compatibility

- **Windows** - Full support
- **macOS** - Full support
- **Linux** - Full support (including Steam/Proton, Lutris, and EA App versions)
- **Tested Version:** `1.126.73.1030`
- **Requires:** [Core Library by Lot 51](https://lot51.cc/mods/core-library) (included in the download)
- Works with the free version of The Sims 4 (no expansion packs required)
- Works offline with no internet connection needed

Smart Simulation is designed to work alongside MCCC, Basemental, Meaningful Stories, and other mods without conflicts.

## Detailed Error Logging

When an error or crash occurs, Smart Simulation logs detailed information:

- **Sim Info** - Which sim caused the error (name, age, NPC status)
- **Lot Details** - Current lot name and how many sims are on it
- **Queued Actions** - What the sim was trying to do when the error occurred
- **Full Traceback** - Complete error stack trace for debugging

Log files are stored in `Documents/Electronic Arts/The Sims 4/[INVINCIBLEBUG]/` with daily date-stamped filenames (`DD-MM-YYYY` format). Logs older than 30 days are automatically deleted.

## Troubleshooting

If the mod does not seem to be working:

1. **Script Mods Not Enabled** - Go to Game Options > Other > Enable Custom Content and Mods. Make sure both "Custom Content" and "Script Mods" are enabled. Restart the game after enabling.
2. **Files Not in Correct Location** - Both files must be in `Documents/Electronic Arts/The Sims 4/Mods/`. Files can only be one subfolder deep.
3. **Antivirus Blocking** - Some antivirus software may block script mods. Add the Mods folder to your exceptions list.
4. **Check Log Files** - Look for error messages in the `[INVINCIBLEBUG]` folder.

If Sims are still getting stuck, try increasing the stall threshold: `ss.set_config stall_count_threshold 300`

## Links

- [Download v1.0.0](https://github.com/invinciblebug/SmartSimulation/releases/tag/v1.0.0)
- [CurseForge](https://www.curseforge.com/sims4/mods/smart-simulation)
- [GitHub Repository](https://github.com/invinciblebug/SmartSimulation)
- [Bug Reports](https://github.com/invinciblebug/SmartSimulation/issues)
- [Discussions](https://github.com/invinciblebug/SmartSimulation/discussions)

Thank you for trying Smart Simulation. Feedback and bug reports are always appreciated.

- Invincible Bug
