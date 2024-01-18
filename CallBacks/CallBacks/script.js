
/* 

function sum(a, b) {
    console.log(a + b);
}

function calculator(a, b, sumCallback) {
    sumCallback(a, b)
}

calculator(10, 23,sum);  // dont pass with () pass with their name only


*/



// CALLBACK HELL
/*

function getData(dataId) {
    setTimeout(() => {
        console.log("data", dataId)
    }, 2000);
};

getData(1);
getData(2);
getData(3);

*/

function getData(dataId, getNextData) {

    setTimeout(() => {
        console.log("data", dataId);
        if(getNextData){
            getNextData();
        }
    }, 2000);
};

getData(1, () => {
    console.log("Getting data2...");
    getData(2, () => {
        console.log("Getting data3...");
        getData(3, () => {
            console.log("Getting data4...");
            getData(4);
        });
    });
} );

// !---- Call Back hell -> Nested callbacks stacked below one another forming a pyramid structure(Pyramid of Doom). The Style of programming becomes difficult to understand and manage