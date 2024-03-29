const ejsexcel = require("ejsExcel");
const fs = require("fs");
const util = require("util");
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

(async function() {
	//获得Excel模板的buffer对象
	const exlBuf = await readFileAsync("./report.xlsx");
	//数据源
	const data = [ [{"table_name":"现金报表","date": '2014-04-09'}],[ { 					"cb1":"001","cb1_":"002","bn1":"1","bn1_":"1","cn1":"1","cn1_":"1","num1":"1","num1_":"1", 					"cb5":"001","cb5_":"002","bn5":"1","bn5_":"1","cn5":"1","cn5_":"1","num1":"1","num5_":"1", 					"cb10":"001","cb10_":"002","bn10":"1","bn10_":"1","cn10":"1","cn10_":"1","num10":"1","num10_":"1", 					"cb20":"001","cb20_":"002","bn20":"1","bn20_":"1","cn20":"1","cn20_":"1","num20":"1","num20_":"1", 					"cb50":"001","cb50_":"002","bn50":"1","bn50_":"1","cn50":"1","cn50_":"1","num50":"1","num50_":"1", 					"cb100":"001","cb100_":"002","bn100":"1","bn100_":"1","cn100":"1","cn100_":"1","num100":"1","num100_":"1" 				},{ 					"cb1":"001","cb1_":"002","bn1":"1","bn1_":"1","cn1":"1","cn1_":"1","num1":"1","num1_":"1", 					"cb5":"001","cb5_":"002","bn5":"1","bn5_":"1","cn5":"1","cn5_":"1","num1":"1","num5_":"1", 					"cb10":"001","cb10_":"002","bn10":"1","bn10_":"1","cn10":"1","cn10_":"1","num10":"1","num10_":"1", 					"cb20":"001","cb20_":"002","bn20":"1","bn20_":"1","cn20":"1","cn20_":"1","num20":"1","num20_":"1", 					"cb50":"001","cb50_":"002","bn50":"1","bn50_":"1","cn50":"1","cn50_":"1","num50":"1","num50_":"1", 					"cb100":"001","cb100_":"002","bn100":"1","bn100_":"1","cn100":"1","cn100_":"1","num100":"1","num100_":"1" 				}]];
	//用数据源(对象)data渲染Excel模板
	const exlBuf2 = await ejsexcel.renderExcel(exlBuf, data);
	await writeFileAsync("./report2.xlsx", exlBuf2);
	console.log("生成report2.xlsx");
})();

