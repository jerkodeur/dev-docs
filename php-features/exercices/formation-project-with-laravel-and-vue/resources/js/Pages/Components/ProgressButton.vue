<template>
    <div>
        <button
            class="bg-purple-50 text-xs px-2 hover:bg-purple-200 shadow-lg text-gray-600 font-serif m-2 rounded-md focus:outline-none outline-none"
            @click="toggleProgress()"
        >
            {{ this.isWatched ? " Terminé le " + this.date : 'Indiquer comme terminé'}}
        </button>
    </div>
</template>

<script>
export default {

    props: ['episode', 'watched'],

    data() {
        return {
        epWatched: this.watched,
        isWatched: false,
        updatedDate: null,
        epId: this.episode.id
        }
    },

    computed:{
        date(){
            return new Date(this.updatedDate).toLocaleString();
        }
    },

    methods: {
        toggleProgress() {
            axios.post('/courseProgress', {
                'episode': this.epId
            })
            .then(response => {
                this.epWatched = response.data
                return this.verifyIfWatched()
            })
            .catch(error => console.log(error))
        },
        verifyIfWatched () {
            const searchWatched = this.epWatched.filter(episode => episode.id === this.epId)
            if(searchWatched.length > 0){
                this.updatedDate = searchWatched[0].pivot.modified_at
                this.isWatched = true
            } else {
                this.isWatched = false
            }
        }
    },

    mounted() {
        this.verifyIfWatched();
    }
}
</script>
