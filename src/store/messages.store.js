
import {messagesUrl} from '../configs/configs';

const axios = require('axios')

export const messagesModule = {
        namespace: false,
        state() {
            return {
                messages: []
            }
        },
        mutations: {
            setMessages: (state, payload) => state.messages = payload.messages
        },
        getters: {

            numberOfUnreadMessages: (state) => {
                let unreadMessage = 0;
                state.messages.forEach((message) => {
                    if (message.read === false) unreadMessage++;
                });
                return unreadMessage;
            },
            sortMessagesByDate: (state) => {
                return state.messages.sort((a, b) => {
                    a.date = new Date(a.date);
                    b.date = new Date(b.date);
                    if (a.date.getHours() < b.date.getHours() || a.date.getHours() === b.date.getHours() && a.date.getMinutes() < b.date.getMinutes())
                        return 1;
                    else if (a.date.getHours() > b.date.getHours() || a.date.getHours() === b.date.getHours() && a.date.getMinutes() > b.date.getMinutes())
                        return -1;
                    return 0;
                })
            }
        },
        actions: {

            async setMessages(context) {
                try {
                    const response = await axios.get(messagesUrl);
                    if (response.data != null)
                        context.commit('setMessages', {messages: response.data});
                    else throw "Content is null"
                } catch (e) {
                    console.log(e);
                }
            }
        }
    }
