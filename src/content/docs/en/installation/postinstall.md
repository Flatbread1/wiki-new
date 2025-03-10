---
title: Post-installation
description: 'Things to do after installing Ultramarine Linux.'
---

After installing Ultramarine Linux, There are a few things you should do to make the most out of your new system.

## Install NVIDIA Drivers

If you have an NVIDIA GPU, you can install the latest drivers for it by running the following commands:

```bash
sudo dnf update # Update the system first, because NVIDIA drivers will build using the latest kernel.
sudo dnf install akmod-nvidia # Install the NVIDIA kernel module.
```
WARNING: You MUST wait until the akamods process to be finished before rebooting! Doing so may result in improper installation! 

Then, reboot your system.

### (Optimus Laptops) use the NVIDIA GPU as the primary GPU

Execute the following scripts to make your NVIDIA GPU the primary GPU:

```bash
sudo cp -p /usr/share/X11/xorg.conf.d/nvidia.conf /etc/X11/xorg.conf.d/nvidia.conf
sudo sed -i '10i\        Option "PrimaryGPU" "yes"' /etc/X11/xorg.conf.d/nvidia.conf # Add PrimaryGPU = yes to the 10th line of the file.
```

Then reboot your system.

Make sure you're using the Xorg version of your desktop environment.

## Install Codecs

Ultramarine Linux already includes the necessary codecs for the majority of the popular multimedia formats. You do not need to install any additional codecs.

## Set up Snapper (Btrfs Snapshots)
Currently, RPM's architecture does not handle snapper properly. You might experience broken RPM transactions when doing rollbacks. This is a known issue and must be addressed upstream.
