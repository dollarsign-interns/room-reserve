<template>
  <div class="home">
    <HelloWorld/>
        <form class='form-group' @submit.prevent='insert'>
            <input type='text' v-model='name' placeholder='NAME'>
            <input type='text' v-model='tel' placeholder='TEL'>
            <button type='submit' class="is-primary">Add</button>
        </form>

        <div class="wrapper column" :key="key" v-for="(contact, key) in contact">
             <div v-if="updateKey === key">
             <input type="text" v-model="updateName" placeholder="TEL">
             <button @click="updateContact(updateTel, updateName)">Save</button>
             </div>
              <div v-else>
                {{contact.name}}
                <button @click="setUpdateContact(key, contact)">Update</button>
              </div>
          </div>
  </div>
</template>

<script>
// @ is an alias to /src
import * as firebase from 'firebase/app';
import HelloWorld from '@/components/HelloWorld.vue';
import 'firebase/database';

const config = {
  apiKey: 'AIzaSyAWvINUgJeX1KpqPCpBCXeYW0vfzMGsfZA',
  authDomain: 'room-reserve-17c64.firebaseapp.com',
  databaseURL: 'https://room-reserve-17c64.firebaseio.com',
  projectId: 'room-reserve-17c64',
};

firebase.initializeApp(config);


const database = firebase.database();
const contactsRef = database.ref('contact');

export default {
  name: 'home',
  components: {
    HelloWorld,
  },
  data() {
    return {
      contact: [],
      name: '',
      tel: '',
      updateTel: '',
      updateName: '',
      updateKey: '',
    };
  },
  methods: {
    insert() {
      contactsRef.push({ tel: this.tel, name: this.name });
      this.name = '';
      this.tel = '';
    },
    setUpdateContact(key, contact) {
      this.updateKey = key;
      this.updateTel = contact.tel;
      this.updateName = contact.name;
    },
    updateContact(tel, name) {
      contactsRef.child(this.updateKey).update({
        tel,
        name,
      });
      this.updateKey = '';
      this.updateTel = '';
      this.updateName = '';
    },
  },
  created() {
    contactsRef.on('value', (snapshot) => {
      this.contact = snapshot.val();
    });
  },
};
</script>
<style scoped>
* {box-sizing: border-box;}
.wrapper {
  max-width: 150px;
  margin: 0 auto;
  float: left;
}

.wrapper > div {
  border: 2px solid rgb(70, 68, 68);
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.5);
  padding: 1em;
  color: #000000;
}
.column {
  float: left;
  width: 33.33%;
  padding: 4px;
}

</style>
