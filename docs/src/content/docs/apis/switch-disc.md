---
title: switchDisc
---

Switches to a different disc in a multi-disc game. This method will load, if necessary, the needed disc to Emscripten filesystem and then send the needed commands to RetroArch.

Disc index starts at 1.

## Usage

```js
nostalgist = await Nostalgist.launch({
  core: 'pcsx_rearmed',
  rom: ['./disc.m3u', './disc01.chd', './disc02.chd', './disc03.chd', './disc04.chd'],
})

nostalgist.switchDisc(2)
```

## Returns

A Promise that resolves when the disc switch is complete.
