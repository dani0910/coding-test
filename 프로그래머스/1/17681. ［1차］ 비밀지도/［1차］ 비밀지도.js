function solution(n, arr1, arr2) {

    function convertToBinaryArray(inputArr, n) {
        const result = [];
        for (let num of inputArr) {
            let arrTo2 = [];
            let temp = num;
            while (temp > 0) {
                arrTo2.unshift(temp % 2);
                temp = Math.floor(temp / 2);
            }
            
            let pad = n - arrTo2.length;
            for (let j = 0; j < pad; j++) {
                arrTo2.unshift(0);
            }
            result.push(arrTo2);
        }
        return result;
    }

    function mergeBinaryMap(squareArr1, squareArr2) {
        let mergedMap = [];
        for (let i = 0; i < squareArr1.length; i++) {
            let mergedRow = "";
            for (let j = 0; j < squareArr1[i].length; j++) {
                if (squareArr1[i][j] === 0 && squareArr2[i][j] === 0) {
                    mergedRow += " ";
                } else {
                    mergedRow += "#";
                }
            }
            mergedMap.push(mergedRow);
        }
        return mergedMap;
    }

    const squareArr1 = convertToBinaryArray(arr1, n);
    const squareArr2 = convertToBinaryArray(arr2, n);
    return mergeBinaryMap(squareArr1, squareArr2);
}