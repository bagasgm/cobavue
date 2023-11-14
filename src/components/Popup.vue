<template>
  <v-dialog max-width="600px">
      <template v-slot:activator="{ props }">
          <v-btn block variant="flat" v-bind="props" text="Add New Project" color="indigo-darken-3"> </v-btn>
      </template>

      <template v-slot:default="{ isActive }">
          <v-card title="Add Project" class="text-center">
              <v-card-text>
                  <v-sheet  class="mx-auto">
                      <v-form @submit.prevent="submit">
                      <v-text-field
                          v-model="title"
                          :rules="inputRules"
                          label="Title"
                          prepend-inner-icon="mdi-folder"
                          
                      ></v-text-field>
                      <v-textarea 
                          label="Information" 
                          variant="solo-inverted"
                          v-model="content"
                          :rules="inputRules"
                          prepend-inner-icon="mdi-pencil"
                      ></v-textarea>
                      <v-btn
                          :loading="loading"
                          type="submit"
                          block
                          class="mt-2"
                          text="Submit"
                          @click="loading = !loading"
                          :disabled="!formIsValid"
                      >
                      <template v-slot:loader>
                        <v-progress-linear indeterminate></v-progress-linear>
                      </template>
                      </v-btn>
                      </v-form>
                  </v-sheet>
              </v-card-text>

              <v-card-actions>
                  <v-spacer></v-spacer>

                  <v-btn
                      text="Close Dialog"
                      @click="isActive.value = false"
                  ></v-btn>
              </v-card-actions>
          </v-card>
      </template>
  </v-dialog>
</template>

<script lang="ts">

export default {
  data() {
    return {
      title: '',
      content: '',
      inputRules: [
        (v: string) => !!v || 'This field is required',
        (v: string) => (v && v.length >= 3) || 'Minimum length is 3 characters'
      ],
      loading: false,
      dialog: false
    }
},
computed: {
        formIsValid(): boolean {
            return !!this.title && !!this.content;
        }
    },
methods: {
  submit() {
      if (this.formIsValid) {
        setTimeout(() => {
          this.loading = false;
          alert('Data input');
        }, 2000);
      }
    }
  }
}
</script>