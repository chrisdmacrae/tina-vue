# POC of Vue + Tina

Showing how Tina can relatively easily play ball with Vue (or other frontend frameworks).

## Overview

This works by extracting the core Tina instance outside of either apps to serve as the "single source of truth" for your content.

Then, this instance gets passed to the Vue app to allow the app to interact w/ the CMS, and this instance is used to fetch and provide data to the Vue app via a global `data` key[1].

Then, the Tina react frontend can be mounted with the same CMS instance to enable the editing UI. React portals are used to decorate the Vue app w/ any additional UI or logic needed.

A Vue "provider" is used to dynamically update the data for a given route as the data changes, and render the portal.

[1]: See `src/main.js:35
