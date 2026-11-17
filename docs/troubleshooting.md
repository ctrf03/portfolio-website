# Troubleshooting log

## WSL could not connect to GitHub with VPN active

Date: 2026-11-17
Environment: Windows 11, WSL 2.6.3, Ubuntu on WSL2,
Cisco AnyConnect active.

### Problem
Cloning the repository over HTTPS failed with a connection timeout.

### Investigation
- Windows could connect to github.com on port 443.
- curl inside WSL timed out.
- WSL successfully resolved github.com to an IPv4 address.
- Forcing IPv4 did not help.
- Connecting to the IP Windows had reached, while preserving
  the HTTPS hostname, also timed out.

These checks suggested a WSL connectivity issue rather than
Git authentication or DNS resolution alone.

### Change
Configured the following in the Windows user profile's .wslconfig:

    [wsl2]
    networkingMode=mirrored
    dnsTunneling=true

Restarted WSL using `wsl --shutdown`.

### Result
Connectivity worked after restarting WSL with the new settings.
The exact underlying VPN interaction was not confirmed.

### What I learned
- Successful DNS resolution does not guarantee network connectivity.
- Comparing Windows and WSL helped narrow the investigation.
- A connection timeout happens before Git authentication.
- Both settings changed together, so this test did not establish
  which setting was responsible for restoring connectivity.
