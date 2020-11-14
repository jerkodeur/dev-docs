<template>
    <app-layout>
        <template #header>
            Formation en cours -
            <span class="font-bold text-indigo-700">
                {{ course.title }}
            </span>
        </template>
        <section>
            <h1 class="text-xl py-1 text-center uppercase bg-indigo-50 shadow font-bold border-t-2 border-solid border-purple-200">{{ currentEpisode.title }}</h1>
            <div class="flex justify-center bg-indigo-50">
                <iframe class="video-display" :src="currentEpisode.video_url" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <article class="text-sm px-8 text-center py-1 bg-indigo-50 shadow border-b-2 border-solid border-purple-200">
                <div class="max-w-5xl m-auto mt-2">
                    {{ currentEpisode.description }}
                </div>
            </article>
        </section>
        <section class="flex items-center flex-col flex-wrap">
            <h2 class="text-center my-8 bg-purple-200 w-6/12 m-auto rounded shadow-lg p-2 text-lg font-bold cursor-pointer hover:bg-purple-400" @click="goToDown()">Découvrir les autres vidéos...</h2>
            <article
                v-for="(episode, currentKey) in this.episodeList"  v-bind:key="episode.id"
                class="border-solid border-gray-300 border-2 my-3 p-2 w-10/12 lg:w-8/12 bg-white rounded-lg shadow-md flex flex-col"
                >
                <div class="flex justify-between flex-wrap-reverse">
                    <div class="flex justify-start">
                        <h3 class="text-xl py-1 px-3">{{ currentKey+1 + '. ' + episode.title }}</h3>
                        <a @click="switchEpisode(currentKey)" class="hover:underline p-2 text-sm text-gray-500 hover:text-black" href="#">Voir la vidéo</a>
                    </div>
                    <progress-button :episode="episode" :watched="watched" />
                </div>
                <p class="text-sm text-gray-700 px-3">{{ episode.description }}</p>
            </article>
        </section>
    </app-layout>
</template>

<script>

import AppLayout from '../../Layouts/AppLayout'
import ProgressButton from '../Components/ProgressButton';

export default {
    components: {
        AppLayout,
        ProgressButton
    },

    props: ['course', 'watched'],

    data() {
        return {
            currentEpisode: this.course.episodes[0],
            episodeList: this.course.episodes
        }
    },
    methods: {
        switchEpisode(key){
            this.currentEpisode = this.course.episodes[key];

            return window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
            })
        },
        goToDown(){
            return window.scrollTo({
                top: 765,
                left: 0,
                behavior: 'smooth'
            })
        }
    },

    mounted(){
        console.log(this.course);
    }}
</script>
