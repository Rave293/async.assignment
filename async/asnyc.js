// Iterating with Async/Await

async function iterateWithAsyncAwait(array){
    for(const value of array){
        console.log(value);
        await new Promise(reslove => {
            setTimeout( resolve, 1000) // wait for 1sec
        })
    }
}

// Awaiting a Call

async function awaitcall(){
    // Sitmulate fetching data from an API
    const fetchData = new Promise ((reslove) =>{
        // sitmulate API response after 2 sec
        setTimeout(() =>{
            reslove({data: "API response data"});
        }, 2000);
    })
    //Wait for the api response using await
    const response = await fetchData;

    // Log the data from the api response
    console.log(response.data);
}

// Call the async function to sitmulate fetching data from an api

awaitcall();

// Handling Errors with Async/Await
 async function modify(){
    try{
        // Simulate fetching data from an API
        const fetchres = new Promise( (reslove, reject) => {
            // simulate API call failure after 2 sec 
            setTimeout(() =>{
                reject('API call failed');
            }, 2000);
        });
        // wait for the api response using await
        const response = await fetchData;

        //Log the data from the API response 
        console.log(response);
    }catch (error){
        // LOG a user-friendly message if the api call fails
        console.log('Oops something went wrong while fetching data from the API. Please try again later.');
    }
 }

 // call the async function to sitmulate fetching the data from the api
 modify();