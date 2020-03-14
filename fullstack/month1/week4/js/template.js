class Template {

    constructor(){
        
    }

    loginview(){
        return `
        <h1>Login</h1>
        <input type="text" placeholder="Username" /><br/><br/>
        <input type="password" placeholder="Password" /><br/><br/>
        <button id="login">Login</button> 
        `
    }


    dashboardview() {
        return `
            <h1>Dashboard, <span>Kojo</span></h1>
            <button id="back">Back</button> 
        `
    }
}