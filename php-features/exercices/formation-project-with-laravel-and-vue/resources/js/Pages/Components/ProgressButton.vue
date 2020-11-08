<template>
    <div>
        <button
            class="bg-purple-50 text-sm rounded-lg m-2 px-3 py-1 border-dashed border-2 border-indigo-200 hover:bg-purple-200"
            @click="toggleProgress()"
        >
            {{ this.isWatched ? " Terminé le " + this.formatDate(this.isWatched.updated_at) : 'Pas terminé'}}
        </button>
    </div>
</template>

<script>
export default {

    props: ['episodeId', 'watched'],

    data() {
        return {
        epId: this.episodeId,
        epWatched: this.watched,
        isWatched: null
        }
    },

    methods: {
        toggleProgress() {
            axios.post('/courseProgress', {
                'episode': this.epId
            })
            .then(response => console.log('ok'))
            .catch(error => console.log(error))
        },
        formatDate(date) {
            const newDate = new Date(date)
            return newDate.toLocaleString()
        },
        verifyIfWatched () {
            return this.epWatched.filter(episode => episode.id === this.episodeId)
        }
    },

    mounted() {
        this.isWatched = this.verifyIfWatched()[0]
        console.log(this.isWatched, this.episodeId);
    }
}
</script>
