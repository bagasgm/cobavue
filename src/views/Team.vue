<template>
    <div class="team">
        <h1 class="text-blue-grey-darken-1 pa-2 ma-2">Team</h1>
    
        <v-container class="my-5">
            <v-row>
            <v-col
                cols="12"
                sm="6"
                md="4"
                lg="3"
                v-for="person in team"
                :key="person.name"
            >
            <v-card class="text-xs-center ma-3" flat>
                <div class="d-flex justify-center pt-4">
                    <v-avatar size="100" class="grey lighten-2">
                        <v-img :src="person.avatar"></v-img>
                    </v-avatar>
                </div>
                
                <v-card-text class="text-center">
                    <div class="subheading">{{ person.name }}</div>
                    <div class="text-grey">{{ person.role }}</div>
                </v-card-text>
                <v-card-actions class="justify-center">
                <v-btn color="text-grey">
                    <v-icon left>mdi-message</v-icon>
                    Message
                </v-btn>
                </v-card-actions>
            </v-card>
            </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    data() {
        return {
            team: [
            { name: 'Bagas', role: 'Web developer', avatar: '/avatar-1.png' },
            { name: 'Ryu', role: 'Graphic designer', avatar: '/avatar-2.png' },
            { name: 'Chun Li', role: 'Web developer', avatar: '/avatar-3.png' },
            { name: 'Gouken', role: 'Social media maverick', avatar: '/avatar-4.png' },
            { name: 'Yoshi', role: 'Sales guru', avatar: '/avatar-5.png'}
            ]
        };
    }
});
</script>
