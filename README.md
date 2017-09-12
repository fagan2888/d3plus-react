# d3plus-react

[![NPM Release](http://img.shields.io/npm/v/d3plus-react.svg?style=flat)](https://www.npmjs.org/package/d3plus-react)
[![Build Status](https://travis-ci.org/d3plus/d3plus-react.svg?branch=master)](https://travis-ci.org/d3plus/d3plus-react)
[![Dependency Status](http://img.shields.io/david/d3plus/d3plus-react.svg?style=flat)](https://david-dm.org/d3plus/d3plus-react)
[![Gitter](https://img.shields.io/gitter/room/nwjs/nw.js.svg?style=flat)](https://gitter.im/d3plus/)

React components for d3plus visualizations.

## Installing

Use `npm install d3plus-react -S` to install the package as a dependency. And then use the components in your React project like this:

```jsx
import {Treemap} from "d3plus-react";

const data = [
  {id: "alpha", value: 29},
  {id: "beta",  value: 10}
];

<Treemap config={{data}} />
```

Additionally, a file named `.d3plus.js` needs to exist in the root path of your project. This file should contain all global styles to be applied to the visualizations (passed to the .config( ) method). Here is an example that makes all of your visualizations use the best font ever created:
```js
export default {
  shapeConfig: {
    fontFamily: "Comic Sans MS"
  }
};
```

## API Reference

##### Classes
* [AreaPlot](#AreaPlot)
* [BarChart](#BarChart)
* [Donut](#Donut)
* [Geomap](#Geomap)
* [LinePlot](#LinePlot)
* [Network](#Network)
* [Pie](#Pie)
* [Plot](#Plot)
* [Priestley](#Priestley)
* [StackedArea](#StackedArea)
* [Tree](#Tree)
* [Treemap](#Treemap)
* [Viz](#Viz)

---

<a name="AreaPlot"></a>
#### **AreaPlot** [<>](https://github.com/d3plus/d3plus-react/blob/master/src/AreaPlot.jsx#L4)


This is a global class, and extends all of the methods and functionality of [<code>Viz</code>](#Viz).

---

<a name="BarChart"></a>
#### **BarChart** [<>](https://github.com/d3plus/d3plus-react/blob/master/src/BarChart.jsx#L4)


This is a global class, and extends all of the methods and functionality of [<code>Viz</code>](#Viz).

---

<a name="Donut"></a>
#### **Donut** [<>](https://github.com/d3plus/d3plus-react/blob/master/src/Donut.jsx#L4)


This is a global class, and extends all of the methods and functionality of [<code>Viz</code>](#Viz).

---

<a name="Geomap"></a>
#### **Geomap** [<>](https://github.com/d3plus/d3plus-react/blob/master/src/Geomap.jsx#L4)


This is a global class, and extends all of the methods and functionality of [<code>Viz</code>](#Viz).

---

<a name="LinePlot"></a>
#### **LinePlot** [<>](https://github.com/d3plus/d3plus-react/blob/master/src/LinePlot.jsx#L4)


This is a global class, and extends all of the methods and functionality of [<code>Viz</code>](#Viz).

---

<a name="Network"></a>
#### **Network** [<>](https://github.com/d3plus/d3plus-react/blob/master/src/Network.jsx#L4)


This is a global class, and extends all of the methods and functionality of [<code>Viz</code>](#Viz).

---

<a name="Pie"></a>
#### **Pie** [<>](https://github.com/d3plus/d3plus-react/blob/master/src/Pie.jsx#L4)


This is a global class, and extends all of the methods and functionality of [<code>Viz</code>](#Viz).

---

<a name="Plot"></a>
#### **Plot** [<>](https://github.com/d3plus/d3plus-react/blob/master/src/Plot.jsx#L4)


This is a global class, and extends all of the methods and functionality of [<code>Viz</code>](#Viz).

---

<a name="Priestley"></a>
#### **Priestley** [<>](https://github.com/d3plus/d3plus-react/blob/master/src/Priestley.jsx#L4)


This is a global class, and extends all of the methods and functionality of [<code>Viz</code>](#Viz).

---

<a name="StackedArea"></a>
#### **StackedArea** [<>](https://github.com/d3plus/d3plus-react/blob/master/src/StackedArea.jsx#L4)


This is a global class, and extends all of the methods and functionality of [<code>Viz</code>](#Viz).

---

<a name="Tree"></a>
#### **Tree** [<>](https://github.com/d3plus/d3plus-react/blob/master/src/Tree.jsx#L4)


This is a global class, and extends all of the methods and functionality of [<code>Viz</code>](#Viz).

---

<a name="Treemap"></a>
#### **Treemap** [<>](https://github.com/d3plus/d3plus-react/blob/master/src/Treemap.jsx#L4)


This is a global class, and extends all of the methods and functionality of [<code>Viz</code>](#Viz).

---

<a name="Viz"></a>
#### **Viz** [<>](https://github.com/d3plus/d3plus-react/blob/master/src/Viz.jsx#L13)


This is a global class, and extends all of the methods and functionality of <code>React.Component</code>.


* [Viz](#Viz) ⇐ <code>React.Component</code>
    * [new Viz()](#new_Viz_new)
    * [.defaultProps](#Viz.defaultProps)


<a name="new_Viz_new" href="#new_Viz_new">#</a> new **Viz**()

Creates SVG paths and coordinate points based on an array of data. See [this example](https://d3plus.org/examples/d3plus-geomap/getting-started/) for help getting started using the geomap generator.





<a name="Viz.defaultProps" href="#Viz.defaultProps">#</a> Viz.**defaultProps** [<>](https://github.com/d3plus/d3plus-react/blob/master/src/Viz.jsx#L76)


This is a static property of [<code>Viz</code>](#Viz).

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [config] | <code>Object</code> | <code>{}</code> | An object containing method/value pairs to be passed to the visualization's .config( ) method. |
| [dataFormat] | <code>function</code> | <code>d3plus.dataFold</code> | A custom formatting function to be used when formatting data from an AJAX request. The function will be passed the raw data returned from the request, and is expected to return an array of values used for the data method. |


---

###### <sub>Documentation generated on Tue, 12 Sep 2017 20:38:55 GMT</sub>
