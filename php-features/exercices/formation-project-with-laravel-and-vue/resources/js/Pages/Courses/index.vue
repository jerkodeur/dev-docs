<template>
    <app-layout>
        <template #header>
            Résumé des formations
        </template>
        <div
            v-for="course in this.courseList"  v-bind:key="course.id"
            class="border-solid border-gray-300 border-2 my-6 mx-3 bg-white rounded shadow"
            >
            <div class="text-xs text-gray-500 text-center bg-green-50 shadow py-1 mb-2 rounded">Mis en ligne par {{ course.user.name }}</div>
            <div class="flex justify-between items-center p-3">
                <div class="text-xl py-0">{{ course.title }}</div>
                <div class="text-xs text-gray-400">{{ course.episodes_count }} épisodes</div>
            </div>
            <article class="text-sm text-gray-700 px-3">{{ course.description }}</article>
            <a :href="`course/${course.id}`"
                class="bg-indigo-700 text-white py-1 px-2 text-sm rounded uppercase
                hover:bg-indigo-200 hover:text-indigo-900 hover:font-bold inline-block m-3">
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
            courseList: this.courses,
        }
    },

    mounted(){
        console.log(this.courseList);
    }}
</script>
