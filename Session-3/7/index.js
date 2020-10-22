// Ex 7: Create an array containing at least 5 numbers, then ask users enter a number, perform a search to look for the number in the array, if the number is found, tell user that with the index of it in the array, if not, also tell them so
const nums = [1,3,10,20,100];
let strSee = " is Not found in my array", index = '';
const value = Number(prompt('Enter a number'));
for (let i in nums) {
    if (value == nums[i]) {
        strSee = " is Found in my array at index ";
        index = i;
        break;
    }
}
alert(value+strSee+index);