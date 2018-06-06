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
                minZoom: 3,
                zoom: 3,
                maxZoom: 7,
                noWrap: true,
                bounds: [[50, -30], [-45, 100]],
                maxBounds: [[50, -30], [-45, 100]],
                //crs: L.CRS.EPSG4326,
                //maxBounds: true,
                //bounds: [[46.2, -5.5], [50, 0.7]]
                attribution:
                    ''
            }
        },
        gotLocal: {
            url: 'tiles/bg/{z}/y{y}x{x}.png',
            options: {
                minZoom: 3,
                zoom: 3,
                maxZoom: 5,
                //center: [48, -3],
                bounds: [[90,-180],[-43.87, 171.37]],
                maxBounds: [[90,-180],[-43.87, 171.37]],
                noWrap: true,
                //crs: L.CRS.EPSG4326,
                //crs: L.CRS.EPSG3857,
                attribution: 
                    ''
            }
        },

        // special layers and labels
        gotLabels: {
            url: 'tiles/labels/{z}/y{y}x{x}.png',
            options: {
                minZoom: 3,
                maxZoom: 5,
                bounds: [[90,-180],[-43.87, 171.37]],
                maxBounds: [[90,-180],[-43.87, 171.37]],
                noWrap: true,
                attribution: 
                    ''
            }
        }
    };
        /**
        var bounds = new L.LatLngBounds(L.latLng(90,-180), L.latLng(-43.87, 171.37));
        
        // Configure the map
        var mapOptions = {
            maxZoom: 5,
            minZoom: 0,
            crs: hboZoom,
            mapBounds: bounds
        };

        */

    L.tileLayer.change = function (mapversion, options) {
        return new L.TileLayer.MapVersion(mapversion, options);
    };

    return L;
}));
