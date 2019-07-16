#!/bin/bash
echo "read csv file pattern: prjName,prjID"
read FILE
PENDING=`awk -F , '{print "{\"prjName\": \"" $1"\",\"prjID\": \""$2"\"}"}' ${FILE} | tr '\n' ',' | sed -e 's/,$//g'`
echo ${PENDING} | sed -e 's/},/},n/g' | tr 'n' '\n' | tee `date +%Y%m%d%H%M`.log
echo "read date"
read DATE
sed -e "s/PENDINGINFO/${PENDING}/g;s/PENDINGDATE/${DATE}/g" demo.js | node
echo "process success"