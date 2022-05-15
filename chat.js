const CHANNEL_NAME = "tyrecgames";
const MI_PANITA = "kristinavc";
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

    console.log(userBadges);
    if (userNick === CHANNEL_NAME) {
        var channelImg = document.createElement("img");
        channelImg.src = "assets/Tyrec.png";
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
            panitaImg.src = "assets/KristinaVC.png"
            var oneMessage = document.createElement("span");
            var displayNameContainer = document.createElement("span");
            var messageContainer = document.createElement("div");
            oneMessage.className = "oneMessage";
            oneMessage.id = "othersMessage";
            displayNameContainer.className = "displayName";
            messageContainer.className = "message";
            displayNameContainer.innerHTML = (`${userDisplayName}`)
            messageContainer.innerHTML = (message)
            
            containerSelector.appendChild(oneMessage);
            oneMessage.appendChild(panitaImg);
            oneMessage.appendChild(displayNameContainer);
            oneMessage.appendChild(messageContainer);
        } else{
            var oneImg = document.createElement("img");
            oneImg.src = imgSource[userID[1]];;
            var oneMessage = document.createElement("span");
            var displayNameContainer = document.createElement("span");
            var messageContainer = document.createElement("div");
            oneMessage.className = "oneMessage";
            oneMessage.id = "othersMessage";
            displayNameContainer.className = "displayName";
            messageContainer.className = "message";
            displayNameContainer.innerHTML = (`${userDisplayName}`)
            messageContainer.innerHTML = (message)

            containerSelector.appendChild(oneMessage);
            oneMessage.appendChild(oneImg);
            oneMessage.appendChild(displayNameContainer);
            oneMessage.appendChild(messageContainer);
        };


    }
    window.scrollTo(0, document.body.scrollHeight + 100);
})
