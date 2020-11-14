<template>
    <app-layout>
        <template #header>
            <h1>Création d'une nouvelle formation</h1>
        </template>
        <div>
            <form action="" class="pb-5 m-auto text-center">
                <fieldset class="border-2 border-gray-300 p-5 mt-5 w-11/12 sm:w-10/12 lg:w-8/12 m-auto bg-gray-200 rounded shadow-md">
                    <legend class="px-2 text-sm text-gray-800 rounded bg-gray-100 border-2">Informations concernant la formation</legend>
                    <Input id='title' placeholder="Titre de la formation" label="Titre" />
                    <Textarea id='Description' placeholder="Description de la formation" label="Description" />
                    <fieldset class="border-2 border-gray-300 p-5 mt-5 w-full m-auto bg-gray-100 rounded shadow-md">
                        <legend class="px-2 text-sm text-gray-800 rounded bg-gray-100 border-2">Insérer des vidéos</legend>
                        <Input id="title" placeholder="Nom de la vidéo" label="nom"/>
                        <Textarea id="description" placeholder="Description de la vidéo" label="Description" />
                        <Input id="video_url" placeholder="url de la vidéo" label="Lien" />
                    </fieldset>
                    <Button color='gray' defStyle="dark" customStyle="mt-3" >Créer la formation !</Button>
                </fieldset>
            </form>
        </div>
    </app-layout>
</template>


<script>

import AppLayout from '../../Layouts/AppLayout'
import Input from '../Components/Form/Input'
import Button from '../Components/Form/Button'
import Textarea from '../Components/Form/Textarea'

export default {
    components: {
        AppLayout,
        Button,
        Input,
        Textarea
    }
}
</script>
