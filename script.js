function mergeCraftDates(emilyRecords, oliverRecords) {
    let mergedRecords = [];
    let i = 0; // pointer for Emily's records
    let j = 0; // pointer for Oliver's records

   
    while (i < emilyRecords.length && j < oliverRecords.length) {
        if (emilyRecords[i] < oliverRecords[j]) {
            mergedRecords.push(emilyRecords[i]);
            i++;
        } else {
            mergedRecords.push(oliverRecords[j]);
            j++;
        }
    }


    while (i < emilyRecords.length) {
        mergedRecords.push(emilyRecords[i]);
        i++;
    }

   
    while (j < oliverRecords.length) {
        mergedRecords.push(oliverRecords[j]);
        j++;
    }

    return mergedRecords;
}

// Example usage:
let emilyDates  = [1, 3, 5, 7];
let oliverDates  = [2, 4, 6, 8];
let actual = mergeCraftDates(emilyDates, oliverDates);
console.log(actual)










