<template>
    <div>
        <v-card outlined tile width="200px" class="my-9">
            <v-card-title>Filter</v-card-title>
            <v-card-actions class="d-flex flex-column">
                <v-text-field
                    v-model="name"
                    label="Name"
                    solo
                    dense
                    outlined
                    clearable
                    @keydown.enter="filterCustomerByName"
                ></v-text-field>
            </v-card-actions>
            <v-card-actions class="d-flex flex-column">
                <v-text-field
                    v-model="surname"
                    label="Surname"
                    outlined
                    solo
                    dense
                    clearable
                    @keydown.enter="filterCustomerBySurname"
                ></v-text-field>
            </v-card-actions>
            <v-card-actions class="d-flex flex-column">
                <v-text-field
                    v-model="age"
                    label="Age"
                    solo
                    dense
                    outlined
                    clearable
                    @keydown.enter="filterCustomerAge"
                ></v-text-field>
            </v-card-actions>
            <v-card-actions class="d-flex flex-column">
                
                <v-select
                    v-model="selectedGender"
                    :items="gender"
                    label="Gender"
                    outlined
                    dense
                    solo
                    value
                ></v-select>
                <v-btn
                    class="ma-2"
                    color="primary"
                    dark
                        v-if="selectedGender"
                    @click="filterCustomerByGender"
                >
                    Search
                    <v-icon
                    dark
                    right
                    >
                    mdi-checkbox-marked-circle
                    </v-icon>
                </v-btn>
            </v-card-actions>
            <v-card-actions class="d-flex flex-column">
                <v-text-field
                    v-model="profession"
                    label="Profession"
                    solo
                    dense
                    outlined
                    clearable
                    @keydown.enter="filterCustomerByProfession"
                ></v-text-field>
                </v-card-actions>
                <v-card-actions class="d-flex flex-column">
                <v-text-field
                    v-model="address"
                    label="Address"
                    solo
                    dense
                    outlined
                    clearable
                ></v-text-field>
            </v-card-actions>
        </v-card>
    </div>
</template>

<script>
import {mapGetters} from 'vuex';
export default {
    data() {
        return {
            name: '',
            surname:'',
            age:null,
            profession:'',
            address:'',
            gender:["Female", "Male"],
            selectedGender:''
        }
    },
    computed: {
        ...mapGetters(["getCustomerInfo"]),
        
    },
    methods: {
        filterCustomerByName(){
            this.$store.dispatch("filterByName", this.name);
            this.name = "";
        },
        filterCustomerBySurname(){
            this.$store.dispatch("filterBySurname", this.surname)
            this.surname = "";
        },
        filterCustomerByProfession(){
            this.$store.dispatch("filterByProfession", this.profession);
            this.profession = "";
        },
        filterCustomerByGender(){
            this.$store.dispatch("filterByGender", this.selectedGender);
            this.selectedGender = "";
        },
        filterCustomerAge(){
            this.$store.dispatch("filterByAge", this.age);
            this.age = null;
        },
    },
}
</script>

<style>

</style>