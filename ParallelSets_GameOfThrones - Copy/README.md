# d3.parsets.userFilt

<b>An interactive parallel sets visualisation using D3.js.</b>

### Justin Gosses, 2016

Parallel Set Visualizations are a great way to show relationships and distribution in a dataset with many shared categorical data dimensions, but they can quickly become a visual mess if they have too many dimensions or too many unique categories for each dimension. 

#### This is an attempt to minimize that problem by adding some UI features that let the user :
####    1. Choose which dimensions to show
####    2. Limit the data shown to data that matches certain values for certain dimensions

#### These changes move this parallel set visualization into more a data exploration tool. 

### This project is live <a href="https://justingosses.github.io/ParallelSets_GameOfThrones/">as a githib.io webpage</a>.

This project builds upon [d3.parsets](http://www.jasondavies.com/parallel-sets/) by Jason Davies, which was based on the GUI [Parallel Sets](http://eagereyes.org/parallel-sets) by Robert Kosara and Caroline Ziemkiewicz. 

#### More Information:
More information can be found in a <a href="www.justingosses.com/parallelsets">blog</a> post and on <a href="https://github.com/JustinGOSSES/ParallelSets_GameOfThrones">github</a>. 

#### Notes:

   - This application uses a tooltip function that conflicts with the bootstrap toolstrap namespace. If you're going to use bootstrap, one way around this is to only use a subset of the bootstrap CSS which excludes tooltip information.
   - Some functions were created to handle spaces and special characters in input data, but there is still possibilities of problems there. 


![alt tag](/images/ScreenShotReadMe.png)
=====================================================

### This section applies to the d3.parsets.userFilt.js file

<a name="userFilt_dimension_options" href="#userFilt">#</a> userFilt.<b>dimension_options</b>

Is an array that contains the various categories or dimensions the user can pick from to be visualized. These will be the column headers in the input CSV.

<a name="userFilt_selected_options" href="#userFilt">#</a> userFilt.<b>selected_options</b>

This is an array of the dimensions options chosen to the visualized. It is a subset of the dimension options array. This array is populated initially in the code and then modified by the user via a drop-down menu. 

<a name="userFilt_limitations" href="#userFilt">#</a> userFilt.<b>limitations</b>

This is an object consisting of multiple key value pairs where the key is a dimension and the value is an array of values for that dimension. In the situation where the user wants to visualize only some of the values in a given dimension, they are populated and depopulated in here. If they are present, that means the resulting data being given to the parallel sets visualization is limited to the data that matches those vaues for that dimension. For example, it can be limited to only battles that involve the House of Stark as a defender. 

<a name="userFilt_uniqueValuesForEachDimensionArrayOfObj" href="#userFilt">#</a> userFilt.<b>uniqueValuesForEachDimensionArrayOfObj</b>

 This is an array of all unique values for each dimension, used to populate secondary drop-down menu

<a name="userFilt_state" href="#userFilt">#</a> userFilt.<b>state</b>

 Object that keeps track of how many times the visualization has been rebuilt.


=====================================================

### This section applies to the d3.parsets.js file

Documentation below directly copied from https://github.com/jasondavies/d3-parsets

### API

<a name="d3_parsets" href="#d3_parsets">#</a> d3.<b>parsets</b>()

Creates a new parallel sets chart with default settings: dimensions are automatically detected and the size is 960×600. The chart is a function that can be called on any D3 selection that has data bound to it.  This function can be configured as described below.

<a name="parsets_dimensions" href="#parsets_dimensions">#</a> parsets.<b>dimensions</b>(<i>dimensions</i>)

If *dimensions* is specified, sets the categorical dimensions to be visualised. If a function is specified, it is invoked for every element in the target selection and an array of dimension names is expected in return. If an array is specified, it should be an array of dimension names (object keys).

If *dimensions* is not specified, returns the current dimensions.

<a name="parsets_value" href="#parsets_value">#</a> parsets.<b>value</b>(<i>value</i>)

Specifies the value accessor. If *value* is not specified, returns the current value accessor. The default accessor simply returns 1 for each input data element i.e. the absolute frequency count. This value is used to set the width of the horizontal bars and connecting ribbons in proportion to the value.

If the input data is a pivot table, you’ll want to set this to return the aggregate sum for each input data element.  You could also use an arbitrary numerical measure instead of frequency if appropriate.

<a name="parsets_width" href="#parsets_width">#</a> parsets.<b>width</b>(<i>width</i>)

Specifies the chart width in pixels. If *width* is not specified, returns the current width, which defaults to 960.

<a name="parsets_height" href="#parsets_height">#</a> parsets.<b>height</b>(<i>height</i>)

Specifies the chart height in pixels. If *height* is not specified, returns the current height, which defaults to 600.

If a negative height is specified, this causes the dimensions to be reversed vertically, and you need to set the appropriate translate transform in the chart’s parent `<g>` element.

<a name="parsets_spacing" href="#parsets_spacing">#</a> parsets.<b>spacing</b>(<i>spacing</i>)

Specifies the total amount of spacing in pixels to be divided between the horizontal category bars. If *spacing* is not specified, returns the current spacing, which defaults to 20.

<a name="parsets_tension" href="#parsets_tension">#</a> parsets.<b>tension</b>(<i>tension</i>)

Specifies the tension for the ribbon curves. This should be a value between 0 and 1 inclusive. If *tension* is not specified, returns the current tension, which defaults to 1 (straight lines).

<a name="parsets_duration" href="#parsets_duration">#</a> parsets.<b>duration</b>(<i>duration</i>)

Specifies the duration for the animated transitions in milliseconds. If *duration* is not specified, returns the current duration, which defaults to 500.

<a name="parsets_dimensionFormat" href="#parsets_dimensionFormat">#</a> parsets.<b>dimensionFormat</b>(<i>dimensionFormat</i>)

Specifies a formatting function for the dimension name. If *dimensionFormat* is not specified, returns the current formatting function, which defaults to <code>String</code>.

<a name="parsets_tooltip" href="#parsets_tooltip">#</a> parsets.<b>tooltip</b>(<i>tooltip</i>)

Specifies a formatting function for the ribbon tooltip. If *tooltip* is not specified, returns the current formatting function, which defaults to:

    function(d) {
      var count = d.count,
          path = [];
      while (d.parent) {
        if (d.name) path.unshift(d.name);
        d = d.parent;
      }
      return path.join(" → ") + "<br>" + comma(count) + " (" + percent(count / d.count) + ")";
    }

<a name="parsets_categoryTooltip" href="#parsets_categoryTooltip">#</a> parsets.<b>categoryTooltip</b>(<i>categoryTooltip</i>)

Specifies a formatting function for the category tooltip. If *categoryTooltip* is not specified, returns the current formatting function, which defaults to:

    function(d) {
      return d.name + "<br>" + comma(d.count) + " (" + percent(d.count / d.dimension.count) + ")";
    }

<a name="parsets_on" href="#parsets_on">#</a> parsets.<b>on</b>(<i>type</i>, <i>listener</i>)

Registers the specified <i>listener</i> to receive events of the specified <i>type</i> from the chart.  Currently, this includes "sortDimensions" and "sortCategories", which are fired when dimensions or categories are reordered.
