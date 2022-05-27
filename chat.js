import {CHANNEL_NAME, MI_PANITA, BOT, COMMANDS,} from './data.js';

const imgSource = ["assets/idimage/0.jpg",
                    "assets/idimage/1.jpg",
                    "assets/idimage/2.jpg",
                    "assets/idimage/3.jpg",
                    "assets/idimage/4.jpg",
                    "assets/idimage/5.jpg",
                    "assets/idimage/6.jpg",
                    "assets/idimage/7.jpg",
                    "assets/idimage/8.jpg",
                    "assets/idimage/9.jpg"];

const containerSelector = document.querySelector(".container");

const client = new tmi.Client({
    options: { debug: false },
    channels: [ CHANNEL_NAME ]
});

client.connect();

client.on("message", (channel, userstate, message, self) =>{
    
    if (self) return;
    
    if (containerSelector.children.length == 7) {
    var deleteMessage = document.querySelector(".oneMessage");
    containerSelector.removeChild(deleteMessage);
    }

    const userNick = userstate.username;
    const userDisplayName = userstate["display-name"];
    const userColor = userstate?.color ?? "#BF046B";
    const isSubscriber = userstate?.subscriber;
    const isMod = userstate?.mod;
    const messageType = userstate["message-type"];
    const userID = userstate["user-id"];
    const userBadges = Object.keys(userstate.badges);

        if (userDisplayName.length > 5) {
           var userNickFormatted = `${userDisplayName.slice(0,5)}...`;
    } else {
        var userNickFormatted = userDisplayName;
    }


    if (userNick === CHANNEL_NAME) {
        var channelImg = document.createElement("img");
        channelImg.src = `assets/${CHANNEL_NAME}.jpg`;
        var oneMessage = document.createElement("span");
        var displayNameContainer = document.createElement("div");
        var displayName = document.createElement("span")
        var messageContainer = document.createElement("div");
        var badgesContainer = document.createElement("div");
        badgesContainer.className = "badgesContainer";
        oneMessage.className = "oneMessage";
        channelImg.className = "profilePic";
        oneMessage.id = "ownMessage";
        displayNameContainer.className = "displayNameContainer";
        displayName.className = "displayName"
        messageContainer.className = "message";
        displayName.innerHTML = (`${userNickFormatted}`);
        messageContainer.innerHTML = (message);

        userBadges.forEach(index => {
            let badge = index;
            if (badge === "broadcaster") {
                let badgeElement = document.createElement("img")
                badgeElement.src = "https://static-cdn.jtvnw.net/badges/v1/5527c58c-fb7d-422d-b71b-f309dcb85cc1/1"
                badgeElement.className = "badge"
                badgesContainer.appendChild(badgeElement);;
                            return badgeElement;
            } else if (badge === "premium") {
                let badgeElement = document.createElement("img")
                badgeElement.src = "https://static-cdn.jtvnw.net/badges/v1/bbbe0db0-a598-423e-86d0-f9fb98ca1933/1"
                badgeElement.className = "badge"
                badgesContainer.appendChild(badgeElement);;
                            return badgeElement;
            }else if (badge === "moderator") {
                let badgeElement = document.createElement("img")
                badgeElement.src = "https://static-cdn.jtvnw.net/badges/v1/3267646d-33f0-4b17-b3df-f923a41db1d0/1"
                badgeElement.className = "badge"
                badgesContainer.appendChild(badgeElement);
            }
        });

        containerSelector.appendChild(oneMessage);
        oneMessage.appendChild(channelImg);
        oneMessage.appendChild(displayNameContainer);
        displayNameContainer.appendChild(displayName)
        displayNameContainer.appendChild(badgesContainer)
        oneMessage.appendChild(messageContainer);
    } else {
        if (userNick === MI_PANITA) {
            var panitaImg = document.createElement("img");
            panitaImg.src = `assets/${MI_PANITA}.jpg`;
            var oneMessage = document.createElement("span");
            var displayNameContainer = document.createElement("div");
            var displayName = document.createElement("span")
            var messageContainer = document.createElement("div");
            var badgesContainer = document.createElement("div");
            badgesContainer.className = "badgesContainer";
            oneMessage.className = "oneMessage";
            panitaImg.className = "profilePic";
            oneMessage.id = "othersMessage";
            displayNameContainer.className = "displayNameContainer";
            displayName.className = "displayName"
            messageContainer.className = "message";
            displayName.innerHTML = (`${userNickFormatted}`);
            messageContainer.innerHTML = (message);

        userBadges.forEach(index => {
            let badge = index;
            if (badge === "broadcaster") {
                var badgeElement = document.createElement("img")
                badgeElement.src = "https://static-cdn.jtvnw.net/badges/v1/5527c58c-fb7d-422d-b71b-f309dcb85cc1/1"
                badgeElement.className = "badge"
                badgesContainer.appendChild(badgeElement)
            } else if (badge === "premium") {
                var badgeElement = document.createElement("img")
                badgeElement.src = "https://static-cdn.jtvnw.net/badges/v1/bbbe0db0-a598-423e-86d0-f9fb98ca1933/1"
                badgeElement.className = "badge"
                badgesContainer.appendChild(badgeElement)
            }else if (badge === "moderator") {
                var badgeElement = document.createElement("img")
                badgeElement.src = "https://static-cdn.jtvnw.net/badges/v1/3267646d-33f0-4b17-b3df-f923a41db1d0/1"
                badgeElement.className = "badge"
                badgesContainer.appendChild(badgeElement)
            }
        });

            containerSelector.appendChild(oneMessage);
            oneMessage.appendChild(panitaImg);
            oneMessage.appendChild(displayNameContainer);
            displayNameContainer.appendChild(displayName)
            displayNameContainer.appendChild(badgesContainer)
            oneMessage.appendChild(messageContainer);          
        } else{
            var oneImg = document.createElement("img");
            oneImg.src = imgSource[userID[1]];;
            var oneMessage = document.createElement("span");
            var displayNameContainer = document.createElement("div");
            var displayName = document.createElement("span")
            var messageContainer = document.createElement("div");
            var badgesContainer = document.createElement("div");
            badgesContainer.className = "badgesContainer";
            oneMessage.className = "oneMessage";
            oneImg.className = "profilePic";
            oneMessage.id = "othersMessage";
            displayNameContainer.className = "displayNameContainer";
            displayName.className = "displayName"
            messageContainer.className = "message";
            displayName.innerHTML = (`${userNickFormatted}`);
            messageContainer.innerHTML = (message);

        userBadges.forEach(index => {
            let badge = index;
            if (badge === "broadcaster") {
                var badgeElement = document.createElement("img")
                badgeElement.src = "https://static-cdn.jtvnw.net/badges/v1/5527c58c-fb7d-422d-b71b-f309dcb85cc1/1"
                badgeElement.className = "badge"
                badgesContainer.appendChild(badgeElement)
            } else if (badge === "premium") {
                var badgeElement = document.createElement("img")
                badgeElement.src = "https://static-cdn.jtvnw.net/badges/v1/bbbe0db0-a598-423e-86d0-f9fb98ca1933/1"
                badgeElement.className = "badge"
                badgesContainer.appendChild(badgeElement)
            }else if (badge === "moderator") {
                var badgeElement = document.createElement("img")
                badgeElement.src = "https://static-cdn.jtvnw.net/badges/v1/3267646d-33f0-4b17-b3df-f923a41db1d0/1"
                badgeElement.className = "badge"
                badgesContainer.appendChild(badgeElement)
            }
        });

            containerSelector.appendChild(oneMessage);
            oneMessage.appendChild(oneImg);
            oneMessage.appendChild(displayNameContainer);
            displayNameContainer.appendChild(displayName)
            displayNameContainer.appendChild(badgesContainer)
            oneMessage.appendChild(messageContainer);



        };


    }
    window.scrollTo(0, document.body.scrollHeight + 100);
})
