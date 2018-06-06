(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['leaflet'], factory);
    } else if (typeof modules === 'object' && module.exports) {
        // define a Common JS module that relies on 'leaflet'
        module.exports = factory(require('leaflet'));
    } else {
        // Assume Leaflet is loaded into global object L already
        factory(L);
    }
} (this, function (L) {
    'use strict';

    L.TileLayer.MapVersion = L.TileLayer.extend({
        initialize: function (versionName, options) {
            var versions = L.TileLayer.MapVersion.stored;

            if (!versions[versionName]) {
                throw 'No such map (' + versionName + ')';
                }

            var version = {
                url: versions[versionName].url,
                options: versions[versionName].options
                }


            // Compute final options combining version options with any user overrides
            var layerOpts = L.Util.extend({}, version.options, options);
            L.TileLayer.prototype.initialize.call(this, version.url, layerOpts);
        }
    });

    /**
     * Syntax of map tiles:
     * see http://leafletjs.com/reference.html#tilelayer for options in the options map.
     *
     * We need to be careful about bounds and wrapping, as well as starting coordinates.
     */

    L.TileLayer.MapVersion.stored = {
        gotClassic: {
            url: 'https://cartocdn-ashbu.global.ssl.fastly.net/ramirocartodb/api/v1/map/named/tpl_d44e8b0f_a525_4d23_b93a_71aba54674bc/all/{z}/{x}/{y}.png',
            options: {
                minZoom: 4,
                maxZoom: 21,
                noWrap: true,
                //maxBounds: true,
                //bounds: [[46.2, -5.5], [50, 0.7]]
                attribution:
                    ''
            }
        },
        gotHBO: {
            url: 'http://tiles.got.show/bg/{z}/y{y}x{x}.png',
            options: {
                maxZoom: 18,
                attribution: 
                    ''
            }
        },
        gotLocal: {
            url: 'bg/{z}/y{y}x{x}.png',
            options: {
                maxZoom: 18,
                attribution: 
                    ''
            }
        },
        gotRealms: {
            url: 'bg/{z}/y{y}x{x}.png',
            options: {
                maxZoom: 18,
                attribution: 
                    ''
            }
        }
    };

    L.tileLayer.change = function (mapversion, options) {
        return new L.TileLayer.MapVersion(mapversion, options);
    };

    return L;
}));
