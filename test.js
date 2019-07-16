const data = []
const date = "2019-07-16"
const info = [
    {"prjName":"知らない1","prjID": "Test1.dll"},
    {"prjName":"知らない2","prjID": "Test2.dll"},
    {"prjName":"知らない3","prjID": "Test3.dll"},
    {"prjName":"知らない4","prjID": "Test4.dll"},
    {"prjName":"知らない5","prjID": "Test5.dll"}
]
for (i = 0; i< info.length; i++) {
   info[i].date = date
   data.push(info[i])
   console.log(i + ":" + data[0].prjName)
   data.pop(info[i])
}