---
layout: default
---

# Geforce-Kepler-patcher

### This patcher not work on macOS Ventura 13


```diff
+ Nvidia Kepler Binaries
   # /System/Library/Extensions
        GeForce.kext ➣ "12.0 Beta 6"
        NVDAGF100Hal.kext ➣ "12.0 Beta 6"
        NVDAGK100Hal.kext ➣ "12.0 Beta 6"
        NVDAResman.kext ➣ "12.0 Beta 6"
        NVDAStartup.kext ➣ "12.0 Beta 6"
        GeForceAIRPlugin.bundle ➣ "11.0 Beta 3"
        GeForceGLDriver.bundle ➣ "11.0 Beta 3"
        GeForceMTLDriver.bundle ➣ "11.0 Beta 3"
        GeForceVADriver.bundle ➣ "12.0 Beta 6"
     
   # /System/Library/Frameworks
        Metal.framework ➣ "12.5 Beta 2"
        
   # /System/Library/Frameworks
        WebKit.framework ➣ "11.6"
        
   # /System/Library/PrivateFrameworks
        GPUCompiler.framework ➣ "11.6"
   
        
        

```

#### Download ➤ [Geforce-Kepler-patcher-V7](https://github.com/chris1111/Geforce-Kepler-patcher/releases/tag/V7) Use after macOS Monterey 12.5 Beta 2 and Higher only
#### Download ➤ [Geforce-Kepler-patcher-V6](https://github.com/chris1111/Geforce-Kepler-patcher/releases/tag/V6) Use after macOS Monterey 12.5 Beta 2 and Higher only
#### Download ➤ [Geforce-Kepler-patcher-V3](https://github.com/chris1111/Geforce-Kepler-patcher/releases/tag/V3) Use before macOS Monterey 12.5 Beta 2 and Lower only 

### Latest Update 13 May 2023 Adapted for Monterey 12.6.5.
### How to Update macOS Monterey 12.6.6 ➤ [Update macOS Monterey 12.6.6](https://github.com/chris1111/Geforce-Kepler-patcher/blob/Master/Update%2012.6.6.md)
------------------------------------------------------------------------

- Update 25 Feb 2023 edit readme in main script.
- Update 24 Feb 2023 release V6 Fix Safari crash.
- Update 22 Sept 2022 release V5 Add Uninstaller option to revert last sealed snapshot
- Update 17 August 2022 Close button after 3 sec on Unmount snapshot
- Update 06 August 2022 FIX kepler patcher 12.5 (21G72) - Login loop is resolved

------------------------------------------------------------------------

- Build by chris1111
- Created from Script Debuger
- Credit: Base on [Jackluke methode](https://github.com/jacklukem), Find binaries [KhronoKernel](https://github.com/dortania/PatcherSupportPkg)

------------------------------------------------------------------------

#### For Hackintosh with Graphics cards based on Kepler architecture only!
- If you have a Real MAC use [OCLP](https://github.com/dortania/OpenCore-Legacy-Patche

#### Troubleshooting Terminal ➦ `tccutil reset AppleEvents`


#### Working for macOS Monterey Beta 7 and Later

#### Use this program after updated macOS Monterey 12 Beta 7xx only, do not use before updating Beta 7xx !
To using this program SIP security must be disable

###  SIP fully Disable ⬇︎
- Usage OpenCore: csrutil authenticated-root disable `csr-active-config` ➤ EF0F0000
- Usage Clover: csrutil authenticated-root disable `csr-active-config` ➤ 0xFEF
- This value Also works for Clover `csr-active-config` ➤ 0x867

###  SIP Enable ⬇︎ 
- Usage OpenCore: csrutil enable + csrutil authenticated-root disable `csr-active-config` ➤ 00080000
- IMPORTANT NOTE: This csrutil authenticated-root disable value cannot be used to install the program, if you want to use it you will have to change it after installation with ➤  `EF0F0000`
 


### ⬇︎ SecureBootModel must be Disabled in config.plist
- `SecureBootModel` ➤ Disabled

- Gatekeeper must be disable
#### IMPORTANT NOTE: The csrutil authenticated-root values must be applied before you use this peogram so if you have not already changed and made a Reset NVRAM do it and reboot then use the program. Also SecureBootModel must be Disabled in config.plist.

#### This will create a Snapshot disk then install
### /System/Library/Extensions/

- GeForce.kext
- GeForceAIRPlugin.bundle
- GeForceGLDriver.bundle
- GeForceMTLDriver.bundle
- GeForceVADriver.bundle
- NVDAGF100Hal.kext
- NVDAGK100Hal.kext
- NVDAResman.kext
- NVDAStartup.kext

### /System/Library/Frameworks/
- Metal.framework
- WebKit.framework

### /System/Library/PrivateFrameworks
- GPUCompiler.framework

Working for Monterey 12 Beta 7 and Higher only!

- View full Video ⬇︎

[![Modular Image Creation](https://user-images.githubusercontent.com/6248794/134072536-7c46b8cc-4d8b-42f9-a28a-3c02734f1f5d.png)](https://www.youtube.com/watch?v=X0seonNM_1Y)


