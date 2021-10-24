 const linksSocialMedia = {
        github: "gustavuhh1",
        youtube: "channel/UCty2PUetiTktwjvMFQeWTDw",
        facebook: "maykbrito",
        instagram: "gustavomrodrigues11",
        twitter: "Gustavuhh_1"
      }

function changeSocialMediaLinks(){
    for(let li of socialLinks.children){
    const social = li.getAttribute('class')

    li.children[0].href = `http://${social}.com/${linksSocialMedia[social]}`
    }
}

changeSocialMediaLinks()

function getGitHubProfileInfos(){
    const url = `https://api.github.com/users/${linksSocialMedia.github}`

    fetch(url)
    .then(response => response.json() )
    .then(data => {
        userName.textContent = data.name;
        userBio.textContent = data.bio;
        userLink.href = data.html_url;
        userImage.src = data.avatar_url;
        userLogin.textContent = data.login;
    })



}
getGitHubProfileInfos()