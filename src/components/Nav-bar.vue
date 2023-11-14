<template>
    <v-toolbar
    flat
    app
    >
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

        <v-toolbar-title class="text-uppercase">
            <span>ToDo</span>
            <strong>Bagas</strong>
        </v-toolbar-title>

        <v-spacer></v-spacer>
        <v-menu
            transition="slide-x-transition"
            >
            <template v-slot:activator="{ props }">
                <v-btn
                flat 
                color="blue-grey-darken-1"
                v-bind="props"
                >
                Menu
                <v-icon>mdi-chevron-down</v-icon>
                </v-btn>
            </template>

            <v-list>
                <v-list-item
                v-for="(link, index) in links" :key="index" :to="link.route" router
                >
                <v-list-item-title>{{ link.text }}</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>
        <v-btn flat color="blue-grey-darken-1">
            <span>Sign Out</span>
            <v-icon end>mdi-logout</v-icon>
        </v-btn>
    </v-toolbar>
    <v-navigation-drawer
    flat
    app
    v-model="drawer"
    >
        <template v-slot:append>
            <v-divider></v-divider>
            <v-btn
            variant="text"
            icon="mdi-chevron-left"
            @click.stop="drawer = !drawer"
            ></v-btn>
        </template>
        <v-container class="d-flex align-center justify-center">
            <v-row>
                <v-col class="text-center">
                    <v-avatar size="100">
                        <v-img src="/avatar-1.png"></v-img>
                    </v-avatar>
                    <p class="text-deep-orange mt-1">Bagas</p>
                </v-col>
            </v-row>
        </v-container>
        <v-container class="d-flex align-center justify-center">
            <v-row>
                <v-col class="text-center">
                    <Popup />
                </v-col>
            </v-row>
        </v-container>

        <v-divider></v-divider>
        <v-list density="compact" nav>
            <v-list-item 
            v-for="(link, index) in links" 
            :key="index" 
            :to="link.route" 
            router 
            :prepend-icon="link.icon"
            :title="link.text">
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script lang="ts">
import Popup from './Popup.vue'

export default {
    components: {
        Popup,
        },
        data(){
            return {
                drawer : false,
                links: [
                    { icon: 'mdi-view-dashboard', text: 'Dashboard', route: '/' },
                    { icon: 'mdi-arrow-projectile-multiple', text: 'Project', route: '/project' },
                    { icon: 'mdi-account-group', text: 'Team', route: '/team' },
                ]
            }
        }
    }
</script>