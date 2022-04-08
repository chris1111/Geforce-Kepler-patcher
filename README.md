# Geforce-Kepler-patcher

### Download ➤ [Geforce-Kepler-patcher-V2](https://github.com/chris1111/Geforce-Kepler-patcher/releases/tag/V2)

### Download ➤ [Geforce-Kepler-patcher-V1](https://github.com/chris1111/Geforce-Kepler-patcher/releases/tag/V1)

Welcome Geforce Kepler patcher

- Build by chris1111
- Created from Script Debuger
- Credit: Base on [Jackluke methode](https://github.com/jacklukem), Find binaries [KhronoKerel](https://github.com/dortania/PatcherSupportPkg)

#### For Hackintosh with Graphics cards based on Kepler architecture only!
- If you have a Real MAC use [OCLP](https://github.com/dortania/OpenCore-Legacy-Patcher)

#### Troubleshooting Terminal ➦ tccutil reset AppleEvents

#### Working for macOS Monterey Beta 7 and Later

#### Use this program after updated macOS Monterey 12 Beta 7xx only, do not use before updating Beta 7xx !
To using this program SIP security must be disable

- csrutil authenticated-root disable
- Usage OpenCore csrutil authenticated-root disable (csr-active-config ➤ EF0F0000
- Usage OpenCore csrutil status enable csrutil authenticated-root disable (csr-active-config ➤ 00080000

- Usage Clover csrutil authenticated-root disable (csr-active-config ➤ 0xFEF
- This value Also works for Clover (csr-active-config ➤ 0x867
- SecureBootModel ➤ Disabled
- Gatekeeper must be disable
#### IMPORTANT NOTE: The csrutil authenticated-root values must be applied before you use this peogram so if you have not already changed and made a Reset NVRAM do it and reboot then use the program. Also SecureBootModel must be Disabled in config.plist.

#### This will create a Snapshot disk then install
- GeForce.kext
- GeForceAIRPlugin.bundle
- GeForceGLDriver.bundle
- GeForceMTLDriver.bundle
- GeForceVADriver.bundle
- NVDAGF100Hal.kext
- NVDAGK100Hal.kext
- NVDAResman.kext
- NVDAStartup.kext
- in / System / Library / Extensions 


Working for Monterey 12 Beta 7 and Higher only!

- View full Video ⬇︎

[![Modular Image Creation](https://user-images.githubusercontent.com/6248794/134072536-7c46b8cc-4d8b-42f9-a28a-3c02734f1f5d.png)](https://www.youtube.com/watch?v=X0seonNM_1Y)


