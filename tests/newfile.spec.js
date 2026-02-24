import{test} from '@playwright/test'


test.beforeAll('',()=>{

    console.log('connection to databrase');
    


})

test.beforeEach('',()=>{

    console.log('login to app');


    
})

test.afterEach('',()=>{


    console.log('logout to app');
     
})

test.afterAll('',()=>{


      console.log('discnnecting from  database connection');


    
})

// test('test1',()=>{

//     console.log('test1');
    



    
// })

// test('test2',()=>{


// console.log('test2');
    

    
// })