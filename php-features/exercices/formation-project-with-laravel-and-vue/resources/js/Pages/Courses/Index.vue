<template>
    <app-layout>
        <template #header>
            <div class="flex justify-between px-2">
                <h1>Résumé des formations</h1>
                <inertia-link :href="route('course.new')">
                    <Button customStyle="text-sm">Nouvelle formation</Button>
                </inertia-link>
            </div>
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

                    <inertia-link :href="route('courses.show', course.id)">
                        <Button color="blue" customStyle="m-2 text-sm" defStyle="light">
                            Voir la formation
                        </Button>
                    </inertia-link>
                </div>
            </div>
    </app-layout>
</template>

<script>

import AppLayout from '../../Layouts/AppLayout'
import Button from '../Components/Form/Button'

export default {
    components: {
        AppLayout,
        Button
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
