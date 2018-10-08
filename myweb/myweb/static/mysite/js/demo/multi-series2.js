FusionCharts.ready(
function() {
var popularityChart = new FusionCharts(
{
type: 'msline',
 renderAt: 'chart-container',
 width : '100%',
 height: '400',
 dataFormat: 'json',
 
dataSource:{
  
"chart": {
"caption": "Social Media Platforms Popularity",
"subCaption": "2012-2016",
"theme": "hulk-light",
"showhovereffect": "1",
"xAxisName": "Years",
"showValues": "141",
"drawCrossLine": "1",
"crossLineAlpha": "100",
"crossLineColor": "#cc3300"
   },
 
'categories':[{
'category': [{'label': '2018-06-22'}, {'label': '2018-06-25'}, {'label': '2018-06-26'}, {'label': '2018-06-27'}, {'label': '2018-06-28'}, {'label': '2018-06-29'}, {'label': '2018-07-02'}, {'label': '2018-07-03'}, {'label': '2018-07-04'}, {'label': '2018-07-05'}, {'label': '2018-07-06'}, {'label': '2018-07-09'}, {'label': '2018-07-10'}, {'label': '2018-07-11'}, {'label': '2018-07-12'}, {'label': '2018-07-13'}, {'label': '2018-07-16'}, {'label': '2018-07-17'}, {'label': '2018-07-18'}, {'label': '2018-07-19'}, {'label': '2018-07-20'}, {'label': '2018-07-23'}, {'label': '2018-07-24'}, {'label': '2018-07-25'}, {'label': '2018-07-26'}, {'label': '2018-07-27'}, {'label': '2018-07-30'}, {'label': '2018-07-31'}, {'label': '2018-08-01'}, {'label': '2018-08-02'}, {'label': '2018-08-03'}, {'label': '2018-08-07'}, {'label': '2018-08-08'}, {'label': '2018-08-09'}, {'label': '2018-08-10'}, {'label': '2018-08-13'}, {'label': '2018-08-14'}, {'label': '2018-08-15'}, {'label': '2018-08-16'}, {'label': '2018-08-17'}, {'label': '2018-08-20'}, {'label': '2018-08-21'}, {'label': '2018-08-22'}, {'label': '2018-08-23'}, {'label': '2018-08-24'}, {'label': '2018-08-28'}, {'label': '2018-08-29'}, {'label': '2018-08-30'}, {'label': '2018-08-31'}, {'label': '2018-09-03'}, {'label': '2018-09-04'}, {'label': '2018-09-05'}, {'label': '2018-09-06'}, {'label': '2018-09-07'}, {'label': '2018-09-10'}, {'label': '2018-09-11'}, {'label': '2018-09-12'}, {'label': '2018-09-13'}, {'label': '2018-09-14'}, {'label': '2018-09-17'}]}] ,
 'dataset':[{
'seriesname': 'Pirce',
 'anchorBgColor':'#849e93',
 'data':[{'value': '142.46'}, {'value': '142.0'}, {'value': '142.7'}, {'value': '141.99'}, {'value': '143.31'}, {'value': '143.64'}, {'value': '142.91'}, {'value': '143.58'}, {'value': '143.58'}, {'value': '145.4'}, {'value': '146.04'}, {'value': '144.78'}, {'value': '145.21'}, {'value': '144.87'}, {'value': '145.35'}, {'value': '144.91'}, {'value': '144.23'}, {'value': '143.31'}, {'value': '142.83'}, {'value': '144.29'}, {'value': '142.95'}, {'value': '142.59'}, {'value': '141.96'}, {'value': '143.16'}, {'value': '143.56'}, {'value': '142.25'}, {'value': '142.12'}, {'value': '144.41'}, {'value': '145.34'}, {'value': '144.76'}, {'value': '146.6'}, {'value': '146.0'}, {'value': '145.47'}, {'value': '145.84'}, {'value': '144.33'}, {'value': '144.1'}, {'value': '144.69'}, {'value': '145.88'}, {'value': '147.0'}, {'value': '148.26'}, {'value': '148.23'}, {'value': '147.11'}, {'value': '146.43'}, {'value': '146.11'}, {'value': '146.97'}, {'value': '148.34'}, {'value': '148.37'}, {'value': '147.61'}, {'value': '148.02'}, {'value': '148.02'}, {'value': '146.44'}, {'value': '147.0'}, {'value': '147.45'}, {'value': '146.02'}, {'value': '146.71'}, {'value': '146.73'}, {'value': '146.74'}, {'value': '147.63'}, {'value': '146.62'}, {'value': '147.41'}]
},{
'seriesname': 'RedSign',
 'anchorBgColor':'#d30e49',
 'data':[{'value': 'nan'}, {'value': 'nan'}, {'value': 'nan'}, {'value': 'nan'}, {'value': 'nan'}, {'value': 'nan'}, {'value': 'nan'}, {'value': 'nan'}, {'value': 'nan'}, {'value': 'nan'}, {'value': 'nan'}, {'value': 'nan'}, {'value': 'nan'}, {'value': 'nan'}, {'value': 'nan'}, {'value': 'nan'}, {'value': 'nan'}, {'value': 'nan'}, {'value': 'nan'}, {'value': 'nan'}, {'value': 'nan'}, {'value': 'nan'}, {'value': 'nan'}, {'value': 'nan'}, {'value': 'nan'}, {'value': 'nan'}, {'value': 'nan'}, {'value': 'nan'}, {'value': 'nan'}, {'value': 'nan'}, {'value': 'nan'}, {'value': 'nan'}, {'value': 'nan'}, {'value': 'nan'}, {'value': 'nan'}, {'value': 'nan'}, {'value': 'nan'}, {'value': 'nan'}, {'value': 'nan'}, {'value': 'nan'}, {'value': 'nan'}, {'value': 'nan'}, {'value': 'nan'}, {'value': 'nan'}, {'value': 'nan'}, {'value': 'nan'}, {'value': 'nan'}, {'value': 'nan'}, {'value': 'nan'}, {'value': 'nan'}, {'value': 'nan'}, {'value': 'nan'}, {'value': 'nan'}, {'value': 'nan'}, {'value': 'nan'}, {'value': 'nan'}, {'value': 'nan'}, {'value': 'nan'}, {'value': 'nan'}, {'value': 'nan'}]
},{
'seriesname': 'BlueSign',
 'anchorBgColor':'#1e44ed',
 'data':[{'value': 'nan'}, {'value': 'nan'}, {'value': 'nan'}, {'value': 'nan'}, {'value': 'nan'}, {'value': 'nan'}, {'value': 'nan'}, {'value': 'nan'}, {'value': 'nan'}, {'value': 'nan'}, {'value': 'nan'}, {'value': 'nan'}, {'value': 'nan'}, {'value': 'nan'}, {'value': 'nan'}, {'value': 'nan'}, {'value': 'nan'}, {'value': 'nan'}, {'value': 'nan'}, {'value': 'nan'}, {'value': 'nan'}, {'value': 'nan'}, {'value': 'nan'}, {'value': 'nan'}, {'value': 'nan'}, {'value': 'nan'}, {'value': 'nan'}, {'value': 'nan'}, {'value': 'nan'}, {'value': 'nan'}, {'value': 'nan'}, {'value': 'nan'}, {'value': 'nan'}, {'value': 'nan'}, {'value': 'nan'}, {'value': 'nan'}, {'value': 'nan'}, {'value': 'nan'}, {'value': 'nan'}, {'value': 'nan'}, {'value': 'nan'}, {'value': 'nan'}, {'value': 'nan'}, {'value': 'nan'}, {'value': 'nan'}, {'value': 'nan'}, {'value': 'nan'}, {'value': 'nan'}, {'value': 'nan'}, {'value': 'nan'}, {'value': 'nan'}, {'value': 'nan'}, {'value': 'nan'}, {'value': 'nan'}, {'value': 'nan'}, {'value': 'nan'}, {'value': 'nan'}, {'value': 'nan'}, {'value': 'nan'}, {'value': 'nan'}]
}] }}
).render();
});