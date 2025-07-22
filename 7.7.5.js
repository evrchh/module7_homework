function filterNumbers (numbers) {
    let set = new Set (numbers);
    let filterSet = Array.from(set);
    return filterSet.sort((a, b) => a - b)
}

const array = [1, 6, 3, 6, 5, 8];

filterNumbers(array)