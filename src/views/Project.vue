<template>
    <div class="projects">
        <h1 class="text-blue-grey-darken-1 pa-2 ma-2">Projects</h1>
    
        <v-container class="my-5">
            <v-expansion-panels>
            <v-expansion-panel v-for="(project, index) in projects" :key="index">
                <v-expansion-panel-title>
                {{ project.title }}
                </v-expansion-panel-title>
                <v-expansion-panel-text>
                <v-card>
                    <v-card-text class="px-4 text-grey">
                    <div class="font-weight-bold">Due by {{ project.due }}</div>
                    <div>{{ project.content }}</div>
                    </v-card-text>
                </v-card>
                </v-expansion-panel-text>
            </v-expansion-panel>
            </v-expansion-panels>
        </v-container>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

interface Project {
    title: string;
    person: string;
    due: string;
    status: string;
    content: string;
}

export default defineComponent({
    data() {
        return {
            projects: [
            { title: 'Design a new website', person: 'Bagas', due: '1st Jan 2019', status: 'ongoing', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...' },
            { title: 'Code up the homepage', person: 'Chun Li', due: '10th Jan 2019', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...' },
            { title: 'Design video thumbnails', person: 'Ryu', due: '20th Dec 2018', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...' },
            { title: 'Create a community forum', person: 'Gouken', due: '20th Oct 2018', status: 'overdue', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...' },
            ]
        }
    },
    computed: {
        myProjects(): Project[] {
            return this.projects.filter((project: Project) => {
            return project.person === 'Bagas' && project.status !== 'complete';
            });
        }
    }
});
</script>
