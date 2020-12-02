import {contactsUrl} from '../configs/configs';

const axios = require('axios')

export const contactsModule =  {
        namespace: false,
        state(){
            return {
                contacts: []
            }
        },
        mutations:{
            setContacts: (state,payload)=>state.contacts = payload.contacts
        },
        getters:{
        },
        actions:{
            async setContacts(context){
                try{
                    const response = await axios.get(contactsUrl);
                    console.log(response)
                    if(response.data!=null)
                        context.commit('setContacts',{contacts:response.data});
                    else throw "Content is null"
                }catch (e) {
                    console.log(e);
                }
            }
        }
    }
