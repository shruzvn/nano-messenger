export const Conversations = [
    {
        participants: ["1", "2"],
        id: 0,
        conversation: [
            {id: "01", read: true, date: "20210125-3:00", from: "1" ,messages: [
                "Hi, can you send me the image we talked about?"
            ]},
            {id: "02", read: true, date: "20210125-12", from: "2" ,messages: [
                "Sure",
                "But messenger won't support image sharing YET"
            ]},
            {id: "03", read: false, date: "20210125-3:13", from: "1" ,messages: [
                "Bummer",
                "It even hasn't fucking emojis",
                "Anyway",
                "Arigato!"
            ]},
        ]
    },
    {
        participants: ["1", "3"],
        id: 1,
        conversation: [
            {id: 11, read: true, date: "20210125-00:00", from: "3" ,messages: [
                "Can you tell me how to send emojis?",
                "I click on the button, but it's not showing anything"
            ]},
            {id: 12, read: true, date: "20210124-00:47", from: "3" ,messages: [
                "Damn, where are you?",
            ]},
            {id: 13, read: true, date: "20210124-00:54", from: "1" ,messages: [
                "Hello",
                "Sorry it's not available yet",
            ]},
            {id: 14, read: true, date: "20210124-00:55", from: "3" ,messages: [
                "Oh, thanks for the response",
            ]},
        ]
    },
    {
        participants: ["1", "4", "5", "6"],
        name: "Class 101",
        id: 2,
        conversation: [
            {id: 21, read: true, date: "20210120-13:00", from: "4" ,messages: [
                "Wuz up?!!",
                ":D"
            ]},
            {id: 22, read: true, date: "20210120-13:03", from: "5" ,messages: [
                "That's a fucking dead meme :))",
            ]},
            {id: 23, read: true, date: "20210120-13:05", from: "1" ,messages: [
                "=)))",
            ]},
            {id: 24, read: true, date: "20210120-13:10", from: "6" ,messages: [
                ":| WTF",
            ]},
        ]
    }
];

export const Users = {
    "1":{
        firstname: "Sean",
        lastname: "VN",
        lastseen: "Online"
    },
    "2":{
        firstname: "Alanna",
        lastname: "Cobbet",
        lastseen: "Online"
    },
    "3":{
        firstname: "Daniel",
        lastname: "Brown",
        lastseen: "20210125-11:30"
    },
    "4":{
        firstname: "Michael",
        lastname: "Knowles",
        lastseen: "20210125-10:00"
    },
    "5":{
        firstname: "Violet",
        lastname: "Pierpoint",
        lastseen: "Online"
    },
    "6":{
        firstname: "Priscilla",
        lastname: "Fraley",
        lastseen: "20210124-23:54"
    },
};