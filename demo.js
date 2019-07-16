const ejsexcel = require("ejsExcel");
const fs = require("fs");
const util = require("util");
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

(async function () {
	const exlBuf = await readFileAsync("./template/Test_template.xlsx");
	// { "prjName": "知らない", "prjID": "Test.dll", "date": "2019-07-16" }
	const data = []
	const date = "PENDINGDATE"
	const info = [PENDINGINFO]
	for (i = 0; i < info.length; i++) {
		info[i].date = date
		data.push(info[i])
		const exlBuf2 = await ejsexcel.renderExcel(exlBuf, data);
		await writeFileAsync(`./outputExcel/${data[0].prjName}.xlsx`, exlBuf2);
		data.pop(info[i])
	}
	console.log("output Excel success");
})();
