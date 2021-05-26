export class UserInfo{
    constructor(usernameSelector, himselfSelector){
        this._usernameSelector = usernameSelector;
        this._himselfSelector = himselfSelector;
    }
    getUserInfo(){
        const profileData = {
            username: document.querySelector(this._usernameSelector).textContent,
            himself: document.querySelector(this._himselfSelector).textContent
        };
        return profileData;
    }
    setUserInfo(username, himself){
        document.querySelector(this._usernameSelector).textContent = username;
        document.querySelector(this._himselfSelector).textContent = himself;
    }
}