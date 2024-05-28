
function marge(arr1,arr2){
	let n = arr1.length;
	let m = arr2.length;
	let tempArr= [];

	let i = 0;
	let j = 0;

	while(i < n && j< m){

		if(arr1[i] < arr2[j]){
				tempArr.push(arr1[i]);
			i++;
		}else{
			tempArr.push(arr2[j]);
			j++
		}
		
	}
	while(i<n){
	  temArr.push(arr1[i++]);
	}
	
	while(j<m){
	  tempArr.push(arr2[j++]);
	}
	return tempArr;
}

 console.log(marge([3, 7, 12, 20],[1, 5, 8, 18, 25]));