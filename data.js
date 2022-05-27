export const CHANNEL_NAME = "kristinavc";
export const MI_PANITA = "tyrecgames";
export const BOT = "bochillo"

export const COMMANDS = ["!limpiar"]

export const BADGE = (userBadges, index) => {
           let badge = index;
            if (badge === "broadcaster") {
                let badgeElement = document.createElement("img")
                badgeElement.src = "https://static-cdn.jtvnw.net/badges/v1/5527c58c-fb7d-422d-b71b-f309dcb85cc1/1"
                badgeElement.className = "badge"
                badgesContainer.appendChild(badgeElement)
            } else if (badge === "premium") {
                let badgeElement = document.createElement("img")
                badgeElement.src = "https://static-cdn.jtvnw.net/badges/v1/bbbe0db0-a598-423e-86d0-f9fb98ca1933/1"
                badgeElement.className = "badge"
                badgesContainer.appendChild(badgeElement)
            }else if (badge === "moderator") {
                let badgeElement = document.createElement("img")
                badgeElement.src = "https://static-cdn.jtvnw.net/badges/v1/3267646d-33f0-4b17-b3df-f923a41db1d0/1"
                badgeElement.className = "badge"
                badgesContainer.appendChild(badgeElement)
            }
                console.log(userBadges, 'holaa');
    }