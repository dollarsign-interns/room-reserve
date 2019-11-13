<template>
  <div class="home">
    <HelloWorld/>
        <form class='form-group' @submit.prevent='insert'>
            <input type='text' v-model='name' placeholder='ชื่อ'>
            <input type="radio" id="one" value="ติดจอง" v-model="picked">
                <label for="one">ติดจอง</label>
            <input type="radio" id="two" value="ว่าง" v-model="picked">
                <label for="two">ว่าง</label>
            <button type='submit' class="is-primary">Add</button>
        </form>

        <div class=" column" :key="key" v-for="(contact, key) in contact">
            <div v-if="updateKey === key">
             <input type="text" v-model="updateName" placeholder="Name">
             <input type="radio" id="one" value="ติดจอง" v-model="updatePicked">
                <label for="one">ติดจอง</label>
              <input type="radio" id="two" value="ว่าง" v-model="updatePicked">
                <label for="two">ว่าง</label>
             <button @click="updateContact(updateName, updatePicked)">Save</button>
            </div>
            <div v-else>
                {{contact.name}} : {{contact.picked}}
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
      picked: '',
      updatePicked: '',
      updateName: '',
      updateKey: '',
    };
  },
  methods: {
    insert() {
      contactsRef.push({ name: this.name, picked: this.picked });
      this.name = '';
      this.picked = '';
    },
    setUpdateContact(key, contact) {
      this.updateKey = key;
      this.updateName = contact.name;
      this.updatePicked = contact.picked;
    },
    updateContact(name, picked) {
      contactsRef.child(this.updateKey).update({
        picked,
        name,
      });
      this.updateKey = '';
      this.updatePicked = '';
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
  max-width: 200px;
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
