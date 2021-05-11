<template>
  <div>
    <v-card flat min-height="60vh" class="mb-10">
        <v-toolbar flat>
            <v-row align="center" class="d-flex justify-space-between">
                <v-toolbar-title class="ml-5">
                    Customer List
                <span class="font-weight-bold caption">
                    ({{getCustomerInfo ? getCustomerInfo.length : "0"}} Customers)
                </span>
                </v-toolbar-title>
                <v-card-title class="justify">
                    <v-text-field
                        v-model="search"
                        append-icon="mdi-magnify"
                        label="Search"
                        single-line
                        hide-details
                    ></v-text-field>
                </v-card-title>
            </v-row>
        </v-toolbar>
        <div>
            <v-data-table
                v-model="selected"
                :headers="headers"
                :items="getCustomerInfo"
                :search="search"
                :single-select="singleSelect"
                item-key="name"
                show-select
                @click:row="toggleBackground($event)"
                >
                <template slot="items" slot-scope="props">
                    <tr :class="{ bgRow: isActive }" class="bgRow">
                        <td>{{ props.item.name }}</td>
                        <td class="text-xs-right">{{ props.item.surname }}</td>
                        <td class="text-xs-right">{{ props.item.age }}</td>
                        <td class="text-xs-right">{{ props.item.gender }}</td>
                        <td class="text-xs-right">{{ props.item.profession }}</td>
                        <td class="text-xs-right">{{ props.item.address }}</td>
                    </tr>
                </template>
            </v-data-table>
        </div>
    </v-card>
</div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';
export default {
    data () {
        return {
            singleSelect: false,
            selected: [],
            isActive: false,
            search: '',
            headers: [
            {
                text: "Name",
                value: "name",
                align: "center",
                class:"table-txt"
            },
            {
                text: "Surname",
                value: "surname",
                align: "center",
                class:"table-txt"
            },
            {
                text: "Age",
                value: "age",
                align: "center",
                class:"table-txt"
            },
            {
                text: "Gender",
                value: "gender",
                align: "center",
                class:"table-txt"
            },
            {
                text: "Profession",
                value: "profession",
                align: "center",
                class:"table-txt"
            },
            {
                text: "Address",
                value: "address",
                align: "center",
                class:"table-txt"
            }
        ],
        listing: []
      }
    },
    methods:{
        ...mapActions(["fetchCustomerInfo"]),
        toggleBackground(item){
                // alert("item")
                item.isActive = !item.isActive
                console.log(item.isActive);                
        },
        row_classes(item) {
            console.log(item);
        if (this.selected) {
          return "bgRow"; //can also return multiple classes e.g ["orange","disabled"]
        } 
    }
    },
    computed: {
        ...mapGetters(["getCustomerInfo"]),
        
    },
    created() {
        this.fetchCustomerInfo()
    },
  }
</script>

<style>
/* .bgRow{
    background-color: rgb(35, 25, 185);
    color: white
} */
tr:hover {
    background-color: rgb(35, 25, 185) !important;
    color: white !important;
} 
.table-style:hover{
    background-color: white !;
} 
</style>