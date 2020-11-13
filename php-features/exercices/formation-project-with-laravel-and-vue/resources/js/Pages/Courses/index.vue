<template>
    <app-layout>
        <template #header>
            Résumé des formations
        </template>
            <div class="flex flex-col items-center mt-3">
                <div
                    v-for="course in this.courseList"  v-bind:key="course.id"
                    class="border-solid border-gray-300 border-2 my-2 mx-3 bg-white rounded shadow w-11/12 sm:w-9/12"
                    >
                    <div class="flex justify-between w-full text-xs text-gray-500 bg-green-50 shadow py-1 mb-2 rounded-t pl-3">
                        <small>
                            Mis en ligne par <span class="font-bold">{{ course.user.name }}</span>
                        </small>
                        <small class="pr-3">
                            {{ course.participants }} participant<span v-if="course.participants > 1">s</span>
                        </small>
                    </div>
                    <div class="flex flex-col items-start md:flex-row p-3">
                        <div class="text-xl py-0">{{ course.title }}</div>
                        <div class="text-gray-400 md:ml-3 mt-2 md:mt-1 px-2 text-xs rounded-full bg-gray-50 border bg-gray-200 whitespace-no-wrap ">{{ course.episodes_count }} épisodes</div>
                    </div>
                    <article class="text-sm text-gray-700 px-3">{{ limitText(course.description, 250) }}</article>
                    <a :href="`course/${course.id}`"
                        class="bg-indigo-700 text-white py-1 px-2 text-sm rounded uppercase
                        hover:bg-indigo-200 hover:text-indigo-900 hover:font-bold inline-block m-3 ">
                        Voir la formation
                    </a>
                </div>
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

    methods: {
        limitText(text, limit){
            return text.slice(0, limit) + '...'
        }
    },

    mounted(){
        console.log(this.courseList);
    }}
</script>
