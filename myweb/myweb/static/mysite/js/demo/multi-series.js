
FusionCharts.ready(function() {
    var popularityChart = new FusionCharts({
      type: 'msline',
      renderAt: 'chart-container',
      width: '100%',
      height: '400',
      dataFormat: 'json',
      dataSource: {
        "chart": {
          "caption": "Social Media Platforms Popularity",
          "subCaption": "2012-2016",
          "theme": "hulk-light",
          "showhovereffect": "1",
          "xAxisName": "Years",
          "showValues": "0",
          "numbersuffix": "%",
          "drawCrossLine": "1",
          "crossLineAlpha": "100",
          "crossLineColor": "#cc3300"
        },
        "categories": [{
          "category": [{
              "label": "2012"
            }, {
              "label": "2013"
            }, {
              "label": "2014"
            }, {
              "label": "2015"
            }, {
              "label": "2016"
            }
  
          ]
        }],
        "dataset": [{
          "seriesname": "Facebook",
          "anchorBgColor": "#876EA1",
          "data": [{
              "value": "62"
            }, {
              "value": "64"
            }, {
              "value": "64"
            }, {
              "value": "66"
            }, {
              "value": "78"
            }
  
          ]
        }, {
          "seriesname": "Instagram",
          "anchorBgColor": "#72D7B2",
          "data": [{
            "value": "16"
          }, {
            "value": "18"
          }, {
            "value": "24"
          }, {
            "value": "26"
          }, {
            "value": "32"
          }]
        }, {
          "seriesname": "LinkedIn",
          "anchorBgColor": "#77BCE9",
          "data": [{
            "value": "20"
          }, {
            "value": "22"
          }, {
            "value": "27"
          }, {
            "value": "22"
          }, {
            "value": "29"
          }]
        }, {
          "seriesname": "Twitter",
          "anchorBgColor": "#E5B556",
          "data": [{
            "value": "18"
          }, {
            "value": "19"
          }, {
            "value": "21"
          }, {
            "value": "21"
          }, {
            "value": "24"
          }]
        }]
  
      }
    }).render();
  });
  