webpackJsonp([51],{1642:function(t,a,e){"use strict";var s=this&&this.__decorate||function(t,a,e,s){var n,l=arguments.length,r=l<3?a:null===s?s=Object.getOwnPropertyDescriptor(a,e):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,a,e,s);else for(var p=t.length-1;p>=0;p--)(n=t[p])&&(r=(l<3?n(r):l>3?n(a,e,r):n(a,e))||r);return l>3&&r&&Object.defineProperty(a,e,r),r},n=this&&this.__metadata||function(t,a){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,a)};Object.defineProperty(a,"__esModule",{value:!0});var l=e(0),r=e(259),p=function(){function t(){this.htmlCode=e(2326),this.jsCode=e(2327),this.cssCode=e(2325),this.tooltipsHtml=e(2328),this.codepen={html:this.htmlCode,htmlAttributes:{"ng-controller":"SparkChartCtrl as vm"},js:[this.jsCode],css:[this.cssCode]},this.charts=[{type:"spark-chart1",value:35,fillHeight:10,topLeftLabel:"<span class='spark-label hidden-xxxs'><span class='large'>21.7</span><span class='medium light'>&nbsp;MB&nbsp;&nbsp;Items&nbsp;&nbsp;(35%)</span></span>",tooltip:"Spark Line indicator - 2.17MB of 8.2GB occupied (35%)"},{type:"spark-chart3",value:30,fillHeight:5,inlineLabel:"30%"},{type:"spark-chart2",value:35,fillHeight:10,topLeftLabel:"<span class='spark-label hidden-xxxs'><span class='large'>21.7</span><span class='medium light'>&nbsp;MB&nbsp;&nbsp;Items&nbsp;&nbsp;(35%)</span></span>",bottomLeftLabel:'<span class="spark-label hidden-xxxs"><span class="medium light">INDEX COVERAGE</span></span>',tooltip:"Spark Line indicator - 2.17MB of 8.2GB occupied (35%)"},{type:"spark-chart3",value:30,fillHeight:5,inlineLabel:'<span class="spark-label hidden-spark"><span class="x-large">30%</span></span>',topLeftLabel:'<span class="spark-label hidden-xxs"><span class="small">STORAGE ON HOLD</span></span>'},{type:"spark-chart4",value:55,fillHeight:10,topLeftLabel:"<span class='spark-label hidden-xxs'><span class='large'>8.6</span><span class='medium light'>&nbsp;GB&nbsp;Disk Space&nbsp;&nbsp;(55%)</span></span>"},{type:"spark-chart5",value:30,fillHeight:10,topLeftLabel:"30%",topRightLabel:'<span class="spark-label hidden-spark"><span class="medium light">75.0M</span></span>',bottomLeftLabel:'<span class="spark-label hidden-xxxs"><span class="medium light">ITEMS ON HOLD</span></span>',bottomRightLabel:'<span class="spark-label hidden-xxs"><span class="medium light">TOTAL</span></span>'},{type:"spark-vibrant1",value:55,fillHeight:10,topLeftLabel:"<span class='spark-label hidden-xxs'><span class='large'>8.6</span><span class='medium light'>&nbsp;GB&nbsp;Disk Space&nbsp;&nbsp;(55%)</span></span>"},{type:"spark-vibrant2",value:30,fillHeight:10,topLeftLabel:"30%",bottomLeftLabel:'<span class="spark-label hidden-xxxs"><span class="medium light">ITEMS ON HOLD</span></span>',topRightLabel:'<span class="spark-label hidden-spark"><span class="medium light">75.0M</span></span>',bottomRightLabel:'<span class="spark-label hidden-xxs"><span class="medium light">TOTAL</span></span>'}]}return t}();p=s([l.Component({selector:"uxd-charts-spark-chart-ng1",template:e(1997),changeDetection:l.ChangeDetectionStrategy.OnPush}),r.DocumentationSectionComponent("ChartsSparkChartNg1Component"),n("design:paramtypes",[])],p),a.ChartsSparkChartNg1Component=p},1643:function(t,a,e){"use strict";var s=this&&this.__decorate||function(t,a,e,s){var n,l=arguments.length,r=l<3?a:null===s?s=Object.getOwnPropertyDescriptor(a,e):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,a,e,s);else for(var p=t.length-1;p>=0;p--)(n=t[p])&&(r=(l<3?n(r):l>3?n(a,e,r):n(a,e))||r);return l>3&&r&&Object.defineProperty(a,e,r),r},n=this&&this.__metadata||function(t,a){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,a)};Object.defineProperty(a,"__esModule",{value:!0});var l=e(0),r=e(18),p=e(262),o=e(1642),i=e(140),c=e(260),d=e(263),h=e(261),b=[o.ChartsSparkChartNg1Component],u=[{path:"**",component:h.DocumentationCategoryComponent,data:{category:i.ResolverService.resolveCategoryData(i.DocumentationPage.Charts,"Spark Charts")}}],m=function(){function t(t,a){a.registerResolver(t)}return t}();m=s([l.NgModule({imports:[p.TabsModule,d.WrappersModule,c.DocumentationComponentsModule,r.RouterModule.forChild(u)],exports:b,declarations:b,entryComponents:b}),n("design:paramtypes",[l.ComponentFactoryResolver,i.ResolverService])],m),a.ChartsSparkChartsModule=m},1997:function(t,a){t.exports='<div class="row">\n\n    <ux-spark-ng1 [type]="charts[0].type" [value]="charts[0].value" [fillheight]="charts[0].fillHeight" [topLeftLabel]="charts[0].topLeftLabel"\n        class="col-md-5 col-sm-5 col-xs-5" sparkTooltip="{{ charts[0].tooltip }}"></ux-spark-ng1>\n\n    <div class="col-md-1 col-sm-1 col-xs-1"></div>\n\n    <ux-spark-ng1 [type]="charts[1].type" [value]="charts[1].value" [fillheight]="charts[1].fillHeight" [inlineLabel]="charts[1].inlineLabel"\n        class="col-md-5 col-sm-5 col-xs-5"></ux-spark-ng1>\n</div>\n\n<hr>\n\n<div class="row">\n\n    <ux-spark-ng1 [type]="charts[2].type" [value]="charts[2].value" [fillheight]="charts[2].fillHeight" [topLeftLabel]="charts[2].topLeftLabel"\n        [bottomLeftLabel]="charts[2].bottomLeftLabel" class="col-md-5 col-sm-5 col-xs-5" sparkTooltip="{{ charts[2].tooltip }}"></ux-spark-ng1>\n\n    <div class="col-md-1 col-sm-1 col-xs-1"></div>\n\n    <ux-spark-ng1 [type]="charts[3].type" [value]="charts[3].value" [fillheight]="charts[3].fillHeight" [inlineLabel]="charts[3].inlineLabel"\n        class="col-md-5 col-sm-5 col-xs-5" [topLeftLabel]="charts[3].topLeftLabel"></ux-spark-ng1>\n</div>\n\n<hr>\n\n<div class="row">\n    <ux-spark-ng1 [type]="charts[4].type" [value]="charts[4].value" [fillheight]="charts[4].fillHeight" [topLeftLabel]="charts[4].topLeftLabel"\n        class="col-md-5 col-sm-5 col-xs-5"></ux-spark-ng1>\n\n    <div class="col-md-1 col-sm-1 col-xs-1"></div>\n\n    <ux-spark-ng1 [type]="charts[5].type" [value]="charts[5].value" [fillheight]="charts[5].fillHeight" [topLeftLabel]="charts[5].topLeftLabel"\n        [bottomLeftLabel]="charts[5].bottomLeftLabel" [topRightLabel]="charts[5].topRightLabel" [bottomRightLabel]="charts[5].bottomRightLabel"\n        class="col-md-5 col-sm-5 col-xs-5"></ux-spark-ng1>\n</div>\n\n<hr>\n\n<div class="row">\n\n    <ux-spark-ng1 [type]="charts[6].type" [value]="charts[6].value" [fillheight]="charts[6].fillHeight" [topLeftLabel]="charts[6].topLeftLabel"\n        class="col-md-5 col-sm-5 col-xs-5"></ux-spark-ng1>\n\n    <div class="col-md-1 col-sm-1 col-xs-1"></div>\n\n    <ux-spark-ng1 [type]="charts[7].type" [value]="charts[7].value" [fillheight]="charts[7].fillHeight" [topLeftLabel]="charts[7].topLeftLabel"\n        [bottomLeftLabel]="charts[7].bottomLeftLabel" [topRightLabel]="charts[7].topRightLabel" [bottomRightLabel]="charts[7].bottomRightLabel"\n        class="col-md-5 col-sm-5 col-xs-5"></ux-spark-ng1>\n</div>\n\n<hr>\n\n<p>Spark Line indicator can be created using the <code>spark</code> directive. The attributes of the spark line are explained\n    below:\n</p>\n\n<div class="demo-attributes table-responsive">\n    <table class="table">\n        <tbody>\n            <tr>\n                <th>Property</th>\n                <th>Type</th>\n                <th>Description</th>\n                <th>Optional</th>\n            </tr>\n            <tr>\n                <td class="attribute">type</td>\n                <td>string</td>\n                <td>Defines the class name that is used to specify the spark line color.</td>\n                <td>true</td>\n            </tr>\n            <tr>\n                <td class="attribute">value</td>\n                <td>number</td>\n                <td>Indicates the current value of the spark line (progress).</td>\n                <td>false</td>\n            </tr>\n            <tr>\n                <td class="attribute">fillheight</td>\n                <td>number</td>\n                <td>Indicates the current value of the spark fill (height).</td>\n                <td>false</td>\n            </tr>\n            <tr>\n                <td class="attribute">inlineLabel</td>\n                <td>HTML</td>\n                <td>Defines the spark line label and works if inline.</td>\n                <td>true</td>\n            </tr>\n            <tr>\n                <td class="attribute">top</td>\n                <td>number</td>\n                <td>Indicates the top margin alignment of the spark line.</td>\n                <td>true</td>\n            </tr>\n            <tr>\n                <td class="attribute">topLeftLabel</td>\n                <td>string</td>\n                <td>Defines the top left label value.</td>\n                <td>true</td>\n            </tr>\n            <tr>\n                <td class="attribute">topRightLabel</td>\n                <td>string</td>\n                <td>Defines the top right label value.</td>\n                <td>true</td>\n            </tr>\n            <tr>\n                <td class="attribute">bottomLeftLabel</td>\n                <td>string</td>\n                <td>Defines the bottom left label value.</td>\n                <td>true</td>\n            </tr>\n            <tr>\n                <td class="attribute">bottomRightLabel</td>\n                <td>string</td>\n                <td>Defines the bottom right label value.</td>\n                <td>true</td>\n            </tr>\n            <tr>\n                <td class="attribute">spark-tooltip</td>\n                <td>string</td>\n                <td>Defines the value of the tooltip on the spark chart.</td>\n                <td>true</td>\n            </tr>\n        </tbody>\n    </table>\n</div>\n\n<p>You can also create your own class to use for the spark colors. Name your class and specify a <code>background-color</code>.\n    Within this class you must specify a <code>fill</code> class which also has a <code>background-color</code> set as the\n    fill for the spark chart. See an example below:</p>\n\n<tabset>\n    <tab heading="HTML">\n        <uxd-snippet language="html" [code]="htmlCode"></uxd-snippet>\n    </tab>\n\n    <tab heading="Javascript">\n        <uxd-snippet language="javascript" [code]="jsCode"></uxd-snippet>\n    </tab>\n\n    <tab heading="CSS">\n        <uxd-snippet language="css" [code]="cssCode"></uxd-snippet>\n    </tab>\n</tabset>\n\nMultiline tooltips can be added to the Spark Line indicator using the `spark-tooltip` attribute to the spark directive.\n\n<uxd-snippet language="html" [code]="tooltipsHtml"></uxd-snippet>\n\n<p>Colors are defined from the set of chart colors and the pre-defined class choices are as follows:</p>\n\n<div class="demo-attributes table-responsive">\n    <table class="table">\n        <tbody>\n            <tr>\n                <th>Property</th>\n                <th>Type</th>\n                <th>Description</th>\n                <th>Optional</th>\n            </tr>\n            <tr>\n                <td class="attribute">spark-chart1</td>\n                <td>color</td>\n                <td>@chart1 fill, 0.1 background opacity.</td>\n                <td>true</td>\n            </tr>\n            <tr>\n                <td class="attribute">spark-chart2</td>\n                <td>color</td>\n                <td>@chart2 fill, 0.2 background opacity.</td>\n                <td>true</td>\n            </tr>\n            <tr>\n                <td class="attribute">spark-chart3</td>\n                <td>color</td>\n                <td>@chart3 fill, 0.2 background opacity.</td>\n                <td>true</td>\n            </tr>\n            <tr>\n                <td class="attribute">spark-chart4</td>\n                <td>color</td>\n                <td>@chart4 fill, 0.2 background opacity.</td>\n                <td>true</td>\n            </tr>\n            <tr>\n                <td class="attribute">spark-chart5</td>\n                <td>color</td>\n                <td>@chart5 fill, 0.2 background opacity.</td>\n                <td>true</td>\n            </tr>\n            <tr>\n                <td class="attribute">spark-chart6</td>\n                <td>color</td>\n                <td>@chart6 fill, 0.2 background opacity.</td>\n                <td>true</td>\n            </tr>\n            <tr>\n                <td class="attribute">spark-ok</td>\n                <td>color</td>\n                <td>@ok fill, 0.25 background opacity.</td>\n                <td>true</td>\n            </tr>\n            <tr>\n                <td class="attribute">spark-warning</td>\n                <td>color</td>\n                <td>@warning fill, 0.25 background opacity.</td>\n                <td>true</td>\n            </tr>\n            <tr>\n                <td class="attribute">spark-critical</td>\n                <td>color</td>\n                <td>@critical fill, 0.25 background opacity.</td>\n                <td>true</td>\n            </tr>\n        </tbody>\n    </table>\n</div>\n\n<blockquote>\n    <p><strong>Note</strong>: To upgrade this component to use in an Angular 4 application use: <code>upgradeAdapter.upgradeNg1Component(\'uxSparkNg1\')</code></p>\n</blockquote>'},2325:function(t,a){t.exports=".my-class {\n    background-color: rgba(255,255,255. 0.25);\n}\n\n.my-class .fill {\n    background-color: rgb(255, 255, 255);\n}"},2326:function(t,a){t.exports='<div class="row">\n    <spark type="vm.charts[0].type" value="vm.charts[0].value" fillheight="vm.charts[0].fillHeight"\n        top-left-label="vm.charts[0].topLeftLabel" class="col-md-5 col-sm-5 col-xs-5"\n        spark-tooltip="{{vm.charts[0].tooltip}}"></spark>\n    <div class="col-md-1 col-sm-1 col-xs-1"></div>\n    <spark type="vm.charts[1].type" value="vm.charts[1].value" fillheight="vm.charts[1].fillHeight"\n        inline-label="vm.charts[1].inlineLabel" class="col-md-5 col-sm-5 col-xs-5 spark-chart1-demo"></spark>\n</div>\n\n<hr>\n\n<div class="row">\n    <spark type="vm.charts[2].type" value="vm.charts[2].value" fillheight="vm.charts[2].fillHeight"\n        top-left-label="vm.charts[2].topLeftLabel" bottom-left-label="vm.charts[2].bottomLeftLabel"\n        class="col-md-5 col-sm-5 col-xs-5" spark-tooltip="{{vm.charts[2].tooltip}}"></spark>\n    <div class="col-md-1 col-sm-1 col-xs-1"></div>\n    <spark type="vm.charts[3].type" value="vm.charts[3].value" fillheight="vm.charts[3].fillHeight"\n        inline-label="vm.charts[3].inlineLabel" class="col-md-5 col-sm-5 col-xs-5 spark-chart2-demo"\n        top-left-label="vm.charts[3].topLeftLabel"></spark>\n</div>\n\n<hr>\n\n<div class="row">\n    <spark type="vm.charts[4].type" value="vm.charts[4].value" fillheight="vm.charts[4].fillHeight"\n        top-left-label="vm.charts[4].topLeftLabel" class="col-md-5 col-sm-5 col-xs-5 s" ></spark>\n    <div class="col-md-1 col-sm-1 col-xs-1"></div>\n    <spark type="vm.charts[5].type" value="vm.charts[5].value" fillheight="vm.charts[5].fillHeight"\n        top-left-label="vm.charts[5].topLeftLabel" bottom-left-label="vm.charts[5].bottomLeftLabel"\n        top-right-label="vm.charts[5].topRightLabel" bottom-right-label="vm.charts[5].bottomRightLabel"\n        class="col-md-5 col-sm-5 col-xs-5"></spark>\n</div>\n\n<hr>\n\n<div class="row">\n    <spark type="vm.charts[6].type" value="vm.charts[6].value" fillheight="vm.charts[6].fillHeight"\n        top-left-label="vm.charts[6].topLeftLabel" class="col-md-5 col-sm-5 col-xs-5 s"></spark>\n    <div class="col-md-1 col-sm-1 col-xs-1"></div>\n    <spark type="vm.charts[7].type" value="vm.charts[7].value" fillheight="vm.charts[7].fillHeight"\n        top-left-label="vm.charts[7].topLeftLabel" bottom-left-label="vm.charts[7].bottomLeftLabel"\n        top-right-label="vm.charts[7].topRightLabel" bottom-right-label="vm.charts[7].bottomRightLabel"\n        class="col-md-5 col-sm-5 col-xs-5"></spark>\n</div>'},2327:function(t,a){t.exports="angular.module(\"app\").controller(\"SparkChartCtrl\", SparkChartCtrl);\n\nfunction SparkChartCtrl() {\n    var vm = this;\n\n    vm.charts = [\n        {\n            type: 'spark-chart1',\n            value: 35,\n            fillHeight: 10,\n            topLeftLabel: \"<span class='spark-label hidden-xxxs'><span class='large'>21.7</span><span class='medium light'>&nbsp;MB&nbsp;&nbsp;Items&nbsp;&nbsp;(35%)</span></span>\",\n            tooltip: 'Spark Line indicator - 2.17MB of 8.2GB occupied (35%)'\n        },\n        {\n            type: 'spark-chart3',\n            value: 30,\n            fillHeight: 5,\n            inlineLabel: '30%'\n        },\n        {\n            type: 'spark-chart2',\n            value: 35,\n            fillHeight: 10,\n            topLeftLabel: \"<span class='spark-label hidden-xxxs'><span class='large'>21.7</span><span class='medium light'>&nbsp;MB&nbsp;&nbsp;Items&nbsp;&nbsp;(35%)</span></span>\",\n            bottomLeftLabel: \"<span class='spark-label hidden-xxxs'><span class='medium light'>INDEX COVERAGE</span></span>\",\n            tooltip: 'Spark Line indicator - 2.17MB of 8.2GB occupied (35%)'\n        },\n        {\n            type: 'spark-chart3',\n            value: 30,\n            fillHeight: 5,\n            inlineLabel: \"<span class='spark-label hidden-spark'><span class='x-large'>30%</span></span>\",\n            topLeftLabel: \"<span class='spark-label hidden-xxs'><span class='small'>STORAGE ON HOLD</span></span>\"\n        },\n        {\n            type: 'spark-chart4',\n            value: 55,\n            fillHeight: 10,\n            topLeftLabel: \"<span class='spark-label hidden-xxs'><span class='large'>8.6</span><span class='medium light'>&nbsp;GB&nbsp;Disk Space&nbsp;&nbsp;(55%)</span></span>\"\n        },\n        {\n            type: 'spark-chart5',\n            value: 30,\n            fillHeight: 10,\n            topLeftLabel: '30%',\n            topRightLabel: \"<span class='spark-label hidden-spark'><span class='medium light'>75.0M</span></span>\",\n            bottomLeftLabel: \"<span class='spark-label hidden-xxxs'><span class='medium light'>ITEMS ON HOLD</span></span>\",\n            bottomRightLabel: \"<span class='spark-label hidden-xxs'><span class='medium light'>TOTAL</span></span>\"\n        },\n        {\n            type: 'spark-vibrant1',\n            value: 55,\n            fillHeight: 10,\n            topLeftLabel: \"<span class='spark-label hidden-xxs'><span class='large'>8.6</span><span class='medium light'>&nbsp;GB&nbsp;Disk Space&nbsp;&nbsp;(55%)</span></span>\"\n        },\n        {\n            type: 'spark-vibrant2',\n            value: 30,\n            fillHeight: 10,\n            topLeftLabel: '30%',\n            bottomLeftLabel: \"<span class='spark-label hidden-xxxs'><span class='medium light'>ITEMS ON HOLD</span></span>\",\n            topRightLabel: \"<span class='spark-label hidden-spark'><span class='medium light'>75.0M</span></span>\",\n            bottomRightLabel: \"<span class='spark-label hidden-xxs'><span class='medium light'>TOTAL</span></span>\"\n        }\n    ];\n}"},2328:function(t,a){t.exports='<spark type="vm.type" value="vm.percentComplete" fillheight="vm.fillheight" label="vm.label" class="col-md-3 col-sm-3 col-xs-6" spark-tooltip="{{vm.tooltip}}"></spark>'}});