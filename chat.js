const CHANNEL_NAME = "kristinavc";
const MI_PANITA = "tyrecgames";
const imgSource = ["assets/idimage/0.png",
                    "assets/idimage/1.png",
                    "assets/idimage/2.png",
                    "assets/idimage/3.png",
                    "assets/idimage/4.png",
                    "assets/idimage/5.png",
                    "assets/idimage/6.png",
                    "assets/idimage/7.png",
                    "assets/idimage/8.png",
                    "assets/idimage/9.png"];

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

    if (userNick === CHANNEL_NAME) {
        var channelImg = document.createElement("img");
        channelImg.src = `assets/${CHANNEL_NAME}.png`;
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
        displayName.innerHTML = (`${userDisplayName}`);
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
            }{

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
            panitaImg.src = `assets/${MI_PANITA}.png`;
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
            displayName.innerHTML = (`${userDisplayName}`);
            messageContainer.innerHTML = (message);
console.log(userstate)
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
                } else if (badge === "moderator") {
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
            displayName.innerHTML = (`${userDisplayName}`);
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
                }{

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
