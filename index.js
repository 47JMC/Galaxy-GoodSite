

// When the page loads, check if the user has a saved theme preference
let Savedtheme = localStorage.getItem("theme") || "light_mode"
let element = document.getElementById("theme-changer-span")
if (Savedtheme === "dark_mode") {
    document.body.classList.add("dark-mode")
    element.innerText = "dark_mode"
} else { element.innerText = "light_mode" }

function ChangeTheme() {
    let theme = document.body.classList.toggle("dark-mode")
    if (theme) {
        localStorage.setItem("theme", "dark_mode")
    }
    else {
        localStorage.setItem("theme", "light_mode")
    }
    element.innerText = localStorage.getItem("theme")
}

function PhoneNavbarOptionsToggler() {
    let phoneOptions = document.getElementById("phone-options")
    if (phoneOptions.style.display === "none") {
        phoneOptions.style.display = "block"
    }
    else {
        phoneOptions.style.display = "none"
    }
}

async function GithubInfo() {
    try {
        let github_username = document.getElementById("github-username").value;
        let response = await fetch(`https://api.github.com/users/${github_username}`);
        let data = await response.json();

        let profilePicture = document.getElementById("github-profile-picture")
        let githubDisplayName = document.getElementById("github-display-name")
        let githubBio = document.getElementById("github-bio")
        let github_PublicRepos = document.getElementById("github-public_repos")
        let github_Company = document.getElementById("github-company")
        let github_Email = document.getElementById("github-email")
        let github_Location = document.getElementById("github-location")
        let github_hireable = document.getElementById("github-hireable")
        let github_followers = document.getElementById("github-followers")
        let github_Following = document.getElementById("github-following")

        githubDisplayName.style.display = "block"
        githubBio.style.display = "block"
        github_PublicRepos.style.display = "block"
        github_Company.style.display = "block"
        github_Email.style.display = "block"
        github_Location.style.display = "block"
        github_hireable.style.display = "block"
        github_followers.style.display = "block"
        github_Following.style.display = "block"

        githubDisplayName.innerText = data.name || "No Display Name";
        githubBio.innerText = data.bio || "No description";
        github_PublicRepos.innerText = `Public Repositories: ${data.public_repos}`;
        github_Company.innerText = "Company: " + data.company || "No Company";
        github_Email.innerText = "Email: " + data.email || "No Email";
        github_Location.innerText = "Location: " + data.location
        github_hireable.innerText = "Hireable: " + data.hireable
        github_followers.innerText = `Followers: ${data.followers}`;
        github_Following.innerText = `Following: ${data.following}`;

        if (data.avatar_url) {
            profilePicture.style.display = "block"
            profilePicture.src = data.avatar_url
        }
    }
    catch (error) {
        console.error(error);
    }
}