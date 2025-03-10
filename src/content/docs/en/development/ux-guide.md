---
title: UX Guidelines
description: 'Guidelines for how the Ultramarine Linux experience should be designed.'
---

Ultramarine Linux is supposed to be a user-friendly desktop operating system, and stay out the way of the user. These guidelines are meant to be a reference for how to implement the UX of Ultramarine Linux.

## Theming

We believe that the user should be able to easily customize the look and feel of Ultramarine Linux. But we want the default experience to be as minimalistic as possible, and not be full of clutter.

Applications should look and feel like they are in the same place as the rest of the desktop. This means consistent theming, and a consistent color scheme.

This also means that applications that use a dedicated styling library (libadwaita, libhelium, Material UI, etc.) are frowned upon for default apps, unless they are made for that exact ecosystem (libadwaita and libhelium apps on GNOME, for example).
The only exception for this is a case where there are no apps that functionally fit into the intended use case.

## UX

There are a few things that should be kept in mind when creating an application for Ultramarine Linux:

- The application should be designed to be usable on any desktop environment.

- Keep notifications to a minimum.

- Always let the user know what is happening.

- Let the user know what they're doing, and don't try to get in their way if they really want to do something. Which means allowing the user to do risky changes to their system, with a warning.


## DE Choice

Unlike what most people think about Ultramarine Linux, Ultramarine is not just supposed to be Fedora with a bunch of Desktop Environments. One should not expect the team to ship Ultramarine with every single desktop environment that they want to support.

The core Ultramarine team does not want to maintain every single desktop environment. Instead, consider offering to maintain packages yourself.

Ultramarine includes a pragmatic set of tweaks that are designed to get the user started as quickly as possible, not offer as many options as possible.
