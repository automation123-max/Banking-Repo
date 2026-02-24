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

tesk.skip
test("test annotation ",async({page})=>{
    console.log("test 1");
    
})
test("test 2 ",async({browserName})=>{
    test.skip(browserName==="safari")
    
})

test("test 3 ",async()=>{
    console.log("test 3");
    
})

//test
test.only("test annotation ",async({page})=>{
    console.log("test 1");
    
})
test("test 2 ",async({browserName})=>{
    test.skip(browserName==="safari")
    
})

test("test 3 ",async()=>{
    console.log("test 3");
    
})

//test.fail

test.fail("test annotation ",async({page})=>{
    //console.log("test 1");
    await page.goto("ddffdkda")
    
})
test("test 2 ",async({browserName})=>{
    //test.skip(browserName==="safari")
    console.log("test 2");
    
    
})

test("test 3 ",async()=>{
    console.log("test 3");
    
})

//test.fixme
test.fixme("test annotation ",async({page})=>{
    console.log("test 1");
    await page.goto("guyfgsukfy")
    
})
test("test 2 ",async({browserName})=>{
    //test.skip(browserName==="safari")
    console.log("test 2");
    
    
})

test("test 3 ",async()=>{
    console.log("test 3");
    
})

test.slow
test("test annotation ",async({page})=>{
    test.slow()
    console.log("test 1");
    //await page.goto("guyfgsukfy")
    
})
test("test 2 ",async({browserName})=>{
    //test.skip(browserName==="safari")
    console.log("test 2");
    
    
})

test("test 3 ",async()=>{
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
