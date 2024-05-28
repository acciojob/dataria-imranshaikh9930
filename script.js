function mergeSortedRecords(emilyRecords, oliverRecords) {
    let mergedRecords = [];
    let i = 0; // pointer for Emily's records
    let j = 0; // pointer for Oliver's records

    // Compare elements from both arrays and merge them
    while (i < emilyRecords.length && j < oliverRecords.length) {
        if (emilyRecords[i] < oliverRecords[j]) {
            mergedRecords.push(emilyRecords[i]);
            i++;
        } else {
            mergedRecords.push(oliverRecords[j]);
            j++;
        }
    }

    // If there are remaining elements in Emily's records, add them
    while (i < emilyRecords.length) {
        mergedRecords.push(emilyRecords[i]);
        i++;
    }

    // If there are remaining elements in Oliver's records, add them
    while (j < oliverRecords.length) {
        mergedRecords.push(oliverRecords[j]);
        j++;
    }

    return mergedRecords;
}

// Example usage:
let emilyRecords = [1, 3, 5, 7];
let oliverRecords = [2, 4, 6, 8];
let merged = mergeSortedRecords(emilyRecords, oliverRecords);
console.log(merged)