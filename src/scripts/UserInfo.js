export class UserInfo{
    constructor(usernameSelector, himselfSelector, avatarSelector){
        this._usernameElement = document.querySelector(usernameSelector);
        this._himselfElement =  document.querySelector(himselfSelector);
        this._avatarElement = document.querySelector(avatarSelector);
    }
    linkUserId(userId){
        this._userId = userId;
    }
    getUserInfo(){
        const profileData = {
            username: this._usernameElement.textContent,
            himself: this._himselfElement.textContent,
            avatar: this._avatarElement.src,
            _id: this._userId
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