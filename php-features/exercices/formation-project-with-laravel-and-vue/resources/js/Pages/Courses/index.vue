<template>
    <app-layout>
        <template #header>
            Résumé des formations
        </template>
        <div
            v-for="course in this.courseList"  v-bind:key="course.id"
            class="p-3 border-solid border-gray-300 border-2 my-6 mx-3 bg-white rounded shadow"
            >
            <div class="flex justify-between items-center">
                <div class="text-xl">{{ course.title }}</div>
                <div class="text-xs text-gray-400">25 épisodes</div>
            </div>
            <article class="text-sm text-gray-700 mb-3">{{ course.description }}</article>
            <a href=""
                class="bg-indigo-700 text-white py-1 px-2 text-sm rounded uppercase
                hover:bg-indigo-200 hover:text-indigo-900 hover:font-bold">
                Voir la formation
            </a>
        </div>
    </app-layout>
</template>

<script>

import AppLayout from '../../Layouts/AppLayout'

export default {
    components: {
        AppLayout
    },

    props: ['courses'],

    data() {
        return {
            courseList: this.courses
        }
    },

    mounted(){
        console.log(this.courseList);
    }}
</script>
