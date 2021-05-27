export class UserInfo{
    constructor(usernameSelector, himselfSelector){
        this._usernameElement = document.querySelector(usernameSelector);
        this._himselfElement =  document.querySelector(himselfSelector); 
    }
    getUserInfo(){
        const profileData = {
            username: this._usernameElement.textContent,
            himself: this._himselfElement.textContent
        };
        return profileData;
    }
    setUserInfo(username, himself){
        this._usernameElement.textContent = username;
        this._himselfElement.textContent = himself;
    }
}