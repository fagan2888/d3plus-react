import React from "react";
import PropTypes from "prop-types";

import {Geomap} from "d3plus-geomap";
import {Donut, Pie, Tree, Treemap} from "d3plus-hierarchy";
import {Network} from "d3plus-network";
import {AreaPlot, BarChart, LinePlot, Plot, StackedArea} from "d3plus-plot";
import {Priestley} from "d3plus-priestley";
const typeLookup = {AreaPlot, BarChart, Donut, Geomap, LinePlot, Network, Pie, Plot, Priestley, StackedArea, Tree, Treemap};

/**
    @class Viz
    @extends React.Component
    @desc Creates SVG paths and coordinate points based on an array of data. See [this example](https://d3plus.org/examples/d3plus-geomap/getting-started/) for help getting started using the geomap generator.
*/
class Viz extends React.Component {

  /**
      @memberof Viz
      @desc Initializes the specific visualization's class instance and binds it to the container <div>.
      @private
  */
  componentDidMount() {

    const {type} = this.props;
    const Constructor = typeof type === "string" ? typeLookup[type] : type;

    const viz = new Constructor()
      .select(this.container);

    this.setState({viz});
  }

  /**
      @memberof Viz
      @desc Updates visualization config on component update.
      @private
  */
  componentDidUpdate() {

    const {config, dataFormat} = this.props;

    const viz = this.state.viz.config(this.context.d3plus || {});

    if (dataFormat && config.data) {
      viz
        .config(Object.assign({}, config, {data: []}))
        .data(config.data, dataFormat);
    }
    else viz.config(config);

    viz.render();

  }

  /**
      @memberof Viz
      @desc Renders an empty container to hold the visualization.
      @private
  */
  render() {
    return <div className="viz" ref={container => this.container = container}></div>;
  }

}

Viz.contextTypes = {d3plus: PropTypes.object};

/**
    @memberof Viz
    @param {Object} [config = {}] An object containing method/value pairs to be passed to the visualization's .config( ) method.
    @param {Function} [dataFormat = d3plus.dataFold] A custom formatting function to be used when formatting data from an AJAX request. The function will be passed the raw data returned from the request, and is expected to return an array of values used for the data method.
*/
Viz.defaultProps = {type: Treemap};
export default Viz;
