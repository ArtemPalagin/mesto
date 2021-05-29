export class UserInfo{
    constructor(usernameSelector, himselfSelector, avatarSelector){
        this._usernameElement = document.querySelector(usernameSelector);
        this._himselfElement =  document.querySelector(himselfSelector);
        this._avatarElement = document.querySelector(avatarSelector);
    }
    getUserInfo(){
        const profileData = {
            username: this._usernameElement.textContent,
            himself: this._himselfElement.textContent,
            avatar: this._avatarElement.src
        };
        return profileData;
    }
    setUserInfo(username, himself){
        this._usernameElement.textContent = username;
        this._himselfElement.textContent = himself;
        
    }
    setUserAvatar(avatar){
        this._avatarElement.src = avatar;
    }

}