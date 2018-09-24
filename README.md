# heatmap

This is the repository for RPIA's run heatmap, currently available at http://rpia.w1bbb.com. The admin page can be set to be accessed at the URL of your choice (currently, on the production site, it is behind password protection).

## Addition of locations
There are two ways to add events at specific locations.

### 1. Saved locations
The first way is to select a saved location, the latitude and longitude of should be stored in `/add/js/locations.json`. Text input searching is available, as well, for all saved locations.

### 2. Geoencoding or direct lat/long input
The second way is to search using customary address input. This particular package utilizes Google Map's geoencoding feature, which is very flexible. Inputs such as
>123 main st, anytown, ny

>1600 Pennsylvania Avenue, Washington, DC

>Statue of Liberty, NY

all work just as well. Zip codes can be used in place of city and state, and, usually, states can be left off entirely—so long as Google knows your current location.

## Bulk input

For both location input methods, a numerical selector is available to bulk-add events at single locations.

## Installation
Simply drop all the contained files in the web location of your choosing. Check out `/js/map.js` and `/add/js/info.js`, and add your Google Maps API key and other info in the appropriate locations.

---
## Credits
This project was created for RPI Ambulance and is available under the MIT License (and the licenses of any other packages used).
### Developers
* [Dan Bruce](http://github.com/ddbruce)
* [David Sparkman](http://github.com/David-Sparky)
