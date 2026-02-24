import{test} from "@playwright/test"
test("test annotation ",async({page})=>{
    console.log("test 1");
    
})
test.skip("test 2 ",async()=>{
    console.log("test 2");
    
})

test("test 3 ",async()=>{
    console.log("test 3");
    
})

test("test annotation1 ",async({page})=>{
    console.log("test 1");
    
})
test("test 21 ",async({browserName})=>{
    test.skip(browserName==="safari")
    
})

test("test 31 ",async()=>{
    console.log("test 3");
    
})

//test
test("test annotation2 ",async({page})=>{
    console.log("test 1");
    
})
test("test 22 ",async({browserName})=>{
    test.skip(browserName==="safari")
    
})

test("test 32 ",async()=>{
    console.log("test 3");
    
})

//test.fail

test.fail("test annotation3 ",async({page})=>{
    //console.log("test 1");
    await page.goto("ddffdkda")
    
})
test("test 23 ",async({browserName})=>{
    //test.skip(browserName==="safari")
    console.log("test 2");
    
    
})

test("test 36 ",async()=>{
    console.log("test 3");
    
})

//test.fixme
test.fixme("test annotation4 ",async({page})=>{
    console.log("test 1");
    await page.goto("guyfgsukfy")
    
})
test("test 24 ",async({browserName})=>{
    //test.skip(browserName==="safari")
    console.log("test 2");
    
    
})

test("test 34 ",async()=>{
    console.log("test 3");
    
})

//test.slow
test("test annotation5 ",async({page})=>{
    test.slow()
    console.log("test 1");
    //await page.goto("guyfgsukfy")
    
})
test("test 25 ",async({browserName})=>{
    //test.skip(browserName==="safari")
    console.log("test 2");
    
    
})

test("test 35 ",async()=>{
    console.log("test 3");
    
})

//test.describe
test.describe("login ",async()=>{
    console.log("test 1");
    test("valid cred ",async({browserName})=>{
    //test.skip(browserName==="safari")
    console.log("test 2");
})
test("invalid cred ",async()=>{
    console.log("test 3");
})

})

//test.setTimeout
test.describe("login",async()=>{
    
    test("valid cred ",async({browserName})=>{
    //test.skip(browserName==="safari")
    test.setTimeout(5000)
    console.log("test 2");
})
test("invalid cred ",async()=>{
    console.log("test 3");
})

})
