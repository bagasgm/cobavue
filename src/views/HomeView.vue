<template>
  <div class="dashboard">
    <h1 class="text-blue-grey-darken-1 pa-2 ma-2">Dashboard</h1>

    <v-container class="my-5">
      <v-row class="mb-3">
        <v-btn small flat class="grey" variant="plain" @click="sortby('title')">
          <v-icon>mdi-folder</v-icon>
          <span class="text-lowercase">By project name</span>
          <v-tooltip
          activator="parent"
          location="top"
          >Sort project by project name</v-tooltip>
        </v-btn>
        <v-btn small flat class="grey" variant="plain" @click="sortby('person')">
          <v-icon>mdi-account</v-icon>
          <span class="text-lowercase">By person</span>
          <v-tooltip
          activator="parent"
          location="top"
          >Sort project by person name</v-tooltip>
        </v-btn>
      </v-row>
      <v-card v-for="(project, index) in projects" :key="index" :class="`pa-3 project ${project.status}`" :flat="true">
        <v-row>
          <v-col cols="12" md="6">
            <div class="text-blue-grey-lighten-2">Project title</div>
            <div>{{ project.title }}</div>
          </v-col>
          <v-col cols="6" sm="4" md="2">
            <div class="text-blue-grey-lighten-2">Person</div>
            <div>{{ project.person }}</div>
          </v-col>
          <v-col cols="6" sm="4" md="2">
            <div class="text-blue-grey-lighten-2">Due by</div>
            <div>{{ project.due }}</div>
          </v-col>
          <v-col cols="2" sm="4" md="2">
            <v-chip :class="[project.status, 'my-2']" small>{{ project.status }}</v-chip>
          </v-col>
        </v-row>
        <v-divider></v-divider>
      </v-card>
    </v-container>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
      projects: [
        { title: 'Design a new website', person: 'Bagas', due: '1st Jan 2019', status: 'ongoing', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        { title: 'Code up the homepage', person: 'Chun Li', due: '10th Jan 2019', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        { title: 'Design video thumbnails', person: 'Ryu', due: '20th Dec 2018', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        { title: 'Create a community forum', person: 'Gouken', due: '20th Oct 2018', status: 'overdue', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
      ]
    };
  },
  methods: {
    sortby(prop: string) {
      this.projects.sort((a: any, b: any) => (a[prop] < b[prop] ? -1 : 1));
    }
  }
});
</script>

<style>
.project.complete {
  border-left: 4px solid #3CD1C2;
}
.project.ongoing {
  border-left: 4px solid orange;
}
.project.overdue {
  border-left: 4px solid tomato;
}
.v-chip.complete {
  background: #3CD1C2;
}
.v-chip.ongoing {
  background: orange;
}
.v-chip.overdue {
  background: tomato;
}
</style>
